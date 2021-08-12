import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Users } from 'src/app/core/models/user.interface';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  url = 'https://ecommercepedro.herokuapp.com';
  users: Users;
  constructor(public http: HttpClient) {}

  getUsers() {
    return this.http.get<Users[]>(this.url + '/api/users', {
      headers: new HttpHeaders().set(
        'Content-Type',
        'application/x-www-form-urlencoded'
      ),
    });
  }

  registerUsers(users: Users) {
    // const data = {
    //   username,
    //   email,
    //   password,
    // };

    return this.http.post<Users>(this.url + '/api/users', users);
  }
}
