import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, LoadingController, ToastController } from 'ionic-angular';
import { RestProvider } from '../../providers/rest/rest'
import { BaseUI } from "../../common/baseui";
import { Storage } from '@ionic/storage'
/**
 * Generated class for the AnswerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-answer',
  templateUrl: 'answer.html',
})
export class AnswerPage extends BaseUI{

  content: string;
  id: string;
  Messagerror: any;

  constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public viewCtrl: ViewController,
        public storage: Storage,
        public rest: RestProvider,
        public loadingCtrl: LoadingController,
        public Toast: ToastController
  ) {
    super()
    this.id = navParams.get("id")
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AnswerPage');
  }

  submit(){
      this.storage.get("UserId").then( userid => {
        if(userid !== null) {

        var loading = super.showLoading(this.loadingCtrl, '发表中...');
        this.rest.answer(userid, this.id, this.content).subscribe( f=> {
            console.log(f)
            if(f["Status"]==="OK"){
                loading.dismiss()
                super.showToast(this.Toast, '发表成功')
                setTimeout(() => {
                  this.dismiss()
                }, 2000)

            } else {
                loading.dismiss();
                super.showToast(this.Toast, f["StatusContent"])
            }
        }, error => this.Messagerror = <any>error);

        } else {
          super.showToast(this.Toast, '请登录，后再发表你的感受')
        }
      })
  }

  dismiss(){
      this.viewCtrl.dismiss()
  }

}
