import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiQueryService {

  apiUrl = 'https://api.jikan.moe/v4/'
  constructor(private http: HttpClient) { }

  // Consulta todos os animes, nao esta em uso
  // getAnimes(page:any) : Observable<any>{
  //   return this.http.get<any>(`${this.apiUrl}anime?page=${page}`)
  // }

  // Resultados da barra de pesquisa por nome
  filterAnimes(animeName: string, page: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}anime?q=${animeName}&page=${page}`)
  }

  // Consulta para preencher as informacoes da pagina de info
  getAnimeById(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}anime/${id}/full`)
  }

  //Consulta para o carousel da pag inicial
  getSeasonAnimes(day: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}schedules?filter=${day}&kids=true&sfw=true`)
  }
  //Consulta para o carousel da pag inicial
  getTopAnimes(): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}top/anime?filter=airing`)
  }

  getAllAnimeImgs(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}anime/${id}/pictures`)
  }
}
