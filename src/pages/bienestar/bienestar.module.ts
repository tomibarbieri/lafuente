import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BienestarPage } from './bienestar';

@NgModule({
  declarations: [
    BienestarPage,
  ],
  imports: [
    IonicPageModule.forChild(BienestarPage),
  ],
})
export class BienestarPageModule {}
