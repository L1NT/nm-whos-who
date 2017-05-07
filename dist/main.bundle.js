webpackJsonp([2,4],{

/***/ 148:
/***/ (function(module, exports) {

function webpackEmptyContext(req) {
	throw new Error("Cannot find module '" + req + "'.");
}
webpackEmptyContext.keys = function() { return []; };
webpackEmptyContext.resolve = webpackEmptyContext;
module.exports = webpackEmptyContext;
webpackEmptyContext.id = 148;


/***/ }),

/***/ 149:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__(155);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__(161);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__(164);




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["a" /* enableProdMode */])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=main.js.map

/***/ }),

/***/ 160:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__meetup_service__ = __webpack_require__(32);
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


var AppComponent = (function () {
    function AppComponent(meetupService) {
        this.meetupService = meetupService;
        this.type = 'oauth';
    }
    return AppComponent;
}());
AppComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Component */])({
        selector: 'app-root',
        template: __webpack_require__(223),
        styles: [__webpack_require__(220)]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__meetup_service__["a" /* MeetupService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__meetup_service__["a" /* MeetupService */]) === "function" && _a || Object])
], AppComponent);

var _a;
//# sourceMappingURL=app.component.js.map

/***/ }),

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__(11);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_http__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__ = __webpack_require__(158);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__member_member_component__ = __webpack_require__(163);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__member_member_list_component__ = __webpack_require__(162);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__meetup_service__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__app_component__ = __webpack_require__(160);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
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
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["b" /* NgModule */])({
        declarations: [
            __WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */],
            __WEBPACK_IMPORTED_MODULE_5__member_member_component__["a" /* MemberComponent */],
            __WEBPACK_IMPORTED_MODULE_6__member_member_list_component__["a" /* MemberListComponent */]
        ],
        imports: [
            __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
            __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */],
            __WEBPACK_IMPORTED_MODULE_3__angular_http__["a" /* HttpModule */],
            __WEBPACK_IMPORTED_MODULE_4__ng_bootstrap_ng_bootstrap__["a" /* NgbModule */].forRoot()
        ],
        providers: [
            __WEBPACK_IMPORTED_MODULE_7__meetup_service__["a" /* MeetupService */]
        ],
        bootstrap: [__WEBPACK_IMPORTED_MODULE_8__app_component__["a" /* AppComponent */]]
    })
], AppModule);

//# sourceMappingURL=app.module.js.map

/***/ }),

/***/ 162:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_debounceTime__ = __webpack_require__(229);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__meetup_service__ = __webpack_require__(32);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MemberListComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MemberListComponent = (function () {
    function MemberListComponent(meetupService) {
        this.meetupService = meetupService;
        this.pinned = [];
        this.results = [];
    }
    Object.defineProperty(MemberListComponent.prototype, "query", {
        set: function (value) {
            var _this = this;
            if (typeof value === 'string') {
                this.meetupService.getMembers(value)
                    .debounceTime(200)
                    .subscribe(function (members) {
                    // TODO: filter members in this.pinned
                    _this.results = members;
                });
            }
        },
        enumerable: true,
        configurable: true
    });
    MemberListComponent.prototype.pinClick = function (member, from, to) {
        var index = from.findIndex(function (availMember) {
            return availMember.id === member.id;
        });
        from.splice(index, 1);
        to.push(member);
        this.meetupService.sortMembers(to);
    };
    MemberListComponent.prototype.unpin = function (member) {
    };
    return MemberListComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Input */])(),
    __metadata("design:type", String),
    __metadata("design:paramtypes", [String])
], MemberListComponent.prototype, "query", null);
MemberListComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Component */])({
        selector: 'nm-ww-member-list',
        template: "\n    <div class=\"input-group mb-2\" *ngFor=\"let member of pinned\">\n      <button class=\"btn glyphicons glyphicons-pin\" (click)=\"pinClick(member,pinned,results)\"></button>\n      <nm-ww-member [member]=\"member\"></nm-ww-member>\n    </div>\n    <hr />\n    <div class=\"input-group mb-2\" *ngFor=\"let member of results\">\n      <button class=\"btn glyphicons glyphicons-pushpin\" (click)=\"pinClick(member,results,pinned)\"></button>\n      <nm-ww-member [member]=\"member\"></nm-ww-member>\n    </div>\n  ",
        styles: [
            'div {border: solid 2px black;}'
        ]
    }),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__meetup_service__["a" /* MeetupService */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__meetup_service__["a" /* MeetupService */]) === "function" && _a || Object])
], MemberListComponent);

var _a;
//# sourceMappingURL=member-list.component.js.map

/***/ }),

