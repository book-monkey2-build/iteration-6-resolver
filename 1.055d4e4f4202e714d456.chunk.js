webpackJsonp([1,5],{655:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(711),i=n(0),r=n(100),a=n(710),c=n(692),s=n(709),f=n(691),u=n(712),l=n(713);n.d(t,"BookModule",function(){return b});var d=this&&this.__decorate||function(e,t,n,o){var i,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,o);else for(var c=e.length-1;c>=0;c--)(i=e[c])&&(a=(r<3?i(a):r>3?i(t,n,a):i(t,n))||a);return r>3&&a&&Object.defineProperty(t,n,a),a},p=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},b=function(){function e(){}return e=d([n.i(i.NgModule)({imports:[r.a,a.a],declarations:[c.a,s.a,f.a,u.a,l.a,o.a]}),p("design:paramtypes",[])],e)}()},691:function(e,t,n){"use strict";var o=n(0),i=n(356),r=n(357),a=n(217);n.d(t,"a",function(){return f});var c=this&&this.__decorate||function(e,t,n,o){var i,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,o);else for(var c=e.length-1;c>=0;c--)(i=e[c])&&(a=(r<3?i(a):r>3?i(t,n,a):i(t,n))||a);return r>3&&a&&Object.defineProperty(t,n,a),a},s=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},f=function(){function e(e,t,n){this.bs=e,this.router=t,this.route=n,this.book=r.a.empty()}return e.prototype.ngOnInit=function(){this.book=this.route.snapshot.data.book},e.prototype.getRating=function(e){return new Array(e)},e.prototype.removeBook=function(){var e=this;confirm("Buch wirklich löschen?")&&this.bs.remove(this.book.isbn).subscribe(function(t){return e.router.navigate(["../"],{relativeTo:e.route})})},e=c([n.i(o.Component)({selector:"bm-book-details",template:n(702)}),s("design:paramtypes",["function"==typeof(t="undefined"!=typeof a.a&&a.a)&&t||Object,"function"==typeof(f="undefined"!=typeof i.b&&i.b)&&f||Object,"function"==typeof(u="undefined"!=typeof i.a&&i.a)&&u||Object])],e);var t,f,u}()},692:function(e,t,n){"use strict";var o=n(0),i=n(217);n.d(t,"a",function(){return c});var r=this&&this.__decorate||function(e,t,n,o){var i,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,o);else for(var c=e.length-1;c>=0;c--)(i=e[c])&&(a=(r<3?i(a):r>3?i(t,n,a):i(t,n))||a);return r>3&&a&&Object.defineProperty(t,n,a),a},a=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},c=function(){function e(e){this.bs=e}return e.prototype.ngOnInit=function(){this.booksOb=this.bs.getAll()},e=r([n.i(o.Component)({selector:"bm-book-list",template:n(704)}),a("design:paramtypes",["function"==typeof(t="undefined"!=typeof i.a&&i.a)&&t||Object])],e);var t}()},702:function(e,t){e.exports='<div class="ui grid" *ngIf="book">\n  <div class="four wide column">\n    <img class="ui large image" [src]="book.thumbnails && book.thumbnails[0].url">\n  </div>\n  <div class="twelve wide column">\n    <h1 class="ui header">{{ book.title }}</h1>\n    <h3 class="ui header">{{ book.subtitle }}</h3>\n    <div class="ui divider"></div>\n    <div class="ui grid">\n      <div class="four wide column">\n        <h4 class="ui header">Autoren</h4>\n        <span *ngFor="let author of book.authors; let l=last">\n          {{ author }}<span *ngIf="!l">, </span>\n        </span>\n      </div>\n      <div class="four wide column">\n        <h4 class="ui header">ISBN</h4>\n        {{ book.isbn | isbn:true }}\n      </div>\n      <div class="four wide column">\n        <h4 class="ui header">Erschienen</h4>\n        {{ book.published }}\n      </div>\n      <div class="four wide column">\n        <h4 class="ui header">Rating</h4>\n        <span *ngFor="let r of getRating(book.rating); let i = index">\n          <i class="yellow star icon" *bmDelay="500 + i * 200"></i>\n        </span>\n      </div>\n    </div>\n  </div>\n  <div class="sixteen wide column">\n    <h3 class="ui header">Beschreibung</h3>\n    {{ book.description }}\n  </div>\n  <div class="sixteen wide column">\n    <div class="ui small images">\n      <img *ngFor="let thumbnail of book.thumbnails" [src]="thumbnail.url">\n    </div>\n  </div>\n</div>\n\n<button class="ui tiny red labeled icon button"\n        (click)="removeBook()">\n  <i class="remove icon"></i> Buch löschen\n</button>\n<a class="ui tiny yellow labeled icon button"\n        [routerLink]="[\'../../admin\', book.isbn]">\n  <i class="write icon"></i> Buch bearbeiten\n</a>\n'},703:function(e,t){e.exports='<img class="ui tiny image"\n     *ngIf="book.thumbnails"\n     [src]="book.thumbnails[0].url"\n     bmZoom>\n<div class="content">\n  <div class="header">{{ book.title }}</div>\n  <div class="description">{{ book.subtitle }}</div>\n  <div class="metadata">\n    <span *ngFor="let author of book.authors; let l=last">\n      {{ author }}<span *ngIf="!l">, </span>\n    </span>\n  </div>\n  <div class="extra">{{ book.isbn | isbn:true }}</div>\n</div>\n'},704:function(e,t){e.exports='<div class="ui middle aligned selection divided list">\n  <a class="bm-book-list-item item"\n      *ngFor="let b of booksOb | async"\n      [book]="b"\n      [routerLink]="b.isbn"></a>\n  <p *ngIf="!booksOb">Laden Daten...</p>\n  <p *ngIf="booksOb && !booksOb.length">Es wurden noch keine B&uuml;cher eingetragen.</p>\n</div>\n'},709:function(e,t,n){"use strict";var o=n(0),i=n(359);n.d(t,"a",function(){return c});var r=this&&this.__decorate||function(e,t,n,o){var i,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,o);else for(var c=e.length-1;c>=0;c--)(i=e[c])&&(a=(r<3?i(a):r>3?i(t,n,a):i(t,n))||a);return r>3&&a&&Object.defineProperty(t,n,a),a},a=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},c=function(){function e(){}return r([n.i(o.Input)(),a("design:type","function"==typeof(t="undefined"!=typeof i.a&&i.a)&&t||Object)],e.prototype,"book",void 0),e=r([n.i(o.Component)({selector:"a.bm-book-list-item",template:n(703)}),a("design:paramtypes",[])],e);var t}()},710:function(e,t,n){"use strict";var o=n(0),i=n(356),r=n(692),a=n(691),c=n(358);n.d(t,"a",function(){return l});var s=this&&this.__decorate||function(e,t,n,o){var i,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,o);else for(var c=e.length-1;c>=0;c--)(i=e[c])&&(a=(r<3?i(a):r>3?i(t,n,a):i(t,n))||a);return r>3&&a&&Object.defineProperty(t,n,a),a},f=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},u=[{path:"",component:r.a},{path:":isbn",component:a.a,resolve:{book:c.a}}],l=function(){function e(){}return e=s([n.i(o.NgModule)({imports:[i.c.forChild(u)],exports:[i.c],providers:[]}),f("design:paramtypes",[])],e)}()},711:function(e,t,n){"use strict";var o=n(0);n.d(t,"a",function(){return a});var i=this&&this.__decorate||function(e,t,n,o){var i,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,o);else for(var c=e.length-1;c>=0;c--)(i=e[c])&&(a=(r<3?i(a):r>3?i(t,n,a):i(t,n))||a);return r>3&&a&&Object.defineProperty(t,n,a),a},r=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},a=function(){function e(e,t){this.templateRef=e,this.viewContainerRef=t}return e.prototype.ngOnInit=function(){var e=this;setTimeout(function(){e.viewContainerRef.createEmbeddedView(e.templateRef)},this.bmDelay)},i([n.i(o.Input)(),r("design:type",Object)],e.prototype,"bmDelay",void 0),e=i([n.i(o.Directive)({selector:"[bmDelay]"}),r("design:paramtypes",["function"==typeof(t="undefined"!=typeof o.TemplateRef&&o.TemplateRef)&&t||Object,"function"==typeof(a="undefined"!=typeof o.ViewContainerRef&&o.ViewContainerRef)&&a||Object])],e);var t,a}()},712:function(e,t,n){"use strict";var o=n(0);n.d(t,"a",function(){return a});var i=this&&this.__decorate||function(e,t,n,o){var i,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,o);else for(var c=e.length-1;c>=0;c--)(i=e[c])&&(a=(r<3?i(a):r>3?i(t,n,a):i(t,n))||a);return r>3&&a&&Object.defineProperty(t,n,a),a},r=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},a=function(){function e(){}return e.prototype.transform=function(e,t){if(!e||10!==e.length&&13!==e.length)return null;var n="";return t&&(n=10===e.length?"ISBN-10: ":"ISBN-13: "),10===e.length?n+e:""+n+e.substr(0,3)+"-"+e.substr(3)},e=i([n.i(o.Pipe)({name:"isbn"}),r("design:paramtypes",[])],e)}()},713:function(e,t,n){"use strict";var o=n(0);n.d(t,"a",function(){return a});var i=this&&this.__decorate||function(e,t,n,o){var i,r=arguments.length,a=r<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,o);else for(var c=e.length-1;c>=0;c--)(i=e[c])&&(a=(r<3?i(a):r>3?i(t,n,a):i(t,n))||a);return r>3&&a&&Object.defineProperty(t,n,a),a},r=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)},a=function(){function e(){}return e.prototype.onMouseEnter=function(){this.isZoomed=!0},e.prototype.onMouseLeave=function(){this.isZoomed=!1},i([n.i(o.HostBinding)("class.small"),r("design:type",Boolean)],e.prototype,"isZoomed",void 0),i([n.i(o.HostListener)("mouseenter"),r("design:type",Function),r("design:paramtypes",[]),r("design:returntype",void 0)],e.prototype,"onMouseEnter",null),i([n.i(o.HostListener)("mouseleave"),r("design:type",Function),r("design:paramtypes",[]),r("design:returntype",void 0)],e.prototype,"onMouseLeave",null),e=i([n.i(o.Directive)({selector:"[bmZoom]"}),r("design:paramtypes",[])],e)}()}});
//# sourceMappingURL=1.055d4e4f4202e714d456.bundle.map