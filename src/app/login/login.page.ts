/* eslint-disable prefer-const */
import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { Users } from '../core/models/user.interface';
import { AuthService } from '../core/services/authentification/auth-service.service';
import { UtilService } from '../services/util.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  bandLoggin;
  bandValidate = false;
  arrayUsers: any;
  email: string;
  password: string;
  users: Users;
  usersArray = [];
  usersObject: Users;
  usersObjectArray = [];

  constructor(
    private util: UtilService,
    private navCtrl: NavController,
    private authService: AuthService
  ) {}

  ionViewDidLoad() {
    this.getUsers(); //Llamamos a la función getPost cuando la vista se cargue
  }

  async ngOnInit() {
    await this.getUsers();
  }

  async initUsers() {}

  async getUsers() {
    // console.log(
    //   await this.authService
    //     .getUsers()
    //     .toPromise()
    //     .then((data) => data)
    // );
    await this.authService
      .getUsers()
      .toPromise()
      .then((data) => {
        this.arrayUsers = data;
      });
  }

  login() {
    // Enabling Side Menu
    // this.util.setMenuState(true);
    console.log(this.email);
    if (this.email !== undefined && this.password !== undefined) {
      let userObject;
      for (const items of Object.keys(this.arrayUsers)) {
        if (items === 'data') {
          this.usersObjectArray.push(JSON.stringify(this.arrayUsers[items]));
        }
      }
      userObject = JSON.parse(this.usersObjectArray[0]);
      for (let i of userObject) {
        console.log(i.password);
        console.log(i.email);
        if (i.email === this.email) {
          if (i.password === this.password) {
            this.bandLoggin = true;
            let objectLocalStorage = {
              name: i.name,
              email: i.email,
              password: i.password
            };
            localStorage.setItem('authentication', JSON.stringify(objectLocalStorage));
          } else {
            this.bandValidate = true;
            }
        } else {
          this.bandValidate = true;
        }
      }
    } else {
      console.log('as');
      this.bandLoggin = false;
      this.bandValidate = true;
    }

    if (this.bandLoggin) {
      this.navCtrl.navigateRoot('/home', { animationDirection: 'forward' });
    }
  }

  validateInputs(): void {
    if (this.bandValidate) {
      this.bandValidate = true;
    }
  }
}
