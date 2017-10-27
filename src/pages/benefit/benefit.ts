import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';

@Component({
  selector: 'page-benefit',
  templateUrl: 'benefit.html'
})
export class BenefitPage {
	pushPage: any;
  benefit = "nationals-provintials";

  constructor(public navCtrl: NavController, public inAppBrowser: InAppBrowser) {}

  openArBec() {
    this.inAppBrowser.create(
      `http://mibeca.becasbicentenario.gov.ar/`,
      '_system'
    );
  }

  openBoleto() {
    this.inAppBrowser.create(
      `https://www.gba.gob.ar/es/boleto`,
      '_system'
    );
  }

  openBecasUNLP() {
    this.inAppBrowser.create(
      `https://www.becas.unlp.edu.ar`,
      '_system'
    );
  }

  openProgresar() {
    this.inAppBrowser.create(
      `http://progresar.anses.gob.ar/`,
      '_system'
    );
  }

  openRemediarFacebook() {
    this.inAppBrowser.create(
      `fb://https://www.facebook.com/LaFuenteUNLP/`,
      '_system'
    );
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
