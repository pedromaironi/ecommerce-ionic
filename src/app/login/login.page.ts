import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthService } from '../core/services/authentification/auth-service.service';
import { UtilService } from '../services/util.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  arrayUsers: any;
  email: string;
  password: string;

  constructor(
    private util: UtilService,
    private navCtrl: NavController,
    private authService: AuthService
  ) {}

  ionViewDidLoad() {
    this.getUsers(); //Llamamos a la función getPost cuando la vista se cargue
  }

  ngOnInit() {}

  getUsers() {
    this.authService
      .getUsers();

  }

  login() {

    // Enabling Side Menu
    // this.util.setMenuState(true);
    this.navCtrl.navigateRoot('/home', { animationDirection: 'forward' });
  }
}
