import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiQueryService {

  apiUrl = 'https://api.jikan.moe/v4/'
  constructor(private http: HttpClient) { }

  getAnimes(page:any) : Observable<any>{
    return this.http.get<any>(`${this.apiUrl}anime?page=${page}`)
  }

  filterAnimes(animeName:string) : Observable<any> {
    return this.http.get<any>(`${this.apiUrl}anime?q=${animeName}&nsfw&order_by=episodes&sort=desc`)
  }

  getAnimeById(id:string) : Observable<any> {
    return this.http.get<any>(`${this.apiUrl}anime/${id}`)
  }

  getSeasonAnimes(page:any) : Observable<any> {
    return this.http.get<any>(`${this.apiUrl}seasons/now?page=${page}`)
  }

  getTopAnimes() : Observable<any> {
    return this.http.get<any>(`${this.apiUrl}top/anime?filter=airing`)
  }

}
