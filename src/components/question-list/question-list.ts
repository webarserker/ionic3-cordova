import { Component, Input } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController } from 'ionic-angular';
import { Storage } from '@ionic/storage'
import {RestProvider} from "../../providers/rest/rest";
import { DetailsPage } from "../../pages/details/details"

import { BaseUI } from "../../common/baseui";

/**
 * Generated class for the QuestionListComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'question-list',
  templateUrl: 'question-list.html'
})
export class QuestionListComponent extends BaseUI{

  errorMessage: any;
  questions: string[];

  @Input('datatype') dataSourceType

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

  //组件内没有生命周期，所以没有ionViewDidLoad 等函数

  ngAfterContentInit() {
    this.storage.get('UserId').then( val => {
      if(val != null){
        var loading = super.showLoading(this.loading, '加载中...')
        this.rest.getUserQuestionList(val, this.dataSourceType).subscribe( f => {
            this.questions = f;
            loading.dismissAll();
        }, error => this.errorMessage = <any>error)
      }
    })
  }

  gotoDetails(questionId){
    console.log(questionId)
     this.navCtrl.push(DetailsPage, {id: questionId })
  }

}
