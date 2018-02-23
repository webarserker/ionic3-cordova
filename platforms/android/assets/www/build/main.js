webpackJsonp([0],{

/***/ 136:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SettingsProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/*
  Generated class for the SettingsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var SettingsProvider = (function () {
    function SettingsProvider(http) {
        this.http = http;
        this.theme = new __WEBPACK_IMPORTED_MODULE_3_rxjs_Rx__["BehaviorSubject"]('light-theme');
    }
    SettingsProvider.prototype.setActiveTheme = function (val) {
        this.theme.next(val);
    };
    SettingsProvider.prototype.getActiveTheme = function () {
        return this.theme.asObservable();
    };
    return SettingsProvider;
}());
SettingsProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], SettingsProvider);

//# sourceMappingURL=settings.js.map

/***/ }),

/***/ 147:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 147;

/***/ }),

/***/ 190:
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = 190;

/***/ }),

/***/ 22:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RestProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_http__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(237);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__ = __webpack_require__(238);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_Rx___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_Rx__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var RestProvider = (function () {
    function RestProvider(http) {
        this.http = http;
        //feed
        this.apiUrlFeeds = 'https://imoocqa.gugujiankong.com/api/feeds/get';
        //account
        this.apiUrlRegister = 'https://imoocqa.gugujiankong.com/api/account/register';
        this.apiUrlLogin = 'https://imoocqa.gugujiankong.com/api/account/login';
        this.apiUrlUserInfo = 'https://imoocqa.gugujiankong.com/api/account/userinfo';
        this.apiUrlUpdateNickName = 'https://imoocqa.gugujiankong.com/api/account/updatenickname';
        this.apiGetUserQuestionList = "https://imoocqa.gugujiankong.com/api/account/getuserquestionlist";
        //question
        this.apiUrlQuestionSave = 'https://imoocqa.gugujiankong.com/api/question/save';
        this.apiUrlQuestionList = 'https://imoocqa.gugujiankong.com/api/question/list?index=1&number=10';
        // private apiUrlGetQuestion = "https://imoocqa.gugujiankong.com/api/question/get";
        this.apiUrlGetQuestionWithUser = "https://imoocqa.gugujiankong.com/api/question/getwithuser";
        this.apiUrlAnswer = "https://imoocqa.gugujiankong.com/api/question/answer";
        this.apiUrlSaveFavourite = "https://imoocqa.gugujiankong.com/api/question/savefavourite";
        //notification
        this.apiUrlUserNotifications = "https://imoocqa.gugujiankong.com/api/account/usernotifications";
        // console.log('Hello RestProvider Provider');
    }
    RestProvider.prototype.login = function (moible, password) {
        return this.getUrlReturn(this.apiUrlLogin + "?mobile=" + moible + "&password=" + password);
    };
    RestProvider.prototype.register = function (moible, nickname, password) {
        return this.getUrlReturn(this.apiUrlRegister + "?mobile=" + moible + "&nickname=" + nickname + "&password=" + password);
    };
    RestProvider.prototype.getUserInfo = function (userId) {
        return this.getUrlReturn(this.apiUrlUserInfo + "?userId=" + userId);
    };
    RestProvider.prototype.updateNickName = function (userId, nickname) {
        return this.getUrlReturn(this.apiUrlUpdateNickName + "?userid=" + userId + "&nickname=" + nickname);
    };
    RestProvider.prototype.saveQuestion = function (userId, title, content) {
        return this.getUrlReturn(this.apiUrlQuestionSave + "?userid=" + userId + "&title=" + title + "&content=" + content);
    };
    RestProvider.prototype.getFeeds = function () {
        return this.getUrlReturn(this.apiUrlFeeds);
    };
    RestProvider.prototype.getQuestionWithUser = function (questionId, userId) {
        return this.getUrlReturn(this.apiUrlGetQuestionWithUser + "?id=" + questionId + "&userid=" + userId);
    };
    RestProvider.prototype.saveFavourite = function (questionId, userId) {
        return this.getUrlReturn(this.apiUrlSaveFavourite + "?questionid=" + questionId + "&userid=" + userId);
    };
    RestProvider.prototype.answer = function (userId, questionId, content) {
        return this.getUrlReturn(this.apiUrlAnswer + "?userid=" + userId + "&questionid=" + questionId + "&content=" + content);
    };
    RestProvider.prototype.getQuestions = function () {
        return this.getUrlReturn(this.apiUrlQuestionList);
    };
    RestProvider.prototype.getUserNotifications = function (userId) {
        return this.getUrlReturn(this.apiUrlUserNotifications + "?userid=" + userId);
    };
    RestProvider.prototype.getUserQuestionList = function (userId, type) {
        return this.getUrlReturn(this.apiGetUserQuestionList + "?userid=" + userId + "&type=" + type);
    };
    /**
     * 全局获取 HTTP 请求的方法
     * @LX
     * @param {string} url
     * @returns {Observable<string[]>}
     * @memberOf RestProvider
     */
    RestProvider.prototype.getUrlReturn = function (url) {
        return this.http.get(url)
            .map(this.extractData)
            .catch(this.handleError);
    };
    RestProvider.prototype.extractData = function (res) {
        var body = res.json();
        return JSON.parse(body) || {};
    };
    RestProvider.prototype.handleError = function (error) {
        var errMsg;
        if (error.error instanceof ErrorEvent) {
            var body = error.json() || '';
            var err = body.error || JSON.stringify(body);
            errMsg = error.status + " - " + (error.statusText || '') + " " + err;
        }
        else {
            errMsg = error.status ? error.status : error.toString();
        }
        console.error(errMsg);
        return __WEBPACK_IMPORTED_MODULE_0_rxjs_Observable__["Observable"].throw(errMsg);
    };
    return RestProvider;
}());
RestProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__angular_http__["a" /* Http */]])
], RestProvider);

//# sourceMappingURL=rest.js.map

/***/ }),

/***/ 235:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__home_home__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__tab_discovery_tab_discovery__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__tab_chat_tab_chat__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__tab_more_tab_more__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__tab_notification_tab_notification__ = __webpack_require__(281);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var TabsPage = (function () {
    function TabsPage() {
        this.tabHome = __WEBPACK_IMPORTED_MODULE_1__home_home__["a" /* HomePage */];
        this.tabDiscovery = __WEBPACK_IMPORTED_MODULE_2__tab_discovery_tab_discovery__["a" /* TabDiscoveryPage */];
        this.tabChat = __WEBPACK_IMPORTED_MODULE_3__tab_chat_tab_chat__["a" /* TabChatPage */];
        this.tabNotification = __WEBPACK_IMPORTED_MODULE_5__tab_notification_tab_notification__["a" /* TabNotificationPage */];
        this.tabMore = __WEBPACK_IMPORTED_MODULE_4__tab_more_tab_more__["a" /* TabMorePage */];
    }
    return TabsPage;
}());
TabsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"F:\creatVue\ionicApp\zhihuapp\src\pages\tabs\tabs.html"*/'<ion-tabs selectedIndex="4">\n  <ion-tab [root]="tabHome" tabTitle="首页" tabIcon="list-box"></ion-tab>\n  <ion-tab [root]="tabDiscovery" tabTitle="发现" tabIcon="navigate"></ion-tab>\n  <ion-tab [root]="tabChat" tabTitle="聊天" tabIcon="chatbubbles"></ion-tab>\n  <ion-tab [root]="tabNotification" tabTitle="通知" tabIcon="notifications"></ion-tab>\n  <ion-tab [root]="tabMore" tabTitle="更多" tabIcon="menu"></ion-tab>\n</ion-tabs>\n'/*ion-inline-end:"F:\creatVue\ionicApp\zhihuapp\src\pages\tabs\tabs.html"*/
    }),
    __metadata("design:paramtypes", [])
], TabsPage);

//# sourceMappingURL=tabs.js.map

/***/ }),

/***/ 236:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_baseui__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_rest_rest__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_details_details__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__question_question__ = __webpack_require__(262);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var HomePage = (function (_super) {
    __extends(HomePage, _super);
    function HomePage(navCtrl, modalCter, loading, rest) {
        var _this = _super.call(this) || this;
        _this.navCtrl = navCtrl;
        _this.modalCter = modalCter;
        _this.loading = loading;
        _this.rest = rest;
        return _this;
    }
    HomePage.prototype.ionViewDidLoad = function () {
        this.getFeeds();
    };
    HomePage.prototype.gotoQuestion = function () {
        var modal = this.modalCter.create(__WEBPACK_IMPORTED_MODULE_5__question_question__["a" /* QuestionPage */]);
        modal.present();
    };
    HomePage.prototype.gotoChat = function () {
        this.selectTab(2);
    };
    HomePage.prototype.selectTab = function (index) {
        var t = this.navCtrl.parent;
        t.select(index);
    };
    HomePage.prototype.getFeeds = function () {
        var _this = this;
        var loading = _super.prototype.showLoading.call(this, this.loading, '加载中...');
        this.rest.getFeeds().subscribe(function (f) {
            _this.feeds = f;
            loading.dismiss();
        }, function (error) { return _this.errorMessage = error; });
    };
    HomePage.prototype.gotoDetails = function (questionId) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pages_details_details__["a" /* DetailsPage */], { id: questionId });
    };
    return HomePage;
}(__WEBPACK_IMPORTED_MODULE_2__common_baseui__["a" /* BaseUI */]));
HomePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-home',template:/*ion-inline-start:"F:\creatVue\ionicApp\zhihuapp\src\pages\home\home.html"*/'<ion-header>\n  <ion-toolbar>\n    <ion-searchbar placeholder="搜索:如何高效学习 ionic 开发"></ion-searchbar>\n    <ion-icon name="text" class="top_header_message_icon" (tap)="gotoChat()"></ion-icon>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n <div class="floatMenu">\n  <ion-grid>\n    <ion-row>\n      <ion-col col-4 text-center>\n        <div (tap)="gotoQuestion()">\n          <ion-icon name="create"></ion-icon> 提问\n        </div>\n      </ion-col>\n      <ion-col col-4 text-center>\n        <div>\n          <span style="float:left; color: #dddddd">|</span>\n          <ion-icon name="albums"></ion-icon> 回答\n          <span style="float:right; color: #dddddd">|</span>\n        </div>\n      </ion-col>\n      <ion-col col-4 text-center>\n        <div (tap)="gotoQuestion()">\n          <ion-icon name="share-alt"></ion-icon> 分享\n        </div>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n </div>\n  <ion-card *ngFor="let f of feeds" (click)="gotoDetails(f.IdentityId)">\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="{{f.HeadFace}}" />\n      </ion-avatar>\n      <p>{{f.UserNickName}}回答了该问题\n        <ion-icon class="more_button" name="more"></ion-icon>\n      </p>\n    </ion-item>\n    <h2>{{f.ContentTitle}}</h2>\n    <ion-card-content>\n      <p>{{f.ContentSummary}}</p>\n    </ion-card-content>\n    <ion-row>\n      <ion-col col-8 center text-left>\n        <ion-note>\n          {{f.LikeCount}}&nbsp;赞同&nbsp;&nbsp;·&nbsp;&nbsp;{{f.CommentCount}}&nbsp;评论&nbsp;&nbsp;·&nbsp;&nbsp;关注问题\n        </ion-note>\n      </ion-col>\n      <ion-col col-4></ion-col>\n    </ion-row>\n  </ion-card>\n</ion-content>\n'/*ion-inline-end:"F:\creatVue\ionicApp\zhihuapp\src\pages\home\home.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_rest_rest__["a" /* RestProvider */]])
], HomePage);

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 25:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BaseUI; });
var BaseUI = (function () {
    function BaseUI() {
    }
    /**
     * 通用的展示 loading 的组件
     *
     * @protected
     * @param {LoadingController} loadingCtrl
     * @param {string} message
     * @returns {Loading}
     * @memberof BaseUI
     */
    BaseUI.prototype.showLoading = function (loadingCtrl, message) {
        var loader = loadingCtrl.create({
            content: message,
            dismissOnPageChange: true //页面变化的时候自动关闭 loading
        });
        loader.present();
        return loader;
    };
    /**
     * 通用的展示 toast 的组件
     *
     * @protected
     * @param {ToastController} toastCtrl
     * @param {string} message
     * @returns {Toast}
     * @memberof BaseUI
     */
    BaseUI.prototype.showToast = function (toastCtrl, message) {
        var toast = toastCtrl.create({
            message: message,
            duration: 3000,
            position: 'bottom'
        });
        toast.present();
        return toast;
    };
    return BaseUI;
}());

