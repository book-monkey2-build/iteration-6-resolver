webpackJsonp([3,6],{

/***/ 145:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__ = __webpack_require__(646);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_map__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_retry__ = __webpack_require__(647);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_retry___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_retry__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__ = __webpack_require__(642);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_rxjs_add_operator_catch__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw__ = __webpack_require__(641);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_rxjs_add_observable_throw__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__book_factory__ = __webpack_require__(364);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookStoreService; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};








var BookStoreService = (function () {
    function BookStoreService(http) {
        this.http = http;
        this.api = 'https://book-monkey2-api.angular-buch.com';
        this.headers = new __WEBPACK_IMPORTED_MODULE_1__angular_http__["b" /* Headers */]();
        this.headers.append('Content-Type', 'application/json');
    }
    BookStoreService.prototype.getAll = function () {
        return this.http
            .get(this.api + "/books")
            .retry(3)
            .map(function (response) { return response.json(); })
            .map(function (rawBooks) { return rawBooks
            .map(function (rawBook) { return __WEBPACK_IMPORTED_MODULE_7__book_factory__["a" /* BookFactory */].fromObject(rawBook); }); })
            .catch(this.errorHandler);
    };
    BookStoreService.prototype.getSingle = function (isbn) {
        return this.http
            .get(this.api + "/book/" + isbn)
            .retry(3)
            .map(function (response) { return response.json(); })
            .map(function (rawBook) { return __WEBPACK_IMPORTED_MODULE_7__book_factory__["a" /* BookFactory */].fromObject(rawBook); })
            .catch(this.errorHandler);
    };
    BookStoreService.prototype.check = function (isbn) {
        return this.http
            .get(this.api + "/book/" + isbn + "/check")
            .map(function (response) { return response.json(); })
            .catch(this.errorHandler);
    };
    BookStoreService.prototype.create = function (book) {
        return this.http
            .post(this.api + "/book", JSON.stringify(book), { headers: this.headers })
            .catch(this.errorHandler);
    };
    BookStoreService.prototype.update = function (book) {
        return this.http
            .put(this.api + "/book/" + book.isbn, JSON.stringify(book), { headers: this.headers })
            .catch(this.errorHandler);
    };
    BookStoreService.prototype.remove = function (isbn) {
        return this.http
            .delete(this.api + "/book/" + isbn)
            .catch(this.errorHandler);
    };
    BookStoreService.prototype.errorHandler = function (error) {
        return __WEBPACK_IMPORTED_MODULE_2_rxjs_Observable__["Observable"].throw(error);
    };
    BookStoreService.prototype.getAllSearch = function (searchTerm) {
        return this.http
            .get(this.api + "/books/search/" + searchTerm)
            .retry(3)
            .map(function (response) { return response.json(); })
            .map(function (rawBooks) { return rawBooks
            .map(function (rawBook) { return __WEBPACK_IMPORTED_MODULE_7__book_factory__["a" /* BookFactory */].fromObject(rawBook); }); })
            .catch(this.errorHandler);
    };
    BookStoreService = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__angular_http__["c" /* Http */]) === 'function' && _a) || Object])
    ], BookStoreService);
    return BookStoreService;
    var _a;
}());
//# sourceMappingURL=/home/travis/build/angular-buch/TMP/BookMonkey/src/book-store.service.js.map

/***/ }),

/***/ 304:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_router__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = (function () {
    function HomeComponent(router, route) {
        this.router = router;
        this.route = route;
    }
    HomeComponent.prototype.bookSelected = function (book) {
        this.router.navigate(['../books', book.isbn], { relativeTo: this.route });
    };
    HomeComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["Component"])({
            selector: 'bm-home',
            template: "\n  <div class=\"ui container two column grid\">\n\n    <div class=\"ui container column\">\n      <h1>Home</h1>\n      <p>Das ist der BookMonkey.</p>\n      <a routerLink=\"../books\" class=\"ui red button\">\n        Buchliste ansehen\n        <i class=\"right arrow icon\"></i>\n      </a>\n    </div>\n\n    <bm-search (bookSelected)=\"bookSelected($event)\" class=\"column\"></bm-search>\n  </div>\n  "
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_router__["b" /* Router */]) === 'function' && _a) || Object, (typeof (_b = typeof __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* ActivatedRoute */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_0__angular_router__["a" /* ActivatedRoute */]) === 'function' && _b) || Object])
    ], HomeComponent);
    return HomeComponent;
    var _a, _b;
}());
//# sourceMappingURL=/home/travis/build/angular-buch/TMP/BookMonkey/src/home.component.js.map

/***/ }),

/***/ 359:
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"app/admin/admin.module": [
		678,
		0
	],
	"app/book/book.module": [
		679,
		1
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];	if(!ids)
		return Promise.reject(new Error("Cannot find module '" + req + "'."));
	return __webpack_require__.e(ids[1]).then(function() {
		return __webpack_require__(ids[0]);
	});
};
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
module.exports = webpackAsyncContext;
webpackAsyncContext.id = 359;


