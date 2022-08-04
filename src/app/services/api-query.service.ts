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

  filterAnimes(animeName:string, page:string) : Observable<any> {
    return this.http.get<any>(`${this.apiUrl}anime?q=${animeName}&page=${page}`)
  }

  getAnimeById(id:string) : Observable<any> {
    return this.http.get<any>(`${this.apiUrl}anime/${id}/full`)
  }

  getSeasonAnimes(day:string) : Observable<any> {
    return this.http.get<any>(`${this.apiUrl}schedules?filter=${day}&kids=true&sfw=true`)
  }

  getTopAnimes() : Observable<any> {
    return this.http.get<any>(`${this.apiUrl}top/anime?filter=airing`)
  }

}
