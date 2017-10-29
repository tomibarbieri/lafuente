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


    openRemediarFacebook() {
      this.inAppBrowser.create(
        `fb://page/344490962408079`,
        '_system',
        'location=no');
    }

    openRemediarTwitter() {
      this.inAppBrowser.create(
        `https://twitter.com/RemediarUNLP`,
        '_system'
      );
    }

    openRemediarInstagram() {
      this.inAppBrowser.create(
        `http://instagram.com/_u/remediarunlp/`,
        '_system'
      );
    }

    openRemediarMail() {
      this.inAppBrowser.create(
        `mailto:remediarcienciasmedicas@gmail.com`,
        '_system'
      );
    }

}