/***/ }),

/***/ 360:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__ = __webpack_require__(445);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__environments_environment__ = __webpack_require__(480);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_app_module__ = __webpack_require__(477);




if (__WEBPACK_IMPORTED_MODULE_2__environments_environment__["a" /* environment */].production) {
    __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_1__angular_core__["enableProdMode"])();
}
__webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_3__app_app_module__["a" /* AppModule */]);
//# sourceMappingURL=/home/travis/build/angular-buch/TMP/BookMonkey/src/main.js.map

/***/ }),

/***/ 364:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__book__ = __webpack_require__(366);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookFactory; });

var BookFactory = (function () {
    function BookFactory() {
    }
    BookFactory.empty = function () {
        return new __WEBPACK_IMPORTED_MODULE_0__book__["a" /* Book */]('', '', [''], new Date(), '', 0, [{ url: '', title: '' }], '');
    };
    BookFactory.fromObject = function (rawBook) {
        return new __WEBPACK_IMPORTED_MODULE_0__book__["a" /* Book */](rawBook.isbn, rawBook.title, rawBook.authors, typeof (rawBook.published) === 'string' ?
            new Date(rawBook.published) : rawBook.published, rawBook.subtitle, rawBook.rating, rawBook.thumbnails, rawBook.description);
    };
    return BookFactory;
}());
//# sourceMappingURL=/home/travis/build/angular-buch/TMP/BookMonkey/src/book-factory.js.map

/***/ }),

/***/ 365:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__book_store_service__ = __webpack_require__(145);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookResolver; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BookResolver = (function () {
    function BookResolver(bs) {
        this.bs = bs;
    }
    BookResolver.prototype.resolve = function (route) {
        return this.bs.getSingle(route.params['isbn']);
    };
    BookResolver = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_1__book_store_service__["a" /* BookStoreService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_1__book_store_service__["a" /* BookStoreService */]) === 'function' && _a) || Object])
    ], BookResolver);
    return BookResolver;
    var _a;
}());
//# sourceMappingURL=/home/travis/build/angular-buch/TMP/BookMonkey/src/book-resolver.service.js.map

/***/ }),

/***/ 366:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Book; });
var Book = (function () {
    function Book(isbn, title, authors, published, subtitle, rating, thumbnails, description) {
        this.isbn = isbn;
        this.title = title;
        this.authors = authors;
        this.published = published;
        this.subtitle = subtitle;
        this.rating = rating;
        this.thumbnails = thumbnails;
        this.description = description;
    }
    return Book;
}());
//# sourceMappingURL=/home/travis/build/angular-buch/TMP/BookMonkey/src/book.js.map

/***/ }),

/***/ 475:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__(220);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__home_home_component__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__can_navigate_to_admin_guard__ = __webpack_require__(478);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var routes = [
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: __WEBPACK_IMPORTED_MODULE_2__home_home_component__["a" /* HomeComponent */]
    },
    {
        path: 'books',
        loadChildren: 'app/book/book.module#BookModule'
    },
    {
        path: 'admin',
        loadChildren: 'app/admin/admin.module#AdminModule',
        canActivate: [__WEBPACK_IMPORTED_MODULE_3__can_navigate_to_admin_guard__["a" /* CanNavigateToAdminGuard */]]
    }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["NgModule"])({
            imports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */].forRoot(routes, { preloadingStrategy: __WEBPACK_IMPORTED_MODULE_1__angular_router__["d" /* PreloadAllModules */] })],
            exports: [__WEBPACK_IMPORTED_MODULE_1__angular_router__["c" /* RouterModule */]],
            providers: [__WEBPACK_IMPORTED_MODULE_3__can_navigate_to_admin_guard__["a" /* CanNavigateToAdminGuard */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppRoutingModule);
    return AppRoutingModule;
}());
//# sourceMappingURL=/home/travis/build/angular-buch/TMP/BookMonkey/src/app-routing.module.js.map

/***/ }),

/***/ 476:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
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
    function AppComponent() {
    }
    AppComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'bm-root',
            template: __webpack_require__(635)
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
//# sourceMappingURL=/home/travis/build/angular-buch/TMP/BookMonkey/src/app.component.js.map

/***/ }),

/***/ 477:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__(129);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_http__ = __webpack_require__(280);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__app_component__ = __webpack_require__(476);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home_component__ = __webpack_require__(304);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__search_search_component__ = __webpack_require__(479);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__shared_book_store_service__ = __webpack_require__(145);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_routing_module__ = __webpack_require__(475);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__shared_book_resolver_service__ = __webpack_require__(365);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};









