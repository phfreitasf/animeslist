import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  defaultLang = 'en'
  constructor() { }

  ngOnInit(): void {
    if (localStorage.getItem('lang') == null) localStorage.setItem('lang', this.defaultLang)
  }

  changeLang(lang:string) {
    localStorage.setItem('lang', lang)
    window.location.reload()
  }
}
