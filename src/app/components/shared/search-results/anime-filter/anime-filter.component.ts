import { Component, EventEmitter, OnInit, Output} from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-anime-filter',
  templateUrl: './anime-filter.component.html',
  styleUrls: ['./anime-filter.component.css']
})
export class AnimeFilterComponent implements OnInit {
  
  @Output() animeFilter = new EventEmitter()
  nfsw : boolean = false
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  sendAnimeFilter(animeName:string) : void {
    this.animeFilter.emit(animeName)
  }

  searchAnimes(animeName:string,nfsw:boolean) : void {
    if(nfsw) this.router.navigateByUrl(`/results/${animeName}&nsfw`)
    else this.router.navigateByUrl(`/results/${animeName}&sfw`)
  }

  setNfsw(event:any) {
    this.nfsw = event.target.checked
  }
}
