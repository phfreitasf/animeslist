import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from './model/user';

@Injectable({
  providedIn: 'root'
})
export class LoginUserService {

  constructor(private http: HttpClient) { }

  getAllUsers() {
    return this.http.get<User[]>(`${environment.apiLogin}/users`)
  }
}