/***/ 163:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__ = __webpack_require__(23);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__meetup_service__ = __webpack_require__(32);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MemberComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var MemberComponent = (function () {
    function MemberComponent(sanitizer) {
        this.sanitizer = sanitizer;
    }
    MemberComponent.prototype.getPhotoUrl = function (member) {
        var photoURL = member.photo && member.photo.photo_link;
        return this.sanitizer.bypassSecurityTrustResourceUrl(photoURL || '');
    };
    return MemberComponent;
}());
__decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["M" /* Input */])(),
    __metadata("design:type", typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_2__meetup_service__["Member"] !== "undefined" && __WEBPACK_IMPORTED_MODULE_2__meetup_service__["Member"]) === "function" && _a || Object)
], MemberComponent.prototype, "member", void 0);
MemberComponent = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Y" /* Component */])({
        selector: 'nm-ww-member',
        template: "\n    <div class=\"media\">\n      <img class=\"media-left hidden-sm-down\" [src]=\"getPhotoUrl(member)\" />\n      <div class=\"media-body text-left ml-2 pr-2\">\n        <div class=\"row\">\n          <h4 class=\"col col-sm-12\">\n            <a href=\"{{member.link}}\" target=\"_blank\">\n              {{member.name}}\n            </a>\n          </h4>\n          <div class=\"col col-auto col-sm-12\">{{member.city}}{{member.city && member.state ? \", \" : \"\"}}{{member.state}}</div>\n        </div>\n\n        <div class=\"row\">\n          <div class=\"col-12 col-sm-6 col-lg-4\">Joined: {{member.joined | date}}</div>\n          <div class=\"col-12 col-sm-6 col-lg-8\">Bio: {{member.bio}}</div>\n        </div>\n\n        <div class=\"row\">\n          <div class=\"col-12 col-md-4\">Memberships: {{member.membership_count}}</div>\n          <div class=\"hidden-sm-down col-md-8\">Topics:\n            <div *ngFor=\"let topic of member.topics\"\n                class=\"badge badge-pill badge-secondary m-1\">\n              {{topic.name}}\n            </div>\n          </div>\n        </div>\n      </div>\n    </div>\n  ",
        styles: [
            ':host {flex: 1;}',
            '.badge-pill {background-color: grey;}',
            'img {max-height: 180px; max-width: 180px;}'
        ]
    }),
    __metadata("design:paramtypes", [typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser__["c" /* DomSanitizer */]) === "function" && _b || Object])
], MemberComponent);

var _a, _b;
//# sourceMappingURL=member.component.js.map

/***/ }),

/***/ 164:
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

/***/ }),

/***/ 220:
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(30)(false);
// imports


