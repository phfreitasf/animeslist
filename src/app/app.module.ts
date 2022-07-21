import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { AnimeItemComponent } from './components/anime-item/anime-item.component';
import { AnimeListComponent } from './components/anime-list/anime-list.component';
import { FooterComponent } from './components/footer/footer.component';
import { AnimeFilterComponent } from './components/anime-filter/anime-filter.component';
import { AnimeInfoComponent } from './components/anime-info/anime-info.component';
import { ApiQueryService } from './services/api-query.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AnimeItemComponent,
    AnimeListComponent,
    FooterComponent,
    AnimeFilterComponent,
    AnimeInfoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [ApiQueryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
