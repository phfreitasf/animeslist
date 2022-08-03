import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GoogleTranslateService {

urlApi = 'https://translation.googleapis.com/language/translate/v2?key=AIzaSyDIbAXZwJbsAy_hK9J_IvcEL1481ua1f4Y&?'

  constructor(private http: HttpClient) { }

  translateText(targetObj:any) : Observable<any> {
    return this.http.post<any>(this.urlApi,targetObj)
  }
}
