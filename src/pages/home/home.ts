import { Component } from '@angular/core';
import { NavController, ModalController, Tabs, LoadingController } from 'ionic-angular';
import { BaseUI } from '../../common/baseui'
import { RestProvider } from "../../providers/rest/rest";
import { DetailsPage } from '../../pages/details/details'

import { QuestionPage } from '../question/question'
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage extends BaseUI{

  feeds: string[];
  errorMessage: string;

  constructor(
    public navCtrl: NavController,
    public modalCter: ModalController,
    public loading: LoadingController,
    public rest: RestProvider
              ) {
    super()
  }

  ionViewDidLoad(){
    this.getFeeds()
  }

  gotoQuestion(){
    var modal = this.modalCter.create(QuestionPage);
    modal.present()
  }

  gotoChat(){
    this.selectTab(2)
  }

  selectTab(index:number){
    var t:Tabs = this.navCtrl.parent;
    t.select(index);
  }

  getFeeds(){
    var loading = super.showLoading(this.loading, '加载中...')
    this.rest.getFeeds().subscribe( f => {
      this.feeds = f;
      loading.dismiss()
    },error => this.errorMessage = <any>error );

  }

  gotoDetails(questionId){
    this.navCtrl.push(DetailsPage, {id: questionId});
  }

}
