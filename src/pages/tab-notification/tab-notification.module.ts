import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TabNotificationPage } from './tab-notification';

@NgModule({
  declarations: [
    TabNotificationPage,
  ],
  imports: [
    IonicPageModule.forChild(TabNotificationPage),
  ],
})
export class TabNotificationPageModule {}
