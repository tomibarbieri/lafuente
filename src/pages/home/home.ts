import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { CarreraPage } from '../carrera/carrera';

import { InAppBrowser } from '@ionic-native/in-app-browser';

/**
 * Generated class for the HomePage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {

  carreraPage = CarreraPage;
  medicina: object = { carrera : "medicina", isEurhes: false};
  enfermeria: object = { carrera : "enfermeria", isEurhes: true};
  cardio: object = { carrera : "cardio", isEurhes: true};
  obstetricia: object = { carrera : "obstetricia", isEurhes: true};
  nutricion: object = { carrera : "nutricion", isEurhes: true};

  constructor(
    public navCtrl: NavController,
    public inAppBrowser: InAppBrowser,
    public navParams: NavParams)
    { }

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

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }
}
