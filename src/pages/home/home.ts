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
  carrera: object = { carrera : "Medicina"};

  constructor(
    public navCtrl: NavController,
    public inAppBrowser: InAppBrowser,
    public navParams: NavParams)
    { }

  openFacebook() {
    window.open('https://www.facebook.com/RemediarUNLP/', '_blank');
    /*this.inAppBrowser.create(
      `https://www.facebook.com/RemediarUNLP/`,
      '_blank'
    );*/
  }

  openTwitter() {
    this.inAppBrowser.create(
      `https://twitter.com/RemediarUNLP`,
      '_blank'
    );
  }

  openInstagram() {
    this.inAppBrowser.create(
      `https://www.instagram.com/remediarUNLP/`,
      '_blank'
    );
  }

  openMail() {
    this.inAppBrowser.create(
      `mailto:remediarcienciasmedicas@gmail.com`,
      '_blank'
    );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HomePage');
  }
}
