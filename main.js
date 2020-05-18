(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./$$_lazy_route_resource lazy recursive":
/*!******************************************************!*\
  !*** ./$$_lazy_route_resource lazy namespace object ***!
  \******************************************************/
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
webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";

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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _pages_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/auth/auth.service */ "./src/app/pages/auth/auth.service.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");







function AppComponent_div_4_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-footer");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class AppComponent {
    constructor(router, authService) {
        this.router = router;
        this.authService = authService;
        this.dispalyFooter = true;
        this.title = 'HyperledgerFabricBGCS';
        router.events.subscribe(() => {
            this.dispalyFooter = router.url !== '/auth';
        });
    }
    ngOnInit() {
        this.authService.autoLogin();
    }
}
AppComponent.ɵfac = function AppComponent_Factory(t) { return new (t || AppComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_pages_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"])); };
AppComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AppComponent, selectors: [["app-root"]], decls: 5, vars: 1, consts: [["id", "navbar"], ["id", "page-content"], ["id", "footer", 4, "ngIf"], ["id", "footer"]], template: function AppComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-navbar");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "router-outlet");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](4, AppComponent_div_4_Template, 2, 0, "div", 2);
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.dispalyFooter);
    } }, directives: [_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_3__["NavbarComponent"], _angular_router__WEBPACK_IMPORTED_MODULE_1__["RouterOutlet"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _footer_footer_component__WEBPACK_IMPORTED_MODULE_5__["FooterComponent"]], styles: ["#navbar[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 60px;\n  box-shadow: 0px -5px 18px 0px orange;\n  z-index: 1;\n}\n\n#page-content[_ngcontent-%COMP%] {\n  margin: 60px 150px;\n  padding: 15px 60px;\n}\n\n#footer[_ngcontent-%COMP%] {\n  bottom: 0;\n  left: 0;\n  right: 0;\n  height: 200px;\n}\n\n@media screen and (max-width: 900px) {\n  #navbar[_ngcontent-%COMP%] {\n    height: 90px;\n  }\n  #page-content[_ngcontent-%COMP%] {\n    margin: 90px 20px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSxlQUFlO0VBQ2YsTUFBTTtFQUNOLE9BQU87RUFDUCxRQUFRO0VBQ1IsWUFBWTtFQUlaLG9DQUFvQztFQUNwQyxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsU0FBUztFQUNULE9BQU87RUFDUCxRQUFRO0VBQ1IsYUFBYTtBQUNmOztBQUVBO0VBQ0U7SUFDRSxZQUFZO0VBQ2Q7RUFDQTtJQUNFLGlCQUFpQjtFQUNuQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvYXBwLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjbmF2YmFyIHtcbiAgcG9zaXRpb246IGZpeGVkO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBoZWlnaHQ6IDYwcHg7XG5cbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggLTVweCAxOHB4IDBweCBvcmFuZ2U7XG4gIC1tb3otYm94LXNoYWRvdzogMHB4IC01cHggMThweCAwcHggb3JhbmdlO1xuICBib3gtc2hhZG93OiAwcHggLTVweCAxOHB4IDBweCBvcmFuZ2U7XG4gIHotaW5kZXg6IDE7XG59XG5cbiNwYWdlLWNvbnRlbnQge1xuICBtYXJnaW46IDYwcHggMTUwcHg7XG4gIHBhZGRpbmc6IDE1cHggNjBweDtcbn1cblxuI2Zvb3RlciB7XG4gIGJvdHRvbTogMDtcbiAgbGVmdDogMDtcbiAgcmlnaHQ6IDA7XG4gIGhlaWdodDogMjAwcHg7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkwMHB4KSB7XG4gICNuYXZiYXIge1xuICAgIGhlaWdodDogOTBweDtcbiAgfVxuICAjcGFnZS1jb250ZW50IHtcbiAgICBtYXJnaW46IDkwcHggMjBweDtcbiAgfVxufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-root',
                templateUrl: './app.component.html',
                styleUrls: ['./app.component.css'],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _pages_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }]; }, null); })();


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
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/animations.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _pages_auth_auth_guard__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/auth/auth.guard */ "./src/app/pages/auth/auth.guard.ts");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./navbar/navbar.component */ "./src/app/navbar/navbar.component.ts");
/* harmony import */ var _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./footer/footer.component */ "./src/app/footer/footer.component.ts");
/* harmony import */ var _pages_home_home_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./pages/home/home.component */ "./src/app/pages/home/home.component.ts");
/* harmony import */ var _pages_byfn_byfn_component__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./pages/byfn/byfn.component */ "./src/app/pages/byfn/byfn.component.ts");
/* harmony import */ var _pages_guide_guide_component__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./pages/guide/guide.component */ "./src/app/pages/guide/guide.component.ts");
/* harmony import */ var _pages_qna_qna_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./pages/qna/qna.component */ "./src/app/pages/qna/qna.component.ts");
/* harmony import */ var _pages_auth_auth_component__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./pages/auth/auth.component */ "./src/app/pages/auth/auth.component.ts");
/* harmony import */ var _pages_glossary_glossary_component__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./pages/glossary/glossary.component */ "./src/app/pages/glossary/glossary.component.ts");
/* harmony import */ var _shared_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./shared/loading-spinner/loading-spinner.component */ "./src/app/shared/loading-spinner/loading-spinner.component.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/stepper.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");
/* harmony import */ var _pages_auth_auth_interceptor_service__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./pages/auth/auth-interceptor.service */ "./src/app/pages/auth/auth-interceptor.service.ts");





























const appRoutes = [
    { path: '', component: _pages_home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"] },
    { path: 'byfn', component: _pages_byfn_byfn_component__WEBPACK_IMPORTED_MODULE_11__["BYFNComponent"] },
    { path: 'guide', component: _pages_guide_guide_component__WEBPACK_IMPORTED_MODULE_12__["GuideComponent"] },
    { path: 'q-and-a', component: _pages_qna_qna_component__WEBPACK_IMPORTED_MODULE_13__["QNAComponent"], canActivate: [_pages_auth_auth_guard__WEBPACK_IMPORTED_MODULE_6__["AuthGuard"]] },
    { path: 'auth', component: _pages_auth_auth_component__WEBPACK_IMPORTED_MODULE_14__["AuthComponent"] },
    { path: 'glossary', component: _pages_glossary_glossary_component__WEBPACK_IMPORTED_MODULE_15__["GlossaryComponent"] }
];
class AppModule {
}
AppModule.ɵmod = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineNgModule"]({ type: AppModule, bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]] });
AppModule.ɵinj = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjector"]({ factory: function AppModule_Factory(t) { return new (t || AppModule)(); }, providers: [
        {
            provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"],
            useClass: _pages_auth_auth_interceptor_service__WEBPACK_IMPORTED_MODULE_26__["AuthInterceptorSrvice"],
            multi: true,
        },
    ], imports: [[
            _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
            _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
            _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
            _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
            _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes),
            _angular_material_button__WEBPACK_IMPORTED_MODULE_17__["MatButtonModule"],
            _angular_material_stepper__WEBPACK_IMPORTED_MODULE_18__["MatStepperModule"],
            _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__["MatIconModule"],
            _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_20__["MatSnackBarModule"],
            _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__["MatFormFieldModule"],
            _angular_material_input__WEBPACK_IMPORTED_MODULE_22__["MatInputModule"],
            _angular_material_expansion__WEBPACK_IMPORTED_MODULE_23__["MatExpansionModule"],
            _angular_material_card__WEBPACK_IMPORTED_MODULE_24__["MatCardModule"],
            _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_25__["MatTooltipModule"]
        ]] });
(function () { (typeof ngJitMode === "undefined" || ngJitMode) && _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵsetNgModuleScope"](AppModule, { declarations: [_pages_glossary_glossary_component__WEBPACK_IMPORTED_MODULE_15__["SearchPipe"],
        _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
        _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__["NavbarComponent"],
        _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"],
        _pages_byfn_byfn_component__WEBPACK_IMPORTED_MODULE_11__["BYFNComponent"],
        _pages_guide_guide_component__WEBPACK_IMPORTED_MODULE_12__["GuideComponent"],
        _pages_home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
        _pages_qna_qna_component__WEBPACK_IMPORTED_MODULE_13__["QNAComponent"],
        _pages_auth_auth_component__WEBPACK_IMPORTED_MODULE_14__["AuthComponent"],
        _shared_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_16__["LoadingSpinnerComponent"],
        _pages_glossary_glossary_component__WEBPACK_IMPORTED_MODULE_15__["GlossaryComponent"]], imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
        _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
        _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
        _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"], _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"], _angular_material_button__WEBPACK_IMPORTED_MODULE_17__["MatButtonModule"],
        _angular_material_stepper__WEBPACK_IMPORTED_MODULE_18__["MatStepperModule"],
        _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__["MatIconModule"],
        _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_20__["MatSnackBarModule"],
        _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__["MatFormFieldModule"],
        _angular_material_input__WEBPACK_IMPORTED_MODULE_22__["MatInputModule"],
        _angular_material_expansion__WEBPACK_IMPORTED_MODULE_23__["MatExpansionModule"],
        _angular_material_card__WEBPACK_IMPORTED_MODULE_24__["MatCardModule"],
        _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_25__["MatTooltipModule"]], exports: [_pages_glossary_glossary_component__WEBPACK_IMPORTED_MODULE_15__["SearchPipe"]] }); })();
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AppModule, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"],
        args: [{
                declarations: [
                    _pages_glossary_glossary_component__WEBPACK_IMPORTED_MODULE_15__["SearchPipe"],
                    _app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"],
                    _navbar_navbar_component__WEBPACK_IMPORTED_MODULE_8__["NavbarComponent"],
                    _footer_footer_component__WEBPACK_IMPORTED_MODULE_9__["FooterComponent"],
                    _pages_byfn_byfn_component__WEBPACK_IMPORTED_MODULE_11__["BYFNComponent"],
                    _pages_guide_guide_component__WEBPACK_IMPORTED_MODULE_12__["GuideComponent"],
                    _pages_home_home_component__WEBPACK_IMPORTED_MODULE_10__["HomeComponent"],
                    _pages_qna_qna_component__WEBPACK_IMPORTED_MODULE_13__["QNAComponent"],
                    _pages_auth_auth_component__WEBPACK_IMPORTED_MODULE_14__["AuthComponent"],
                    _shared_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_16__["LoadingSpinnerComponent"],
                    _pages_glossary_glossary_component__WEBPACK_IMPORTED_MODULE_15__["GlossaryComponent"],
                ],
                exports: [
                    _pages_glossary_glossary_component__WEBPACK_IMPORTED_MODULE_15__["SearchPipe"]
                ],
                imports: [
                    _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"],
                    _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"],
                    _angular_forms__WEBPACK_IMPORTED_MODULE_4__["FormsModule"],
                    _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HttpClientModule"],
                    _angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(appRoutes),
                    _angular_material_button__WEBPACK_IMPORTED_MODULE_17__["MatButtonModule"],
                    _angular_material_stepper__WEBPACK_IMPORTED_MODULE_18__["MatStepperModule"],
                    _angular_material_icon__WEBPACK_IMPORTED_MODULE_19__["MatIconModule"],
                    _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_20__["MatSnackBarModule"],
                    _angular_material_form_field__WEBPACK_IMPORTED_MODULE_21__["MatFormFieldModule"],
                    _angular_material_input__WEBPACK_IMPORTED_MODULE_22__["MatInputModule"],
                    _angular_material_expansion__WEBPACK_IMPORTED_MODULE_23__["MatExpansionModule"],
                    _angular_material_card__WEBPACK_IMPORTED_MODULE_24__["MatCardModule"],
                    _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_25__["MatTooltipModule"]
                ],
                providers: [
                    {
                        provide: _angular_common_http__WEBPACK_IMPORTED_MODULE_5__["HTTP_INTERCEPTORS"],
                        useClass: _pages_auth_auth_interceptor_service__WEBPACK_IMPORTED_MODULE_26__["AuthInterceptorSrvice"],
                        multi: true,
                    },
                ],
                bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_7__["AppComponent"]],
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/footer/footer.component.ts":
/*!********************************************!*\
  !*** ./src/app/footer/footer.component.ts ***!
  \********************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");



class FooterComponent {
    constructor() { }
    ngOnInit() { }
}
FooterComponent.ɵfac = function FooterComponent_Factory(t) { return new (t || FooterComponent)(); };
FooterComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: FooterComponent, selectors: [["app-footer"]], decls: 20, vars: 0, consts: [["id", "footer"], [1, "column"], [1, "row"], ["id", "num1"], ["src", "assets/img/logo-orange.png", "alt", "Hyperledger | Fabric | Logo"], ["id", "num2"], ["id", "num3"], ["href", "https://hyperledger-fabric.readthedocs.io/", "target", "blank"], ["mat-raised-button", ""], [1, "row", "orange"], ["href", "https://Li54nder.github.io/personal", "target", "blank"]], template: function FooterComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "img", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " The Linux Foundation founded the Hyperledger in 2015 to advance cross-industry blockchain technologies. Hyperledger Fabric is one of the blockchain projects within Hyperledger! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, "Guide is adapted for Linux users");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "div", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Source is official Hyperledger Fabric documentation!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "a", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "button", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Go To Documentation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "div", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, "Copyright \u00A9 2020 Aleksa Novkovic");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_1__["MatButton"]], styles: ["#footer[_ngcontent-%COMP%] {\n  height: 100%;\n  width: 100%;\n  border-top: 2px solid orange;\n  display: flex;\n  flex-direction: column;\n  font-size: 0.7rem;\n}\n.column[_ngcontent-%COMP%] {\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n.row[_ngcontent-%COMP%] {\n  flex: 3;\n  display: flex;\n}\n.row[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n  margin: 20px;\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  justify-content: center;\n  text-align: center;\n}\n.row[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 200px;\n}\n.row[_ngcontent-%COMP%]   button[_ngcontent-%COMP%] {\n  background-color: orange;\n  color: #080808;\n}\n.orange[_ngcontent-%COMP%] {\n  flex: 1;\n  bottom: 0;\n  background-color: orange;\n  color: #080808;\n  text-align: center;\n  display: flex;\n  align-items: center;\n}\n.orange[_ngcontent-%COMP%]   p[_ngcontent-%COMP%] {\n  width: 100%;\n}\n@media screen and (max-width: 900px) {\n  .row[_ngcontent-%COMP%] {\n    \n    flex-direction: column;\n  }\n  #num1[_ngcontent-%COMP%] {\n    order: 1;\n  }\n  #num2[_ngcontent-%COMP%] {\n    order: 3;\n  }\n  #num3[_ngcontent-%COMP%] {\n    order: 2;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvZm9vdGVyL2Zvb3Rlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLFdBQVc7RUFDWCw0QkFBNEI7RUFDNUIsYUFBYTtFQUNiLHNCQUFzQjtFQUN0QixpQkFBaUI7QUFDbkI7QUFDQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2Isc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxPQUFPO0VBQ1AsYUFBYTtBQUNmO0FBQ0E7RUFDRSxZQUFZO0VBQ1osT0FBTztFQUNQLGFBQWE7RUFDYixzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLHVCQUF1QjtFQUN2QixrQkFBa0I7QUFDcEI7QUFDQTtFQUNFLFlBQVk7QUFDZDtBQUNBO0VBQ0Usd0JBQXdCO0VBQ3hCLGNBQWM7QUFDaEI7QUFDQTtFQUNFLE9BQU87RUFDUCxTQUFTO0VBQ1Qsd0JBQXdCO0VBQ3hCLGNBQWM7RUFDZCxrQkFBa0I7RUFDbEIsYUFBYTtFQUNiLG1CQUFtQjtBQUNyQjtBQUNBO0VBQ0UsV0FBVztBQUNiO0FBRUE7RUFDRTtJQUNFLGtCQUFrQjtJQUNsQixzQkFBc0I7RUFDeEI7RUFDQTtJQUNFLFFBQVE7RUFDVjtFQUNBO0lBQ0UsUUFBUTtFQUNWO0VBQ0E7SUFDRSxRQUFRO0VBQ1Y7QUFDRiIsImZpbGUiOiJzcmMvYXBwL2Zvb3Rlci9mb290ZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNmb290ZXIge1xuICBoZWlnaHQ6IDEwMCU7XG4gIHdpZHRoOiAxMDAlO1xuICBib3JkZXItdG9wOiAycHggc29saWQgb3JhbmdlO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBmb250LXNpemU6IDAuN3JlbTtcbn1cbi5jb2x1bW4ge1xuICBoZWlnaHQ6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4ucm93IHtcbiAgZmxleDogMztcbiAgZGlzcGxheTogZmxleDtcbn1cbi5yb3cgZGl2IHtcbiAgbWFyZ2luOiAyMHB4O1xuICBmbGV4OiAxO1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuLnJvdyBpbWcge1xuICB3aWR0aDogMjAwcHg7XG59XG4ucm93IGJ1dHRvbiB7XG4gIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcbiAgY29sb3I6ICMwODA4MDg7XG59XG4ub3JhbmdlIHtcbiAgZmxleDogMTtcbiAgYm90dG9tOiAwO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XG4gIGNvbG9yOiAjMDgwODA4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG59XG4ub3JhbmdlIHAge1xuICB3aWR0aDogMTAwJTtcbn1cblxuQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogOTAwcHgpIHtcbiAgLnJvdyB7XG4gICAgLyogaGVpZ2h0OiA5MHB4OyAqL1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gIH1cbiAgI251bTEge1xuICAgIG9yZGVyOiAxO1xuICB9XG4gICNudW0yIHtcbiAgICBvcmRlcjogMztcbiAgfVxuICAjbnVtMyB7XG4gICAgb3JkZXI6IDI7XG4gIH1cbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](FooterComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-footer',
                templateUrl: './footer.component.html',
                styleUrls: ['./footer.component.css'],
            }]
    }], function () { return []; }, null); })();


/***/ }),

