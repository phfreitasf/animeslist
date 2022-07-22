import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiQueryService } from 'src/app/services/api-query.service';
import { Anime } from '../anime-item/model/anime';

@Component({
  selector: 'app-anime-info',
  templateUrl: './anime-info.component.html',
  styleUrls: ['./anime-info.component.css']
})
export class AnimeInfoComponent implements OnInit {

  id!: string
  singleAnime!: Anime

  constructor(private anime: ApiQueryService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id']
    this.getAnimeById(this.id)
  }

  getAnimeById(id: string) {
    this.anime.getAnimeById(id).subscribe(result => this.singleAnime = result.data)
  }


}
