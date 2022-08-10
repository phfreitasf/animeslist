import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { lastValueFrom } from 'rxjs';
import { Anime } from '../anime-item/model/anime';


import { ApiQueryService } from 'src/app/services/api-query.service';
import { GoogleTranslateService } from 'src/app/services/google-translate.service';
import { TranslateService } from '@ngx-translate/core';
import { ModalImagesComponent } from '../modal-images/modal-images.component';
import { MdbModalRef, MdbModalService } from 'mdb-angular-ui-kit/modal';




@Component({
  selector: 'app-anime-info',
  templateUrl: './anime-info.component.html',
  styleUrls: ['./anime-info.component.css']
})
export class AnimeInfoComponent implements OnInit {

  modalRef: MdbModalRef<ModalImagesComponent> | null = null
  id!: string
  singleAnime!: Anime
  currentTitle: string = ''
  arrayTitles: Array<string> = []
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
  constructor(private anime: ApiQueryService, //injecao api JIKAN ANIMES
    private translate: GoogleTranslateService, // API translate google
    private route: ActivatedRoute,
    private translateService: TranslateService,
    private redirectRoute: Router,
    private modalService: MdbModalService) {

    this.translateService.setDefaultLang('en') //idioma padrao ao abrir a pagina pela primeira vez
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


  //consulta anime selecionado
  async getAnimeById(id: string) {
    await lastValueFrom(this.anime.getAnimeById(id)).then(result => {
      this.singleAnime = result.data
      this.synopsisPt.q = result.data.synopsis
      this.ratingPt.q = result.data.rating
      this.currentTitle = result.data.title

      this.arrayTitles.push(result.data.title, result.data.title_english, result.data.title_japanese)
    }).catch(() => this.redirectRoute.navigate(['404']))
  }


  //funcao para alterar entre as variacoes do nome do anime
  changeTitle(title: string) {
    if (this.arrayTitles[this.arrayTitles.indexOf(title) + 1] != null) { this.currentTitle = this.arrayTitles[this.arrayTitles.indexOf(title) + 1] }
    else this.currentTitle = this.arrayTitles[0]
  }

  //funcoes dos botoes de pesquisa
  goToCrunchyRoll(animeName: string) {
    window.open(`https://crunchyroll.com/pt-br/search?q=${animeName}`, '_blank')
  }
  goToFunimation(animeName: string) {
    window.open(`https://www.funimation.com/pt-br/search/?q=${animeName}`, '_blank')
  }


  //funcao consumindo api google translate para traduzir o texto da sinopse
  async translateSynopsis(object: any) {
    try {
      if(!localStorage.getItem(this.singleAnime.mal_id)){

        await lastValueFrom(this.translate.translateText(object)).then(result => {
          this.singleAnime.synopsis = result.data.translations[0].translatedText
          this.singleAnime.synopsis = this.singleAnime.synopsis.replaceAll('&quot;', '"')
          localStorage.setItem(this.singleAnime.mal_id,this.singleAnime.synopsis)
          console.warn('Sinopse salva no localStorage para economizar dados da API')
        })
      }
      else {
        console.warn('Sinopse encontrada no localStorage do navegador')
        this.singleAnime.synopsis = localStorage.getItem(this.singleAnime.mal_id) || ''
      } 
        
    }
    catch (exception) { console.log(exception) }
  }

  // traduzir o classificacao de idade
  async translateRating(object: any) {
    try {
      if(!localStorage.getItem(this.singleAnime.rating))
      {
        await lastValueFrom(this.translate.translateText(object)).then(result => {
          localStorage.setItem(this.singleAnime.rating,result.data.translations[0].translatedText)
          this.singleAnime.rating = result.data.translations[0].translatedText
          console.warn('Classificacao salva no localStorage para economizar dados da API')
        })
      }
      else {
        console.warn('Classificacao encontrada no localStorage do navegador')
        this.singleAnime.rating = localStorage.getItem(this.singleAnime.rating) || ''
      }
    }
    catch (exception) { console.log(exception) }
  }


  //abrir o modal de imagens
  async openModal() {
    let data
    await lastValueFrom(this.anime.getAllAnimeImgs(this.id)).then(result => {
      data = result.data
    })
    this.modalRef = this.modalService.open(ModalImagesComponent, {
      data: {
        anime: data
      },
      modalClass: 'modal-xl bg-dark',
      
    },)
    console.log(data)
  }
}
