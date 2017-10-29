import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';

/**
 * Generated class for the HealthPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-health',
  templateUrl: 'health.html',
})
export class HealthPage {

  constructor(public navCtrl: NavController,public inAppBrowser: InAppBrowser, public navParams: NavParams) {
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

  ionViewDidLoad() {
    console.log('ionViewDidLoad HealthPage');
  }

}
