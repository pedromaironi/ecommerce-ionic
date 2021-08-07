import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Categories } from '../../models/categories.interface';
import { Users } from '../../models/user.interface';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {
  url = 'https://ecommercepedro.herokuapp.com';
  categories: Categories;

  constructor(public http: HttpClient) { }

  getAllCategories() {
    return this.http.get<Categories[]>(this.url + '/api/categories', {
      headers: new HttpHeaders().set(
        'Content-Type',
        'application/x-www-form-urlencoded'
      ),
    });
  }

}
