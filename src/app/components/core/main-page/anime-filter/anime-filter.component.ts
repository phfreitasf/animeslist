import { Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-anime-filter',
  templateUrl: './anime-filter.component.html',
  styleUrls: ['./anime-filter.component.css']
})
export class AnimeFilterComponent implements OnInit {

  @Output() animeFilter = new EventEmitter()
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  sendAnimeFilter(animeName:string) : void {
    this.animeFilter.emit(animeName)
  }

  searchAnimes(animeName:string) : void {
    this.router.navigateByUrl(`/results/${animeName}`)
  }

}
