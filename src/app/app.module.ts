import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { NgModule, ErrorHandler } from '@angular/core';

import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';

import { InAppBrowser } from '@ionic-native/in-app-browser';
import { SplashScreen } from '@ionic-native/splash-screen';

import { IonicStorageModule } from '@ionic/storage';

import { ConferenceApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { PopoverPage } from '../pages/about-popover/about-popover';
import { AccountPage } from '../pages/account/account';
import { LoginPage } from '../pages/login/login';
import { MapPage } from '../pages/map/map';


// Aca van los import nuevos de Remediar
import { ApuntesPage } from '../pages/apuntes/apuntes';
import { BienestarPage } from '../pages/bienestar/bienestar';
import { CarreraPage } from '../pages/carrera/carrera';
import { HomePage } from '../pages/home/home';
import { PlanesPage } from '../pages/planes/planes';
import { BenefitPage } from '../pages/benefit/benefit'; //sobre las becas universitarias

import { SchedulePage } from '../pages/schedule/schedule';
import { ScheduleFilterPage } from '../pages/schedule-filter/schedule-filter';
import { SessionDetailPage } from '../pages/session-detail/session-detail';
import { SignupPage } from '../pages/signup/signup';
import { SpeakerDetailPage } from '../pages/speaker-detail/speaker-detail';
import { SpeakerListPage } from '../pages/speaker-list/speaker-list';
import { TabsPage } from '../pages/tabs-page/tabs-page';
import { SupportPage } from '../pages/support/support';

//Página de Bienvenida
import { WelcomePage } from '../pages/welcome/welcome';

import { ConferenceData } from '../providers/conference-data';
import { UserData } from '../providers/user-data';


@NgModule({
  declarations: [
    ConferenceApp,
    AboutPage,
    AccountPage,
    LoginPage,
    MapPage,
    //
    ApuntesPage, // Agregar los nuevos aca tambien
    PlanesPage,
    HomePage,
    BienestarPage,
    CarreraPage,
    BenefitPage,
    WelcomePage,
    //
    PopoverPage,
    SchedulePage,
    ScheduleFilterPage,
    SessionDetailPage,
    SignupPage,
    SpeakerDetailPage,
    SpeakerListPage,
    TabsPage,
    SupportPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(ConferenceApp, {}, {
      links: [
        { component: TabsPage, name: 'TabsPage', segment: 'tabs-page' },
        { component: SchedulePage, name: 'Schedule', segment: 'schedule' },
        { component: SessionDetailPage, name: 'SessionDetail', segment: 'sessionDetail/:sessionId' },
        { component: ScheduleFilterPage, name: 'ScheduleFilter', segment: 'scheduleFilter' },
        { component: SpeakerListPage, name: 'SpeakerList', segment: 'speakerList' },
        { component: SpeakerDetailPage, name: 'SpeakerDetail', segment: 'speakerDetail/:speakerId' },
        { component: MapPage, name: 'Map', segment: 'map' },
        { component: ApuntesPage, name: 'Apuntes', segment: 'apuntes' }, // Aca tambien modificar
        { component: HomePage, name: 'Home', segment: 'home' },
        { component: BienestarPage, name: 'Bienestar', segment: 'bienestar' },
        { component: CarreraPage, name: 'Carrera', segment: 'carrera' },
        { component: PlanesPage, name: 'Planes', segment: 'planes' },
        { component: AboutPage, name: 'About', segment: 'quienes-somos' },
        { component: WelcomePage, name: 'Welcome', segment: 'bienvenidos' },
        { component: SupportPage, name: 'SupportPage', segment: 'support' },
        { component: LoginPage, name: 'LoginPage', segment: 'login' },
        { component: AccountPage, name: 'AccountPage', segment: 'account' },
        { component: SignupPage, name: 'SignupPage', segment: 'signup' },
        { component: BenefitPage, name: 'BenefitPage', segment: 'becas' },
      ]
    }),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    ConferenceApp,
    AboutPage,
    AccountPage,
    LoginPage,
    MapPage,
    ApuntesPage, // aca tambien modificar
    HomePage,
    BienestarPage,
    PlanesPage,
    CarreraPage,
    WelcomePage,
    BenefitPage,
    //
    PopoverPage,
    SchedulePage,
    ScheduleFilterPage,
    SessionDetailPage,
    SignupPage,
    SpeakerDetailPage,
    SpeakerListPage,
    TabsPage,
    SupportPage
  ],
  providers: [
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    ConferenceData,
    UserData,
    InAppBrowser,
    SplashScreen
  ]
})
export class AppModule { }