var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_2__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_5__search_search_component__["a" /* SearchComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_1__angular_http__["a" /* HttpModule */],
                __WEBPACK_IMPORTED_MODULE_7__app_routing_module__["a" /* AppRoutingModule */]
            ],
            providers: [
                __WEBPACK_IMPORTED_MODULE_6__shared_book_store_service__["a" /* BookStoreService */],
                __WEBPACK_IMPORTED_MODULE_8__shared_book_resolver_service__["a" /* BookResolver */],
                { provide: __WEBPACK_IMPORTED_MODULE_2__angular_core__["LOCALE_ID"], useValue: 'de' }
            ],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_3__app_component__["a" /* AppComponent */]]
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
//# sourceMappingURL=/home/travis/build/angular-buch/TMP/BookMonkey/src/app.module.js.map

/***/ }),

/***/ 478:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return CanNavigateToAdminGuard; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var CanNavigateToAdminGuard = (function () {
    function CanNavigateToAdminGuard() {
        this.accessGranted = false;
    }
    CanNavigateToAdminGuard.prototype.canActivate = function () {
        if (!this.accessGranted) {
            this.accessGranted = window.confirm('Mit großer Macht kommt große Verantwortung. Möchten Sie den Admin-Bereich betreten?');
        }
        return this.accessGranted;
    };
    CanNavigateToAdminGuard = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Injectable"])(), 
        __metadata('design:paramtypes', [])
    ], CanNavigateToAdminGuard);
    return CanNavigateToAdminGuard;
}());
//# sourceMappingURL=/home/travis/build/angular-buch/TMP/BookMonkey/src/can-navigate-to-admin.guard.js.map

/***/ }),

/***/ 479:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_debounceTime__ = __webpack_require__(643);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_debounceTime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_rxjs_add_operator_debounceTime__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_distinctUntilChanged__ = __webpack_require__(644);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_distinctUntilChanged___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2_rxjs_add_operator_distinctUntilChanged__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__ = __webpack_require__(645);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_rxjs_add_operator_do__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap__ = __webpack_require__(648);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_switchMap__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_book_store_service__ = __webpack_require__(145);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchComponent; });
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var SearchComponent = (function () {
    function SearchComponent(bs) {
        this.bs = bs;
        this.isLoading = false;
        this.foundBooks = [];
        this.bookSelected = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
        this.keyup = new __WEBPACK_IMPORTED_MODULE_0__angular_core__["EventEmitter"]();
    }
    SearchComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.keyup
            .debounceTime(500)
            .distinctUntilChanged()
            .do(function () { return _this.isLoading = true; })
            .switchMap(function (searchTerm) { return _this.bs.getAllSearch(searchTerm); })
            .do(function () { return _this.isLoading = false; })
            .subscribe(function (books) { return _this.foundBooks = books; });
    };
    __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Output"])(), 
        __metadata('design:type', Object)
    ], SearchComponent.prototype, "bookSelected", void 0);
    SearchComponent = __decorate([
        __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'bm-search',
            template: __webpack_require__(636)
        }), 
        __metadata('design:paramtypes', [(typeof (_a = typeof __WEBPACK_IMPORTED_MODULE_5__shared_book_store_service__["a" /* BookStoreService */] !== 'undefined' && __WEBPACK_IMPORTED_MODULE_5__shared_book_store_service__["a" /* BookStoreService */]) === 'function' && _a) || Object])
    ], SearchComponent);
    return SearchComponent;
    var _a;
}());
//# sourceMappingURL=/home/travis/build/angular-buch/TMP/BookMonkey/src/search.component.js.map

/***/ }),

/***/ 480:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `angular-cli.json`.
var environment = {
    production: false
};
//# sourceMappingURL=/home/travis/build/angular-buch/TMP/BookMonkey/src/environment.js.map

/***/ }),

/***/ 635:
/***/ (function(module, exports) {

module.exports = "<div class=\"ui three item tabs menu\">\n  <a routerLink=\"home\"  routerLinkActive=\"active\" class=\"item\">Home</a>\n  <a routerLink=\"books\" routerLinkActive=\"active\" class=\"item\">Bücher</a>\n  <a routerLink=\"admin\" routerLinkActive=\"active\" class=\"item\">Administration</a>\n</div>\n<router-outlet></router-outlet>\n"

/***/ }),

/***/ 636:
/***/ (function(module, exports) {

module.exports = "<div class=\"ui search\"  [ngClass]=\"{ loading: isLoading }\">\r\n  <div class=\"ui icon input\">\r\n    <input (keyup)=\"keyup.emit(searchTerm.value)\" #searchTerm class=\"prompt\" type=\"text\" placeholder=\"Search...\">\r\n    <i class=\"search icon\"></i>\r\n  </div>\r\n  <div class=\"results transition\" [ngClass]=\"{ visible: foundBooks.length }\">\r\n\r\n    <a href (click)=\"bookSelected.emit(book); false\" class=\"result\" *ngFor=\"let book of foundBooks\">\r\n      <div class=\"content\">\r\n        <div class=\"title\" >{{ book.title }}</div>\r\n      </div>\r\n    </a>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ 676:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(360);


/***/ })

},[676]);
//# sourceMappingURL=main.bundle.map