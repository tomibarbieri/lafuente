import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LunchRoomPage } from './lunch-room';

@NgModule({
  declarations: [
    LunchRoomPage,
  ],
  imports: [
    IonicPageModule.forChild(LunchRoomPage),
  ],
})
export class LunchRoomPageModule {}
