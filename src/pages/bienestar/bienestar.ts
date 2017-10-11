import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { BenefitPage } from '../benefit/benefit'; //sobre las becas universitarias

/**
 * Generated class for the BienestarPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-bienestar',
  templateUrl: 'bienestar.html',
})
export class BienestarPage {

  onBenefitPage = BenefitPage;

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad BienestarPage');
  }

}
