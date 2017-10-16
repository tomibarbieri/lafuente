import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
	pushPage: any;
  about = "group";

  constructor(public navCtrl: NavController) {}
}
