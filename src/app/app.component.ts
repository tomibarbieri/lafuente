import { Component, ViewChild } from '@angular/core';

import { Events, MenuController, Nav, Platform } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Storage } from '@ionic/storage';


//import { PlanesPage } from '../pages/planes/planes';
import { HomePage } from '../pages/home/home';
import { BienestarPage } from '../pages/bienestar/bienestar';

import { AboutPage  } from '../pages/about/about';
import { WelcomePage  } from '../pages/welcome/welcome';

import { ConferenceData } from '../providers/conference-data';
import { CarreerDataProvider } from '../providers/carreer-data';
import { UserData } from '../providers/user-data';

import { InAppBrowser } from '@ionic-native/in-app-browser';



export interface PageInterface {
  title: string;
  name: string;
  component: any;
  icon: string;
  logsOut?: boolean;
  index?: number;
  tabName?: string;
  tabComponent?: any;
}

@Component({
  templateUrl: 'app.template.html'
})
export class ConferenceApp {
  // the root nav is a child of the root app component
  // @ViewChild(Nav) gets a reference to the app's root nav
  @ViewChild(Nav) nav: Nav;

  // List of pages that can be navigated to from the left menu
  // the left menu only works after login
  // the login page disables the left menu
  appPages: PageInterface[] = [
    { title: 'Inicio', name: 'Home', component: HomePage, icon: 'home' },
    //{ title: 'Facultad', name: 'Planes', component: PlanesPage, icon: 'medical' },
    { title: 'Bienestar Estudiantil', name: 'Bienestar', component: BienestarPage, icon: 'megaphone' },
    { title: 'Remediar', name: 'About', component: AboutPage, icon: 'medkit' },
    //{ title: 'Materias', name: 'TabsPage', component: TabsPage, tabComponent: SchedulePage, index: 0, icon: 'calendar' },
    //{ title: 'Noticias', name: 'TabsPage', component: TabsPage, tabComponent: SpeakerListPage, index: 1, icon: 'contacts' },
    //{ title: 'Schedule', name: 'TabsPage', component: TabsPage, tabComponent: SchedulePage, index: 0, icon: 'calendar' },
    //{ title: 'Speakers', name: 'TabsPage', component: TabsPage, tabComponent: SpeakerListPage, index: 1, icon: 'contacts' },
    //{ title: 'Apuntes', name: 'TabsPage', component: TabsPage, tabComponent: ApuntesPage, index: 2, icon: 'book' },
    //{ title: 'About', name: 'TabsPage', component: TabsPage, tabComponent: AboutPage, index: 3, icon: 'information-circle' }
  ];
  /*loggedInPages: PageInterface[] = [
    { title: 'Account', name: 'AccountPage', component: AccountPage, icon: 'person' },
    { title: 'Support', name: 'SupportPage', component: SupportPage, icon: 'help' },
    { title: 'Logout', name: 'TabsPage', component: TabsPage, icon: 'log-out', logsOut: true }
  ];
  loggedOutPages: PageInterface[] = [
    { title: 'Planes de estudio', name: 'PlanesPage', component: PlanesPage, icon: 'book' },
    { title: 'Login', name: 'LoginPage', component: LoginPage, icon: 'log-in' },
    { title: 'Support', name: 'SupportPage', component: SupportPage, icon: 'help' },
    { title: 'Signup', name: 'SignupPage', component: SignupPage, icon: 'person-add' }
  ];*/

  rootPage: any;

  constructor(
    public events: Events,
    public userData: UserData,
    public menu: MenuController,
    public platform: Platform,
    public confData: ConferenceData,
    public carreerData: CarreerDataProvider,
    public storage: Storage,
    public inAppBrowser: InAppBrowser,
    public splashScreen: SplashScreen
  ) {

    // Check if the user has already seen the welcome page

    this.storage.get('hasSeenWelcomePage')
      .then((hasSeenWelcomePage) => {

        if(hasSeenWelcomePage) {
          this.rootPage = HomePage;
        } else {
          this.rootPage = WelcomePage;
        }
        this.platformReady()
      });

    // load the conference data
    confData.load();

    carreerData.load();

    // decide which menu items should be hidden by current login status stored in local storage
    this.userData.hasLoggedIn().then((hasLoggedIn) => {
      this.enableMenu(hasLoggedIn === true);
    });
    this.enableMenu(true);

    this.listenToLoginEvents();
  }

  openPage(page: PageInterface) {
    //let params = {};

    // the nav component was found using @ViewChild(Nav)
    // setRoot on the nav to remove previous pages and only have this page
    // we wouldn't want the back button to show in this scenario
    /*if (page.index) {
      params = { tabIndex: page.index };
    }*/

    // If we are already on tabs just change the selected tab
    // don't setRoot again, this maintains the history stack of the
    // tabs even if changing them from the menu
    if (this.nav.getActiveChildNavs().length && page.index != undefined) {
      this.nav.getActiveChildNavs()[0].select(page.index);
    // Set the root of the nav with params if it's a tab index
    } else {
      this.nav.setRoot(page.name/*, params*/).catch((err: any) => {
        console.log(`Didn't set nav root: ${err}`);
      });
    }

    if (page.logsOut === true) {
      // Give the menu time to close before changing to logged out
      this.userData.logout();
    }
  }

  openWelcomePage() {
    this.nav.setRoot(WelcomePage);
  }

  openFacebook() {
    this.inAppBrowser.create(
      `https://www.facebook.com/RemediarUNLP/`,
    );
  }

  openTwitter() {
    this.inAppBrowser.create(
      `https://twitter.com/RemediarUNLP`
    );
  }

  openInstagram() {
    this.inAppBrowser.create(
      `https://www.instagram.com/remediarUNLP/`
    );
  }

  openMail() {
    this.inAppBrowser.create(
      `mailto:remediarcienciasmedicas@gmail.com`
    );
  }
  /*openPlanes() {
    this.nav.setRoot(PlanesPage);
  }*/

  listenToLoginEvents() {
    this.events.subscribe('user:login', () => {
      this.enableMenu(true);
    });

    this.events.subscribe('user:signup', () => {
      this.enableMenu(true);
    });

    this.events.subscribe('user:logout', () => {
      this.enableMenu(false);
    });
  }

  enableMenu(loggedIn: boolean) {
    this.menu.enable(loggedIn, 'loggedInMenu');
    this.menu.enable(!loggedIn, 'loggedOutMenu');
  }

  platformReady() {
    // Call any initial plugins when ready
    this.platform.ready().then(() => {
      this.splashScreen.hide();
    });
  }

  isActive(page: PageInterface) {
    let childNav = this.nav.getActiveChildNavs()[0];

    // Tabs are a special case because they have their own navigation
    if (childNav) {
      if (childNav.getSelected() && childNav.getSelected().root === page.tabComponent) {
        return 'primary';
      }
      return;
    }

    if (this.nav.getActive() && this.nav.getActive().name === page.name) {
      return 'primary';
    }
    return;
  }
}
