import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams, Content, TextInput } from 'ionic-angular';
import {ChatMessage, ChatserviceProvider} from '../../providers/chatservice/chatservice';
import { RestProvider } from "../../providers/rest/rest";
import { Storage } from '@ionic/storage';
import { Events } from 'ionic-angular';

/**
 * Generated class for the ChatdetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-chatdetails',
  templateUrl: 'chatdetails.html',
})
export class ChatdetailsPage {

  chatUserName: string;
  chatUserId:string;
  userId: string;
  userName: string;
  userImgUrl: string;
  isOpenEmojiPick: boolean = false;
  messageList: ChatMessage[] = [];
  errorMessage: any;
  editorMessage: any;

  @ViewChild(Content) content: Content;
  @ViewChild('chatInput') messageInput: TextInput;

  constructor(
          public navCtrl: NavController,
          public navParams: NavParams,
          public chatservice: ChatserviceProvider,
          public storage: Storage,
          public rest: RestProvider,
          public events: Events
          ) {
          this.chatUserName = navParams.get('username');
          this.chatUserId = navParams.get('userid')
  }

  ionViewDidEnter() {

    this.storage.get('UserId').then(val => {
      if (val !== null) {

        this.rest.getUserInfo(val).subscribe( userinfo => {
          this.userId = '140000198202211138';
          this.userName = userinfo["UserNickName"];
          this.userImgUrl = userinfo["UserHeadface"] + "?" + (new Date()).valueOf();
        })

      }
    })

    this.getMessages().then(() => {
      this.scrollToBottom();
    });

    // 听取消息的发送
    this.events.subscribe('chat.received', (msg, time) => {
      this.messageList.push(msg);
      this.scrollToBottom();
    })
  }

  sendMessage(){
      if (!this.editorMessage.trim()){
        return;
      }

      const id = Date.now().toString();
      let messageSend: ChatMessage = {
        messageId: id,
        userId: this.userId,
        username: this.userName,
        userImgUrl: this.userImgUrl,
        toUserId: this.chatUserId,
        time: Date.now(),
        message: this.editorMessage,
        status: 'pending'
      }

      this.messageList.push(messageSend);
      console.log(this.messageList)

      this.scrollToBottom();

      this.editorMessage = '';

      if (!this.isOpenEmojiPick) {
        this.messageInput.setFocus();
      }

      this.chatservice.sendMessage(messageSend).then( () => {
        let index = this.getMessagesIndex(id);
        if  ( index != -1 ) {
            this.messageList[index].status = 'success';
        }
      })

  }

  ionViewWillLeave(){
    this.events.unsubscribe('chat.received');
  }

  focus(){
    this.isOpenEmojiPick = false;
    this.content.resize();
    this.scrollToBottom();
  }

  /*
  * 调用service 里面的方法进行属性的赋值
  *
  * */

  getMessages(){
    return this.chatservice.getMessageList().then( res => {
      this.messageList = res;
    })
    .catch(error => {
      console.error(error);
    })
  }

  /*
  * 切换表情组件
  *
  * */

  switchEmojiPicker(){
    this.isOpenEmojiPick = !this.isOpenEmojiPick;
  }

  private scrollToBottom(): any {
    setTimeout(()=> {
      if (this.content.scrollToBottom) {
        this.content.scrollToBottom();
      }
    }, 400);
  }

  private getMessagesIndex(id: string) {
    return this.messageList.findIndex(e => e.messageId === id);
  }
}
