webpackJsonp([1],{

/***/ 101:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return InfoPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__providers_monsterit_monsterit__ = __webpack_require__(78);
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
 * Generated class for the InfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var InfoPage = (function () {
    function InfoPage(navCtrl, navParams, http, monsterin) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.http = http;
        this.monsterin = monsterin;
        this.naytaTiedot = function (hirviojuttu) {
            console.log("PPPPPPPPPPPPPPPPPPPPPPPPPERKEEEEEEEEEEEEEEEEEEEEEEELEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE");
            var hirviotiedot = {
                //perustiedot hirvioon alkaa tasta
                name: hirviojuttu.name,
                size: hirviojuttu.size,
                type: hirviojuttu.type,
                hit_points: hirviojuttu.hit_points,
                alignment: hirviojuttu.alignment,
                armor_class: hirviojuttu.armor_class,
                hit_dice: hirviojuttu.hit_dice,
                speed: hirviojuttu.speed,
                //statit alkaa tästä
                strength: hirviojuttu.strength,
                dexterity: hirviojuttu.dexterity,
                charisma: hirviojuttu.charisma,
                intelligence: hirviojuttu.intelligence,
                constitution: hirviojuttu.constitution,
                wisdom: hirviojuttu.wisdom,
                //muut skillit    
                senses: hirviojuttu.senses,
                //Saving Throw
                constitution_save: hirviojuttu.constitution_save,
                intelligence_save: hirviojuttu.intelligence_save,
                wisdom_save: hirviojuttu.wisdom_save,
                //Muita kykyjä
                history: hirviojuttu.history,
                perception: hirviojuttu.perception,
                arcana: hirviojuttu.arcana,
                stealth: hirviojuttu.stealth,
                intimidation: hirviojuttu.intimidation,
                athletics: hirviojuttu.athletics,
            };
            _this.navCtrl.push(__WEBPACK_IMPORTED_MODULE_3__home_home__["a" /* HomePage */], hirviotiedot);
        };
        this.monsterin.haeKaikki().then(function (data) {
            _this.monsterit = data;
        });
    }
    InfoPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-info',template:/*ion-inline-start:"C:\ui\lopparityo\src\pages\info\info.html"*/'<!--\n  Generated template for the InfoPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <div>\n    <ion-title>Hirviöt</ion-title>\n    <p>Klikkaamalla hirviöitä pääset lisätietoihin.</p>\n  </div>\n\n</ion-header>\n\n\n<ion-content padding>\n    <ion-grid>\n      <ion-row>\n        <ion-col>\n       \n      <ion-list class="list-group">\n      <ion-item *ngFor="let hirviojuttu of monsterit; trackBy:index" class="list-group-item list-group-item-action flex-column align-items-start">\n\n      <h2 class="d-flex w-100 justify-content-between">{{hirviojuttu.name}}</h2> <button ion-button (click)="naytaTiedot(hirviojuttu); ">Lisätiedot</button>\n     \n      </ion-item>\n    </ion-list>\n  </ion-col>\n  </ion-row>\n  \n  </ion-grid> \n\n</ion-content>\n'/*ion-inline-end:"C:\ui\lopparityo\src\pages\info\info.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["a" /* HttpClient */],
            __WEBPACK_IMPORTED_MODULE_4__providers_monsterit_monsterit__["a" /* MonsteritProvider */]])
    ], InfoPage);
    return InfoPage;
}());

//# sourceMappingURL=info.js.map

/***/ }),

/***/ 114:
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
webpackEmptyAsyncContext.id = 114;

/***/ }),

