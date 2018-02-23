import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { BaseUI } from "../../common/baseui";
import { DetailsPage } from '../details/details'

import { RestProvider } from "../../providers/rest/rest";

/**
 * Generated class for the TabDiscoveryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tab-discovery',
  templateUrl: 'tab-discovery.html',
})
export class TabDiscoveryPage extends BaseUI{

  Messagerror: any;
  questions: any;

  constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public rest: RestProvider,
        public loading: LoadingController
  ) {
    super()
  }

  ionViewDidLoad() {
    this.getQuestions()
  }

  getQuestions() {
    var loading = super.showLoading(this.loading, '加载中...');
    this.rest.getQuestions().subscribe( f => {
      loading.dismissAll()
      this.questions = f;
    },error => this.Messagerror = <any> error
      )
  }

  doRefresh(refresher){
    this.getQuestions();
    refresher.complete();
  }

  gotoDetails(questionId){
    this.navCtrl.push(DetailsPage, {id: questionId});
  }

}
