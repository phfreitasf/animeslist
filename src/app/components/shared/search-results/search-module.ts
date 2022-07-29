import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimeItemComponent } from './anime-item/anime-item.component';
import { AnimeSearchResultsComponent } from './anime-search-results/anime-search-results.component';
import { AppRoutingModule } from '../../../app-routing.module';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { AnimeFilterComponent } from '../../core/main-page/anime-filter/anime-filter.component';
import { AnimeInfoComponent } from './anime-info/anime-info.component';


@NgModule({
  declarations: [
    AnimeItemComponent,
    AnimeSearchResultsComponent,
    AnimeFilterComponent,
    AnimeInfoComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    NgxSkeletonLoaderModule
  ],
  exports: [
    AnimeFilterComponent
  ]
})
export class SearchModule { }