/***/ "./src/app/navbar/navbar.component.ts":
/*!********************************************!*\
  !*** ./src/app/navbar/navbar.component.ts ***!
  \********************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _pages_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../pages/auth/auth.service */ "./src/app/pages/auth/auth.service.ts");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");






function NavbarComponent_button_10_Template(rf, ctx) { if (rf & 1) {
    const _r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "button", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_button_10_Template_button_click_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r2); const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r1.onLogout(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](1, "Logout");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
class NavbarComponent {
    constructor(authService) {
        this.authService = authService;
        this.isAuth = false;
    }
    ngOnInit() {
        this.userSubscription = this.authService.user.subscribe((user) => {
            this.isAuth = !!user;
        });
    }
    onLogout() {
        this.authService.logout();
    }
    scrollToTop() {
        window.scrollTo(0, 0);
    }
    ngOnDestroy() {
        this.userSubscription.unsubscribe();
    }
}
NavbarComponent.ɵfac = function NavbarComponent_Factory(t) { return new (t || NavbarComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_pages_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"])); };
NavbarComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: NavbarComponent, selectors: [["app-navbar"]], decls: 11, vars: 1, consts: [["id", "navbar"], ["mat-button", "", "routerLink", "/", 3, "click"], ["id", "nav"], ["mat-button", "", "routerLink", "/byfn", "routerLinkActive", "active", 3, "click"], ["mat-button", "", "routerLink", "/guide", "routerLinkActive", "active", 3, "click"], ["mat-button", "", "routerLink", "/q-and-a", "routerLinkActive", "active", 3, "click"], ["mat-button", "", 3, "click", 4, "ngIf"], ["mat-button", "", 3, "click"]], template: function NavbarComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "nav", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "button", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_button_click_1_listener() { return ctx.scrollToTop(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2, " Hyperledger Fabric Beginner's Guide ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_button_click_4_listener() { return ctx.scrollToTop(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " BYFN ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "button", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_button_click_6_listener() { return ctx.scrollToTop(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " Guide ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "button", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function NavbarComponent_Template_button_click_8_listener() { return ctx.scrollToTop(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](9, " Q&A ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](10, NavbarComponent_button_10_Template, 2, 0, "button", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isAuth);
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLink"], _angular_router__WEBPACK_IMPORTED_MODULE_3__["RouterLinkActive"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"]], styles: ["#navbar[_ngcontent-%COMP%] {\n  height: 100%;\n  width: calc(100%-20px);\n  padding: 0 20px;\n\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n\n  border-bottom: 2px solid orange;\n  background-color: #080808;\n}\n#nav[_ngcontent-%COMP%] {\n  height: 100%;\n}\nbutton[_ngcontent-%COMP%] {\n  height: 100%;\n  padding: 5px 20px;\n  margin-right: 10px;\n  transition: background-color 0.3s;\n  font-family: \"Quicksand\", sans-serif !important;\n  font-size: 1rem;\n  border-radius: 0;\n  border-top: 2px solid transparent;\n}\n#nav[_ngcontent-%COMP%]   button.active[_ngcontent-%COMP%] {\n  border-top: 2px solid orange;\n}\nbutton[_ngcontent-%COMP%]:hover {\n  background-color: rgba(255, 255, 255, 0.1);\n  cursor: pointer;\n}\n@media screen and (max-width: 900px) {\n  #navbar[_ngcontent-%COMP%] {\n    flex-direction: column;\n    justify-content: space-around;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0UsWUFBWTtFQUNaLHNCQUFzQjtFQUN0QixlQUFlOztFQUVmLGFBQWE7RUFDYiw4QkFBOEI7RUFDOUIsbUJBQW1COztFQUVuQiwrQkFBK0I7RUFDL0IseUJBQXlCO0FBQzNCO0FBQ0E7RUFDRSxZQUFZO0FBQ2Q7QUFDQTtFQUNFLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGlDQUFpQztFQUNqQywrQ0FBK0M7RUFDL0MsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixpQ0FBaUM7QUFDbkM7QUFDQTtFQUNFLDRCQUE0QjtBQUM5QjtBQUNBO0VBQ0UsMENBQTBDO0VBQzFDLGVBQWU7QUFDakI7QUFDQTtFQUNFO0lBQ0Usc0JBQXNCO0lBQ3RCLDZCQUE2QjtFQUMvQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvbmF2YmFyL25hdmJhci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiI25hdmJhciB7XG4gIGhlaWdodDogMTAwJTtcbiAgd2lkdGg6IGNhbGMoMTAwJS0yMHB4KTtcbiAgcGFkZGluZzogMCAyMHB4O1xuXG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcblxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgb3JhbmdlO1xuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMDgwODA4O1xufVxuI25hdiB7XG4gIGhlaWdodDogMTAwJTtcbn1cbmJ1dHRvbiB7XG4gIGhlaWdodDogMTAwJTtcbiAgcGFkZGluZzogNXB4IDIwcHg7XG4gIG1hcmdpbi1yaWdodDogMTBweDtcbiAgdHJhbnNpdGlvbjogYmFja2dyb3VuZC1jb2xvciAwLjNzO1xuICBmb250LWZhbWlseTogXCJRdWlja3NhbmRcIiwgc2Fucy1zZXJpZiAhaW1wb3J0YW50O1xuICBmb250LXNpemU6IDFyZW07XG4gIGJvcmRlci1yYWRpdXM6IDA7XG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCB0cmFuc3BhcmVudDtcbn1cbiNuYXYgYnV0dG9uLmFjdGl2ZSB7XG4gIGJvcmRlci10b3A6IDJweCBzb2xpZCBvcmFuZ2U7XG59XG5idXR0b246aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1NSwgMjU1LCAyNTUsIDAuMSk7XG4gIGN1cnNvcjogcG9pbnRlcjtcbn1cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkwMHB4KSB7XG4gICNuYXZiYXIge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1hcm91bmQ7XG4gIH1cbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](NavbarComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-navbar',
                templateUrl: './navbar.component.html',
                styleUrls: ['./navbar.component.css'],
            }]
    }], function () { return [{ type: _pages_auth_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/auth/auth-interceptor.service.ts":
/*!********************************************************!*\
  !*** ./src/app/pages/auth/auth-interceptor.service.ts ***!
  \********************************************************/
/*! exports provided: AuthInterceptorSrvice */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthInterceptorSrvice", function() { return AuthInterceptorSrvice; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./auth.service */ "./src/app/pages/auth/auth.service.ts");





class AuthInterceptorSrvice {
    constructor(authService) {
        this.authService = authService;
    }
    //EXHAUSTMAP - ceka da se prvi obzrvabl zavrsi pa onda krece sa sledecim
    intercept(req, next) {
        return this.authService.user.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["exhaustMap"])((user) => {
            if (!user) {
                return next.handle(req);
            }
            else {
                const modifiedReq = req.clone({
                    params: new _angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpParams"]().set('auth', user.token),
                });
                return next.handle(modifiedReq);
            }
        }));
    }
}
AuthInterceptorSrvice.ɵfac = function AuthInterceptorSrvice_Factory(t) { return new (t || AuthInterceptorSrvice)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"])); };
AuthInterceptorSrvice.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthInterceptorSrvice, factory: AuthInterceptorSrvice.ɵfac });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthInterceptorSrvice, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"]
    }], function () { return [{ type: _auth_service__WEBPACK_IMPORTED_MODULE_3__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/auth/auth.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/auth/auth.component.ts ***!
  \**********************************************/
/*! exports provided: AuthComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthComponent", function() { return AuthComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./auth.service */ "./src/app/pages/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _shared_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../shared/loading-spinner/loading-spinner.component */ "./src/app/shared/loading-spinner/loading-spinner.component.ts");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");











function AuthComponent_div_5_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "app-loading-spinner");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function AuthComponent_div_6_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "mat-card");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-card-title");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Error!");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "mat-card-content");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](6, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const ctx_r1 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](ctx_r1.error);
} }
function AuthComponent_form_7_Template(rf, ctx) { if (rf & 1) {
    const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 4, 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function AuthComponent_form_7_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1); const ctx_r4 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r4.onSubmitForm(_r3); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-form-field", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Email");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field", 6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Password");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "input", 8);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "div", 9);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 10);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](15, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](16, "button", 11);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function AuthComponent_form_7_Template_button_click_16_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r5); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.onSwitchMode(); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const _r3 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1);
    const ctx_r2 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("disabled", !_r3.valid);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.isLoginMode ? "Login" : "Sing Up", " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx_r2.isLoginMode ? "You haven't account yet - let's REGISTRATE" : "Switch to Login", " ");
} }
class AuthComponent {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
        this.isLoginMode = true;
        this.isLoading = false;
        this.error = null;
    }
    ngOnInit() { }
    onSwitchMode() {
        this.isLoginMode = !this.isLoginMode;
    }
    onSubmitForm(form) {
        let authObs;
        if (!form.valid) {
            return;
        }
        const email = form.value.email;
        const password = form.value.password;
        this.isLoading = true;
        if (this.isLoginMode) {
            authObs = this.authService.login(email, password);
        }
        else {
            authObs = this.authService.signup(email, password);
        }
        authObs.subscribe((resData) => {
            this.isLoading = false;
            this.router.navigate(['/q-and-a']);
            // form.reset()
        }, (error) => {
            if (error.error && error.error.error) {
                switch (error.error.error.message) {
                    case 'EMAIL_EXISTS':
                        this.error = 'This email already exists.';
                        break;
                    case 'EMAIL_NOT_FOUND':
                        this.error = 'Account with this email not found.';
                        break;
                    case 'INVALID_PASSWORD':
                        this.error = 'Password you entered is invalid.';
                        break;
                    default:
                        this.error = 'An unknown error occured.';
                        break;
                }
            }
            this.isLoading = false;
        });
    }
}
AuthComponent.ɵfac = function AuthComponent_Factory(t) { return new (t || AuthComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
AuthComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: AuthComponent, selectors: [["app-auth"]], decls: 8, vars: 4, consts: [[1, "page-content"], [1, "text"], [4, "ngIf"], ["autocomplete", "off", 3, "ngSubmit", 4, "ngIf"], ["autocomplete", "off", 3, "ngSubmit"], ["authForm", "ngForm"], [1, "example-full-width"], ["matInput", "", "type", "email", "ngModel", "", "required", "", "email", "", "placeholder", "E.g. example@email.com", "name", "email"], ["matInput", "", "type", "password", "ngModel", "", "required", "", "password", "", "placeholder", "*******", "name", "password"], [1, "buttons"], ["mat-raised-button", "", "type", "submit", 3, "disabled"], ["mat-raised-button", "", "type", "button", 3, "click"]], template: function AuthComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h2");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](5, AuthComponent_div_5_Template, 2, 0, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](6, AuthComponent_div_6_Template, 7, 1, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](7, AuthComponent_form_7_Template, 18, 3, "form", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", ctx.isLoginMode ? "For this action you must be logged in!" : "Registration", " ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", ctx.error && !ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoading);
    } }, directives: [_angular_common__WEBPACK_IMPORTED_MODULE_3__["NgIf"], _shared_loading_spinner_loading_spinner_component__WEBPACK_IMPORTED_MODULE_4__["LoadingSpinnerComponent"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardTitle"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardContent"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_8__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["RequiredValidator"], _angular_forms__WEBPACK_IMPORTED_MODULE_6__["EmailValidator"], _angular_material_button__WEBPACK_IMPORTED_MODULE_9__["MatButton"]], styles: ["#fullPage[_ngcontent-%COMP%] {\n  height: 60vh !important;\n}\n\n.example-form[_ngcontent-%COMP%] {\n  min-width: 150px;\n  max-width: 500px;\n  width: 100%;\n}\n\n.example-full-width[_ngcontent-%COMP%] {\n  width: 51%;\n}\n\n.page-content[_ngcontent-%COMP%] {\n  position: fixed;\n  top: 0;\n  right: 0;\n  bottom: 0;\n  left: 0;\n  margin: 50px 200px 0;\n  align-items: center;\n  justify-content: center;\n}\n\n.buttons[_ngcontent-%COMP%] {\n  flex-direction: column;\n}\n\n  .mat-focused .mat-form-field-ripple {\n  background-color: black !important;\n}\n\n  .mat-focused mat-label,   mat-label {\n  color: black !important;\n}\n\n  .cdk-text-field-autofilled {\n  background-color: orange !important;\n}\n\n  mat-card {\n  background-color: coral !important;\n  color: darkred !important;\n  border: 1px solid darkred;\n}\n\n@media screen and (max-width: 900px) {\n  .page-content[_ngcontent-%COMP%] {\n    margin: 0 50px !important;\n    padding: 0 20px;\n  }\n  .text[_ngcontent-%COMP%] {\n    padding: 10px 50px 40px;\n  }\n  .example-full-width[_ngcontent-%COMP%] {\n    width: 100% !important;\n  }\n}\n\n@media screen and (max-width: 530px) {\n  .page-content[_ngcontent-%COMP%] {\n    margin: 0 !important;\n    padding: 0 30px;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYXV0aC9hdXRoLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSx1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsZ0JBQWdCO0VBQ2hCLFdBQVc7QUFDYjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGVBQWU7RUFDZixNQUFNO0VBQ04sUUFBUTtFQUNSLFNBQVM7RUFDVCxPQUFPO0VBQ1Asb0JBQW9CO0VBQ3BCLG1CQUFtQjtFQUNuQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxrQ0FBa0M7QUFDcEM7O0FBQ0E7O0VBRUUsdUJBQXVCO0FBQ3pCOztBQUNBO0VBQ0UsbUNBQW1DO0FBQ3JDOztBQUVBO0VBQ0Usa0NBQWtDO0VBQ2xDLHlCQUF5QjtFQUN6Qix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRTtJQUNFLHlCQUF5QjtJQUN6QixlQUFlO0VBQ2pCO0VBQ0E7SUFDRSx1QkFBdUI7RUFDekI7RUFDQTtJQUNFLHNCQUFzQjtFQUN4QjtBQUNGOztBQUNBO0VBQ0U7SUFDRSxvQkFBb0I7SUFDcEIsZUFBZTtFQUNqQjtBQUNGIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvYXV0aC9hdXRoLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyIjZnVsbFBhZ2Uge1xuICBoZWlnaHQ6IDYwdmggIWltcG9ydGFudDtcbn1cblxuLmV4YW1wbGUtZm9ybSB7XG4gIG1pbi13aWR0aDogMTUwcHg7XG4gIG1heC13aWR0aDogNTAwcHg7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG4uZXhhbXBsZS1mdWxsLXdpZHRoIHtcbiAgd2lkdGg6IDUxJTtcbn1cblxuLnBhZ2UtY29udGVudCB7XG4gIHBvc2l0aW9uOiBmaXhlZDtcbiAgdG9wOiAwO1xuICByaWdodDogMDtcbiAgYm90dG9tOiAwO1xuICBsZWZ0OiAwO1xuICBtYXJnaW46IDUwcHggMjAwcHggMDtcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG59XG5cbi5idXR0b25zIHtcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbn1cblxuOjpuZy1kZWVwIC5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtcmlwcGxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2sgIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCAubWF0LWZvY3VzZWQgbWF0LWxhYmVsLFxuOjpuZy1kZWVwIG1hdC1sYWJlbCB7XG4gIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xufVxuOjpuZy1kZWVwIC5jZGstdGV4dC1maWVsZC1hdXRvZmlsbGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlICFpbXBvcnRhbnQ7XG59XG5cbjo6bmctZGVlcCBtYXQtY2FyZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IGNvcmFsICFpbXBvcnRhbnQ7XG4gIGNvbG9yOiBkYXJrcmVkICFpbXBvcnRhbnQ7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGRhcmtyZWQ7XG59XG5cbkBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDkwMHB4KSB7XG4gIC5wYWdlLWNvbnRlbnQge1xuICAgIG1hcmdpbjogMCA1MHB4ICFpbXBvcnRhbnQ7XG4gICAgcGFkZGluZzogMCAyMHB4O1xuICB9XG4gIC50ZXh0IHtcbiAgICBwYWRkaW5nOiAxMHB4IDUwcHggNDBweDtcbiAgfVxuICAuZXhhbXBsZS1mdWxsLXdpZHRoIHtcbiAgICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICB9XG59XG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA1MzBweCkge1xuICAucGFnZS1jb250ZW50IHtcbiAgICBtYXJnaW46IDAgIWltcG9ydGFudDtcbiAgICBwYWRkaW5nOiAwIDMwcHg7XG4gIH1cbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-auth',
                templateUrl: './auth.component.html',
                styleUrls: ['./auth.component.css'],
            }]
    }], function () { return [{ type: _auth_service__WEBPACK_IMPORTED_MODULE_1__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/auth/auth.guard.ts":
/*!******************************************!*\
  !*** ./src/app/pages/auth/auth.guard.ts ***!
  \******************************************/
/*! exports provided: AuthGuard */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthGuard", function() { return AuthGuard; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./auth.service */ "./src/app/pages/auth/auth.service.ts");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");





class AuthGuard {
    constructor(authService, router) {
        this.authService = authService;
        this.router = router;
    }
    canActivate(route, router) {
        return this.authService.user.pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_1__["map"])((user) => {
            const isAuth = !!user;
            if (isAuth) {
                return true;
            }
            return this.router.createUrlTree(['/auth']);
        }));
    }
}
AuthGuard.ɵfac = function AuthGuard_Factory(t) { return new (t || AuthGuard)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"])); };
AuthGuard.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthGuard, factory: AuthGuard.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthGuard, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/auth/auth.service.ts":
/*!********************************************!*\
  !*** ./src/app/pages/auth/auth.service.ts ***!
  \********************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _user_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./user.module */ "./src/app/pages/auth/user.module.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");