//# sourceMappingURL=baseui.js.map

/***/ }),

/***/ 261:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AnswerPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_baseui__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(29);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the AnswerPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var AnswerPage = (function (_super) {
    __extends(AnswerPage, _super);
    function AnswerPage(navCtrl, navParams, viewCtrl, storage, rest, loadingCtrl, Toast) {
        var _this = _super.call(this) || this;
        _this.navCtrl = navCtrl;
        _this.navParams = navParams;
        _this.viewCtrl = viewCtrl;
        _this.storage = storage;
        _this.rest = rest;
        _this.loadingCtrl = loadingCtrl;
        _this.Toast = Toast;
        _this.id = navParams.get("id");
        return _this;
    }
    AnswerPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad AnswerPage');
    };
    AnswerPage.prototype.submit = function () {
        var _this = this;
        this.storage.get("UserId").then(function (userid) {
            if (userid !== null) {
                var loading = _super.prototype.showLoading.call(_this, _this.loadingCtrl, '发表中...');
                _this.rest.answer(userid, _this.id, _this.content).subscribe(function (f) {
                    console.log(f);
                    if (f["Status"] === "OK") {
                        loading.dismiss();
                        _super.prototype.showToast.call(_this, _this.Toast, '发表成功');
                        setTimeout(function () {
                            _this.dismiss();
                        }, 2000);
                    }
                    else {
                        loading.dismiss();
                        _super.prototype.showToast.call(_this, _this.Toast, f["StatusContent"]);
                    }
                }, function (error) { return _this.Messagerror = error; });
            }
            else {
                _super.prototype.showToast.call(_this, _this.Toast, '请登录，后再发表你的感受');
            }
        });
    };
    AnswerPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    return AnswerPage;
}(__WEBPACK_IMPORTED_MODULE_3__common_baseui__["a" /* BaseUI */]));
AnswerPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-answer',template:/*ion-inline-start:"F:\creatVue\ionicApp\zhihuapp\src\pages\answer\answer.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>回答</ion-title>\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()">\n        <span icon-text showWhen="ios">取消</span>\n        <ion-icon name="md-close" showWhen="android"></ion-icon>\n      </button>\n    </ion-buttons>\n    <ion-buttons end>\n      <button ion-button (click)="submit()">\n        <span ion-text color="primary" showWhen="ios">发布</span>\n        <ion-icon name="md-add-cricle" showWhen="android"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n  <ion-list>\n    <ion-item>\n      <ion-label stacked>请输入回答内容</ion-label>\n      <ion-textarea type="text" rows="20" style="height:100%;" [(ngModel)]="content"></ion-textarea>\n    </ion-item>\n  </ion-list>\n\n\n</ion-content>\n'/*ion-inline-end:"F:\creatVue\ionicApp\zhihuapp\src\pages\answer\answer.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */]])
], AnswerPage);

//# sourceMappingURL=answer.js.map

/***/ }),

/***/ 262:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_baseui__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_rest_rest__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(29);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the QuestionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var QuestionPage = (function (_super) {
    __extends(QuestionPage, _super);
    function QuestionPage(navCtrl, navParams, ViewCtrl, rest, storage, loading, Toast) {
        var _this = _super.call(this) || this;
        _this.navCtrl = navCtrl;
        _this.navParams = navParams;
        _this.ViewCtrl = ViewCtrl;
        _this.rest = rest;
        _this.storage = storage;
        _this.loading = loading;
        _this.Toast = Toast;
        return _this;
    }
    QuestionPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad QuestionPage');
    };
    QuestionPage.prototype.dismiss = function () {
        this.ViewCtrl.dismiss();
    };
    QuestionPage.prototype.submitQuestion = function () {
        var _this = this;
        this.storage.get('UserId').then(function (f) {
            if (f !== null) {
                var loading = _super.prototype.showLoading.call(_this, _this.loading, '提交中...');
                _this.rest.saveQuestion(f, _this.title, _this.content).subscribe(function (sucess) {
                    if (sucess["Status"] === "OK") {
                        loading.dismiss();
                        _super.prototype.showToast.call(_this, _this.Toast, sucess["StatusContent"]);
                        setTimeout(function () {
                            _this.dismiss();
                        }, 3000);
                    }
                    else {
                        loading.dismiss();
                        _super.prototype.showToast.call(_this, _this.Toast, sucess["StatusContent"]);
                    }
                }, function (error) { return _this.errorMessage = error; });
            }
            else {
                _super.prototype.showToast.call(_this, _this.Toast, '请登录后发布！');
            }
        });
    };
    return QuestionPage;
}(__WEBPACK_IMPORTED_MODULE_2__common_baseui__["a" /* BaseUI */]));
QuestionPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-question',template:/*ion-inline-start:"F:\creatVue\ionicApp\zhihuapp\src\pages\question\question.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>提问</ion-title>\n    <ion-buttons start>\n      <button ion-button (click)="dismiss()"></button>\n      <span ion-text color="primary" showWhen="ios">取消</span>\n      <ion-icon name="md-close" showWhen="android"></ion-icon>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-list>\n    <ion-item>\n      <ion-label stacked>问题标题</ion-label>\n      <ion-input type="text" [(ngModel)]="title"></ion-input>\n    </ion-item>\n    <ion-item>\n      <ion-label stacked>问题内容</ion-label>\n      <ion-textarea type="text" rows="5" [(ngModel)]="content"></ion-textarea>\n    </ion-item>\n  </ion-list>\n  <div padding>\n      <button ion-button color="primary" block (click)="submitQuestion()">提 问</button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"F:\creatVue\ionicApp\zhihuapp\src\pages\question\question.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_rest_rest__["a" /* RestProvider */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */]])
], QuestionPage);

//# sourceMappingURL=question.js.map

/***/ }),

/***/ 263:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabDiscoveryPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_baseui__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__details_details__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_rest_rest__ = __webpack_require__(22);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





/**
 * Generated class for the TabDiscoveryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TabDiscoveryPage = (function (_super) {
    __extends(TabDiscoveryPage, _super);
    function TabDiscoveryPage(navCtrl, navParams, rest, loading) {
        var _this = _super.call(this) || this;
        _this.navCtrl = navCtrl;
        _this.navParams = navParams;
        _this.rest = rest;
        _this.loading = loading;
        return _this;
    }
    TabDiscoveryPage.prototype.ionViewDidLoad = function () {
        this.getQuestions();
    };
    TabDiscoveryPage.prototype.getQuestions = function () {
        var _this = this;
        var loading = _super.prototype.showLoading.call(this, this.loading, '加载中...');
        this.rest.getQuestions().subscribe(function (f) {
            loading.dismissAll();
            _this.questions = f;
        }, function (error) { return _this.Messagerror = error; });
    };
    TabDiscoveryPage.prototype.doRefresh = function (refresher) {
        this.getQuestions();
        refresher.complete();
    };
    TabDiscoveryPage.prototype.gotoDetails = function (questionId) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__details_details__["a" /* DetailsPage */], { id: questionId });
    };
    return TabDiscoveryPage;
}(__WEBPACK_IMPORTED_MODULE_2__common_baseui__["a" /* BaseUI */]));
TabDiscoveryPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-tab-discovery',template:/*ion-inline-start:"F:\creatVue\ionicApp\zhihuapp\src\pages\tab-discovery\tab-discovery.html"*/'<!--\n  Generated template for the TabDiscoveryPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>发现</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-refresher (ionRefresh)="doRefresh($event)">\n    <ion-refresher-content pullingIcon="arrow-dropdown"\n                           pullingText="下拉刷新"\n                           refreshingSpinner="circles"\n                           refreshingText="数据加载中...">\n    </ion-refresher-content>\n  </ion-refresher>\n  <ion-card *ngFor="let q of questions" (click)="gotoDetails(q.IdentityId)">\n    <ion-item>\n        <ion-avatar item-start>\n          <img src="{{q.HeadFace}}" />\n        </ion-avatar>\n        <p>\n          {{q.UserNickName}}发布了该问题\n          <ion-icon color="primary" class="more_button" name="more">more</ion-icon>\n        </p>\n    </ion-item>\n    <h2>{{q.ContentTitle}}</h2>\n    <ion-card-content>\n      <p>{{q.ContentSummary}}</p>\n    </ion-card-content>\n    <ion-row>\n      <ion-col col-8 center text-left>\n        <ion-note>\n          {{q.LikeCount}}   赞同      ·    {{q.CommentCount}}  评论 ·  关注问题\n        </ion-note>\n      </ion-col>\n      <ion-col col-4></ion-col>\n    </ion-row>\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"F:\creatVue\ionicApp\zhihuapp\src\pages\tab-discovery\tab-discovery.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_4__providers_rest_rest__["a" /* RestProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */]])
], TabDiscoveryPage);

//# sourceMappingURL=tab-discovery.js.map

/***/ }),

/***/ 264:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabChatPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__chatdetails_chatdetails__ = __webpack_require__(265);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the TabChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TabChatPage = (function () {
    function TabChatPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.userinfo = {
            userid: '123321',
            username: '慕女神'
        };
        this.ChatdetailsPage = __WEBPACK_IMPORTED_MODULE_2__chatdetails_chatdetails__["a" /* ChatdetailsPage */];
    }
    return TabChatPage;
}());
TabChatPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-tab-chat',template:/*ion-inline-start:"F:\creatVue\ionicApp\zhihuapp\src\pages\tab-chat\tab-chat.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>聊天</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n  <ion-list>\n    <ion-item [navPush]="ChatdetailsPage" [navParams]="userinfo">\n      <ion-avatar item-left>\n        <img src="http://img.mukewang.com/user/57a322f00001e4ae02560256-40-40.jpg" />\n      </ion-avatar>\n      <h2>慕女神</h2>\n      <p>描述</p>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"F:\creatVue\ionicApp\zhihuapp\src\pages\tab-chat\tab-chat.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
], TabChatPage);

//# sourceMappingURL=tab-chat.js.map

/***/ }),

