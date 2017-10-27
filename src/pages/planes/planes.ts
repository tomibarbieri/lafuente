import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { SubjectPage } from '../subject/subject';

import { CarreerDataProvider } from '../../providers/carreer-data';

@Component({
  selector: 'planes',
  templateUrl: 'planes.html'
})
export class PlanesPage {

  plan:string;
  carreer:any;

  constructor(
    public navCtrl: NavController,
    public inAppBrowser: InAppBrowser,
    public navParams: NavParams,
    public carreerData: CarreerDataProvider,
  ) {
    this.plan = navParams.get('plan');
    this.carreer = carreerData.getCarreerMedicina()
  }

  pushSubject(year:any,regime:any,subject:any) {
    this.navCtrl.push(SubjectPage, {
      year: year,
      regime: regime,
      subject: subject
    });
  }

  goToSpeakerTwitter(speaker: any) {
    this.inAppBrowser.create(
      `https://twitter.com/${speaker.twitter}`,
      '_blank'
    );
  }
}
