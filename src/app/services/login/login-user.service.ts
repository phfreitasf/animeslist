import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { User } from './model/user';

@Injectable({
  providedIn: 'root'
})
export class LoginUserService {

  apiLink = 'http://localhost:4000'
  constructor(private http: HttpClient) { }

  getAllUsers() {
    return this.http.get<User[]>(`${environment.apiLogin}/users`)
  }

  register(user: any) {
    return this.http.post(`${this.apiLink}/users/register`, user);
}
}