// module
exports.push([module.i, ".btn {\n  cursor: pointer; }\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ 223:
/***/ (function(module, exports) {

module.exports = "<div class=\"text-center container-fluid\">\n  <h1 class=\"m-5\">Who's Who in MKE Tech</h1>\n  <h4 class=\"hidden-sm-down\">powered by <a href=\"https://www.meetup.com/meetup_api/\" target=\"_blank\">Meetup.com API</a></h4>\n\n  <hr />\n  <a href=\"{{meetupService.oathUrl}}/authorize?client_id={{meetupService.oauthKey}}&response_type=token&redirect_uri={{meetupService.redirectURI}}\">\n    <button class=\"btn btn-lg btn-danger\" *ngIf=\"type === 'oauth' && !meetupService.accessToken\">\n      get Meetup.com auth code\n    </button>\n  </a>\n\n  <div class=\"form-group\" *ngIf=\"meetupService.accessToken\">\n    <ngb-alert *ngIf=\"type === 'express'\" type=\"danger\"\n        (close)=\"type = 'oauth'\">\n      Express.js server implementation has not been completed.\n    </ngb-alert>\n    <input #query class=\"form-control w-50 mx-auto\"\n      *ngIf=\"type === 'oauth'\"\n      (keyup.enter)=\"queryValue=query.value\"\n      (blur)=\"queryValue=query.value\"\n      (click)=\"query.select()\" />\n    <br />\n    <div [(ngModel)]=\"type\" ngbRadioGroup name=\"radioBasic\">\n      <label class=\"btn btn-primary\">\n        <input type=\"radio\" value=\"oauth\" />Meetup.com (Oauth2)\n      </label>\n      <label class=\"btn btn-primary\">\n        <input type=\"radio\" value=\"express\" />express.js\n      </label>\n    </div>\n  </div>\n\n  <nm-ww-member-list class=\"mx-3\" [query]=\"queryValue\"></nm-ww-member-list>\n\n  <a href=\"https://github.com/L1NT/nm-whos-who\" target=\"_blank\">\n    <svg height=\"32\" version=\"1.1\" viewBox=\"0 0 16 16\" width=\"32\">\n      <path fill-rule=\"evenodd\" d=\"M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0 0 16 8c0-4.42-3.58-8-8-8z\"></path>\n    </svg>\n  </a>\n</div>\n"

/***/ }),

/***/ 265:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(149);


/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(81);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of__ = __webpack_require__(227);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_observable_of__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__ = __webpack_require__(228);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__ = __webpack_require__(230);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_switchMap__ = __webpack_require__(231);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_operator_switchMap__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return MeetupService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};







var MeetupService = (function () {
    function MeetupService(http) {
        var _this = this;
        this.http = http;
        this.url = 'https://api.meetup.com/';
        this.oathUrl = 'https://secure.meetup.com/oauth2/';
        this.oauthKey = '505i52k35p57g85p8gvl905afa';
        this.redirectURI = 'https://192.168.0.184/nm';
        this.oauthSecret = 'fb32q17eq2b2v0tc32lnbmhsgk';
        var urlHash = document.location.hash.split('&');
        urlHash.forEach(function (property) {
            // FIXME: there's no guarantee access_token will be the first property
            if (property.indexOf('#access_token=') === 0) {
                _this.accessToken = property.substring(14);
            }
        });
    }
    MeetupService.prototype.sortMembers = function (members) {
        members.sort(function (a, b) {
            if (a.name < b.name)
                return -1;
            if (a.name > b.name)
                return 1;
            return 0;
        });
    };
    MeetupService.prototype.getMembers = function (query) {
        var _this = this;
        return this.getGroupIds().switchMap(function (groups) {
            if (!groups)
                return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of(undefined);
            var searchParams = _this.buildSearchParams();
            searchParams.set('group_id', groups.join(","));
            // this will return the first 800 (of 1200+) members who joined MilwaukeeJS
            searchParams.set('order', 'joined');
            return _this.http.get(_this.url + '2/members?' + searchParams.toString()).map(function (response) {
                var members = response.json().results;
                var needle = new RegExp(query, 'i');
                var filtered = members.filter(function (member) {
                    return needle.test(member.name);
                });
                _this.sortMembers(filtered);
                return filtered;
            }).catch(function (error) {
                console.log(error);
                _this.accessToken = null;
                return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of(undefined);
            });
        });
    };
    MeetupService.prototype.buildSearchParams = function () {
        var searchParams = new URLSearchParams();
        searchParams.set('photo-host', 'public');
        searchParams.set('access_token', this.accessToken);
        return searchParams;
    };
    MeetupService.prototype.getGroupIds = function () {
        var _this = this;
        // this shouldn't change frequently enough that it needs to be checked more
        // than once per page load
        if (this.mkeGroupIds) {
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of(this.mkeGroupIds);
        }
        var searchParams = this.buildSearchParams();
        searchParams.set('location', 'milwaukee');
        searchParams.set('category', '34');
        // appears to be a bug in the `http.es5.js:mergeOptions` function that improperly
        // merges RequestOptions objects; for now, append query params manually
        return this.http.get(this.url + 'find/groups?' + searchParams.toString())
            .map(function (categories) {
            _this.mkeGroupIds = [];
            // filter the groups to just those with 'js' or 'javascript' in the name
            // because /members endpoint limits results to 800 and that was only returning
            // most of the "A"s - there are 4 js/javascript groups & a plethora of members
            var jsRegExp = new RegExp('milwaukeejs', 'i');
            categories.json().forEach(function (category) {
                if (jsRegExp.test(category.name)) {
                    _this.mkeGroupIds.push(category.id.toString());
                }
            });
            return _this.mkeGroupIds;
        }).catch(function (error) {
            _this.accessToken = null;
            return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].of(undefined);
        });
    };
    MeetupService.prototype.getRefreshedToken = function () {
        var _this = this;
        var params = new URLSearchParams();
        params.set('client_id', this.oauthKey);
        params.set('client_secret', this.oauthSecret);
        params.set('grant_type', 'refresh_token');
        params.set('refresh_token', this.refreshToken);
        return this.http.post(this.oathUrl + 'access', { body: params }).map(function (response) {
            var resp = response.json();
            _this.accessToken = resp.access_token;
            _this.refreshToken = resp.refresh_token;
            return undefined;
        });
    };
    return MeetupService;
}());
MeetupService = __decorate([
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["c" /* Injectable */])(),
    __metadata("design:paramtypes", [typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */] !== "undefined" && __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Http */]) === "function" && _a || Object])
], MeetupService);

var _a;
//# sourceMappingURL=meetup.service.js.map

/***/ })

},[265]);
//# sourceMappingURL=main.bundle.js.map