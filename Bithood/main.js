(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error("Cannot find module '" + req + "'");
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app-routing.module.ts":
/*!***************************************!*\
  !*** ./src/app/app-routing.module.ts ***!
  \***************************************/
/*! exports provided: AppRoutingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function() { return AppRoutingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _modules_header_header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modules/header/header/header.component */ "./src/app/modules/header/header/header.component.ts");
/* harmony import */ var _modules_home_home_home_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modules/home/home/home.component */ "./src/app/modules/home/home/home.component.ts");
/* harmony import */ var _modules_login_login_login_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modules/login/login/login.component */ "./src/app/modules/login/login/login.component.ts");
/* harmony import */ var _security_auth_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./security/auth.guard */ "./src/app/security/auth.guard.ts");
/* harmony import */ var _modules_signup_signup_signup_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./modules/signup/signup/signup.component */ "./src/app/modules/signup/signup/signup.component.ts");
/* harmony import */ var _modules_exchange_exchange_exchange_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./modules/exchange/exchange/exchange.component */ "./src/app/modules/exchange/exchange/exchange.component.ts");
/* harmony import */ var _modules_contact_contact_contact_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./modules/contact/contact/contact.component */ "./src/app/modules/contact/contact/contact.component.ts");
/* harmony import */ var _modules_wallet_wallet_wallet_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/wallet/wallet/wallet.component */ "./src/app/modules/wallet/wallet/wallet.component.ts");
/* harmony import */ var _modules_suggestion_suggestion_suggestion_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modules/suggestion/suggestion/suggestion.component */ "./src/app/modules/suggestion/suggestion/suggestion.component.ts");
/* harmony import */ var _modules_pagenotfound_pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modules/pagenotfound/pagenotfound/pagenotfound.component */ "./src/app/modules/pagenotfound/pagenotfound/pagenotfound.component.ts");
/* harmony import */ var _modules_emailverify_emailverify_emailverify_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./modules/emailverify/emailverify/emailverify.component */ "./src/app/modules/emailverify/emailverify/emailverify.component.ts");
/* harmony import */ var _modules_resendemail_resendemail_resendemail_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./modules/resendemail/resendemail/resendemail.component */ "./src/app/modules/resendemail/resendemail/resendemail.component.ts");
/* harmony import */ var _modules_setting_setting_setting_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./modules/setting/setting/setting.component */ "./src/app/modules/setting/setting/setting.component.ts");
/* harmony import */ var _modules_message_message_message_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./modules/message/message/message.component */ "./src/app/modules/message/message/message.component.ts");

















var routes = [
    {
        path: '', component: _modules_header_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"],
        children: [
            { path: '', component: _modules_home_home_home_component__WEBPACK_IMPORTED_MODULE_4__["HomeComponent"] },
            { path: 'login', component: _modules_login_login_login_component__WEBPACK_IMPORTED_MODULE_5__["LoginComponent"], canActivate: [_security_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]] },
            { path: 'signup', component: _modules_signup_signup_signup_component__WEBPACK_IMPORTED_MODULE_7__["SignupComponent"], canActivate: [_security_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]] },
            { path: 'exchange', component: _modules_exchange_exchange_exchange_component__WEBPACK_IMPORTED_MODULE_8__["ExchangeComponent"], canActivate: [_security_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]] },
            { path: 'about', component: _modules_contact_contact_contact_component__WEBPACK_IMPORTED_MODULE_9__["ContactComponent"], canActivate: [_security_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]] },
            { path: 'wallet_deposit', component: _modules_wallet_wallet_wallet_component__WEBPACK_IMPORTED_MODULE_10__["WalletComponent"], canActivate: [_security_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]] },
            { path: 'wallet_withdraw', component: _modules_wallet_wallet_wallet_component__WEBPACK_IMPORTED_MODULE_10__["WalletComponent"], canActivate: [_security_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]] },
            { path: 'suggestion', component: _modules_suggestion_suggestion_suggestion_component__WEBPACK_IMPORTED_MODULE_11__["SuggestionComponent"], canActivate: [_security_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]] },
            { path: 'setting', component: _modules_setting_setting_setting_component__WEBPACK_IMPORTED_MODULE_15__["SettingComponent"], canActivate: [_security_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]] },
            { path: 'message', component: _modules_message_message_message_component__WEBPACK_IMPORTED_MODULE_16__["MessageComponent"], canActivate: [_security_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]] },
            { path: 'emailVerify', component: _modules_emailverify_emailverify_emailverify_component__WEBPACK_IMPORTED_MODULE_13__["EmailverifyComponent"] },
            { path: 'resendEmail', component: _modules_resendemail_resendemail_resendemail_component__WEBPACK_IMPORTED_MODULE_14__["ResendemailComponent"] },
            { path: '**', component: _modules_pagenotfound_pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_12__["PagenotfoundComponent"] }
        ]
    }
];
var AppRoutingModule = /** @class */ (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
            exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2FwcC5jb21wb25lbnQuY3NzIn0= */"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ngx-spinner bdColor=\"rgba(51, 51, 51, 0.8)\" size=\"large\" color=\"#fff\" type=\"line-scale\"></ngx-spinner>\r\n<router-outlet></router-outlet>"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _services_server_repo_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./services/server-repo.service */ "./src/app/services/server-repo.service.ts");




var AppComponent = /** @class */ (function () {
    function AppComponent(toastr, server) {
        this.toastr = toastr;
        this.server = server;
        this.title = 'BlockSwap';
    }
    AppComponent.prototype.ngOnInit = function () {
        this.server.initSocket();
    };
    /** Function for success toast */
    AppComponent.prototype.showSuccessAlert = function (msg) {
        this.toastr.success(msg, 'BlockSwap');
    };
    /** Function for error toast */
    AppComponent.prototype.showErrorAlert = function (msg) {
        this.toastr.error(msg, 'BlockSwap');
    };
    /** Function for info toast */
    AppComponent.prototype.showInfoAlert = function (msg) {
        this.toastr.info(msg, 'BlockSwap');
    };
    /** Function for warn toast */
    AppComponent.prototype.showWarnAlert = function (msg) {
        this.toastr.warning(msg, 'BlockSwap');
    };
    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [ngx_toastr__WEBPACK_IMPORTED_MODULE_2__["ToastrService"], _services_server_repo_service__WEBPACK_IMPORTED_MODULE_3__["ServerRepoService"]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var _app_routing_module__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./app-routing.module */ "./src/app/app-routing.module.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _modules_home_home_module__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./modules/home/home.module */ "./src/app/modules/home/home.module.ts");
/* harmony import */ var _modules_header_header_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./modules/header/header.module */ "./src/app/modules/header/header.module.ts");
/* harmony import */ var _modules_login_login_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./modules/login/login.module */ "./src/app/modules/login/login.module.ts");
/* harmony import */ var _modules_signup_signup_module__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./modules/signup/signup.module */ "./src/app/modules/signup/signup.module.ts");
/* harmony import */ var _modules_exchange_exchange_module__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./modules/exchange/exchange.module */ "./src/app/modules/exchange/exchange.module.ts");
/* harmony import */ var _services_server_repo_service__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./services/server-repo.service */ "./src/app/services/server-repo.service.ts");
/* harmony import */ var _modules_contact_contact_module__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./modules/contact/contact.module */ "./src/app/modules/contact/contact.module.ts");
/* harmony import */ var _modules_message_message_module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./modules/message/message.module */ "./src/app/modules/message/message.module.ts");
/* harmony import */ var _modules_suggestion_suggestion_module__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./modules/suggestion/suggestion.module */ "./src/app/modules/suggestion/suggestion.module.ts");
/* harmony import */ var _modules_wallet_wallet_module__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./modules/wallet/wallet.module */ "./src/app/modules/wallet/wallet.module.ts");
/* harmony import */ var _modules_overlay_overlay_module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./modules/overlay/overlay.module */ "./src/app/modules/overlay/overlay.module.ts");
/* harmony import */ var _modules_pagenotfound_pagenotfound_module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./modules/pagenotfound/pagenotfound.module */ "./src/app/modules/pagenotfound/pagenotfound.module.ts");
/* harmony import */ var _modules_emailverify_emailverify_module__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./modules/emailverify/emailverify.module */ "./src/app/modules/emailverify/emailverify.module.ts");
/* harmony import */ var _modules_resendemail_resendemail_module__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./modules/resendemail/resendemail.module */ "./src/app/modules/resendemail/resendemail.module.ts");
/* harmony import */ var _modules_setting_setting_module__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./modules/setting/setting.module */ "./src/app/modules/setting/setting.module.ts");

























var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                _app_routing_module__WEBPACK_IMPORTED_MODULE_8__["AppRoutingModule"],
                ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerModule"],
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_4__["BrowserAnimationsModule"],
                ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrModule"].forRoot({
                    closeButton: true,
                    timeOut: 3000,
                    progressBar: true,
                    positionClass: 'toast-bottom-right'
                }),
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"],
                _modules_header_header_module__WEBPACK_IMPORTED_MODULE_11__["HeaderModule"],
                _modules_home_home_module__WEBPACK_IMPORTED_MODULE_10__["HomeModule"],
                _modules_login_login_module__WEBPACK_IMPORTED_MODULE_12__["LoginModule"],
                _modules_signup_signup_module__WEBPACK_IMPORTED_MODULE_13__["SignupModule"],
                _modules_exchange_exchange_module__WEBPACK_IMPORTED_MODULE_14__["ExchangeModule"],
                _modules_contact_contact_module__WEBPACK_IMPORTED_MODULE_16__["ContactModule"],
                _modules_message_message_module__WEBPACK_IMPORTED_MODULE_17__["MessageModule"],
                _modules_suggestion_suggestion_module__WEBPACK_IMPORTED_MODULE_18__["SuggestionModule"],
                _modules_wallet_wallet_module__WEBPACK_IMPORTED_MODULE_19__["WalletModule"],
                _modules_overlay_overlay_module__WEBPACK_IMPORTED_MODULE_20__["OverlayModule"],
                _modules_pagenotfound_pagenotfound_module__WEBPACK_IMPORTED_MODULE_21__["PagenotfoundModule"],
                _modules_emailverify_emailverify_module__WEBPACK_IMPORTED_MODULE_22__["EmailverifyModule"],
                _modules_resendemail_resendemail_module__WEBPACK_IMPORTED_MODULE_23__["ResendemailModule"],
                _modules_setting_setting_module__WEBPACK_IMPORTED_MODULE_24__["SettingModule"]
            ],
            providers: [
                _services_server_repo_service__WEBPACK_IMPORTED_MODULE_15__["ServerRepoService"],
                ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__["CookieService"]
            ],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_9__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/modules/contact/contact.module.ts":
/*!***************************************************!*\
  !*** ./src/app/modules/contact/contact.module.ts ***!
  \***************************************************/
/*! exports provided: ContactModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactModule", function() { return ContactModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _contact_contact_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./contact/contact.component */ "./src/app/modules/contact/contact/contact.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_modules_overlay_overlay_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/modules/overlay/overlay.module */ "./src/app/modules/overlay/overlay.module.ts");






var ContactModule = /** @class */ (function () {
    function ContactModule() {
    }
    ContactModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_contact_contact_component__WEBPACK_IMPORTED_MODULE_3__["ContactComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                src_app_modules_overlay_overlay_module__WEBPACK_IMPORTED_MODULE_5__["OverlayModule"]
            ]
        })
    ], ContactModule);
    return ContactModule;
}());



/***/ }),

/***/ "./src/app/modules/contact/contact/contact.component.css":
/*!***************************************************************!*\
  !*** ./src/app/modules/contact/contact/contact.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvY29udGFjdC9jb250YWN0L2NvbnRhY3QuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/contact/contact/contact.component.html":
/*!****************************************************************!*\
  !*** ./src/app/modules/contact/contact/contact.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"mainContent\">\r\n    <app-overlay></app-overlay>\r\n    <section class=\"commonSectionStyle pt0\">\r\n        <div class=\"container-fluid\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-4\">\r\n                    <div class=\"globalBox center-box max-WT-600\">\r\n                        <div class=\"globalBoxHead\"><span class=\"title\">Ecosystem</span></div>\r\n                        <div class=\"globolBoxBody contactBoxHeight\">\r\n                            <div class=\"ecoChartBox\">\r\n                                <img src=\"assets/images/ecoChartImg.png\" />\r\n                            </div>\r\n\r\n                            <div class=\"chartDetail\">\r\n                                <p>Do you want to be part of ourecosystem?<br>Email us something about your token.</p>\r\n                                <button class=\"btn btnBlue\">List your coin</button>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <!-- Col left end -->\r\n                <div class=\"col-md-8\">\r\n                    <div class=\"globalTabBox\">\r\n                        <!-- Nav tabs -->\r\n                        <ul class=\"nav nav-tabs globalTab\">\r\n                            <li class=\"nav-item\">\r\n                                <a class=\"nav-link active\" data-toggle=\"tab\" href=\"#tab1\">About</a>\r\n                            </li>\r\n                            <li class=\"nav-item\">\r\n                                <a class=\"nav-link\" data-toggle=\"tab\" href=\"#tab2\">Contact</a>\r\n                            </li>\r\n\r\n                        </ul>\r\n                        <!-- Tab panes -->\r\n                        <div class=\"tab-content contactBoxHeight\">\r\n                            <div class=\"tab-pane active\" id=\"tab1\">\r\n                                <div class=\"row\">\r\n                                    <div class=\"col-lg-5\">\r\n                                        <div class=\"aboutInfoBox d-flex align-items-center\">\r\n                                            <div class=\"w-100\">\r\n                                                <h5>About Us</h5>\r\n                                                <p class=\"mb15\"><strong>BlockSwap@</strong> is a digital currency platform where seller and buyers can transact with new digital currencies such as bitcoin, ethereum and many more. Our headquarters are located in the buautifull\r\n                                                    and peaceful country of world wide web\r\n                                                </p>\r\n                                                <p class=\"mb0\">What is Bitcoin? BitCoin is the most widespread alternative currency in the world with a total market capitalization of over $50 billion.</p>\r\n                                            </div>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"col-lg-7\">\r\n                                        <ul class=\"workPolicyList\">\r\n                                            <li>\r\n                                                <div class=\"policyLeft\">\r\n                                                    <label>Work with Us</label>\r\n                                                    <p>Do you want to be part of our team? Check the open positions and apply.</p>\r\n                                                </div>\r\n                                                <div class=\"policyRight\">\r\n                                                    <button class=\"btn btnBlue btnSm minWidth80\">Apply</button>\r\n                                                </div>\r\n                                            </li>\r\n                                            <li>\r\n                                                <div class=\"policyLeft\">\r\n                                                    <label>Privacy Policy</label>\r\n                                                    <p>Check more about our privacy policy.</p>\r\n                                                </div>\r\n                                                <div class=\"policyRight\">\r\n                                                    <button class=\"btn btnDarkBlue btnSm minWidth80\">Check</button>\r\n                                                </div>\r\n                                            </li>\r\n                                            <li>\r\n                                                <div class=\"policyLeft\">\r\n                                                    <label>Cookie Policy</label>\r\n                                                    <p>Check more about our cookie policy.</p>\r\n                                                </div>\r\n                                                <div class=\"policyRight\">\r\n                                                    <button class=\"btn btnDarkBlue btnSm minWidth80\">Apply</button>\r\n                                                </div>\r\n                                            </li>\r\n                                            <li>\r\n                                                <div class=\"policyLeft\">\r\n                                                    <label>Open Ticket</label>\r\n                                                    <p>Solve any problems by contacting our support team.</p>\r\n                                                </div>\r\n                                                <div class=\"policyRight\">\r\n                                                    <button class=\"btn btnDarkBlue btnSm minWidth80\">Check</button>\r\n                                                </div>\r\n                                            </li>\r\n                                            <li>\r\n                                                <div class=\"policyLeft\">\r\n                                                    <label>Fees Information</label>\r\n                                                    <p>Check more about our fees policy.</p>\r\n                                                </div>\r\n                                                <div class=\"policyRight\">\r\n                                                    <button class=\"btn btnDarkBlue btnSm minWidth80\">Check</button>\r\n                                                </div>\r\n                                            </li>\r\n                                            <li>\r\n                                                <div class=\"policyLeft\">\r\n                                                    <label>Newsletter and Communications</label>\r\n                                                    <p>Activate to receive updates and our monthly newsletter.</p>\r\n                                                </div>\r\n                                                <div class=\"policyRight\">\r\n                                                    <button class=\"btn btnBlue btnSm minWidth80\">Yes</button>\r\n                                                </div>\r\n                                            </li>\r\n                                        </ul>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <!-- Tab 1 End -->\r\n                            <div class=\"tab-pane fade\" id=\"tab2\">\r\n                                <div class=\"contactInfoBox\">\r\n                                    <div class=\"w-100\">\r\n                                        <h3 class=\"subHead text-uppercase\">Exchange Info</h3>\r\n                                        <p class=\"mb10\"><strong>Email:</strong>info@blockswap.com</p>\r\n                                        <p class=\"mb10\"><strong>Phone:</strong>+00 000 000000</p>\r\n                                        <p class=\"mb10\"><strong>Adress:</strong>Avenue du Exchange 21 - Geneve, SW</p>\r\n                                        <div class=\"inlineLine mt60 mb30\"></div>\r\n                                        <p class=\"mb0\">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled\r\n                                            it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset\r\n                                            sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <!-- Tab 2 End -->\r\n\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </section>\r\n</main>"

/***/ }),

/***/ "./src/app/modules/contact/contact/contact.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/modules/contact/contact/contact.component.ts ***!
  \**************************************************************/
/*! exports provided: ContactComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ContactComponent", function() { return ContactComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ContactComponent = /** @class */ (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-contact',
            template: __webpack_require__(/*! ./contact.component.html */ "./src/app/modules/contact/contact/contact.component.html"),
            styles: [__webpack_require__(/*! ./contact.component.css */ "./src/app/modules/contact/contact/contact.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "./src/app/modules/emailverify/emailverify.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/modules/emailverify/emailverify.module.ts ***!
  \***********************************************************/
/*! exports provided: EmailverifyModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailverifyModule", function() { return EmailverifyModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _emailverify_emailverify_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./emailverify/emailverify.component */ "./src/app/modules/emailverify/emailverify/emailverify.component.ts");




var EmailverifyModule = /** @class */ (function () {
    function EmailverifyModule() {
    }
    EmailverifyModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_emailverify_emailverify_component__WEBPACK_IMPORTED_MODULE_3__["EmailverifyComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
            ]
        })
    ], EmailverifyModule);
    return EmailverifyModule;
}());



/***/ }),

/***/ "./src/app/modules/emailverify/emailverify/emailverify.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/modules/emailverify/emailverify/emailverify.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZW1haWx2ZXJpZnkvZW1haWx2ZXJpZnkvZW1haWx2ZXJpZnkuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/emailverify/emailverify/emailverify.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/modules/emailverify/emailverify/emailverify.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"mainContent\">\n    <section class=\"commonSectionStyle\">\n        <div class=\"container-fluid\">\n            <div class=\"globalBox center-box max-WT-600\">\n                <div class=\"globolBoxBody\" *ngIf=\"verifyStatus\">\n                    <div class=\"sectionHead\">\n                        <div class=\"alert alert-success text-center\">\n                            <strong>Your email has been verified. Thank you for verifying your email!!!</strong>\n                        </div>\n                    </div>\n                    <div class=\"msgIconBox pageNotFound\">\n                        <span class=\"msgIcon email_verify\">\n                            <img src=\"assets/images/activate_email.png\" alt=\"Email Image\" />\n                        </span>\n                    </div>\n                </div>\n                <div class=\"globolBoxBody\" *ngIf=\"!verifyStatus\">\n                    <div class=\"sectionHead\">\n                        <div class=\"alert alert-danger text-center\">\n                            <strong>{{errMsg}}</strong>\n                        </div>\n                    </div>\n                    <div class=\"msgIconBox pageNotFound\">\n                        <span class=\"msgIcon\"><i class=\"fa fa-exclamation mt15\" aria-hidden=\"true\"></i></span>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </section>\n</main>"

/***/ }),

/***/ "./src/app/modules/emailverify/emailverify/emailverify.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/modules/emailverify/emailverify/emailverify.component.ts ***!
  \**************************************************************************/
/*! exports provided: EmailverifyComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EmailverifyComponent", function() { return EmailverifyComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var EmailverifyComponent = /** @class */ (function () {
    function EmailverifyComponent() {
        this.verifyStatus = false;
        this.errMsg = "Fetching...";
    }
    EmailverifyComponent.prototype.ngOnInit = function () {
        this.verifyStatus = true;
        this.errMsg = "Your email had already verified.";
    };
    EmailverifyComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-emailverify',
            template: __webpack_require__(/*! ./emailverify.component.html */ "./src/app/modules/emailverify/emailverify/emailverify.component.html"),
            styles: [__webpack_require__(/*! ./emailverify.component.css */ "./src/app/modules/emailverify/emailverify/emailverify.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], EmailverifyComponent);
    return EmailverifyComponent;
}());



/***/ }),

/***/ "./src/app/modules/exchange/exchange.module.ts":
/*!*****************************************************!*\
  !*** ./src/app/modules/exchange/exchange.module.ts ***!
  \*****************************************************/
/*! exports provided: ExchangeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExchangeModule", function() { return ExchangeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _exchange_exchange_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./exchange/exchange.component */ "./src/app/modules/exchange/exchange/exchange.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_modules_overlay_overlay_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/modules/overlay/overlay.module */ "./src/app/modules/overlay/overlay.module.ts");






var ExchangeModule = /** @class */ (function () {
    function ExchangeModule() {
    }
    ExchangeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _exchange_exchange_component__WEBPACK_IMPORTED_MODULE_3__["ExchangeComponent"]
            ],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                src_app_modules_overlay_overlay_module__WEBPACK_IMPORTED_MODULE_5__["OverlayModule"]
            ]
        })
    ], ExchangeModule);
    return ExchangeModule;
}());



/***/ }),

