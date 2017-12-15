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
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-header></app-header>\n<div class=\"container\">\n  <div class=\"row\">\n    <div class=\"col-md-12\">\n      <app-books></app-books>\n    </div>\n  </div>\n</div>"

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

var AppComponent = (function () {
    function AppComponent() {
    }
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
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
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_modal__ = __webpack_require__("../../../../ng2-modal/index.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_ng2_modal___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_ng2_modal__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_ngx_pagination__ = __webpack_require__("../../../../ngx-pagination/dist/ngx-pagination.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__header_header_component__ = __webpack_require__("../../../../../src/app/header/header.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__books_books_component__ = __webpack_require__("../../../../../src/app/books/books.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__books_book_list_book_list_component__ = __webpack_require__("../../../../../src/app/books/book-list/book-list.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__books_book_list_book_item_book_item_component__ = __webpack_require__("../../../../../src/app/books/book-list/book-item/book-item.component.ts");
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
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["NgModule"])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_6__header_header_component__["a" /* HeaderComponent */],
                __WEBPACK_IMPORTED_MODULE_7__books_books_component__["a" /* BooksComponent */],
                __WEBPACK_IMPORTED_MODULE_8__books_book_list_book_list_component__["a" /* BookListComponent */],
                __WEBPACK_IMPORTED_MODULE_9__books_book_list_book_item_book_item_component__["a" /* BookItemComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_3_ng2_modal__["ModalModule"],
                __WEBPACK_IMPORTED_MODULE_4_ngx_pagination__["a" /* NgxPaginationModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormsModule */]
            ],
            providers: [],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_5__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/books/book-list/book-item/book-item.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/books/book-list/book-item/book-item.component.html":
/***/ (function(module, exports) {

module.exports = "<p>\n  book-item works!\n</p>\n"

/***/ }),

/***/ "../../../../../src/app/books/book-list/book-item/book-item.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookItemComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BookItemComponent = (function () {
    function BookItemComponent() {
    }
    BookItemComponent.prototype.ngOnInit = function () {
    };
    BookItemComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-book-item',
            template: __webpack_require__("../../../../../src/app/books/book-list/book-item/book-item.component.html"),
            styles: [__webpack_require__("../../../../../src/app/books/book-list/book-item/book-item.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BookItemComponent);
    return BookItemComponent;
}());



/***/ }),

/***/ "../../../../../src/app/books/book-list/book-list.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "table{\r\n    width: 100%\r\n}\r\n.btn{\r\n    margin-bottom: 5px;\r\n}", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/books/book-list/book-list.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-xs-12\">\n    <h2>Books List</h2>\n  </div>\n</div>\n<hr>\n<div class=\"row\">\n  <div class=\"col-md-12\">\n    <table>\n      <th><a href=\"#\" (click)=\"sort()\"> Book Name </a></th>\n      <th>Author</th>\n      <th>No. of Pages</th>\n      <th>Date of Publication</th>\n      <th>Action</th>\n      <tr *ngFor=\"let book of books  | paginate: { itemsPerPage: 5, currentPage: p }\">\n        <td>{{book.name}}</td>\n        <td>{{book.author}}</td>\n        <td>{{book.pages}}</td>\n        <td>{{book.publicationDate}}</td>\n        <td><button class=\"btn btn-primary\" (click)=\"editBook(book)\">Edit</button></td>\n      </tr>\n    </table>\n    <pagination-controls (pageChange)=\"p = $event\"></pagination-controls>\n  </div>\n</div>\n\n\n<div class=\"row\">\n    <modal #bookModal [closeOnEscape]=\"true\" [closeOnOutsideClick]=\"false\">\n      <modal-header>\n        <h1>Edit Book details</h1>\n      </modal-header>\n      <modal-content>\n        <div class=\"form-group\">\n          <label for=\"name\">Book Name</label>\n          <input type=\"text\" name=\"name\" class=\"form-control\" [(ngModel)]=\"name\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"author\">Book Author</label>\n          <input type=\"text\" name=\"author\" class=\"form-control\" [(ngModel)]=\"author\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"pages\">Total Number of Pages</label>\n          <input type=\"number\" name=\"pages\" class=\"form-control\" [(ngModel)]=\"pages\">\n        </div>\n        <div class=\"form-group\">\n          <label for=\"pubDate\">Publishing Date</label>\n          <input type=\"date\" name=\"pubDate\" class=\"form-control\" [(ngModel)]=\"pubDate\">\n        </div>\n      </modal-content>\n      <modal-footer>\n          <button class=\"btn btn-primary\" (click)=\"updateBook()\">Update</button>\n          <button class=\"btn btn-danger\" (click)=\"hideForm()\">Cancel</button>\n      </modal-footer>\n    </modal>\n  </div>"

/***/ }),

