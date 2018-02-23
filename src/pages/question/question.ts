import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, LoadingController, ToastController } from 'ionic-angular';
import { BaseUI } from "../../common/baseui";
import { RestProvider } from '../../providers/rest/rest'
import { Storage } from '@ionic/storage'
/**
 * Generated class for the QuestionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-question',
  templateUrl: 'question.html',
})
export class QuestionPage extends BaseUI {

  title: any;
  content: any;
  errorMessage: any;

  constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public ViewCtrl: ViewController,
        public rest: RestProvider,
        public storage: Storage,
        public loading: LoadingController,
        public Toast: ToastController
        ) {
    super()
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuestionPage');
  }

  dismiss() {
    this.ViewCtrl.dismiss()
  }

  submitQuestion() {
    this.storage.get('UserId').then(f => {
      if(f !== null) {
        var loading = super.showLoading(this.loading, '提交中...')
        this.rest.saveQuestion(f, this.title, this.content).subscribe(sucess => {
          if (sucess["Status"] === "OK") {
            loading.dismiss()
            super.showToast(this.Toast, sucess["StatusContent"])
            setTimeout(() => {
                this.dismiss();
            }, 3000)
          } else {
            loading.dismiss()
            super.showToast(this.Toast, sucess["StatusContent"])
          }
        }, error => this.errorMessage = <any>error)
      } else {
        super.showToast(this.Toast, '请登录后发布！')
      }
    });
  }
}
