import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, LoadingController } from 'ionic-angular';
import { LoginPage } from '../login/login'
import { Storage } from '@ionic/storage'
import { BaseUI } from '../../common/baseui';
import { RestProvider } from "../../providers/rest/rest";
import { UserPage } from "../user/user";

import { UserdatalistPage } from "../userdatalist/userdatalist";
import { SettingsProvider } from '../../providers/settings/settings';

import { ScanPage } from "../scan/scan";
import { VersionsPage } from "../versions/versions"

/**
 * Generated class for the TabMorePage page.
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tab-more',
  templateUrl: 'tab-more.html',
})
export class TabMorePage extends BaseUI {

  public notLogin: boolean = true
  public logined: boolean = false
  headface: string;
  userinfo: string[];
  public selectedTheme: string;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public modalCtrl: ModalController,
              public storage: Storage,
              public loadCtrl: LoadingController,
              public rest: RestProvider,
              private settings: SettingsProvider,
  ) {
    super();
    this.settings.getActiveTheme().subscribe( f=> { this.selectedTheme = f });
  }

  showModal() {
    let modal = this.modalCtrl.create(LoginPage);
    //关闭后的回调
    modal.onDidDismiss(() => {
      this.loadUserPage();
    });

    modal.present();
  }

  ionViewDidLoad() {
      this.loadUserPage();
    }

    //"{\"UserId\":\"5996953615f87ec629cff319\",\"UserNickName\":\"jion\",\"UserHeadface\":\"https://imoocqa.gugujiankong.com/users/5996953615f87ec629cff319.jpg\",\"Status\":\"OK\",\"StatusContent\":\"登录成功\"}"

    loadUserPage() {
      this.storage.get('UserId').then((val)=>{
          if(val != null && val != "") {
            var loading = super.showLoading(this.loadCtrl, "加载中...");
            this.rest.getUserInfo(val).subscribe(userinfo => {
              this.userinfo = userinfo
              // this.headface = userinfo["UserHeadface"] + "?" + (new Date()).valueOf();
              this.headface = userinfo["UserHeadface"] + "?" + (new Date()).valueOf();
              loading.dismiss()
              this.notLogin = false;
              this.logined = true;
            })
          } else {
            this.notLogin = true;
            this.logined = false;
          }
      })
    };

    gotoUserPage() {
        this.navCtrl.push(UserPage);
    }

    gotoDataList(type) {
        this.navCtrl.push(UserdatalistPage, { "dataType": type });
    }

    /*
    * 跳转到扫描二维码页面，加上 "animate": false 的参数为了让相机在整个屏幕中显示，
    * 如果不加就出不来；
    * */

    gotoScanQRCode(){
        this.navCtrl.push(ScanPage, null,{"animate": false});
    }

    gotoVersions(){
        this.navCtrl.push(VersionsPage);
    }

    toggleChangeTheme(){
      if (this.selectedTheme === 'dark-theme') {
        this.selectedTheme = "light-theme"
      } else {
        this.selectedTheme = "dark-theme"
      }

        this.settings.setActiveTheme(this.selectedTheme);
    }



}