/***/ "./src/app/modules/exchange/exchange/exchange.component.css":
/*!******************************************************************!*\
  !*** ./src/app/modules/exchange/exchange/exchange.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvZXhjaGFuZ2UvZXhjaGFuZ2UvZXhjaGFuZ2UuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/exchange/exchange/exchange.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/modules/exchange/exchange/exchange.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"mainContent exchangeBox\">\r\n    <app-overlay></app-overlay>\r\n    <section class=\"exchangeSection pt0\">\r\n        <div class=\"container-fluid\">\r\n            <div class=\"exchangeBlock exchangeTopBlock\">\r\n                <div class=\"exchangeLeftBox\">\r\n                    <div class=\"globalTabBox\">\r\n                        <ul class=\"nav nav-tabs globalTab\">\r\n                            <li class=\"nav-item\">\r\n                                <a class=\"nav-link active show\" data-toggle=\"tab\" href=\"#marketTab\">Markets</a>\r\n                            </li>\r\n                            <li class=\"nav-item\">\r\n                                <a class=\"nav-link\" data-toggle=\"tab\" href=\"#transactionTab\">Transactions</a>\r\n                            </li>\r\n                        </ul>\r\n                        <div class=\"tab-content pr0 pl0 pt15 pb15\">\r\n                            <div class=\"tab-pane fade active show\" id=\"marketTab\">\r\n                                <!-- scrollTabBox Start -->\r\n                                <div class=\"scrollTabBox\">\r\n                                    <i class=\"fas fa-caret-left leftScroll\"></i>\r\n                                    <ul class=\"nav nav-tabs scrollTabs\">\r\n                                        <li class=\"nav-item\" *ngFor=\"let data of coinListArr\">\r\n                                            <a class=\"nav-link pointer_cls\" [ngClass]=\"{'baseCoinActive':currCoinSelectedObj.coin == data.coinShortName}\" (click)=\"selectBaseCoin(data)\">\r\n                                                <span class=\"w-100 d-block\"><img [src]=\"data.imgUrl\" alt=\"Coin\"/></span>\r\n                                                <span class=\"coinActive\">{{data.coinShortName}}</span>\r\n                                            </a>\r\n                                        </li>\r\n                                    </ul>\r\n                                    <i class=\"fas fa-caret-right rightScroll\"></i>\r\n                                </div>\r\n                                <!-- scrollTabBox End -->\r\n                                <!-- innerTabContent Start -->\r\n                                <div class=\"innerTabContent tab-content p0 border0\">\r\n                                    <div class=\"tab-pane fade active show\" id=\"scrollTab1\">\r\n                                        <div class=\"coinSearchBox formBox p15\">\r\n                                            <div class=\"serachBox max-WT-250 center-box\">\r\n                                                <input type=\"text\" class=\"form-control radius10\" placeholder=\"\">\r\n                                                <i class=\"fas fa-search\"></i>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"table-responsive marketTable\">\r\n                                            <table class=\"table tableAlignMiddle tableCenter globalTable1 mb0\">\r\n                                                <thead>\r\n                                                    <tr>\r\n                                                        <th>COIN</th>\r\n                                                        <th>PRICE</th>\r\n                                                        <th>VOLUME</th>\r\n                                                        <th>AVERAGE</th>\r\n                                                    </tr>\r\n                                                </thead>\r\n                                                <tbody>\r\n                                                    <tr *ngFor=\"let data of coinPairListArr\" (click)=\"selectExecuteCoin(data)\">\r\n                                                        <td>\r\n                                                            <span class=\"btn btnBlue btnSm\" [ngClass]=\"{'btnDarkBlue':data.selected}\">{{data.coin}}/{{currCoinSelectedObj.coin}}</span>\r\n                                                        </td>\r\n                                                        <td><span class=\"btn btnLight btnSm\">{{data.last_price}}</span></td>\r\n                                                        <td><span class=\"btn btnLight btnSm\">{{data.volume}}</span></td>\r\n                                                        <td><span class=\"btn btnLight btnSm\">{{data.average}}</span></td>\r\n                                                    </tr>\r\n                                                </tbody>\r\n                                            </table>\r\n                                        </div>\r\n                                        <div class=\"paginationBtn mb0 mt15\">\r\n                                            <span class=\"fas fa-plus\"></span>\r\n                                            <span class=\"fas fa-minus\"></span>\r\n                                        </div>\r\n                                    </div>\r\n                                    <!-- ScrollTab Inner Tab 1 End -->\r\n                                </div>\r\n                                <!-- innerTabContent End -->\r\n                            </div>\r\n                            <!-- marketTab End -->\r\n                            <div class=\"tab-pane fade\" id=\"transactionTab\">\r\n                                <div class=\"table-responsive marketTable tableScroller\">\r\n                                    <table class=\"table tableAlignMiddle tableCenter globalTable1  mb0\">\r\n                                        <thead>\r\n                                            <tr>\r\n                                                <th>PRICE({{currCoinSelectedObj.coin}})</th>\r\n                                                <th>AMOUNT({{currCoinPairObj.coin}})</th>\r\n                                                <th>TOTAL</th>\r\n                                                <th>TIME</th>\r\n                                            </tr>\r\n                                        </thead>\r\n                                        <tbody class=\"tradeHisHeight\">\r\n                                            <tr *ngFor=\"let data of tradeHisArr;\">\r\n                                                <td><span class=\"btn btnLight btnSm\">{{data.price}}</span></td>\r\n                                                <td><span class=\"btn btnLight btnSm\">{{data.amount}}</span></td>\r\n                                                <td><span class=\"btn btnLight btnSm\">{{data.total}}</span></td>\r\n                                                <td><span class=\"btn btnLight btnSm\">{{data.time | date: 'hh:mm a'}}</span></td>\r\n                                            </tr>\r\n                                            <tr *ngIf=\"tradeHisArr.length==0\">\r\n                                                <td colspan=\"4\" vertical-align=\"middle\">\r\n                                                    <div class=\"no-record\">\r\n                                                        <div class=\"no-recordin\">\r\n                                                            <span>No Record Found</span>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </td>\r\n                                            </tr>\r\n                                        </tbody>\r\n                                    </table>\r\n                                </div>\r\n                            </div>\r\n                            <!-- transactionTab End -->\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <!-- Exchange Left Box End -->\r\n                <div class=\"exchangeRightBox\">\r\n                    <div class=\"globalTabBox\">\r\n                        <ul class=\"nav nav-tabs globalTab\">\r\n                            <li class=\"nav-item\">\r\n                                <a class=\"nav-link active\" data-toggle=\"tab\" href=\"#candelStickTab\">Candlestick</a>\r\n                            </li>\r\n                            <li class=\"nav-item\">\r\n                                <a class=\"nav-link\" data-toggle=\"tab\" href=\"#linesTab\">Lines</a>\r\n                            </li>\r\n                        </ul>\r\n                        <div class=\"tab-content p0\">\r\n                            <div class=\"tab-pane fade active show\" id=\"candelStickTab\">\r\n                                <div class=\"chartBox\">\r\n                                    <div class=\"tradingview-widget-container\">\r\n                                        <div id=\"tradingview_Ohl\" class=\"chart_box_innner\"></div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"tab-pane fade\" id=\"linesTab\">\r\n                                <div class=\"chartBox\">\r\n                                    <div class=\"tradingview-widget-container\">\r\n                                        <div id=\"tradingview_depth\" class=\"chart_box_innner\"></div>\r\n                                    </div>\r\n                                </div>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <!-- Exchange Right Box End -->\r\n            </div>\r\n            <!-- Exchange Top Block End -->\r\n            <div class=\"exchangeBlock exchangeBottomBlock\">\r\n                <div class=\"exchangeLeftBox\">\r\n                    <div class=\"globalBox\">\r\n                        <div class=\"globalBoxHead\"><span class=\"title\">Buy/Sell</span></div>\r\n                        <div class=\"globolBoxBody p15\">\r\n                            <form class=\"mb0\">\r\n                                <div class=\"buySellBox d-flex justify-content-between\">\r\n                                    <div class=\"coinBuyLeft buySellBoxCommon\">\r\n                                        <select class=\"countryDropdown btnDarkBlue btnSm w-100 mb15\" name=\"Buy Order Type\" [(ngModel)]=\"orderTypeObj.buyType\" (change)=\"orderTypeChangeFunc('BUY')\">\r\n                                            <option value=\"limit\">Limit</option>\r\n                                            <option value=\"market\">Market</option>\r\n                                            <option value=\"stop_limit\">Stop Limit</option>\r\n                                        </select>\r\n                                        <div *ngIf=\"orderTypeObj.buyType=='limit'\">\r\n                                            <div class=\"coinInputField coinInputFieldBorder\">\r\n                                                <input type=\"text\" class=\"whiteText\" name=\"Buy Limit Price\" placeholder=\"Price\" [(ngModel)]=\"limitBuyObj.price\" autocomplete=\"off\" (keypress)=\"restrictSpace($event); restrictChar($event)\" (keyup)=\" restrictLength('lbp'); valueChangeFunc('LBP')\" /><span>{{currCoinSelectedObj.coin}}</span>\r\n                                            </div>\r\n                                            <div class=\"coinInputField\">\r\n                                                <input type=\"text\" class=\"whiteText\" name=\"Buy Limit Quantity\" placeholder=\"Quantity\" [(ngModel)]=\"limitBuyObj.amount\" autocomplete=\"off\" (keypress)=\"restrictSpace($event); restrictChar($event)\" (keyup)=\" restrictLength('lba'); valueChangeFunc('LBA')\"\r\n                                                /><span>{{currCoinPairObj.coin}}</span>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div *ngIf=\"orderTypeObj.buyType=='market'\">\r\n                                            <div class=\"coinInputField coinInputFieldBorder\">\r\n                                                <input type=\"text\" class=\"whiteText\" name=\"Buy Market Quantity\" placeholder=\"Quantity\" [(ngModel)]=\"marketBuyObj.amount\" autocomplete=\"off\" (keypress)=\"restrictSpace($event); restrictChar($event)\" (keyup)=\" restrictLength('mba'); valueChangeFunc('MBA')\"\r\n                                                /><span>{{currCoinPairObj.coin}}</span>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div *ngIf=\"orderTypeObj.buyType=='stop_limit'\">\r\n                                            <div class=\"coinInputField coinInputFieldBorder\">\r\n                                                <input type=\"text\" class=\"whiteText\" name=\"Buy Stop Price\" placeholder=\"Stop Price\" [(ngModel)]=\"sLimitBuyObj.stop\" autocomplete=\"off\" (keypress)=\"restrictSpace($event); restrictChar($event)\" (keyup)=\" restrictLength('sbs'); valueChangeFunc('SBS')\" /><span>{{currCoinSelectedObj.coin}}</span>\r\n                                            </div>\r\n                                            <div class=\"coinInputField coinInputFieldBorder\">\r\n                                                <input type=\"text\" class=\"whiteText\" name=\"Buy Stop Limit Price\" placeholder=\"Limit Price\" [(ngModel)]=\"sLimitBuyObj.price\" autocomplete=\"off\" (keypress)=\"restrictSpace($event); restrictChar($event)\" (keyup)=\" restrictLength('sbp'); valueChangeFunc('SBP')\"\r\n                                                /><span>{{currCoinSelectedObj.coin}}</span>\r\n                                            </div>\r\n                                            <div class=\"coinInputField\">\r\n                                                <input type=\"text\" class=\"whiteText\" name=\"Buy Stop Quantity\" placeholder=\"Quantity\" [(ngModel)]=\"sLimitBuyObj.amount\" autocomplete=\"off\" (keypress)=\"restrictSpace($event); restrictChar($event)\" (keyup)=\" restrictLength('sba'); valueChangeFunc('SBA')\"\r\n                                                /><span>{{currCoinPairObj.coin}}</span>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"coinOutputField mt15 mb15\">\r\n                                            <span class=\"outLeft\">Total ({{currCoinSelectedObj.coin}})</span>\r\n                                            <span class=\"outRight\">{{buyTotal}} {{currCoinSelectedObj.coin}}</span>\r\n                                        </div>\r\n                                        <!-- <div class=\"coinOutputField\">\r\n                                            <span class=\"outLeft\">Fee</span>\r\n                                            <span class=\"outRight\">0.0000 BTC</span>\r\n                                        </div>\r\n                                        <div class=\"coinOutputField\">\r\n                                            <span class=\"outLeft\">Total (BTC)</span>\r\n                                            <span class=\"outRight\">0.00000000 BTC</span>\r\n                                        </div> -->\r\n                                        <div class=\"text-center mt15\">\r\n                                            <button class=\"btn btnGreen btnSm btnCircular minWidth80\" (click)=\"orderPlace('BUY')\" [disabled]=\"changeToNumberType(buyTotal) <= 0 || buyBtnDisable\">Buy {{currCoinPairObj.coin}}</button>\r\n                                        </div>\r\n                                    </div>\r\n                                    <!-- coinBuyLeft End-->\r\n                                    <div class=\"coinBuyRight buySellBoxCommon\">\r\n                                        <select class=\"countryDropdown btnDarkBlue btnSm w-100 mb15\" name=\"Sell Order Type\" [(ngModel)]=\"orderTypeObj.sellType\" (change)=\"orderTypeChangeFunc('SELL')\">\r\n                                            <option value=\"limit\">Limit</option>\r\n                                            <option value=\"market\">Market</option>\r\n                                            <option value=\"stop_limit\">Stop Limit</option>\r\n                                        </select>\r\n                                        <div *ngIf=\"orderTypeObj.sellType=='limit'\">\r\n                                            <div class=\"coinInputField coinInputFieldBorder\">\r\n                                                <input type=\"text\" class=\"whiteText\" name=\"Sell Limit Price\" placeholder=\"Price\" [(ngModel)]=\"limitSellObj.price\" autocomplete=\"off\" (keypress)=\"restrictSpace($event); restrictChar($event)\" (keyup)=\" restrictLength('lsp'); valueChangeFunc('LSP')\" /><span>{{currCoinSelectedObj.coin}}</span>\r\n                                            </div>\r\n                                            <div class=\"coinInputField\">\r\n                                                <input type=\"text\" class=\"whiteText\" name=\"Sell Limit Quantity\" placeholder=\"Quantity\" [(ngModel)]=\"limitSellObj.amount\" autocomplete=\"off\" (keypress)=\"restrictSpace($event); restrictChar($event)\" (keyup)=\" restrictLength('lsa'); valueChangeFunc('LSA')\"\r\n                                                /><span>{{currCoinPairObj.coin}}</span>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div *ngIf=\"orderTypeObj.sellType=='market'\">\r\n                                            <div class=\"coinInputField coinInputFieldBorder\">\r\n                                                <input type=\"text\" class=\"whiteText\" name=\"Sell Market Quantity\" placeholder=\"Quantity\" [(ngModel)]=\"marketSellObj.amount\" autocomplete=\"off\" (keypress)=\"restrictSpace($event); restrictChar($event)\" (keyup)=\" restrictLength('msa'); valueChangeFunc('MSA')\"\r\n                                                /><span>{{currCoinPairObj.coin}}</span>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div *ngIf=\"orderTypeObj.sellType=='stop_limit'\">\r\n                                            <div class=\"coinInputField coinInputFieldBorder\">\r\n                                                <input type=\"text\" class=\"whiteText\" name=\"Sell Stop Price\" placeholder=\"Stop Price\" [(ngModel)]=\"sLimitSellObj.stop\" autocomplete=\"off\" (keypress)=\"restrictSpace($event); restrictChar($event)\" (keyup)=\" restrictLength('sss'); valueChangeFunc('SSS')\"\r\n                                                /><span>{{currCoinSelectedObj.coin}}</span>\r\n                                            </div>\r\n                                            <div class=\"coinInputField coinInputFieldBorder\">\r\n                                                <input type=\"text\" class=\"whiteText\" name=\"Sell Stop Limit Price\" placeholder=\"Limit Price\" [(ngModel)]=\"sLimitSellObj.price\" autocomplete=\"off\" (keypress)=\"restrictSpace($event); restrictChar($event)\" (keyup)=\" restrictLength('ssp'); valueChangeFunc('SSP')\"\r\n                                                /><span>{{currCoinSelectedObj.coin}}</span>\r\n                                            </div>\r\n                                            <div class=\"coinInputField\">\r\n                                                <input type=\"text\" class=\"whiteText\" name=\"Sell Stop Quantity\" placeholder=\"Quantity\" [(ngModel)]=\"sLimitSellObj.amount\" autocomplete=\"off\" (keypress)=\"restrictSpace($event); restrictChar($event)\" (keyup)=\" restrictLength('ssa'); valueChangeFunc('SSA')\"\r\n                                                /><span>{{currCoinPairObj.coin}}</span>\r\n                                            </div>\r\n                                        </div>\r\n                                        <div class=\"coinOutputField mt15 mb15\">\r\n                                            <span class=\"outLeft\">Total ({{currCoinPairObj.coin}})</span>\r\n                                            <span class=\"outRight\">{{sellTotal}} {{currCoinPairObj.coin}}</span>\r\n                                        </div>\r\n                                        <!-- <div class=\"coinOutputField\">\r\n                                            <span class=\"outLeft\">Fee</span>\r\n                                            <span class=\"outRight\">0.0000 BTC</span>\r\n                                        </div>\r\n                                        <div class=\"coinOutputField\">\r\n                                            <span class=\"outLeft\">Total (ETH)</span>\r\n                                            <span class=\"outRight\">0.00000000 ETH</span>\r\n                                        </div> -->\r\n                                        <div class=\"text-center mt15\">\r\n                                            <button class=\"btn btnRed btnSm btnCircular minWidth80\" (click)=\"orderPlace('SELL')\" [disabled]=\"changeToNumberType(sellTotal) <= 0 || sellBtnDisable\">Sell {{currCoinPairObj.coin}}</button>\r\n                                        </div>\r\n                                    </div>\r\n                                    <!--coinBuyRight End -->\r\n                                </div>\r\n                                <div class=\"d-flex flex-wrap align-items-center center-box max-WT-300\">\r\n                                    <label class=\"mb0 pr15 weight600\">Balance</label>\r\n                                    <div class=\"formBox\">\r\n                                        <div class=\"serachBox\">\r\n                                            <input type=\"text\" class=\"form-control radius10\" placeholder=\"\">\r\n                                            <i class=\"fas fa-search\"></i>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"bottomUsdtBox\">\r\n                                    <span class=\"minWidth30\">\r\n                                        <img src=\"assets/images/btc_small.png\" style=\"width: 25px;\" *ngIf=\"balSecObj.coin=='BTC'\"/>\r\n                                        <img src=\"assets/images/eth_small.png\" style=\"width: 25px;\" *ngIf=\"balSecObj.coin=='ETH'\"/>\r\n                                    </span>\r\n                                    <select class=\"countryDropdown btnSm\" name=\"User Balance Coin\" [(ngModel)]=\"balSecObj.coin\" (change)=\"userBalCoinChange()\">\r\n                                        <option *ngFor=\"let data of userBalArr\" [value]=\"data.coin\">{{data.coin}}</option>\r\n                                    </select>\r\n                                    <div class=\"formBox usdtField\">\r\n                                        <input type=\"text\" class=\"form-control smField font16 weight600\" name=\"User Balance\" [(ngModel)]=\"balSecObj.balance\" readonly />\r\n                                        <span>{{balSecObj.coin}}</span>\r\n                                    </div>\r\n                                </div>\r\n                                <!-- <div class=\"text-center weight600 font16\">\r\n                                    0.00000 USD <span class=\"gColor ml7\">(+00%)</span>\r\n                                </div> -->\r\n                            </form>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <!-- Bottom exchangeLeftBox End -->\r\n                <div class=\"exchangeRightBox\">\r\n                    <div class=\"globalTabBox\">\r\n                        <ul class=\"nav nav-tabs globalTab\">\r\n                            <li class=\"nav-item\">\r\n                                <a class=\"nav-link active show\" data-toggle=\"tab\" href=\"#orderBookTab\">Order Book</a>\r\n                            </li>\r\n                            <li class=\"nav-item\">\r\n                                <a class=\"nav-link\" data-toggle=\"tab\" href=\"#openOrderTab\" (click)=\"getOpenOrder()\">Open Order</a>\r\n                            </li>\r\n                            <li class=\"nav-item\">\r\n                                <a class=\"nav-link\" data-toggle=\"tab\" href=\"#orderHistoryTab\" (click)=\"getOrderHistory()\">Order History</a>\r\n                            </li>\r\n                        </ul>\r\n                        <div class=\"tab-content pt15 pb15 pr0 pl0\">\r\n                            <div class=\"tab-pane fade active show\" id=\"orderBookTab\">\r\n                                <div class=\"tableDividerBox\">\r\n                                    <div class=\"leftDividerBox\">\r\n                                        <div class=\"table-responsive commonOrderTable tableScroller\">\r\n                                            <table class=\"table tableAlignMiddle tableCenter globalTable1 mb0\">\r\n                                                <thead>\r\n                                                    <tr>\r\n                                                        <!-- <th class=\"cellDot\"></th> -->\r\n                                                        <th>PRICE</th>\r\n                                                        <th>AMOUNT</th>\r\n                                                        <th>TOTAL</th>\r\n                                                        <th class=\"notShwoCell\"><strong>BID</strong></th>\r\n                                                    </tr>\r\n                                                </thead>\r\n                                                <tbody>\r\n                                                    <tr *ngFor=\"let data of buyOrderArr;\">\r\n                                                        <!-- <td class=\"cellDot\"></td> -->\r\n                                                        <td [ngClass]=\"{'flickData':data.flicker}\">\r\n                                                            <i class=\"fas fa-circle user_buy_dot\" *ngIf=\"data.userOrder\"></i>\r\n                                                            <span class=\"labeled\" style=\"display: inline;\">{{data.price}}</span>\r\n                                                        </td>\r\n                                                        <td [ngClass]=\"{'flickData':data.flicker}\"><span class=\"labeled\">{{data.amount}}</span></td>\r\n                                                        <td [ngClass]=\"{'flickData':data.flicker}\"><span class=\"labeled\">{{data.total}}</span></td>\r\n                                                        <td [ngClass]=\"{'flickData':data.flicker}\" class=\"notShwoCell\"></td>\r\n                                                    </tr>\r\n                                                    <tr *ngIf=\"buyOrderArr.length==0\">\r\n                                                        <td colspan=\"4\" vertical-align=\"middle\">\r\n                                                            <div class=\"no-record\">\r\n                                                                <div class=\"no-recordin\">\r\n                                                                    <span>No Record Found</span>\r\n                                                                </div>\r\n                                                            </div>\r\n                                                        </td>\r\n                                                    </tr>\r\n                                                </tbody>\r\n                                            </table>\r\n                                        </div>\r\n                                    </div>\r\n                                    <!-- leftDividerBoxEnd -->\r\n                                    <div class=\"rightDividerBox\">\r\n                                        <div class=\"table-responsive commonOrderTable tableScroller\">\r\n                                            <table class=\"table tableAlignMiddle tableCenter globalTable1  mb0\">\r\n                                                <thead>\r\n                                                    <tr>\r\n                                                        <th class=\"notShwoCell\"><strong>ASK</strong></th>\r\n                                                        <th>PRICE</th>\r\n                                                        <th>AMOUNT</th>\r\n                                                        <th>TOTAL</th>\r\n                                                        <!-- <th class=\"cellDot\"></th> -->\r\n                                                    </tr>\r\n                                                </thead>\r\n                                                <tbody>\r\n                                                    <tr *ngFor=\"let data of sellOrderArr;\">\r\n                                                        <td [ngClass]=\"{'flickData':data.flicker}\" class=\"notShwoCell\">\r\n                                                        </td>\r\n                                                        <td [ngClass]=\"{'flickData':data.flicker}\">\r\n                                                            <i class=\"fas fa-circle user_sell_dot\" *ngIf=\"data.userOrder\"></i>\r\n                                                            <span class=\"labeled\" style=\"display: inline;\">{{data.price}}</span>\r\n                                                        </td>\r\n                                                        <td [ngClass]=\"{'flickData':data.flicker}\"><span class=\"labeled\">{{data.amount}}</span></td>\r\n                                                        <td [ngClass]=\"{'flickData':data.flicker}\"><span class=\"labeled\">{{data.total}}</span></td>\r\n                                                        <!-- <td class=\"cellDot\"></td> -->\r\n                                                    </tr>\r\n                                                    <tr *ngIf=\"sellOrderArr.length==0\">\r\n                                                        <td colspan=\"4\" vertical-align=\"middle\">\r\n                                                            <div class=\"no-record\">\r\n                                                                <div class=\"no-recordin\">\r\n                                                                    <span>No Record Found</span>\r\n                                                                </div>\r\n                                                            </div>\r\n                                                        </td>\r\n                                                    </tr>\r\n                                                </tbody>\r\n                                            </table>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"paginationBtn mb0 mt15\">\r\n                                    <span class=\"fas fa-plus\"></span>\r\n                                    <span class=\"fas fa-minus\"></span>\r\n                                </div>\r\n                            </div>\r\n                            <!-- orderBookTab End -->\r\n                            <div class=\"tab-pane fade\" id=\"openOrderTab\">\r\n                                <div class=\"table-responsive commonOrderTable openOrderTable tableScroller\">\r\n                                    <table class=\"table tableAlignMiddle tableCenter globalTable1 mb0\">\r\n                                        <thead>\r\n                                            <tr>\r\n                                                <th></th>\r\n                                                <th>DATE</th>\r\n                                                <th>PAIR</th>\r\n                                                <th>PRICE</th>\r\n                                                <th>AMOUNT</th>\r\n                                                <th>FILLED</th>\r\n                                                <th>TOTAL</th>\r\n                                                <th class=\"verifyCell\"></th>\r\n                                                <!-- <th class=\"toggleCell\"></th> -->\r\n                                            </tr>\r\n                                        </thead>\r\n                                        <tbody>\r\n                                            <tr *ngFor=\"let data of openOrderArr\">\r\n                                                <td>\r\n                                                    <a href=\"javascript:void(0);\" class=\"labeled bgGreen wColor\" *ngIf=\"data.orderType=='BUY'\">Buy</a>\r\n                                                    <a href=\"javascript:void(0);\" class=\"labeled bgRed wColor\" *ngIf=\"data.orderType=='SELL'\">Sell</a>\r\n                                                </td>\r\n                                                <td><span class=\"labeled\">{{data.orderTime | date: 'MM/dd/yyy, hh:mm a'}}</span></td>\r\n                                                <td><span class=\"labeled\">{{data.pair}}</span></td>\r\n                                                <td><span class=\"labeled\">{{data.price}}</span></td>\r\n                                                <td><span class=\"labeled\">{{data.amount}}</span></td>\r\n                                                <td><span class=\"labeled\">{{data.happening | number: '.2-2'}}</span></td>\r\n                                                <td><span class=\"labeled\">{{data.total}}</span></td>\r\n                                                <td class=\"verifyCell\">\r\n                                                    <button class=\"cancel_btn\" (click)=\"orderCancelFunc(data)\" [disabled]=\"data.click\"><i class=\"fas fa-times\"></i></button>\r\n                                                </td>\r\n                                                <!-- <td class=\"toggleCell\"><i class=\"fas fa-ellipsis-h\"></i></td> -->\r\n                                            </tr>\r\n                                            <tr *ngIf=\"openOrderArr.length==0\">\r\n                                                <td colspan=\"8\" vertical-align=\"middle\">\r\n                                                    <div class=\"no-record\">\r\n                                                        <div class=\"no-recordin\">\r\n                                                            <span>No Record Found</span>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </td>\r\n                                            </tr>\r\n                                        </tbody>\r\n                                    </table>\r\n                                </div>\r\n                                <div class=\"paginationBtn mb0 mt15\">\r\n                                    <span class=\"fas fa-plus\"></span>\r\n                                    <span class=\"fas fa-minus\"></span>\r\n                                </div>\r\n                            </div>\r\n                            <!-- openOrderTab End -->\r\n                            <div class=\"tab-pane fade\" id=\"orderHistoryTab\">\r\n                                <div class=\"table-responsive commonOrderTable openOrderTable tableScroller\">\r\n                                    <table class=\"table tableAlignMiddle tableCenter globalTable1 mb0\">\r\n                                        <thead>\r\n                                            <tr>\r\n                                                <th></th>\r\n                                                <th>DATE</th>\r\n                                                <th>PAIR</th>\r\n                                                <th>PRICE</th>\r\n                                                <th>AMOUNT</th>\r\n                                                <th>FILLED</th>\r\n                                                <th>TOTAL</th>\r\n                                                <th>STATUS</th>\r\n                                                <!-- <th class=\"minWidth30\"></th> -->\r\n                                            </tr>\r\n                                        </thead>\r\n                                        <tbody>\r\n                                            <tr *ngFor=\"let data of orderHistoryArr\">\r\n                                                <td>\r\n                                                    <a href=\"javascript:void(0);\" class=\"labeled bgGreen wColor\" *ngIf=\"data.orderType=='BUY'\">Buy</a>\r\n                                                    <a href=\"javascript:void(0);\" class=\"labeled bgRed wColor\" *ngIf=\"data.orderType=='SELL'\">Sell</a>\r\n                                                </td>\r\n                                                <td><span class=\"labeled\">{{data.orderTime | date: 'MM/dd/yyy, hh:mm a'}}</span></td>\r\n                                                <td><span class=\"labeled\">{{data.pair}}</span></td>\r\n                                                <td><span class=\"labeled\">{{data.price}}</span></td>\r\n                                                <td><span class=\"labeled\">{{data.amount}}</span></td>\r\n                                                <td><span class=\"labeled\">{{data.happening | number: '.2-2'}}</span></td>\r\n                                                <td><span class=\"labeled\">{{data.total}}</span></td>\r\n                                                <td><span class=\"labeled\">{{data.orderStatus}}</span></td>\r\n                                                <!-- <td class=\"minWidth30\"></td> -->\r\n                                            </tr>\r\n                                            <tr *ngIf=\"orderHistoryArr.length==0\">\r\n                                                <td colspan=\"8\" vertical-align=\"middle\">\r\n                                                    <div class=\"no-record\">\r\n                                                        <div class=\"no-recordin\">\r\n                                                            <span>No Record Found</span>\r\n                                                        </div>\r\n                                                    </div>\r\n                                                </td>\r\n                                            </tr>\r\n                                        </tbody>\r\n                                    </table>\r\n                                </div>\r\n                                <div class=\"paginationBtn mb0 mt15\">\r\n                                    <span class=\"fas fa-plus\"></span>\r\n                                    <span class=\"fas fa-minus\"></span>\r\n                                </div>\r\n                            </div>\r\n                            <!-- orderHistoryTab End -->\r\n                        </div>\r\n                        <!-- Tab Content End -->\r\n                    </div>\r\n                    <!-- globalTabBox End -->\r\n                </div>\r\n                <!-- Bottom exchangeRightBox End -->\r\n            </div>\r\n            <!-- Exchange Bottom Block -->\r\n        </div>\r\n    </section>\r\n</main>"

/***/ }),

/***/ "./src/app/modules/exchange/exchange/exchange.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/modules/exchange/exchange/exchange.component.ts ***!
  \*****************************************************************/
/*! exports provided: ExchangeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ExchangeComponent", function() { return ExchangeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var _header_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../header/header/header.component */ "./src/app/modules/header/header/header.component.ts");
/* harmony import */ var src_app_services_server_repo_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/server-repo.service */ "./src/app/services/server-repo.service.ts");
/* harmony import */ var src_app_app_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/app.component */ "./src/app/app.component.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");








