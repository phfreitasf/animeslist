import { Component, OnInit } from '@angular/core';
import { ApiQueryService } from 'src/app/services/api-query.service';
import { lastValueFrom } from 'rxjs'
import { Anime } from 'src/app/components/shared/search-results/anime-item/model/anime';


@Component({
  selector: 'app-anime-list',
  templateUrl: './anime-list.component.html',
  styleUrls: ['./anime-list.component.css']
})
export class AnimeListComponent implements OnInit {

  //Envia array para o carousel da temporada, 
  //a api tem limite  de requisicao muito baixo entao vou mandar só segunda pelo pai
  animeCarousel: Array<Anime> = []

  async getSeasonAnimes(dayOfTheWeek: string) {

    await lastValueFrom(this.anime.getSeasonAnimes(dayOfTheWeek))
      .then(res => {
        this.animeCarousel = res.data
      })
      .finally(() => this.animeCarousel = this.animeCarousel.filter(this.filterKids))
  }

  //remover animes infantis que aparecem
  filterKids(anime: Anime) {
    try {
      if (anime.demographics[0].name == 'Kids') return false
      else return true
    }
    catch(exception) { console.log(exception) }
    return true
  }

  //Envia array para top animes
  animesTop: Array<Anime> = []
  async getTopAnimes() {
     await lastValueFrom(this.anime.getTopAnimes()).then(res => this.animesTop = res.data)
  }

  constructor(private anime: ApiQueryService) { }

  async ngOnInit() {
    await this.getSeasonAnimes('Monday')
    await this.getTopAnimes()
  }


}
