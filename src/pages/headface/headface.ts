import { Component } from '@angular/core';
import { IonicPage, normalizeURL, NavController, NavParams, ModalController, ViewController, ToastController, LoadingController, ActionSheetController, Platform } from 'ionic-angular';
import { Storage } from '@ionic/storage'
import { BaseUI } from '../../common/baseui';
import { RestProvider } from "../../providers/rest/rest";

import { File } from '@ionic-native/file'
import { FilePath } from '@ionic-native/file-path'
import { Transfer, TransferObject } from '@ionic-native/transfer'
import { Camera } from '@ionic-native/camera'

declare var cordova: any; //导入第三方项目到ts里面
/**
 * Generated class for the HeadfacePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-headface',
  templateUrl: 'headface.html',
})
export class HeadfacePage extends BaseUI{

  userId: string;
  errorMessage: string;
  lastImage: string = null;

  constructor(
        public navCtrl: NavController,
        public navParams: NavParams,
        public actionSheetCtrl: ActionSheetController,
        public modalCtrl: ModalController,
        public storage: Storage,
        public loadCtrl: LoadingController,
        public rest: RestProvider,
        public camera: Camera,
        public filePath: FilePath,
        public file: File,
        public transfer: Transfer,
        public platform: Platform,
        public Toast: ToastController,
        public viewCtrl: ViewController
        ) {
    super()
  }

  ionViewDidEnter(){
    this.storage.get('UserId').then( val => {
      if(val != null) {
        this.userId = val;
      }
    })
  }

  presentActionSheet() {
      let actionSheet = this.actionSheetCtrl.create({
        title: '选择图片',
        buttons: [
          {
            text: '从图片库中选择',
            handler: () => {
              this.tackPicture(this.camera.PictureSourceType.PHOTOLIBRARY)
            }
          },{
            text: '使用相机',
            handler: () => {
              this.tackPicture(this.camera.PictureSourceType.CAMERA)
            }
          },{
            text: '取消',
            role: 'cancel',
            handler: () => {
              console.log('Cancel clicked');
            }
          }
        ]
      });
      actionSheet.present()
  }

  tackPicture(sourceType) {
    // 定义相机的一些参数
    var option = {
      quality: 100,
      sourceType: sourceType,
      saveToPhotoAlbum: false, //是否保存拍摄照片到相册当中,
      correctOrientation: true //是否纠正拍摄的照片的方向
    };

    //获取图片的方法
    this.camera.getPicture(option).then((imagePath)=> {
      //特别处理 android 下面文件路径的问题
      if(this.platform.is('android') && sourceType === this.camera.PictureSourceType.PHOTOLIBRARY){
          this.filePath.resolveNativePath(imagePath).then( filePath => { //获取安卓平台下的真实路径
            //获取正确的路径
            alert(filePath +'~~~~'+ imagePath);
            let correctPath = filePath.substring(0, filePath.lastIndexOf('/')+1);
            //获取正确的文件命
            let currentName = imagePath.substring(imagePath.lastIndexOf('/')+1, imagePath.lastIndexOf('?'))
            this.copyFileToLocalDir(correctPath, currentName, this.createFileName())
          })
      } else {
            //获取正确的路径
            let correctPath = imagePath.substr(0, imagePath.lastIndexOf('/')+1);
            //获取正确的文件命
            let currentName = imagePath.substr(imagePath.lastIndexOf('/')+1)
            this.copyFileToLocalDir(correctPath, currentName, this.createFileName());
      }
    },(err) => {
      super.showToast(this.Toast, "选择图片出现错误， 请在 App 中操作或检查相关权限。");
    });

  }

  // 将获取到的图片或者相机拍摄到的图片进行一下另存为，用于后期的图片上传使用
  copyFileToLocalDir(namePath, currentName, newFileName) {
    this.file.copyFile(namePath, currentName, cordova.file.dataDirectory, newFileName).then( success => {
        this.lastImage = newFileName;
    }, error =>{ super.showToast(this.Toast, "存储图片到本地图库错误") })
  }

  // 为文件生成一个新的文件名
  createFileName() {
    var d = new Date(), n = d.getTime(), newFileName = n + ".jpg";
    return newFileName;
  }

  // 处理图片路径为可以上传的路径
  public pathForImage(img) {
    if (img === null) {
      return ''
    } else {
      return normalizeURL(cordova.file.dataDirectory + img );
    }
  }

  uploadImage() {
    var url = 'https://imoocqa.gugujiankong.com/api/account/uploadheadface';
    var targetPath = this.pathForImage(this.lastImage);
    var filename = this.userId + ".jpg"; // 定义上传后的文件名

    //上传的参数
    var options = {
      fileKey: "file",
      fileName: filename,
      chunkedMode: false,
      mimeType: "multipart/form-data",
      params: {
          'fileName': filename,
          'userid': this.userId
      }
    };

    const fileTransfer: TransferObject = this.transfer.create()

    var loading = super.showLoading(this.loadCtrl, '上传中...')

    // 开始正式的上传
    fileTransfer.upload(targetPath, url, options).then((data)=> {
      loading.dismiss();
      super.showToast(this.Toast, '图片上传成功.');
      // 在用户看清弹窗提示后进行页面的关闭
      setTimeout(() => {
        this.viewCtrl.dismiss();
      }, 3000)
    }, err=> {loading.dismiss(); super.showToast(this.Toast, '图片上传出现错误，请重试.')})

  }

}
