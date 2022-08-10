import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page404Component } from './components/core/404/page404/page404.component';

import { AnimeListComponent } from './components/core/main-page/anime-list/anime-list.component';
import { AnimeInfoComponent } from './components/shared/search-results/anime-info/anime-info.component';
import { AnimeSearchResultsComponent } from './components/shared/search-results/anime-search-results/anime-search-results.component';



const routes: Routes = [{
  path: '', component: AnimeListComponent
},
{ path: 'anime/:id', component: AnimeInfoComponent },
{
  path: 'results/:name', component: AnimeSearchResultsComponent
},
{
  path: '**', component: Page404Component
}];

@NgModule({
  imports: [RouterModule.forRoot(routes, { scrollPositionRestoration: 'enabled' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