/***/ 265:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatdetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_chatservice_chatservice__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_rest_rest__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(29);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the ChatdetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ChatdetailsPage = (function () {
    function ChatdetailsPage(navCtrl, navParams, chatservice, storage, rest, events) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.chatservice = chatservice;
        this.storage = storage;
        this.rest = rest;
        this.events = events;
        this.isOpenEmojiPick = false;
        this.messageList = [];
        this.chatUserName = navParams.get('username');
        this.chatUserId = navParams.get('userid');
    }
    ChatdetailsPage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.storage.get('UserId').then(function (val) {
            if (val !== null) {
                _this.rest.getUserInfo(val).subscribe(function (userinfo) {
                    _this.userId = '140000198202211138';
                    _this.userName = userinfo["UserNickName"];
                    _this.userImgUrl = userinfo["UserHeadface"] + "?" + (new Date()).valueOf();
                });
            }
        });
        this.getMessages().then(function () {
            _this.scrollToBottom();
        });
        // 听取消息的发送
        this.events.subscribe('chat.received', function (msg, time) {
            _this.messageList.push(msg);
            _this.scrollToBottom();
        });
    };
    ChatdetailsPage.prototype.sendMessage = function () {
        var _this = this;
        if (!this.editorMessage.trim()) {
            return;
        }
        var id = Date.now().toString();
        var messageSend = {
            messageId: id,
            userId: this.userId,
            username: this.userName,
            userImgUrl: this.userImgUrl,
            toUserId: this.chatUserId,
            time: Date.now(),
            message: this.editorMessage,
            status: 'pending'
        };
        this.messageList.push(messageSend);
        console.log(this.messageList);
        this.scrollToBottom();
        this.editorMessage = '';
        if (!this.isOpenEmojiPick) {
            this.messageInput.setFocus();
        }
        this.chatservice.sendMessage(messageSend).then(function () {
            var index = _this.getMessagesIndex(id);
            if (index != -1) {
                _this.messageList[index].status = 'success';
            }
        });
    };
    ChatdetailsPage.prototype.ionViewWillLeave = function () {
        this.events.unsubscribe('chat.received');
    };
    ChatdetailsPage.prototype.focus = function () {
        this.isOpenEmojiPick = false;
        this.content.resize();
        this.scrollToBottom();
    };
    /*
    * 调用service 里面的方法进行属性的赋值
    *
    * */
    ChatdetailsPage.prototype.getMessages = function () {
        var _this = this;
        return this.chatservice.getMessageList().then(function (res) {
            _this.messageList = res;
        })
            .catch(function (error) {
            console.error(error);
        });
    };
    /*
    * 切换表情组件
    *
    * */
    ChatdetailsPage.prototype.switchEmojiPicker = function () {
        this.isOpenEmojiPick = !this.isOpenEmojiPick;
    };
    ChatdetailsPage.prototype.scrollToBottom = function () {
        var _this = this;
        setTimeout(function () {
            if (_this.content.scrollToBottom) {
                _this.content.scrollToBottom();
            }
        }, 400);
    };
    ChatdetailsPage.prototype.getMessagesIndex = function (id) {
        return this.messageList.findIndex(function (e) { return e.messageId === id; });
    };
    return ChatdetailsPage;
}());
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */]),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["c" /* Content */])
], ChatdetailsPage.prototype, "content", void 0);
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_14" /* ViewChild */])('chatInput'),
    __metadata("design:type", __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["n" /* TextInput */])
], ChatdetailsPage.prototype, "messageInput", void 0);
ChatdetailsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-chatdetails',template:/*ion-inline-start:"F:\creatVue\ionicApp\zhihuapp\src\pages\chatdetails\chatdetails.html"*/'<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{chatUserName}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n  <div class="message-wrap">\n\n    <div class="message" *ngFor="let m of messageList"\n         [class.left]="m.userId === chatUserId"\n         [class.right]="m.userId === userId"\n    >\n      <img [src]="m.userImgUrl" class="user-img"  />\n      <ion-spinner name="dots" *ngIf="m.status === \'pending\'"></ion-spinner>\n      <div class="msg-detail">\n        <div class="msg-info">\n          <p>{{m.username}} {{m.time | relativetime}}</p>\n        </div>\n        <div class="msg-content">\n          <p class="line-breaker">{{m.message}}</p>\n        </div>\n      </div>\n    </div>\n\n\n  </div>\n</ion-content>\n\n<ion-footer no-border [style.height]="isOpenEmojiPick? \'255px\' : \'55px\' ">\n  <ion-grid class="input-wrap">\n    <ion-row>\n      <ion-col col-2>\n        <button ion-button clear ion-only item-right (click)="switchEmojiPicker()">\n          <ion-icon name="md-happy"></ion-icon>\n        </button>\n      </ion-col>\n      <ion-col col-8>\n          <ion-textarea\n            #chatInput\n            [(ngModel)]="editorMessage"\n            (keyup.enter)="sendMessage()"\n            (focus)="focus()"\n            placeholder="输入内容"></ion-textarea>\n      </ion-col>\n      <ion-col col-2>\n        <button ion-button clear ion-only item-right (click)="sendMessage()">\n          <ion-icon name="send"></ion-icon>\n        </button>\n      </ion-col>\n    </ion-row>\n  </ion-grid>\n\n  <emojipicker *ngIf="isOpenEmojiPick" [(ngModel)]="editorMessage"></emojipicker>\n\n</ion-footer>\n'/*ion-inline-end:"F:\creatVue\ionicApp\zhihuapp\src\pages\chatdetails\chatdetails.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__providers_chatservice_chatservice__["a" /* ChatserviceProvider */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_3__providers_rest_rest__["a" /* RestProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* Events */]])
], ChatdetailsPage);

//# sourceMappingURL=chatdetails.js.map

/***/ }),

/***/ 266:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export ChatMessage */
/* unused harmony export UserInfo */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatserviceProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




// 聊天信息的属性
var ChatMessage = (function () {
    function ChatMessage() {
    }
    return ChatMessage;
}());

//用户信息的属性
var UserInfo = (function () {
    function UserInfo() {
    }
    return UserInfo;
}());

var ChatserviceProvider = (function () {
    function ChatserviceProvider(http, events) {
        this.http = http;
        this.events = events;
    }
    /*
    * 获取消息列表
    * 从API获取或者从模拟的 JSON 获取
    *
    * */
    ChatserviceProvider.prototype.getMessageList = function () {
        var url = '../../assets/mock/msg-list.json';
        return this.http.get(url)
            .toPromise()
            .then(function (res) { return res.json().array; })
            .catch(function (error) { return Promise.reject(error || '错误信息'); });
    };
    ChatserviceProvider.prototype.sendMessage = function (message) {
        var _this = this;
        return new Promise(function (resolve) { return setTimeout(function () {
            resolve(message);
        }, Math.random() * 1000); })
            .then(function () {
            _this.mockNewMessage(message);
        });
    };
    /*
    *
    * 模拟对方回复了一个消息
    * 这里要思考： 前台如何即时的接受这个消息？
    * 引入 EVENT 模式
    */
    ChatserviceProvider.prototype.mockNewMessage = function (message) {
        var _this = this;
        var id = Date.now().toString();
        var messageSend = {
            messageId: id,
            userId: '123321',
            username: '慕女神',
            userImgUrl: 'http://img.mukewang.com/user/57a322f00001e4ae02560256-40-40.jpg',
            toUserId: message.userId,
            time: Date.now(),
            message: "\u4F60\u662F\u4E0D\u662F\u7ED9\u6211\u53D1\u9001\u4E86" + message.message,
            status: 'success'
        };
        setTimeout(function () {
            _this.events.publish('chat.received', messageSend, Date.now());
        }, Math.random() * 1000);
    };
    return ChatserviceProvider;
}());
ChatserviceProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */],
        __WEBPACK_IMPORTED_MODULE_3_ionic_angular__["d" /* Events */]])
], ChatserviceProvider);

//# sourceMappingURL=chatservice.js.map

/***/ }),

/***/ 267:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabMorePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__login_login__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_storage__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__common_baseui__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_rest_rest__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__user_user__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__userdatalist_userdatalist__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__providers_settings_settings__ = __webpack_require__(136);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__scan_scan__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__versions_versions__ = __webpack_require__(279);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};











/**
 * Generated class for the TabMorePage page.
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TabMorePage = (function (_super) {
    __extends(TabMorePage, _super);
    function TabMorePage(navCtrl, navParams, modalCtrl, storage, loadCtrl, rest, settings) {
        var _this = _super.call(this) || this;
        _this.navCtrl = navCtrl;
        _this.navParams = navParams;
        _this.modalCtrl = modalCtrl;
        _this.storage = storage;
        _this.loadCtrl = loadCtrl;
        _this.rest = rest;
        _this.settings = settings;
        _this.notLogin = true;
        _this.logined = false;
        _this.settings.getActiveTheme().subscribe(function (f) { _this.selectedTheme = f; });
        return _this;
    }
    TabMorePage.prototype.showModal = function () {
        var _this = this;
        var modal = this.modalCtrl.create(__WEBPACK_IMPORTED_MODULE_2__login_login__["a" /* LoginPage */]);
        //关闭后的回调
        modal.onDidDismiss(function () {
            _this.loadUserPage();
        });
        modal.present();
    };
    TabMorePage.prototype.ionViewDidLoad = function () {
        this.loadUserPage();
    };
    //"{\"UserId\":\"5996953615f87ec629cff319\",\"UserNickName\":\"jion\",\"UserHeadface\":\"https://imoocqa.gugujiankong.com/users/5996953615f87ec629cff319.jpg\",\"Status\":\"OK\",\"StatusContent\":\"登录成功\"}"
    TabMorePage.prototype.loadUserPage = function () {
        var _this = this;
        this.storage.get('UserId').then(function (val) {
            if (val != null && val != "") {
                var loading = _super.prototype.showLoading.call(_this, _this.loadCtrl, "加载中...");
                _this.rest.getUserInfo(val).subscribe(function (userinfo) {
                    _this.userinfo = userinfo;
                    // this.headface = userinfo["UserHeadface"] + "?" + (new Date()).valueOf();
                    _this.headface = userinfo["UserHeadface"] + "?" + (new Date()).valueOf();
                    loading.dismiss();
                    _this.notLogin = false;
                    _this.logined = true;
                });
            }
            else {
                _this.notLogin = true;
                _this.logined = false;
            }
        });
    };
    ;
    TabMorePage.prototype.gotoUserPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_6__user_user__["a" /* UserPage */]);
    };
    TabMorePage.prototype.gotoDataList = function (type) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_7__userdatalist_userdatalist__["a" /* UserdatalistPage */], { "dataType": type });
    };
    /*
    * 跳转到扫描二维码页面，加上 "animate": false 的参数为了让相机在整个屏幕中显示，
    * 如果不加就出不来；
    * */
    TabMorePage.prototype.gotoScanQRCode = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_9__scan_scan__["a" /* ScanPage */], null, { "animate": false });
    };
    TabMorePage.prototype.gotoVersions = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_10__versions_versions__["a" /* VersionsPage */]);
    };
    TabMorePage.prototype.toggleChangeTheme = function () {
        if (this.selectedTheme === 'dark-theme') {
            this.selectedTheme = "light-theme";
        }
        else {
            this.selectedTheme = "dark-theme";
        }
        this.settings.setActiveTheme(this.selectedTheme);
    };
    return TabMorePage;
}(__WEBPACK_IMPORTED_MODULE_4__common_baseui__["a" /* BaseUI */]));
TabMorePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-tab-more',template:/*ion-inline-start:"F:\creatVue\ionicApp\zhihuapp\src\pages\tab-more\tab-more.html"*/'<!--\n  Generated template for the TabMorePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar text-center>\n    <ion-title>更多</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <div *ngIf="notLogin">\n    <ion-card>\n      <ion-card-header text-center>\n        登录,体验更多功能\n      </ion-card-header>\n      <ion-card-content text-center>\n        <button ion-button outline small (click)="showModal()">登录/注册</button>\n      </ion-card-content>\n    </ion-card>\n  </div>\n\n  <div *ngIf="logined">\n    <ion-list class="marginTop">\n      <button ion-item (click)="gotoUserPage()">\n        <ion-avatar item-start>\n          <img src="{{headface}}" />\n        </ion-avatar>\n        <h2>{{userinfo.UserNickName}}</h2>\n        <p>查看个人主页或者编辑简介</p>\n      </button>\n    </ion-list>\n\n    <ion-list class="marginTop">\n      <ion-list-header>\n        我的慕课\n      </ion-list-header>\n      <button ion-item (click)="gotoDataList(\'question\')">\n        <ion-icon name="paper" item-start color="primary"></ion-icon>\n        <ion-label>我的提问</ion-label>\n      </button>\n      <button ion-item (click)="gotoDataList(\'favourite\')">\n        <ion-icon name="star" item-start color="orange"></ion-icon>\n        <ion-label>我的收藏</ion-label>\n      </button>\n      <button ion-item (click)="gotoDataList(\'answer\')">\n        <ion-icon name="disc" item-start color="secondary"></ion-icon>\n        <ion-label>我的关注</ion-label>\n      </button>\n    </ion-list>\n\n    <ion-list class="marginTop">\n      <ion-list-header>\n        设置\n      </ion-list-header>\n      <ion-item>\n        <ion-icon name="cloudy-night" item-start color="purple"></ion-icon>\n        <ion-label>夜间模式</ion-label>\n        <ion-toggle color="purple" (ionChange)="toggleChangeTheme()"></ion-toggle>\n      </ion-item>\n      <button ion-item (click)="gotoScanQRCode()">\n        <ion-icon name="qr-scanner" item-start color="dark"></ion-icon>\n        <ion-label>扫描二维码</ion-label>\n      </button>\n      <button ion-item (click)="gotoVersions()">\n        <ion-icon name="help-circle" item-start color="dark"></ion-icon>\n        <ion-label>关于</ion-label>\n      </button>\n    </ion-list>\n\n  </div>\n</ion-content>\n'/*ion-inline-end:"F:\creatVue\ionicApp\zhihuapp\src\pages\tab-more\tab-more.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_3__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_5__providers_rest_rest__["a" /* RestProvider */],
        __WEBPACK_IMPORTED_MODULE_8__providers_settings_settings__["a" /* SettingsProvider */]])
], TabMorePage);

