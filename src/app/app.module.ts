import { NgModule, ViewChild } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';

import { FooterComponent } from './components/shared/footer/footer.component';

import { ApiQueryService } from './services/api-query.service';
import { MainPageModule } from './components/core/main-page/main-page.module';
import { SearchModule } from './components/shared/search-results/search-module';
import { AnimeFilterComponent } from './components/core/main-page/anime-filter/anime-filter.component';





@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AnimeFilterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MainPageModule,
    SearchModule
  ],
  providers: [ApiQueryService],
  bootstrap: [AppComponent]
})
export class AppModule {


 }
