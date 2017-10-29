import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

//import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';

/*
  Generated class for the CarreerDataProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular DI.
*/
@Injectable()
export class CarreerDataProvider {

  medicina: any;
  eurhes: any;

  constructor(public http: Http) {}

  load() {
    this.http.get('assets/data/medicina.json').map(res => res.json()).subscribe(data => {
        this.medicina = data;
    });
    this.http.get('assets/data/eurhes.json').map(res => res.json()).subscribe(data => {
        this.eurhes = data;
    });

  }

  getCarreerMedicina() {
    if (this.medicina == undefined) {
      this.load();
    }
    return this.medicina;
  }

  getCarreerEurhes(carrer:any) {
    if (this.eurhes == undefined) {
      this.load();
    }
    return this.eurhes[carrer];
  }

}