//# sourceMappingURL=tab-more.js.map

/***/ }),

/***/ 268:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LoginPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_baseui__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_rest_rest__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__register_register__ = __webpack_require__(269);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var LoginPage = (function (_super) {
    __extends(LoginPage, _super);
    function LoginPage(navCtrl, navParams, viewCtrl, loadingCtrl, rest, toastCtrl, storage) {
        var _this = _super.call(this) || this;
        _this.navCtrl = navCtrl;
        _this.navParams = navParams;
        _this.viewCtrl = viewCtrl;
        _this.loadingCtrl = loadingCtrl;
        _this.rest = rest;
        _this.toastCtrl = toastCtrl;
        _this.storage = storage;
        return _this;
    }
    LoginPage.prototype.login = function () {
        var _this = this;
        var loading = _super.prototype.showLoading.call(this, this.loadingCtrl, '登录中...'); /* tslint:disable-next-line:no-unused-variable */
        this.rest.login(this.mobile, this.password).subscribe(function (f) {
            if (f["Status"] == "OK") {
                //处理成功的页面跳转
                _this.storage.set('UserId', f["UserId"]);
                _this.dismiss();
                loading.dismiss();
            }
            else {
                loading.dismiss();
                _super.prototype.showToast.call(_this, _this.toastCtrl, f["StatusContent"]);
            }
        }, function (error) { return _this.errorMessage = error; });
    };
    LoginPage.prototype.dismiss = function () {
        this.viewCtrl.dismiss();
    };
    LoginPage.prototype.pushRegisterPage = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__register_register__["a" /* RegisterPage */]);
    };
    return LoginPage;
}(__WEBPACK_IMPORTED_MODULE_2__common_baseui__["a" /* BaseUI */]));
LoginPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-login',template:/*ion-inline-start:"F:\creatVue\ionicApp\zhihuapp\src\pages\login\login.html"*/'<!--\n  Generated template for the LoginPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title  text-center>用户登录</ion-title>\n    <ion-buttons>\n      <button ion-button (click)="dismiss()">\n        <span ion-text color="primary" showWhen="ios" >取消</span>\n        <ion-icon outline name="md-close" showWhen="android"></ion-icon>\n      </button>\n    </ion-buttons>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-list>\n\n    <ion-item>\n      <ion-label>手机号码</ion-label>\n      <ion-input type="text" [(ngModel)]="mobile"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>密码</ion-label>\n      <ion-input type="password" [(ngModel)]="password"></ion-input>\n    </ion-item>\n\n  </ion-list>\n\n  <div padding>\n    <button ion-button color="primary" block (click)="login()">登 录</button>\n  </div>\n  <div padding text-center>\n    <button ion-button color="primary" outline (click)="pushRegisterPage()">没有账号/注册？</button>\n  </div>\n</ion-content>\n'/*ion-inline-end:"F:\creatVue\ionicApp\zhihuapp\src\pages\login\login.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_rest_rest__["a" /* RestProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */]])
], LoginPage);

//# sourceMappingURL=login.js.map

/***/ }),

/***/ 269:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RegisterPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__common_baseui__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_rest_rest__ = __webpack_require__(22);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var RegisterPage = (function (_super) {
    __extends(RegisterPage, _super);
    function RegisterPage(navCtrl, navParams, viewCtrl, rest, loadingCtrl, toastCtrl) {
        var _this = _super.call(this) || this;
        _this.navCtrl = navCtrl;
        _this.navParams = navParams;
        _this.viewCtrl = viewCtrl;
        _this.rest = rest;
        _this.loadingCtrl = loadingCtrl;
        _this.toastCtrl = toastCtrl;
        return _this;
    }
    RegisterPage.prototype.ionViewDidLoad = function () {
        console.log('ionViewDidLoad RegisterPage');
    };
    RegisterPage.prototype.gotoLogin = function () {
        this.navCtrl.pop();
    };
    RegisterPage.prototype.doRegister = function () {
        //前台验证表单数据的准确性，包括手机号码，昵称长度，密码长度
        //验证国内手机号码的格式，考虑所有的当前手机号码的可行性
        var _this = this;
        if (!(/^1[34578]\d{9}$/.test(this.mobile))) {
            // 后台进行大数据保存
            _super.prototype.showToast.call(this, this.toastCtrl, "您的手机号码输入不规范.");
        }
        else if (this.nickname.length < 3 || this.nickname.length > 10) {
            _super.prototype.showToast.call(this, this.toastCtrl, "昵称长度在3~10位.");
        }
        else if (this.password.length < 6 || this.password.length > 20 || this.confirmPassword.length < 6 || this.confirmPassword.length > 20) {
            _super.prototype.showToast.call(this, this.toastCtrl, "密码长度在6~20以内.");
        }
        else if (this.password != this.confirmPassword) {
            _super.prototype.showToast.call(this, this.toastCtrl, "两次输入的密码不匹配.");
        }
        else {
            var loading = _super.prototype.showLoading.call(this, this.loadingCtrl, '登录中...');
            this.rest.register(this.mobile, this.password, this.nickname).subscribe(function (f) {
                console.log(f);
                if (f["Status"] == "OK") {
                    loading.dismiss();
                    _super.prototype.showToast.call(_this, _this.toastCtrl, '注册成功');
                }
                else {
                    loading.dismiss();
                    _super.prototype.showToast.call(_this, _this.toastCtrl, f["StatusContent"]);
                }
            }, function (error) { return _this.errorMessage = error; });
        }
    };
    return RegisterPage;
}(__WEBPACK_IMPORTED_MODULE_2__common_baseui__["a" /* BaseUI */]));
RegisterPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-register',template:/*ion-inline-start:"F:\creatVue\ionicApp\zhihuapp\src\pages\register\register.html"*/'<!--\n  Generated template for the RegisterPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>用户注册</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n  <ion-list>\n\n    <ion-item>\n      <ion-label>手机号码</ion-label>\n      <ion-input type="text" [(ngModel)]="mobile"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>昵称</ion-label>\n      <ion-input type="text" [(ngModel)]="nickname"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>密码</ion-label>\n      <ion-input type="password" [(ngModel)]="password"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>确认密码</ion-label>\n      <ion-input type="password" [(ngModel)]="confirmPassword"></ion-input>\n    </ion-item>\n\n  </ion-list>\n\n  <div padding>\n    <button ion-button color="primary" block (click)="doRegister()">注册</button>\n  </div>\n  <div padding text-center>\n    <button ion-button color="primary" outline (click)="gotoLogin()">已有账号/登录？</button>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"F:\creatVue\ionicApp\zhihuapp\src\pages\register\register.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */],
        __WEBPACK_IMPORTED_MODULE_3__providers_rest_rest__["a" /* RestProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */]])
], RegisterPage);

//# sourceMappingURL=register.js.map

/***/ }),

/***/ 270:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_baseui__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_rest_rest__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__headface_headface__ = __webpack_require__(271);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the UserPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UserPage = (function (_super) {
    __extends(UserPage, _super);
    function UserPage(navCtrl, navParams, storage, loadCtrl, rest, Toast, viewCtrl) {
        var _this = _super.call(this) || this;
        _this.navCtrl = navCtrl;
        _this.navParams = navParams;
        _this.storage = storage;
        _this.loadCtrl = loadCtrl;
        _this.rest = rest;
        _this.Toast = Toast;
        _this.viewCtrl = viewCtrl;
        _this.headface = "http://img.mukewang.com/user/57a322f00001e4ae02560256-40-40.jpg?";
        return _this;
    }
    UserPage.prototype.ionViewDidEnter = function () {
        this.loadUserPage();
    };
    UserPage.prototype.loadUserPage = function () {
        var _this = this;
        this.storage.get('UserId').then(function (val) {
            if (val != null) {
                //加载用户数据
                var loading = _super.prototype.showLoading.call(_this, _this.loadCtrl, "加载中...");
                _this.rest.getUserInfo(val)
                    .subscribe(function (userinfo) {
                    _this.nickname = userinfo["UserNickName"];
                    _this.headface = userinfo["UserHeadface"] + "?" + (new Date()).valueOf();
                    loading.dismiss();
                }, function (error) { return _this.errorMessage = error; });
            }
        });
    };
    UserPage.prototype.updateNickName = function () {
        var _this = this;
        this.storage.get('UserId').then(function (val) {
            if (val != null) {
                var loading = _super.prototype.showLoading.call(_this, _this.loadCtrl, '加载中...');
                _this.rest.updateNickName(val, _this.nickname).subscribe(function (f) {
                    if (f["Status"] == "OK") {
                        loading.dismiss();
                        _super.prototype.showToast.call(_this, _this.Toast, '昵称修改成功');
                    }
                    else {
                        loading.dismiss();
                        _super.prototype.showToast.call(_this, _this.Toast, f["StatusContent"]);
                    }
                }, function (error) { return _this.errorMessage = error; });
            }
        });
    };
    UserPage.prototype.loginout = function () {
        this.storage.remove('UserId');
        this.viewCtrl.dismiss();
    };
    UserPage.prototype.gotoHeadface = function () {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__headface_headface__["a" /* HeadfacePage */]);
    };
    return UserPage;
}(__WEBPACK_IMPORTED_MODULE_3__common_baseui__["a" /* BaseUI */]));
UserPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-user',template:/*ion-inline-start:"F:\creatVue\ionicApp\zhihuapp\src\pages\user\user.html"*/'<!--\n  Generated template for the UserPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>个人中心</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n\n  <ion-list class="marginTop marginBottom">\n    <button ion-item (click)="gotoHeadface()">\n      <ion-avatar item-start>\n        <img src="{{headface}}" />\n      </ion-avatar>\n      <h2>修改头像</h2>\n    </button>\n  </ion-list>\n\n  <ion-list>\n    <ion-item>\n      <ion-label>用户昵称</ion-label>\n      <ion-input type="text" [(ngModel)]="nickname"></ion-input>\n    </ion-item>\n  </ion-list>\n\n  <div padding text-center class="paddingTop">\n    <button ion-button color="primary" block (click)="updateNickName()">保存</button>\n  </div>\n\n  <div padding text-center class="paddingTop">\n    <button ion-button color="danger" block (click)="loginout()">注销</button>\n  </div>\n\n</ion-content>\n'/*ion-inline-end:"F:\creatVue\ionicApp\zhihuapp\src\pages\user\user.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_4__providers_rest_rest__["a" /* RestProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */]])
], UserPage);

