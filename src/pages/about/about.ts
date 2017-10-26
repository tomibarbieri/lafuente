import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';


@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
	pushPage: any;
  about = "group";

  constructor(public navCtrl: NavController,public inAppBrowser: InAppBrowser) {}

  openMail() {
    this.inAppBrowser.create(
      `mailto:remediarcienciasmedicas@gmail.com`,
      '_system'
    );
  }

}
