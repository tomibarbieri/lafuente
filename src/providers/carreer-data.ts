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

  constructor(public http: Http) {
    console.log('Hello CarreerDataProvider Provider');
  }

  load() {
    this.http.get('assets/data/medicina.json').map(res => res.json()).subscribe(data => {
        console.log(data);
        this.medicina = data;
    });
    this.http.get('assets/data/eurhes.json').map(res => res.json()).subscribe(data => {
        console.log(data);
        this.eurhes = data;
    });

  }

  getCarreerMedicina() {
    return this.medicina;
  }

  getCarreerEurhes(carrer:any) {
    return this.eurhes[carrer];
  }

}
