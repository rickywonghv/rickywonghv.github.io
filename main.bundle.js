webpackJsonp([1,4],{

/***/ 134:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(44)();
// imports


// module
exports.push([module.i, "/* Master Styles */\nh1 {\n  color: #fff;\n  font-family: Arial, Helvetica, sans-serif;\n  font-size: 250%;\n}\nh2, h3 {\n  color: #fff;\n  font-family: Arial, Helvetica, sans-serif;\n  font-weight: lighter;\n}\n.title{\n  color: #fff;\n  font-family: Arial, Helvetica, sans-serif;\n  float: left;\n}\n.title:hover{\n  color: #444;\n  font-family: Arial, Helvetica, sans-serif;\n}\nbody {\n  font-family: Arial, Helvetica, sans-serif;\n}\n.topBar{\n  font-family: Arial, Helvetica, sans-serif;\n  background-color:#D32F2F;\n  margin-top: 0px;\n  position: relative;\n}\n.item{\n  margin-top: 5px;\n  padding-top: 5px;\n  padding-bottom: 5px;\n  padding-left: 5px;\n  cursor:pointer;\n}\n.item:hover{\n  color:#fff;\n  background-color: rgba(151, 151, 151, 0.88);\n  cursor:pointer;\n}\n.itemsDesc{\n  font-family: Arial, Helvetica, sans-serif;\n  -ms-flex-line-pack: center;\n      align-content: center;\n  display:inline-block;\n  width:100%;\n  white-space: nowrap;\n  overflow:hidden;\n  text-overflow: ellipsis;\n}\n\n.navItem{\n  cursor:pointer;\n  color:#fff;\n}\n.navItem:hover{\n  cursor:pointer;\n  color:#fff;\n  background-color: rgba(161, 161, 161, 0.84);\n}\nnav{\n  padding-top: 5px;\n  padding-bottom: 5px;\n  padding-left: 10px;\n  padding-right: 10px;\n}\n.mainBottom{\n  margin-top: 5px;\n  float: left;\n  z-index: 2;\n  padding-top: 120px;\n  background-color: #fff;\n}\n.player{\n\n}\ninput[type=\"text\"]{\n  padding:5px 15px; border:2px black solid;\n  border-radius: 5px;\n}\ninput[type=\"text\"]:hover{\n  padding:5px 15px; border:2px #2e2e2e solid;\n  border-radius: 5px;\n}\n.videoDesc{\n  font-family: Arial, Helvetica, sans-serif;\n  -ms-flex-line-pack: center;\n      align-content: center;\n  display:inline-block;\n  width:100%;\n  white-space: nowrap;\n  overflow:hidden;\n  text-overflow: ellipsis;\n}\n.pageNav{\n  cursor:pointer;\n}\n.footerBottom{\n  padding:10px;\n  font-family: Arial, Helvetica, sans-serif;\n  background-color:#D32F2F;\n}\n.top{\n  position: fixed;\n  width: 100%;\n  float: left;\n  z-index: 3;\n}\n@media only screen and (max-width: 500px) {\n  .top{\n    position: relative;\n    width: 100%;\n  }\n  .mainBottom{\n    margin-top: 5px;\n    padding-top: 5px;\n    padding-bottom: 10px;\n    background-color: #fff;\n  }\n  .item{\n    margin-top: 5px;\n    padding-top: 1px;\n    padding-bottom: 1px;\n    padding-left: 5px;\n    cursor:pointer;\n    max-height: 10%;\n  }\n}\n@media only screen and (max-width: 300px) {\n  .top{\n    position: relative;\n    width: 100%;\n  }\n  .mainBottom{\n    margin-top: 5px;\n    padding-top: 5px;\n    padding-bottom: 10px;\n    background-color: #fff;\n  }\n  .item{\n    margin-top: 5px;\n    padding-top: 5px;\n    padding-bottom: 5px;\n    padding-left: 5px;\n    cursor:pointer;\n    max-height: 10%;\n  }\n  .itemImg{\n    display: none;\n  }\n}\n\n\n.resultWords{\n  float:left;\n  padding-left: 5px;\n}\n.resultNumber{\n  float:right;\n}\n.resultNumber:hover{\n  float:right;\n  background-color: rgba(151, 151, 151, 0.55);\n  cursor: pointer;\n}\n\n.pageNav{\n  float:left;\n}\n.titlewords:hover{\n  cursor: pointer;\n  float: left;\n}\n.footer-icon{\n  max-width: 30px;\n  float: right;\n  padding-right: 5px;\n}\n.navTag:hover{\n  color: rgb(255, 255, 255);\n  cursor: pointer;\n}\n.tagBar{\n  padding:5px;\n}\n.horror{\n\n}\n.edmondLivePlayer{\n  padding-top: 5px;\n}\n.itemTitle{\n\n}\n.itemChannelName{\n\n}\n.youtube-loading{\n  background-image: url(" + __webpack_require__(160) + ");\n  background-position: center;\n  background-repeat: no-repeat;\n  cursor: pointer;\n}\n.youtube-app{\n  -ms-flex-line-pack: center;\n      align-content: center;\n}\n.loadingPage{\n  -ms-flex-line-pack: center;\n      align-content: center;\n\n}\n.channelBtn{\n  float: right;\n  margin-top: 5px;\n}\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 136:
/***/ (function(module, exports) {

module.exports = "<div class=\"top\">\n    <div class=\"topBar col-xs-12\">\n        <span class=\"title\"><h3 class=\"titlewords\">{{title}}</h3></span>\n        <button class=\"btn btn-primary channelBtn\" (click)=\"listChannel()\" *ngIf=\"!channelList\">Channel</button>\n        <button class=\"btn btn-success channelBtn\" (click)=\"listVideo()\" *ngIf=\"!videoList\">Video</button>\n        <input type=\"text\" class=\"input-control searchBar text form-control col-xs-12 col-sm-6\" data-role=\"input\" placeholder=\"Search\" (ngModelChange)=\"search($event)\" autofocus [(ngModel)]=\"searchInput\" name=\"searchInput\">\n\n\n        <nav class=\"col-xs-12 tagBar\">\n            <span class=\"navTag\">恐怖:</span>\n                <span class=\"navItem horror\" (click)=\"search('雲海')\">雲海</span>\n                <span class=\"navItem horror\" (click)=\"search('摩星嶺4號')\">摩星嶺4號</span>\n                <span class=\"navItem horror\" (click)=\"search('靈異旅行團')\">靈異旅行團</span>\n                <span class=\"navItem horror\" (click)=\"search('黑色星期一')\">黑色星期一</span>\n                <span class=\"navItem horror\" (click)=\"search('極度深寒 jemdogdog -精華')\">極度深寒</span>\n                <span class=\"navItem horror\" (click)=\"search('越夜越心慌')\">越夜越心慌</span>\n                <span class=\"navItem horror\" (click)=\"search('恐怖熱線')\">恐怖熱線</span>\n                <span class=\"navItem horror\" (click)=\"live()\">恐怖在線 Live</span>\n                <span class=\"navItem horror\" (click)=\"live()\">恐怖在線 Live</span>\n\n            <span class=\"navTag\">IT:</span>\n            <span class=\"navItem horror\" (click)=\"search('亂gad')\">亂gad</span>\n            <span class=\"navItem horror\" (click)=\"search('HKPUG')\">HKPUG</span>\n        </nav>\n    </div>\n</div>\n\n<base href=\"/src/app/\">\n<div class=\"col-xs-12 mainBottom\">\n    <div class=\"col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-3 player\">\n        <div *ngIf=\"edmonpoonlive\" class=\"edmondLivePlayer\">\n            <div>Now Playing: 恐怖在線</div>\n            <audio *ngIf=\"edmonpoonlive\" controls>\n                <source src=\"http://alive.dimbo.tv:7000/;stream.nsv&type=mp3\" type=\"audio/mpeg\">\n                Your browser does not support the audio element.\n            </audio>\n        </div>\n\n        <iframe id=\"ytplayer\" class=\"col-xs-12 col-sm-12 col-md-12\" max-width=\"560\" max-height=\"315\" frameborder=\"0\" allowfullscreen [src]=\"videoId\"></iframe>\n        <div class=\"videoDesc\">Now Playing: {{videoDesc}}</div>\n        <div>\n            <span class=\"pageNav\">\n                <span *ngIf=\"perviousPage\" (click)=\"page(perviousPage)\" ><img width=\"30px\" class=\"pageNav\" [src]=\"img.left\"></span><span *ngIf=\"nextPage\" (click)=\"page(nextPage)\"><img class=\"pageNav\" width=\"30px\" src=\"right-arrow.png\"></span>\n            </span>\n            <span class=\"resultWords\">Results of {{keyWords}}</span>\n            <span class=\"resultNumber\">Total result: {{pageInfo}}</span>\n        </div>\n    </div>\n\n    <div *ngFor=\"let item of items\" class=\"col-xs-12 col-sm-12 col-md-6 col-lg-4 col-xl-3\">\n        <div class=\"item itemsDesc\" (click)=\"playVid(item.id.videoId,item.snippet.title,1)\">\n            <span><img class=\"img img-thumbnail itemImg hide-mobile\" src=\"{{item.snippet.thumbnails.default.url}}\" width=\"{{item.snippet.thumbnails.default.width}}\" alt=\"{{item.snippet.title}}-default\"></span>\n            <span>\n                <span class=\"itemTitle\">{{item.snippet.title}}</span>\n                <span class=\"itemChannelName\"> by {{item.snippet.channelTitle}}</span>\n            </span>\n        </div>\n    </div>\n</div>\n<div class=\"col-xs-12 footerBottom footer\">\n    <div>\n        <span class=\"pageNav\">\n            <span *ngIf=\"perviousPage\" (click)=\"page(perviousPage)\" ><img width=\"30px\" class=\"pageNav\" src=\"left-arrow.png\"></span><span *ngIf=\"nextPage\" (click)=\"page(nextPage)\"><img class=\"pageNav\" width=\"30px\" src=\"right-arrow.png\"></span>\n        </span>\n        <span class=\"resultWords\">Results of {{keyWords}}</span>\n        <span class=\"resultNumber\">Total result: {{pageInfo}}</span>\n        <span> <img src=\"icon.png\" class=\"footer-icon\"> </span>\n    </div>\n</div>\n"

/***/ }),

/***/ 160:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "icon.a444d3326d9a54264fd8.png";

/***/ }),

/***/ 162:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(72);


/***/ }),

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(48);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppService; });
/**
 * Created by Damon on 4/9/2017.
 */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