var copyBuyOrderArr = [];
var copySellOrderArr = [];
var copyTradeHisArr = [];
var ExchangeComponent = /** @class */ (function () {
    function ExchangeComponent(header, server, appC, spinner, cookieService) {
        var _this = this;
        this.header = header;
        this.server = server;
        this.appC = appC;
        this.spinner = spinner;
        this.cookieService = cookieService;
        this.regexForEightChar = (/^(\d+)?([*]?\d{0,8})?$/);
        this.numRegxForDot = (/(?: |^)\d*\.?\d+(?: |$)/);
        this.coinArr = [
            {
                coinName: "BTC",
                img: "assets/images/bit-icon.png"
            }, {
                coinName: "ETH",
                img: "assets/images/ether-icon.png"
            }, {
                coinName: "LTC",
                img: "assets/images/lite-icon.png"
            }, {
                coinName: "ADK",
                img: "assets/images/adk-icon.png"
            }, {
                coinName: "USDT",
                img: "assets/images/usdt-icon.png"
            },
        ];
        this.coinListArr = [];
        this.coinPairListArr = [];
        this.currCoinSelectedObj = { coin: "", coinID: "", coinType: "" };
        this.currCoinPairObj = { coin: "", coinID: "", coinType: "" };
        this.orderTypeObj = { buyType: "limit", sellType: "limit" };
        this.limitBuyObj = { price: "", amount: "" };
        this.limitSellObj = { price: "", amount: "" };
        this.marketBuyObj = { amount: "" };
        this.marketSellObj = { amount: "" };
        this.sLimitBuyObj = { stop: "", price: "", amount: "" };
        this.sLimitSellObj = { stop: "", price: "", amount: "" };
        this.buyTotal = "0.000000";
        this.sellTotal = "0.000000";
        this.userData = { baseCoinBal: "100", pairCoinBal: "200" };
        this.tradeViewPair = "";
        this.buyOrderArr = [];
        this.sellOrderArr = [];
        this.tradeHisArr = [];
        this.userBalArr = [];
        this.balSecObj = { coin: "", balance: "" };
        this.hitBTCDataStatus = true;
        this.openOrderArr = [];
        this.orderHistoryArr = [];
        this.buyBtnDisable = false;
        this.sellBtnDisable = false;
        this.header.fireToChild().subscribe(function (msg) {
            msg.text == "modeChange" ? _this.drawTradingChart() : "";
            switch (msg.text) {
                case "modeChange":
                    _this.drawTradingChart();
                    _this.drawDepthChart();
                    break;
            }
        });
        this.server.fireToChild().subscribe(function (msg) {
            switch (msg.text) {
                case "socketConnected":
                case "liqConnected":
                    if (_this.currCoinPairObj.coin && _this.currCoinSelectedObj.coin) {
                        _this.updateSocketEvent(2);
                        _this.updateSocketEvent(1);
                    }
                    break;
            }
        });
        var self = this;
        /** Listener for web socket connection */
        this.server.wsObj.addEventListener('message', function (event) {
            var data = JSON.parse(event.data);
            if (data.data) {
                switch (data.responseType) {
                    case "tickerUpdate":
                        var ind = self.coinPairListArr.findIndex(function (obj) { return obj.coin == data.symbol.split("_")[0]; });
                        if (ind != -1) {
                            self.coinPairListArr[ind].last_price = data.data.lastPrice ? Number(data.data.lastPrice).toFixed(6) : "0.000000";
                            self.coinPairListArr[ind].volume = data.data.totalVolume ? Number(data.data.totalVolume).toFixed(6) : "0.000000";
                            self.coinPairListArr[ind].average = ((Number(data.data.highest24HourPrice ? data.data.highest24HourPrice : "0") + Number(data.data.lowest24HourPrice ? data.data.lowest24HourPrice : "0")) / 2).toFixed(6);
                        }
                        break;
                    case "orderBookSnapshot":
                        // console.log("orderBookSnapshot -> ",JSON.stringify(data.data));
                        if (data.data.length) {
                            data.data.forEach(function (obj) {
                                if (obj.side == "BUY") {
                                    var ind = self.buyOrderArr.findIndex(function (x) { return x.price == Number(obj.price).toFixed(6); });
                                    if (ind != -1) {
                                        self.buyOrderArr[ind].amount = (Number(self.buyOrderArr[ind].amount) + Number(obj.amount)).toFixed(6);
                                        if (self.buyOrderArr[ind].amount <= 0) {
                                            self.buyOrderArr.splice(ind, 1);
                                            return;
                                        }
                                        else {
                                            self.buyOrderArr[ind].total = (self.buyOrderArr[ind].price * self.buyOrderArr[ind].amount).toFixed(6);
                                            self.buyOrderArr[ind].userOrder = obj.userId == self.cookieService.get("userId") ? true : false;
                                        }
                                    }
                                    else {
                                        if (obj.amount > 0) {
                                            self.buyOrderArr.push({
                                                price: Number(obj.price).toFixed(6),
                                                amount: Number(obj.amount).toFixed(6),
                                                total: (obj.price * obj.amount).toFixed(6),
                                                flicker: false,
                                                userOrder: obj.userId == self.cookieService.get("userId") ? true : false
                                            });
                                        }
                                    }
                                    self.buyOrderArr = self.functionToManageBuyOrder(self.buyOrderArr);
                                }
                                if (obj.side == "SELL") {
                                    var ind = self.sellOrderArr.findIndex(function (x) { return x.price == Number(obj.price).toFixed(6); });
                                    if (ind != -1) {
                                        self.sellOrderArr[ind].amount = (Number(self.sellOrderArr[ind].amount) + Number(obj.amount)).toFixed(6);
                                        if (self.sellOrderArr[ind].amount <= 0) {
                                            self.sellOrderArr.splice(ind, 1);
                                            return;
                                        }
                                        else {
                                            self.sellOrderArr[ind].total = (self.sellOrderArr[ind].price * self.sellOrderArr[ind].amount).toFixed(6);
                                            self.sellOrderArr[ind].userOrder = obj.userId == self.cookieService.get("userId") ? true : false;
                                        }
                                    }
                                    else {
                                        if (obj.amount > 0) {
                                            self.sellOrderArr.push({
                                                price: Number(obj.price).toFixed(6),
                                                amount: Number(obj.amount).toFixed(6),
                                                total: (obj.price * obj.amount).toFixed(6),
                                                flicker: false,
                                                userOrder: obj.userId == self.cookieService.get("userId") ? true : false
                                            });
                                        }
                                    }
                                    self.sellOrderArr = self.functionToManageSellOrder(self.sellOrderArr);
                                }
                            });
                        }
                        break;
                    case "orderBookUpdate":
                        // console.log("orderBookUpdate -> ",JSON.stringify(data.data));
                        if (data.data) {
                            if (data.data.side == "BUY") {
                                var ind = self.buyOrderArr.findIndex(function (x) { return x.price == Number(data.data.price).toFixed(6); });
                                if (ind != -1) {
                                    self.buyOrderArr[ind].amount = (Number(self.buyOrderArr[ind].amount) + Number(data.data.amount)).toFixed(6);
                                    if (self.buyOrderArr[ind].amount <= 0) {
                                        self.buyOrderArr.splice(ind, 1);
                                        return;
                                    }
                                    else {
                                        self.buyOrderArr[ind].total = (self.buyOrderArr[ind].price * self.buyOrderArr[ind].amount).toFixed(6);
                                        self.buyOrderArr[ind].flicker = true;
                                        self.buyOrderArr[ind].userOrder = self.cookieService.get("userId") == data.data.userId ? true : false;
                                        self.stopFlicker(1);
                                    }
                                }
                                else {
                                    if (data.data.amount > 0) {
                                        self.buyOrderArr.push({
                                            price: Number(data.data.price).toFixed(6),
                                            amount: Number(data.data.amount).toFixed(6),
                                            total: (data.data.price * data.data.amount).toFixed(6),
                                            flicker: false,
                                            userOrder: self.cookieService.get("userId") == data.data.userId ? true : false
                                        });
                                    }
                                }
                                self.buyOrderArr = self.functionToManageBuyOrder(self.buyOrderArr);
                            }
                            if (data.data.side == "SELL") {
                                var ind = self.sellOrderArr.findIndex(function (x) { return x.price == Number(data.data.price).toFixed(6); });
                                if (ind != -1) {
                                    self.sellOrderArr[ind].amount = (Number(self.sellOrderArr[ind].amount) + Number(data.data.amount)).toFixed(6);
                                    if (self.sellOrderArr[ind].amount <= 0) {
                                        self.sellOrderArr.splice(ind, 1);
                                        return;
                                    }
                                    else {
                                        self.sellOrderArr[ind].total = (self.sellOrderArr[ind].price * self.sellOrderArr[ind].amount).toFixed(6);
                                        self.sellOrderArr[ind].flicker = true;
                                        self.sellOrderArr[ind].userOrder = self.cookieService.get("userId") == data.data.userId ? true : false;
                                        self.stopFlicker(2);
                                    }
                                }
                                else {
                                    if (data.data.amount > 0) {
                                        self.sellOrderArr.push({
                                            price: Number(data.data.price).toFixed(6),
                                            amount: Number(data.data.amount).toFixed(6),
                                            total: (data.data.price * data.data.amount).toFixed(6),
                                            flicker: false,
                                            userOrder: self.cookieService.get("userId") == data.data.userId ? true : false
                                        });
                                    }
                                }
                                self.sellOrderArr = self.functionToManageSellOrder(self.sellOrderArr);
                            }
                        }
                        break;
                    case "tradeHistorySnapshot":
                        if (data.data.length) {
                            data.data.forEach(function (obj) {
                                self.tradeHisArr.push({
                                    price: Number(obj.price).toFixed(6),
                                    amount: Number(obj.amount).toFixed(6),
                                    total: Number(obj.price * obj.amount).toFixed(6),
                                    time: obj.time,
                                    type: obj.side.toUpperCase()
                                });
                            });
                            self.tradeHisArr = self.functionToManageTradeHisOrder(self.tradeHisArr);
                        }
                        break;
                    case "tradeHistoryUpdate":
                        if (data.data) {
                            self.tradeHisArr.push({
                                price: Number(data.data.price).toFixed(6),
                                amount: Number(data.data.amount).toFixed(6),
                                total: Number(data.data.price * data.data.amount).toFixed(6),
                                time: data.data.time,
                                type: data.data.side.toUpperCase()
                            });
                            self.tradeHisArr = self.functionToManageTradeHisOrder(self.tradeHisArr);
                        }
                        break;
                }
            }
        });
    }
    ExchangeComponent.prototype.ngOnInit = function () {
        window.scrollTo(0, 0);
        this.initValue();
        this.getCoinList();
    };
    ExchangeComponent.prototype.ngOnDestroy = function () {
        clearInterval(this.depthChartTimerID);
        this.updateSocketEvent(2);
    };
    /** Function to manage buy border data */
    ExchangeComponent.prototype.functionToManageBuyOrder = function (arr) {
        arr = arr.filter(function (obj) { return Number(obj.amount) != 0; });
        arr.sort(function (a, b) {
            return b.price - a.price;
        });
        arr = arr.slice(0, this.server.buyOrderLimit);
        return arr;
    };
    /** Function to manage sell border data */
    ExchangeComponent.prototype.functionToManageSellOrder = function (arr) {
        arr = arr.filter(function (obj) { return Number(obj.amount) != 0; });
        arr.sort(function (a, b) {
            return a.price - b.price;
        });
        arr = arr.slice(0, this.server.sellOrderLimit);
        return arr;
    };
    /** Function to manage trade history data */
    ExchangeComponent.prototype.functionToManageTradeHisOrder = function (arr) {
        arr.sort(function (a, b) {
            return b.time - a.time;
        });
        arr = arr.slice(0, this.server.tradeHisOrderLimit);
        return arr;
    };
    /** Function for initialize values */
    ExchangeComponent.prototype.initValue = function () {
        this.orderTypeObj.buyType = "limit";
        this.orderTypeObj.sellType = "limit";
        this.buyTotal = "0.000000";
        this.sellTotal = "0.000000";
        this.clearBuyFields();
        this.clearSellFields();
    };
    /** Funcion for clear buy fields */
    ExchangeComponent.prototype.clearBuyFields = function () {
        switch (this.orderTypeObj.buyType) {
            case "limit":
                this.limitBuyObj.amount = "";
                this.limitBuyObj.price = "";
                break;
            case "market":
                this.marketBuyObj.amount = "";
                break;
            case "stop_limit":
                this.sLimitBuyObj.amount = "";
                this.sLimitBuyObj.price = "";
                this.sLimitBuyObj.stop = "";
                break;
        }
    };
    /** Funcion for clear sell fields */
    ExchangeComponent.prototype.clearSellFields = function () {
        switch (this.orderTypeObj.sellType) {
            case "limit":
                this.limitSellObj.amount = "";
                this.limitSellObj.price = "";
                break;
            case "market":
                this.marketSellObj.amount = "";
                break;
            case "stop_limit":
                this.sLimitSellObj.amount = "";
                this.sLimitSellObj.price = "";
                this.sLimitSellObj.stop = "";
                break;
        }
    };
    /** Function to get coin list */
    ExchangeComponent.prototype.getCoinList = function () {
        var _this = this;
        this.server.getMethod(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].wallet.version, "wallet/coin/get-coin-list").subscribe(function (succ) {
            if (succ.status == 200) {
                _this.coinListArr = [];
                _this.userBalArr = [];
                succ.data.forEach(function (obj) {
                    _this.userBalArr.push({
                        coin: obj.coinShortName,
                        balance: ""
                    });
                    if (obj.coinShortName == "BTC") {
                        _this.coinListArr.push({
                            "coinId": obj.coinId,
                            "coinFullName": obj.coinFullName,
                            "coinShortName": obj.coinShortName,
                            "coinType": obj.coinType
                        });
                    }
                });
                _this.coinListArr.forEach(function (obj) {
                    var arr = _this.coinArr.filter(function (x) { return x.coinName == obj.coinShortName; });
                    obj.imgUrl = arr[0].img;
                });
                if (_this.coinListArr.length) {
                    _this.currCoinSelectedObj.coin = _this.coinListArr[0].coinShortName;
                    _this.currCoinSelectedObj.coinType = _this.coinListArr[0].coinType;
                    _this.coinPairListArr = [];
                    _this.getCoinPair();
                }
            }
            else {
                _this.coinListArr = [];
                _this.userBalArr = [];
                _this.appC.showErrorAlert(succ.message);
            }
        }, function (err) {
            _this.coinListArr = [];
            _this.userBalArr = [];
            _this.appC.showErrorAlert(err.error.message);
        });
    };
    /** Function for get coin pair list */
    ExchangeComponent.prototype.getCoinPair = function () {
        var _this = this;
        this.server.getMethod(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].wallet.version, "wallet/coin/get-coin-pair-list?baseCoin=" + this.currCoinSelectedObj.coin).subscribe(function (succ) {
            if (succ.status == 200) {
                _this.coinPairListArr = [];
                succ.data.forEach(function (obj) {
                    _this.coinPairListArr.push({
                        coin: obj.coinShortName,
                        volume: "",
                        average: "",
                        last_price: "",
                        selected: false
                    });
                });
                if (_this.coinPairListArr.length) {
                    _this.coinPairListArr[0].selected = true;
                    _this.currCoinPairObj.coin = _this.coinPairListArr[0].coin;
                    _this.tradeViewPair = _this.currCoinPairObj.coin + "/" + _this.currCoinSelectedObj.coin;
                    _this.buyOrderArr = [];
                    _this.sellOrderArr = [];
                    _this.tradeHisArr = [];
                    _this.updateSocketEvent(1);
                    _this.drawTradingChart();
                    _this.drawDepthChart();
                    _this.startTimerForDepthChart();
                    if (_this.cookieService.get("token")) {
                        _this.getUserBaseCoinBalance();
                        _this.getUserPairCoinBalance();
                    }
                }
                if (_this.userBalArr.length) {
                    _this.balSecObj.coin = _this.userBalArr[0].coin;
                }
            }
            else {
                _this.coinPairListArr = [];
                _this.appC.showErrorAlert(succ.message);
            }
        }, function (err) {
            _this.coinPairListArr = [];
            _this.appC.showErrorAlert(err.error.message);
        });
    };
    /** Function for change base coin */
    ExchangeComponent.prototype.selectBaseCoin = function (coin) {
        this.currCoinSelectedObj.coin = coin.coinShortName;
        this.currCoinSelectedObj.coinType = coin.coinType;
        // this.updateSocketEvent(2);
        this.tradeHisArr = [];
        this.sellOrderArr = [];
        this.buyOrderArr = [];
        this.coinPairListArr = [];
        this.getCoinPair();
    };
    /** Function for select executable coin */
    ExchangeComponent.prototype.selectExecuteCoin = function (data) {
        data.selected = true;
        this.currCoinPairObj.coin = data.coin;
        this.updateSocketEvent(2);
        this.tradeViewPair = this.currCoinPairObj.coin + "/" + this.currCoinSelectedObj.coin;
        this.coinPairListArr.forEach(function (obj) {
            if (data.coin != obj.coin) {
                obj.selected = false;
            }
        });
        copyBuyOrderArr = [];
        copySellOrderArr = [];
        copyTradeHisArr = [];
        this.tradeHisArr = [];
        this.sellOrderArr = [];
        this.buyOrderArr = [];
        this.updateSocketEvent(1);
        this.drawTradingChart();
        this.drawDepthChart();
        if (this.cookieService.get("token")) {
            this.getUserPairCoinBalance();
            this.getOpenOrder();
            this.getOrderHistory();
        }
    };
    /** Function for get user base coin balance */
    ExchangeComponent.prototype.getUserBaseCoinBalance = function () {
        var _this = this;
        this.server.getMethod(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].wallet.version, "wallet/wallet/get-balance?coinName=" + this.currCoinSelectedObj.coin).subscribe(function (succ) {
            if (succ.status == 200) {
                _this.userData.baseCoinBal = succ.data.walletBalance;
                var coinArr = _this.userBalArr.filter(function (obj) { return obj.coin == _this.currCoinSelectedObj.coin; });
                if (coinArr.length) {
                    coinArr[0].balance = succ.data.walletBalance;
                    _this.balSecObj.coin == _this.currCoinSelectedObj.coin ? _this.balSecObj.balance = succ.data.walletBalance : "";
                }
            }
            else {
                _this.userData.baseCoinBal = "0";
                var coinArr = _this.userBalArr.filter(function (obj) { return obj.coin == _this.currCoinSelectedObj.coin; });
                if (coinArr.length) {
                    coinArr[0].balance = "0";
                    _this.balSecObj.coin == _this.currCoinSelectedObj.coin ? _this.balSecObj.balance = "0" : "";
                }
                _this.appC.showErrorAlert(succ.message);
            }
        }, function (err) {
            _this.appC.showErrorAlert(err.error.message);
        });
    };
    /** Function for get user base coin balance */
    ExchangeComponent.prototype.getUserPairCoinBalance = function () {
        var _this = this;
        this.server.getMethod(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].wallet.version, "wallet/wallet/get-balance?coinName=" + this.currCoinPairObj.coin).subscribe(function (succ) {
            if (succ.status == 200) {
                _this.userData.pairCoinBal = succ.data.walletBalance;
                var coinArr = _this.userBalArr.filter(function (obj) { return obj.coin == _this.currCoinPairObj.coin; });
                if (coinArr.length) {
                    coinArr[0].balance = succ.data.walletBalance;
                    _this.balSecObj.coin == _this.currCoinPairObj.coin ? _this.balSecObj.balance = succ.data.walletBalance : "";
                }
            }
            else {
                _this.userData.pairCoinBal = "0";
                var coinArr = _this.userBalArr.filter(function (obj) { return obj.coin == _this.currCoinPairObj.coin; });
                if (coinArr.length) {
                    coinArr[0].balance = "0";
                    _this.balSecObj.coin == _this.currCoinPairObj.coin ? _this.balSecObj.balance = "0" : "";
                }
                _this.appC.showErrorAlert(succ.message);
            }
        }, function (err) {
            _this.appC.showErrorAlert(err.error.message);
        });
    };
    /** Function for draw trading chart */
    ExchangeComponent.prototype.drawTradingChart = function () {
        var _this = this;
        setTimeout(function () {
            if ($('body').hasClass('nightMode')) {
                new TradingView.widget({
                    fullscreen: true,
                    symbol: _this.tradeViewPair,
                    interval: 'D',
                    container_id: "tradingview_Ohl",
                    datafeed: new Datafeeds.UDFCompatibleDatafeed(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].tradeViewChartUrl, 60000),
                    library_path: "assets/lib/charting_library_night/",
                    locale: "en",
                    drawings_access: { type: 'black', tools: [{ name: "Regression Trend" }] },
                    disabled_features: ["use_localstorage_for_settings"],
                    overrides: {
                        "paneProperties.background": "#000",
                        "paneProperties.vertGridProperties.color": "#454545",
                        "paneProperties.horzGridProperties.color": "#454545",
                        "symbolWatermarkProperties.transparency": 90,
                        "scalesProperties.textColor": "#AAA"
                    }
                });
            }
            else {
                new TradingView.widget({
                    fullscreen: true,
                    symbol: "ETH/BTC",
                    interval: 'D',
                    container_id: "tradingview_Ohl",
                    datafeed: new Datafeeds.UDFCompatibleDatafeed(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].tradeViewChartUrl, 60000),
                    library_path: "assets/lib/charting_library/",
                    locale: "en",
                    drawings_access: { type: 'black', tools: [{ name: "Regression Trend" }] },
                    disabled_features: ["use_localstorage_for_settings"],
                });
            }
        }, 500);
    };
    /** Function for draw depth chart */
    ExchangeComponent.prototype.drawDepthChart = function () {
        var _this = this;
        var exeCoin = this.tradeViewPair.split("/")[0];
        var baseCoin = this.tradeViewPair.split("/")[1];
        this.server.getMethod(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].ohlc.version, "trade/exchange-feed/depth-chart?currency=" + baseCoin + "&exchangeCurrency=" + exeCoin).subscribe(function (succ) {
            if (succ.status == 200) {
                // console.log("succ -> ", JSON.stringify(succ));
                var bgColor = void 0;
                $('body').hasClass('nightMode') ? bgColor = "#071721" : bgColor = "#fff";
                Highcharts.chart('tradingview_depth', {
                    chart: {
                        type: 'area',
                        zoomType: 'xy',
                        backgroundColor: bgColor
                    },
                    title: {
                        text: exeCoin + '-' + baseCoin + ' Market Depth'
                    },
                    xAxis: {
                        minPadding: 0,
                        maxPadding: 0,
                        plotLines: [{
                                color: '#888',
                                value: 0.1523,
                                width: 1,
                                label: {
                                    text: 'Actual price',
                                    rotation: 90
                                }
                            }],
                        title: {
                            text: 'Price'
                        }
                    },
                    yAxis: [{
                            lineWidth: 1,
                            gridLineWidth: 1,
                            title: null,
                            tickWidth: 1,
                            tickLength: 5,
                            tickPosition: 'inside',
                            labels: {
                                align: 'left',
                                x: 8
                            }
                        }, {
                            opposite: true,
                            linkedTo: 0,
                            lineWidth: 1,
                            gridLineWidth: 0,
                            title: null,
                            tickWidth: 1,
                            tickLength: 5,
                            tickPosition: 'inside',
                            labels: {
                                align: 'right',
                                x: -8
                            }
                        }],
                    legend: {
                        enabled: false
                    },
                    plotOptions: {
                        area: {
                            fillOpacity: 0.2,
                            lineWidth: 1,
                            step: 'center'
                        }
                    },
                    tooltip: {
                        headerFormat: '<span style="font-size=10px;">Price: {point.key}</span><br/>',
                        valueDecimals: 2
                    },
                    series: [{
                            name: 'Bids',
                            data: succ.data.bids,
                            color: '#03a7a8'
                        }, {
                            name: 'Asks',
                            data: succ.data.asks,
                            color: '#fc5857'
                        }]
                });
            }
            else {
                _this.appC.showErrorAlert(succ.message);
            }
        }, function (err) {
            _this.appC.showErrorAlert(err.error.message);
        });
    };
    /** Function to restrict space */
    ExchangeComponent.prototype.restrictSpace = function (event) {
        var k = event.charCode;
        if (k === 32)
            return false;
    };
    /** Function to restrict character */
    ExchangeComponent.prototype.restrictChar = function (event) {
        var k = event.charCode;
        if (event.key === 'Backspace')
            k = 8;
        if (k >= 48 && k <= 57 || k == 8 || k == 46)
            return true;
        else
            return false;
    };
    /** Function to restrict length after dot */
    ExchangeComponent.prototype.restrictLength = function (type) {
        switch (type) {
            case 'lbp':
                if (this.limitBuyObj.price.includes(".")) {
                    if (!this.regexForEightChar.test(this.limitBuyObj.price)) {
                        var tempVal = this.limitBuyObj.price.split('.');
                        this.limitBuyObj.price = tempVal[0] + '.' + tempVal[1].slice(0, 8);
                    }
                }
                break;
            case 'lba':
                if (this.limitBuyObj.amount.includes(".")) {
                    if (!this.regexForEightChar.test(this.limitBuyObj.amount)) {
                        var tempVal = this.limitBuyObj.amount.split('.');
                        this.limitBuyObj.amount = tempVal[0] + '.' + tempVal[1].slice(0, 8);
                    }
                }
                break;
            case 'lsp':
                if (this.limitSellObj.price.includes(".")) {
                    if (!this.regexForEightChar.test(this.limitSellObj.price)) {
                        var tempVal = this.limitSellObj.price.split('.');
                        this.limitSellObj.price = tempVal[0] + '.' + tempVal[1].slice(0, 8);
                    }
                }
                break;
            case 'lsa':
                if (this.limitSellObj.amount.includes(".")) {
                    if (!this.regexForEightChar.test(this.limitSellObj.amount)) {
                        var tempVal = this.limitSellObj.amount.split('.');
                        this.limitSellObj.amount = tempVal[0] + '.' + tempVal[1].slice(0, 8);
                    }
                }
                break;
            case 'mba':
                if (this.marketBuyObj.amount.includes(".")) {
                    if (!this.regexForEightChar.test(this.marketBuyObj.amount)) {
                        var tempVal = this.marketBuyObj.amount.split('.');
                        this.marketBuyObj.amount = tempVal[0] + '.' + tempVal[1].slice(0, 8);
                    }
                }
                break;
            case 'msa':
                if (this.marketSellObj.amount.includes(".")) {
                    if (!this.regexForEightChar.test(this.marketSellObj.amount)) {
                        var tempVal = this.marketSellObj.amount.split('.');
                        this.marketSellObj.amount = tempVal[0] + '.' + tempVal[1].slice(0, 8);
                    }
                }
                break;
            case 'sbs':
                if (this.sLimitBuyObj.stop.includes(".")) {
                    if (!this.regexForEightChar.test(this.sLimitBuyObj.stop)) {
                        var tempVal = this.sLimitBuyObj.stop.split('.');
                        this.sLimitBuyObj.stop = tempVal[0] + '.' + tempVal[1].slice(0, 8);
                    }
                }
                break;
            case 'sbp':
                if (this.sLimitBuyObj.price.includes(".")) {
                    if (!this.regexForEightChar.test(this.sLimitBuyObj.price)) {
                        var tempVal = this.sLimitBuyObj.price.split('.');
                        this.sLimitBuyObj.price = tempVal[0] + '.' + tempVal[1].slice(0, 8);
                    }
                }
                break;
            case 'sba':
                if (this.sLimitBuyObj.amount.includes(".")) {
                    if (!this.regexForEightChar.test(this.sLimitBuyObj.amount)) {
                        var tempVal = this.sLimitBuyObj.amount.split('.');
                        this.sLimitBuyObj.amount = tempVal[0] + '.' + tempVal[1].slice(0, 8);
                    }
                }
                break;
            case 'sss':
                if (this.sLimitSellObj.stop.includes(".")) {
                    if (!this.regexForEightChar.test(this.sLimitSellObj.stop)) {
                        var tempVal = this.sLimitSellObj.stop.split('.');
                        this.sLimitSellObj.stop = tempVal[0] + '.' + tempVal[1].slice(0, 8);
                    }
                }
                break;
            case 'ssp':
                if (this.sLimitSellObj.price.includes(".")) {
                    if (!this.regexForEightChar.test(this.sLimitSellObj.price)) {
                        var tempVal = this.sLimitSellObj.price.split('.');
                        this.sLimitSellObj.price = tempVal[0] + '.' + tempVal[1].slice(0, 8);
                    }
                }
                break;
            case 'ssa':
                if (this.sLimitSellObj.amount.includes(".")) {
                    if (!this.regexForEightChar.test(this.sLimitSellObj.amount)) {
                        var tempVal = this.sLimitSellObj.amount.split('.');
                        this.sLimitSellObj.amount = tempVal[0] + '.' + tempVal[1].slice(0, 8);
                    }
                }
                break;
        }
    };
    /** Function to calculate total amount */
    ExchangeComponent.prototype.valueChangeFunc = function (type) {
        if (type == "LBP" || type == "LBA") {
            if (this.limitBuyObj.amount && this.limitBuyObj.price && Number(this.limitBuyObj.amount) >= 0 && Number(this.limitBuyObj.price) >= 0) {
                this.buyTotal = (Number(this.limitBuyObj.amount) * Number(this.limitBuyObj.price)).toFixed(8);
            }
            else {
                this.buyTotal = "0.000000";
            }
        }
        if (type == "LSP" || type == "LSA") {
            if (this.limitSellObj.amount && this.limitSellObj.price && Number(this.limitSellObj.amount) >= 0 && Number(this.limitSellObj.price) >= 0) {
                this.sellTotal = (Number(this.limitSellObj.amount) * Number(this.limitSellObj.price)).toFixed(8);
            }
            else {
                this.sellTotal = "0.000000";
            }
        }
        if (type == "MBA") {
            if (this.marketBuyObj.amount) {
                this.buyTotal = (Number(this.marketBuyObj.amount) * Number(1)).toFixed(8);
            }
            else {
                this.buyTotal = "0.000000";
            }
        }
        if (type == "MSA") {
            if (this.marketSellObj.amount) {
                this.sellTotal = (Number(this.marketSellObj.amount) * Number(1)).toFixed(8);
            }
            else {
                this.sellTotal = "0.000000";
            }
        }
        if (type == "SBP" || type == "SBA") {
            if (this.sLimitBuyObj.price && this.sLimitBuyObj.amount && Number(this.sLimitBuyObj.price) >= 0 && Number(this.sLimitBuyObj.amount) >= 0) {
                this.buyTotal = (Number(this.sLimitBuyObj.price) * Number(this.sLimitBuyObj.amount)).toFixed(8);
            }
            else {
                this.buyTotal = "0.000000";
            }
        }
        if (type == "SSP" || type == "SSA") {
            if (this.sLimitSellObj.price && this.sLimitSellObj.amount && Number(this.sLimitSellObj.price) >= 0 && Number(this.sLimitSellObj.amount) >= 0) {
                this.sellTotal = (Number(this.sLimitSellObj.price) * Number(this.sLimitSellObj.amount)).toFixed(8);
            }
            else {
                this.sellTotal = "0.000000";
            }
        }
    };
    /** Function for order type change */
    ExchangeComponent.prototype.orderTypeChangeFunc = function (type) {
        switch (type) {
            case "BUY":
                this.buyTotal = "0.000000";
                this.clearBuyFields();
                break;
            case "SELL":
                this.sellTotal = "0.000000";
                this.clearSellFields();
                break;
        }
    };
    /** Function for place order */
    ExchangeComponent.prototype.orderPlace = function (type) {
        switch (type) {
            case "BUY":
                switch (this.orderTypeObj.buyType) {
                    case "limit":
                        this.limitBuyFunc();
                        break;
                    case "market":
                        this.marketBuyFunc();
                        break;
                    case "stop_limit":
                        this.stopBuyFunc();
                        break;
                }
                break;
            case "SELL":
                switch (this.orderTypeObj.sellType) {
                    case "limit":
                        this.limitSellFunc();
                        break;
                    case "market":
                        this.marketSellFunc();
                        break;
                    case "stop_limit":
                        this.stopSellFunc();
                        break;
                }
                break;
        }
    };
    /** Function for limit buy */
    ExchangeComponent.prototype.limitBuyFunc = function () {
        var _this = this;
        if (Number(this.buyTotal) > Number(this.userData.baseCoinBal)) {
            this.appC.showErrorAlert("You cannot buy more than is available in your BlockSwap Wallet.");
            return;
        }
        else {
            var data = {
                "limitPrice": Number(this.limitBuyObj.price),
                "orderSide": "BUY",
                "orderType": "LIMIT",
                "quantity": Number(this.limitBuyObj.amount),
                "symbol": this.currCoinPairObj.coin + "_" + this.currCoinSelectedObj.coin
            };
            this.buyBtnDisable = true;
            // this.spinner.show();
            this.server.postMethod(data, src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].order.version, "trade/place-order").subscribe(function (succ) {
                _this.spinner.hide();
                if (succ.status == 200) {
                    _this.appC.showSuccessAlert(succ.message);
                    _this.buyBtnDisable = false;
                    _this.buyTotal = "0.000000";
                    _this.clearBuyFields();
                    _this.getUserBaseCoinBalance();
                    _this.getUserPairCoinBalance();
                    _this.getOpenOrder();
                    _this.getOrderHistory();
                }
                else {
                    _this.buyBtnDisable = false;
                    _this.appC.showErrorAlert(succ.message);
                }
            }, function (err) {
                _this.spinner.hide();
                _this.buyBtnDisable = false;
                _this.appC.showErrorAlert(err.error.message);
            });
        }
    };
    /** Function for limit sell */
    ExchangeComponent.prototype.limitSellFunc = function () {
        var _this = this;
        if (Number(this.limitSellObj.amount) > Number(this.userData.pairCoinBal)) {
            this.appC.showErrorAlert("You cannot sell more than is available in your BlockSwap Wallet.");
            return;
        }
        else {
            var data = {
                "limitPrice": Number(this.limitSellObj.price),
                "orderSide": "SELL",
                "orderType": "LIMIT",
                "quantity": Number(this.limitSellObj.amount),
                "symbol": this.currCoinPairObj.coin + "_" + this.currCoinSelectedObj.coin
            };
            // this.spinner.show();
            this.sellBtnDisable = true;
            this.server.postMethod(data, src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].order.version, "trade/place-order").subscribe(function (succ) {
                _this.spinner.hide();
                if (succ.status == 200) {
                    _this.appC.showSuccessAlert(succ.message);
                    _this.sellBtnDisable = false;
                    _this.sellTotal = "0.000000";
                    _this.clearSellFields();
                    _this.getUserBaseCoinBalance();
                    _this.getUserPairCoinBalance();
                    _this.getOpenOrder();
                    _this.getOrderHistory();
                }
                else {
                    _this.sellBtnDisable = false;
                    _this.appC.showErrorAlert(succ.message);
                }
            }, function (err) {
                _this.spinner.hide();
                _this.sellBtnDisable = false;
                _this.appC.showErrorAlert(err.error.message);
            });
        }
    };
    /** Function for market buy */
    ExchangeComponent.prototype.marketBuyFunc = function () {
        var _this = this;
        if (Number(this.marketBuyObj.amount) > Number(this.userData.baseCoinBal)) {
            this.appC.showErrorAlert("You cannot buy more than is available in your BlockSwap Wallet.");
            return;
        }
        else {
            var data = {
                "orderSide": "BUY",
                "orderType": "MARKET",
                "quantity": Number(this.marketBuyObj.amount),
                "symbol": this.currCoinPairObj.coin + "_" + this.currCoinSelectedObj.coin
            };
            // this.spinner.show();
            this.buyBtnDisable = true;
            this.server.postMethod(data, src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].order.version, "trade/place-order").subscribe(function (succ) {
                _this.spinner.hide();
                if (succ.status == 200) {
                    _this.appC.showSuccessAlert(succ.message);
                    _this.buyBtnDisable = false;
                    _this.clearBuyFields();
                    _this.getUserBaseCoinBalance();
                    _this.getUserPairCoinBalance();
                    _this.getOpenOrder();
                    _this.getOrderHistory();
                }
                else {
                    _this.buyBtnDisable = false;
                    _this.appC.showErrorAlert(succ.message);
                }
            }, function (err) {
                _this.spinner.hide();
                _this.buyBtnDisable = false;
                _this.appC.showErrorAlert(err.error.message);
            });
        }
    };
    /** Function for market sell */
    ExchangeComponent.prototype.marketSellFunc = function () {
        var _this = this;
        if (Number(this.marketSellObj.amount) > Number(this.userData.pairCoinBal)) {
            this.appC.showErrorAlert("You cannot sell more than is available in your BlockSwap Wallet.");
            return;
        }
        else {
            var data = {
                "orderSide": "SELL",
                "orderType": "MARKET",
                "quantity": Number(this.marketSellObj.amount),
                "symbol": this.currCoinPairObj.coin + "_" + this.currCoinSelectedObj.coin
            };
            // this.spinner.show();
            this.sellBtnDisable = true;
            this.server.postMethod(data, src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].order.version, "trade/place-order").subscribe(function (succ) {
                _this.spinner.hide();
                if (succ.status == 200) {
                    _this.appC.showSuccessAlert(succ.message);
                    _this.sellBtnDisable = false;
                    _this.clearSellFields();
                    _this.getUserBaseCoinBalance();
                    _this.getUserPairCoinBalance();
                    _this.getOpenOrder();
                    _this.getOrderHistory();
                }
                else {
                    _this.sellBtnDisable = false;
                    _this.appC.showErrorAlert(succ.message);
                }
            }, function (err) {
                _this.spinner.hide();
                _this.sellBtnDisable = false;
                _this.appC.showErrorAlert(err.error.message);
            });
        }
    };
    /** Finction for stop buy */
    ExchangeComponent.prototype.stopBuyFunc = function () {
        var _this = this;
        if (this.sellTotal > this.userData.baseCoinBal) {
            this.appC.showErrorAlert("You cannot buy more than is available in your BlockSwap Wallet.");
            return;
        }
        else {
            var data = {
                "limitPrice": Number(this.sLimitBuyObj.price),
                "orderSide": "BUY",
                "orderType": "STOP_LIMIT",
                "quantity": Number(this.sLimitBuyObj.amount),
                "stopPrice": Number(this.sLimitBuyObj.stop),
                "symbol": this.currCoinPairObj.coin + "_" + this.currCoinSelectedObj.coin
            };
            // this.spinner.show();
            this.buyBtnDisable = true;
            this.server.postMethod(data, src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].order.version, "trade/place-order").subscribe(function (succ) {
                _this.spinner.hide();
                if (succ.status == 200) {
                    _this.appC.showSuccessAlert(succ.message);
                    _this.buyBtnDisable = false;
                    _this.buyTotal = "0.000000";
                    _this.clearBuyFields();
                    _this.getUserBaseCoinBalance();
                    _this.getUserPairCoinBalance();
                    _this.getOpenOrder();
                    _this.getOrderHistory();
                }
                else {
                    _this.buyBtnDisable = false;
                    _this.appC.showErrorAlert(succ.message);
                }
            }, function (err) {
                _this.spinner.hide();
                _this.buyBtnDisable = false;
                _this.appC.showErrorAlert(err.error.message);
            });
        }
    };
    /** Finction for stop sell */
    ExchangeComponent.prototype.stopSellFunc = function () {
        var _this = this;
        if (this.sLimitSellObj.amount > this.userData.pairCoinBal) {
            this.appC.showErrorAlert("You cannot sell more than is available in your BlockSwap Wallet.");
            return;
        }
        else {
            var data = {
                "limitPrice": Number(this.sLimitSellObj.price),
                "orderSide": "SELL",
                "orderType": "STOP_LIMIT",
                "quantity": Number(this.sLimitSellObj.amount),
                "stopPrice": Number(this.sLimitSellObj.stop),
                "symbol": this.currCoinPairObj.coin + "_" + this.currCoinSelectedObj.coin
            };
            // this.spinner.show();
            this.sellBtnDisable = true;
            this.server.postMethod(data, src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].order.version, "trade/place-order").subscribe(function (succ) {
                _this.spinner.hide();
                if (succ.status == 200) {
                    _this.appC.showSuccessAlert(succ.message);
                    _this.sellBtnDisable = false;
                    _this.sellTotal = "0.000000";
                    _this.clearSellFields();
                    _this.getUserBaseCoinBalance();
                    _this.getUserPairCoinBalance();
                    _this.getOpenOrder();
                    _this.getOrderHistory();
                }
                else {
                    _this.sellBtnDisable = false;
                    _this.appC.showErrorAlert(succ.message);
                }
            }, function (err) {
                _this.spinner.hide();
                _this.sellBtnDisable = false;
                _this.appC.showErrorAlert(err.error.message);
            });
        }
    };
    /** Function for manage socket event */
    ExchangeComponent.prototype.updateSocketEvent = function (mode) {
        var data = {
            "request": "",
            "symbol": "",
            "depth": 50
        };
        switch (mode) {
            case 1:
                if (this.server.wsObj.readyState) {
                    /** Code for subscribe ticker data */
                    // data.request = "subscribeTicker";
                    // data.symbol = this.currCoinPairObj.coin+"_"+this.currCoinSelectedObj.coin;
                    // this.server.wsObj.send(JSON.stringify(data));
                    /** Code for subscribe order book data */
                    data.request = "subscribeOrderBook";
                    data.symbol = this.currCoinPairObj.coin + "_" + this.currCoinSelectedObj.coin;
                    this.server.wsObj.send(JSON.stringify(data));
                    /** Code for subscribe trade history data */
                    data.request = "subscribeTradeHistory";
                    data.symbol = this.currCoinPairObj.coin + "_" + this.currCoinSelectedObj.coin;
                    this.server.wsObj.send(JSON.stringify(data));
                }
                break;
            case 2:
                if (this.server.wsObj.readyState) {
                    /** Code for unsubscribe ticker data */
                    // data.request = "unsubscribeTicker";
                    // data.symbol = this.currCoinPairObj.coin+"_"+this.currCoinSelectedObj.coin;
                    // this.server.wsObj.send(JSON.stringify(data));
                    /** Code for unsubscribe order book data */
                    data.request = "unsubscribeOrderBook";
                    data.symbol = this.currCoinPairObj.coin + "_" + this.currCoinSelectedObj.coin;
                    this.server.wsObj.send(JSON.stringify(data));
                    /** Code for unsubscribe trade history data */
                    data.request = "unsubscribeTradeHistory";
                    data.symbol = this.currCoinPairObj.coin + "_" + this.currCoinSelectedObj.coin;
                    this.server.wsObj.send(JSON.stringify(data));
                }
                break;
        }
    };
    /** Function for change user coin balance  */
    ExchangeComponent.prototype.userBalCoinChange = function () {
        var _this = this;
        var ind = this.userBalArr.findIndex(function (obj) { return obj.coin == _this.balSecObj.coin; });
        if (ind != -1) {
            this.balSecObj.balance = this.userBalArr[ind].balance;
        }
    };
    /** Function for change string into number */
    ExchangeComponent.prototype.changeToNumberType = function (data) {
        return Number(data);
    };
    /** Function for get user's open order */
    ExchangeComponent.prototype.getOpenOrder = function () {
        var _this = this;
        this.server.getMethod(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].order.version, "trade/my-active-orders?symbol=" + this.currCoinPairObj.coin + "_" + this.currCoinSelectedObj.coin).subscribe(function (succ) {
            if (succ.status == 200) {
                _this.openOrderArr = [];
                succ.data.forEach(function (obj) {
                    _this.openOrderArr.push({
                        orderId: obj.orderId,
                        orderTime: new Date(obj.creationTime).getTime(),
                        pair: obj.instrument.replace("_", "/"),
                        orderType: obj.orderSide,
                        price: obj.limitPrice,
                        amount: obj.quantity,
                        happening: ((obj.quantity - obj.currentQuantity) / obj.quantity) * 100,
                        total: (obj.limitPrice * obj.quantity).toFixed(6),
                        click: false
                    });
                });
                _this.openOrderArr = _this.sortData(_this.openOrderArr);
            }
            else {
                _this.openOrderArr = [];
                _this.appC.showErrorAlert(succ.message);
            }
        }, function (err) {
            _this.openOrderArr = [];
            _this.appC.showErrorAlert(err.error.message);
        });
    };
    /** Function for get user's order history */
    ExchangeComponent.prototype.getOrderHistory = function () {
        var _this = this;
        this.server.getMethod(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].order.version, "trade/my-order-history?symbol=" + this.currCoinPairObj.coin + "_" + this.currCoinSelectedObj.coin).subscribe(function (succ) {
            if (succ.status == 200) {
                _this.orderHistoryArr = [];
                succ.data.forEach(function (obj) {
                    _this.orderHistoryArr.push({
                        orderTime: obj.orderStatus == "CANCELLED" ? new Date(obj.creationTime).getTime() : new Date(obj.lastExecutionTime).getTime(),
                        pair: obj.instrument.replace("_", "/"),
                        orderType: obj.orderSide,
                        price: obj.limitPrice,
                        amount: obj.quantity,
                        orderStatus: obj.orderStatus,
                        happening: ((obj.quantity - obj.currentQuantity) / obj.quantity) * 100,
                        total: obj.orderStatus == "CANCELLED" ? obj.limitPrice * obj.quantity : obj.quantity * obj.avgExecutionPrice,
                    });
                });
                _this.orderHistoryArr = _this.sortData(_this.orderHistoryArr);
            }
            else {
                _this.orderHistoryArr = [];
                _this.appC.showErrorAlert(succ.message);
            }
        }, function (err) {
            _this.orderHistoryArr = [];
            _this.appC.showErrorAlert(err.error.message);
        });
    };
    /** Function for sort data */
    ExchangeComponent.prototype.sortData = function (arr) {
        arr.sort(function (a, b) { return b.orderTime - a.orderTime; });
        return arr;
    };
    /** Function for cancel order */
    ExchangeComponent.prototype.orderCancelFunc = function (obj) {
        var _this = this;
        obj.click = true;
        var data = {
            "orderId": obj.orderId,
            "symbol": obj.pair.replace("/", "_")
        };
        this.spinner.show();
        this.server.postMethod(data, src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].order.version, "trade/cancel-order").subscribe(function (succ) {
            _this.spinner.hide();
            if (succ.status == 200) {
                _this.appC.showSuccessAlert("Order cancelled successfully.");
                _this.getOpenOrder();
                _this.getUserBaseCoinBalance();
                _this.getUserPairCoinBalance();
            }
            else {
                _this.appC.showErrorAlert(succ.message);
                obj.click = false;
            }
        }, function (err) {
            _this.spinner.hide();
            _this.appC.showErrorAlert(err.error.message);
            obj.click = false;
        });
    };
    /** Function for stop flicker on order book */
    ExchangeComponent.prototype.stopFlicker = function (type) {
        var _this = this;
        switch (type) {
            case 1:
                setTimeout(function () {
                    _this.buyOrderArr.forEach(function (obj) {
                        obj.flicker = false;
                    });
                }, 500);
                break;
            case 2:
                setTimeout(function () {
                    _this.sellOrderArr.forEach(function (obj) {
                        obj.flicker = false;
                    });
                }, 500);
                break;
        }
    };
    /** Function for depth chart timer */
    ExchangeComponent.prototype.startTimerForDepthChart = function () {
        var _this = this;
        this.depthChartTimerID = setInterval(function () {
            _this.drawDepthChart();
        }, 10000);
    };
    ExchangeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-exchange',
            template: __webpack_require__(/*! ./exchange.component.html */ "./src/app/modules/exchange/exchange/exchange.component.html"),
            styles: [__webpack_require__(/*! ./exchange.component.css */ "./src/app/modules/exchange/exchange/exchange.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_header_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], src_app_services_server_repo_service__WEBPACK_IMPORTED_MODULE_5__["ServerRepoService"], src_app_app_component__WEBPACK_IMPORTED_MODULE_6__["AppComponent"], ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_7__["CookieService"]])
    ], ExchangeComponent);
    return ExchangeComponent;
}());



