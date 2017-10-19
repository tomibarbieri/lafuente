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
      `http://mibeca.becasbicentenario.gov.ar/`
    );
  }

  openBoleto() {
    this.inAppBrowser.create(
      `https://www.gba.gob.ar/es/boleto`
    );
  }

  openBecasUNLP() {
    this.inAppBrowser.create(
      `https://www.becas.unlp.edu.ar`
    );
  }

  openProgresar() {
    this.inAppBrowser.create(
      `http://progresar.anses.gob.ar/`
    );
  }

}
