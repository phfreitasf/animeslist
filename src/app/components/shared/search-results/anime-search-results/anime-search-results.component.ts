import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { forkJoin } from 'rxjs';
import { Pagination } from 'src/app/components/core/main-page/anime-list/model/Pagination';
import { ApiQueryService } from 'src/app/services/api-query.service';
import { Anime } from '../anime-item/model/anime';



@Component({
  selector: 'app-anime-search-results',
  templateUrl: './anime-search-results.component.html',
  styleUrls: ['./anime-search-results.component.css']
})
export class AnimeSearchResultsComponent implements OnInit {
  
  placeholder = true
  animesSearch : string = ''
  animes: Array<Anime> = []
  meta: Array<Pagination> = []
  pages: Array<Pagination> = []
  pagination = []

  constructor(private anime: ApiQueryService,  private router: Router, private route: ActivatedRoute) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
   }

  ngOnInit(): void {
    this.animesSearch = ''+this.route.snapshot.paramMap.get('name');
    this.filterAnimes(this.animesSearch)
  }


  filterAnimes(animesSearch:string) {
    forkJoin({
      animes: this.anime.filterAnimes(animesSearch),
      meta: this.anime.filterAnimes(animesSearch)
    })
      .subscribe(result => {
        this.animes = result.animes.data;
        this.meta = result.meta.meta
        this.placeholder = false
      })
      console.log('chegou 2')
    this.pages = this.meta.filter(value => this.filterPagination(value))
  }



  filterPagination(value: any) {
    setTimeout(() => {
      if (value.label == 'pagination.previous' || value.label == 'pagination.next') { }
      else return value

    }, 1000);
  }
}
