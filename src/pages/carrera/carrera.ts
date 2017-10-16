import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PlanesPage } from '../planes/planes';

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

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.carrera = navParams.get('carrera');
    console.log(this.carrera);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CarreraPage');
  }

  pushPlanes() {
    this.navCtrl.push(PlanesPage, {
      plan: "Medicina 2004",
      id: "1"
    });
  }

}
