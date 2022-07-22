import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimeListComponent } from './components/core/main-page/anime-list/anime-list.component';
import { AnimeInfoComponent } from './components/shared/anime-info/anime-info.component';


const routes: Routes = [{
  path: '', component : AnimeListComponent
},
{ path: 'anime/:id', component: AnimeInfoComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
