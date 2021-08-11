import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { menuController } from '@ionic/core';
import { Router } from '@angular/router';
import { UtilService } from './services/util.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public isMenuEnabled = true;
  public selectedIndex = 0;

  constructor(
    private platform: Platform,
    private util: UtilService,
    private router: Router,
  ) {
    this.initializeApp();
  }

  initializeApp() {
  }

  ngOnInit() {
    this.selectedIndex = 1;

    this.util.getMenuState().subscribe(menuState => {
      this.isMenuEnabled = menuState;
    });
  }

  navigate(path, selectedId) {
    this.selectedIndex = selectedId;
    this.router.navigate([path]);
  }

  close() {
    menuController.toggle();
  }
}