/***/ }),

/***/ "./src/app/modules/header/header.module.ts":
/*!*************************************************!*\
  !*** ./src/app/modules/header/header.module.ts ***!
  \*************************************************/
/*! exports provided: HeaderModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderModule", function() { return HeaderModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _header_header_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./header/header.component */ "./src/app/modules/header/header/header.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");






var HeaderModule = /** @class */ (function () {
    function HeaderModule() {
    }
    HeaderModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_header_header_component__WEBPACK_IMPORTED_MODULE_3__["HeaderComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_router__WEBPACK_IMPORTED_MODULE_4__["RouterModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"]
            ]
        })
    ], HeaderModule);
    return HeaderModule;
}());



/***/ }),

/***/ "./src/app/modules/header/header/header.component.css":
/*!************************************************************!*\
  !*** ./src/app/modules/header/header/header.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvaGVhZGVyL2hlYWRlci9oZWFkZXIuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/header/header/header.component.html":
/*!*************************************************************!*\
  !*** ./src/app/modules/header/header/header.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<header class=\"header\">\r\n    <div class=\"container-fluid\">\r\n        <nav class=\"d-flex w-100 align-items-center\">\r\n            <!-- <div class=\"logo\">\r\n           <a href=\"index.html\">\r\n              <span class=\"web-view-logo\"><img src=\"images/logo.png\" alt=\"Logo\"/></span>\r\n              <span class=\"mob-view-logo\"><img src=\"images/logo.png\" alt=\"Logo\"/></span>\r\n           </a>\r\n           </div> -->\r\n            <div class=\"headSelectBox\">\r\n                <select class=\"form-control\" name=\"Pair\" [(ngModel)]=\"headerDataObj.pair\" (change)=\"pairChangeFunc()\">\r\n                    <option *ngFor=\"let data of pairArr\" [value]=\"data.value\">{{data.pair}}</option>\r\n                </select>\r\n            </div>\r\n            <div class=\"menu\" id=\"menubox\">\r\n                <span class=\"close-menu\" id=\"menuClose\"></span>\r\n                <ul class=\"onHoverDropdown dropDownStyle nav-menu-list\">\r\n                    <li class=\"dropdown\"><span>Current Price:&nbsp;</span><strong>{{headerDataObj.curr_price}} {{headerDataObj.baseCoin}}</strong></li>\r\n                    <li class=\"dropdown\"><span>24h Highest:&nbsp;</span><strong>{{headerDataObj.high_price}} {{headerDataObj.baseCoin}}</strong></li>\r\n                    <li class=\"dropdown\"><span>24h Lowest:&nbsp;</span><strong>{{headerDataObj.low_price}} {{headerDataObj.baseCoin}}</strong></li>\r\n                    <li class=\"dropdown\"><span>24h Average:&nbsp;</span><strong>{{headerDataObj.avg_price}} {{headerDataObj.baseCoin}}</strong></li>\r\n                    <li class=\"dropdown\"><span>24h Volume:&nbsp;</span><strong>{{headerDataObj.volume}} {{headerDataObj.exeCoin}}</strong></li>\r\n                </ul>\r\n            </div>\r\n            <ul class=\"userActivityInfo\" *ngIf=\"loginStatus\">\r\n                <li class=\"dropdown\"><a href=\"javascript:void(0);\" (click)=\"goToPageFunc(4)\"><i class=\"fas fa-cog\"></i></a></li>\r\n                <li class=\"dropdown\"><a href=\"javascript:void(0);\" (click)=\"goToPageFunc(5)\"><i class=\"fas fa-envelope\"></i></a></li>\r\n                <li class=\"dropdown\"><a href=\"javascript:void(0);\" (click)=\"goToPageFunc(6)\"><i class=\"fas fa-user\"></i></a></li>\r\n            </ul>\r\n            <label class=\"toggleSwitch\">\r\n                <input type=\"checkbox\" [(ngModel)]=\"headerObj.mode\" (change)=\"modeChangeFunc()\">\r\n                <span class=\"slider round\"></span>\r\n            </label>\r\n            <div class=\"loginBox\" *ngIf=\"!loginStatus\">\r\n                <a href=\"javascript:void(0);\" class=\"btn btnHeader\" (click)=\"goToPageFunc(1)\">Login</a>\r\n                <a href=\"javascript:void(0);\" class=\"btn btnHeader\" (click)=\"goToPageFunc(2)\">Sign Up</a>\r\n            </div>\r\n            <div class=\"loginBox\" *ngIf=\"loginStatus\">\r\n                <a href=\"javascript:void(0);\" class=\"btn btnHeader\" (click)=\"goToPageFunc(3)\">Logout</a>\r\n                <!-- <a href=\"javascript:void(0);\" class=\"btn btnHeader\">Support</a> -->\r\n                <span class=\"demo_sec\">DEMO</span>\r\n            </div>\r\n            <a href=\"javascript:;\" class=\"mob-menu\" id=\"menuShow\">\r\n                <span class=\"menu-bar\"></span>\r\n            </a>\r\n        </nav>\r\n    </div>\r\n</header>\r\n<router-outlet></router-outlet>\r\n<footer>\r\n    <div class=\"container-fluid\">\r\n        <div class=\"footerBlocks\">\r\n            <ul class=\"footerGridList\">\r\n                <li class=\"gridOrder1\">\r\n                    <div class=\"footerMenuBox\">\r\n                        <h4>Work with us</h4>\r\n                        <ul class=\"footerMenu\">\r\n                            <li><a>Open Positions</a></li>\r\n                            <li><a>Contact our Human Resources Department</a></li>\r\n                        </ul>\r\n                    </div>\r\n                </li>\r\n                <li class=\"gridOrder2\">\r\n                    <div class=\"footerMenuBox\">\r\n                        <h4>Get Listed</h4>\r\n                        <ul class=\"footerMenu\">\r\n                            <li><a>Contact our Listing department</a></li>\r\n                            <li><a>Check our Listing Policy</a></li>\r\n                        </ul>\r\n                    </div>\r\n                </li>\r\n                <li class=\"gridOrder3\">\r\n                    <div class=\"footerMenuBox\">\r\n                        <h4>Support</h4>\r\n                        <ul class=\"footerMenu\">\r\n                            <li><a>Contact Support</a></li>\r\n                            <li><a>Support Resources</a></li>\r\n                        </ul>\r\n                    </div>\r\n                </li>\r\n                <li class=\"gridOrder4\">\r\n                    <div class=\"footerMenuBox\">\r\n                        <h4>About Us</h4>\r\n                        <ul class=\"footerMenu\">\r\n                            <li><a>Contact Us</a></li>\r\n                            <li><a>Cookie Policy</a></li>\r\n                            <li><a>Privacy Policy</a></li>\r\n                        </ul>\r\n                    </div>\r\n                </li>\r\n                <li class=\"gridOrder5\">\r\n                    <div class=\"footerMenuBox\">\r\n                        <h4>News</h4>\r\n                        <ul class=\"footerMenu\">\r\n                            <li><a>Press Release</a></li>\r\n                            <li><a>Twitter</a></li>\r\n                            <li><a>Telegram</a></li>\r\n                        </ul>\r\n                    </div>\r\n                </li>\r\n            </ul>\r\n            <div class=\"footerAddressBlock\" style=\"align-items: normal;\">\r\n                <div class=\"footerMenuBox\">\r\n                    <h4>Exchange Info</h4>\r\n                    <ul class=\"footerMenu\">\r\n                        <!-- <li><span>Server time:</span>2018.11.20 10:56 UTC</li> -->\r\n                        <!-- <li><span>Current Users Online:</span>5270</li> -->\r\n                        <li>&copy; Bithood, LLC, 2018 - Boston, Ma, USA</li>\r\n                    </ul>\r\n                </div>\r\n                <div class=\"footLogo\">\r\n                    <img class=\"dayModeImg\" src=\"assets/images/logo.png\" />\r\n                    <img class=\"nightModeImg\" src=\"assets/images/logo3.png\" />\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</footer>"

/***/ }),

