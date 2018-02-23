import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController, LoadingController, ToastController  } from 'ionic-angular';
import { BaseUI } from '../../common/baseui';
import { RestProvider } from '../../providers/rest/rest'

/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html',
})
export class RegisterPage extends BaseUI {

  mobile: any;
  password: any;
  nickname: any;
  confirmPassword: any;
  errorMessage: any;

  constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public viewCtrl: ViewController,
        public rest: RestProvider,
        public loadingCtrl: LoadingController,
        public toastCtrl: ToastController
  ) {
        super();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegisterPage');
  }

  gotoLogin() {
    this.navCtrl.pop();
  }

  doRegister() {
    //前台验证表单数据的准确性，包括手机号码，昵称长度，密码长度
    //验证国内手机号码的格式，考虑所有的当前手机号码的可行性

    if(!(/^1[34578]\d{9}$/.test(this.mobile))){
      // 后台进行大数据保存
      super.showToast(this.toastCtrl, "您的手机号码输入不规范.");
    }else if(this.nickname.length<3 || this.nickname.length>10){
      super.showToast(this.toastCtrl, "昵称长度在3~10位.");
    }else if (this.password.length< 6 || this.password.length>20 || this.confirmPassword.length< 6 || this.confirmPassword.length>20){
      super.showToast(this.toastCtrl, "密码长度在6~20以内.");
    }else if (this.password != this.confirmPassword) {
      super.showToast(this.toastCtrl, "两次输入的密码不匹配.");
    }
    else {
      var loading = super.showLoading(this.loadingCtrl, '登录中...')
      this.rest.register(this.mobile, this.password, this.nickname).subscribe(f => {
          console.log(f)
          if(f["Status"] == "OK") {
            loading.dismiss()
            super.showToast(this.toastCtrl, '注册成功')
          } else {
            loading.dismiss()
            super.showToast(this.toastCtrl, f["StatusContent"])
          }
        },error => this.errorMessage = <any>error
      );
    }
  }
}
