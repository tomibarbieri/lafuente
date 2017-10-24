import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { SubjectPage } from '../subject/subject';

import { CarreerDataProvider } from '../../providers/carreer-data/carreer-data';

@Component({
  selector: 'planes',
  templateUrl: 'planes.html'
})
export class PlanesPage {

  plan:string;
  carreer:any;
  /*carreer = {	"name": "Medicina 2004",
	            "years": [
				{ 	"name": 	"Primero",
					"regimes":	[{  "name": 	"Anual",
									"subjects":	[{ "name": "Anatomía" }, { "name": "Biología"}]},
								 {  "name": 	"Bimestral",
								 	"subjects": [{ "name": "Ciencias Sociales y médicas"}, { "name": "Citología" } ]}
								, { "name": "Cuatrimestral",
								  	"subjects": [ {"name": "Ciencias exactas" } ]}
								]
				},
				{
					"name":		"Segundo",
					"regimes": [{ "name": "Anual",
								   "subjects": [{ "name": "Bioquímica y biología molecular" }, { "name": "Fisiología y física biológica" }]},
								{ "name": "Bimestral",
								  "subjects": [ { "name": "Epidemiología" }]},
								{ "name": "Cuatrimestral",
								  "subjects": [] }]
				},
				{	"name": "tercero",
					"regimes": []}
			]
    };*/

  constructor(
    public navCtrl: NavController,
    public inAppBrowser: InAppBrowser,
    public navParams: NavParams,
    public carreerData: CarreerDataProvider,
  ) {
    this.plan = navParams.get('plan');
    this.carreer = carreerData.getCarrers()
  }

  pushSubject() {
    this.navCtrl.push(SubjectPage, {
      id: "1"
    });
  }

  goToSpeakerTwitter(speaker: any) {
    this.inAppBrowser.create(
      `https://twitter.com/${speaker.twitter}`,
      '_blank'
    );
  }
}