/***/ "./src/app/modules/header/header/header.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/modules/header/header/header.component.ts ***!
  \***********************************************************/
/*! exports provided: HeaderComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeaderComponent", function() { return HeaderComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/app.component */ "./src/app/app.component.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var src_app_services_server_repo_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/app/services/server-repo.service */ "./src/app/services/server-repo.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");








var HeaderComponent = /** @class */ (function () {
    function HeaderComponent(router, appC, renderer, cookieService, server) {
        var _this = this;
        this.router = router;
        this.appC = appC;
        this.renderer = renderer;
        this.cookieService = cookieService;
        this.server = server;
        this.headerObj = { mode: false };
        this.loginStatus = false;
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_5__["Subject"]();
        this.pairArr = [];
        this.headerDataObj = { pair: "", baseCoin: "", exeCoin: "", curr_price: "0.0000", high_price: "0.0000", low_price: "0.0000", avg_price: "0.0000", volume: "0.0000" };
        this.server.fireToChild().subscribe(function (msg) {
            switch (msg.text) {
                case "liqConnected":
                    if (_this.headerDataObj.pair) {
                        _this.updateSocketEvent(2);
                        _this.updateSocketEvent(1);
                    }
                    break;
            }
        });
        /** Listener for web socket connection */
        var self = this;
        this.server.wsObj.addEventListener('message', function (event) {
            var data = JSON.parse(event.data);
            if (data.data) {
                switch (data.responseType) {
                    case "tickerUpdate":
                        self.headerDataObj.curr_price = data.data.lastPrice ? Number(data.data.lastPrice).toFixed(4) : "0.0000";
                        self.headerDataObj.volume = data.data.totalVolume ? Number(data.data.totalVolume).toFixed(4) : "0.0000";
                        self.headerDataObj.high_price = data.data.highest24HourPrice ? Number(data.data.highest24HourPrice).toFixed(4) : "0.0000";
                        self.headerDataObj.low_price = data.data.lowest24HourPrice ? Number(data.data.lowest24HourPrice).toFixed(4) : "0.0000";
                        self.headerDataObj.avg_price = ((Number(data.data.highest24HourPrice ? data.data.highest24HourPrice : "0") + Number(data.data.lowest24HourPrice ? data.data.lowest24HourPrice : "0")) / 2).toFixed(4);
                        break;
                }
            }
        });
        /** Listener for liquidity socket connection */
        /*this.server.liqWSObj.addEventListener('message', function (event) {
            let data = JSON.parse(event.data);
            if(data.params) {
                switch(data.method) {
                    case "ticker":
                        self.headerDataObj.curr_price = data.params.last;
                        self.headerDataObj.high_price = data.params.high;
                        self.headerDataObj.low_price = data.params.low;
                        self.headerDataObj.avg_price = ((Number(data.params.high) + Number(data.params.low)) / 2).toString();
                        self.headerDataObj.volume = data.params.volume;
                        break;
                }
            }
            if(data.error) {
                if(data.error.code == 2001) {
                    self.headerDataObj.curr_price = "0.0000";
                    self.headerDataObj.high_price = "0.0000";
                    self.headerDataObj.low_price = "0.0000";
                    self.headerDataObj.avg_price = "0.0000";
                    self.headerDataObj.volume = "0.0000";
                }
            }
        });*/
    }
    HeaderComponent.prototype.ngOnInit = function () {
        this.checkLogin();
        this.getCoinPairList();
    };
    HeaderComponent.prototype.ngOnDestroy = function () {
        clearInterval(this.timerId);
        this.updateSocketEvent(2);
    };
    HeaderComponent.prototype.fireToChild = function () {
        return this.subject.asObservable();
    };
    /** Function for check login status */
    HeaderComponent.prototype.checkLogin = function () {
        if (this.cookieService.get("token")) {
            this.loginStatus = true;
        }
        else {
            this.loginStatus = false;
        }
    };
    /** Function for navigationto pages */
    HeaderComponent.prototype.goToPageFunc = function (type) {
        switch (type) {
            case 1:
                // this.router.navigate(['login']);
                this.router.navigate(['signup']);
                break;
            case 2:
                this.router.navigate(['signup']);
                break;
            case 3:
                this.cookieService.delete("token");
                this.checkLogin();
                this.subject.next({ text: "logout" });
                this.router.navigate(['']);
                break;
            case 4:
                this.router.navigate(['setting']);
                break;
            case 5:
                this.router.navigate(['message']);
                break;
        }
    };
    /** Function for mode change */
    HeaderComponent.prototype.modeChangeFunc = function () {
        if (this.headerObj.mode) {
            this.renderer.addClass(document.body, 'nightMode');
        }
        else {
            this.renderer.removeClass(document.body, 'nightMode');
        }
        this.subject.next({ text: "modeChange" });
    };
    /** Function for get coin pair for header */
    HeaderComponent.prototype.getCoinPairList = function () {
        var _this = this;
        this.server.getMethod(src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].baseUrl + src_environments_environment__WEBPACK_IMPORTED_MODULE_7__["environment"].wallet.version, "wallet/coin/get-symbol-list").subscribe(function (succ) {
            if (succ.status == 200) {
                _this.pairArr = [];
                succ.data.forEach(function (obj) {
                    _this.pairArr.push({
                        baseCoin: obj.baseCoin,
                        executableCoin: obj.executableCoin,
                        pair: obj.executableCoin + "/" + obj.baseCoin,
                        value: obj.executableCoin + "_" + obj.baseCoin
                    });
                });
                if (_this.pairArr.length) {
                    _this.headerDataObj.pair = _this.pairArr[0].value;
                    _this.headerDataObj.baseCoin = _this.pairArr[0].baseCoin;
                    _this.headerDataObj.exeCoin = _this.pairArr[0].executableCoin;
                    // this.getCurrentPrice();
                    // this.startInterval();
                    _this.updateSocketEvent(1);
                }
            }
            else {
                _this.pairArr = [];
                _this.appC.showErrorAlert(succ.message);
            }
        }, function (err) {
            _this.pairArr = [];
            _this.appC.showErrorAlert(err.error.message);
        });
    };
    /** Function for pair change */
    HeaderComponent.prototype.pairChangeFunc = function () {
        clearInterval(this.timerId);
        this.updateSocketEvent(2);
        this.headerDataObj.baseCoin = this.headerDataObj.pair.split("_")[1];
        this.headerDataObj.exeCoin = this.headerDataObj.pair.split("_")[0];
        // this.getCurrentPrice();
        // this.startInterval();
        this.updateSocketEvent(1);
    };
    /** Function for get all price of selected coin pair */
    HeaderComponent.prototype.getCurrentPrice = function () {
        console.log("api call for get all price");
        // this.server.thirdPartyAPI("https://api.hitbtc.com/api/2/public/ticker/ETHBTC").subscribe((succ) => {
        //     console.log("Succ -> ",JSON.stringify(succ));
        // }, (err) => {
        //     console.log("Err -> ",JSON.stringify(err));
        // });
    };
    /** Function for get all price in some interval */
    HeaderComponent.prototype.startInterval = function () {
        // this.timerId = setInterval(() => {
        //     this.getCurrentPrice();
        // }, 10000);
    };
    /** Function for manage socket event */
    HeaderComponent.prototype.updateSocketEvent = function (mode) {
        var data = {
            "request": "",
            "symbol": ""
        };
        switch (mode) {
            case 1:
                data.request = "subscribeTicker";
                data.symbol = this.headerDataObj.pair;
                this.server.wsObj.send(JSON.stringify(data));
                break;
            case 2:
                data.request = "unsubscribeTicker";
                data.symbol = this.headerDataObj.pair;
                this.server.wsObj.send(JSON.stringify(data));
                break;
        }
        /*let data = {
            "method": "",
            "params": {
                "symbol": this.headerDataObj.pair.replace("_",""),
                "limit": ""
            },
            "id": "BlockSwap"
        }
        switch(mode) {
            case 1:
                if(this.server.liqWSObj.readyState) {
                    data.method = "subscribeTicker";
                    this.server.liqWSObj.send(JSON.stringify(data));
                }
                break;
            case 2:
                if(this.server.liqWSObj.readyState) {
                    data.method = "unsubscribeTicker";
                    this.server.liqWSObj.send(JSON.stringify(data));
                }
                break;
        }*/
    };
    HeaderComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-header',
            template: __webpack_require__(/*! ./header.component.html */ "./src/app/modules/header/header/header.component.html"),
            styles: [__webpack_require__(/*! ./header.component.css */ "./src/app/modules/header/header/header.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], src_app_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _angular_core__WEBPACK_IMPORTED_MODULE_1__["Renderer2"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_4__["CookieService"], src_app_services_server_repo_service__WEBPACK_IMPORTED_MODULE_6__["ServerRepoService"]])
    ], HeaderComponent);
    return HeaderComponent;
}());



/***/ }),

/***/ "./src/app/modules/home/home.module.ts":
/*!*********************************************!*\
  !*** ./src/app/modules/home/home.module.ts ***!
  \*********************************************/
/*! exports provided: HomeModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeModule", function() { return HomeModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _home_home_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./home/home.component */ "./src/app/modules/home/home/home.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_modules_overlay_overlay_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/modules/overlay/overlay.module */ "./src/app/modules/overlay/overlay.module.ts");






var HomeModule = /** @class */ (function () {
    function HomeModule() {
    }
    HomeModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_home_home_component__WEBPACK_IMPORTED_MODULE_3__["HomeComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                src_app_modules_overlay_overlay_module__WEBPACK_IMPORTED_MODULE_5__["OverlayModule"]
            ]
        })
    ], HomeModule);
    return HomeModule;
}());



/***/ }),

/***/ "./src/app/modules/home/home/home.component.css":
/*!******************************************************!*\
  !*** ./src/app/modules/home/home/home.component.css ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvaG9tZS9ob21lL2hvbWUuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/home/home/home.component.html":
/*!*******************************************************!*\
  !*** ./src/app/modules/home/home/home.component.html ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"mainContent mainContentBgImg\">\r\n    <app-overlay *ngIf=\"loginStatus\"></app-overlay>\r\n    <section class=\"commonSectionStyle\" [ngClass]=\"{'pt0':loginStatus}\">\r\n        <div class=\"container\">\r\n            <div class=\"sectionHead text-center\">\r\n                <h2 class=\"blackColor\">Secure and fast digital assets trading,<br> margin and OTC platform</h2>\r\n            </div>\r\n            <div class=\"text-center mb30\" *ngIf=\"!loginStatus\">\r\n                <a href=\"javascript:void(0);\" class=\"btn btnBlue btnSm max-WT-130 btnCircular weight500\" (click)=\"goToPage(1)\">Join the Platform</a>\r\n            </div>\r\n            <div class=\"globalBox center-box max-WT-1000\">\r\n                <div class=\"globalBoxHead\"><span class=\"title\">Market</span></div>\r\n                <div class=\"globolBoxBody p0\">\r\n                    <div class=\"mb30 p15\">\r\n                        <select class=\"countryDropdown\" name=\"Coin\" [(ngModel)]=\"coinListObj.coin\">\r\n                            <option *ngFor=\"let data of coinArr\" [value]=\"data.coin\">{{data.coin}}</option>\r\n                        </select>\r\n                    </div>\r\n\r\n                    <div class=\"table-responsive\">\r\n                        <table class=\"table globalTable1 tableAlignMiddle tableCenter tableWidth800\">\r\n                            <thead>\r\n                                <tr>\r\n                                    <th>Coin</th>\r\n                                    <th>Price</th>\r\n                                    <th>24 High</th>\r\n                                    <th>24 Low</th>\r\n                                    <th>24 Volume</th>\r\n                                    <th class=\"statusCell\"></th>\r\n                                </tr>\r\n                            </thead>\r\n                            <tbody>\r\n                                <tr *ngFor=\"let data of coinPairArr\" class=\"pointer_cls\" (click)=\"selectPair(data)\">\r\n                                    <td [ngClass]=\"{'flickData':data.flicker}\"><span class=\"btn btnBlue btnSm minWidth80\" [ngClass]=\"{'btnDarkBlue':data.selected}\">{{data.pair}}</span></td>\r\n                                    <td [ngClass]=\"{'flickData':data.flicker}\">{{data.price}} {{data.baseCoin}}</td>\r\n                                    <td [ngClass]=\"{'flickData':data.flicker}\">{{data.high}} {{data.baseCoin}}</td>\r\n                                    <td [ngClass]=\"{'flickData':data.flicker}\">{{data.low}} {{data.baseCoin}}</td>\r\n                                    <td [ngClass]=\"{'flickData':data.flicker}\">{{data.volume}} {{data.exeCoin}}</td>\r\n                                    <td [ngClass]=\"{'flickData':data.flicker}\"><img src=\"assets/images/high.png\" /></td>\r\n                                </tr>\r\n                                <!-- <tr>\r\n                                    <td><span class=\"btn btnBlue btnSm minWidth80\">BTC/USD</span></td>\r\n                                    <td>0.000000</td>\r\n                                    <td>0.000000</td>\r\n                                    <td>0.000000</td>\r\n                                    <td>0.000000</td>\r\n                                    <td><img src=\"assets/images/low.png\" /></td>\r\n                                </tr> -->\r\n                            </tbody>\r\n                        </table>\r\n                    </div>\r\n\r\n                    <div class=\"paginationBtn\">\r\n                        <span class=\"fas fa-plus\"></span>\r\n                        <span class=\"fas fa-minus\"></span>\r\n                    </div>\r\n\r\n                </div>\r\n            </div>\r\n\r\n            <div class=\"center-box  max-WT-800\">\r\n                <div class=\"chartSlider commonSliderStyle\">\r\n                    <div class=\"slideItem\">\r\n                        <div class=\"chartSlideBox\">\r\n                            <h2>{{sliderObj.price}} {{sliderObj.base}}</h2>\r\n                            <p>Price</p>\r\n                            <div class=\"chartSlide\">\r\n                                <img src=\"assets/images/small-chart.png\" />\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <!-- slideItem End -->\r\n                    <div class=\"slideItem\">\r\n                        <div class=\"chartSlideBox\">\r\n                            <h2>{{sliderObj.high}} {{sliderObj.base}}</h2>\r\n                            <p>24h Highest</p>\r\n                            <div class=\"chartSlide\">\r\n                                <img src=\"assets/images/small-chart.png\" />\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <!-- slideItem End -->\r\n                    <div class=\"slideItem\">\r\n                        <div class=\"chartSlideBox\">\r\n                            <h2>{{sliderObj.low}} {{sliderObj.base}}</h2>\r\n                            <p>24h Lowest</p>\r\n                            <div class=\"chartSlide\">\r\n                                <img src=\"assets/images/small-chart.png\" />\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <!-- slideItem End -->\r\n                    <div class=\"slideItem\">\r\n                        <div class=\"chartSlideBox\">\r\n                            <h2>{{sliderObj.volume}} {{sliderObj.exe}}</h2>\r\n                            <p>24h Volume</p>\r\n                            <div class=\"chartSlide\">\r\n                                <img src=\"assets/images/small-chart.png\" />\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                    <!-- slideItem End -->\r\n                </div>\r\n            </div>\r\n\r\n        </div>\r\n    </section>\r\n</main>"

/***/ }),

/***/ "./src/app/modules/home/home/home.component.ts":
/*!*****************************************************!*\
  !*** ./src/app/modules/home/home/home.component.ts ***!
  \*****************************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_app_modules_header_header_header_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/modules/header/header/header.component */ "./src/app/modules/header/header/header.component.ts");
/* harmony import */ var src_app_services_server_repo_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/services/server-repo.service */ "./src/app/services/server-repo.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var src_app_app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/app.component */ "./src/app/app.component.ts");








var HomeComponent = /** @class */ (function () {
    function HomeComponent(router, cookieService, header, server, appC) {
        var _this = this;
        this.router = router;
        this.cookieService = cookieService;
        this.header = header;
        this.server = server;
        this.appC = appC;
        this.loginStatus = false;
        this.coinListObj = { coin: "" };
        this.coinArr = [];
        this.coinPairArr = [];
        this.sliderObj = { base: "", exe: "", price: "", high: "", low: "", volume: "" };
        this.header.fireToChild().subscribe(function (msg) {
            msg.text == "logout" ? _this.checkLoginStatus() : "";
        });
        var self = this;
        /** Listener for socket connection */
        this.server.wsObj.addEventListener('message', function (event) {
            var data = JSON.parse(event.data);
            if (data.data) {
                switch (data.responseType) {
                    case "tickerUpdate":
                        self.sliderObj.price = data.data.lastPrice ? Number(data.data.lastPrice).toFixed(4) : "0.0000";
                        self.sliderObj.volume = data.data.totalVolume ? Number(data.data.totalVolume).toFixed(4) : "0.0000";
                        self.sliderObj.high = data.data.highest24HourPrice ? Number(data.data.highest24HourPrice).toFixed(4) : "0.0000";
                        self.sliderObj.low = data.data.lowest24HourPrice ? Number(data.data.lowest24HourPrice).toFixed(4) : "0.0000";
                        var pairArr = self.coinPairArr.filter(function (obj) { return obj.pair.replace("/", "_") == data.symbol; });
                        if (pairArr.length) {
                            if (pairArr[0].price != Number(data.data.lastPrice).toFixed(4)) {
                                pairArr[0].flicker = true;
                                self.stopFlicker();
                            }
                            pairArr[0].price = data.data.lastPrice ? Number(data.data.lastPrice).toFixed(4) : "0.0000";
                            pairArr[0].high = data.data.highest24HourPrice ? Number(data.data.highest24HourPrice).toFixed(4) : "0.0000";
                            pairArr[0].low = data.data.lowest24HourPrice ? Number(data.data.lowest24HourPrice).toFixed(4) : "0.0000";
                            pairArr[0].volume = data.data.totalVolume ? Number(data.data.totalVolume).toFixed(4) : "0.0000";
                        }
                        break;
                }
            }
        });
        /** Listener for liquidity socket connection */
        /*this.server.liqWSObj.addEventListener('message', function (event) {
            let data = JSON.parse(event.data);
            if(data.params) {
                switch(data.method) {
                    case "ticker":
                        self.sliderObj.price = data.params.last;
                        self.sliderObj.high = data.params.high;
                        self.sliderObj.low = data.params.low;
                        self.sliderObj.volume = data.params.volume;

                        let pairArr = self.coinPairArr.filter(obj => obj.pair.replace("/","") == data.params.symbol);
                        if(pairArr.length) {
                            pairArr[0].price = data.params.last;
                            pairArr[0].high = data.params.high;
                            pairArr[0].low = data.params.low;
                            pairArr[0].volume = data.params.volume;
                            pairArr[0].flicker = true;
                            self.stopFlicker();
                        }
                        break;
                }
            }
            if(data.error) {
                if(data.error.code == 2001) {
                    self.sliderObj.price = "0.0000";
                    self.sliderObj.high = "0.0000";
                    self.sliderObj.low = "0.0000";
                    self.sliderObj.volume = "0.0000";
                }
            }
        });*/
    }
    HomeComponent.prototype.ngOnInit = function () {
        window.scrollTo(0, 0);
        this.setSlickContent();
        this.checkLoginStatus();
        this.getCoinList();
    };
    /** Function for set slick content */
    HomeComponent.prototype.setSlickContent = function () {
        $('.chartSlider').slick({
            dots: false,
            arrows: false,
            centerMode: true,
            centerPadding: '10px',
            slidesToShow: 3,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 2500,
            responsive: [{
                    breakpoint: 768,
                    settings: {
                        arrows: false,
                        centerMode: true,
                        slidesToShow: 3
                    }
                }, {
                    breakpoint: 480,
                    settings: {
                        arrows: false,
                        centerMode: true,
                        /*   centerPadding: '40px', */
                        slidesToShow: 1
                    }
                }]
        });
    };
    /** Function to check login status */
    HomeComponent.prototype.checkLoginStatus = function () {
        if (this.cookieService.get("token")) {
            this.loginStatus = true;
        }
        else {
            this.loginStatus = false;
        }
    };
    /** Function for navigate to page */
    HomeComponent.prototype.goToPage = function (type) {
        switch (type) {
            case 1:
                this.router.navigate(['signup']);
                break;
        }
    };
    /** Function for get coin list */
    HomeComponent.prototype.getCoinList = function () {
        var _this = this;
        this.server.getMethod(src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].baseUrl + src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].wallet.version, "wallet/coin/get-symbol-list").subscribe(function (succ) {
            // console.log("succ -> ", JSON.stringify(succ));
            if (succ.status == 200) {
                _this.coinArr = [];
                _this.coinPairArr = [];
                succ.data.forEach(function (obj) {
                    _this.coinArr.push({
                        coin: obj.baseCoin
                    });
                    _this.coinPairArr.push({
                        baseCoin: obj.baseCoin,
                        exeCoin: obj.executableCoin,
                        pair: obj.executableCoin + "/" + obj.baseCoin,
                        price: "0.0000",
                        high: "0.0000",
                        low: "0.0000",
                        volume: "0.0000",
                        selected: false,
                        flicker: false
                    });
                });
                if (_this.coinArr.length) {
                    _this.coinListObj.coin = _this.coinArr[0].coin;
                }
                if (_this.coinPairArr.length) {
                    _this.coinPairArr[0].selected = true;
                    _this.sliderObj.base = _this.coinPairArr[0].baseCoin;
                    _this.sliderObj.exe = _this.coinPairArr[0].exeCoin;
                    _this.sliderObj.price = _this.coinPairArr[0].price;
                    _this.sliderObj.high = _this.coinPairArr[0].high;
                    _this.sliderObj.low = _this.coinPairArr[0].low;
                    _this.sliderObj.volume = _this.coinPairArr[0].volume;
                }
            }
            else {
                _this.coinArr = [];
                _this.coinPairArr = [];
                _this.appC.showErrorAlert(succ.message);
            }
        }, function (err) {
            _this.appC.showErrorAlert(err.error.message);
        });
    };
    /** Function for select pair */
    HomeComponent.prototype.selectPair = function (data) {
        data.selected = true;
        this.sliderObj.base = data.baseCoin;
        this.sliderObj.exe = data.exeCoin;
        this.sliderObj.price = data.price;
        this.sliderObj.high = data.high;
        this.sliderObj.low = data.low;
        this.sliderObj.volume = data.volume;
        this.coinPairArr.forEach(function (obj) {
            if (data.exeCoin != obj.exeCoin) {
                obj.selected = false;
            }
        });
        if (this.cookieService.get("token")) {
            this.router.navigate(['exchange']);
        }
    };
    HomeComponent.prototype.stopFlicker = function () {
        var _this = this;
        setTimeout(function () {
            _this.coinPairArr.forEach(function (obj) {
                obj.flicker = false;
            });
        }, 500);
    };
    HomeComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-home',
            template: __webpack_require__(/*! ./home.component.html */ "./src/app/modules/home/home/home.component.html"),
            styles: [__webpack_require__(/*! ./home.component.css */ "./src/app/modules/home/home/home.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_2__["CookieService"], src_app_modules_header_header_header_component__WEBPACK_IMPORTED_MODULE_4__["HeaderComponent"], src_app_services_server_repo_service__WEBPACK_IMPORTED_MODULE_5__["ServerRepoService"], src_app_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "./src/app/modules/login/login.module.ts":
/*!***********************************************!*\
  !*** ./src/app/modules/login/login.module.ts ***!
  \***********************************************/
/*! exports provided: LoginModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginModule", function() { return LoginModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/modules/login/login/login.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var LoginModule = /** @class */ (function () {
    function LoginModule() {
    }
    LoginModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]
            ]
        })
    ], LoginModule);
    return LoginModule;
}());



/***/ }),

/***/ "./src/app/modules/login/login/login.component.css":
/*!*********************************************************!*\
  !*** ./src/app/modules/login/login/login.component.css ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbG9naW4vbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/login/login/login.component.html":
/*!**********************************************************!*\
  !*** ./src/app/modules/login/login/login.component.html ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"mainContent mainContentBgImg\">\r\n    <section class=\"commonSectionStyle\">\r\n        <div class=\"container-fluid\">\r\n            <div class=\"globalBox center-box max-WT-600\">\r\n                <div class=\"globalBoxHead\">\r\n                    <span class=\"title\">Login</span>\r\n                    <span class=\"title\" style=\"margin-left: 10px; background: #ff0000;\">DEMO</span>\r\n                </div>\r\n                <div class=\"globolBoxBody\">\r\n                    <div class=\"sectionHead\">\r\n                        <h2>Welcome back on Blockswap</h2>\r\n                        <!-- <p>Insert your Login information to access yuor account and the trading session.</p> -->\r\n                    </div>\r\n                    <!-- <form class=\"mb0\">\r\n                        <div class=\"formBox\">\r\n                            <div class=\"form-group row\">\r\n                                <label class=\"form-label d-flex col-md-3 mb0 align-items-center text-uppercase\">Email</label>\r\n                                <div class=\"col-md-9\">\r\n                                    <input type=\"email\" class=\"form-control\" name=\"Email\" [(ngModel)]=\"loginObj.email\" autocomplete=\"off\" maxlength=\"30\" />\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"form-group row mb30\">\r\n                                <label class=\"form-label d-flex  col-md-3 mb0 align-items-center text-uppercase\">Password</label>\r\n                                <div class=\"col-md-9\">\r\n                                    <input type=\"password\" class=\"form-control\" name=\"Password\" [(ngModel)]=\"loginObj.password\" autocomplete=\"off\" maxlength=\"30\" />\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"formActionBtn text-center\">\r\n                                <button class=\"btn btnBlue minHeight40 minWidth120\" (click)=\"loginFunc()\">Login</button>\r\n                            </div>\r\n                        </div>\r\n                    </form> -->\r\n\r\n                    <div class=\"globolBoxBody\">\r\n                        <div class=\"sectionHead\">\r\n                            <div class=\"alert alert-info text-center\">\r\n                                <strong>Please wait we are preparing the service for you...</strong>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"msgIconBox pageNotFound infoIcon\">\r\n                            <span class=\"msgIcon\"><i class=\"fa fa-exclamation mt15\" aria-hidden=\"true\"></i></span>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </section>\r\n</main>"

/***/ }),

