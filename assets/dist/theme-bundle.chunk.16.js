(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[16],{

/***/ "./assets/js/theme/custom/my-printers.js":
/*!***********************************************!*\
  !*** ./assets/js/theme/custom/my-printers.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MyPrinters; });
/* harmony import */ var core_js_modules_es6_regexp_replace_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.regexp.replace.js */ "./node_modules/core-js/modules/es6.regexp.replace.js");
/* harmony import */ var core_js_modules_es6_regexp_replace_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_replace_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_function_name_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.function.name.js */ "./node_modules/core-js/modules/es6.function.name.js");
/* harmony import */ var core_js_modules_es6_function_name_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.object.set-prototype-of.js */ "./node_modules/core-js/modules/es6.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es6_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../page-manager */ "./assets/js/theme/page-manager.js");



function _inheritsLoose(t, o) { t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }

var MyPrinters = /*#__PURE__*/function (_PageManager) {
  function MyPrinters(context) {
    var _this;
    _this = _PageManager.call(this, context) || this;
    _this.getCustomerPrinterIds();
    return _this;
  }
  _inheritsLoose(MyPrinters, _PageManager);
  var _proto = MyPrinters.prototype;
  _proto.getCustomerPrinterIds = function getCustomerPrinterIds() {
    var _this2 = this;
    var customerId = this.context.customer.id;
    fetch("https://api.ijtdirect.co.uk/customerprinters.php?customer_id=" + customerId).then(function (res) {
      return res.json();
    }).then(function (data) {
      if (data.data) {
        var categoryIds = [];
        data.data.forEach(function (category) {
          categoryIds.push(category.printer_cat_id);
        });
        categoryIds.forEach(function (catId) {
          _this2.context.cartridges.children.forEach(function (cartridgeType) {
            cartridgeType.children.forEach(function (brand) {
              brand.children.forEach(function (series) {
                var _series$children;
                (_series$children = series.children) == null || _series$children.forEach(function (model) {
                  if (model.id == catId) {
                    if (model.image) {
                      var imageSource = model.image.data.replace('{:size}', '100x100');
                      $('#my-printers-table').append("<div class='my-printers__table-row' id='" + model.id + "'>\n <div class='my-printers__image-container'>\n <a href='" + model.url + "'><img src=" + imageSource + " alt='" + model.image.alt + "'/></a>\n </div>\n <div class='my-printers__printer-name'>\n <a href='" + model.url + "'>" + model.name + "</a>\n </div>\n <div class='my-printers__actions'>\n <a href='" + model.url + "' class='button button--primary'>View Printer Page</a>\n </div>\n </div>");
                    } else {
                      $('#my-printers-table').append("<div class='my-printers__table-row' id='" + model.id + "'>\n <div class='my-printers__image-container'>\n <div></div>\n </div>\n <div class='my-printers__printer-name'>\n <a href='" + model.url + "'>" + model.name + "</a>\n </div>\n <div class='my-printers__actions'>\n <a href='" + model.url + "' class='button button--primary'>View Printer Page</a>\n </div>\n </div>");
                    }
                  }
                });
              });
            });
          });
        });
      } else {
        $('#my-printers-table').append("<div class='my-printers__no-printers-message'>" + data.message + "</div>");
      }
    });
  };
  return MyPrinters;
}(_page_manager__WEBPACK_IMPORTED_MODULE_3__["default"]);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvY3VzdG9tL215LXByaW50ZXJzLmpzIl0sIm5hbWVzIjpbIk15UHJpbnRlcnMiLCJfUGFnZU1hbmFnZXIiLCJjb250ZXh0IiwiX3RoaXMiLCJjYWxsIiwiZ2V0Q3VzdG9tZXJQcmludGVySWRzIiwiX2luaGVyaXRzTG9vc2UiLCJfcHJvdG8iLCJwcm90b3R5cGUiLCJfdGhpczIiLCJjdXN0b21lcklkIiwiY3VzdG9tZXIiLCJpZCIsImZldGNoIiwidGhlbiIsInJlcyIsImpzb24iLCJkYXRhIiwiY2F0ZWdvcnlJZHMiLCJmb3JFYWNoIiwiY2F0ZWdvcnkiLCJwdXNoIiwicHJpbnRlcl9jYXRfaWQiLCJjYXRJZCIsImNhcnRyaWRnZXMiLCJjaGlsZHJlbiIsImNhcnRyaWRnZVR5cGUiLCJicmFuZCIsInNlcmllcyIsIl9zZXJpZXMkY2hpbGRyZW4iLCJtb2RlbCIsImltYWdlIiwiaW1hZ2VTb3VyY2UiLCJyZXBsYWNlIiwiJCIsImFwcGVuZCIsInVybCIsImFsdCIsIm5hbWUiLCJtZXNzYWdlIiwiUGFnZU1hbmFnZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUEwQztBQUFBLElBQXFCQSxVQUFVLDBCQUFBQyxZQUFBO0VBQXFCLFNBQUFELFdBQVlFLE9BQU8sRUFBQztJQUFBLElBQUFDLEtBQUE7SUFBQ0EsS0FBQSxHQUFBRixZQUFBLENBQUFHLElBQUEsT0FBTUYsT0FBTyxDQUFDO0lBQUNDLEtBQUEsQ0FBS0UscUJBQXFCLENBQUMsQ0FBQztJQUFBLE9BQUFGLEtBQUE7RUFBQTtFQUFDRyxjQUFBLENBQUFOLFVBQUEsRUFBQUMsWUFBQTtFQUFBLElBQUFNLE1BQUEsR0FBQVAsVUFBQSxDQUFBUSxTQUFBO0VBQUFELE1BQUEsQ0FDL0pGLHFCQUFxQixHQUFyQixTQUFBQSxxQkFBcUJBLENBQUEsRUFBRTtJQUFBLElBQUFJLE1BQUE7SUFBQyxJQUFNQyxVQUFVLEdBQUMsSUFBSSxDQUFDUixPQUFPLENBQUNTLFFBQVEsQ0FBQ0MsRUFBRTtJQUFDQyxLQUFLLG1FQUFpRUgsVUFBWSxDQUFDLENBQUNJLElBQUksQ0FBQyxVQUFBQyxHQUFHO01BQUEsT0FBRUEsR0FBRyxDQUFDQyxJQUFJLENBQUMsQ0FBQztJQUFBLEVBQUMsQ0FBQ0YsSUFBSSxDQUFDLFVBQUFHLElBQUksRUFBRTtNQUFDLElBQUdBLElBQUksQ0FBQ0EsSUFBSSxFQUFDO1FBQUMsSUFBSUMsV0FBVyxHQUFDLEVBQUU7UUFBQ0QsSUFBSSxDQUFDQSxJQUFJLENBQUNFLE9BQU8sQ0FBQyxVQUFBQyxRQUFRLEVBQUU7VUFBQ0YsV0FBVyxDQUFDRyxJQUFJLENBQUNELFFBQVEsQ0FBQ0UsY0FBYyxDQUFDO1FBQUEsQ0FBQyxDQUFDO1FBQUNKLFdBQVcsQ0FBQ0MsT0FBTyxDQUFDLFVBQUFJLEtBQUssRUFBRTtVQUFDZCxNQUFJLENBQUNQLE9BQU8sQ0FBQ3NCLFVBQVUsQ0FBQ0MsUUFBUSxDQUFDTixPQUFPLENBQUMsVUFBQU8sYUFBYSxFQUFFO1lBQUNBLGFBQWEsQ0FBQ0QsUUFBUSxDQUFDTixPQUFPLENBQUMsVUFBQVEsS0FBSyxFQUFFO2NBQUNBLEtBQUssQ0FBQ0YsUUFBUSxDQUFDTixPQUFPLENBQUMsVUFBQVMsTUFBTSxFQUFFO2dCQUFBLElBQUFDLGdCQUFBO2dCQUFDLENBQUFBLGdCQUFBLEdBQUFELE1BQU0sQ0FBQ0gsUUFBUSxhQUFmSSxnQkFBQSxDQUFpQlYsT0FBTyxDQUFDLFVBQUFXLEtBQUssRUFBRTtrQkFBQyxJQUFHQSxLQUFLLENBQUNsQixFQUFFLElBQUVXLEtBQUssRUFBQztvQkFBQyxJQUFHTyxLQUFLLENBQUNDLEtBQUssRUFBQztzQkFBQyxJQUFJQyxXQUFXLEdBQUNGLEtBQUssQ0FBQ0MsS0FBSyxDQUFDZCxJQUFJLENBQUNnQixPQUFPLENBQUMsU0FBUyxFQUFDLFNBQVMsQ0FBQztzQkFBQ0MsQ0FBQyxDQUFDLG9CQUFvQixDQUFDLENBQUNDLE1BQU0sOENBQTRDTCxLQUFLLENBQUNsQixFQUFFLG1FQUV2b0JrQixLQUFLLENBQUNNLEdBQUcsbUJBQWNKLFdBQVcsY0FBU0YsS0FBSyxDQUFDQyxLQUFLLENBQUNNLEdBQUcsOEVBRzFEUCxLQUFLLENBQUNNLEdBQUcsVUFBS04sS0FBSyxDQUFDUSxJQUFJLHNFQUd4QlIsS0FBSyxDQUFDTSxHQUFHLDZFQUViLENBQUM7b0JBQUEsQ0FBQyxNQUFJO3NCQUFDRixDQUFDLENBQUMsb0JBQW9CLENBQUMsQ0FBQ0MsTUFBTSw4Q0FBNENMLEtBQUssQ0FBQ2xCLEVBQUUsb0lBS3JGa0IsS0FBSyxDQUFDTSxHQUFHLFVBQUtOLEtBQUssQ0FBQ1EsSUFBSSxzRUFHeEJSLEtBQUssQ0FBQ00sR0FBRyw2RUFFYixDQUFDO29CQUFBO2tCQUFDO2dCQUFDLENBQUMsQ0FBQztjQUFBLENBQUMsQ0FBQztZQUFBLENBQUMsQ0FBQztVQUFBLENBQUMsQ0FBQztRQUFBLENBQUMsQ0FBQztNQUFBLENBQUMsTUFBSTtRQUFDRixDQUFDLENBQUMsb0JBQW9CLENBQUMsQ0FBQ0MsTUFBTSxvREFBa0RsQixJQUFJLENBQUNzQixPQUFPLFdBQVEsQ0FBQztNQUFBO0lBQUMsQ0FBQyxDQUFDO0VBQUEsQ0FBQztFQUFBLE9BQUF2QyxVQUFBO0FBQUEsRUFyQmxEd0MscURBQVciLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLjE2LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBhZ2VNYW5hZ2VyIGZyb20gXCIuLi9wYWdlLW1hbmFnZXJcIjtleHBvcnQgZGVmYXVsdCBjbGFzcyBNeVByaW50ZXJzIGV4dGVuZHMgUGFnZU1hbmFnZXJ7Y29uc3RydWN0b3IoY29udGV4dCl7c3VwZXIoY29udGV4dCk7dGhpcy5nZXRDdXN0b21lclByaW50ZXJJZHMoKX1cbmdldEN1c3RvbWVyUHJpbnRlcklkcygpe2NvbnN0IGN1c3RvbWVySWQ9dGhpcy5jb250ZXh0LmN1c3RvbWVyLmlkO2ZldGNoKGBodHRwczovL2FwaS5panRkaXJlY3QuY28udWsvY3VzdG9tZXJwcmludGVycy5waHA/Y3VzdG9tZXJfaWQ9JHtjdXN0b21lcklkfWApLnRoZW4ocmVzPT5yZXMuanNvbigpKS50aGVuKGRhdGE9PntpZihkYXRhLmRhdGEpe2xldCBjYXRlZ29yeUlkcz1bXTtkYXRhLmRhdGEuZm9yRWFjaChjYXRlZ29yeT0+e2NhdGVnb3J5SWRzLnB1c2goY2F0ZWdvcnkucHJpbnRlcl9jYXRfaWQpfSk7Y2F0ZWdvcnlJZHMuZm9yRWFjaChjYXRJZD0+e3RoaXMuY29udGV4dC5jYXJ0cmlkZ2VzLmNoaWxkcmVuLmZvckVhY2goY2FydHJpZGdlVHlwZT0+e2NhcnRyaWRnZVR5cGUuY2hpbGRyZW4uZm9yRWFjaChicmFuZD0+e2JyYW5kLmNoaWxkcmVuLmZvckVhY2goc2VyaWVzPT57c2VyaWVzLmNoaWxkcmVuPy5mb3JFYWNoKG1vZGVsPT57aWYobW9kZWwuaWQ9PWNhdElkKXtpZihtb2RlbC5pbWFnZSl7bGV0IGltYWdlU291cmNlPW1vZGVsLmltYWdlLmRhdGEucmVwbGFjZSgnezpzaXplfScsJzEwMHgxMDAnKTskKCcjbXktcHJpbnRlcnMtdGFibGUnKS5hcHBlbmQoYDxkaXYgY2xhc3M9J215LXByaW50ZXJzX190YWJsZS1yb3cnIGlkPScke21vZGVsLmlkfSc+XG4gPGRpdiBjbGFzcz0nbXktcHJpbnRlcnNfX2ltYWdlLWNvbnRhaW5lcic+XG4gPGEgaHJlZj0nJHttb2RlbC51cmx9Jz48aW1nIHNyYz0ke2ltYWdlU291cmNlfSBhbHQ9JyR7bW9kZWwuaW1hZ2UuYWx0fScvPjwvYT5cbiA8L2Rpdj5cbiA8ZGl2IGNsYXNzPSdteS1wcmludGVyc19fcHJpbnRlci1uYW1lJz5cbiA8YSBocmVmPScke21vZGVsLnVybH0nPiR7bW9kZWwubmFtZX08L2E+XG4gPC9kaXY+XG4gPGRpdiBjbGFzcz0nbXktcHJpbnRlcnNfX2FjdGlvbnMnPlxuIDxhIGhyZWY9JyR7bW9kZWwudXJsfScgY2xhc3M9J2J1dHRvbiBidXR0b24tLXByaW1hcnknPlZpZXcgUHJpbnRlciBQYWdlPC9hPlxuIDwvZGl2PlxuIDwvZGl2PmApfWVsc2V7JCgnI215LXByaW50ZXJzLXRhYmxlJykuYXBwZW5kKGA8ZGl2IGNsYXNzPSdteS1wcmludGVyc19fdGFibGUtcm93JyBpZD0nJHttb2RlbC5pZH0nPlxuIDxkaXYgY2xhc3M9J215LXByaW50ZXJzX19pbWFnZS1jb250YWluZXInPlxuIDxkaXY+PC9kaXY+XG4gPC9kaXY+XG4gPGRpdiBjbGFzcz0nbXktcHJpbnRlcnNfX3ByaW50ZXItbmFtZSc+XG4gPGEgaHJlZj0nJHttb2RlbC51cmx9Jz4ke21vZGVsLm5hbWV9PC9hPlxuIDwvZGl2PlxuIDxkaXYgY2xhc3M9J215LXByaW50ZXJzX19hY3Rpb25zJz5cbiA8YSBocmVmPScke21vZGVsLnVybH0nIGNsYXNzPSdidXR0b24gYnV0dG9uLS1wcmltYXJ5Jz5WaWV3IFByaW50ZXIgUGFnZTwvYT5cbiA8L2Rpdj5cbiA8L2Rpdj5gKX19fSl9KX0pfSl9KX1lbHNleyQoJyNteS1wcmludGVycy10YWJsZScpLmFwcGVuZChgPGRpdiBjbGFzcz0nbXktcHJpbnRlcnNfX25vLXByaW50ZXJzLW1lc3NhZ2UnPiR7ZGF0YS5tZXNzYWdlfTwvZGl2PmApfX0pfX1cbiJdLCJzb3VyY2VSb290IjoiIn0=