//# sourceMappingURL=user.js.map

/***/ }),

/***/ 271:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeadfacePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_baseui__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_rest_rest__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__ionic_native_file_path__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__ionic_native_transfer__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__ionic_native_camera__ = __webpack_require__(275);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









/**
 * Generated class for the HeadfacePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var HeadfacePage = (function (_super) {
    __extends(HeadfacePage, _super);
    function HeadfacePage(navCtrl, navParams, actionSheetCtrl, modalCtrl, storage, loadCtrl, rest, camera, filePath, file, transfer, platform, Toast, viewCtrl) {
        var _this = _super.call(this) || this;
        _this.navCtrl = navCtrl;
        _this.navParams = navParams;
        _this.actionSheetCtrl = actionSheetCtrl;
        _this.modalCtrl = modalCtrl;
        _this.storage = storage;
        _this.loadCtrl = loadCtrl;
        _this.rest = rest;
        _this.camera = camera;
        _this.filePath = filePath;
        _this.file = file;
        _this.transfer = transfer;
        _this.platform = platform;
        _this.Toast = Toast;
        _this.viewCtrl = viewCtrl;
        _this.lastImage = null;
        return _this;
    }
    HeadfacePage.prototype.ionViewDidEnter = function () {
        var _this = this;
        this.storage.get('UserId').then(function (val) {
            if (val != null) {
                _this.userId = val;
            }
        });
    };
    HeadfacePage.prototype.presentActionSheet = function () {
        var _this = this;
        var actionSheet = this.actionSheetCtrl.create({
            title: '选择图片',
            buttons: [
                {
                    text: '从图片库中选择',
                    handler: function () {
                        _this.tackPicture(_this.camera.PictureSourceType.PHOTOLIBRARY);
                    }
                }, {
                    text: '使用相机',
                    handler: function () {
                        _this.tackPicture(_this.camera.PictureSourceType.CAMERA);
                    }
                }, {
                    text: '取消',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        actionSheet.present();
    };
    HeadfacePage.prototype.tackPicture = function (sourceType) {
        var _this = this;
        // 定义相机的一些参数
        var option = {
            quality: 100,
            sourceType: sourceType,
            saveToPhotoAlbum: false,
            correctOrientation: true //是否纠正拍摄的照片的方向
        };
        //获取图片的方法
        this.camera.getPicture(option).then(function (imagePath) {
            //特别处理 android 下面文件路径的问题
            if (_this.platform.is('android') && sourceType === _this.camera.PictureSourceType.PHOTOLIBRARY) {
                _this.filePath.resolveNativePath(imagePath).then(function (filePath) {
                    //获取正确的路径
                    alert(filePath + '~~~~' + imagePath);
                    var correctPath = filePath.substring(0, filePath.lastIndexOf('/') + 1);
                    //获取正确的文件命
                    var currentName = imagePath.substring(imagePath.lastIndexOf('/') + 1, imagePath.lastIndexOf('?'));
                    _this.copyFileToLocalDir(correctPath, currentName, _this.createFileName());
                });
            }
            else {
                //获取正确的路径
                var correctPath = imagePath.substr(0, imagePath.lastIndexOf('/') + 1);
                //获取正确的文件命
                var currentName = imagePath.substr(imagePath.lastIndexOf('/') + 1);
                _this.copyFileToLocalDir(correctPath, currentName, _this.createFileName());
            }
        }, function (err) {
            _super.prototype.showToast.call(_this, _this.Toast, "选择图片出现错误， 请在 App 中操作或检查相关权限。");
        });
    };
    // 将获取到的图片或者相机拍摄到的图片进行一下另存为，用于后期的图片上传使用
    HeadfacePage.prototype.copyFileToLocalDir = function (namePath, currentName, newFileName) {
        var _this = this;
        this.file.copyFile(namePath, currentName, cordova.file.dataDirectory, newFileName).then(function (success) {
            _this.lastImage = newFileName;
        }, function (error) { _super.prototype.showToast.call(_this, _this.Toast, "存储图片到本地图库错误"); });
    };
    // 为文件生成一个新的文件名
    HeadfacePage.prototype.createFileName = function () {
        var d = new Date(), n = d.getTime(), newFileName = n + ".jpg";
        return newFileName;
    };
    // 处理图片路径为可以上传的路径
    HeadfacePage.prototype.pathForImage = function (img) {
        if (img === null) {
            return '';
        }
        else {
            return Object(__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["q" /* normalizeURL */])(cordova.file.dataDirectory + img);
        }
    };
    HeadfacePage.prototype.uploadImage = function () {
        var _this = this;
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
        var fileTransfer = this.transfer.create();
        var loading = _super.prototype.showLoading.call(this, this.loadCtrl, '上传中...');
        // 开始正式的上传
        fileTransfer.upload(targetPath, url, options).then(function (data) {
            loading.dismiss();
            _super.prototype.showToast.call(_this, _this.Toast, '图片上传成功.');
            // 在用户看清弹窗提示后进行页面的关闭
            setTimeout(function () {
                _this.viewCtrl.dismiss();
            }, 3000);
        }, function (err) { loading.dismiss(); _super.prototype.showToast.call(_this, _this.Toast, '图片上传出现错误，请重试.'); });
    };
    return HeadfacePage;
}(__WEBPACK_IMPORTED_MODULE_3__common_baseui__["a" /* BaseUI */]));
HeadfacePage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-headface',template:/*ion-inline-start:"F:\creatVue\ionicApp\zhihuapp\src\pages\headface\headface.html"*/'<!--\n  Generated template for the HeadfacePage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>设置头像</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content padding>\n  <img src="{{pathForImage(lastImage)}}" style="width: 100%" [hidden]="lastImage === null" />\n  <h3 [hidden]="lastImage !== null">请从图片库中选择一个图片</h3>\n</ion-content>\n\n<ion-footer>\n  <ion-toolbar color="primary">\n    <ion-buttons>\n      <button ion-button icon-left (click)="presentActionSheet()">\n        <ion-icon name="camera"></ion-icon>选择...\n      </button>\n      <button ion-button icon-right (click)="uploadImage()" [disabled]="lastImage === null">\n        <ion-icon name="cloud-upload"></ion-icon>上传\n      </button>\n    </ion-buttons>\n  </ion-toolbar>\n</ion-footer>\n'/*ion-inline-end:"F:\creatVue\ionicApp\zhihuapp\src\pages\headface\headface.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["a" /* ActionSheetController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_4__providers_rest_rest__["a" /* RestProvider */],
        __WEBPACK_IMPORTED_MODULE_8__ionic_native_camera__["a" /* Camera */],
        __WEBPACK_IMPORTED_MODULE_6__ionic_native_file_path__["a" /* FilePath */],
        __WEBPACK_IMPORTED_MODULE_5__ionic_native_file__["a" /* File */],
        __WEBPACK_IMPORTED_MODULE_7__ionic_native_transfer__["a" /* Transfer */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["p" /* ViewController */]])
], HeadfacePage);

//# sourceMappingURL=headface.js.map

/***/ }),

/***/ 276:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserdatalistPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/**
 * Generated class for the UserdatalistPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var UserdatalistPage = (function () {
    function UserdatalistPage(navCtrl, navParams) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.dataType = navParams.get('dataType');
        switch (this.dataType) {
            case "question":
                this.title = "我的提问";
                break;
            case "answer":
                this.title = "我的收藏";
                break;
            case "favourite":
                this.title = "我的关注";
                break;
        }
        console.log(navParams.get('dataType'));
    }
    UserdatalistPage.prototype.ionViewDidLoad = function () {
    };
    return UserdatalistPage;
}());
UserdatalistPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-userdatalist',template:/*ion-inline-start:"F:\creatVue\ionicApp\zhihuapp\src\pages\userdatalist\userdatalist.html"*/'<!--\n  Generated template for the UserdatalistPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{title}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content>\n  <question-list datatype="{{dataType}}"></question-list>\n</ion-content>\n'/*ion-inline-end:"F:\creatVue\ionicApp\zhihuapp\src\pages\userdatalist\userdatalist.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */], __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */]])
], UserdatalistPage);

//# sourceMappingURL=userdatalist.js.map

/***/ }),

/***/ 277:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ScanPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_qr_scanner__ = __webpack_require__(278);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the ScanPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var ScanPage = (function () {
    function ScanPage(navCtrl, navParams, alertCtrl, qrScanner) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.qrScanner = qrScanner;
    }
    ScanPage.prototype.ionViewDidEnter = function () {
        this.scanQRCode();
    };
    ScanPage.prototype.scanQRCode = function () {
        var _this = this;
        this.qrScanner.prepare().then(function (status) {
            if (status.authorized) {
                var scanSub_1 = _this.qrScanner.scan().subscribe(function (text) {
                    var alert = _this.alertCtrl.create({
                        title: "二维码内容",
                        subTitle: text,
                        buttons: ['OK']
                    });
                    alert.present();
                    scanSub_1.unsubscribe();
                });
                _this.qrScanner.show();
            }
            else if (status.denied) {
                //提醒用户权限没开
            }
            else {
            }
        })
            .catch(function (e) { return console.error("Error:", e); });
    };
    return ScanPage;
}());
ScanPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-scan',template:/*ion-inline-start:"F:\creatVue\ionicApp\zhihuapp\src\pages\scan\scan.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title></ion-title>\n  </ion-navbar>\n</ion-header>\n\n<div class="line"></div>\n'/*ion-inline-end:"F:\creatVue\ionicApp\zhihuapp\src\pages\scan\scan.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["b" /* AlertController */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_qr_scanner__["a" /* QRScanner */]])
], ScanPage);

//# sourceMappingURL=scan.js.map

/***/ }),

/***/ 279:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return VersionsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_app_version__ = __webpack_require__(280);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the VersionsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var VersionsPage = (function () {
    function VersionsPage(navCtrl, navParams, appVersion) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.appVersion = appVersion;
    }
    VersionsPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.appVersion.getAppName().then(function (v) {
            _this.appName = v;
        });
        this.appVersion.getPackageName().then(function (v) {
            _this.packageName = v;
        });
        this.appVersion.getVersionCode().then(function (v) {
            _this.versionCode = v;
        });
        this.appVersion.getVersionNumber().then(function (v) {
            _this.versionNumber = v;
        });
    };
    return VersionsPage;
}());
VersionsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-versions',template:/*ion-inline-start:"F:\creatVue\ionicApp\zhihuapp\src\pages\versions\versions.html"*/'<!--\n  Generated template for the VersionsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>版本信息</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-list>\n    <ion-item>\n      AppName: {{appName}}\n    </ion-item>\n    <ion-item>\n      PackageName: {{packageName}}\n    </ion-item>\n    <ion-item>\n      VersionCode: {{versionCode}}\n    </ion-item>\n    <ion-item>\n      VersionNumber: {{versionNumber}}\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"F:\creatVue\ionicApp\zhihuapp\src\pages\versions\versions.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_app_version__["a" /* AppVersion */]])
], VersionsPage);

