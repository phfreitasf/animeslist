import { AfterViewInit, Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { OwlOptions } from 'ngx-owl-carousel-o';
import { Anime } from 'src/app/components/shared/search-results/anime-item/model/anime';


@Component({
  selector: 'app-animes-carousel',
  templateUrl: './animes-carousel.component.html',
  styleUrls: ['./animes-carousel.component.css']
})
export class AnimesCarouselComponent implements OnInit, AfterViewInit, OnChanges {

  @Input() activeCarousel: Array<Anime> = []

  //passar true no pai para definir como carousel de top temporada
  @Input() topCarousel = false
  @Input() animesTop!: Array<Anime>

  // trocar dia da carousel
  @Output() day = new EventEmitter<string>()
  changeDay(day: string) {
    this.day.emit(day)
  }


  //animes do navbar
  @Input() animeList: Array<Anime> = []
  @Input() navDays = false
  days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Unknown", "Other"]
  //fim navbar


  @Input() labelCarousel: string = 'Carousel label'
  @Input() loop = false
  @Input() separador = false
  @Input() autoplay = false

  placeholder = true
  activeIndex: number = 0

  labelSplit: Array<string> = []


  constructor(private translateService : TranslateService) {
    this.translateService.setDefaultLang('en')
    this.translateService.use(localStorage.getItem('lang') || 'en')
   }
  ngOnChanges() {
    if (this.topCarousel === true) { this.activeCarousel = this.animesTop }

    if (this.topCarousel === false) {
      this.activeCarousel = this.animeList
    }
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.labelSplit = this.labelCarousel.split(' ')
    this.labelCarousel = `${this.labelSplit[0]}<span class="text-color-skin">${this.labelSplit[1]}</span>`
    this.placeholder = false
    this.customOptions.loop = this.loop
    this.customOptions.autoplay = this.autoplay
  }

  setActiveButtonIndex(i: any) {
    this.activeIndex = i
  }

  // Opções Owl Carousel
  customOptions: OwlOptions = {
    loop: false,
    lazyLoad: true,
    
    autoplay: false,
    autoplayTimeout: 3000,
    autoplayHoverPause: true,
    margin: 10,
    center:false,
    mouseDrag: true,
    freeDrag: true,
    touchDrag: true,
    pullDrag:false,
    dots: false,
    items: 2,
    nav: true,
    rewind:true,
    navSpeed: 200,
    navText: ['<i class="fa fa-angle-left" aria-hidden="true"></i>',
      '<i class="fa fa-angle-right" aria-hidden="true"></i>'],

    responsive: {
      0: {
        items: 2
      },
      480: {
        items: 3,
      },

      678: {
        items: 4,
        center: true,
      },

      960: {
        items: 6,
      },

      1200: {
        items: 6,
        margin: 20
      }
    }
  };


}
