import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';

import { HomePage } from '../pages/home/home';
import { TabDiscoveryPage} from "../pages/tab-discovery/tab-discovery";
import { TabChatPage } from "../pages/tab-chat/tab-chat";
import { TabMorePage } from "../pages/tab-more/tab-more";
import { TabNotificationPage } from "../pages/tab-notification/tab-notification";
import { LoginPage } from '../pages/login/login'
import { RegisterPage } from '../pages/register/register'
import { UserPage } from "../pages/user/user";
import { HeadfacePage } from "../pages/headface/headface";
import { QuestionPage } from "../pages/question/question";
import { DetailsPage } from '../pages/details/details'
import { AnswerPage } from "../pages/answer/answer"
import { ChatdetailsPage } from "../pages/chatdetails/chatdetails"
import { UserdatalistPage } from "../pages/userdatalist/userdatalist"

import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { RestProvider } from '../providers/rest/rest';
import { IonicStorageModule } from '@ionic/storage'

import { File } from '@ionic-native/file'
import { FilePath } from '@ionic-native/file-path'
import { Transfer } from '@ionic-native/transfer'
import { Camera } from '@ionic-native/camera'

import { EmojiProvider } from '../providers/emoji/emoji';
import { ComponentsModule } from '../components/components.module'
import { ChatserviceProvider } from '../providers/chatservice/chatservice';
import { QRScanner } from '@ionic-native/qr-scanner';
import { ScanPage } from "../pages/scan/scan";
import { VersionsPage } from "../pages/versions/versions"

import { AppVersion } from '@ionic-native/app-version';
import { RelativetimePipe } from '../pipes/relativetime/relativetime'
import { SettingsProvider } from '../providers/settings/settings';

@NgModule({
  declarations: [
    MyApp,
    TabDiscoveryPage,
    TabChatPage,
    TabMorePage,
    TabNotificationPage,
    HomePage,
    LoginPage,
    TabsPage,
    RegisterPage,
    UserPage,
    HeadfacePage,
    QuestionPage,
    DetailsPage,
    AnswerPage,
    ChatdetailsPage,
    RelativetimePipe,
    UserdatalistPage,
    ScanPage,
    VersionsPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp, {
      backButtonText: '返回',
    }),
    IonicStorageModule.forRoot(),
    ComponentsModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabDiscoveryPage,
    TabChatPage,
    TabMorePage,
    TabNotificationPage,
    HomePage,
    LoginPage,
    TabsPage,
    RegisterPage,
    UserPage,
    HeadfacePage,
    QuestionPage,
    DetailsPage,
    AnswerPage,
    ChatdetailsPage,
    UserdatalistPage,
    ScanPage,
    VersionsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    RestProvider,
    File,
    FilePath,
    Transfer,
    Camera,
    QRScanner,
    AppVersion,
    EmojiProvider,
    ChatserviceProvider,
    SettingsProvider
  ]
})
export class AppModule {}
