import { Component, ViewChild, ElementRef } from '@angular/core';

import { ConferenceData } from '../../providers/conference-data';

import { Platform } from 'ionic-angular';

import { InAppBrowser } from '@ionic-native/in-app-browser';

declare var google: any;

/**
 * Generated class for the BenefitPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@Component({
  selector: 'page-lunch-room',
  templateUrl: 'lunch-room.html',
})
export class LunchRoomPage {

  @ViewChild('mapCanvas') mapElement: ElementRef;
  constructor(
    public confData: ConferenceData,
    public platform: Platform,
    public inAppBrowser: InAppBrowser
  ) {
  }

  ionViewDidLoad() {

    this.confData.getMap().subscribe((mapData: any) => {
      let mapEle = this.mapElement.nativeElement;

      let map = new google.maps.Map(mapEle, {
        center: { lat: -34.9173571, lng: -57.9453303},
        zoom: 13
      });

      mapData.forEach((markerData: any) => {
        let infoWindow = new google.maps.InfoWindow({
          content: `<h4>${markerData.name}</h4><h5>${markerData.address}</h5>`
        });

        let marker = new google.maps.Marker({
          position: markerData,
          map: map,
          title: markerData.name,
          icon: markerData.icon,
          animation: google.maps.Animation.DROP
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

    openRemediarFacebook() {
      this.inAppBrowser.create(
        `fb://https://www.facebook.com/LaFuenteUNLP/`,
        '_system'
      );
    }

    openRemediarTwitter() {
      this.inAppBrowser.create(
        `https://twitter.com/RemediarUNLP`,
        '_system'
      );
    }

    openRemediarInstagram() {
      this.inAppBrowser.create(
        `http://instagram.com/_u/remediarunlp/`,
        '_system'
      );
    }

    openRemediarMail() {
      this.inAppBrowser.create(
        `mailto:remediarcienciasmedicas@gmail.com`,
      );
      '_system'
    }

  openLunchRoomUNLP() {
    this.inAppBrowser.create(
      `https://www.unlp.edu.ar/estudiantes/comedor_universitario-3923`,
      '_system'
    );
  }
}
