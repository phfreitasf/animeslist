import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimeItemComponent } from './anime-item/anime-item.component';
import { AnimeSearchResultsComponent } from './anime-search-results/anime-search-results.component';
import { AppRoutingModule } from '../../../app-routing.module';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';
import { AnimeFilterComponent } from './anime-filter/anime-filter.component';
import { AnimeInfoComponent } from './anime-info/anime-info.component';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { HttpLoaderFactory } from 'src/app/app.module';
import { HttpClient } from '@angular/common/http';
import { ModalImagesComponent } from './modal-images/modal-images.component';
import { MdbModalModule } from 'mdb-angular-ui-kit/modal';


@NgModule({
  declarations: [
    AnimeItemComponent,
    AnimeSearchResultsComponent,
    AnimeFilterComponent,
    AnimeInfoComponent,
    ModalImagesComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    NgxSkeletonLoaderModule,
    MdbModalModule,
    TranslateModule.forChild({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })  
  ],
  exports: [
    AnimeFilterComponent
  ]
})
export class SearchModule { }
