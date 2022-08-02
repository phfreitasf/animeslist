import { Component, DoCheck, OnInit } from '@angular/core';
import { ApiQueryService } from 'src/app/services/api-query.service';
import { forkJoin } from 'rxjs'
import { Anime } from 'src/app/components/shared/search-results/anime-item/model/anime';


@Component({
  selector: 'app-anime-list',
  templateUrl: './anime-list.component.html',
  styleUrls: ['./anime-list.component.css']
})
export class AnimeListComponent implements OnInit, DoCheck {

  //Envia array para o carousel da temporada, 
  //a api tem limite  de requisicao muito baixo entao vou mandar só segunda pelo pai
  animeCarousel: Array<Anime> = []
  
  getSeasonAnimes(dayOfTheWeek:string) {
    forkJoin({
      animeMonday: this.anime.getSeasonAnimes(dayOfTheWeek),
    })
      .subscribe(res => {
        this.animeCarousel = res.animeMonday.data
                          .filter(this.filterKids);
      })
  }

  filterKids(anime: Anime) {
    try {
      if (anime.demographics[0].name == 'Kids') return false
      else return true
    }
    catch {}
    return true
  }

  //Envia array para top animes
  animesTop: Array<Anime> = []
  getTopAnimes() {
    forkJoin({
      animes: this.anime.getTopAnimes()
    })
      .subscribe(res => this.animesTop = res.animes.data)
  }

  constructor(private anime: ApiQueryService) { }

  ngOnInit(): void {
    this.getSeasonAnimes('Monday')
    this.getTopAnimes()
  }

  ngDoCheck(): void {

  }

}
