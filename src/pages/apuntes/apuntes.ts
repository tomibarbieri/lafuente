import { Component } from '@angular/core';

import { Platform } from 'ionic-angular';

import { InAppBrowser } from '@ionic-native/in-app-browser';


@Component({
  selector: 'page-apuntes',
  templateUrl: 'apuntes.html'
})
export class ApuntesPage {

  constructor(public platform: Platform, private theInAppBrowser: InAppBrowser){}

  launch() {
    this.platform.ready().then(() => {
      this.theInAppBrowser.create("http://apuntes.lafuenteunlp.com.ar", '_self', 'location=yes');
    });
  }
  /*
  ionViewDidLoad() {

      this.confData.getMap().subscribe((mapData: any) => {
        let mapEle = this.mapElement.nativeElement;

        let map = new google.maps.Map(mapEle, {
          center: mapData.find((d: any) => d.center),
          zoom: 16
        });

        mapData.forEach((markerData: any) => {
          let infoWindow = new google.maps.InfoWindow({
            content: `<h5>${markerData.name}</h5>`
          });

          let marker = new google.maps.Marker({
            position: markerData,
            map: map,
            title: markerData.name
          });

          marker.addListener('click', () => {
            infoWindow.open(map, marker);
          });
        });

        google.maps.event.addListenerOnce(map, 'idle', () => {
          mapEle.classList.add('show-map');
        });

      });

  }
  */
}
