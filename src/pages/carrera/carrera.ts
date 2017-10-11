import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  carrera = '';

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.carrera = navParams.get('carrera');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CarreraPage');
  }

}
