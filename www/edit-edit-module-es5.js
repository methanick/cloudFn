function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["edit-edit-module"], {
  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/edit/edit.page.html":
  /*!***************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/edit/edit.page.html ***!
    \***************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppEditEditPageHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar>\n    <ion-buttons slot=\"start\">\n      <ion-back-button></ion-back-button>\n    </ion-buttons>\n    <ion-title>Edit</ion-title>\n  </ion-toolbar>\n</ion-header>\n\n<ion-content>\n  <ion-card>\n    <ion-card-header>\n      <ion-grid>\n        <ion-row>\n          <ion-col>\n            <ion-card-title>Edit Post</ion-card-title>\n          </ion-col>\n          <ion-col text-end>\n            <ion-button color=\"danger\" size=\"medium\"  (click)=\"deletePost()\">\n              <ion-icon slot=\"start\" name=\"trash\"></ion-icon>\n              DELETE           \n            </ion-button>\n          </ion-col>\n        </ion-row>\n      </ion-grid>\n\n    </ion-card-header>\n\n\n    <ion-card-content>\n      <form [formGroup]=\"postForm\" padding-right>\n        <ion-item>\n          <ion-label position=\"floating\">User ID</ion-label>\n          <ion-input type=\"text\" formControlName=\"userId\" required></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label position=\"floating\">Title</ion-label>\n          <ion-input type=\"text\" formControlName=\"title\" required></ion-input>\n        </ion-item>\n        <ion-item>\n          <ion-label position=\"floating\">Body</ion-label>\n          <ion-textarea type=\"text\" formControlName=\"body\" required></ion-textarea>\n        </ion-item>\n        <div margin-top=\"20px\">\n          <ion-button expand=\"block\" (click)=\"updatePost()\" [disabled]=\"postForm.invalid\">Update</ion-button>\n        </div>\n\n      </form>\n    </ion-card-content>\n  </ion-card>\n\n\n</ion-content>";
    /***/
  },

  /***/
  "./src/app/edit/edit-routing.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/edit/edit-routing.module.ts ***!
    \*********************************************/

  /*! exports provided: EditPageRoutingModule */

  /***/
  function srcAppEditEditRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditPageRoutingModule", function () {
      return EditPageRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _edit_page__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./edit.page */
    "./src/app/edit/edit.page.ts");

    var routes = [{
      path: '',
      component: _edit_page__WEBPACK_IMPORTED_MODULE_3__["EditPage"]
    }];

    var EditPageRoutingModule = function EditPageRoutingModule() {
      _classCallCheck(this, EditPageRoutingModule);
    };

    EditPageRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], EditPageRoutingModule);
    /***/
  },

  /***/
  "./src/app/edit/edit.module.ts":
  /*!*************************************!*\
    !*** ./src/app/edit/edit.module.ts ***!
    \*************************************/

  /*! exports provided: EditPageModule */

  /***/
  function srcAppEditEditModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditPageModule", function () {
      return EditPageModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _edit_routing_module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./edit-routing.module */
    "./src/app/edit/edit-routing.module.ts");
    /* harmony import */


    var _edit_page__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./edit.page */
    "./src/app/edit/edit.page.ts");

    var EditPageModule = function EditPageModule() {
      _classCallCheck(this, EditPageModule);
    };

    EditPageModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"], _ionic_angular__WEBPACK_IMPORTED_MODULE_4__["IonicModule"], _edit_routing_module__WEBPACK_IMPORTED_MODULE_5__["EditPageRoutingModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["ReactiveFormsModule"]],
      declarations: [_edit_page__WEBPACK_IMPORTED_MODULE_6__["EditPage"]]
    })], EditPageModule);
    /***/
  },

  /***/
  "./src/app/edit/edit.page.scss":
  /*!*************************************!*\
    !*** ./src/app/edit/edit.page.scss ***!
    \*************************************/

  /*! exports provided: default */

  /***/
  function srcAppEditEditPageScss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJzcmMvYXBwL2VkaXQvZWRpdC5wYWdlLnNjc3MifQ== */";
    /***/
  },

  /***/
  "./src/app/edit/edit.page.ts":
  /*!***********************************!*\
    !*** ./src/app/edit/edit.page.ts ***!
    \***********************************/

  /*! exports provided: EditPage */

  /***/
  function srcAppEditEditPageTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "EditPage", function () {
      return EditPage;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _ionic_angular__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @ionic/angular */
    "./node_modules/@ionic/angular/dist/fesm5.js");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _services_post_service__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ../services/post.service */
    "./src/app/services/post.service.ts");

    var EditPage =
    /*#__PURE__*/
    function () {
      function EditPage(navCtrl, formBuilder, route, postService, alertController) {
        _classCallCheck(this, EditPage);

        this.navCtrl = navCtrl;
        this.formBuilder = formBuilder;
        this.route = route;
        this.postService = postService;
        this.alertController = alertController;
      }

      _createClass(EditPage, [{
        key: "ngOnChanges",
        value: function ngOnChanges(changes) {}
      }, {
        key: "ngOnInit",
        value: function ngOnInit() {
          this.id = this.route.snapshot.paramMap.get('childKey');
          console.log(this.id);
          this.getPostById(this.id);
          this.postForm = this.formBuilder.group({
            userId: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            title: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required],
            body: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_3__["Validators"].required]
          });
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          this.sub.unsubscribe();
        }
      }, {
        key: "goBack",
        value: function goBack() {
          this.navCtrl.navigateBack('/home');
        }
      }, {
        key: "getPostById",
        value: function getPostById(id) {
          var _this = this;

          this.sub = this.postService.getPostById(id).subscribe(function (post) {
            _this.postForm.setValue({
              userId: post.userId,
              title: post.title,
              body: post.body
            });

            console.log('postById: ', post);
          });
        }
      }, {
        key: "updatePost",
        value: function updatePost() {
          var _this2 = this;

          this.sub = this.postService.updatePost(this.id, this.postForm.value).subscribe(function () {
            console.log('post success');

            _this2.navCtrl.navigateBack('/home');
          });
        }
      }, {
        key: "deletePost",
        value: function deletePost() {
          return tslib__WEBPACK_IMPORTED_MODULE_0__["__awaiter"](this, void 0, void 0,
          /*#__PURE__*/
          regeneratorRuntime.mark(function _callee() {
            var _this3 = this;

            var alert;
            return regeneratorRuntime.wrap(function _callee$(_context) {
              while (1) {
                switch (_context.prev = _context.next) {
                  case 0:
                    _context.next = 2;
                    return this.alertController.create({
                      header: 'Confirm!',
                      message: 'Do you want to delete this post?',
                      buttons: [{
                        text: 'No',
                        role: 'cancel',
                        cssClass: 'secondary',
                        handler: function handler(blah) {
                          console.log('Confirm Cancel: blah');
                        }
                      }, {
                        text: 'Yes',
                        handler: function handler() {
                          _this3.sub = _this3.postService.deletePost(_this3.id).subscribe(function (data) {
                            console.log('delete success', data);

                            _this3.navCtrl.navigateBack('/home');
                          });
                        }
                      }]
                    });

                  case 2:
                    alert = _context.sent;
                    _context.next = 5;
                    return alert.present();

                  case 5:
                  case "end":
                    return _context.stop();
                }
              }
            }, _callee, this);
          }));
        }
      }]);

      return EditPage;
    }();

    EditPage.ctorParameters = function () {
      return [{
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"]
      }, {
        type: _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"]
      }, {
        type: _services_post_service__WEBPACK_IMPORTED_MODULE_5__["PostService"]
      }, {
        type: _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]
      }];
    };

    EditPage = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-edit',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./edit.page.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/edit/edit.page.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./edit.page.scss */
      "./src/app/edit/edit.page.scss")).default]
    }), tslib__WEBPACK_IMPORTED_MODULE_0__["__metadata"]("design:paramtypes", [_ionic_angular__WEBPACK_IMPORTED_MODULE_2__["NavController"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormBuilder"], _angular_router__WEBPACK_IMPORTED_MODULE_4__["ActivatedRoute"], _services_post_service__WEBPACK_IMPORTED_MODULE_5__["PostService"], _ionic_angular__WEBPACK_IMPORTED_MODULE_2__["AlertController"]])], EditPage);
    /***/
  }
}]);
//# sourceMappingURL=edit-edit-module-es5.js.map