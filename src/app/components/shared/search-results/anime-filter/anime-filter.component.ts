import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-anime-filter',
  templateUrl: './anime-filter.component.html',
  styleUrls: ['./anime-filter.component.css']
})
export class AnimeFilterComponent implements OnInit {
  
  nfsw : boolean = false
  constructor(private router: Router ,private translateService : TranslateService) {
    this.translateService.setDefaultLang('en')
    this.translateService.use(localStorage.getItem('lang') || 'en')
   }

  ngOnInit(): void {
  }

  searchAnimes(animeName:string,nfsw:boolean) : void {
    if(nfsw) this.router.navigateByUrl(`/results/${animeName}&nsfw`)
    else this.router.navigateByUrl(`/results/${animeName}&sfw`)
  }

  setNfsw(event:any) {
    this.nfsw = event.target.checked
  }
}
