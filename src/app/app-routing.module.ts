import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimeInfoComponent } from './components/anime-info/anime-info.component';
import { AnimeListComponent } from './components/anime-list/anime-list.component';

const routes: Routes = [{
  path: '', component : AnimeListComponent
},
{ path: 'anime/:id', component: AnimeInfoComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
