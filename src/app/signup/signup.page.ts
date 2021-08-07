import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthService } from '../core/services/authentification/auth-service.service';

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
    private httpClient: HttpClient,
    private navCtrl: NavController,
    private authService: AuthService
  ) {}

  ngOnInit() {}

  signUp() {

    if ( !(this.username !== '' && this.email  !== '' && this.password !== '') ) {
      const data = {
        username: this.username,
        email: this.email,
        password: this.password,
      };

      // eslint-disable-next-line @typescript-eslint/no-shadow
      // const response = this.httpClient.post(this.url + '/users', data).toPromise().then((data: any) => {
      //   console.log(data);
      // });

      const response = this.authService.registerUsers(data).toPromise().then((datas) => {
        console.log(datas);
      });
      console.log(response);
    }

    this.navCtrl.navigateRoot('/home', { animationDirection: 'forward' });

  }
}
