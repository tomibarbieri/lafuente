import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { CarreerDataProvider } from '../../providers/carreer-data';

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

  /*subject = {
    "subject": "Anatomia",
    "cathedras": [{
            "name": "A",
            "titular": "Juan Peron",
            "horario-secretaria": "Lu a Vi de 12 a 15hs",
            "ubicacion-secretaria": "Segundo piso. Oficina 2",
            "secretario": "Eva Duarte",
            "email-secretario": "eva@fundacionevaperon.com",
            "tel-secretario": "4563456",
            "horario-consulta": "lu a vi 12 a 14",
            "entorno-educativo": "",
            "clave-entorno": "",
            "apuntes": "",
            "grupo-facebook": "",
            "catedra-twitter": "",
            "catedra-facebook": "",
            "catedra-web": ""
        }, {
          "name": 	"Anatomia B",
            "titular": "Juan Peron",
            "horario-secretaria": "",
            "ubicacion-secretaria": "",
            "secretario": "Eva Duarte",
            "email-secretario": "eva@fundacionevaperon.com",
            "tel-secretario": "4563456",
            "horario consulta": "lu a vi 12 a 14",
            "entorno-educativo": "",
            "clave-entorno": "",
            "apuntes": "",
            "grupo-facebook": "",
            "catedra-twitter": "",
            "catedra-facebook": "",
            "catedra-web": ""
        }, {
          "name": 	"Anatomia C",
            "titular": "Juan Peron",
            "horario-secretaria": "",
            "ubicacion-secretaria": "",
            "secretario": "Eva Duarte",
            "email-secretario": "eva@fundacionevaperon.com",
            "tel-secretario": "4563456",
            "horario consulta": "lu a vi 12 a 14",
            "entorno-educativo": "",
            "clave-entorno": "",
            "apuntes": "",
            "grupo-facebook": "",
            "catedra-twitter": "",
            "catedra-facebook": "",
            "catedra-web": ""
        }
      ]

  };*/
  carreer:any;
  subject:any;
  year: any;
  regime: any;
  subj: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public carreerData: CarreerDataProvider,
    ) {

    this.year = 'Primero';//navParams.get('year');
    this.regime = 'Anual';//navParams.get('anual');
    this.subj = 'Anatomia';//navParams.get('subj');

    this.carreer = carreerData.getCarreerMedicina();
    this.subject = this.carreer['years'].forEach(function(element: any) {
                                                if (element.name == year){
                                                  element.regimes.forEach(function(reg: any) {
                                                    if (reg.name == regime){
                                                      reg.subjects.forEach(function(s: any) {
                                                        if (s.name == subj){
                                                          this.subject = s;
                                                        }
                                                      });
                                                    }
                                                  });
                                                }
                                            });
    console.log(this.subject);

  }

  ionViewDidLoad() {}

}
