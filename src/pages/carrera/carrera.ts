import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PlanesPage } from '../planes/planes';
import { InAppBrowser } from '@ionic-native/in-app-browser';


/**
 * Generated class for the CarreraPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-carrera',
  templateUrl: 'carrera.html',
})
export class CarreraPage {

  planesPage = PlanesPage;
  carrera = '';

  constructor(public navCtrl: NavController, public inAppBrowser: InAppBrowser, public navParams: NavParams) {
    this.carrera = navParams.get('carrera');
    console.log(this.carrera);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CarreraPage');
  }

  openGuarani() {
    this.inAppBrowser.create(
      `https://www.guarani-medicina.unlp.edu.ar/`
    );
  }

  openWebMed() {
    this.inAppBrowser.create(
      `http://www.med.unlp.edu.ar/`
    );
  }

  pushPlanes() {
    this.navCtrl.push(PlanesPage, {
      plan: "Medicina 2004",
      id: "1"
    });
  }

}
