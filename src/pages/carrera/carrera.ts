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
  isEurhes: any;

  cordinadoras:any = {
    'enfermeria':{
      'coordinador':'Lic. Fabio Antonini',
      'horario':'Lunes 10.30hs | Martes 16hs',
      'ubicacion':'Edificio Central 3er Piso'
    },
    'nutricion':{
      'coordinador':'Lic. Cintia Ambrosino',
      'horario':'Lunes 10hs | Viernes 13hs',
      'ubicacion':'Edificio Central 3er Piso'
    },
    'obstetricia':{
      'coordinador':'Lic. Silvia Rosella',
      'horario':'Lunes 10hs | Miércoles 9hs',
      'ubicacion':'Edificio Central 3er Piso'
    }
    ,'cardio':{
      'coordinador':'Dra. Analía cuello',
      'horario':'Lunes 10hs | Miércoles 15hs',
      'ubicacion':'Edificio Central 3er Piso'
    }
  }

  coordinadoraActual = {};


  constructor(public navCtrl: NavController, public inAppBrowser: InAppBrowser, public navParams: NavParams) {
    this.carrera = navParams.get('carrera');
    this.isEurhes = navParams.get('isEurhes');
    this.coordinadoraActual = this.cordinadoras[this.carrera];
    console.log(this.coordinadoraActual)
    console.log(this.isEurhes);
    console.log(this.carrera);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CarreraPage');
  }

  openGuarani() {
    this.inAppBrowser.create(
      `https://www.guarani-medicina.unlp.edu.ar/`,'_system'
    );
  }

  openWebMed() {
    this.inAppBrowser.create(
      `http://www.med.unlp.edu.ar/`,'_system'
    );
  }

  openGuaraniEurhes() {
    this.inAppBrowser.create(
      `https://guarani-eurh.unlp.edu.ar/`,'_system'
    );
  }

  openWebEurhes() {
    this.inAppBrowser.create(
      `http://www.eurhes.unlp.edu.ar/`,'_system'
    );
  }

  openFacebookEurhes() {
    this.inAppBrowser.create(
      `https://m.facebook.com/Eurhes.unlp/`,'_system'
    );
  }

  pushPlanes() {
    this.navCtrl.push(PlanesPage, {
      plan: "Medicina 2004",
      id: "1"
    });
  }

}
