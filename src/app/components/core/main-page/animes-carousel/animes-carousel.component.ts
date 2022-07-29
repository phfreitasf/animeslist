import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Anime } from 'src/app/components/shared/search-results/anime-item/model/anime';


@Component({
  selector: 'app-animes-carousel',
  templateUrl: './animes-carousel.component.html',
  styleUrls: ['./animes-carousel.component.css']
})
export class AnimesCarouselComponent implements OnInit, AfterViewInit {

  @Input() animeList: Array<Anime> = []
  @Input() labelCarousel: string = 'Carousel label'
  @Input() loop = false
  @Input() separador = false
  placeholder = true

 
  constructor() { }

  ngOnInit(): void { 
  }

  ngAfterViewInit(): void {
    this.placeholder = false
    this.customOptions.loop = this.loop
  }


  // Opções Owl Carousel
  customOptions: OwlOptions = {
    loop: true,
    margin: 10,
    mouseDrag: true,
    touchDrag: true,
    dots: false,
    items: 5,
    navSpeed: 800,
    navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>',
        '<i class="fa fa-angle-right" aria-hidden="true"></i>'],
    nav: true,
    
    responsive: {
      0: {
        items: 2
      },
      480: {
        items: 3, // from 480 to 677 
        nav: false
      },

      678: {
        items: 4,
        center: true
      },

      960: {
        items: 5,
        margin: 20,
        center: false
      },

      1200: {
        items: 10,
        loop: false,
        margin: 30,
      }
    }
  };


}
