import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage'

import { BaseUI } from "../../common/baseui";
import { RestProvider } from "../../providers/rest/rest";
import { DetailsPage } from '../details/details';

/**
 * Generated class for the TabNotificationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tab-notification',
  templateUrl: 'tab-notification.html',
})
export class TabNotificationPage extends BaseUI {

  errorMessage: any;
  notificationList: string[];

  constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public storage: Storage,
        public rest: RestProvider,
        public Toast: ToastController,
        public loading: LoadingController
        ) {
    super()
  }

  ionViewDidLoad() {

    this.storage.get('UserId').then( val => {
      if (val != null) {
        var loading = super.showLoading(this.loading, '请等待...');
        this.rest.getUserNotifications(val).subscribe( f => {
          this.notificationList = f;
          console.log(this.notificationList, val)
          loading.dismissAll();
        },error => this.errorMessage = <any>error);

      }
    })
  }

  gotoDetails(questionId) {
    this.navCtrl.push(DetailsPage, { id: questionId });
  }

}