/***/ 156:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"../pages/info/info.module": [
		279,
		0
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = 156;
module.exports = webpackAsyncContext;

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomePage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__providers_monsterit_monsterit__ = __webpack_require__(78);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomePage = (function () {
    function HomePage(navCtrl, toastCtrl, modalCtrl, loadingCtrl, monsterin, navParams) {
        var _this = this;
        this.navCtrl = navCtrl;
        this.toastCtrl = toastCtrl;
        this.modalCtrl = modalCtrl;
        this.loadingCtrl = loadingCtrl;
        this.monsterin = monsterin;
        this.navParams = navParams;
        this.nimi = "";
        this.tyyppi = "";
        this.koko = "";
        this.sense = "";
        this.speed = "";
        this.hit_dice = "";
        console.log("PPPPPPPPPPPPPPPPPPPPPPPPPERKEEEEEEEEEEEEEEEEEEEEEEELEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEEE");
        this.nimi = this.navParams.get("name");
        this.tyyppi = this.navParams.get("type");
        this.koko = this.navParams.get("size");
        this.sense = this.navParams.get("senses");
        this.hit_dice = this.navParams.get("hit_dice");
        this.armor_class = this.navParams.get("armor_class");
        this.hit_points = this.navParams.get("hit_points");
        this.strength = this.navParams.get("strength");
        this.dexterity = this.navParams.get("dexterity");
        this.constitution = this.navParams.get("constitution");
        this.intelligence = this.navParams.get("intelligence");
        this.wisdom = this.navParams.get("wisdom");
        this.charisma = this.navParams.get("charisma");
        this.constitution_save = this.navParams.get("constitution_save");
        this.intelligence_save = this.navParams.get("intelligence_save");
        this.wisdom_save = this.navParams.get("wisdom_save");
        this.history = this.navParams.get("history");
        this.perception = this.navParams.get("perception");
        this.arcana = this.navParams.get("arcana");
        this.athletics = this.navParams.get("athletics");
        this.stealth = this.navParams.get("stealth");
        this.intimidation = this.navParams.get("intimidation");
        this.monsterin.haeKaikki().then(function (data) {
            _this.monsterit = data;
        });
    }
    HomePage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'page-home',template:/*ion-inline-start:"C:\ui\lopparityo\src\pages\home\home.html"*/'<ion-header>\n  <ion-navbar>\n    <ion-title>\n              Infoa\n    </ion-title>\n  </ion-navbar>\n</ion-header>\n\n\n<ion-content >\n    <ion-card-content>\n      <ion-col col-8>\n        <ion-item>\n          <div class="d-flex w-100 justify-content-between">\n          <ion-list>\n            <td>\n              <tr>\n                <ion-grid>\n                  <ion-row>\n                    <ion-col>\n                        <h1><p text-uppercase class="d-flex w-10 justify-content-between"> Name </p> {{ nimi }} </h1>\n                        <h2><p text-uppercase class="d-flex w-10 justify-content-between"> Tyyppi </p> {{ tyyppi }} </h2>\n                        <h2><p text-uppercase class="d-flex w-10 justify-content-between"> Kyvyt </p> {{ sense }} </h2>\n                        <h2><p text-uppercase class="d-flex w-10 justify-content-between"> Koko </p> {{ size }} </h2>\n                        <h2><p text-uppercase class="d-flex w-10 justify-content-between"> Osuminen </p> {{ hit_dice }} </h2>\n                        <h2><p text-uppercase class="d-flex w-10 justify-content-between"> Panssari </p> {{ armor_class }} </h2>\n                        <h2><p text-uppercase class="d-flex w-10 justify-content-between"> Hitpointit </p> {{ hit_points }} </h2>\n                    </ion-col>\n                    <ion-col>\n                    <h1>Stats</h1>\n            <h2><p text-uppercase class="d-flex w-300 justify-content-between"> strength </p> {{ strength }} </h2>\n            <h2><p text-uppercase class="d-flex w-300 justify-content-between"> dexterity </p> {{ dexterity }} </h2>\n            <h2><p text-uppercase class="d-flex w-300 justify-content-between"> constitution </p> {{ constitution }} </h2>\n            <h2><p text-uppercase class="d-flex w-300 justify-content-between"> intelligence </p> {{ intelligence }} </h2>\n            <h2><p text-uppercase class="d-flex w-300 justify-content-between"> wisdom </p> {{ wisdom }} </h2>\n            <h2><p text-uppercase class="d-flex w-300 justify-content-between"> charisma </p> {{ charisma }} </h2>\n                    </ion-col>\n                    <ion-col>\n                        <h1>Saving Throwit</h1>\n                <h2><p text-uppercase class="d-flex w-10 justify-content-between"> constitution_save </p> {{ constitution_save }} </h2>\n                <h2><p text-uppercase class="d-flex w-10 justify-content-between"> intelligence_save </p> {{ intelligence_save }} </h2>\n                <h2><p text-uppercase class="d-flex w-10 justify-content-between"> wisdom_save </p> {{ wisdom_save }} </h2>\n                        </ion-col>\n                        <ion-col>\n                            <h1>Erilaiset taidot</h1>\n                    <h2><p text-uppercase class="d-flex w-10 justify-content-between" align-self-center> history </p> {{ history }} </h2>\n                    <h2><p text-uppercase class="d-flex w-10 justify-content-between" align-self-center> perception </p> {{ perception }} </h2>\n                    <h2><p text-uppercase class="d-flex w-10 justify-content-between" align-self-center> arcana </p> {{ arcana }} </h2>\n                    <h2><p text-uppercase class="d-flex w-10 justify-content-between" align-self-center> athletics </p> {{ athletics }} </h2>\n                    <h2><p text-uppercase class="d-flex w-10 justify-content-between" align-self-center> stealth </p> {{ stealth }} </h2>\n                    <h2><p text-uppercase class="d-flex w-10 justify-content-between" align-self-center> intimidation </p> {{ intimidation }} </h2>\n                            </ion-col>\n                </ion-row>\n            </ion-grid>\n            </tr>\n            </td>\n            </ion-list>\n           \n          \n      \n          </div>\n          </ion-item>\n        </ion-col>\n    \n      </ion-card-content>\n</ion-content>\n'/*ion-inline-end:"C:\ui\lopparityo\src\pages\home\home.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["g" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["j" /* ToastController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["f" /* ModalController */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* LoadingController */],
            __WEBPACK_IMPORTED_MODULE_2__providers_monsterit_monsterit__["a" /* MonsteritProvider */],
            __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["h" /* NavParams */]])
    ], HomePage);
    return HomePage;
}());

