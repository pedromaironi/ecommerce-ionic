import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.page.html',
  styleUrls: ['./signup.page.scss'],
})
export class SignupPage implements OnInit {
  username: string;
  email: string;
  password: string;
  http: any;
  url = 'https://ecommercepedro.herokuapp.com';

  constructor(
    private httpClient: HttpClient
  ) {}

  ngOnInit() {}

  signUp() {
    console.log(this.username);
    console.log(this.email);
    console.log(this.password);
    // this.authService.registerUsers(this.username, this.email, this.password).toPromise().then((value) => {
    //   console.log(value);
    // });
    const data = {
      name: this.username,
      email: this.email,
      password: this.password,
    };

    const header = new HttpHeaders().set(
      'Content-Type',
      'application/x-www-form-urlencoded'
    );

    // eslint-disable-next-line @typescript-eslint/no-shadow
    const response = this.httpClient.post(this.url + '/users', data).toPromise().then((data: any) => {
      console.log(data);
    });

    console.log(response);
  }
}