/***/ "../../../../../src/app/books/book-list/book-list.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BookListComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__book_model__ = __webpack_require__("../../../../../src/app/books/book.model.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var BookListComponent = (function () {
    function BookListComponent() {
        this.books = [
            new __WEBPACK_IMPORTED_MODULE_1__book_model__["a" /* Book */](1, 'Book 1', 'John', 50, new Date(1990, 1, 17)),
            new __WEBPACK_IMPORTED_MODULE_1__book_model__["a" /* Book */](2, 'Book 2', 'John', 50, new Date(1990, 1, 17)),
            new __WEBPACK_IMPORTED_MODULE_1__book_model__["a" /* Book */](3, 'Book 3', 'John', 50, new Date(1990, 1, 17)),
            new __WEBPACK_IMPORTED_MODULE_1__book_model__["a" /* Book */](4, 'Book 4', 'John', 50, new Date(1990, 1, 17)),
            new __WEBPACK_IMPORTED_MODULE_1__book_model__["a" /* Book */](5, 'Book 5', 'John', 50, new Date(1990, 1, 17)),
            new __WEBPACK_IMPORTED_MODULE_1__book_model__["a" /* Book */](6, 'Book 6', 'John', 50, new Date(1990, 1, 17)),
            new __WEBPACK_IMPORTED_MODULE_1__book_model__["a" /* Book */](7, 'Book 7', 'John', 50, new Date(1990, 1, 17)),
            new __WEBPACK_IMPORTED_MODULE_1__book_model__["a" /* Book */](8, 'Book 8', 'John', 50, new Date(1990, 1, 17)),
            new __WEBPACK_IMPORTED_MODULE_1__book_model__["a" /* Book */](9, 'Book 9', 'John', 50, new Date(1990, 1, 17)),
            new __WEBPACK_IMPORTED_MODULE_1__book_model__["a" /* Book */](10, 'Book 10', 'John', 50, new Date(1990, 1, 17)),
            new __WEBPACK_IMPORTED_MODULE_1__book_model__["a" /* Book */](11, 'Book 11', 'John', 50, new Date(1990, 1, 17)),
            new __WEBPACK_IMPORTED_MODULE_1__book_model__["a" /* Book */](12, 'Book 12', 'John', 50, new Date(1990, 1, 17)),
            new __WEBPACK_IMPORTED_MODULE_1__book_model__["a" /* Book */](13, 'Book 13', 'John', 50, new Date(1990, 1, 17)),
        ];
        this.p = 1;
        this.ascSortOrder = true;
    }
    BookListComponent.prototype.ngOnInit = function () {
    };
    BookListComponent.prototype.editBook = function (book) {
        this.bookId = book.id;
        this.name = book.name;
        this.author = book.author;
        this.pages = book.pages;
        this.pubDate = book.publicationDate;
        this.bookModal.open();
        // this.showForm = true;
    };
    BookListComponent.prototype.updateBook = function () {
        var _this = this;
        this.books.forEach(function (book) {
            if (book.id === _this.bookId) {
                book.author = _this.author;
                book.name = _this.name;
                book.pages = _this.pages;
                book.publicationDate = _this.pubDate;
            }
        });
        this.bookModal.close();
    };
    BookListComponent.prototype.hideForm = function () {
        this.bookModal.close();
    };
    BookListComponent.prototype.sort = function () {
        if (this.ascSortOrder) {
            this.books.sort(function (a, b) { return (a.name < b.name) ? 1 : ((b.name < a.name) ? -1 : 0); });
        }
        else {
            this.books.sort(function (a, b) { return (a.name > b.name) ? 1 : ((b.name > a.name) ? -1 : 0); });
        }
        this.ascSortOrder = !this.ascSortOrder;
    };
    __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["ViewChild"])('bookModal'),
        __metadata("design:type", Object)
    ], BookListComponent.prototype, "bookModal", void 0);
    BookListComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-book-list',
            template: __webpack_require__("../../../../../src/app/books/book-list/book-list.component.html"),
            styles: [__webpack_require__("../../../../../src/app/books/book-list/book-list.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BookListComponent);
    return BookListComponent;
}());



/***/ }),

/***/ "../../../../../src/app/books/book.model.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return Book; });
var Book = (function () {
    function Book(id, name, auth, pages, publicationDate) {
        this.id = id;
        this.name = name;
        this.author = auth;
        this.pages = pages;
        this.publicationDate = publicationDate.getFullYear() + '-' + publicationDate.getMonth() + 1 + '-' + publicationDate.getDate();
    }
    return Book;
}());



/***/ }),

/***/ "../../../../../src/app/books/books.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/books/books.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\n  <div class=\"col-md-12\">\n    <app-book-list></app-book-list>\n  </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/books/books.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return BooksComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var BooksComponent = (function () {
    function BooksComponent() {
    }
    BooksComponent.prototype.ngOnInit = function () {
    };
    BooksComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-books',
            template: __webpack_require__("../../../../../src/app/books/books.component.html"),
            styles: [__webpack_require__("../../../../../src/app/books/books.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], BooksComponent);
    return BooksComponent;
}());



/***/ }),

/***/ "../../../../../src/app/header/header.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/header/header.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-default\">\n  <div class=\"container-fluid\">\n    <div class=\"navbar-header\">\n      <a href=\"#\" class=\"navbar-brand\">Book Store</a>\n    </div>\n\n    <div class=\"collapse navbar-collapse\">\n      <ul class=\"nav navbar-nav\">\n        <li><a href=\"#\">Books</a></li>\n      </ul>\n\n      <!-- <ul class=\"nav navbar-nav navbar-right\">\n        <li class=\"dropdown\">\n          <a href=\"#\" class=\"dropdown-toggle\" role=\"button\">Manage<span class=\"caret\"></span></a>\n          <ul class=\"dropdown-menu\">\n            <li><a href=\"#\">Save Data</a></li>\n            <li><a href=\"#\">Fetch Data</a></li>\n          </ul>\n        </li>\n      </ul> -->\n    </div>\n  </div>\n</nav>"

/***/ }),

/***/ "../../../../../src/app/header/header.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HeaderComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var HeaderComponent = (function () {
    function HeaderComponent() {
    }
    HeaderComponent.prototype.ngOnInit = function () {
    };
    HeaderComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["Component"])({
            selector: 'app-header',
            template: __webpack_require__("../../../../../src/app/header/header.component.html"),
            styles: [__webpack_require__("../../../../../src/app/header/header.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeaderComponent);
    return HeaderComponent;
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
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["enableProdMode"])();
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