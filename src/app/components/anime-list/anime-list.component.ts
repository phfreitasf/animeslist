import { Component, DoCheck, Input, OnInit } from '@angular/core';
import { ApiQueryService } from 'src/app/services/api-query.service';
import { Anime } from '../anime-item/model/anime';
import { Pagination } from './model/Pagination';

@Component({
  selector: 'app-anime-list',
  templateUrl: './anime-list.component.html',
  styleUrls: ['./anime-list.component.css']
})
export class AnimeListComponent implements OnInit, DoCheck {

  meta: Array<Pagination> = []
  animes: Array<Anime> = []
  pagination = []

  constructor(private anime: ApiQueryService) { }

  ngOnInit(): void {
    this.getAnimes(1)
  }
  
  ngDoCheck(): void {
    
   }

  log() {
    console.log(this.meta)
  }
  getAnimes(page:any) {
    this.anime.getAnimes(page).subscribe(result => this.animes = result.data)
    this.anime.getAnimes(page).subscribe(result => this.meta = result.meta.links)
  }

  filterAnimes(animeName:string) {
    this.anime.filterAnimes(animeName).subscribe(result => this.animes = result.data)
    this.anime.filterAnimes(animeName).subscribe(result => this.meta = result.meta.links)
  }
  

}
