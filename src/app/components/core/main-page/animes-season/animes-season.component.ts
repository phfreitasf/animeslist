import { AfterViewInit, Component, OnInit } from '@angular/core';
import { ApiQueryService } from 'src/app/services/api-query.service';
import { Anime } from '../anime-item/model/anime';
import { OwlOptions } from 'ngx-owl-carousel-o';


@Component({
  selector: 'app-animes-season',
  templateUrl: './animes-season.component.html',
  styleUrls: ['./animes-season.component.css']
})
export class AnimesSeasonComponent implements OnInit, AfterViewInit {
  customOptions: OwlOptions = {
    loop: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
        0: {
            items: 2,
        },
        740: {
            items: 3,
        },
        940: {
            items: 3,
        },

    },
    nav: false,
};

  seasonAnimes: Array<Anime> = []

  constructor(private anime:ApiQueryService) { }

  ngOnInit(): void {
    this.getSeasonAnimes()

  }
  
  ngAfterViewInit(): void {
    
  }

log() {
  console.log(this.seasonAnimes)
}


  getSeasonAnimes() {
    this.anime.getSeasonAnimes().subscribe( res => this.seasonAnimes = res.data)
  }
}