class AuthService {
    constructor(http, router) {
        this.http = http;
        this.router = router;
        this.user = new rxjs__WEBPACK_IMPORTED_MODULE_1__["BehaviorSubject"](null);
    }
    signup(email, password) {
        return this.http
            .post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyD49_K6-hYtJBMArAnwiYHJLPbiUuKv5Yk', {
            email: email,
            password: password,
            returnSecureToken: true,
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((resData) => this.handleAuth(resData.email, resData.localId, resData.idToken, +resData.expiresIn)));
    }
    login(email, password) {
        return this.http
            .post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyD49_K6-hYtJBMArAnwiYHJLPbiUuKv5Yk', {
            email: email,
            password: password,
            returnSecureToken: true,
        })
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_2__["tap"])((resData) => {
            this.handleAuth(resData.email, resData.localId, resData.idToken, +resData.expiresIn);
        }));
    }
    autoLogin() {
        const userData = JSON.parse(localStorage.getItem('userData'));
        if (!userData) {
            return;
        }
        const loadedUser = new _user_module__WEBPACK_IMPORTED_MODULE_3__["User"](userData.email, userData.id, userData._token, +userData._tokenExpirationTimestamp);
        this.user.next(loadedUser);
        if (loadedUser.token) {
            this.user.next(loadedUser);
            this.autoLogout(+userData._tokenExpirationTimestamp - new Date().getTime());
        }
    }
    logout() {
        this.user.next(null);
        this.router.navigate(['/']);
        localStorage.removeItem('userData');
        if (this.tokenExpirationTimer) {
            clearTimeout(this.tokenExpirationTimer);
        }
        if (this.tokenExpirationAlert) {
            clearTimeout(this.tokenExpirationAlert);
        }
    }
    autoLogout(expirationDuration) {
        this.tokenExpirationTimer = setTimeout(() => {
            this.logout();
        }, expirationDuration);
        this.tokenExpirationAlert = setTimeout(() => {
            alert("Your session expires in 5 seconds, you will be automatically logged out.");
        }, expirationDuration - 5000);
    }
    handleAuth(email, userId, token, expiresIn) {
        const expData = new Date(new Date().getTime() + +expiresIn * 1000);
        const user = new _user_module__WEBPACK_IMPORTED_MODULE_3__["User"](email, userId, token, expData.getTime());
        this.user.next(user);
        this.autoLogout(expiresIn * 1000);
        localStorage.setItem('userData', JSON.stringify(user));
    }
}
AuthService.ɵfac = function AuthService_Factory(t) { return new (t || AuthService)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵinject"](_angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"])); };
AuthService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineInjectable"]({ token: AuthService, factory: AuthService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](AuthService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_4__["HttpClient"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/auth/user.module.ts":
/*!*******************************************!*\
  !*** ./src/app/pages/auth/user.module.ts ***!
  \*******************************************/
