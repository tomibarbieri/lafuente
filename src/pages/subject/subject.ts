import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { CarreerDataProvider } from '../../providers/carreer-data';

import { InAppBrowser } from '@ionic-native/in-app-browser';

/**
 * Generated class for the SubjectPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-subject',
  templateUrl: 'subject.html',
})
export class SubjectPage {

  carreer:any;
  subject:any;
  year: any;
  regime: any;
  subj: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public inAppBrowser: InAppBrowser,
    public carreerData: CarreerDataProvider,
    ) {

    var year_param = navParams.get('year');
    var regime_param = navParams.get('regime');
    var subject_param = navParams.get('subject');

    this.carreer = carreerData.getCarreerMedicina();
    console.log(this.carreer);

    for (let y of this.carreer['years']) {
      console.log(y);
      if (y['name'] == year_param) {
          console.log(y);
          for (let r of y['regimes']) {
          if (r['name'] == regime_param) {
            for (let m of r['subjects']) {
              console.log(m);
              if (m['name'] == subject_param) {
                this.subject = m;
              }
            }
          }
        }
      }
    };
  }

  openPreparemos(fb:any) {
    this.inAppBrowser.create(
      fb,
      '_system'
    );
  }

  openApuntes(fb:any) {
    this.inAppBrowser.create(
      fb,
      '_system'
    );
  }

  openCathedraFacebook(fb:any){
    this.inAppBrowser.create(
      fb,
      '_system'
    );
  }

  openCathedraTwitter(tw:any) {
    this.inAppBrowser.create(
      tw,
      '_system'
    );
  }

  openCathedraWeb(web:any) {
    this.inAppBrowser.create(
      web,
      '_system'
    );
  }

  openEnvironment(env:any){
    this.inAppBrowser.create(
      env,
      '_system'
    );
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

  ionViewDidLoad() {}

}