/***/ "./src/app/modules/login/login/login.component.ts":
/*!********************************************************!*\
  !*** ./src/app/modules/login/login/login.component.ts ***!
  \********************************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var src_app_app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _header_header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../header/header/header.component */ "./src/app/modules/header/header/header.component.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");
/* harmony import */ var src_app_services_server_repo_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! src/app/services/server-repo.service */ "./src/app/services/server-repo.service.ts");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");









var LoginComponent = /** @class */ (function () {
    function LoginComponent(router, spinner, appC, header, cookieService, service) {
        this.router = router;
        this.spinner = spinner;
        this.appC = appC;
        this.header = header;
        this.cookieService = cookieService;
        this.service = service;
        this.loginObj = { email: "", password: "" };
        this.emailRegex = (/^[A-Z0-9_-]+([\.][A-Z0-9_-]+)*@[A-Z0-9-]+(\.[a-zA-Z]{2,4})+$/i);
        this.token = "";
    }
    LoginComponent.prototype.ngOnInit = function () {
        window.scrollTo(0, 0);
        this.checkAutoFilled();
    };
    LoginComponent.prototype.ngOnDestroy = function () {
        this.service.autoFilled = false;
        this.service.autoFilledObj.email = "";
        this.service.autoFilledObj.password = "";
    };
    /** Function for check auto filled data */
    LoginComponent.prototype.checkAutoFilled = function () {
        var _this = this;
        if (this.service.autoFilled) {
            setTimeout(function () {
                _this.appC.showInfoAlert("Please wait we are preparing the service for you.");
                setTimeout(function () {
                    _this.loginObj.email = _this.service.autoFilledObj.email;
                    _this.loginObj.password = _this.service.autoFilledObj.password;
                    _this.loginFunc();
                }, 3000);
            }, 3000);
        }
    };
    /** Function for login */
    LoginComponent.prototype.loginFunc = function () {
        var _this = this;
        if (this.loginObj.email.trim().length == 0) {
            this.appC.showErrorAlert("Please enter your email address.");
            return;
        }
        else if (!this.emailRegex.test(this.loginObj.email)) {
            this.appC.showErrorAlert("Please enter valid email address.");
            return;
        }
        else if (this.loginObj.password.trim().length == 0) {
            this.appC.showErrorAlert("Please enter your password.");
            return;
        }
        else {
            var data = {
                "email": this.loginObj.email,
                "password": this.loginObj.password
            };
            this.spinner.show();
            this.service.postMethod(data, src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].baseUrl + src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].auth.version, "auth").subscribe(function (succ) {
                _this.spinner.hide();
                if (succ.status == 200) {
                    _this.cookieService.set("token", succ.data.token);
                    _this.getUserDetails();
                }
                else {
                    _this.appC.showErrorAlert(succ.message);
                }
            }, function (err) {
                _this.spinner.hide();
                _this.appC.showErrorAlert(err.error.message);
            });
        }
    };
    /** Function for get user details */
    LoginComponent.prototype.getUserDetails = function () {
        var _this = this;
        this.service.getMethod(src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].baseUrl + src_environments_environment__WEBPACK_IMPORTED_MODULE_8__["environment"].user.version, "user/my-account").subscribe(function (succ) {
            if (succ.status == 200) {
                _this.cookieService.set("userId", succ.data.userId);
                _this.header.checkLogin();
                _this.router.navigate(['exchange']);
            }
            else {
                _this.cookieService.delete("token");
                _this.appC.showErrorAlert(succ.message);
            }
        }, function (err) {
            _this.cookieService.delete("token");
            _this.appC.showErrorAlert(err.error.message);
        });
    };
    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/modules/login/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/modules/login/login/login.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"], src_app_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _header_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"], src_app_services_server_repo_service__WEBPACK_IMPORTED_MODULE_7__["ServerRepoService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/modules/message/message.module.ts":
/*!***************************************************!*\
  !*** ./src/app/modules/message/message.module.ts ***!
  \***************************************************/
/*! exports provided: MessageModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageModule", function() { return MessageModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _message_message_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./message/message.component */ "./src/app/modules/message/message/message.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_modules_overlay_overlay_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/modules/overlay/overlay.module */ "./src/app/modules/overlay/overlay.module.ts");






var MessageModule = /** @class */ (function () {
    function MessageModule() {
    }
    MessageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_message_message_component__WEBPACK_IMPORTED_MODULE_3__["MessageComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                src_app_modules_overlay_overlay_module__WEBPACK_IMPORTED_MODULE_5__["OverlayModule"]
            ]
        })
    ], MessageModule);
    return MessageModule;
}());



/***/ }),

/***/ "./src/app/modules/message/message/message.component.css":
/*!***************************************************************!*\
  !*** ./src/app/modules/message/message/message.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvbWVzc2FnZS9tZXNzYWdlL21lc3NhZ2UuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/message/message/message.component.html":
/*!****************************************************************!*\
  !*** ./src/app/modules/message/message/message.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"mainContent\">\r\n    <app-overlay></app-overlay>\r\n    <section class=\"commonSectionStyle pt0\">\r\n        <div class=\"container\">\r\n            <div class=\"globalBox center-box max-WT-1000\">\r\n                <div class=\"globalBoxHead\"><span class=\"title\">Messages</span></div>\r\n                <div class=\"globolBoxBody\">\r\n                    <div class=\"filterSearchbox d-flex align-items-center\">\r\n                        <div class=\"leftSearchBox d-flex align-items-center formBox\">\r\n                            <label>Search</label>\r\n                            <div class=\"serachBox\">\r\n                                <input type=\"text\" class=\"form-control radius10\" placeholder=\"\" />\r\n                                <i class=\"fas fa-search\"></i>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"rightSearchBox\">\r\n                            <button class=\"btn btnRed btnSm radius6 \">Delete</button>\r\n                        </div>\r\n                    </div>\r\n                    <ul class=\"msgList\">\r\n                        <li>\r\n                            <label class=\"checkbox-design\">\r\n                                <input type=\"checkbox\">\r\n                                <span></span>\r\n                            </label>\r\n                            <span class=\"circleIcon\"></span>\r\n                            <div class=\"msgInfo\">\r\n                                <h6>Incoming Deposit detect: Check more</h6>\r\n                                <p>00.00.0000 00:00</p>\r\n                            </div>\r\n                            <button class=\"btn btnBlue btnSm radius6 \">Read Message</button>\r\n                        </li>\r\n                        <li>\r\n                            <label class=\"checkbox-design\">\r\n                                <input type=\"checkbox\">\r\n                                <span></span>\r\n                            </label>\r\n                            <span class=\"circleIcon\"></span>\r\n                            <div class=\"msgInfo\">\r\n                                <h6>Bug that allowed double spend is fixed</h6>\r\n                                <p>00.00.0000 00:00</p>\r\n                            </div>\r\n                            <button class=\"btn btnBlue btnSm radius6 \">Read Message</button>\r\n                        </li>\r\n                        <li>\r\n                            <label class=\"checkbox-design\">\r\n                                <input type=\"checkbox\">\r\n                                <span></span>\r\n                            </label>\r\n                            <span class=\"circleIcon\"></span>\r\n                            <div class=\"msgInfo\">\r\n                                <h6>Update on August 11th hardfork</h6>\r\n                                <p>00.00.0000 00:00</p>\r\n                            </div>\r\n                            <button class=\"btn btnBlue btnSm radius6 \">Read Message</button>\r\n                        </li>\r\n                        <li>\r\n                            <label class=\"checkbox-design\">\r\n                                <input type=\"checkbox\">\r\n                                <span></span>\r\n                            </label>\r\n                            <span class=\"circleIcon\"></span>\r\n                            <div class=\"msgInfo\">\r\n                                <h6>Invitation to Blockswap first Hackaton</h6>\r\n                                <p>00.00.0000 00:00</p>\r\n                            </div>\r\n                            <button class=\"btn btnBlue btnSm radius6 \">Read Message</button>\r\n                        </li>\r\n\r\n                        <li>\r\n                            <label class=\"checkbox-design\">\r\n                                <input type=\"checkbox\">\r\n                                <span></span>\r\n                            </label>\r\n                            <span class=\"circleIcon\"></span>\r\n                            <div class=\"msgInfo\">\r\n                                <h6>Airdrop for the XXX Holder</h6>\r\n                                <p>00.00.0000 00:00</p>\r\n                            </div>\r\n                            <button class=\"btn btnDarkBlue btnSm radius6 \">Read</button>\r\n                        </li>\r\n\r\n                        <li>\r\n                            <label class=\"checkbox-design\">\r\n                                <input type=\"checkbox\">\r\n                                <span></span>\r\n                            </label>\r\n                            <span class=\"circleIcon\"></span>\r\n                            <div class=\"msgInfo\">\r\n                                <h6>New listing on Blackswap. Check the full list</h6>\r\n                                <p>00.00.0000 00:00</p>\r\n                            </div>\r\n                            <button class=\"btn btnDarkBlue btnSm radius6 \">Read</button>\r\n                        </li>\r\n\r\n                    </ul>\r\n                    <div class=\"paginationBtn mb0\">\r\n                        <span class=\"fas fa-plus\"></span>\r\n                        <span class=\"fas fa-minus\"></span>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </section>\r\n</main>"

/***/ }),

/***/ "./src/app/modules/message/message/message.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/modules/message/message/message.component.ts ***!
  \**************************************************************/
/*! exports provided: MessageComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "MessageComponent", function() { return MessageComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var MessageComponent = /** @class */ (function () {
    function MessageComponent() {
    }
    MessageComponent.prototype.ngOnInit = function () {
    };
    MessageComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-message',
            template: __webpack_require__(/*! ./message.component.html */ "./src/app/modules/message/message/message.component.html"),
            styles: [__webpack_require__(/*! ./message.component.css */ "./src/app/modules/message/message/message.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], MessageComponent);
    return MessageComponent;
}());



/***/ }),

/***/ "./src/app/modules/overlay/overlay.module.ts":
/*!***************************************************!*\
  !*** ./src/app/modules/overlay/overlay.module.ts ***!
  \***************************************************/
/*! exports provided: OverlayModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverlayModule", function() { return OverlayModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _overlay_overlay_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./overlay/overlay.component */ "./src/app/modules/overlay/overlay/overlay.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");





var OverlayModule = /** @class */ (function () {
    function OverlayModule() {
    }
    OverlayModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_overlay_overlay_component__WEBPACK_IMPORTED_MODULE_3__["OverlayComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"]
            ],
            exports: [_overlay_overlay_component__WEBPACK_IMPORTED_MODULE_3__["OverlayComponent"]]
        })
    ], OverlayModule);
    return OverlayModule;
}());



/***/ }),

/***/ "./src/app/modules/overlay/overlay/overlay.component.css":
/*!***************************************************************!*\
  !*** ./src/app/modules/overlay/overlay/overlay.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvb3ZlcmxheS9vdmVybGF5L292ZXJsYXkuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/overlay/overlay/overlay.component.html":
/*!****************************************************************!*\
  !*** ./src/app/modules/overlay/overlay/overlay.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<section class=\"overlaySection\">\r\n    <div class=\"overlayBox\">\r\n        <div class=\"overlayBtn pointer_cls\" (click)=\"openOverlay()\"><span></span></div>\r\n        <div class=\"overlayBoxBody\">\r\n            <div class=\"overlayLogo\"><img src=\"assets/images/logo3.png\" /></div>\r\n            <ul class=\"sideMenu\">\r\n                <li [ngClass]=\"{'active':currBtn=='home'}\" (click)=\"goToPage(6)\"><a href=\"javascript:void(0);\">Home</a></li>\r\n                <li [ngClass]=\"{'active':currBtn=='market'}\" (click)=\"goToPage(1)\"><a href=\"javascript:void(0);\">Market</a></li>\r\n                <!-- <li [ngClass]=\"{'active':currBtn=='about'}\" (click)=\"goToPage(2)\"><a href=\"javascript:void(0);\">About</a></li>\r\n                <li class=\"divider\" [ngClass]=\"{'active':currBtn=='deposit'}\" (click)=\"goToPage(3)\"><a href=\"javascript:void(0);\">Deposit</a></li>\r\n                <li [ngClass]=\"{'active':currBtn=='withdraw'}\" (click)=\"goToPage(4)\"><a href=\"javascript:void(0);\">Withdraw</a></li>\r\n                <li [ngClass]=\"{'active':currBtn=='suggestion'}\" (click)=\"goToPage(5)\"><a href=\"javascript:void(0);\">Suggestion</a></li> -->\r\n            </ul>\r\n            <!-- <div class=\"globalBox\">\r\n                <div class=\"globalBoxHead\"><span class=\"title\">Troll Box</span></div>\r\n                <div class=\"globolBoxBody\">\r\n                </div>\r\n            </div> -->\r\n        </div>\r\n    </div>\r\n</section>"

/***/ }),

/***/ "./src/app/modules/overlay/overlay/overlay.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/modules/overlay/overlay/overlay.component.ts ***!
  \**************************************************************/
/*! exports provided: OverlayComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OverlayComponent", function() { return OverlayComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var src_app_app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/app.component */ "./src/app/app.component.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _header_header_header_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../header/header/header.component */ "./src/app/modules/header/header/header.component.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");







var OverlayComponent = /** @class */ (function () {
    function OverlayComponent(router, spinner, appC, header, cookieService) {
        this.router = router;
        this.spinner = spinner;
        this.appC = appC;
        this.header = header;
        this.cookieService = cookieService;
        this.currBtn = "";
    }
    OverlayComponent.prototype.ngOnInit = function () {
        // console.log("over lay called");
        var splitArr = window.location.href.split('/');
        var url = splitArr[splitArr.length - 1];
        this.setCurrButton(url);
    };
    /** Function for set current active button */
    OverlayComponent.prototype.setCurrButton = function (type) {
        switch (type) {
            case "exchange":
                this.currBtn = "market";
                break;
            case "about":
                this.currBtn = "about";
                break;
            case "wallet_deposit":
                this.currBtn = "deposit";
                break;
            case "wallet_withdraw":
                this.currBtn = "withdraw";
                break;
            case "suggestion":
                this.currBtn = "suggestion";
                break;
            default:
                this.currBtn = "home";
        }
    };
    /** Function for overlay click */
    OverlayComponent.prototype.openOverlay = function () {
        $(".overlayBox").toggleClass("animate");
    };
    /** Function for navigate to pages */
    OverlayComponent.prototype.goToPage = function (type) {
        switch (type) {
            case 1:
                this.currBtn = "market";
                this.router.navigate(['exchange']);
                break;
            case 2:
                this.currBtn = "about";
                this.router.navigate(['about']);
                break;
            case 3:
                this.currBtn = "deposit";
                this.router.navigate(['wallet_deposit']);
                break;
            case 4:
                this.currBtn = "withdraw";
                this.router.navigate(['wallet_withdraw']);
                break;
            case 5:
                this.currBtn = "suggestion";
                this.router.navigate(['suggestion']);
                break;
            case 6:
                this.currBtn = "home";
                this.router.navigate(['']);
                break;
        }
    };
    OverlayComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-overlay',
            template: __webpack_require__(/*! ./overlay.component.html */ "./src/app/modules/overlay/overlay/overlay.component.html"),
            styles: [__webpack_require__(/*! ./overlay.component.css */ "./src/app/modules/overlay/overlay/overlay.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_4__["Router"], ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"], src_app_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], _header_header_header_component__WEBPACK_IMPORTED_MODULE_5__["HeaderComponent"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"]])
    ], OverlayComponent);
    return OverlayComponent;
}());



/***/ }),

/***/ "./src/app/modules/pagenotfound/pagenotfound.module.ts":
/*!*************************************************************!*\
  !*** ./src/app/modules/pagenotfound/pagenotfound.module.ts ***!
  \*************************************************************/
/*! exports provided: PagenotfoundModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagenotfoundModule", function() { return PagenotfoundModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pagenotfound/pagenotfound.component */ "./src/app/modules/pagenotfound/pagenotfound/pagenotfound.component.ts");




var PagenotfoundModule = /** @class */ (function () {
    function PagenotfoundModule() {
    }
    PagenotfoundModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_pagenotfound_pagenotfound_component__WEBPACK_IMPORTED_MODULE_3__["PagenotfoundComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
            ]
        })
    ], PagenotfoundModule);
    return PagenotfoundModule;
}());



/***/ }),

/***/ "./src/app/modules/pagenotfound/pagenotfound/pagenotfound.component.css":
/*!******************************************************************************!*\
  !*** ./src/app/modules/pagenotfound/pagenotfound/pagenotfound.component.css ***!
  \******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcGFnZW5vdGZvdW5kL3BhZ2Vub3Rmb3VuZC9wYWdlbm90Zm91bmQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/pagenotfound/pagenotfound/pagenotfound.component.html":
/*!*******************************************************************************!*\
  !*** ./src/app/modules/pagenotfound/pagenotfound/pagenotfound.component.html ***!
  \*******************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"mainContent\">\n    <section class=\"commonSectionStyle\">\n        <div class=\"container-fluid\">\n            <div class=\"globalBox center-box max-WT-600\">\n                <div class=\"globolBoxBody\">\n                    <div class=\"sectionHead\">\n                        <h2 class=\"page_nt_found_lbl\">Page not found!!!</h2>\n                    </div>\n                    <div class=\"msgIconBox pageNotFound\">\n                        <span class=\"msgIcon\"><i class=\"fa fa-exclamation mt15\" aria-hidden=\"true\"></i></span>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </section>\n</main>"

/***/ }),

/***/ "./src/app/modules/pagenotfound/pagenotfound/pagenotfound.component.ts":
/*!*****************************************************************************!*\
  !*** ./src/app/modules/pagenotfound/pagenotfound/pagenotfound.component.ts ***!
  \*****************************************************************************/
/*! exports provided: PagenotfoundComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "PagenotfoundComponent", function() { return PagenotfoundComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var PagenotfoundComponent = /** @class */ (function () {
    function PagenotfoundComponent() {
    }
    PagenotfoundComponent.prototype.ngOnInit = function () {
    };
    PagenotfoundComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-pagenotfound',
            template: __webpack_require__(/*! ./pagenotfound.component.html */ "./src/app/modules/pagenotfound/pagenotfound/pagenotfound.component.html"),
            styles: [__webpack_require__(/*! ./pagenotfound.component.css */ "./src/app/modules/pagenotfound/pagenotfound/pagenotfound.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], PagenotfoundComponent);
    return PagenotfoundComponent;
}());



/***/ }),

/***/ "./src/app/modules/resendemail/resendemail.module.ts":
/*!***********************************************************!*\
  !*** ./src/app/modules/resendemail/resendemail.module.ts ***!
  \***********************************************************/
/*! exports provided: ResendemailModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResendemailModule", function() { return ResendemailModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _resendemail_resendemail_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./resendemail/resendemail.component */ "./src/app/modules/resendemail/resendemail/resendemail.component.ts");




var ResendemailModule = /** @class */ (function () {
    function ResendemailModule() {
    }
    ResendemailModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_resendemail_resendemail_component__WEBPACK_IMPORTED_MODULE_3__["ResendemailComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"]
            ]
        })
    ], ResendemailModule);
    return ResendemailModule;
}());



/***/ }),

/***/ "./src/app/modules/resendemail/resendemail/resendemail.component.css":
/*!***************************************************************************!*\
  !*** ./src/app/modules/resendemail/resendemail/resendemail.component.css ***!
  \***************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvcmVzZW5kZW1haWwvcmVzZW5kZW1haWwvcmVzZW5kZW1haWwuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/resendemail/resendemail/resendemail.component.html":
/*!****************************************************************************!*\
  !*** ./src/app/modules/resendemail/resendemail/resendemail.component.html ***!
  \****************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"mainContent\">\n    <section class=\"commonSectionStyle\">\n        <div class=\"container-fluid\">\n            <div class=\"globalBox center-box max-WT-600\">\n                <div class=\"globolBoxBody\">\n                    <div class=\"sectionHead\">\n                        <div class=\"alert alert-warning text-center\">\n                            <strong>Your email is not verified yet. Please click on resend button to receive verification link on your registered email address.</strong>\n                        </div>\n                    </div>\n                    <div class=\"msgIconBox pageNotFound\">\n                        <span class=\"msgIcon email_verify\">\n                          <img src=\"assets/images/activate_email.png\" alt=\"Email Image\" />\n                      </span>\n                    </div>\n                    <div class=\"formActionBtn text-center mt20\">\n                        <button class=\"btn btnDarkBlue minHeight40 minWidth120\" (click)=\"resendFunc()\">Resend</button>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </section>\n</main>"

/***/ }),

/***/ "./src/app/modules/resendemail/resendemail/resendemail.component.ts":
/*!**************************************************************************!*\
  !*** ./src/app/modules/resendemail/resendemail/resendemail.component.ts ***!
  \**************************************************************************/
/*! exports provided: ResendemailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ResendemailComponent", function() { return ResendemailComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var ResendemailComponent = /** @class */ (function () {
    function ResendemailComponent() {
    }
    ResendemailComponent.prototype.ngOnInit = function () {
    };
    /** Function for resend email */
    ResendemailComponent.prototype.resendFunc = function () {
    };
    ResendemailComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-resendemail',
            template: __webpack_require__(/*! ./resendemail.component.html */ "./src/app/modules/resendemail/resendemail/resendemail.component.html"),
            styles: [__webpack_require__(/*! ./resendemail.component.css */ "./src/app/modules/resendemail/resendemail/resendemail.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], ResendemailComponent);
    return ResendemailComponent;
}());



/***/ }),

/***/ "./src/app/modules/setting/setting.module.ts":
/*!***************************************************!*\
  !*** ./src/app/modules/setting/setting.module.ts ***!
  \***************************************************/
/*! exports provided: SettingModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingModule", function() { return SettingModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _setting_setting_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./setting/setting.component */ "./src/app/modules/setting/setting/setting.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_modules_overlay_overlay_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/modules/overlay/overlay.module */ "./src/app/modules/overlay/overlay.module.ts");






var SettingModule = /** @class */ (function () {
    function SettingModule() {
    }
    SettingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_setting_setting_component__WEBPACK_IMPORTED_MODULE_3__["SettingComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                src_app_modules_overlay_overlay_module__WEBPACK_IMPORTED_MODULE_5__["OverlayModule"]
            ]
        })
    ], SettingModule);
    return SettingModule;
}());



/***/ }),

/***/ "./src/app/modules/setting/setting/setting.component.css":
/*!***************************************************************!*\
  !*** ./src/app/modules/setting/setting/setting.component.css ***!
  \***************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2V0dGluZy9zZXR0aW5nL3NldHRpbmcuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/setting/setting/setting.component.html":
/*!****************************************************************!*\
  !*** ./src/app/modules/setting/setting/setting.component.html ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"mainContent\">\r\n    <app-overlay></app-overlay>\r\n    <section class=\"commonSectionStyle pt0\">\r\n        <div class=\"container\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-6\">\r\n                    <div class=\"globalBox\">\r\n                        <div class=\"globalBoxHead\"><span class=\"title\">Overall</span></div>\r\n                        <div class=\"globolBoxBody pl0 pr0\">\r\n                            <div class=\"innerBox max-WT-400 center-box\">\r\n                                <h3 class=\"innerHead\">Email me when:</h3>\r\n                                <ul class=\"emialList mb0\">\r\n                                    <li>\r\n                                        <label class=\"checkbox-design\">\r\n                                            <input type=\"checkbox\">\r\n                                            <span></span>I sent or receive digital currency\r\n                                        </label>\r\n                                    </li>\r\n                                    <li>\r\n                                        <label class=\"checkbox-design\">\r\n                                            <input type=\"checkbox\">\r\n                                            <span></span>Everytime log in\r\n                                        </label>\r\n                                    </li>\r\n                                    <li>\r\n                                        <label class=\"checkbox-design\">\r\n                                            <input type=\"checkbox\">\r\n                                            <span></span>There are recommended actions for my account\r\n                                        </label>\r\n                                    </li>\r\n                                </ul>\r\n                            </div>\r\n\r\n                            <ul class=\"overAllList flexList  alterNateList mt30 mb30\">\r\n                                <li>\r\n                                    <div class=\"listInfoLeft\">\r\n                                        <label>Main Currency</label>\r\n                                        <p>Choose the main unit you want to use</p>\r\n                                    </div>\r\n                                    <div class=\"listInfoRight\">\r\n                                        <select class=\"countryDropdown btnSm\">\r\n                                            <option>Dollor (USD)</option>\r\n                                        </select>\r\n                                    </div>\r\n                                </li>\r\n                                <li>\r\n                                    <div class=\"listInfoLeft\">\r\n                                        <label>Main Language</label>\r\n                                        <p>Choose the main language you want to use</p>\r\n                                    </div>\r\n                                    <div class=\"listInfoRight\">\r\n                                        <select class=\"countryDropdown btnSm\">\r\n                                            <option>English (ENG)</option>\r\n                                        </select>\r\n                                    </div>\r\n                                </li>\r\n                                <li>\r\n                                    <div class=\"listInfoLeft\">\r\n                                        <label>Time Zone</label>\r\n                                        <p>Set your relevant time zone</p>\r\n                                    </div>\r\n                                    <div class=\"listInfoRight\">\r\n                                        <select class=\"countryDropdown btnSm\">\r\n                                            <option>GMT (-1)</option>\r\n                                        </select>\r\n                                    </div>\r\n                                </li>\r\n                            </ul>\r\n\r\n                            <div class=\"innerBox max-WT-400 center-box\">\r\n                                <h3 class=\"innerHead\">Delete Account</h3>\r\n                                <p class=\"font12 weight600\">Withdraw all your funds please keep it mind this action is irreversible. Before the action is completed you have to confirm your login information.</p>\r\n                                <button class=\"btn btnDelete btnSm minWidth100\">Delete</button>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-6\">\r\n                    <div class=\"globalBox\">\r\n                        <div class=\"globalBoxHead\"><span class=\"title\">Payment</span></div>\r\n                        <div class=\"globolBoxBody pl0 pr0\">\r\n                            <div class=\"innerBox max-WT-400 center-box\">\r\n                                <h3 class=\"innerHead\">Bank Account</h3>\r\n                                <p class=\"font12 weight600\">Connect your card to withdraw or deposit money safely.</p>\r\n                            </div>\r\n                            <form class=\" mt30 accountForm\">\r\n                                <div class=\"formBox pl15 pr15 mb80\">\r\n                                    <div class=\"form-group row align-items-center\">\r\n                                        <label class=\"col-lg-3 mb0 weight600 font14\">CARD</label>\r\n                                        <div class=\"col-lg-9\">\r\n                                            <select class=\"countryDropdown btnSm\">\r\n                                                <option>VISA</option>\r\n                                            </select>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"form-group row align-items-center\">\r\n                                        <label class=\"col-lg-3 mb0 weight600 font14\">NUMBER</label>\r\n                                        <div class=\"col-lg-8 \">\r\n                                            <input type=\"text \" class=\"form-control smField font16 weight600 \" placeholder=\" \" />\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"form-group row align-items-center \">\r\n                                        <label class=\"col-lg-3 mb0 weight600 font14\">EXP.DATE</label>\r\n                                        <div class=\"col-lg-4 col-md-4\">\r\n                                            <input type=\"text\" class=\"form-control smField font16 weight600\" placeholder=\"\" />\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"form-group row align-items-center\">\r\n                                        <label class=\"col-lg-3 mb0 weight600 font14\">SEC.CODE</label>\r\n                                        <div class=\"col-lg-4 col-md-4 \">\r\n                                            <input type=\"text \" class=\"form-control smField font16 weight600 \" placeholder=\" \" />\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"form-group row align-items-center \">\r\n                                        <label class=\"col-lg-3 mb0 weight600 font14 \">OWNER NAME</label>\r\n                                        <div class=\"col-lg-8\">\r\n                                            <input type=\"text\" class=\"form-control smField font16 weight600\" placeholder=\"\" />\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <ul class=\"overAllList flexList  alterNateList mt30 mb30\">\r\n                                    <li>\r\n                                        <div class=\"listInfoLeft\">\r\n                                            <label>VISA - xxxx xxxx xxxx 0000</label>\r\n                                            <p>Connect your card to withdraw or deposit money safely</p>\r\n                                        </div>\r\n                                        <div class=\"listInfoRight\">\r\n                                            <button class=\"btn btnBlue btnSm minWidth100 weight500\" type=\"button\">Confirmed</button>\r\n                                        </div>\r\n                                    </li>\r\n                                    <li>\r\n                                        <span class=\"ml-auto addIcon\"><i class=\"fas fa-plus\"></i></span>\r\n                                    </li>\r\n                                </ul>\r\n                            </form>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </section>\r\n</main>"

/***/ }),

