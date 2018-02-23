import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { ChatdetailsPage } from '../chatdetails/chatdetails'
/**
 * Generated class for the TabChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tab-chat',
  templateUrl: 'tab-chat.html',
})
export class TabChatPage {

  userinfo: Object;
  ChatdetailsPage: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {

    this.userinfo = {
      userid: '123321',
      username: '慕女神'
    }
    this.ChatdetailsPage = ChatdetailsPage
  }

}
