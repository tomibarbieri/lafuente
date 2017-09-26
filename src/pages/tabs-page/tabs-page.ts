import { Component } from '@angular/core';

import { NavParams } from 'ionic-angular';

//import { PlanesPage } from '../planes/planes';
import { AboutPage } from '../about/about';
//import { MapPage } from '../map/map';
import { ApuntesPage } from '../apuntes/apuntes';
import { SchedulePage } from '../schedule/schedule';
import { SpeakerListPage } from '../speaker-list/speaker-list';

@Component({
  templateUrl: 'tabs-page.html'
})
export class TabsPage {
  // set the root pages for each tab
  tab1Root: any = SchedulePage;
  tab2Root: any = SpeakerListPage;
  tab3Root: any = ApuntesPage;
  tab4Root: any = AboutPage;
  mySelectedIndex: number;

  constructor(navParams: NavParams) {
    this.mySelectedIndex = navParams.data.tabIndex || 0;
  }

}