//# sourceMappingURL=versions.js.map

/***/ }),

/***/ 281:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TabNotificationPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__common_baseui__ = __webpack_require__(25);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_rest_rest__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__details_details__ = __webpack_require__(63);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the TabNotificationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var TabNotificationPage = (function (_super) {
    __extends(TabNotificationPage, _super);
    function TabNotificationPage(navCtrl, navParams, storage, rest, Toast, loading) {
        var _this = _super.call(this) || this;
        _this.navCtrl = navCtrl;
        _this.navParams = navParams;
        _this.storage = storage;
        _this.rest = rest;
        _this.Toast = Toast;
        _this.loading = loading;
        return _this;
    }
    TabNotificationPage.prototype.ionViewDidLoad = function () {
        var _this = this;
        this.storage.get('UserId').then(function (val) {
            if (val != null) {
                var loading = _super.prototype.showLoading.call(_this, _this.loading, '请等待...');
                _this.rest.getUserNotifications(val).subscribe(function (f) {
                    _this.notificationList = f;
                    console.log(_this.notificationList, val);
                    loading.dismissAll();
                }, function (error) { return _this.errorMessage = error; });
            }
        });
    };
    TabNotificationPage.prototype.gotoDetails = function (questionId) {
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_5__details_details__["a" /* DetailsPage */], { id: questionId });
    };
    return TabNotificationPage;
}(__WEBPACK_IMPORTED_MODULE_3__common_baseui__["a" /* BaseUI */]));
TabNotificationPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-tab-notification',template:/*ion-inline-start:"F:\creatVue\ionicApp\zhihuapp\src\pages\tab-notification\tab-notification.html"*/'<!--\n  Generated template for the TabNotificationPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>tabNotification</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-list>\n    <ion-item *ngFor="let n of notificationList" (click)="gotoDetails(n.QuestionId)">\n      <ion-avatar>\n        <img src="{{n.HeadFace}}" />\n      </ion-avatar>\n      <h2>{{n.NotificationTitle}}</h2>\n      <p>{{n.NotificationMessage}}</p>\n    </ion-item>\n  </ion-list>\n</ion-content>\n'/*ion-inline-end:"F:\creatVue\ionicApp\zhihuapp\src\pages\tab-notification\tab-notification.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_4__providers_rest_rest__["a" /* RestProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */]])
], TabNotificationPage);

//# sourceMappingURL=tab-notification.js.map

/***/ }),

/***/ 282:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmojiProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__ = __webpack_require__(58);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_map__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var EmojiProvider = (function () {
    function EmojiProvider(http) {
        this.http = http;
        console.log('Hello EmojiProvider Provider');
    }
    EmojiProvider.prototype.getEmojis = function () {
        var EMOJIS = "😁 😃 😄 😁 😆 😅 😂 🤣 😊 😇 🙂 🙃 😉 😌 😍 😘 😗 😙 😚 😋 😜 😝 😛 🤑 🤗 🤓 😎 🤡 🤠 😏 😒 😞 😔 😟 😕 🙁" +
            " ☹️ 😣 😖 😫 😩 😤 😠 😡 😶 😐 😑 😯 😦 😧 😮 😲 😵 😳 😱 😨 😰 😢 😥 🤤 😭 😓 😪 😴 🙄 🤔 🤥 😬 🤐 🤢 🤧 😷 🤒 🤕 😈 👿" +
            " 👹 👺 💩 👻 💀 ☠️ 👽 👾 🤖 🎃 😺 😸 😹 😻 😼 😽 🙀 😿 😾 👐 🙌 👏 🙏 🤝 👍 👎 👊 ✊ 🤛 🤜 🤞 ✌️ 🤘 👌 👈 👉 👆 👇 ☝️ ✋ 🤚" +
            " 🖐 🖖 👋 🤙 💪 🖕 ✍️ 🤳 💅 🖖 💄 💋 👄 👅 👂 👃 👣 👁 👀 🗣 👤 👥 👶 👦 👧 👨 👩 👱‍♀️ 👱 👴 👵 👲 👳‍♀️ 👳 👮‍♀️ 👮 👷‍♀️ 👷" +
            " 💂‍♀️ 💂 🕵️‍♀️ 🕵️ 👩‍⚕️ 👨‍⚕️ 👩‍🌾 👨‍🌾 👩‍🍳 👨‍🍳 👩‍🎓 👨‍🎓 👩‍🎤 👨‍🎤 👩‍🏫 👨‍🏫 👩‍🏭 👨‍🏭 👩‍💻 👨‍💻 👩‍💼 👨‍💼 👩‍🔧 👨‍🔧 👩‍🔬 👨‍🔬" +
            " 👩‍🎨 👨‍🎨 👩‍🚒 👨‍🚒 👩‍✈️ 👨‍✈️ 👩‍🚀 👨‍🚀 👩‍⚖️ 👨‍⚖️ 🤶 🎅 👸 🤴 👰 🤵 👼 🤰 🙇‍♀️ 🙇 💁 💁‍♂️ 🙅 🙅‍♂️ 🙆 🙆‍♂️ 🙋 🙋‍♂️ 🤦‍♀️ 🤦‍♂️ 🤷‍♀" +
            "️ 🤷‍♂️ 🙎 🙎‍♂️ 🙍 🙍‍♂️ 💇 💇‍♂️ 💆 💆‍♂️ 🕴 💃 🕺 👯 👯‍♂️ 🚶‍♀️ 🚶 🏃‍♀️ 🏃 👫 👭 👬 💑 👩‍❤️‍👩 👨‍❤️‍👨 💏 👩‍❤️‍💋‍👩 👨‍❤️‍💋‍👨 👪 👨‍👩‍👧" +
            " 👨‍👩‍👧‍👦 👨‍👩‍👦‍👦 👨‍👩‍👧‍👧 👩‍👩‍👦 👩‍👩‍👧 👩‍👩‍👧‍👦 👩‍👩‍👦‍👦 👩‍👩‍👧‍👧 👨‍👨‍👦 👨‍👨‍👧 👨‍👨‍👧‍👦 👨‍👨‍👦‍👦 👨‍👨‍👧‍👧 👩‍👦 👩‍👧" +
            " 👩‍👧‍👦 👩‍👦‍👦 👩‍👧‍👧 👨‍👦 👨‍👧 👨‍👧‍👦 👨‍👦‍👦 👨‍👧‍👧 👚 👕 👖 👔 👗 👙 👘 👠 👡 👢 👞 👟 👒 🎩 🎓 👑 ⛑ 🎒 👝 👛 👜 💼 👓" +
            " 🕶 🌂 ☂️";
        // 分组操作
        var array = EMOJIS.split(' ');
        var groupNumber = Math.ceil(array.length / 24); //取大数, 四入五入
        var items = [];
        for (var i = 0; i < groupNumber; i++) {
            items.push(array.slice(24 * i, 24 * (i + 1)));
        }
        return items;
    };
    return EmojiProvider;
}());
EmojiProvider = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["B" /* Injectable */])(),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* Http */]])
], EmojiProvider);

//# sourceMappingURL=emoji.js.map

/***/ }),

/***/ 401:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(402);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(406);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 406:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(45);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(443);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_http__ = __webpack_require__(57);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__pages_home_home__ = __webpack_require__(236);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_tab_discovery_tab_discovery__ = __webpack_require__(263);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__pages_tab_chat_tab_chat__ = __webpack_require__(264);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_tab_more_tab_more__ = __webpack_require__(267);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__pages_tab_notification_tab_notification__ = __webpack_require__(281);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__pages_login_login__ = __webpack_require__(268);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__pages_register_register__ = __webpack_require__(269);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__pages_user_user__ = __webpack_require__(270);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__pages_headface_headface__ = __webpack_require__(271);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__pages_question_question__ = __webpack_require__(262);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__pages_details_details__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__pages_answer_answer__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__pages_chatdetails_chatdetails__ = __webpack_require__(265);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__pages_userdatalist_userdatalist__ = __webpack_require__(276);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__pages_tabs_tabs__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_20__ionic_native_status_bar__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_21__ionic_native_splash_screen__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_22__providers_rest_rest__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_23__ionic_storage__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_24__ionic_native_file__ = __webpack_require__(272);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_25__ionic_native_file_path__ = __webpack_require__(273);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_26__ionic_native_transfer__ = __webpack_require__(274);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_27__ionic_native_camera__ = __webpack_require__(275);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_28__providers_emoji_emoji__ = __webpack_require__(282);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_29__components_components_module__ = __webpack_require__(719);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_30__providers_chatservice_chatservice__ = __webpack_require__(266);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_31__ionic_native_qr_scanner__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_32__pages_scan_scan__ = __webpack_require__(277);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_33__pages_versions_versions__ = __webpack_require__(279);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_34__ionic_native_app_version__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_35__pipes_relativetime_relativetime__ = __webpack_require__(722);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_36__providers_settings_settings__ = __webpack_require__(136);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};





































