import { Component, Input, OnInit } from '@angular/core';
import { Anime } from './model/anime';


@Component({
  selector: 'app-anime-item',
  templateUrl: './anime-item.component.html',
  styleUrls: ['./anime-item.component.css']
})
export class AnimeItemComponent implements OnInit {

  @Input() anime!: Anime
 
  constructor() { }

  ngOnInit(): void {

  }

  emitAnime(id: any) {

  }

}