/*! exports provided: User */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "User", function() { return User; });
class User {
    constructor(email, id, _token, _tokenExpirationTimestamp) {
        this.email = email;
        this.id = id;
        this._token = _token;
        this._tokenExpirationTimestamp = _tokenExpirationTimestamp;
    }
    get token() {
        if (!this._tokenExpirationTimestamp ||
            new Date().getTime() > this._tokenExpirationTimestamp) {
            return null;
        }
        return this._token;
    }
    get expiration() {
        return this._tokenExpirationTimestamp;
    }
}


/***/ }),

/***/ "./src/app/pages/byfn/byfn.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/byfn/byfn.component.ts ***!
  \**********************************************/
/*! exports provided: BYFNComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "BYFNComponent", function() { return BYFNComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/stepper.js");






class BYFNComponent {
    constructor(snackBar, router) {
        this.snackBar = snackBar;
        this.router = router;
    }
    ngOnInit() { }
    openSnackBar(message, action) {
        this.snackBar.open(message, action, { duration: 4000 });
    }
    navigateToGuide() {
        this.router.navigate(['/guide']);
        window.scrollTo(0, 0);
    }
}
BYFNComponent.ɵfac = function BYFNComponent_Factory(t) { return new (t || BYFNComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"])); };
BYFNComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: BYFNComponent, selectors: [["app-byfn"]], decls: 74, vars: 0, consts: [[1, "page-content"], [1, "text"], [1, "buttons"], ["mat-raised-button", "", 3, "click"], [1, "code"], ["stepper", ""], ["label", "Generating Network", "completed", "false", "optional", ""], ["label", "Setup Docker", "completed", "false", "optional", ""], ["label", "Up/Down Network", "completed", "false", "optional", ""], ["id", "smallNote", "mat-raised-button", "", 3, "click"], [1, "code", "align-left"], ["href", "https://hyperledger-fabric.readthedocs.io/en/release-1.4/build_network.html", "target", "blank"], ["mat-raised-button", ""]], template: function BYFNComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Build Your First Netrwork");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Firstly take a look at ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, "the guide");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " for Prerequisites & Samples etc. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BYFNComponent_Template_button_click_10_listener() { return ctx.navigateToGuide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Open Guide");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BYFNComponent_Template_button_click_12_listener() { return ctx.openSnackBar("Everything on these pages are adapted to Hyperledger Fabric v1.4", "OK"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " Note* ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, "Now, when you did it, go open terminal and navigate to this path:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, ".../fabric-samples/first-network$");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](19, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](20, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](21, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](22, "Then, go follow these steps:");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-vertical-stepper", null, 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "mat-step", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](27, " $ ./byfn.sh generate ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "mat-step", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " $ sudo groupadd docker ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](31, " $ sudo usermod -aG docker $USER ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](32, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, " $ newgrp docker ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](34, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](35, " $ docker run hello-world ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "mat-step", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, " $ ./byfn.sh up ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](38, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, " $ ./byfn.sh down ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](40, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](41, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](42, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BYFNComponent_Template_button_click_42_listener() { return ctx.openSnackBar("You can use flag -l behind UP command for specified language (e.g. -l node), also there is flag to specified ordering service (e.g. -o kafka)", "OK"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](43, " Note* ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](45, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](46, " After all, if you come to some error with message, while you running ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](47, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](48, "UP");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](49, " command, like this one: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](50, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "em");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, "\"FORBIDDEN --config update for existing channel did not pass initial checks...\"");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](54, " Then follow these steps below to turn off all docker containers: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function BYFNComponent_Template_button_click_56_listener() { return ctx.openSnackBar("Pay attention to the default answers (Yes/No)", "OK"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, " Note* ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "div", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](59, " $ docker stop $(docker ps -a -q) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](60, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](61, " $ docker rm $(docker ps -a -q) ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](62, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, " $ docker system prune -a ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](64, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, " $ docker volume prune ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](66, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](67, " $ docker network prune ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](68, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](69, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](70, "You can find a full guide for BYFN on official documentation");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](71, "a", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](72, "button", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](73, "Go Check Doc");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_3__["MatButton"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_4__["MatVerticalStepper"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_4__["MatStep"]], styles: [".mat-stepper-vertical {\n  background-color: black;\n}\n  .mat-step-header {\n  background-color: black;\n  border-radius: 3px;\n  transition: 0.2s;\n}\n  .mat-step-header:hover {\n  background-color: rgb(15, 15, 15);\n}\n  .mat-step-text-label {\n  color: orange;\n}\n  .mat-step-optional {\n  display: none;\n}\n  .mat-step-header .mat-step-icon {\n  color: orange;\n  border-radius: 50%;\n}\n  .mat-step-header .mat-step-icon-selected {\n  background-color: orange;\n  color: black;\n}\n  .mat-vertical-stepper-content {\n  background-color: black;\n  color: white;\n  text-align: left;\n  margin-left: 50px;\n  font-family: \"Nanum Gothic Coding\", monospace;\n}\n  .mat-vertical-content-container {\n  border-left: 1px solid orange !important;\n}\n\n  .mat-snack-bar-container {\n  width: 100% !important;\n  background-color: orange;\n  color: black;\n  box-shadow: 0px 0px 15px 0px black;\n}\n  .mat-simple-snackbar-action {\n  color: black !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvYnlmbi9ieWZuLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsWUFBWTtBQUNaO0VBQ0UsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSx1QkFBdUI7RUFDdkIsa0JBQWtCO0VBQ2xCLGdCQUFnQjtBQUNsQjtBQUNBO0VBQ0UsaUNBQWlDO0FBQ25DO0FBQ0E7RUFDRSxhQUFhO0FBQ2Y7QUFDQTtFQUNFLGFBQWE7QUFDZjtBQUNBO0VBQ0UsYUFBYTtFQUNiLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0Usd0JBQXdCO0VBQ3hCLFlBQVk7QUFDZDtBQUNBO0VBQ0UsdUJBQXVCO0VBQ3ZCLFlBQVk7RUFDWixnQkFBZ0I7RUFDaEIsaUJBQWlCO0VBQ2pCLDZDQUE2QztBQUMvQztBQUNBO0VBQ0Usd0NBQXdDO0FBQzFDO0FBRUEsV0FBVztBQUNYO0VBQ0Usc0JBQXNCO0VBQ3RCLHdCQUF3QjtFQUN4QixZQUFZO0VBSVosa0NBQWtDO0FBQ3BDO0FBQ0E7RUFDRSx1QkFBdUI7QUFDekIiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9ieWZuL2J5Zm4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIFNURVBQRVIgKi9cbjo6bmctZGVlcCAubWF0LXN0ZXBwZXItdmVydGljYWwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbn1cbjo6bmctZGVlcCAubWF0LXN0ZXAtaGVhZGVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIGJvcmRlci1yYWRpdXM6IDNweDtcbiAgdHJhbnNpdGlvbjogMC4ycztcbn1cbjo6bmctZGVlcCAubWF0LXN0ZXAtaGVhZGVyOmhvdmVyIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDE1LCAxNSwgMTUpO1xufVxuOjpuZy1kZWVwIC5tYXQtc3RlcC10ZXh0LWxhYmVsIHtcbiAgY29sb3I6IG9yYW5nZTtcbn1cbjo6bmctZGVlcCAubWF0LXN0ZXAtb3B0aW9uYWwge1xuICBkaXNwbGF5OiBub25lO1xufVxuOjpuZy1kZWVwIC5tYXQtc3RlcC1oZWFkZXIgLm1hdC1zdGVwLWljb24ge1xuICBjb2xvcjogb3JhbmdlO1xuICBib3JkZXItcmFkaXVzOiA1MCU7XG59XG46Om5nLWRlZXAgLm1hdC1zdGVwLWhlYWRlciAubWF0LXN0ZXAtaWNvbi1zZWxlY3RlZCB7XG4gIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcbiAgY29sb3I6IGJsYWNrO1xufVxuOjpuZy1kZWVwIC5tYXQtdmVydGljYWwtc3RlcHBlci1jb250ZW50IHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XG4gIGNvbG9yOiB3aGl0ZTtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgbWFyZ2luLWxlZnQ6IDUwcHg7XG4gIGZvbnQtZmFtaWx5OiBcIk5hbnVtIEdvdGhpYyBDb2RpbmdcIiwgbW9ub3NwYWNlO1xufVxuOjpuZy1kZWVwIC5tYXQtdmVydGljYWwtY29udGVudC1jb250YWluZXIge1xuICBib3JkZXItbGVmdDogMXB4IHNvbGlkIG9yYW5nZSAhaW1wb3J0YW50O1xufVxuXG4vKlNOQUNLQkFSKi9cbjo6bmctZGVlcCAubWF0LXNuYWNrLWJhci1jb250YWluZXIge1xuICB3aWR0aDogMTAwJSAhaW1wb3J0YW50O1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XG4gIGNvbG9yOiBibGFjaztcblxuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAwcHggMTVweCAwcHggYmxhY2s7XG4gIC1tb3otYm94LXNoYWRvdzogMHB4IDBweCAxNXB4IDBweCBibGFjaztcbiAgYm94LXNoYWRvdzogMHB4IDBweCAxNXB4IDBweCBibGFjaztcbn1cbjo6bmctZGVlcCAubWF0LXNpbXBsZS1zbmFja2Jhci1hY3Rpb24ge1xuICBjb2xvcjogYmxhY2sgIWltcG9ydGFudDtcbn1cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](BYFNComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-byfn',
                templateUrl: './byfn.component.html',
                styleUrls: ['./byfn.component.css'],
            }]
    }], function () { return [{ type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_1__["MatSnackBar"] }, { type: _angular_router__WEBPACK_IMPORTED_MODULE_2__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/glossary/glossary.component.ts":
/*!******************************************************!*\
  !*** ./src/app/pages/glossary/glossary.component.ts ***!
  \******************************************************/
/*! exports provided: GlossaryComponent, SearchPipe */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GlossaryComponent", function() { return GlossaryComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchPipe", function() { return SearchPipe; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_shared_data_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/data-storage.service */ "./src/app/shared/data-storage.service.ts");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");







function GlossaryComponent_div_14_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 5);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const item_r1 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.therm);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](item_r1.definition);
} }
class GlossaryComponent {
    constructor(dataStorage) {
        this.dataStorage = dataStorage;
    }
    ngOnInit() {
        this.dataStorage.fetchGlossary().subscribe((res) => {
            res = res.filter((item) => item !== null);
            res.sort((a, b) => {
                return a.therm < b.therm ? -1 : 1;
            });
            this.glossary = res;
        });
    }
}
GlossaryComponent.ɵfac = function GlossaryComponent_Factory(t) { return new (t || GlossaryComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_data_storage_service__WEBPACK_IMPORTED_MODULE_1__["DataStorageService"])); };
GlossaryComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GlossaryComponent, selectors: [["app-glossary"]], decls: 16, vars: 6, consts: [[1, "page-content"], [1, "text"], ["id", "search", "autocomplete", "off"], ["type", "text", "matInput", "", "name", "query", 3, "ngModel", "ngModelChange"], ["class", "item", 4, "ngFor", "ngForOf"], [1, "item"]], template: function GlossaryComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Glossary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Here where you can find some important terms you must know before starting your Hyperledger Fabric journey. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-form-field");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-label");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "Search our dictionary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "input", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngModelChange", function GlossaryComponent_Template_input_ngModelChange_11_listener($event) { return ctx.query = $event; });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](12, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](14, GlossaryComponent_div_14_Template, 5, 2, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](15, "search");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngModel", ctx.query);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind3"](15, 2, ctx.glossary, "therm, definition", ctx.query));
    } }, directives: function () { return [_angular_forms__WEBPACK_IMPORTED_MODULE_2__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_3__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_4__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_2__["NgModel"], _angular_common__WEBPACK_IMPORTED_MODULE_5__["NgForOf"]]; }, pipes: function () { return [SearchPipe]; }, styles: ["#search[_ngcontent-%COMP%]   mat-form-field[_ngcontent-%COMP%] {\n  width: 100%;\n}\n\n  .mat-focused .mat-form-field-ripple {\n  background-color: black !important;\n}\n\n  .mat-focused mat-label,   mat-label {\n  color: black !important;\n}\n\n  .cdk-text-field-autofilled {\n  background-color: orange !important;\n}\n\n.item[_ngcontent-%COMP%] {\n  text-align: left;\n  border-bottom: 1px solid black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZ2xvc3NhcnkvZ2xvc3NhcnkuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtFQUNFLFdBQVc7QUFDYjs7QUFFQTtFQUNFLGtDQUFrQztBQUNwQzs7QUFDQTs7RUFFRSx1QkFBdUI7QUFDekI7O0FBQ0E7RUFDRSxtQ0FBbUM7QUFDckM7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsOEJBQThCO0FBQ2hDIiwiZmlsZSI6InNyYy9hcHAvcGFnZXMvZ2xvc3NhcnkvZ2xvc3NhcnkuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIiNzZWFyY2ggbWF0LWZvcm0tZmllbGQge1xuICB3aWR0aDogMTAwJTtcbn1cblxuOjpuZy1kZWVwIC5tYXQtZm9jdXNlZCAubWF0LWZvcm0tZmllbGQtcmlwcGxlIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2sgIWltcG9ydGFudDtcbn1cbjo6bmctZGVlcCAubWF0LWZvY3VzZWQgbWF0LWxhYmVsLFxuOjpuZy1kZWVwIG1hdC1sYWJlbCB7XG4gIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xufVxuOjpuZy1kZWVwIC5jZGstdGV4dC1maWVsZC1hdXRvZmlsbGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlICFpbXBvcnRhbnQ7XG59XG5cbi5pdGVtIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIGJsYWNrO1xufSJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GlossaryComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-glossary',
                templateUrl: './glossary.component.html',
                styleUrls: ['./glossary.component.css'],
            }]
    }], function () { return [{ type: src_app_shared_data_storage_service__WEBPACK_IMPORTED_MODULE_1__["DataStorageService"] }]; }, null); })();