var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_tab_discovery_tab_discovery__["a" /* TabDiscoveryPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_tab_chat_tab_chat__["a" /* TabChatPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_tab_more_tab_more__["a" /* TabMorePage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_tab_notification_tab_notification__["a" /* TabNotificationPage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_register_register__["a" /* RegisterPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_user_user__["a" /* UserPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_headface_headface__["a" /* HeadfacePage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_question_question__["a" /* QuestionPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_details_details__["a" /* DetailsPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_answer_answer__["a" /* AnswerPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_chatdetails_chatdetails__["a" /* ChatdetailsPage */],
            __WEBPACK_IMPORTED_MODULE_35__pipes_relativetime_relativetime__["a" /* RelativetimePipe */],
            __WEBPACK_IMPORTED_MODULE_18__pages_userdatalist_userdatalist__["a" /* UserdatalistPage */],
            __WEBPACK_IMPORTED_MODULE_32__pages_scan_scan__["a" /* ScanPage */],
            __WEBPACK_IMPORTED_MODULE_33__pages_versions_versions__["a" /* VersionsPage */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_4__angular_http__["b" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["g" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */], {
                backButtonText: '返回',
            }, {
                links: [
                    { loadChildren: '../pages/about/about.module#AboutPageModule', name: 'AboutPage', segment: 'about', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/answer/answer.module#AnswerPageModule', name: 'AnswerPage', segment: 'answer', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/chatdetails/chatdetails.module#ChatdetailsPageModule', name: 'ChatdetailsPage', segment: 'chatdetails', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/details/details.module#DetailsPageModule', name: 'DetailsPage', segment: 'details', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/headface/headface.module#HeadfacePageModule', name: 'HeadfacePage', segment: 'headface', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/login/login.module#LoginPageModule', name: 'LoginPage', segment: 'login', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/register/register.module#RegisterPageModule', name: 'RegisterPage', segment: 'register', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/scan/scan.module#ScanPageModule', name: 'ScanPage', segment: 'scan', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/tab-chat/tab-chat.module#TabChatPageModule', name: 'TabChatPage', segment: 'tab-chat', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/tab-discovery/tab-discovery.module#TabDiscoveryPageModule', name: 'TabDiscoveryPage', segment: 'tab-discovery', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/tab-notification/tab-notification.module#TabNotificationPageModule', name: 'TabNotificationPage', segment: 'tab-notification', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/user/user.module#UserPageModule', name: 'UserPage', segment: 'user', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/userdatalist/userdatalist.module#UserdatalistPageModule', name: 'UserdatalistPage', segment: 'userdatalist', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/versions/versions.module#VersionsPageModule', name: 'VersionsPage', segment: 'versions', priority: 'low', defaultHistory: [] },
                    { loadChildren: '../pages/tab-more/tab-more.module#TabMorePageModule', name: 'TabMorePage', segment: 'tab-more', priority: 'low', defaultHistory: [] }
                ]
            }),
            __WEBPACK_IMPORTED_MODULE_23__ionic_storage__["a" /* IonicStorageModule */].forRoot(),
            __WEBPACK_IMPORTED_MODULE_29__components_components_module__["a" /* ComponentsModule */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* IonicApp */]],
        entryComponents: [
            __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* MyApp */],
            __WEBPACK_IMPORTED_MODULE_6__pages_tab_discovery_tab_discovery__["a" /* TabDiscoveryPage */],
            __WEBPACK_IMPORTED_MODULE_7__pages_tab_chat_tab_chat__["a" /* TabChatPage */],
            __WEBPACK_IMPORTED_MODULE_8__pages_tab_more_tab_more__["a" /* TabMorePage */],
            __WEBPACK_IMPORTED_MODULE_9__pages_tab_notification_tab_notification__["a" /* TabNotificationPage */],
            __WEBPACK_IMPORTED_MODULE_5__pages_home_home__["a" /* HomePage */],
            __WEBPACK_IMPORTED_MODULE_10__pages_login_login__["a" /* LoginPage */],
            __WEBPACK_IMPORTED_MODULE_19__pages_tabs_tabs__["a" /* TabsPage */],
            __WEBPACK_IMPORTED_MODULE_11__pages_register_register__["a" /* RegisterPage */],
            __WEBPACK_IMPORTED_MODULE_12__pages_user_user__["a" /* UserPage */],
            __WEBPACK_IMPORTED_MODULE_13__pages_headface_headface__["a" /* HeadfacePage */],
            __WEBPACK_IMPORTED_MODULE_14__pages_question_question__["a" /* QuestionPage */],
            __WEBPACK_IMPORTED_MODULE_15__pages_details_details__["a" /* DetailsPage */],
            __WEBPACK_IMPORTED_MODULE_16__pages_answer_answer__["a" /* AnswerPage */],
            __WEBPACK_IMPORTED_MODULE_17__pages_chatdetails_chatdetails__["a" /* ChatdetailsPage */],
            __WEBPACK_IMPORTED_MODULE_18__pages_userdatalist_userdatalist__["a" /* UserdatalistPage */],
            __WEBPACK_IMPORTED_MODULE_32__pages_scan_scan__["a" /* ScanPage */],
            __WEBPACK_IMPORTED_MODULE_33__pages_versions_versions__["a" /* VersionsPage */]
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_20__ionic_native_status_bar__["a" /* StatusBar */],
            __WEBPACK_IMPORTED_MODULE_21__ionic_native_splash_screen__["a" /* SplashScreen */],
            { provide: __WEBPACK_IMPORTED_MODULE_0__angular_core__["v" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* IonicErrorHandler */] },
            __WEBPACK_IMPORTED_MODULE_22__providers_rest_rest__["a" /* RestProvider */],
            __WEBPACK_IMPORTED_MODULE_24__ionic_native_file__["a" /* File */],
            __WEBPACK_IMPORTED_MODULE_25__ionic_native_file_path__["a" /* FilePath */],
            __WEBPACK_IMPORTED_MODULE_26__ionic_native_transfer__["a" /* Transfer */],
            __WEBPACK_IMPORTED_MODULE_27__ionic_native_camera__["a" /* Camera */],
            __WEBPACK_IMPORTED_MODULE_31__ionic_native_qr_scanner__["a" /* QRScanner */],
            __WEBPACK_IMPORTED_MODULE_34__ionic_native_app_version__["a" /* AppVersion */],
            __WEBPACK_IMPORTED_MODULE_28__providers_emoji_emoji__["a" /* EmojiProvider */],
            __WEBPACK_IMPORTED_MODULE_30__providers_chatservice_chatservice__["a" /* ChatserviceProvider */],
            __WEBPACK_IMPORTED_MODULE_36__providers_settings_settings__["a" /* SettingsProvider */]
        ]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 443:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(234);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__ = __webpack_require__(235);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__providers_settings_settings__ = __webpack_require__(136);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var MyApp = (function () {
    function MyApp(platform, settings, statusBar, splashScreen) {
        var _this = this;
        this.settings = settings;
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_tabs_tabs__["a" /* TabsPage */];
        this.settings.getActiveTheme().subscribe(function (val) {
            console.log(val);
            _this.selectedTheme = val;
        });
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    return MyApp;
}());
MyApp = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({template:/*ion-inline-start:"F:\creatVue\ionicApp\zhihuapp\src\app\app.html"*/'<ion-nav [root]="rootPage" [class]="selectedTheme"></ion-nav>\n'/*ion-inline-end:"F:\creatVue\ionicApp\zhihuapp\src\app\app.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["m" /* Platform */],
        __WEBPACK_IMPORTED_MODULE_5__providers_settings_settings__["a" /* SettingsProvider */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
], MyApp);

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 63:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DetailsPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__answer_answer__ = __webpack_require__(261);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_storage__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_baseui__ = __webpack_require__(25);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the DetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var DetailsPage = (function (_super) {
    __extends(DetailsPage, _super);
    function DetailsPage(navCtrl, navParams, ModalCtrl, rest, storage, loading, Toast) {
        var _this = _super.call(this) || this;
        _this.navCtrl = navCtrl;
        _this.navParams = navParams;
        _this.ModalCtrl = ModalCtrl;
        _this.rest = rest;
        _this.storage = storage;
        _this.loading = loading;
        _this.Toast = Toast;
        return _this;
    }
    DetailsPage.prototype.ionViewDidLoad = function () {
        this.id = this.navParams.get('id');
        this.loadQuestion();
    };
    DetailsPage.prototype.loadQuestion = function () {
        var _this = this;
        this.storage.get('UserId').then(function (val) {
            if (val !== null) {
                _this.userId = val;
                var loading = _super.prototype.showLoading.call(_this, _this.loading, '加载中...');
                _this.rest.getQuestionWithUser(_this.id, _this.userId).subscribe(function (f) {
                    _this.question = f;
                    _this.answers = f["Answers"];
                    _this.isFavourite = f["IsFavourite"];
                    _this.isMyQuestion = (f["OwnUserId"] === val);
                    loading.dismiss();
                }, function (error) { return _this.errorMessage = error; });
            }
        });
    };
    DetailsPage.prototype.saveFavourite = function () {
        var _this = this;
        var loading = _super.prototype.showLoading.call(this, this.loading, "请求中...");
        this.rest.saveFavourite(this.id, this.userId).subscribe(function (f) {
            loading.dismiss();
            _super.prototype.showToast.call(_this, _this.Toast, _this.isFavourite ? "取消关注成功。" : "关注问题成功。");
            _this.isFavourite = !_this.isFavourite;
        }, function (error) { return _this.errorMessage = error; });
    };
    DetailsPage.prototype.showAnswerPage = function () {
        var _this = this;
        var modal = this.ModalCtrl.create(__WEBPACK_IMPORTED_MODULE_3__answer_answer__["a" /* AnswerPage */], { id: this.id });
        modal.onDidDismiss(function () {
            _this.loadQuestion();
        });
        modal.present();
    };
    return DetailsPage;
}(__WEBPACK_IMPORTED_MODULE_5__common_baseui__["a" /* BaseUI */]));
DetailsPage = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'page-details',template:/*ion-inline-start:"F:\creatVue\ionicApp\zhihuapp\src\pages\details\details.html"*/'<!--\n  Generated template for the DetailsPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{question?.ContentTitle}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n\n<ion-content>\n  <ion-card>\n    <ion-card-content>\n      {{question?.Content}}\n      <p>{{question?.LikeCount}}个关注&nbsp;&nbsp;{{question?.CommentCount}}个回答</p>\n\n      <button ion-button small (click)="showAnswerPage()">&nbsp;\n        <ion-icon name="add"></ion-icon>&nbsp;回答\n      </button>\n\n      <button ion-button small color="secondary" (click)="saveFavourite()">\n        {{isFavourite?\'取消关注\' : \'关注\'}}\n      </button>\n\n    </ion-card-content>\n  </ion-card>\n\n  <ion-card *ngFor="let a of answers">\n    <ion-item>\n      <ion-avatar item-start>\n        <img src="{{a.HeadFace}}" />\n      </ion-avatar>\n      <p>{{a.UserNickName}}</p>\n    </ion-item>\n    <ion-card-content>\n      <p>{{a.ContentSummary}}</p>\n      <p class="answer_date">{{a.CreateDateTime}}</p>\n    </ion-card-content>\n  </ion-card>\n\n</ion-content>\n'/*ion-inline-end:"F:\creatVue\ionicApp\zhihuapp\src\pages\details\details.html"*/,
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ModalController */],
        __WEBPACK_IMPORTED_MODULE_2__providers_rest_rest__["a" /* RestProvider */],
        __WEBPACK_IMPORTED_MODULE_4__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */]])
], DetailsPage);

//# sourceMappingURL=details.js.map

/***/ }),

/***/ 719:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ComponentsModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__emojipicker_emojipicker__ = __webpack_require__(720);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__question_list_question_list__ = __webpack_require__(721);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




var ComponentsModule = (function () {
    function ComponentsModule() {
    }
    return ComponentsModule;
}());
ComponentsModule = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["L" /* NgModule */])({
        declarations: [__WEBPACK_IMPORTED_MODULE_2__emojipicker_emojipicker__["a" /* EmojipickerComponent */],
            __WEBPACK_IMPORTED_MODULE_3__question_list_question_list__["a" /* QuestionListComponent */]],
        imports: [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__emojipicker_emojipicker__["a" /* EmojipickerComponent */]),],
        exports: [__WEBPACK_IMPORTED_MODULE_2__emojipicker_emojipicker__["a" /* EmojipickerComponent */],
            __WEBPACK_IMPORTED_MODULE_3__question_list_question_list__["a" /* QuestionListComponent */]]
    })
], ComponentsModule);

//# sourceMappingURL=components.module.js.map

/***/ }),

/***/ 720:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export EMOJI_ACCESSOR */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EmojipickerComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_emoji_emoji__ = __webpack_require__(282);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the EmojipickerComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var EMOJI_ACCESSOR = {
    provide: __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* NG_VALUE_ACCESSOR */],
    useExisting: Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_21" /* forwardRef */])(function () { return EmojipickerComponent; }),
    multi: true
};
var EmojipickerComponent = (function () {
    function EmojipickerComponent(emojiProvider) {
        this.emojiProvider = emojiProvider;
        this.emojiArray = [];
        this.emojiArray = emojiProvider.getEmojis();
    }
    EmojipickerComponent.prototype.writeValue = function (obj) {
        this.content = obj;
    };
    EmojipickerComponent.prototype.registerOnChange = function (fn) {
        this.onChanged = fn;
        this.setValue(this.content);
    };
    EmojipickerComponent.prototype.registerOnTouched = function (fn) {
        this.onTouched = fn;
    };
    //再次处理新的内容赋值以及函数的绑定
    EmojipickerComponent.prototype.setValue = function (val) {
        this.content += val;
        if (this.content) {
            this.onChanged(this.content);
        }
    };
    return EmojipickerComponent;
}());
EmojipickerComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'emojipicker',template:/*ion-inline-start:"F:\creatVue\ionicApp\zhihuapp\src\components\emojipicker\emojipicker.html"*/'<!-- Generated template for the EmojipickerComponent component -->\n<div class="emoji-picker">\n  <div class="emoji-items">\n    <ion-slides pager>\n      <ion-slide *ngFor="let items of emojiArray">\n        <span class="emoji-item" (click)="setValue(item)" *ngFor="let item of items">\n          {{item}}\n        </span>\n      </ion-slide>\n    </ion-slides>\n  </div>\n</div>\n'/*ion-inline-end:"F:\creatVue\ionicApp\zhihuapp\src\components\emojipicker\emojipicker.html"*/,
        providers: [EMOJI_ACCESSOR]
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__providers_emoji_emoji__["a" /* EmojiProvider */]])
], EmojipickerComponent);

