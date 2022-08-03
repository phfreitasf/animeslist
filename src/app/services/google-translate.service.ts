import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class GoogleTranslateService {

urlApi = environment.api_link

  constructor(private http: HttpClient) { }

  translateText(targetObj:any) : Observable<any> {
    return this.http.post<any>(this.urlApi,targetObj)
  }
}
