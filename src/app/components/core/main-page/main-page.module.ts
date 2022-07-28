import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimeListComponent } from './anime-list/anime-list.component';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { AnimesCarouselComponent } from './animes-carousel/animes-carousel.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { CarouselModule } from 'ngx-owl-carousel-o';
import { NgxSkeletonLoaderModule } from 'ngx-skeleton-loader';


@NgModule({
  declarations: [
    AnimeListComponent,
    AnimesCarouselComponent,
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CarouselModule,
    NgxSkeletonLoaderModule
  ],
  
})
export class MainPageModule { }
