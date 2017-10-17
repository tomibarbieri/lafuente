import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-benefit',
  templateUrl: 'benefit.html'
})
export class BenefitPage {
	pushPage: any;
  benefit = "nationals";

  constructor(public navCtrl: NavController) {}
}