class SearchPipe {
    transform(value, keys, term) {
        if (!term)
            return value;
        return (value || []).filter((item) => keys
            .split(', ')
            .some((key) => item.hasOwnProperty(key) && new RegExp(term, 'gi').test(item[key])));
    }
}
SearchPipe.ɵfac = function SearchPipe_Factory(t) { return new (t || SearchPipe)(); };
SearchPipe.ɵpipe = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefinePipe"]({ name: "search", type: SearchPipe, pure: true });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](SearchPipe, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Pipe"],
        args: [{
                name: 'search',
            }]
    }], null, null); })();


/***/ }),

/***/ "./src/app/pages/guide/guide.component.ts":
/*!************************************************!*\
  !*** ./src/app/pages/guide/guide.component.ts ***!
  \************************************************/
/*! exports provided: GuideComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "GuideComponent", function() { return GuideComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/snack-bar */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/snack-bar.js");
/* harmony import */ var _angular_material_stepper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/stepper */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/stepper.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_card__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/material/card */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/card.js");







class GuideComponent {
    constructor(router, snackBar) {
        this.router = router;
        this.snackBar = snackBar;
    }
    ngOnInit() { }
    openSnackBar(message, action) {
        this.snackBar.open(message, action, { duration: 4000 });
    }
    goToGlossary() {
        this.router.navigate(['/glossary']);
        window.scrollTo(0, 0);
    }
}
GuideComponent.ɵfac = function GuideComponent_Factory(t) { return new (t || GuideComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"])); };
GuideComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: GuideComponent, selectors: [["app-guide"]], decls: 69, vars: 0, consts: [[1, "page-content"], [1, "text"], [1, "code"], ["stepper", ""], ["label", "cURL", "completed", "false", "optional", ""], ["label", "Docker & Docker Compose", "completed", "false", "optional", ""], ["label", "Go Lang", "completed", "false", "optional", ""], ["label", "NodeJS & NPM", "completed", "false", "optional", ""], ["label", "Python", "completed", "false", "optional", ""], ["mat-raised-button", "", 3, "click"], ["href", "https://hyperledger-fabric.readthedocs.io/en/release-1.4/arch-deep-dive.html", "target", "_blank"], ["mat-raised-button", ""], ["src", "assets/img/Architecture.png", "alt", "", "mat-card-image", ""], [1, "buttons"], ["href", "https://hyperledger-fabric.readthedocs.io/en/release-1.4/developapps/developing_applications.html", "target", "_blank"], ["href", "https://hyperledger-fabric.readthedocs.io/en/release-1.4/write_first_app.html", "target", "_blank"]], template: function GuideComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "The Beginner's Guide");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Here are, less or more, everything you have to know about Hyperledger Fabric as a beginner, in brief! ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, " Firstly, here you can check if you have installed all prerequisites, as quick as possible: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "mat-vertical-stepper", null, 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](12, "mat-step", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](13, " $ sudo apt-get install cURL ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "mat-step", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, " $ sudo apt-get install docker ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](16, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](17, " $ sudo apt-get install docker-compose ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "mat-step", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](19, " $ sudo apt-get install go-lang ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "mat-step", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, " $ sudo apt-get install nodejs ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](23, " $ npm install npm@5.6.0 -g ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "mat-step", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, " $ sudo apt-get install python2 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](26, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](27, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GuideComponent_Template_button_click_28_listener() { return ctx.openSnackBar("As you can see, we preper you to Hyperledger Fabric v1.4", "OK"); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](29, " Note* ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](30, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](32, " Now, with these commands bellow you can provide Samples, Binaries and Docker Images you need for BYFN: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](33, "div", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](34, " $ curl -sSL http://bit.ly/2ysbOFE | bash -s -- 1.4.6 1.4.6 0.4.18 ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](36, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](37, "Then, we strongly recommend that you read our glossary!");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "button", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function GuideComponent_Template_button_click_38_listener() { return ctx.goToGlossary(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "Go To Glossary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, " After that, you may wish to get acquainted with the Hyperledger Fabric architecture network. Let's check it on the link below. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "a", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](44, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](45, "HF Architecture");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](46, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](47, " Also we have this photo that might help you understand the architecture itself. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](48, "mat-card");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](49, "img", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](50, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](51, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](52, " Furthermore, we suggest you follow the official tutorial of Hyperledger Fabricto write your first application. But before that, it would be nice to read also the official chapter for developing application. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](53, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](54, "div", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](55, "a", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](56, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](57, "Developing Application");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](58, "a", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](59, "button", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](60, "Write First Application");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](61, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](62, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](63, " Finally, it's time to choose the language for SDK you will use in your future projects ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](64, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](65, " SDK is a replacement for all those commands that we run from the terminal. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](66, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](67, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](68, "So, we wish you good luck in your future work in this field.");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_stepper__WEBPACK_IMPORTED_MODULE_3__["MatVerticalStepper"], _angular_material_stepper__WEBPACK_IMPORTED_MODULE_3__["MatStep"], _angular_material_button__WEBPACK_IMPORTED_MODULE_4__["MatButton"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCard"], _angular_material_card__WEBPACK_IMPORTED_MODULE_5__["MatCardImage"]], styles: [".mat-stepper-vertical {\n  background-color: black;\n}\n  .mat-step-header {\n  background-color: black;\n  border-radius: 3px;\n  transition: 0.2s;\n}\n  .mat-step-header:hover {\n  background-color: rgb(15, 15, 15);\n}\n  .mat-step-text-label {\n  color: orange;\n}\n  .mat-step-optional {\n  display: none;\n}\n  .mat-step-header .mat-step-icon {\n  color: orange;\n  border-radius: 50%;\n}\n  .mat-step-header .mat-step-icon-selected {\n  background-color: orange;\n  color: black;\n}\n  .mat-vertical-stepper-content {\n  background-color: black;\n  color: white;\n  text-align: left;\n  margin-left: 50px;\n  font-family: \"Nanum Gothic Coding\", monospace;\n}\n  .mat-vertical-content-container {\n  border-left: 1px solid orange !important;\n}\n\n  .mat-snack-bar-container {\n  width: 100% !important;\n  background-color: orange;\n  color: black;\n  box-shadow: 0px 0px 15px 0px black;\n}\n  .mat-simple-snackbar-action {\n  color: black !important;\n}\nmat-card[_ngcontent-%COMP%] {\n  display: inline-block;\n  margin: 25px 0 50px;\n  padding: 0;\n  width: 70%;\n}\nmat-card[_ngcontent-%COMP%]   img[_ngcontent-%COMP%] {\n  width: 100%;\n}\n@media screen and (max-width: 900px) {\n  mat-card[_ngcontent-%COMP%] {\n    width: 100%;\n  }\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvZ3VpZGUvZ3VpZGUuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxZQUFZO0FBQ1o7RUFDRSx1QkFBdUI7QUFDekI7QUFDQTtFQUNFLHVCQUF1QjtFQUN2QixrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCO0FBQ0E7RUFDRSxpQ0FBaUM7QUFDbkM7QUFDQTtFQUNFLGFBQWE7QUFDZjtBQUNBO0VBQ0UsYUFBYTtBQUNmO0FBQ0E7RUFDRSxhQUFhO0VBQ2Isa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSx3QkFBd0I7RUFDeEIsWUFBWTtBQUNkO0FBQ0E7RUFDRSx1QkFBdUI7RUFDdkIsWUFBWTtFQUNaLGdCQUFnQjtFQUNoQixpQkFBaUI7RUFDakIsNkNBQTZDO0FBQy9DO0FBQ0E7RUFDRSx3Q0FBd0M7QUFDMUM7QUFFQSxXQUFXO0FBQ1g7RUFDRSxzQkFBc0I7RUFDdEIsd0JBQXdCO0VBQ3hCLFlBQVk7RUFJWixrQ0FBa0M7QUFDcEM7QUFDQTtFQUNFLHVCQUF1QjtBQUN6QjtBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLG1CQUFtQjtFQUNuQixVQUFVO0VBQ1YsVUFBVTtBQUNaO0FBQ0E7RUFDRSxXQUFXO0FBQ2I7QUFFQTtFQUNFO0lBQ0UsV0FBVztFQUNiO0FBQ0YiLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9ndWlkZS9ndWlkZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLyogU1RFUFBFUiAqL1xuOjpuZy1kZWVwIC5tYXQtc3RlcHBlci12ZXJ0aWNhbCB7XG4gIGJhY2tncm91bmQtY29sb3I6IGJsYWNrO1xufVxuOjpuZy1kZWVwIC5tYXQtc3RlcC1oZWFkZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgYm9yZGVyLXJhZGl1czogM3B4O1xuICB0cmFuc2l0aW9uOiAwLjJzO1xufVxuOjpuZy1kZWVwIC5tYXQtc3RlcC1oZWFkZXI6aG92ZXIge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTUsIDE1LCAxNSk7XG59XG46Om5nLWRlZXAgLm1hdC1zdGVwLXRleHQtbGFiZWwge1xuICBjb2xvcjogb3JhbmdlO1xufVxuOjpuZy1kZWVwIC5tYXQtc3RlcC1vcHRpb25hbCB7XG4gIGRpc3BsYXk6IG5vbmU7XG59XG46Om5nLWRlZXAgLm1hdC1zdGVwLWhlYWRlciAubWF0LXN0ZXAtaWNvbiB7XG4gIGNvbG9yOiBvcmFuZ2U7XG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcbn1cbjo6bmctZGVlcCAubWF0LXN0ZXAtaGVhZGVyIC5tYXQtc3RlcC1pY29uLXNlbGVjdGVkIHtcbiAgYmFja2dyb3VuZC1jb2xvcjogb3JhbmdlO1xuICBjb2xvcjogYmxhY2s7XG59XG46Om5nLWRlZXAgLm1hdC12ZXJ0aWNhbC1zdGVwcGVyLWNvbnRlbnQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjaztcbiAgY29sb3I6IHdoaXRlO1xuICB0ZXh0LWFsaWduOiBsZWZ0O1xuICBtYXJnaW4tbGVmdDogNTBweDtcbiAgZm9udC1mYW1pbHk6IFwiTmFudW0gR290aGljIENvZGluZ1wiLCBtb25vc3BhY2U7XG59XG46Om5nLWRlZXAgLm1hdC12ZXJ0aWNhbC1jb250ZW50LWNvbnRhaW5lciB7XG4gIGJvcmRlci1sZWZ0OiAxcHggc29saWQgb3JhbmdlICFpbXBvcnRhbnQ7XG59XG5cbi8qU05BQ0tCQVIqL1xuOjpuZy1kZWVwIC5tYXQtc25hY2stYmFyLWNvbnRhaW5lciB7XG4gIHdpZHRoOiAxMDAlICFpbXBvcnRhbnQ7XG4gIGJhY2tncm91bmQtY29sb3I6IG9yYW5nZTtcbiAgY29sb3I6IGJsYWNrO1xuXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDBweCAxNXB4IDBweCBibGFjaztcbiAgLW1vei1ib3gtc2hhZG93OiAwcHggMHB4IDE1cHggMHB4IGJsYWNrO1xuICBib3gtc2hhZG93OiAwcHggMHB4IDE1cHggMHB4IGJsYWNrO1xufVxuOjpuZy1kZWVwIC5tYXQtc2ltcGxlLXNuYWNrYmFyLWFjdGlvbiB7XG4gIGNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xufVxuXG5tYXQtY2FyZCB7XG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcbiAgbWFyZ2luOiAyNXB4IDAgNTBweDtcbiAgcGFkZGluZzogMDtcbiAgd2lkdGg6IDcwJTtcbn1cbm1hdC1jYXJkIGltZyB7XG4gIHdpZHRoOiAxMDAlO1xufVxuXG5AbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA5MDBweCkge1xuICBtYXQtY2FyZCB7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbn0iXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](GuideComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-guide',
                templateUrl: './guide.component.html',
                styleUrls: ['./guide.component.css'],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }, { type: _angular_material_snack_bar__WEBPACK_IMPORTED_MODULE_2__["MatSnackBar"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/home/home.component.ts":
/*!**********************************************!*\
  !*** ./src/app/pages/home/home.component.ts ***!
  \**********************************************/
/*! exports provided: HomeComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HomeComponent", function() { return HomeComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/__ivy_ngcc__/fesm2015/router.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");




class HomeComponent {
    constructor(router) {
        this.router = router;
    }
    ngOnInit() { }
    goToGlossary() {
        this.router.navigate(['/glossary']);
        window.scrollTo(0, 0);
    }
    navigateToGuide() {
        this.router.navigate(['/guide']);
        window.scrollTo(0, 0);
    }
}
HomeComponent.ɵfac = function HomeComponent_Factory(t) { return new (t || HomeComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"])); };
HomeComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: HomeComponent, selectors: [["app-home"]], decls: 27, vars: 0, consts: [[1, "page-content"], [1, "text"], ["src", "assets/img/logo-black.png", "alt", "Hypeledger | Logo | Fabric"], ["mat-stroked-button", "", 3, "click"]], template: function HomeComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "img", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, " Hooray! You are here, so you probably heard something about ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6, "blockchain technology");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7, " . ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, " If you are already familiar with blockchain and Hypeledger Fabric you are likely looking for something like this: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_11_listener() { return ctx.navigateToGuide(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, " Hyperledger Fabric Guide");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](13, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](14, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](15, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](16, " But if you are new in this world, then, first of all, you need to read our glossary where you can find some important terms you must know before starting your Hyperledger Fabric journey: ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](17, "button", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function HomeComponent_Template_button_click_17_listener() { return ctx.goToGlossary(); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](18, "Go To Glossary");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](20, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](21, "Why we need a blockchain?");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](22, "br");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](24, " Well, the members of some business network transact with each other, but they maintain separate records of their transactions. And the things they are transacting must have their provenance established each time they're sold to ensure that the business selling an item possesses a chain of title verifying their ownership of it. Modern technology has taken this process from stone tablets and paper folders to hard drives and cloud platforms, but the underlying structure is the same, you need days to clear securities transactions, contracts must be signed and executed manually and every database in the system contains unique information. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](25, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](26, " However, with blockchain technology we can coordinate their business network through a cost and risk associated with private information and processing while improving trust and visibility. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, directives: [_angular_material_button__WEBPACK_IMPORTED_MODULE_2__["MatButton"]], styles: ["button[_ngcontent-%COMP%] {\n  \n  border: 1px solid black !important;\n  color: black;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDRSwrQkFBK0I7RUFDL0Isa0NBQWtDO0VBQ2xDLFlBQVk7QUFDZCIsImZpbGUiOiJzcmMvYXBwL3BhZ2VzL2hvbWUvaG9tZS5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYnV0dG9uIHtcbiAgLyogYmFja2dyb3VuZC1jb2xvcjogIzA4MDgwODsgKi9cbiAgYm9yZGVyOiAxcHggc29saWQgYmxhY2sgIWltcG9ydGFudDtcbiAgY29sb3I6IGJsYWNrO1xufVxuIl19 */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](HomeComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-home',
                templateUrl: './home.component.html',
                styleUrls: ['./home.component.css'],
            }]
    }], function () { return [{ type: _angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"] }]; }, null); })();


/***/ }),

/***/ "./src/app/pages/qna/qna.component.ts":
/*!********************************************!*\
  !*** ./src/app/pages/qna/qna.component.ts ***!
  \********************************************/
/*! exports provided: QNAComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QNAComponent", function() { return QNAComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var src_app_shared_data_storage_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! src/app/shared/data-storage.service */ "./src/app/shared/data-storage.service.ts");
/* harmony import */ var _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../auth/auth.service */ "./src/app/pages/auth/auth.service.ts");
/* harmony import */ var _angular_material_expansion__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/material/expansion */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/expansion.js");
/* harmony import */ var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @angular/common */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/common.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/__ivy_ngcc__/fesm2015/forms.js");
/* harmony import */ var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/material/form-field */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/form-field.js");
/* harmony import */ var _angular_material_input__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @angular/material/input */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/input.js");
/* harmony import */ var _angular_material_button__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @angular/material/button */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/button.js");
/* harmony import */ var _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @angular/material/icon */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/icon.js");
/* harmony import */ var _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/material/tooltip */ "./node_modules/@angular/material/__ivy_ngcc__/fesm2015/tooltip.js");












