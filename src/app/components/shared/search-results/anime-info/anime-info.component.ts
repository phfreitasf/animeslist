import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { lastValueFrom, single } from 'rxjs';
import { Anime } from '../anime-item/model/anime';


import { ApiQueryService } from 'src/app/services/api-query.service';
import { GoogleTranslateService } from 'src/app/services/google-translate.service';
import { TranslateService } from '@ngx-translate/core';




@Component({
  selector: 'app-anime-info',
  templateUrl: './anime-info.component.html',
  styleUrls: ['./anime-info.component.css']
})
export class AnimeInfoComponent implements OnInit {

  id!: string
  singleAnime!: Anime
  currentTitle: string = ''
  arrayTitles : Array<string> = []
  placeholder = true
  result: any
  synopsisPt = {
    q: '',
    target: 'pt'
  }
  ratingPt = {
    q: '',
    target: 'pt'
  }
  constructor(private anime: ApiQueryService, private translate: GoogleTranslateService, private route: ActivatedRoute, private translateService: TranslateService) {
    this.translateService.setDefaultLang('en')
    this.translateService.use(localStorage.getItem('lang') || 'en')
  }

  async ngOnInit() {
    this.id = this.route.snapshot.params['id']
    await this.getAnimeById(this.id)
    if (localStorage.getItem('lang') == 'pt') {
      await this.translateSynopsis(this.synopsisPt)
      await this.translateRating(this.ratingPt)
    }
    this.placeholder = false
  }

  async getAnimeById(id: string) {
    await lastValueFrom(this.anime.getAnimeById(id)).then(result => {
      this.singleAnime = result.data
      this.synopsisPt.q = result.data.synopsis
      this.ratingPt.q = result.data.rating
      this.currentTitle = result.data.title

      this.arrayTitles.push(result.data.title,result.data.title_english,result.data.title_japanese)
    })
  }

  changeTitle(title:string) {
    do{
      this.currentTitle = this.arrayTitles[Math.floor(Math.random() * this.arrayTitles.length)]
    }while(this.currentTitle == title)
  }

  goToCrunchyRoll(animeName: string) {
    window.open(`https://crunchyroll.com/pt-br/search?q=${animeName}`, '_blank')
  }
  goToFunimation(animeName: string) {
    window.open(`https://www.funimation.com/pt-br/search/?q=${animeName}`, '_blank')
  }

  async translateSynopsis(object: any) {
    try {
      await lastValueFrom(this.translate.translateText(object)).then(result => {
        this.singleAnime.synopsis = result.data.translations[0].translatedText
        this.singleAnime.synopsis = this.singleAnime.synopsis.replaceAll('&quot;', '"')
      })

    }
    catch (exception) { console.log(exception) }
  }

  async translateRating(object: any) {
    try {
      await lastValueFrom(this.translate.translateText(object)).then(result => {
        this.singleAnime.rating = result.data.translations[0].translatedText
      })
    }
    catch (exception) { console.log(exception) }
  }
}
