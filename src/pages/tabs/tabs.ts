import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { TabDiscoveryPage} from "../tab-discovery/tab-discovery";
import { TabChatPage } from "../tab-chat/tab-chat";
import { TabMorePage } from "../tab-more/tab-more";
import { TabNotificationPage } from "../tab-notification/tab-notification";

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tabHome = HomePage;
  tabDiscovery = TabDiscoveryPage;
  tabChat = TabChatPage;
  tabNotification = TabNotificationPage;
  tabMore = TabMorePage;

  constructor() {

  }
}
