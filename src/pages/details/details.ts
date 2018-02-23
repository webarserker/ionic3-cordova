import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, LoadingController, ToastController } from 'ionic-angular';
import { RestProvider } from "../../providers/rest/rest";
import { AnswerPage } from '../answer/answer'

import { Storage } from '@ionic/storage';
import {BaseUI } from "../../common/baseui";

/**
 * Generated class for the DetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-details',
  templateUrl: 'details.html',
})
export class DetailsPage extends BaseUI{

  id: string;
  userId: string;
  question: string[];
  answers: string[];
  errorMessage: any;
  isFavourite: boolean;
  isMyQuestion: boolean;

  constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public ModalCtrl: ModalController,
        public rest: RestProvider,
        public storage: Storage,
        public loading: LoadingController,
        public Toast: ToastController
        ) {
    super()
  }

  ionViewDidLoad() {
    this.id = this.navParams.get('id')
    this.loadQuestion()
  }

  loadQuestion() {
    this.storage.get('UserId').then( val => {
      if(val !== null) {
        this.userId = val
        var loading = super.showLoading(this.loading, '加载中...')
        this.rest.getQuestionWithUser(this.id, this.userId).subscribe( f=> {
          this.question = f;
          this.answers = f["Answers"];
          this.isFavourite = f["IsFavourite"];
          this.isMyQuestion = (f["OwnUserId"] === val)
          loading.dismiss();
        },
          error => this.errorMessage = <any>error)
      }
    })
  }

  saveFavourite() {
      var loading = super.showLoading(this.loading, "请求中...");
      this.rest.saveFavourite(this.id, this.userId).subscribe( f=> {
        loading.dismiss()
        super.showToast(this.Toast, this.isFavourite ? "取消关注成功。" : "关注问题成功。")
        this.isFavourite = !this.isFavourite;
      },
        error=> this.errorMessage = <any>error);
  }

  showAnswerPage(){

    let modal = this.ModalCtrl.create(AnswerPage, {id: this.id})
      modal.onDidDismiss(() => {
        this.loadQuestion()
      })

    modal.present()


  }

}