//# sourceMappingURL=emojipicker.js.map

/***/ }),

/***/ 721:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuestionListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_storage__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__providers_rest_rest__ = __webpack_require__(22);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_details_details__ = __webpack_require__(63);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__common_baseui__ = __webpack_require__(25);
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






/**
 * Generated class for the QuestionListComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
var QuestionListComponent = (function (_super) {
    __extends(QuestionListComponent, _super);
    function QuestionListComponent(navCtrl, navParams, storage, rest, Toast, loading) {
        var _this = _super.call(this) || this;
        _this.navCtrl = navCtrl;
        _this.navParams = navParams;
        _this.storage = storage;
        _this.rest = rest;
        _this.Toast = Toast;
        _this.loading = loading;
        return _this;
    }
    //组件内没有生命周期，所以没有ionViewDidLoad 等函数
    QuestionListComponent.prototype.ngAfterContentInit = function () {
        var _this = this;
        this.storage.get('UserId').then(function (val) {
            if (val != null) {
                var loading = _super.prototype.showLoading.call(_this, _this.loading, '加载中...');
                _this.rest.getUserQuestionList(val, _this.dataSourceType).subscribe(function (f) {
                    _this.questions = f;
                    loading.dismissAll();
                }, function (error) { return _this.errorMessage = error; });
            }
        });
    };
    QuestionListComponent.prototype.gotoDetails = function (questionId) {
        console.log(questionId);
        this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_4__pages_details_details__["a" /* DetailsPage */], { id: questionId });
    };
    return QuestionListComponent;
}(__WEBPACK_IMPORTED_MODULE_5__common_baseui__["a" /* BaseUI */]));
__decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["E" /* Input */])('datatype'),
    __metadata("design:type", Object)
], QuestionListComponent.prototype, "dataSourceType", void 0);
QuestionListComponent = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
        selector: 'question-list',template:/*ion-inline-start:"F:\creatVue\ionicApp\zhihuapp\src\components\question-list\question-list.html"*/'<ion-list>\n  <ion-item *ngFor="let q of questions" (click)="gotoDetails(q.IdentityId)">\n    <h2>{{q.ContentTitle}}</h2>\n    <p>{{q.ContentSummary}}</p>\n  </ion-item>\n</ion-list>\n'/*ion-inline-end:"F:\creatVue\ionicApp\zhihuapp\src\components\question-list\question-list.html"*/
    }),
    __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["k" /* NavController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["l" /* NavParams */],
        __WEBPACK_IMPORTED_MODULE_2__ionic_storage__["b" /* Storage */],
        __WEBPACK_IMPORTED_MODULE_3__providers_rest_rest__["a" /* RestProvider */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["o" /* ToastController */],
        __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* LoadingController */]])
], QuestionListComponent);

//# sourceMappingURL=question-list.js.map

/***/ }),

/***/ 722:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RelativetimePipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_moment___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_moment__);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};


/**
 * Generated class for the RelativetimePipe pipe.
 *
 * See https://angular.io/api/core/Pipe for more info on Angular Pipes.
 */
var RelativetimePipe = (function () {
    function RelativetimePipe() {
    }
    /**
     * Takes a value and makes it lowercase.
     */
    RelativetimePipe.prototype.transform = function (value) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        return __WEBPACK_IMPORTED_MODULE_1_moment__(value).toNow();
    };
    return RelativetimePipe;
}());
RelativetimePipe = __decorate([
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["W" /* Pipe */])({
        name: 'relativetime',
    })
], RelativetimePipe);

//# sourceMappingURL=relativetime.js.map

/***/ }),

/***/ 724:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"./af": 283,
	"./af.js": 283,
	"./ar": 284,
	"./ar-dz": 285,
	"./ar-dz.js": 285,
	"./ar-kw": 286,
	"./ar-kw.js": 286,
	"./ar-ly": 287,
	"./ar-ly.js": 287,
	"./ar-ma": 288,
	"./ar-ma.js": 288,
	"./ar-sa": 289,
	"./ar-sa.js": 289,
	"./ar-tn": 290,
	"./ar-tn.js": 290,
	"./ar.js": 284,
	"./az": 291,
	"./az.js": 291,
	"./be": 292,
	"./be.js": 292,
	"./bg": 293,
	"./bg.js": 293,
	"./bm": 294,
	"./bm.js": 294,
	"./bn": 295,
	"./bn.js": 295,
	"./bo": 296,
	"./bo.js": 296,
	"./br": 297,
	"./br.js": 297,
	"./bs": 298,
	"./bs.js": 298,
	"./ca": 299,
	"./ca.js": 299,
	"./cs": 300,
	"./cs.js": 300,
	"./cv": 301,
	"./cv.js": 301,
	"./cy": 302,
	"./cy.js": 302,
	"./da": 303,
	"./da.js": 303,
	"./de": 304,
	"./de-at": 305,
	"./de-at.js": 305,
	"./de-ch": 306,
	"./de-ch.js": 306,
	"./de.js": 304,
	"./dv": 307,
	"./dv.js": 307,
	"./el": 308,
	"./el.js": 308,
	"./en-au": 309,
	"./en-au.js": 309,
	"./en-ca": 310,
	"./en-ca.js": 310,
	"./en-gb": 311,
	"./en-gb.js": 311,
	"./en-ie": 312,
	"./en-ie.js": 312,
	"./en-nz": 313,
	"./en-nz.js": 313,
	"./eo": 314,
	"./eo.js": 314,
	"./es": 315,
	"./es-do": 316,
	"./es-do.js": 316,
	"./es-us": 317,
	"./es-us.js": 317,
	"./es.js": 315,
	"./et": 318,
	"./et.js": 318,
	"./eu": 319,
	"./eu.js": 319,
	"./fa": 320,
	"./fa.js": 320,
	"./fi": 321,
	"./fi.js": 321,
	"./fo": 322,
	"./fo.js": 322,
	"./fr": 323,
	"./fr-ca": 324,
	"./fr-ca.js": 324,
	"./fr-ch": 325,
	"./fr-ch.js": 325,
	"./fr.js": 323,
	"./fy": 326,
	"./fy.js": 326,
	"./gd": 327,
	"./gd.js": 327,
	"./gl": 328,
	"./gl.js": 328,
	"./gom-latn": 329,
	"./gom-latn.js": 329,
	"./gu": 330,
	"./gu.js": 330,
	"./he": 331,
	"./he.js": 331,
	"./hi": 332,
	"./hi.js": 332,
	"./hr": 333,
	"./hr.js": 333,
	"./hu": 334,
	"./hu.js": 334,
	"./hy-am": 335,
	"./hy-am.js": 335,
	"./id": 336,
	"./id.js": 336,
	"./is": 337,
	"./is.js": 337,
	"./it": 338,
	"./it.js": 338,
	"./ja": 339,
	"./ja.js": 339,
	"./jv": 340,
	"./jv.js": 340,
	"./ka": 341,
	"./ka.js": 341,
	"./kk": 342,
	"./kk.js": 342,
	"./km": 343,
	"./km.js": 343,
	"./kn": 344,
	"./kn.js": 344,
	"./ko": 345,
	"./ko.js": 345,
	"./ky": 346,
	"./ky.js": 346,
	"./lb": 347,
	"./lb.js": 347,
	"./lo": 348,
	"./lo.js": 348,
	"./lt": 349,
	"./lt.js": 349,
	"./lv": 350,
	"./lv.js": 350,
	"./me": 351,
	"./me.js": 351,
	"./mi": 352,
	"./mi.js": 352,
	"./mk": 353,
	"./mk.js": 353,
	"./ml": 354,
	"./ml.js": 354,
	"./mr": 355,
	"./mr.js": 355,
	"./ms": 356,
	"./ms-my": 357,
	"./ms-my.js": 357,
	"./ms.js": 356,
	"./my": 358,
	"./my.js": 358,
	"./nb": 359,
	"./nb.js": 359,
	"./ne": 360,
	"./ne.js": 360,
	"./nl": 361,
	"./nl-be": 362,
	"./nl-be.js": 362,
	"./nl.js": 361,
	"./nn": 363,
	"./nn.js": 363,
	"./pa-in": 364,
	"./pa-in.js": 364,
	"./pl": 365,
	"./pl.js": 365,
	"./pt": 366,
	"./pt-br": 367,
	"./pt-br.js": 367,
	"./pt.js": 366,
	"./ro": 368,
	"./ro.js": 368,
	"./ru": 369,
	"./ru.js": 369,
	"./sd": 370,
	"./sd.js": 370,
	"./se": 371,
	"./se.js": 371,
	"./si": 372,
	"./si.js": 372,
	"./sk": 373,
	"./sk.js": 373,
	"./sl": 374,
	"./sl.js": 374,
	"./sq": 375,
	"./sq.js": 375,
	"./sr": 376,
	"./sr-cyrl": 377,
	"./sr-cyrl.js": 377,
	"./sr.js": 376,
	"./ss": 378,
	"./ss.js": 378,
	"./sv": 379,
	"./sv.js": 379,
	"./sw": 380,
	"./sw.js": 380,
	"./ta": 381,
	"./ta.js": 381,
	"./te": 382,
	"./te.js": 382,
	"./tet": 383,
	"./tet.js": 383,
	"./th": 384,
	"./th.js": 384,
	"./tl-ph": 385,
	"./tl-ph.js": 385,
	"./tlh": 386,
	"./tlh.js": 386,
	"./tr": 387,
	"./tr.js": 387,
	"./tzl": 388,
	"./tzl.js": 388,
	"./tzm": 389,
	"./tzm-latn": 390,
	"./tzm-latn.js": 390,
	"./tzm.js": 389,
	"./uk": 391,
	"./uk.js": 391,
	"./ur": 392,
	"./ur.js": 392,
	"./uz": 393,
	"./uz-latn": 394,
	"./uz-latn.js": 394,
	"./uz.js": 393,
	"./vi": 395,
	"./vi.js": 395,
	"./x-pseudo": 396,
	"./x-pseudo.js": 396,
	"./yo": 397,
	"./yo.js": 397,
	"./zh-cn": 398,
	"./zh-cn.js": 398,
	"./zh-hk": 399,
	"./zh-hk.js": 399,
	"./zh-tw": 400,
	"./zh-tw.js": 400
};
function webpackContext(req) {
	return __webpack_require__(webpackContextResolve(req));
};
function webpackContextResolve(req) {
	var id = map[req];
	if(!(id + 1)) // check for number or string
		throw new Error("Cannot find module '" + req + "'.");
	return id;
};
webpackContext.keys = function webpackContextKeys() {
	return Object.keys(map);
};
webpackContext.resolve = webpackContextResolve;
module.exports = webpackContext;
webpackContext.id = 724;

/***/ })

},[401]);
//# sourceMappingURL=main.js.map