//# sourceMappingURL=home.js.map

/***/ }),

/***/ 201:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(202);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_module__ = __webpack_require__(223);


Object(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_1__app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 223:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_common_http__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__pages_info_info__ = __webpack_require__(101);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__(278);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__pages_home_home__ = __webpack_require__(157);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__providers_monsterit_monsterit__ = __webpack_require__(78);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_info_info__["a" /* InfoPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["c" /* IonicModule */].forRoot(__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */], {}, {
                    links: [
                        { loadChildren: '../pages/info/info.module#InfoPageModule', name: 'InfoPage', segment: 'info', priority: 'low', defaultHistory: [] }
                    ]
                }),
                __WEBPACK_IMPORTED_MODULE_5__angular_common_http__["b" /* HttpClientModule */]
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* IonicApp */]],
            entryComponents: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* MyApp */],
                __WEBPACK_IMPORTED_MODULE_8__pages_home_home__["a" /* HomePage */],
                __WEBPACK_IMPORTED_MODULE_6__pages_info_info__["a" /* InfoPage */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_4__ionic_native_status_bar__["a" /* StatusBar */],
                __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */],
                { provide: __WEBPACK_IMPORTED_MODULE_1__angular_core__["u" /* ErrorHandler */], useClass: __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["b" /* IonicErrorHandler */] },
                __WEBPACK_IMPORTED_MODULE_9__providers_monsterit_monsterit__["a" /* MonsteritProvider */]
            ]
        })
    ], AppModule);
    return AppModule;
}());

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 278:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MyApp; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__ = __webpack_require__(200);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__ = __webpack_require__(197);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__pages_info_info__ = __webpack_require__(101);
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
    function MyApp(platform, statusBar, splashScreen) {
        this.rootPage = __WEBPACK_IMPORTED_MODULE_4__pages_info_info__["a" /* InfoPage */];
        platform.ready().then(function () {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            statusBar.styleDefault();
            splashScreen.hide();
        });
    }
    MyApp = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({template:/*ion-inline-start:"C:\ui\lopparityo\src\app\app.html"*/'<ion-nav [root]="rootPage"></ion-nav>\n'/*ion-inline-end:"C:\ui\lopparityo\src\app\app.html"*/
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1_ionic_angular__["i" /* Platform */], __WEBPACK_IMPORTED_MODULE_2__ionic_native_status_bar__["a" /* StatusBar */], __WEBPACK_IMPORTED_MODULE_3__ionic_native_splash_screen__["a" /* SplashScreen */]])
    ], MyApp);
    return MyApp;
}());

//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MonsteritProvider; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_common_http__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
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
  Generated class for the MonsteritProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
var MonsteritProvider = (function () {
    function MonsteritProvider(http) {
        var _this = this;
        this.http = http;
        this.haeKaikki = function () {
            return new Promise(function (resolve) {
                _this.http.get("assets/hirviot.json")
                    .subscribe(function (data) {
                    resolve(data);
                });
            });
        };
    }
    MonsteritProvider = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_0__angular_common_http__["a" /* HttpClient */]])
    ], MonsteritProvider);
    return MonsteritProvider;
}());

//# sourceMappingURL=monsterit.js.map

/***/ })

},[201]);
//# sourceMappingURL=main.js.map