//https://www.googleapis.com/youtube/v3/search?part=snippet&q=angular2&maxResults=50&type=video&key=AIzaSyAARhzDEdAwaIYKelgTmVa8Nez5sLKjBcM


var AppService = (function () {
    //'https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&safeSearch=moderate&type=video&key=AIzaSyAARhzDEdAwaIYKelgTmVa8Nez5sLKjBcM&q='
    //&maxResults=50&safeSearch=moderate&type=video&key=AIzaSyAARhzDEdAwaIYKelgTmVa8Nez5sLKjBcM&q=
    //+"&maxResults="+this.maxResults
    function AppService(http) {
        this.http = http;
        this.url = 'https://www.googleapis.com/youtube/v3/search?part=snippet'; // URL to web API
        this.maxResults = 10;
        this.searchType = "video";
        this.apikey = "AIzaSyAARhzDEdAwaIYKelgTmVa8Nez5sLKjBcM";
        this.regionCode = "HK";
    }
    AppService.prototype.getSearch = function (key) {
        return this.http.get(this.url + "&maxResults=20&safeSearch=moderate&type=" + this.searchType + "&key=" + this.apikey + "&q=" + key + "%7C" + "&regionCode=" + this.regionCode);
    };
    AppService.prototype.page = function (pageTk, keyword) {
        var pageUrl = this.url + "&key=" + this.apikey + "&maxResults=20&safeSearch=moderate&type=video&pageToken=" + pageTk + "&q=" + keyword + "%7C" + "&regionCode=" + this.regionCode;
        return this.http.get(pageUrl);
    };
    AppService.prototype.edmondponLive = function () {
        var pageUrl = this.url + "&key=" + this.apikey + "&maxResults=20&safeSearch=moderate&type=channel&&q=EdmondPoon%7C" + "&regionCode=" + this.regionCode;
        return this.http.get(pageUrl);
    };
    return AppService;
}());
AppService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === "function" && _a || Object])
], AppService);

