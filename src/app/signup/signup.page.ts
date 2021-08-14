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
  bandLoggin;
  bandValidate = false;

  constructor(
    private httpClient: HttpClient,
    private navCtrl: NavController,
    private authService: AuthService
  ) {}

  ngOnInit() {}

  signUp() {
    if (this.email !== undefined && this.password !== undefined && this.username) {
      const data = {
        name: this.username,
        email: this.email,
        password: this.password,
      };
      const response = this.authService
        .registerUsers(data)
        .toPromise()
        .then((datas) => {
        });
    } else {
      this.bandLoggin = false;
      this.bandValidate = true;
    }

    if (this.bandLoggin) {
      this.navCtrl.navigateRoot('/home', { animationDirection: 'forward' });
    }
  }
}
