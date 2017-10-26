import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { BenefitPage } from '../benefit/benefit'; //sobre las becas universitarias
import { LunchRoomPage } from '../lunch-room/lunch-room'; //sobre las becas universitarias
import { HealthPage } from '../health/health';

import { InAppBrowser } from '@ionic-native/in-app-browser';

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
  onLunchRoomPage = LunchRoomPage;
  onHealthPage = HealthPage;

  constructor(public navCtrl: NavController, public inAppBrowser: InAppBrowser, public navParams: NavParams) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad BienestarPage');
  }

  openActividades() {
    this.inAppBrowser.create(
      `http://www.asuntosestudiantiles.unlp.edu.ar/?cat=6`,'_system'
    );
  }

  openDeportes() {
    this.inAppBrowser.create(
      `http://deportes.unlp.edu.ar/`,'_system'
    );
  }

  openSUBE() {
    this.inAppBrowser.create(
      `https://www.sube.gob.ar/MapasSUBE.aspx`,'_system'
    );
  }

  openCualBondi() {
    this.inAppBrowser.create(
      `https://cualbondi.com.ar/mapa/la-plata/`,'_system'
    );
  }

  openAlquileres() {
    this.inAppBrowser.create(
      `http://clasificados.eldia.com/casas-la-plata`,'_system'
    );
  }

}
