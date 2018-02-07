webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
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
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "h3 {\r\n  margin: 10px auto;\r\n  font-weight: normal;\r\n  text-transform: uppercase;\r\n  letter-spacing: .05rem;\r\n  color: white;\r\n  text-shadow: 1px 1px 3px rgba(0, 0, 0, .8);\r\n  font-size: 27px;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<h3>Калькулятор  Рациона</h3>\r\n<app-user-data></app-user-data>\r\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__user_data_user_data_component__ = __webpack_require__("../../../../../src/app/user-data/user-data.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__angular_material__ = __webpack_require__("../../../material/esm5/material.es5.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__ = __webpack_require__("../../../platform-browser/esm5/animations.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["H" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_3__user_data_user_data_component__["a" /* UserDataComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["d" /* MatRadioModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["d" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_6__angular_platform_browser_animations__["a" /* BrowserAnimationsModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["i" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["a" /* MatButtonModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["b" /* MatCheckboxModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["e" /* MatSelectModule */],
                __WEBPACK_IMPORTED_MODULE_5__angular_forms__["i" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_4__angular_material__["c" /* MatInputModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/user-data/user-data.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".block {\r\n  margin-top: 13px;\r\n  padding: 20px;\r\n  width: 360px;\r\n  background-color: white;\r\n  -webkit-box-shadow: 0px 0px 17px -1px rgba(0,0,0,0.75);\r\n  box-shadow: 0px 0px 17px -1px rgba(0,0,0,0.75);\r\n}\r\n.result {\r\n  display: none;\r\n}\r\nmat-radio-button {\r\n  margin: 6px 50px 12px 28px;\r\n}\r\nmat-form-field {\r\n  width: 300px;\r\n}\r\nbutton {\r\n  font-size: 15px;\r\n  width: 300px;\r\n  background-color: #4fae50;\r\n  color: white;\r\n  text-transform: uppercase;\r\n  outline: none;\r\n  border: 0;\r\n  padding: 12px 20px;\r\n  letter-spacing: .07rem;\r\n}\r\nh5 {\r\n  font-size: 20px;\r\n  text-transform: uppercase;\r\n  letter-spacing: .1rem;\r\n  margin: 8px;\r\n  font-weight: normal;\r\n}\r\np {\r\n  margin: 8px;\r\n}\r\ntable {\r\n  text-align: center;\r\n  background-color: #f2f2f2;\r\n  border-spacing: 0;\r\n  margin: 0 auto 10px;\r\n}\r\ncaption {\r\n  border: 1px solid white;\r\n  background-color: #f2f2f2;\r\n}\r\ntd, th {\r\n  border: 1px solid white;\r\n  padding: 5px 10px;\r\n}\r\n.show {\r\n  display: table;\r\n}\r\n.recipe {\r\n  font-size: 12px;\r\n  text-align: justify;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/user-data/user-data.component.html":
/***/ (function(module, exports) {

module.exports = "<div>\r\n  <div class=\"block form\">\r\n    <mat-radio-group [(ngModel)]=\"gender\">\r\n      <mat-radio-button value=\"man\">Мужчина</mat-radio-button>\r\n      <mat-radio-button value=\"woman\">Женщина</mat-radio-button>\r\n    </mat-radio-group>\r\n\r\n\r\n    <mat-form-field>\r\n      <input matInput placeholder=\"Возраст\" [formControl]=\"ageControl\" [errorStateMatcher]=\"matcher\" #age>\r\n      <mat-error *ngIf=\"ageControl.hasError('required')\">Вот это <strong>не заполнил</strong></mat-error>\r\n    </mat-form-field>\r\n\r\n    <mat-form-field>\r\n      <input matInput placeholder=\"Рост (см)\" [formControl]=\"heightControl\" [errorStateMatcher]=\"matcher\" #height>\r\n      <mat-error *ngIf=\"heightControl.hasError('required')\">Вот это <strong>не заполнил</strong></mat-error>\r\n    </mat-form-field>\r\n\r\n    <mat-form-field>\r\n      <input matInput placeholder=\"Вес (кг)\" [formControl]=\"weightControl\" [errorStateMatcher]=\"matcher\" #weight>\r\n      <mat-error *ngIf=\"weightControl.hasError('required')\">Вот это <strong>не заполнил</strong></mat-error>\r\n    </mat-form-field>\r\n\r\n\r\n    <mat-form-field>\r\n      <mat-select [(value)]=\"selected\">\r\n        <mat-option value=\"active1\">Редко двигаюсь</mat-option>\r\n        <mat-option value=\"active2\">Средняя активность</mat-option>\r\n        <mat-option value=\"active3\">Тренировки через день</mat-option>\r\n        <mat-option value=\"active4\">Физический труд</mat-option>\r\n        <mat-option value=\"active5\">Физический труд и тренировки</mat-option>\r\n      </mat-select>\r\n    </mat-form-field>\r\n\r\n    <button mat-raised-button (click)=\"printData(age, height, weight)\">Отправить</button>\r\n  </div>\r\n\r\n  <div class=\"block result\" [ngClass]=\"{'show': isShow}\">\r\n    <h5>Результат</h5>\r\n    <p>Ваш ежедневный расход: {{ration}} ккал</p>\r\n    <table>\r\n      <caption>\r\n        <p>Рекомендуемая норма БЖУ</p>\r\n      </caption>\r\n      <tr>\r\n        <th></th>\r\n        <th>Белки</th>\r\n        <th>Жиры</th>\r\n        <th>Углеводы</th>\r\n      </tr>\r\n      <tr>\r\n        <td>в граммах</td>\r\n        <td>{{protein}}</td>\r\n        <td>{{fat}}</td>\r\n        <td>{{carbo}}</td>\r\n      </tr>\r\n      <tr>\r\n        <td>в ккал</td>\r\n        <td>{{protein * 4}}</td>\r\n        <td>{{fat * 9}}</td>\r\n        <td>{{carbo * 4}}</td>\r\n      </tr>\r\n    </table>\r\n  </div>\r\n\r\n  <div class=\"block result\" [ngClass]=\"{'show': isShow}\">\r\n    <h5>Рекомендации</h5>\r\n    <p class=\"recipe\">Рацион рассчитан для поддержания данного веса тела.\r\n    Для эффективного жиросжигания следует уменьшить расчетный рацион на 10%.\r\n    При уменьшении рациона на большуй процент, организм будет испытывать стресс, что приведет к неприятным результам.\r\n</p>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "../../../../../src/app/user-data/user-data.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* unused harmony export MyErrorStateMatcher */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return UserDataComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


/** Error when invalid control is dirty, touched, or submitted. */
var MyErrorStateMatcher = /** @class */ (function () {
    function MyErrorStateMatcher() {
    }
    MyErrorStateMatcher.prototype.isErrorState = function (control, form) {
        var isSubmitted = form && form.submitted;
        return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
    };
    return MyErrorStateMatcher;
}());

var UserDataComponent = /** @class */ (function () {
    function UserDataComponent() {
        this.selected = 'active1';
        this.isShow = false;
        this.ageControl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required,
        ]);
        this.heightControl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required,
        ]);
        this.weightControl = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormControl */]('', [
            __WEBPACK_IMPORTED_MODULE_1__angular_forms__["j" /* Validators */].required,
        ]);
        this.matcher = new MyErrorStateMatcher();
    }
    UserDataComponent.prototype.printData = function (a, h, w) {
        var age = Number(a.value);
        var weight = Number(w.value);
        var height = Number(h.value);
        if (this.gender == 'woman') {
            this.ration = Math.ceil((10 * weight + 6.25 * height + 5 * age) - 161);
        }
        if (this.gender == 'man') {
            this.ration = Math.ceil((10 * weight + 6.25 * height + 5 * age) + 5);
        }
        switch (this.selected) {
            case 'active1':
                this.ration = Math.ceil(this.ration * 1.2);
                break;
            case 'active2':
                this.ration = Math.ceil(this.ration * 1.37);
                break;
            case 'active3':
                this.ration = Math.ceil(this.ration * 1.46);
                break;
            case 'active4':
                this.ration = Math.ceil(this.ration * 1.637);
                break;
            case 'active5':
                this.ration = Math.ceil(this.ration * 1.8);
                break;
        }
        this.protein = Math.ceil(weight * 1.7);
        this.fat = Math.ceil(weight * 1.2);
        this.carbo = Math.ceil((this.ration - (this.protein * 4 + this.fat * 9)) / 4);
        this.isShow = true;
        return false;
    };
    UserDataComponent.prototype.ngOnInit = function () {
    };
    UserDataComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["m" /* Component */])({
            selector: 'app-user-data',
            template: __webpack_require__("../../../../../src/app/user-data/user-data.component.html"),
            styles: [__webpack_require__("../../../../../src/app/user-data/user-data.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], UserDataComponent);
    return UserDataComponent;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_12" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map