/***/ "./src/app/modules/setting/setting/setting.component.ts":
/*!**************************************************************!*\
  !*** ./src/app/modules/setting/setting/setting.component.ts ***!
  \**************************************************************/
/*! exports provided: SettingComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SettingComponent", function() { return SettingComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SettingComponent = /** @class */ (function () {
    function SettingComponent() {
    }
    SettingComponent.prototype.ngOnInit = function () {
    };
    SettingComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-setting',
            template: __webpack_require__(/*! ./setting.component.html */ "./src/app/modules/setting/setting/setting.component.html"),
            styles: [__webpack_require__(/*! ./setting.component.css */ "./src/app/modules/setting/setting/setting.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SettingComponent);
    return SettingComponent;
}());



/***/ }),

/***/ "./src/app/modules/signup/signup.module.ts":
/*!*************************************************!*\
  !*** ./src/app/modules/signup/signup.module.ts ***!
  \*************************************************/
/*! exports provided: SignupModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupModule", function() { return SignupModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _signup_signup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./signup/signup.component */ "./src/app/modules/signup/signup/signup.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var ng_recaptcha__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ng-recaptcha */ "./node_modules/ng-recaptcha/index.js");
/* harmony import */ var ng_recaptcha__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(ng_recaptcha__WEBPACK_IMPORTED_MODULE_5__);






var SignupModule = /** @class */ (function () {
    function SignupModule() {
    }
    SignupModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_signup_signup_component__WEBPACK_IMPORTED_MODULE_3__["SignupComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                ng_recaptcha__WEBPACK_IMPORTED_MODULE_5__["RecaptchaModule"]
            ]
        })
    ], SignupModule);
    return SignupModule;
}());



/***/ }),

/***/ "./src/app/modules/signup/signup/signup.component.css":
/*!************************************************************!*\
  !*** ./src/app/modules/signup/signup/signup.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc2lnbnVwL3NpZ251cC9zaWdudXAuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/signup/signup/signup.component.html":
/*!*************************************************************!*\
  !*** ./src/app/modules/signup/signup/signup.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"mainContent mainContentBgImg\">\r\n    <section class=\"commonSectionStyle\">\r\n        <div class=\"container-fluid\">\r\n            <div class=\"globalBox center-box max-WT-650\">\r\n                <div class=\"globalBoxHead\">\r\n                    <span class=\"title\">Sign Up</span>\r\n                    <span class=\"title\" style=\"margin-left: 10px; background: #ff0000;\">DEMO</span>\r\n                </div>\r\n                <div class=\"globolBoxBody\">\r\n                    <div class=\"sectionHead\">\r\n                        <h2>Welcome back on Blockswap</h2>\r\n                        <p><sup>*</sup> Your informations are strictly coinfidential and we will never reveal, share or sell them to any third parties. Read our <a href=\"javascript:void(0);\">Privacy Policy</a></p>\r\n                    </div>\r\n                    <!-- <form class=\"mb0\">\r\n                        <div class=\"formBox\">\r\n                            <div class=\"form-group row\">\r\n                                <label class=\"form-label d-flex col-md-3 mb0 align-items-center text-uppercase\">Email</label>\r\n                                <div class=\"col-md-9\">\r\n                                    <input type=\"text\" class=\"form-control\" name=\"Email\" [(ngModel)]=\"signupObj.email\" maxlength=\"30\" autocomplete=\"off\" />\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"form-group row\">\r\n                                <label class=\"form-label d-flex  col-md-3 mb0 align-items-center text-uppercase\">Password</label>\r\n                                <div class=\"col-md-9\">\r\n                                    <input type=\"password\" class=\"form-control\" name=\"Password\" [(ngModel)]=\"signupObj.password\" maxlength=\"8\" autocomplete=\"off\" />\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"form-group row\">\r\n                                <label class=\"form-label d-flex  col-md-3 mb0 align-items-center text-uppercase\">Confirm Password</label>\r\n                                <div class=\"col-md-9\">\r\n                                    <input type=\"password\" class=\"form-control\" name=\"Confirm Password\" [(ngModel)]=\"signupObj.cnfPassword\" maxlength=\"8\" autocomplete=\"off\" />\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"form-group row\">\r\n                                <label class=\"form-label d-flex  col-md-3 mb0 align-items-center text-uppercase\">State</label>\r\n                                <div class=\"col-md-9\">\r\n                                    <select class=\"countryDropdown\" name=\"State\" [(ngModel)]=\"signupObj.state\">\r\n                                        <option value=\"France\">France</option>\r\n                                    </select>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"row mb30 justify-content-end\">\r\n                                <div class=\"col-md-9\">\r\n                                    <div class=\"form-group captchaBox\">\r\n                                        <re-captcha (resolved)=\"resolved($event)\" siteKey=\"6LeXz28UAAAAANfq_oU9MrjwIb2UDh_v0C6heOaB\"></re-captcha>\r\n                                    </div>\r\n                                    <label class=\"checkbox-design mb15 w-100\">\r\n                                        <input type=\"checkbox\" name=\"PP\" [(ngModel)]=\"signupObj.ppCheckbox\"/>\r\n                                        <span></span>I agree to Blockswap Privacy Policy\r\n                                    </label>\r\n                                    <label class=\"checkbox-design mb15 w-100\">\r\n                                        <input type=\"checkbox\" name=\"TC\" [(ngModel)]=\"signupObj.tcCheckbox\"/>\r\n                                        <span></span>I agree to Blockswap Terms & Conditions\r\n                                    </label>\r\n                                    <label class=\"checkbox-design mb15 w-100\">\r\n                                        <input type=\"checkbox\" name=\"Responsbility\" [(ngModel)]=\"signupObj.responsCheckbox\"/>\r\n                                        <span></span>I take full responsibility for providing accurate personal data\r\n                                    </label>\r\n                                </div>\r\n                            </div>\r\n                            <div class=\"formActionBtn text-center\">\r\n                                <button class=\"btn btnBlue minHeight40 minWidth120\" (click)=\"signupFunc()\">Register</button>\r\n                            </div>\r\n                        </div>\r\n                    </form> -->\r\n                    <div class=\"globolBoxBody\">\r\n                        <div class=\"sectionHead\">\r\n                            <div class=\"alert alert-info text-center\">\r\n                                <strong>One moment we're making cool stuff happen...</strong>\r\n                            </div>\r\n                        </div>\r\n                        <div class=\"msgIconBox pageNotFound infoIcon\">\r\n                            <span class=\"msgIcon\"><i class=\"fa fa-exclamation mt15\" aria-hidden=\"true\"></i></span>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </section>\r\n</main>"

/***/ }),

/***/ "./src/app/modules/signup/signup/signup.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/modules/signup/signup/signup.component.ts ***!
  \***********************************************************/
/*! exports provided: SignupComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SignupComponent", function() { return SignupComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var src_app_app_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! src/app/app.component */ "./src/app/app.component.ts");
/* harmony import */ var src_app_services_server_repo_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/server-repo.service */ "./src/app/services/server-repo.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");







var SignupComponent = /** @class */ (function () {
    function SignupComponent(router, spinner, appC, service) {
        this.router = router;
        this.spinner = spinner;
        this.appC = appC;
        this.service = service;
        this.emailRegex = (/^[A-Z0-9_-]+([\.][A-Z0-9_-]+)*@[A-Z0-9-]+(\.[a-zA-Z]{2,4})+$/i);
        this.passRegex = (/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/i);
        this.signupObj = { email: "", password: "", cnfPassword: "", state: "France", recaptcha: "", ppCheckbox: false, tcCheckbox: false, responsCheckbox: false };
    }
    SignupComponent.prototype.ngOnInit = function () {
        window.scrollTo(0, 0);
        this.fillFields();
    };
    /** Function for auto fill of fields */
    SignupComponent.prototype.fillFields = function () {
        var _this = this;
        this.spinner.show();
        setTimeout(function () {
            _this.spinner.hide();
            // this.appC.showInfoAlert("One moment we're making cool stuff happen...");
            setTimeout(function () {
                _this.signupObj.email = (Math.floor(Math.random() * 90000) + 10000) + "blockswap@gmail.com";
                _this.signupObj.password = "qwerty@1";
                _this.signupObj.cnfPassword = "qwerty@1";
                _this.signupObj.ppCheckbox = true;
                _this.signupObj.tcCheckbox = true;
                _this.signupObj.responsCheckbox = true;
                _this.service.autoFilled = true;
                _this.service.autoFilledObj.email = _this.signupObj.email;
                _this.service.autoFilledObj.password = _this.signupObj.password;
                _this.signupFunc();
            }, 2000);
        }, 2000);
    };
    /** Function for google recaptcha click */
    SignupComponent.prototype.resolved = function (e) {
        if (e)
            this.signupObj.recaptcha = e;
        else {
            this.signupObj.recaptcha = "";
        }
    };
    /** Function for signup */
    SignupComponent.prototype.signupFunc = function () {
        var _this = this;
        if (this.signupObj.email.trim().length == 0) {
            this.appC.showErrorAlert("Please enter your email address.");
            return;
        }
        else if (!this.emailRegex.test(this.signupObj.email)) {
            this.appC.showErrorAlert("Please enter valid email address.");
            return;
        }
        else if (this.signupObj.password.trim().length == 0) {
            this.appC.showErrorAlert("Please enter your password.");
            return;
        }
        else if (!this.passRegex.test(this.signupObj.password)) {
            this.appC.showErrorAlert("Password must be 8 or more characters and it should contain at least one special character, one alphabet and one digit.");
            return;
        }
        else if (this.signupObj.cnfPassword.trim().length == 0) {
            this.appC.showErrorAlert("Please enter confirm password.");
            return;
        }
        else if (this.signupObj.password != this.signupObj.cnfPassword) {
            this.appC.showErrorAlert("Password doesn't match.");
            return;
        } /*else if(this.signupObj.recaptcha == "") {
            this.appC.showErrorAlert("Please check that you are not a robot.");
            return;
        }*/
        else if (!this.signupObj.ppCheckbox) {
            this.appC.showErrorAlert("Please accept blockswap privacy policy.");
            return;
        }
        else if (!this.signupObj.tcCheckbox) {
            this.appC.showErrorAlert("Please accept blockswap terms & conditions.");
            return;
        }
        else if (!this.signupObj.responsCheckbox) {
            this.appC.showErrorAlert("Please accept full responsbility checkbox.");
            return;
        }
        else {
            var data = {
                "email": this.signupObj.email,
                "password": this.signupObj.password,
                "country": this.signupObj.state,
                "roleStatus": "USER",
                "webUrl": src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].websiteUrl + "/emailVerify"
            };
            this.spinner.show();
            this.service.postMethod(data, src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].baseUrl + src_environments_environment__WEBPACK_IMPORTED_MODULE_6__["environment"].user.version, "user/signup").subscribe(function (succ) {
                _this.spinner.hide();
                if (succ.status == 200) {
                    _this.appC.showSuccessAlert("Your account created successfully. Now you will be redirect to login page.");
                    _this.router.navigate(['login']);
                }
                else {
                    _this.appC.showErrorAlert(succ.message);
                }
            }, function (err) {
                _this.spinner.hide();
                _this.appC.showErrorAlert(err.error.message);
            });
        }
    };
    SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-signup',
            template: __webpack_require__(/*! ./signup.component.html */ "./src/app/modules/signup/signup/signup.component.html"),
            styles: [__webpack_require__(/*! ./signup.component.css */ "./src/app/modules/signup/signup/signup.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"], ngx_spinner__WEBPACK_IMPORTED_MODULE_2__["NgxSpinnerService"], src_app_app_component__WEBPACK_IMPORTED_MODULE_3__["AppComponent"], src_app_services_server_repo_service__WEBPACK_IMPORTED_MODULE_4__["ServerRepoService"]])
    ], SignupComponent);
    return SignupComponent;
}());



/***/ }),

/***/ "./src/app/modules/suggestion/suggestion.module.ts":
/*!*********************************************************!*\
  !*** ./src/app/modules/suggestion/suggestion.module.ts ***!
  \*********************************************************/
/*! exports provided: SuggestionModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuggestionModule", function() { return SuggestionModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _suggestion_suggestion_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./suggestion/suggestion.component */ "./src/app/modules/suggestion/suggestion/suggestion.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_modules_overlay_overlay_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/modules/overlay/overlay.module */ "./src/app/modules/overlay/overlay.module.ts");






var SuggestionModule = /** @class */ (function () {
    function SuggestionModule() {
    }
    SuggestionModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_suggestion_suggestion_component__WEBPACK_IMPORTED_MODULE_3__["SuggestionComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                src_app_modules_overlay_overlay_module__WEBPACK_IMPORTED_MODULE_5__["OverlayModule"]
            ]
        })
    ], SuggestionModule);
    return SuggestionModule;
}());



/***/ }),

/***/ "./src/app/modules/suggestion/suggestion/suggestion.component.css":
/*!************************************************************************!*\
  !*** ./src/app/modules/suggestion/suggestion/suggestion.component.css ***!
  \************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvc3VnZ2VzdGlvbi9zdWdnZXN0aW9uL3N1Z2dlc3Rpb24uY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/suggestion/suggestion/suggestion.component.html":
/*!*************************************************************************!*\
  !*** ./src/app/modules/suggestion/suggestion/suggestion.component.html ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"mainContent\">\r\n    <app-overlay></app-overlay>\r\n    <section class=\"commonSectionStyle pt0\">\r\n        <div class=\"container-fluid\">\r\n            <div class=\"row\">\r\n                <div class=\"col-md-4\">\r\n                    <div class=\"globalBox\">\r\n                        <div class=\"globalBoxHead\"><span class=\"title\">Add suggestion</span></div>\r\n                        <div class=\"globolBoxBody pl15 pr15\">\r\n                            <form class=\"mb0\">\r\n                                <div class=\"formBox\">\r\n                                    <div class=\"form-group row align-items-center\">\r\n                                        <label class=\"col-md-3 mb0 weight600 font14\">Project Name</label>\r\n                                        <div class=\"col-md-9\">\r\n                                            <input type=\"text\" class=\"form-control  font16 weight600\" placeholder=\"\" />\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"form-group row\">\r\n                                        <label class=\"col-md-3 mb0 weight600 font14\">Project Info</label>\r\n                                        <div class=\"col-md-9 \">\r\n                                            <textarea class=\"form-control font16 weight600 minHeight100 \" placeholder=\" \"></textarea>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"form-group row \">\r\n                                        <label class=\"col-md-4 mb0 weight600 font14\">Upload Logo Images</label>\r\n                                        <div class=\"col-md-8 text-right \">\r\n                                            <button type=\"button \" class=\"btn btnBlue btnSm browseBtn max-WT-120 \">Upload<input type=\"file \"/></button>\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"form-group row align-items-center \">\r\n                                        <label class=\"col-md-3 mb0 weight600 font14\">Your Name</label>\r\n                                        <div class=\"col-md-9 \">\r\n                                            <input type=\"text \" class=\"form-control font16 weight600 \" placeholder=\" \" />\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"form-group row align-items-center \">\r\n                                        <label class=\"col-md-3 mb0 weight600 font14\">Your Phone</label>\r\n                                        <div class=\"col-md-9 \">\r\n                                            <input type=\"text \" class=\"form-control font16 weight600 \" placeholder=\" \" />\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"form-group row align-items-center mb30 \">\r\n                                        <label class=\"col-md-3 mb0 weight600 font14\">Your Email</label>\r\n                                        <div class=\"col-md-9 \">\r\n                                            <input type=\"email \" class=\"form-control font16 weight600 \" placeholder=\" \" />\r\n                                        </div>\r\n                                    </div>\r\n                                    <div class=\"form-group row align-items-center justify-content-end mb55\">\r\n                                        <div class=\"col-md-9 text-center \">\r\n                                            <p class=\"font13 weight600 \">Email and phone won't be displayed on screen <br>Read our <a href=\"javascript:void(0); \">Privacy Policy</a></p>\r\n                                            <button type=\"submit \" class=\"btn btnBlue minWidth120 weight500 \">Public Now</button>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                            </form>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"col-md-8\">\r\n                    <div class=\"globalBox \">\r\n                        <div class=\"globalBoxHead \"><span class=\"title \">Suggestions</span></div>\r\n                        <div class=\"globolBoxBody pl15 pr15 \">\r\n                            <div class=\"row \">\r\n                                <div class=\"col-lg-5 \">\r\n                                    <div class=\"d-flex align-items-center suggestActionBtn \">\r\n                                        <button class=\"btn btnBlueWhite minWidth80 radius8 \">New</button>\r\n                                        <button class=\"btn btnBlue minWidth80 ml7 mr7 radius8 \">Top</button>\r\n                                        <select class=\"countryDropdown btnBlueWhite radius8 \">\r\n                                            <option>Select</option>\r\n                                        </select>\r\n                                    </div>\r\n                                    <div class=\"aboutInfoBox d-flex align-items-center \">\r\n                                        <div class=\"w-100 \">\r\n                                            <h5>Please note:</h5>\r\n                                            <p class=\"mb15 \">The voting to add new tokens does not mean we will 100% add your token, This is to be used to give us a good idea at which tokens we should be adding but we will still be taking into consideration the token\r\n                                                quality, size of the project, technical team, and will be doing due diligence with each token we integrate.\r\n                                            </p>\r\n                                            <p class=\"mb0 \">Pre-list your ICO, or your project send us an email: <a href=\"mailto:contact@blockswap.com \">contact@blockswap.com</a></p>\r\n                                        </div>\r\n                                    </div>\r\n                                </div>\r\n                                <div class=\"col-lg-7 \">\r\n                                    <ul class=\"alterNateList suggestionList globalList flexList m0 \">\r\n                                        <li>\r\n                                            <div class=\"suggestionLeft \">\r\n                                                <label>Verge</label>\r\n                                                <p>189 Votes</p>\r\n                                            </div>\r\n                                            <div class=\"suggestionMid \">\r\n                                                <p>Suggested by coinhill (00/00/0000 00:00)</p>\r\n                                                <p>Upvoted: 00/00/0000 to 00/00/0000</p>\r\n                                            </div>\r\n                                            <div class=\"suggestionRight \">\r\n                                                <button class=\"btn btnBlue btnSm minWidth80 \">Approved</button>\r\n                                            </div>\r\n                                        </li>\r\n                                        <li>\r\n                                            <div class=\"suggestionLeft \">\r\n                                                <label>Ecos</label>\r\n                                                <p>122 Votes</p>\r\n                                            </div>\r\n                                            <div class=\"suggestionMid \">\r\n                                                <p>Suggested by coinhill (00/00/0000 00:00)</p>\r\n                                                <p>Upvoted: 00/00/0000 to 00/00/0000</p>\r\n                                            </div>\r\n                                            <div class=\"suggestionRight \">\r\n                                                <button class=\"btn btnBlue btnSm minWidth80 \">Approved</button>\r\n                                            </div>\r\n                                        </li>\r\n                                        <li>\r\n                                            <div class=\"suggestionLeft \">\r\n                                                <label>CoinX</label>\r\n                                                <p>27 Votes</p>\r\n                                            </div>\r\n                                            <div class=\"suggestionMid \">\r\n                                                <p>Suggested by coinhill (00/00/0000 00:00)</p>\r\n                                                <p>Upvoted: 00/00/0000 to 00/00/0000</p>\r\n                                            </div>\r\n                                            <div class=\"suggestionRight \">\r\n                                                <button class=\"btn btnBlue btnSm minWidth80 \">Approved</button>\r\n                                            </div>\r\n                                        </li>\r\n                                        <li>\r\n                                            <div class=\"suggestionLeft \">\r\n                                                <label>Nauta</label>\r\n                                                <p>18 Votes</p>\r\n                                            </div>\r\n                                            <div class=\"suggestionMid \">\r\n                                                <p>Suggested by coinhill (00/00/0000 00:00)</p>\r\n                                                <p>Upvoted: 00/00/0000 to 00/00/0000</p>\r\n                                            </div>\r\n                                            <div class=\"suggestionRight \">\r\n                                                <button class=\"btn btnWhite btnSm minWidth80 weight600 \">Vote Now</button>\r\n                                            </div>\r\n                                        </li>\r\n                                        <li>\r\n                                            <div class=\"suggestionLeft \">\r\n                                                <label>Ongo</label>\r\n                                                <p>13 Votes</p>\r\n                                            </div>\r\n                                            <div class=\"suggestionMid \">\r\n                                                <p>Suggested by coinhill (00/00/0000 00:00)</p>\r\n                                                <p>Upvoted: 00/00/0000 to 00/00/0000</p>\r\n                                            </div>\r\n                                            <div class=\"suggestionRight \">\r\n                                                <button class=\"btn btnWhite btnSm minWidth80 weight600 \">Vote Now</button>\r\n                                            </div>\r\n                                        </li>\r\n                                        <li>\r\n                                            <div class=\"suggestionLeft \">\r\n                                                <label>Neo</label>\r\n                                                <p>18 Votes</p>\r\n                                            </div>\r\n                                            <div class=\"suggestionMid \">\r\n                                                <p>Suggested by coinhill (00/00/0000 00:00)</p>\r\n                                                <p>Upvoted: 00/00/0000 to 00/00/0000</p>\r\n                                            </div>\r\n                                            <div class=\"suggestionRight \">\r\n                                                <button class=\"btn btnWhite btnSm minWidth80 weight600 \">Vote Now</button>\r\n                                            </div>\r\n                                        </li>\r\n\r\n                                    </ul>\r\n                                </div>\r\n                            </div>\r\n\r\n                            <div class=\"paginationBtn mb0 \">\r\n                                <span class=\"fas fa-plus \"></span>\r\n                                <span class=\"fas fa-minus \"></span>\r\n                            </div>\r\n\r\n                        </div>\r\n                    </div>\r\n\r\n                </div>\r\n            </div>\r\n        </div>\r\n    </section>\r\n</main>"

/***/ }),

/***/ "./src/app/modules/suggestion/suggestion/suggestion.component.ts":
/*!***********************************************************************!*\
  !*** ./src/app/modules/suggestion/suggestion/suggestion.component.ts ***!
  \***********************************************************************/
/*! exports provided: SuggestionComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SuggestionComponent", function() { return SuggestionComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");


var SuggestionComponent = /** @class */ (function () {
    function SuggestionComponent() {
    }
    SuggestionComponent.prototype.ngOnInit = function () {
    };
    SuggestionComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-suggestion',
            template: __webpack_require__(/*! ./suggestion.component.html */ "./src/app/modules/suggestion/suggestion/suggestion.component.html"),
            styles: [__webpack_require__(/*! ./suggestion.component.css */ "./src/app/modules/suggestion/suggestion/suggestion.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [])
    ], SuggestionComponent);
    return SuggestionComponent;
}());



/***/ }),

/***/ "./src/app/modules/wallet/wallet.module.ts":
/*!*************************************************!*\
  !*** ./src/app/modules/wallet/wallet.module.ts ***!
  \*************************************************/
/*! exports provided: WalletModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalletModule", function() { return WalletModule; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/fesm5/common.js");
/* harmony import */ var _wallet_wallet_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./wallet/wallet.component */ "./src/app/modules/wallet/wallet/wallet.component.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var src_app_modules_overlay_overlay_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/modules/overlay/overlay.module */ "./src/app/modules/overlay/overlay.module.ts");






var WalletModule = /** @class */ (function () {
    function WalletModule() {
    }
    WalletModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [_wallet_wallet_component__WEBPACK_IMPORTED_MODULE_3__["WalletComponent"]],
            imports: [
                _angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["ReactiveFormsModule"],
                _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                src_app_modules_overlay_overlay_module__WEBPACK_IMPORTED_MODULE_5__["OverlayModule"]
            ]
        })
    ], WalletModule);
    return WalletModule;
}());



/***/ }),

/***/ "./src/app/modules/wallet/wallet/wallet.component.css":
/*!************************************************************!*\
  !*** ./src/app/modules/wallet/wallet/wallet.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL21vZHVsZXMvd2FsbGV0L3dhbGxldC93YWxsZXQuY29tcG9uZW50LmNzcyJ9 */"

