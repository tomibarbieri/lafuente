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

    var year_param = navParams.get('year');
    var regime_param = navParams.get('regime');
    var subject_param = navParams.get('subject');

    this.carreer = carreerData.getCarreerMedicina();
    console.log(this.carreer);

    for (let y of this.carreer['years']) {
      console.log(y);
      if (y['name'] == year_param) {
          console.log(y);
          for (let r of y['regimes']) {
          if (r['name'] == regime_param) {
            for (let m of r['subjects']) {
              console.log(m);
              if (m['name'] == subject_param) {
                this.subject = m;
              }
            }
          }
        }
      }
    }

    /*
    this.carreer['years'].forEach(function(element: any) {
                                                if (element.name == year){
                                                  element.regimes.forEach(function(reg: any) {
                                                    if (reg.name == regime){
                                                      reg.subjects.forEach(function(s: any) {
                                                        if (s.name == subj){
                                                          subject = s;
                                                        }
                                                      });
                                                    }
                                                  });
                                                }
                                            });
    console.log(subject);*/

  }

  ionViewDidLoad() {}

}
