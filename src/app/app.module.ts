import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient, HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'

import { HeaderComponent } from './components/shared/header/header.component';
import { MainPageModule } from './components/core/main-page/main-page.module';
import { SearchModule } from './components/shared/search-results/search-module';
import { FooterComponent } from './components/shared/footer/footer.component';

import { ApiQueryService } from './services/api-query.service';
import { GoogleTranslateService } from './services/google-translate.service';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { Page404Component } from './components/core/404/page404/page404.component';
import { ReactiveFormsModule } from '@angular/forms';


export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http)
}

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    Page404Component,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MainPageModule,
    SearchModule,
    ReactiveFormsModule
  ],
  providers: [ApiQueryService, GoogleTranslateService],
  bootstrap: [AppComponent]
})
export class AppModule {


}
