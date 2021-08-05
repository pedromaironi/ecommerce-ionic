import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthService } from '../services/auth-service.service';
import { UtilService } from '../services/util.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  arrayUsers: any;

  constructor(
    private util: UtilService,
    private navCtrl: NavController,
    private authService: AuthService
  ) {}

  ionViewDidLoad() {
    this.getUsers();//Llamamos a la función getPost cuando la vista se cargue
  }

  ngOnInit() {}

  getUsers() {
    this.authService.getUsers()
      .toPromise().then((value) => {
        console.log(value);
        this.arrayUsers = value;
      });
  }

  login() {
    // this.authService.getUsers()
    // .then(data => {
    //   this.arrayUsers = data;
    // });
    console.log(this.arrayUsers);
    this.authService.getUsers()
    .toPromise().then((value) => {
      console.log(value);
      this.arrayUsers = value;
    });
    // Enabling Side Menu
    // this.util.setMenuState(true);
    // this.navCtrl.navigateRoot('/home', { animationDirection: 'forward' });
  }
}
