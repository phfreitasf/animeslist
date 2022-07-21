import { Component, EventEmitter, OnInit, Output, ViewChild, ViewChildren } from '@angular/core';

@Component({
  selector: 'app-anime-filter',
  templateUrl: './anime-filter.component.html',
  styleUrls: ['./anime-filter.component.css']
})
export class AnimeFilterComponent implements OnInit {

  @Output() animeFilter = new EventEmitter()
  constructor() { }

  ngOnInit(): void {
  }

  sendAnimeFilter(animeName:string) : void {
    console.log(animeName)
    this.animeFilter.emit(animeName)
  }
}
