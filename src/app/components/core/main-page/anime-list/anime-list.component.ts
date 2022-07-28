import { Component, DoCheck, Input, OnInit } from '@angular/core';
import { ApiQueryService } from 'src/app/services/api-query.service';
// import { __values } from 'tslib';
import { forkJoin } from 'rxjs'
import { Anime } from 'src/app/components/shared/search-results/anime-item/model/anime';


@Component({
  selector: 'app-anime-list',
  templateUrl: './anime-list.component.html',
  styleUrls: ['./anime-list.component.css']
})
export class AnimeListComponent implements OnInit, DoCheck {

  //Envia array para o carousel da temporada
  animesSeason: Array<Anime> = []
  getSeasonAnimes() {
    forkJoin({
      animes: this.anime.getSeasonAnimes(1)
    })
      .subscribe(res => this.animesSeason = res.animes.data)
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
    this.getSeasonAnimes()
    this.getTopAnimes()
  }

  ngDoCheck(): void {

  }

  // getAnimes(page: any) {
  //   forkJoin({
  //     animes: this.anime.getAnimes(page)
  //   })
  //     .subscribe(result => this.meta = result.animes)
  //   this.pages = this.meta.filter(value => this.filterPagination(value))
  // }

}
