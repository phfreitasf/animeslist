import { Component, DoCheck, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiQueryService } from 'src/app/services/api-query.service';
import { __values } from 'tslib';
import { Anime } from '../anime-item/model/anime';
import { Pagination } from './model/Pagination';
import { forkJoin } from 'rxjs'


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

  meta: Array<Pagination> = []
  pages: Array<Pagination> = []
  animes: Array<Anime> = []
  // animes: any
  pagination = []

  constructor(private anime: ApiQueryService) { }

  ngOnInit(): void {
    this.getSeasonAnimes()
    this.getTopAnimes()
  }

  ngDoCheck(): void {

  }

  getAnimes(page: any) {
    forkJoin({
      animes: this.anime.getAnimes(page)
    })
      .subscribe(result => this.meta = result.animes)

    this.pages = this.meta.filter(value => this.filterPagination(value))

  }

  filterAnimes(animeName: string) {
    forkJoin({
      animes: this.anime.filterAnimes(animeName),
      meta: this.anime.filterAnimes(animeName)
    })
      .subscribe(result => {
        this.animes = result.animes.data;
        this.meta = result.meta.meta
      })
    // .subscribe(result => this.meta = result)
    this.pages = this.meta.filter(value => this.filterPagination(value))
  }



  filterPagination(value: any) {
    setTimeout(() => {
      if (value.label == 'pagination.previous' || value.label == 'pagination.next') { }
      else return value

    }, 1000);
  }
}
