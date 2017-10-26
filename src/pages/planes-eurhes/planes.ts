import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
//import { SubjectPage } from '../subject/subject';

import { CarreerDataProvider } from '../../providers/carreer-data';

@Component({
  selector: 'planes',
  templateUrl: 'planes.html'
})
export class PlanesEurhesPage {

  plan:string;
  carreer:any;

  constructor(
    public navCtrl: NavController,
    public inAppBrowser: InAppBrowser,
    public navParams: NavParams,
    public carreerData: CarreerDataProvider,
  ) {
    this.plan = navParams.get('plan');
    console.log(this.plan);
    this.carreer = carreerData.getCarreerEurhes(this.plan);
  }

}
