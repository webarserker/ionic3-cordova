import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController, ToastController, ViewController } from 'ionic-angular';
import { Storage } from '@ionic/storage';
import {BaseUI} from "../../common/baseui";
import { RestProvider } from '../../providers/rest/rest'
import { HeadfacePage } from '../headface/headface'
/**
 * Generated class for the UserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user',
  templateUrl: 'user.html',
})
export class UserPage extends BaseUI{

  headface: string = "http://img.mukewang.com/user/57a322f00001e4ae02560256-40-40.jpg?";
  nickname: string;
  errorMessage: any;

  constructor(
          public navCtrl: NavController,
          public navParams: NavParams,
          public storage: Storage,
          public loadCtrl: LoadingController,
          public rest: RestProvider,
          public Toast: ToastController,
          public viewCtrl:  ViewController
          ) {
      super()
  }

  ionViewDidEnter() {
    this.loadUserPage();
  }

  loadUserPage() {
    this.storage.get('UserId').then((val) => {
      if (val != null) {
        //加载用户数据
        var loading = super.showLoading(this.loadCtrl, "加载中...");
        this.rest.getUserInfo(val)
          .subscribe(
            userinfo => {
              this.nickname = userinfo["UserNickName"];
              this.headface = userinfo["UserHeadface"] + "?" + (new Date()).valueOf();
              loading.dismiss();
            },
            error => this.errorMessage = <any>error);
      }
    });
  }

  updateNickName(){
    this.storage.get('UserId').then((val) => {
      if (val != null) {
        var loading = super.showLoading(this.loadCtrl, '加载中...')
        this.rest.updateNickName(val, this.nickname).subscribe(f => {
          if(f["Status"] == "OK") {
            loading.dismiss()
            super.showToast(this.Toast, '昵称修改成功')
          } else {
            loading.dismiss()
            super.showToast(this.Toast, f["StatusContent"])
          }
        }, error => this.errorMessage = <any>error)
      }
    })
  }

  loginout() {
    this.storage.remove('UserId')
    this.viewCtrl.dismiss()
  }

  gotoHeadface() {
    this.navCtrl.push(HeadfacePage);
  }

}