/***/ }),

/***/ "./src/app/modules/wallet/wallet/wallet.component.html":
/*!*************************************************************!*\
  !*** ./src/app/modules/wallet/wallet/wallet.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<main class=\"mainContent\">\r\n    <app-overlay></app-overlay>\r\n    <section class=\"commonSectionStyle pt0\">\r\n        <div class=\"container-fluid\">\r\n            <div class=\"depositRow d-flex flex-wrap\">\r\n                <div class=\"depositCol1\">\r\n                    <div class=\"globalBox\">\r\n                        <div class=\"globalBoxHead\"><span class=\"title\">History</span></div>\r\n                        <div class=\"globolBoxBody pl0 pr0\">\r\n                            <div class=\"table-responsive\">\r\n                                <table class=\"table tableAlignMiddle tableCenter globalTable1  depoHistoryTable mb0\">\r\n                                    <thead>\r\n                                        <tr>\r\n                                            <th><span class=\"gColor\">W</span>/<span class=\"bColor\">D</span></th>\r\n                                            <th>Date</th>\r\n                                            <th>Amount</th>\r\n                                            <th>Status</th>\r\n                                        </tr>\r\n                                    </thead>\r\n                                    <tbody>\r\n                                        <tr>\r\n                                            <td><img src=\"assets/images/d-icon.png\" class=\"hisDWIcon\" /></td>\r\n                                            <td>\r\n                                                <label>Nov 25</label>\r\n                                                <p>18-11-25 10:44:02</p>\r\n                                            </td>\r\n                                            <td>\r\n                                                <label class=\"coinValue\">00.00000000 BTC</label>\r\n                                            </td>\r\n                                            <td>\r\n                                                <span class=\"status bgYellow\"></span> Pending\r\n                                            </td>\r\n                                        </tr>\r\n                                        <tr>\r\n                                            <td><img src=\"assets/images/w-icon.png\" class=\"hisDWIcon\" /></td>\r\n                                            <td>\r\n                                                <label>Nov 22</label>\r\n                                                <p>18-11-25 10:44:02</p>\r\n                                            </td>\r\n                                            <td>\r\n                                                <label class=\"coinValue\">00.00000000 LTC</label>\r\n                                            </td>\r\n                                            <td>\r\n                                                <span class=\"status bgGreen\"></span> Confirmed\r\n                                            </td>\r\n                                        </tr>\r\n\r\n                                        <tr>\r\n                                            <td><img src=\"assets/images/d-icon.png\" class=\"hisDWIcon\" /></td>\r\n                                            <td>\r\n                                                <label>Nov 20</label>\r\n                                                <p>18-11-25 10:44:02</p>\r\n                                            </td>\r\n                                            <td>\r\n                                                <label class=\"coinValue\">00.00000000 XRP</label>\r\n                                            </td>\r\n                                            <td>\r\n                                                <span class=\"status bgGreen\"></span> Confirmed\r\n                                            </td>\r\n                                        </tr>\r\n\r\n                                        <tr>\r\n                                            <td><img src=\"assets/images/d-icon.png\" class=\"hisDWIcon\" /></td>\r\n                                            <td>\r\n                                                <label>Nov 11</label>\r\n                                                <p>18-11-25 10:44:02</p>\r\n                                            </td>\r\n                                            <td>\r\n                                                <label class=\"coinValue\">00.00000000 LTC</label>\r\n                                            </td>\r\n                                            <td>\r\n                                                <span class=\"status bgGreen\"></span> Confirmed\r\n                                            </td>\r\n                                        </tr>\r\n\r\n                                        <tr>\r\n                                            <td><img src=\"assets/images/w-icon.png\" class=\"hisDWIcon\" /></td>\r\n                                            <td>\r\n                                                <label>Nov 20</label>\r\n                                                <p>18-11-25 10:44:02</p>\r\n                                            </td>\r\n                                            <td>\r\n                                                <label class=\"coinValue\">00.00000000 XRP</label>\r\n                                            </td>\r\n                                            <td>\r\n                                                <span class=\"status bgGreen\"></span> Confirmed\r\n                                            </td>\r\n                                        </tr>\r\n                                        <tr>\r\n                                            <td><img src=\"assets/images/d-icon.png\" class=\"hisDWIcon\" /></td>\r\n                                            <td>\r\n                                                <label>Nov 11</label>\r\n                                                <p>18-11-25 10:44:02</p>\r\n                                            </td>\r\n                                            <td>\r\n                                                <label class=\"coinValue\">00.00000000 LTC</label>\r\n                                            </td>\r\n                                            <td>\r\n                                                <span class=\"status bgGreen\"></span> Confirmed\r\n                                            </td>\r\n                                        </tr>\r\n\r\n                                        <tr>\r\n                                            <td><img src=\"assets/images/w-icon.png\" class=\"hisDWIcon\" /></td>\r\n                                            <td>\r\n                                                <label>Nov 20</label>\r\n                                                <p>18-11-25 10:44:02</p>\r\n                                            </td>\r\n                                            <td>\r\n                                                <label class=\"coinValue\">00.00000000 XRP</label>\r\n                                            </td>\r\n                                            <td>\r\n                                                <span class=\"status bgGreen\"></span> Confirmed\r\n                                            </td>\r\n                                        </tr>\r\n                                        <tr>\r\n                                            <td><img src=\"assets/images/w-icon.png\" class=\"hisDWIcon\" /></td>\r\n                                            <td>\r\n                                                <label>Nov 20</label>\r\n                                                <p>18-11-25 10:44:02</p>\r\n                                            </td>\r\n                                            <td>\r\n                                                <label class=\"coinValue\">00.00000000 XRP</label>\r\n                                            </td>\r\n                                            <td>\r\n                                                <span class=\"status bgGreen\"></span> Confirmed\r\n                                            </td>\r\n                                        </tr>\r\n                                        <tr>\r\n                                            <td><img src=\"assets/images/d-icon.png\" class=\"hisDWIcon\" /></td>\r\n                                            <td>\r\n                                                <label>Nov 11</label>\r\n                                                <p>18-11-25 10:44:02</p>\r\n                                            </td>\r\n                                            <td>\r\n                                                <label class=\"coinValue\">00.00000000 LTC</label>\r\n                                            </td>\r\n                                            <td>\r\n                                                <span class=\"status bgGreen\"></span> Confirmed\r\n                                            </td>\r\n                                        </tr>\r\n\r\n\r\n\r\n                                    </tbody>\r\n                                </table>\r\n                            </div>\r\n                            <div class=\"paginationBtn mb0\">\r\n                                <span class=\"fas fa-plus\"></span>\r\n                                <span class=\"fas fa-minus\"></span>\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n                </div>\r\n                <div class=\"depositCol2\">\r\n\r\n                    <div class=\"globalBox\">\r\n                        <div class=\"globalBoxHead\"><span class=\"title\">Withdraw</span></div>\r\n                        <div class=\"globolBoxBody\">\r\n                            <div class=\"withdrawDepositeBox\">\r\n                                <div class=\"DepositeBoxHead\">\r\n                                    <h2>Withdraw<img src=\"assets/images/w-icon.png\"></h2>\r\n                                    <div class=\"availableDiv\">\r\n                                        <p>Available {{withdrawSecObj.coin}}</p>\r\n                                        <span>{{withdrawSecObj.balance}}</span>\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <form class=\"mb0\">\r\n                                    <div class=\"formBox\">\r\n                                        <div class=\"form-group row align-items-center mb30\">\r\n                                            <label class=\"col-md-4 mb0 weight600 font14\">Select coin</label>\r\n                                            <div class=\"col-md-8\">\r\n                                                <div class=\"d-flex align-items-center flex-wrap\">\r\n                                                    <select class=\"countryDropdown btnSm minWidth100\" name=\"Withdraw Coin\" [(ngModel)]=\"withdrawSecObj.coin\" (change)=\"withdrawCoinChangeFunc()\">\r\n                                                        <option *ngFor=\"let data of withdrawCoinArr\" [value]=\"data.coinShortName\">{{data.coinFullName}} ({{data.coinShortName}})</option>\r\n                                                    </select>\r\n                                                    <a href=\"javascript:void(0);\" class=\"ml-auto font13 \">Add description</a>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n\r\n                                        <div class=\"form-group row align-items-center mb30\">\r\n                                            <label class=\"col-md-4 mb0 weight600 font14\">Wallet Address</label>\r\n                                            <div class=\"col-md-8\">\r\n                                                <input type=\"text\" class=\"form-control smField font16 weight600\" name=\"Withdraw adress\" [(ngModel)]=\"withdrawSecObj.address\" autocomplete=\"off\" (keypress)=\"restrictSpace($event);\" />\r\n                                            </div>\r\n                                        </div>\r\n\r\n                                        <div class=\"form-group row align-items-center minHeight120\">\r\n                                            <label class=\"col-md-4 mb0 weight600 font14\">Amount ({{withdrawSecObj.coin}})</label>\r\n                                            <div class=\"col-md-4\">\r\n                                                <input type=\"text\" class=\"form-control smField font12 weight600 pr5 pl5\" name=\"Withdraw Amount\" [(ngModel)]=\"withdrawSecObj.amount\" autocomplete=\"off\" (keypress)=\"restrictSpace($event); restrictChar($event)\" (keyup)=\" restrictLength('wa')\" />\r\n                                            </div>\r\n                                            <label class=\"col-md-1 mb0 weight600 font14  pr0 pl0\">(Fee)</label>\r\n                                            <div class=\"col-md-3\">\r\n                                                <input type=\"text\" class=\"form-control smField font12 weight600 pr5 pl5\" name=\"Withdraw Fees\" [(ngModel)]=\"withdrawSecObj.fees\" readonly />\r\n                                            </div>\r\n                                        </div>\r\n\r\n                                        <div class=\"text-center max-WT-300 center-box\">\r\n                                            <label class=\"checkbox-design pl10 weight600 mb20\">\r\n                                                <input type=\"checkbox\" name=\"Accept Checkbox\" [(ngModel)]=\"withdrawSecObj.checkboxStatus\">\r\n                                                <span></span>I have read, understand and agreed to the conditions for withdraw auto processing.\r\n                                            </label>\r\n                                            <button class=\"btn btnGreen2 radius8 minWidth100\" (click)=\"submitWithdraw()\">Send</button>\r\n                                        </div>\r\n\r\n                                    </div>\r\n                                </form>\r\n\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                </div>\r\n\r\n                <div class=\"depositCol2\">\r\n\r\n                    <div class=\"globalBox\">\r\n                        <div class=\"globalBoxHead\"><span class=\"title\">Deposit</span></div>\r\n                        <div class=\"globolBoxBody\">\r\n                            <div class=\"withdrawDepositeBox\">\r\n                                <div class=\"DepositeBoxHead\">\r\n                                    <h2>Deposit<img src=\"assets/images/d-icon.png\"></h2>\r\n                                    <div class=\"availableDiv\">\r\n                                        <p>Available {{depositSecObj.coin}}</p>\r\n                                        <span>{{depositSecObj.balance}}</span>\r\n                                    </div>\r\n                                </div>\r\n\r\n                                <form class=\"mb0\">\r\n                                    <div class=\"formBox\">\r\n                                        <div class=\"form-group row align-items-center mb30\">\r\n                                            <label class=\"col-md-4 mb0 weight600 font14\">Select coin</label>\r\n                                            <div class=\"col-md-8\">\r\n                                                <div class=\"d-flex align-items-center flex-wrap\">\r\n                                                    <select class=\"countryDropdown btnSm minWidth100\" name=\"Deposit Coin\" [(ngModel)]=\"depositSecObj.coin\" (click)=\"depositCoinChangeFunc()\">\r\n                                                        <option *ngFor=\"let data of depositCoinArr\" [value]=\"data.coinShortName\">{{data.coinFullName}} ({{data.coinShortName}})</option>\r\n                                                    </select>\r\n                                                </div>\r\n                                            </div>\r\n                                        </div>\r\n\r\n                                        <div class=\"form-group row align-items-center mb30\">\r\n                                            <label class=\"col-md-4 mb0 weight600 font14\">Generated  Address</label>\r\n                                            <div class=\"col-md-8 formBox usdtField\">\r\n                                                <input type=\"text\" class=\"form-control smField font16 weight600 add-field pointer_cls\" name=\"Address\" [(ngModel)]=\"depositSecObj.address\" readonly (click)=\"copyToClipboard(depositSecObj.address)\">\r\n                                                <span class=\"copy-txt pointer_cls\" (click)=\"copyToClipboard(depositSecObj.address)\"><i class=\"fas fa-copy\"></i></span>\r\n                                            </div>\r\n                                        </div>\r\n\r\n                                        <div class=\"form-group mb30\">\r\n                                            <a href=\"javascript:void(0);\" class=\"font13\">Previous Address ></a>\r\n                                        </div>\r\n\r\n                                        <ul class=\"mb0 minHeight147\">\r\n                                            <li><a href=\"javascript:void(0);\" class=\"font13\">Why is my deposit unconfirmed? ></a></li>\r\n                                            <li><a href=\"javascript:void(0);\" class=\"font13\">Where is my deposit? ></a></li>\r\n                                            <li><a href=\"javascript:void(0);\" class=\"font13\">Why was I charged deposit fee? ></a></li>\r\n                                            <li><a href=\"javascript:void(0);\" class=\"font13\">Help with deposits ></a></li>\r\n                                        </ul>\r\n\r\n                                        <div class=\"text-center max-WT-300 center-box\">\r\n                                            <button class=\"btn btnDarkBlue radius8 minWidth100 weight500\" (click)=\"generateAddress()\">Generate</button>\r\n                                        </div>\r\n\r\n                                    </div>\r\n                                </form>\r\n\r\n                            </div>\r\n                        </div>\r\n                    </div>\r\n\r\n                </div>\r\n\r\n            </div>\r\n        </div>\r\n    </section>\r\n</main>"

/***/ }),

/***/ "./src/app/modules/wallet/wallet/wallet.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/modules/wallet/wallet/wallet.component.ts ***!
  \***********************************************************/
/*! exports provided: WalletComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "WalletComponent", function() { return WalletComponent; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var src_environments_environment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! src/environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var ngx_spinner__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-spinner */ "./node_modules/ngx-spinner/fesm5/ngx-spinner.js");
/* harmony import */ var src_app_services_server_repo_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! src/app/services/server-repo.service */ "./src/app/services/server-repo.service.ts");
/* harmony import */ var src_app_app_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! src/app/app.component */ "./src/app/app.component.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");







var WalletComponent = /** @class */ (function () {
    function WalletComponent(server, appC, spinner, cookieService) {
        this.server = server;
        this.appC = appC;
        this.spinner = spinner;
        this.cookieService = cookieService;
        this.regexForEightChar = (/^(\d+)?([*]?\d{0,8})?$/);
        this.withdrawCoinArr = [];
        this.depositCoinArr = [];
        this.depositSecObj = { coin: "", balance: "", address: "" };
        this.withdrawSecObj = { coin: "", balance: "", address: "", amount: "", fees: "", checkboxStatus: false };
    }
    WalletComponent.prototype.ngOnInit = function () {
        this.startLoader();
        this.getCoinList();
    };
    /** Function for start loader */
    WalletComponent.prototype.startLoader = function () {
        var _this = this;
        this.spinner.show();
        setTimeout(function () {
            _this.spinner.hide();
        }, 3000);
    };
    /** Function to get coin list */
    WalletComponent.prototype.getCoinList = function () {
        var _this = this;
        this.server.getMethod(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].wallet.version, "wallet/coin/get-coin-list").subscribe(function (succ) {
            if (succ.status == 200) {
                _this.withdrawCoinArr = succ.data;
                _this.depositCoinArr = succ.data;
                if (_this.depositCoinArr.length) {
                    _this.depositSecObj.coin = _this.depositCoinArr[0].coinShortName;
                    _this.getBalance(_this.depositSecObj.coin, "deposit");
                    _this.getAddress();
                }
                if (_this.withdrawCoinArr.length) {
                    _this.withdrawSecObj.coin = _this.withdrawCoinArr[0].coinShortName;
                    _this.withdrawSecObj.fees = _this.withdrawCoinArr[0].withdrawlFee + _this.withdrawSecObj.coin;
                    _this.getBalance(_this.withdrawSecObj.coin, "withdraw");
                }
            }
            else {
                _this.withdrawCoinArr = [];
                _this.depositCoinArr = [];
                _this.appC.showErrorAlert(succ.message);
            }
        }, function (err) {
            _this.withdrawCoinArr = [];
            _this.depositCoinArr = [];
            _this.appC.showErrorAlert(err.error.message);
        });
    };
    /** Function for get balance of selected coin */
    WalletComponent.prototype.getBalance = function (coin, type) {
        var _this = this;
        this.server.getMethod(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].wallet.version, "wallet/wallet/get-balance?coinName=" + coin).subscribe(function (succ) {
            if (succ.status == 200) {
                switch (type) {
                    case "deposit":
                        _this.depositSecObj.balance = succ.data.walletBalance;
                        break;
                    case "withdraw":
                        _this.withdrawSecObj.balance = succ.data.walletBalance;
                        break;
                }
            }
            else {
                switch (type) {
                    case "deposit":
                        _this.depositSecObj.balance = "0";
                        break;
                    case "withdraw":
                        _this.withdrawSecObj.balance = "0";
                        break;
                }
                _this.appC.showErrorAlert(succ.message);
            }
        }, function (err) {
            _this.appC.showErrorAlert(err.error.message);
        });
    };
    /** Function for get coin address */
    WalletComponent.prototype.getAddress = function () {
        var _this = this;
        this.server.getMethod(src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].baseUrl + src_environments_environment__WEBPACK_IMPORTED_MODULE_2__["environment"].wallet.version, "wallet/wallet/get-address?coinName=" + this.depositSecObj.coin).subscribe(function (succ) {
            if (succ.status == 200) {
                _this.depositSecObj.address = succ.data.walletAddress;
            }
            else {
                _this.depositSecObj.address = "";
                _this.appC.showErrorAlert(succ.message);
            }
        }, function (err) {
            _this.depositSecObj.address = "";
            _this.appC.showErrorAlert(err.error.message);
        });
    };
    /** Function for copy data */
    WalletComponent.prototype.copyToClipboard = function (data) {
        this.appC.showInfoAlert("Coin address has been copied to clipboard.");
        var selBox = document.createElement('textarea');
        selBox.style.position = 'fixed';
        selBox.style.left = '0';
        selBox.style.top = '0';
        selBox.style.opacity = '0';
        selBox.value = data;
        document.body.appendChild(selBox);
        selBox.focus();
        selBox.select();
        document.execCommand('copy');
        document.body.removeChild(selBox);
    };
    /** Function for deposit coin change */
    WalletComponent.prototype.depositCoinChangeFunc = function () {
        this.getBalance(this.depositSecObj.coin, "deposit");
        this.getAddress();
    };
    /** Function for generate wallet address */
    WalletComponent.prototype.generateAddress = function () {
        if (this.depositSecObj.address) {
            this.appC.showInfoAlert("Address is already generated.");
            return;
        }
        else {
            this.getAddress();
        }
    };
    /** Function for withdraw coin change */
    WalletComponent.prototype.withdrawCoinChangeFunc = function () {
        var _this = this;
        this.getBalance(this.withdrawSecObj.coin, "withdraw");
        var ind = this.withdrawCoinArr.findIndex(function (e) { return e.coinShortName == _this.withdrawSecObj.coin; });
        if (ind != -1) {
            this.withdrawSecObj.fees = this.withdrawCoinArr[ind].withdrawlFee + this.withdrawSecObj.coin;
        }
        this.clearWithdrawFields();
    };
    /** Function for clear withdraw fields */
    WalletComponent.prototype.clearWithdrawFields = function () {
        this.withdrawSecObj.address = "";
        this.withdrawSecObj.amount = "";
        this.withdrawSecObj.checkboxStatus = false;
    };
    /** Function to restrict space */
    WalletComponent.prototype.restrictSpace = function (event) {
        var k = event.charCode;
        if (k === 32)
            return false;
    };
    /** Function to restrict character */
    WalletComponent.prototype.restrictChar = function (event) {
        var k = event.charCode;
        if (event.key === 'Backspace')
            k = 8;
        if (k >= 48 && k <= 57 || k == 8 || k == 46)
            return true;
        else
            return false;
    };
    /** Function to restrict length after dot */
    WalletComponent.prototype.restrictLength = function (type) {
        switch (type) {
            case 'wa':
                if (this.withdrawSecObj.amount.includes(".")) {
                    if (!this.regexForEightChar.test(this.withdrawSecObj.amount)) {
                        var tempVal = this.withdrawSecObj.amount.split('.');
                        this.withdrawSecObj.amount = tempVal[0] + '.' + tempVal[1].slice(0, 8);
                    }
                }
                break;
        }
    };
    /** Function for submit withdraw */
    WalletComponent.prototype.submitWithdraw = function () {
        if (this.withdrawSecObj.address.trim().length == 0) {
            this.appC.showErrorAlert("Please enter wallet address.");
            return;
        }
        else if (this.withdrawSecObj.amount.trim().length == 0) {
            this.appC.showErrorAlert("Please enter amount.");
            return;
        }
        else if (Number(this.withdrawSecObj.amount) <= 0 || this.withdrawSecObj.amount == ".") {
            this.appC.showErrorAlert("Please enter valid amount.");
            return;
        }
        else if (!this.withdrawSecObj.checkboxStatus) {
            this.appC.showErrorAlert("Please accept withdraw condition.");
            return;
        }
        else {
            console.log("data -> ", this.withdrawSecObj);
        }
    };
    WalletComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
            selector: 'app-wallet',
            template: __webpack_require__(/*! ./wallet.component.html */ "./src/app/modules/wallet/wallet/wallet.component.html"),
            styles: [__webpack_require__(/*! ./wallet.component.css */ "./src/app/modules/wallet/wallet/wallet.component.css")]
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [src_app_services_server_repo_service__WEBPACK_IMPORTED_MODULE_4__["ServerRepoService"], src_app_app_component__WEBPACK_IMPORTED_MODULE_5__["AppComponent"], ngx_spinner__WEBPACK_IMPORTED_MODULE_3__["NgxSpinnerService"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_6__["CookieService"]])
    ], WalletComponent);
    return WalletComponent;
}());



/***/ }),

/***/ "./src/app/security/auth.guard.ts":
/*!****************************************!*\
  !*** ./src/app/security/auth.guard.ts ***!
  \****************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");




var AuthGuard = /** @class */ (function () {
    function AuthGuard(router, cookieService) {
        this.router = router;
        this.cookieService = cookieService;
    }
    /** Function for checking the token before routing */
    AuthGuard.prototype.canActivate = function (route, state) {
        var url = state.url.slice(1, state.url.length);
        if (this.cookieService.get("token")) {
            if (url == "login" || url == "forgetpassword" || url == "signup") {
                this.router.navigate(['exchange']);
            }
            return true;
        }
        else {
            if (url == "login" || url == "forgetpassword" || url == "signup") {
                return true;
            }
            else {
                this.router.navigate(['']);
                return false;
            }
        }
    };
    AuthGuard = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_3__["CookieService"]])
    ], AuthGuard);
    return AuthGuard;
}());



/***/ }),

/***/ "./src/app/services/server-repo.service.ts":
/*!*************************************************!*\
  !*** ./src/app/services/server-repo.service.ts ***!
  \*************************************************/
/*! exports provided: ServerRepoService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ServerRepoService", function() { return ServerRepoService; });
/* harmony import */ var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! tslib */ "./node_modules/tslib/tslib.es6.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-cookie-service */ "./node_modules/ngx-cookie-service/index.js");






var ServerRepoService = /** @class */ (function () {
    function ServerRepoService(http, cookieService) {
        this.http = http;
        this.cookieService = cookieService;
        this.subject = new rxjs__WEBPACK_IMPORTED_MODULE_3__["Subject"]();
        this.buyOrderLimit = 50;
        this.sellOrderLimit = 50;
        this.tradeHisOrderLimit = 50;
        this.autoFilled = false;
        this.autoFilledObj = { email: "", password: "" };
    }
    /** Function for call event in child component */
    ServerRepoService.prototype.fireToChild = function () {
        return this.subject.asObservable();
    };
    /** Function for get method */
    ServerRepoService.prototype.getMethod = function (baseUrl, endPt) {
        if (this.cookieService.get("token")) {
            var httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + this.cookieService.get("token")
                })
            };
            return this.http.get(baseUrl + endPt, httpOptions);
        }
        else {
            var httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                    'Content-Type': 'application/json',
                })
            };
            return this.http.get(baseUrl + endPt, httpOptions);
        }
    };
    /** Function for get method */
    ServerRepoService.prototype.postMethod = function (req, baseUrl, endPt) {
        if (this.cookieService.get("token")) {
            var httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                    'Content-Type': 'application/json',
                    'Authorization': 'Bearer ' + this.cookieService.get("token")
                })
            };
            return this.http.post(baseUrl + endPt, req, httpOptions);
        }
        else {
            var httpOptions = {
                headers: new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpHeaders"]({
                    'Content-Type': 'application/json',
                })
            };
            return this.http.post(baseUrl + endPt, req, httpOptions);
        }
    };
    /** Function for socket connection */
    ServerRepoService.prototype.initSocket = function () {
        this.wsObj = new WebSocket(_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].socketUrl);
        var self = this;
        this.wsObj.addEventListener('open', function (event) {
            console.log('ws connected for exchange');
            self.subject.next({ text: "socketConnected" });
        });
        this.wsObj.addEventListener('close', function (event) {
            console.log('ws disconnected for exchange');
        });
        /** Socket code for liquidity */
        // this.liqWSObj = new WebSocket("wss://api.hitbtc.com/api/2/ws");
        // this.liqWSObj.addEventListener('open', function (event) {
        //     console.log('ws connected for liquidity');
        //     self.subject.next({ text: "liqConnected" });
        // });
        // this.liqWSObj.addEventListener('close', function (event) {
        //     console.log('ws disconnected for liquidity');
        // });
    };
    ServerRepoService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
            providedIn: 'root'
        }),
        tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"], ngx_cookie_service__WEBPACK_IMPORTED_MODULE_5__["CookieService"]])
    ], ServerRepoService);
    return ServerRepoService;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false,
    websiteUrl: 'http://52.74.225.203',
    socketUrl: 'ws://52.74.225.203:9100/global',
    baseUrl: 'http://18.136.121.81:8765/api/',
    tradeViewChartUrl: 'http://18.136.121.81:8765/api/v1/trade/exchange-feed',
    auth: {
        version: 'v1/'
    },
    user: {
        version: 'v1/'
    },
    wallet: {
        version: 'v1/'
    },
    order: {
        version: 'v1/'
    },
    static: {
        version: 'v1/'
    },
    ohlc: {
        version: 'v1/'
    }
};


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! I:\Projects\Bithood Website\Bithood\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map