var _a;
//# sourceMappingURL=app.service.js.map

/***/ }),

/***/ 71:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 71;


/***/ }),

/***/ 72:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(77);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(79);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(80);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 78:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__app_service__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__ = __webpack_require__(15);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
var AppComponent = (function () {
    function AppComponent(appservice, sanitizer) {
        this.appservice = appservice;
        this.sanitizer = sanitizer;
        this.title = "Youtube";
        this.key = "";
        this.searchInput = "";
        this.edmonpoonlive = false;
        this.playingItem = false;
        this.channelList = false;
        this.videoList = true;
        //this.search("wan hoi");
        this.appservice.edmondponLive().subscribe(function (res) { return console.log(res.json()); });
    }
    AppComponent.prototype.ngOnInit = function () {
        this.init();
    };
    AppComponent.prototype.listVideo = function () {
    };
    AppComponent.prototype.init = function () {
        this.img = { left: "./left-arrow.png" };
        this.videoId = this.getCurrentVidId();
        this.videoDesc = this.getCurrentName();
        this.searchInput = this.getSearchKeyWords();
        if (this.videoId && this.videoDesc, this.searchInput) {
            this.playVid(this.videoId, this.videoDesc, 0);
            this.search(this.searchInput);
        }
        else {
            this.search("wan hoi");
            this.playVid("QMQbAoTLJX8", "Initial Video", 0);
        }
    };
    AppComponent.prototype.live = function () {
        this.edmonpoonlive = true;
        this.videoDesc = '恐怖在線 Live';
    };
    AppComponent.prototype.search = function (key) {
        var _this = this;
        localStorage.setItem("keyWords", key);
        this.keyWords = key;
        this.searchInput = key;
        this.appservice.getSearch(key).subscribe(function (res) { return _this.listExe(res.json()); });
    };
    AppComponent.prototype.page = function (pageTk) {
        var _this = this;
        this.keyWords = localStorage.getItem("keyWords");
        this.appservice.page(pageTk, this.keyWords).subscribe(function (res) { return _this.listExe(res.json()); });
    };
    AppComponent.prototype.listExe = function (result) {
        console.log(result);
        this.items = result.items;
        if (result.nextPageToken) {
            this.nextPage = result.nextPageToken;
        }
        if (result.prevPageToken) {
            this.perviousPage = result.prevPageToken;
        }
        this.pageInfo = result.pageInfo.totalResults;
    };
    AppComponent.prototype.playVid = function (Id, title, autoPlay) {
        this.videoId = this.url(Id, autoPlay);
        this.saveVideoId(Id, title);
        this.videoDesc = title;
        this.playingItem = true;
    };
    AppComponent.prototype.url = function (Id, autoPlay) {
        return this.sanitizer.bypassSecurityTrustResourceUrl("https://www.youtube.com/embed/" + Id + "?autoplay=" + autoPlay + "&controls=2&theme=dark&origin=youtube.damonwong.xyz&enablejsapi=1&playsinline=1&playerapiid=ytplayer");
        //https://www.youtube.com/watch?v=
    };
    AppComponent.prototype.saveVideoId = function (videoId, title) {
        localStorage.setItem("current", videoId);
        localStorage.setItem("currentName", title);
    };
    AppComponent.prototype.getCurrentVidId = function () {
        return localStorage.getItem("current");
    };
    AppComponent.prototype.getCurrentName = function () {
        return localStorage.getItem("currentName");
    };
    AppComponent.prototype.getSearchKeyWords = function () {
        return localStorage.getItem("keyWords");
    };
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_3" /* Component */])({
        selector: 'youtube-app',
        template: __webpack_require__(136),
        styles: [__webpack_require__(134)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__app_service__["a" /* AppService */]) === "function" && _a || Object, typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__angular_platform_browser__["c" /* DomSanitizer */]) === "function" && _b || Object])
], AppComponent);

var _a, _b;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(15);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(5);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(76);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(48);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__app_service__ = __webpack_require__(49);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__(78);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};






//import {BROWSER_SANITIZATION_PROVIDERS} from "@angular/platform-browser/src/browser";
var AppModule = (function () {
    function AppModule() {
    }
    return AppModule;
}());
AppModule = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["b" /* JsonpModule */]
        ],
        providers: [__WEBPACK_IMPORTED_MODULE_4__app_service__["a" /* AppService */]],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 80:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
// The file contents for the current environment will overwrite these during build.
var environment = {
    production: false
};
//# sourceMappingURL=environment.js.map

/***/ })

},[162]);
//# sourceMappingURL=main.bundle.js.map