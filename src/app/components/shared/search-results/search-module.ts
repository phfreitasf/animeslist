import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimeItemComponent } from './anime-item/anime-item.component';
import { AnimeSearchResultsComponent } from './anime-search-results/anime-search-results.component';
import { AppRoutingModule } from '../../../app-routing.module';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';


@NgModule({
  declarations: [
    AnimeItemComponent,
    AnimeSearchResultsComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    NgxSkeletonLoaderModule
  ]
})
export class SearchModule { }
