import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimeFilterComponent } from './anime-filter/anime-filter.component';
import { AnimeItemComponent } from './anime-item/anime-item.component';
import { AnimeListComponent } from './anime-list/anime-list.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { AnimesSeasonComponent } from './animes-season/animes-season.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { CarouselModule } from 'ngx-owl-carousel-o';


@NgModule({
  declarations: [
    AnimeFilterComponent,
    AnimeItemComponent,
    AnimeListComponent,
    AnimesSeasonComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CarouselModule
  ],
  
})
export class MainPageModule { }