function QNAComponent_form_12_Template(rf, ctx) { if (rf & 1) {
    const _r7 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "form", 16, 17);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("ngSubmit", function QNAComponent_form_12_Template_form_ngSubmit_0_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r7); const _r5 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵreference"](1); const ctx_r6 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r6.onSubmitForm(_r5); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "mat-form-field", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "Subject:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](5, "input", 19);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "mat-form-field", 18);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-label");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](8, "Question content:");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](9, "textarea", 20);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](10, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "button", 21);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "Ask");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function QNAComponent_div_16_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "There is no answered questions yet...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function QNAComponent_div_17_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](6);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const question_r8 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](question_r8.question.subject);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Q: ", question_r8.question.content, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("A: ", question_r8.answer, "");
} }
function QNAComponent_div_21_Template(rf, ctx) { if (rf & 1) {
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "br");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "i");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4, "There is no unanswered questions yet...");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} }
function QNAComponent_div_22_Template(rf, ctx) { if (rf & 1) {
    const _r12 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵgetCurrentView"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 22);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "h3");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](3, "small");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](4);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](5, "div", 23);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "p");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](7);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "div", 24);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-icon", 25);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QNAComponent_div_22_Template_mat_icon_click_9_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const i_r10 = ctx.index; const ctx_r11 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r11.upvote(i_r10); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](10, "keyboard_arrow_up");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](11, "mat-icon", 26);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QNAComponent_div_22_Template_mat_icon_click_11_listener() { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵrestoreView"](_r12); const i_r10 = ctx.index; const ctx_r13 = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵnextContext"](); return ctx_r13.downvote(i_r10); });
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](12, "keyboard_arrow_down");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
} if (rf & 2) {
    const question_r9 = ctx.$implicit;
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" ", question_r9.subject, " ");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](2);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"]("Rate: ", question_r9.rate, "");
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](3);
    _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate"](question_r9.content);
} }
class QNAComponent {
    constructor(dataStorage, authService) {
        this.dataStorage = dataStorage;
        this.authService = authService;
        this.isLoading = false;
        this.questions = new Array();
        this.answeredQuestions = new Array();
        dataStorage.uQuestions.subscribe(data => {
            this.questions = data;
        });
        // dataStorage.rating.pipe(take(1)).subscribe(data => {
        //   this.rating = data;
        //   // this.averageRating = data.average;
        // })
    }
    ngOnInit() {
        // this.dataStorage.fetchQuestions().subscribe((res) => {
        //   this.questions = res;
        // });
        this.dataStorage.fetchQuestions();
        this.dataStorage.fetchAnsweredQuestions().subscribe((res) => {
            this.answeredQuestions = res;
        });
        this.userSubscription = this.authService.user.subscribe((user) => {
            this.isAuth = !!user;
            this.currUser = user;
        });
        // Better way to fetch data. Subscribe in component!
        this.dataStorage.fetchRating().subscribe(res => {
            this.rating = res;
            if (res.users[this.currUser.email.replace('.', '-')]) {
                let x = document.querySelector('#star_' + res.users[this.currUser.email.replace('.', '-')]);
                x.click();
            }
        });
    }
    onSubmitForm(form) {
        if (!form.valid) {
            return;
        }
        const subject = form.value.subject;
        const content = form.value.content;
        this.questions.push({
            subject: subject,
            content: content,
            rate: 0,
            timestamp: new Date().getTime(),
            voters: { up: new Array(), down: new Array() },
        });
        this.dataStorage.uQuestions.next(this.questions);
        this.dataStorage.saveQuestions();
        form.reset();
    }
    upvote(i) {
        this.initVoters(i);
        if (
        // If you already voted up then you want to remove your vote... Okay
        this.questions[i].voters.up &&
            this.questions[i].voters.up.includes(this.currUser.email)) {
            this.questions[i].rate--;
            this.questions[i].voters.up = this.questions[i].voters.up.filter((x) => {
                return x !== this.currUser.email;
            });
            this.sortQuestions();
            this.saveQuestions();
            return;
        }
        // Otherwise
        if (
        // If you vote up, but you VOTED DOWN before then remove that 1 downvote
        this.questions[i].voters.down &&
            this.questions[i].voters.down.includes(this.currUser.email)) {
            this.questions[i].rate++;
            this.questions[i].voters.down = this.questions[i].voters.down.filter((x) => {
                return x !== this.currUser.email;
            });
        }
        // Now include your upvote
        this.questions[i].rate++;
        if (!this.questions[i].voters.up) {
            this.questions[i].voters.up = new Array();
        }
        this.questions[i].voters.up.push(this.currUser.email);
        // Save changes for two *Otherwise
        this.sortQuestions();
        this.saveQuestions();
    }
    downvote(i) {
        this.initVoters(i);
        if (
        // If you already voted down then you want to remove your vote... Okay
        this.questions[i].voters.down &&
            this.questions[i].voters.down.includes(this.currUser.email)) {
            this.questions[i].rate++;
            this.questions[i].voters.down = this.questions[i].voters.down.filter((x) => {
                return x !== this.currUser.email;
            });
            this.sortQuestions();
            this.saveQuestions();
            return;
        }
        // Otherwise
        if (
        // If you vote down, but you VOTED UP before then remove that 1 upvote
        this.questions[i].voters.up &&
            this.questions[i].voters.up.includes(this.currUser.email)) {
            this.questions[i].rate--;
            this.questions[i].voters.up = this.questions[i].voters.up.filter((x) => {
                return x !== this.currUser.email;
            });
        }
        // Now include your upvote
        this.questions[i].rate--;
        if (!this.questions[i].voters.down) {
            this.questions[i].voters.down = new Array();
        }
        this.questions[i].voters.down.push(this.currUser.email);
        // Save changes for two *Otherwise
        this.sortQuestions();
        this.saveQuestions();
    }
    initVoters(i) {
        if (!this.questions[i].voters) {
            this.questions[i].voters = {
                up: new Array(),
                down: new Array()
            };
        }
    }
    sortQuestions() {
        this.questions.sort((a, b) => (a.rate > b.rate ? -1 : 1));
    }
    saveQuestions() {
        this.dataStorage.uQuestions.next(this.questions);
        this.dataStorage.saveQuestions();
    }
    onRating(i) {
        let email = this.currUser.email;
        email = email.replace('.', '-');
        if (this.rating.users[email]) {
            this.rating.sum -= this.rating.users[email];
            this.rating.votes--;
        }
        this.rating.sum += i;
        this.rating.votes++;
        this.rating.users[email] = i;
        this.dataStorage.saveRating(this.rating);
    }
    ngOnDestroy() {
        this.userSubscription.unsubscribe();
    }
}
QNAComponent.ɵfac = function QNAComponent_Factory(t) { return new (t || QNAComponent)(_angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](src_app_shared_data_storage_service__WEBPACK_IMPORTED_MODULE_1__["DataStorageService"]), _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdirectiveInject"](_auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"])); };
QNAComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: QNAComponent, selectors: [["app-qna"]], decls: 46, vars: 9, consts: [[1, "page-content"], [1, "text"], ["autocomplete", "off", 3, "ngSubmit", 4, "ngIf"], [4, "ngIf"], ["class", "question", 4, "ngFor", "ngForOf"], ["id", "rate", 1, "rating"], ["type", "radio", "id", "star_5", "name", "rate", "value", "5", 3, "click"], ["for", "star_5", "title", "Five"], ["type", "radio", "id", "star_4", "name", "rate", "value", "4", 3, "click"], ["for", "star_4", "title", "Four"], ["type", "radio", "id", "star_3", "name", "rate", "value", "3", 3, "click"], ["for", "star_3", "title", "Three"], ["type", "radio", "id", "star_2", "name", "rate", "value", "2", 3, "click"], ["for", "star_2", "title", "Two"], ["type", "radio", "id", "star_1", "name", "rate", "value", "1", 3, "click"], ["for", "star_1", "title", "One"], ["autocomplete", "off", 3, "ngSubmit"], ["authForm", "ngForm"], [1, "example-full-width"], ["matInput", "", "type", "text", "ngModel", "", "placeholder", "Smart Contract", "minlength", "4", "name", "subject"], ["matInput", "", "rows", "5", "minlength", "10", "ngModel", "", "placeholder", "I have heard that smart contracts can be written in two ways. What are those ways?", "name", "content"], ["mat-raised-button", "", "type", "submit"], [1, "question"], [1, "content"], [1, "vote"], ["matTooltip", "Upvote this question", 3, "click"], ["matTooltip", "Downvote", 3, "click"]], template: function QNAComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](1, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](2, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](3, "Questions & Answers");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](4, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](5, " Here, on this page, you can find answers to some questions. You can ask your question absolutely anonymously, but also read the current unanswered questions, so you can upvote some of them to be brought to the top of the list, because we will answer questions with more votes faster. ");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](6, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](7, "mat-expansion-panel");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](8, "mat-expansion-panel-header");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](9, "mat-panel-title");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](10, "strong");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](11, "Ask your question");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](12, QNAComponent_form_12_Template, 13, 0, "form", 2);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](13, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](14, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](15, "Answered questions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](16, QNAComponent_div_16_Template, 5, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](17, QNAComponent_div_17_Template, 7, 3, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](18, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](19, "h1");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](20, "Unanswered questions");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](21, QNAComponent_div_21_Template, 5, 0, "div", 3);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtemplate"](22, QNAComponent_div_22_Template, 13, 3, "div", 4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](23, "div", 1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](24, "h3");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](25, "Rate our work, initiative, and effort...");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](26, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](27, "section", 5);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](28, "input", 6);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QNAComponent_Template_input_click_28_listener() { return ctx.onRating(5); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](29, "label", 7);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](30, "\u2605");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](31, "input", 8);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QNAComponent_Template_input_click_31_listener() { return ctx.onRating(4); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](32, "label", 9);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](33, "\u2605");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](34, "input", 10);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QNAComponent_Template_input_click_34_listener() { return ctx.onRating(3); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](35, "label", 11);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](36, "\u2605");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](37, "input", 12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QNAComponent_Template_input_click_37_listener() { return ctx.onRating(2); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](38, "label", 13);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](39, "\u2605");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](40, "input", 14);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵlistener"]("click", function QNAComponent_Template_input_click_40_listener() { return ctx.onRating(1); });
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](41, "label", 15);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](42, "\u2605");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](43, "p");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtext"](44);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipe"](45, "number");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } if (rf & 2) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](12);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.isLoading);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.answeredQuestions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.answeredQuestions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](4);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngIf", !ctx.questions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](1);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵproperty"]("ngForOf", ctx.questions);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵadvance"](22);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵtextInterpolate1"](" Current average rate: ", ctx.rating ? _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵpipeBind2"](45, 6, ctx.rating.sum / ctx.rating.votes, "1.1-1") : "...", " ");
    } }, directives: [_angular_material_expansion__WEBPACK_IMPORTED_MODULE_3__["MatExpansionPanel"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_3__["MatExpansionPanelHeader"], _angular_material_expansion__WEBPACK_IMPORTED_MODULE_3__["MatExpansionPanelTitle"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgIf"], _angular_common__WEBPACK_IMPORTED_MODULE_4__["NgForOf"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ɵangular_packages_forms_forms_y"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatusGroup"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgForm"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatFormField"], _angular_material_form_field__WEBPACK_IMPORTED_MODULE_6__["MatLabel"], _angular_material_input__WEBPACK_IMPORTED_MODULE_7__["MatInput"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["DefaultValueAccessor"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgControlStatus"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["NgModel"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["MinLengthValidator"], _angular_material_button__WEBPACK_IMPORTED_MODULE_8__["MatButton"], _angular_material_icon__WEBPACK_IMPORTED_MODULE_9__["MatIcon"], _angular_material_tooltip__WEBPACK_IMPORTED_MODULE_10__["MatTooltip"]], pipes: [_angular_common__WEBPACK_IMPORTED_MODULE_4__["DecimalPipe"]], styles: [".mat-expansion-panel {\n  background-color: orange;\n}\n\nform[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n}\n\n  .mat-focused .mat-form-field-ripple {\n  background-color: black !important;\n}\n\n  .mat-focused mat-label,   mat-label {\n  color: black !important;\n}\n\n  .cdk-text-field-autofilled {\n  background-color: orange !important;\n}\n\n.question[_ngcontent-%COMP%] {\n  text-align: left;\n  padding: 10px 20px 25px;\n  margin: 30px 0 20px;\n  border: 1px solid black;\n  border-radius: 3px;\n}\n\n.question[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%] {\n  display: flex;\n  justify-content: space-between;\n}\n\n.question[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%] {\n  width: 100%;\n  display: flex;\n  justify-content: space-between;\n}\n\n.question[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .vote[_ngcontent-%COMP%] {\n  width: 30px;\n  display: flex;\n  flex-direction: column;\n}\n\n.question[_ngcontent-%COMP%]   .content[_ngcontent-%COMP%]   .vote[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  cursor: pointer;\n}\n\n\n\n.rating[_ngcontent-%COMP%] {\n  \n  width: 150px;\n  height: 30px;\n  padding: 5px 10px;\n  margin: 50px auto 20px;\n  border-radius: 30px;\n  background: #080808;\n  display: block;\n  overflow: hidden;\n\n  box-shadow: 0 1px #080808, 0 5px #151515, 0 9px 6px -3px #303030;\n\n  unicode-bidi: bidi-override;\n  direction: rtl;\n}\n\n.rating[_ngcontent-%COMP%]:not(:checked)    > input[_ngcontent-%COMP%] {\n  display: none;\n}\n\n\n\n\n\n#rate[_ngcontent-%COMP%]:not(:checked)    > label[_ngcontent-%COMP%] {\n  cursor: pointer;\n  float: right;\n  width: 30px;\n  height: 30px;\n  display: block;\n\n  color: white;\n  line-height: 33px;\n  text-align: center;\n}\n\n#rate[_ngcontent-%COMP%]:not(:checked)    > label[_ngcontent-%COMP%]:hover, #rate[_ngcontent-%COMP%]:not(:checked)    > label[_ngcontent-%COMP%]:hover    ~ label[_ngcontent-%COMP%] {\n  color: gold;\n}\n\n#rate[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%]:hover, #rate[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%]:checked    + label[_ngcontent-%COMP%]:hover    ~ label[_ngcontent-%COMP%], #rate[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%]:checked    ~ label[_ngcontent-%COMP%]:hover, #rate[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%]:checked    ~ label[_ngcontent-%COMP%]:hover    ~ label[_ngcontent-%COMP%], #rate[_ngcontent-%COMP%]    > label[_ngcontent-%COMP%]:hover    ~ input[_ngcontent-%COMP%]:checked    ~ label[_ngcontent-%COMP%] {\n  color: gold;\n}\n\n#rate[_ngcontent-%COMP%]    > input[_ngcontent-%COMP%]:checked    ~ label[_ngcontent-%COMP%] {\n  color: orange;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvcW5hL3FuYS5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0VBQ0Usd0JBQXdCO0FBQzFCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHNCQUFzQjtBQUN4Qjs7QUFFQTtFQUNFLGtDQUFrQztBQUNwQzs7QUFDQTs7RUFFRSx1QkFBdUI7QUFDekI7O0FBQ0E7RUFDRSxtQ0FBbUM7QUFDckM7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsdUJBQXVCO0VBQ3ZCLG1CQUFtQjtFQUNuQix1QkFBdUI7RUFDdkIsa0JBQWtCO0FBQ3BCOztBQUNBO0VBQ0UsYUFBYTtFQUNiLDhCQUE4QjtBQUNoQzs7QUFDQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IsOEJBQThCO0FBQ2hDOztBQUNBO0VBQ0UsV0FBVztFQUNYLGFBQWE7RUFDYixzQkFBc0I7QUFDeEI7O0FBQ0E7RUFDRSxlQUFlO0FBQ2pCOztBQUVBLHNCQUFzQjs7QUFDdEI7RUFDRTs7OztjQUlZO0VBQ1osWUFBWTtFQUNaLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsc0JBQXNCO0VBQ3RCLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLGdCQUFnQjs7RUFFaEIsZ0VBQWdFOztFQUVoRSwyQkFBMkI7RUFDM0IsY0FBYztBQUNoQjs7QUFDQTtFQUNFLGFBQWE7QUFDZjs7QUFFQSxxQkFBcUI7O0FBQ3JCOztHQUVHOztBQUNIO0VBQ0UsZUFBZTtFQUNmLFlBQVk7RUFDWixXQUFXO0VBQ1gsWUFBWTtFQUNaLGNBQWM7O0VBRWQsWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixrQkFBa0I7QUFDcEI7O0FBQ0E7O0VBRUUsV0FBVztBQUNiOztBQUNBOzs7OztFQUtFLFdBQVc7QUFDYjs7QUFDQTtFQUNFLGFBQWE7QUFDZjs7QUFDQSxtQkFBbUI7O0FBQ25COzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7R0EyQkciLCJmaWxlIjoic3JjL2FwcC9wYWdlcy9xbmEvcW5hLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyI6Om5nLWRlZXAgLm1hdC1leHBhbnNpb24tcGFuZWwge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2U7XG59XG5cbmZvcm0ge1xuICBkaXNwbGF5OiBmbGV4O1xuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xufVxuXG46Om5nLWRlZXAgLm1hdC1mb2N1c2VkIC5tYXQtZm9ybS1maWVsZC1yaXBwbGUge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBibGFjayAhaW1wb3J0YW50O1xufVxuOjpuZy1kZWVwIC5tYXQtZm9jdXNlZCBtYXQtbGFiZWwsXG46Om5nLWRlZXAgbWF0LWxhYmVsIHtcbiAgY29sb3I6IGJsYWNrICFpbXBvcnRhbnQ7XG59XG46Om5nLWRlZXAgLmNkay10ZXh0LWZpZWxkLWF1dG9maWxsZWQge1xuICBiYWNrZ3JvdW5kLWNvbG9yOiBvcmFuZ2UgIWltcG9ydGFudDtcbn1cblxuLnF1ZXN0aW9uIHtcbiAgdGV4dC1hbGlnbjogbGVmdDtcbiAgcGFkZGluZzogMTBweCAyMHB4IDI1cHg7XG4gIG1hcmdpbjogMzBweCAwIDIwcHg7XG4gIGJvcmRlcjogMXB4IHNvbGlkIGJsYWNrO1xuICBib3JkZXItcmFkaXVzOiAzcHg7XG59XG4ucXVlc3Rpb24gaDMge1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG59XG4ucXVlc3Rpb24gLmNvbnRlbnQge1xuICB3aWR0aDogMTAwJTtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xufVxuLnF1ZXN0aW9uIC5jb250ZW50IC52b3RlIHtcbiAgd2lkdGg6IDMwcHg7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG59XG4ucXVlc3Rpb24gLmNvbnRlbnQgLnZvdGUgbWF0LWljb24ge1xuICBjdXJzb3I6IHBvaW50ZXI7XG59XG5cbi8qIC0gLSAtIC0gLSBSQVRJTkdTICovXG4ucmF0aW5nIHtcbiAgLyogcG9zaXRpb246IGFic29sdXRlO1xuICB0b3A6IDA7XG4gIGxlZnQ6IDA7XG4gIHJpZ2h0OiAwO1xuICBib3R0b206IDA7ICovXG4gIHdpZHRoOiAxNTBweDtcbiAgaGVpZ2h0OiAzMHB4O1xuICBwYWRkaW5nOiA1cHggMTBweDtcbiAgbWFyZ2luOiA1MHB4IGF1dG8gMjBweDtcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgYmFja2dyb3VuZDogIzA4MDgwODtcbiAgZGlzcGxheTogYmxvY2s7XG4gIG92ZXJmbG93OiBoaWRkZW47XG5cbiAgYm94LXNoYWRvdzogMCAxcHggIzA4MDgwOCwgMCA1cHggIzE1MTUxNSwgMCA5cHggNnB4IC0zcHggIzMwMzAzMDtcblxuICB1bmljb2RlLWJpZGk6IGJpZGktb3ZlcnJpZGU7XG4gIGRpcmVjdGlvbjogcnRsO1xufVxuLnJhdGluZzpub3QoOmNoZWNrZWQpID4gaW5wdXQge1xuICBkaXNwbGF5OiBub25lO1xufVxuXG4vKiAtIC0gLSAtIC0gUkFUSU5HICovXG4vKiAjcmF0ZSB7XG4gIHRvcDogLTY1cHg7XG59ICovXG4jcmF0ZTpub3QoOmNoZWNrZWQpID4gbGFiZWwge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZsb2F0OiByaWdodDtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgZGlzcGxheTogYmxvY2s7XG5cbiAgY29sb3I6IHdoaXRlO1xuICBsaW5lLWhlaWdodDogMzNweDtcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xufVxuI3JhdGU6bm90KDpjaGVja2VkKSA+IGxhYmVsOmhvdmVyLFxuI3JhdGU6bm90KDpjaGVja2VkKSA+IGxhYmVsOmhvdmVyIH4gbGFiZWwge1xuICBjb2xvcjogZ29sZDtcbn1cbiNyYXRlID4gaW5wdXQ6Y2hlY2tlZCArIGxhYmVsOmhvdmVyLFxuI3JhdGUgPiBpbnB1dDpjaGVja2VkICsgbGFiZWw6aG92ZXIgfiBsYWJlbCxcbiNyYXRlID4gaW5wdXQ6Y2hlY2tlZCB+IGxhYmVsOmhvdmVyLFxuI3JhdGUgPiBpbnB1dDpjaGVja2VkIH4gbGFiZWw6aG92ZXIgfiBsYWJlbCxcbiNyYXRlID4gbGFiZWw6aG92ZXIgfiBpbnB1dDpjaGVja2VkIH4gbGFiZWwge1xuICBjb2xvcjogZ29sZDtcbn1cbiNyYXRlID4gaW5wdXQ6Y2hlY2tlZCB+IGxhYmVsIHtcbiAgY29sb3I6IG9yYW5nZTtcbn1cbi8qIC0gLSAtIC0gLSBMSUtFICovXG4vKiAjbGlrZSB7XG4gIGJvdHRvbTogLTY1cHg7XG59XG4jbGlrZTpub3QoOmNoZWNrZWQpID4gbGFiZWwge1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGZsb2F0OiByaWdodDtcbiAgd2lkdGg6IDMwcHg7XG4gIGhlaWdodDogMzBweDtcbiAgZGlzcGxheTogYmxvY2s7XG5cbiAgY29sb3I6IHJnYmEoMjMzLCA1NCwgNDAsIDAuNCk7XG4gIGxpbmUtaGVpZ2h0OiAzM3B4O1xuICB0ZXh0LWFsaWduOiBjZW50ZXI7XG59XG4jbGlrZTpub3QoOmNoZWNrZWQpID4gbGFiZWw6aG92ZXIsXG4jbGlrZTpub3QoOmNoZWNrZWQpID4gbGFiZWw6aG92ZXIgfiBsYWJlbCB7XG4gIGNvbG9yOiByZ2JhKDIzMywgNTQsIDQwLCAwLjYpO1xufVxuI2xpa2UgPiBpbnB1dDpjaGVja2VkICsgbGFiZWw6aG92ZXIsXG4jbGlrZSA+IGlucHV0OmNoZWNrZWQgKyBsYWJlbDpob3ZlciB+IGxhYmVsLFxuI2xpa2UgPiBpbnB1dDpjaGVja2VkIH4gbGFiZWw6aG92ZXIsXG4jbGlrZSA+IGlucHV0OmNoZWNrZWQgfiBsYWJlbDpob3ZlciB+IGxhYmVsLFxuI2xpa2UgPiBsYWJlbDpob3ZlciB+IGlucHV0OmNoZWNrZWQgfiBsYWJlbCB7XG4gIGNvbG9yOiByZ2JhKDIzMywgNTQsIDQwLCAwLjgpO1xufVxuI2xpa2UgPiBpbnB1dDpjaGVja2VkIH4gbGFiZWwge1xuICBjb2xvcjogcmdiKDIzMywgNTQsIDQwKTtcbn0gKi9cbiJdfQ== */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](QNAComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-qna',
                templateUrl: './qna.component.html',
                styleUrls: ['./qna.component.css'],
            }]
    }], function () { return [{ type: src_app_shared_data_storage_service__WEBPACK_IMPORTED_MODULE_1__["DataStorageService"] }, { type: _auth_auth_service__WEBPACK_IMPORTED_MODULE_2__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/data-storage.service.ts":
/*!************************************************!*\
  !*** ./src/app/shared/data-storage.service.ts ***!
  \************************************************/
/*! exports provided: DataStorageService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataStorageService", function() { return DataStorageService; });
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm2015/operators/index.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm2015/index.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/__ivy_ngcc__/fesm2015/http.js");
/* harmony import */ var _pages_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../pages/auth/auth.service */ "./src/app/pages/auth/auth.service.ts");






class DataStorageService {
    // public rating = new BehaviorSubject<any>(null);
    constructor(http, authService) {
        this.http = http;
        this.authService = authService;
        this.ROOT_URL = 'https://test-38ac4.firebaseio.com';
        this.uQuestions = new rxjs__WEBPACK_IMPORTED_MODULE_2__["BehaviorSubject"](null);
    }
    fetchRating() {
        return this.http.get(this.ROOT_URL + '/rating.json');
    }
    saveRating(data) {
        this.http.put(this.ROOT_URL + '/rating.json', data).subscribe();
    }
    fetchGlossary() {
        return this.http.get(this.ROOT_URL + '/glossary.json');
    }
    fetchQuestions() {
        this.http
            .get(this.ROOT_URL + '/questions.json')
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])((res) => {
            return Object.keys(res).map((key) => {
                return res[key];
            });
        }))
            .subscribe((res) => {
            res.sort((a, b) => (a.rate > b.rate ? -1 : 1));
            this.uQuestions.next(res);
        });
    }
    fetchAnsweredQuestions() {
        return this.http.get(this.ROOT_URL + '/QnA.json').pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])((res) => {
            return Object.keys(res).map((key) => {
                return res[key];
            });
        }));
    }
    saveQuestions() {
        let data;
        this.uQuestions
            .pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["take"])(1), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_0__["map"])((x) => {
            x.forEach((element) => {
                if (!element.timestamp) {
                    console.log('New Question Added To DB');
                    setTimeout(() => {
                        element.timestamp = new Date().getTime();
                    }, 10);
                }
            });
            return x;
        }))
            .subscribe((r) => {
            data = JSON.stringify(r);
            // this.fetchVotes();
        });
        this.http.put(this.ROOT_URL + '/questions.json', data).subscribe();
    }
}
DataStorageService.ɵfac = function DataStorageService_Factory(t) { return new (t || DataStorageService)(_angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]), _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵinject"](_pages_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"])); };
DataStorageService.ɵprov = _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵɵdefineInjectable"]({ token: DataStorageService, factory: DataStorageService.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_1__["ɵsetClassMetadata"](DataStorageService, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"],
        args: [{ providedIn: 'root' }]
    }], function () { return [{ type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"] }, { type: _pages_auth_auth_service__WEBPACK_IMPORTED_MODULE_4__["AuthService"] }]; }, null); })();


/***/ }),

/***/ "./src/app/shared/loading-spinner/loading-spinner.component.ts":
/*!*********************************************************************!*\
  !*** ./src/app/shared/loading-spinner/loading-spinner.component.ts ***!
  \*********************************************************************/
/*! exports provided: LoadingSpinnerComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoadingSpinnerComponent", function() { return LoadingSpinnerComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");


class LoadingSpinnerComponent {
}
LoadingSpinnerComponent.ɵfac = function LoadingSpinnerComponent_Factory(t) { return new (t || LoadingSpinnerComponent)(); };
LoadingSpinnerComponent.ɵcmp = _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵdefineComponent"]({ type: LoadingSpinnerComponent, selectors: [["app-loading-spinner"]], decls: 5, vars: 0, consts: [[1, "lds-ring"]], template: function LoadingSpinnerComponent_Template(rf, ctx) { if (rf & 1) {
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementStart"](0, "div", 0);
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](1, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](2, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](3, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelement"](4, "div");
        _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵɵelementEnd"]();
    } }, styles: [".lds-ring[_ngcontent-%COMP%] {\n    display: inline-block;\n    position: relative;\n    width: 80px;\n    height: 80px;\n  }\n  .lds-ring[_ngcontent-%COMP%]   div[_ngcontent-%COMP%] {\n    box-sizing: border-box;\n    display: block;\n    position: absolute;\n    width: 64px;\n    height: 64px;\n    margin: 8px;\n    border: 8px solid black;\n    border-radius: 50%;\n    -webkit-animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n            animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;\n    border-color: black transparent transparent transparent;\n  }\n  .lds-ring[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(1) {\n    -webkit-animation-delay: -0.45s;\n            animation-delay: -0.45s;\n  }\n  .lds-ring[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(2) {\n    -webkit-animation-delay: -0.3s;\n            animation-delay: -0.3s;\n  }\n  .lds-ring[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]:nth-child(3) {\n    -webkit-animation-delay: -0.15s;\n            animation-delay: -0.15s;\n  }\n  @-webkit-keyframes lds-ring {\n    0% {\n      transform: rotate(0deg);\n    }\n    100% {\n      transform: rotate(360deg);\n    }\n  }\n  @keyframes lds-ring {\n    0% {\n      transform: rotate(0deg);\n    }\n    100% {\n      transform: rotate(360deg);\n    }\n  }\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvc2hhcmVkL2xvYWRpbmctc3Bpbm5lci9sb2FkaW5nLXNwaW5uZXIuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLHFCQUFxQjtJQUNyQixrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7RUFDZDtFQUNBO0lBQ0Usc0JBQXNCO0lBQ3RCLGNBQWM7SUFDZCxrQkFBa0I7SUFDbEIsV0FBVztJQUNYLFlBQVk7SUFDWixXQUFXO0lBQ1gsdUJBQXVCO0lBQ3ZCLGtCQUFrQjtJQUNsQixzRUFBOEQ7WUFBOUQsOERBQThEO0lBQzlELHVEQUF1RDtFQUN6RDtFQUNBO0lBQ0UsK0JBQXVCO1lBQXZCLHVCQUF1QjtFQUN6QjtFQUNBO0lBQ0UsOEJBQXNCO1lBQXRCLHNCQUFzQjtFQUN4QjtFQUNBO0lBQ0UsK0JBQXVCO1lBQXZCLHVCQUF1QjtFQUN6QjtFQUNBO0lBQ0U7TUFDRSx1QkFBdUI7SUFDekI7SUFDQTtNQUNFLHlCQUF5QjtJQUMzQjtFQUNGO0VBUEE7SUFDRTtNQUNFLHVCQUF1QjtJQUN6QjtJQUNBO01BQ0UseUJBQXlCO0lBQzNCO0VBQ0YiLCJmaWxlIjoic3JjL2FwcC9zaGFyZWQvbG9hZGluZy1zcGlubmVyL2xvYWRpbmctc3Bpbm5lci5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxkcy1yaW5nIHtcbiAgICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XG4gICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgIHdpZHRoOiA4MHB4O1xuICAgIGhlaWdodDogODBweDtcbiAgfVxuICAubGRzLXJpbmcgZGl2IHtcbiAgICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICB3aWR0aDogNjRweDtcbiAgICBoZWlnaHQ6IDY0cHg7XG4gICAgbWFyZ2luOiA4cHg7XG4gICAgYm9yZGVyOiA4cHggc29saWQgYmxhY2s7XG4gICAgYm9yZGVyLXJhZGl1czogNTAlO1xuICAgIGFuaW1hdGlvbjogbGRzLXJpbmcgMS4ycyBjdWJpYy1iZXppZXIoMC41LCAwLCAwLjUsIDEpIGluZmluaXRlO1xuICAgIGJvcmRlci1jb2xvcjogYmxhY2sgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQ7XG4gIH1cbiAgLmxkcy1yaW5nIGRpdjpudGgtY2hpbGQoMSkge1xuICAgIGFuaW1hdGlvbi1kZWxheTogLTAuNDVzO1xuICB9XG4gIC5sZHMtcmluZyBkaXY6bnRoLWNoaWxkKDIpIHtcbiAgICBhbmltYXRpb24tZGVsYXk6IC0wLjNzO1xuICB9XG4gIC5sZHMtcmluZyBkaXY6bnRoLWNoaWxkKDMpIHtcbiAgICBhbmltYXRpb24tZGVsYXk6IC0wLjE1cztcbiAgfVxuICBAa2V5ZnJhbWVzIGxkcy1yaW5nIHtcbiAgICAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcbiAgICB9XG4gICAgMTAwJSB7XG4gICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xuICAgIH1cbiAgfVxuICAiXX0= */"] });
/*@__PURE__*/ (function () { _angular_core__WEBPACK_IMPORTED_MODULE_0__["ɵsetClassMetadata"](LoadingSpinnerComponent, [{
        type: _angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"],
        args: [{
                selector: 'app-loading-spinner',
                template: '<div class="lds-ring"><div></div><div></div><div></div><div></div></div>',
                styleUrls: ['./loading-spinner.component.css']
            }]
    }], null, null); })();


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
const environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/__ivy_ngcc__/fesm2015/core.js");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/__ivy_ngcc__/fesm2015/platform-browser.js");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
_angular_platform_browser__WEBPACK_IMPORTED_MODULE_3__["platformBrowser"]().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(err => console.error(err));


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/aleksa/Desktop/Angular Project/HyperledgerFabricBGCS/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map