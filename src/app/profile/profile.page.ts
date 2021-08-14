import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Users } from '../core/models/user.interface';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  user: Users;
  uid: any;
  item: any;
  anuncios: any;
  // empty: Boolean;

  constructor(private rout: Router ) {
    this.initProfile();
  }

  initProfile() {
    this.user = JSON.parse(localStorage.getItem('authentication'));
  }


  update(e) {
    // e.detail.checked ? this.enableDark() : this.enableLight()
  }

  ngOnInit() {
    this.getLogueado();
   }

  getLogueado() {
  }


  async getProfile(id) {
  }



  goedit() {
    this.rout.navigateByUrl(`/edit-profile`);
  }

  signOut() {
    localStorage.removeItem('authentication');
    this.rout.navigateByUrl('/');
  }


}
