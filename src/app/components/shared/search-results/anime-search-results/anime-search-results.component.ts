import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Links } from 'src/app/components/core/main-page/anime-list/model/Pagination';
import { ApiQueryService } from 'src/app/services/api-query.service';
import { Anime } from '../anime-item/model/anime';
import { lastValueFrom } from 'rxjs';


@Component({
  selector: 'app-anime-search-results',
  templateUrl: './anime-search-results.component.html',
  styleUrls: ['./anime-search-results.component.css']
})
export class AnimeSearchResultsComponent implements OnInit {
  activeIndex: number = 0
  placeholder = true
  animesSearch: string = ''
  result: any
  animes: Array<Anime> = []
  meta: Array<Links> = []

  constructor(private anime: ApiQueryService, private router: Router, private route: ActivatedRoute) {
    this.router.routeReuseStrategy.shouldReuseRoute = () => false;
  }

  ngOnInit(): void {
    this.animesSearch = '' + this.route.snapshot.paramMap.get('name');
    this.filterAnimes(this.animesSearch, '1')
  }


  async filterAnimes(animesSearch: string, page: any) {
    this.result = await lastValueFrom(this.anime.filterAnimes(animesSearch, page)).catch((err) => {
      console.log(err);
    });
    this.animes = this.result.data
    // 
    await this.createPagination(animesSearch, page)
    this.placeholder = false
  }

  async createPagination(animesSearch: string, page: any) {
    this.result = await lastValueFrom(this.anime.filterAnimes(animesSearch, page)).catch((err) => {
      console.log(err);
    });
    this.meta = this.result.meta.links
    this.meta = this.meta.filter((value: any) => this.filterPagination(value))
  }

  setActiveButtonIndex(i: any) {
    this.activeIndex = i
    console.log(this.activeIndex)
  }

  filterPagination(value: any) {
    if (value.label == 'pagination.previous' || value.label == 'pagination.next') { }
    else return value
  }
}
