import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  url = 'https://ecommercepedro.herokuapp.com';

  constructor(public http: HttpClient) {}

  getUsers() {
    return this.http.get(this.url + '/users', {
      headers: new HttpHeaders().set(
        'Content-Type',
        'application/x-www-form-urlencoded'
      ),
    });
  }

  registerUsers(username: string, email: string, password: string) {
    return this.http.post(this.url + '/users', {
      body: new HttpParams()
        .set('name', username)
        .set('email', email)
        .set('password', password),
      headers: new HttpHeaders().set(
        'Content-Type',
        'application/x-www-form-urlencoded'
      ),
    });
  }
}
