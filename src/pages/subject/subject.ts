import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

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

  subject = {
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

  };


  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SubjectPage');
  }

}
