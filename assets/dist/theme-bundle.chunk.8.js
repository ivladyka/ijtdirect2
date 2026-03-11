(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[8],{

/***/ "./assets/js/theme/cart.js":
/*!*********************************!*\
  !*** ./assets/js/theme/cart.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Cart; });
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash/debounce */ "./node_modules/lodash/debounce.js");
/* harmony import */ var lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash_debounce__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash_bind__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash/bind */ "./node_modules/lodash/bind.js");
/* harmony import */ var lodash_bind__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash_bind__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_number_constructor_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.number.constructor.js */ "./node_modules/core-js/modules/es6.number.constructor.js");
/* harmony import */ var core_js_modules_es6_number_constructor_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_number_constructor_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es6_string_includes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es6.string.includes.js */ "./node_modules/core-js/modules/es6.string.includes.js");
/* harmony import */ var core_js_modules_es6_string_includes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_includes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es7_array_includes_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es7.array.includes.js */ "./node_modules/core-js/modules/es7.array.includes.js");
/* harmony import */ var core_js_modules_es7_array_includes_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_array_includes_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es6.array.find.js */ "./node_modules/core-js/modules/es6.array.find.js");
/* harmony import */ var core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es6_regexp_replace_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es6.regexp.replace.js */ "./node_modules/core-js/modules/es6.regexp.replace.js");
/* harmony import */ var core_js_modules_es6_regexp_replace_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_replace_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es6_object_to_string_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/es6.object.to-string.js */ "./node_modules/core-js/modules/es6.object.to-string.js");
/* harmony import */ var core_js_modules_es6_object_to_string_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_to_string_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es6_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es6.regexp.to-string.js */ "./node_modules/core-js/modules/es6.regexp.to-string.js");
/* harmony import */ var core_js_modules_es6_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_to_string_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es6_regexp_split_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es6.regexp.split.js */ "./node_modules/core-js/modules/es6.regexp.split.js");
/* harmony import */ var core_js_modules_es6_regexp_split_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_split_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es6_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es6.object.set-prototype-of.js */ "./node_modules/core-js/modules/es6.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es6_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./page-manager */ "./assets/js/theme/page-manager.js");
/* harmony import */ var _common_gift_certificate_validator__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./common/gift-certificate-validator */ "./assets/js/theme/common/gift-certificate-validator.js");
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _cart_shipping_estimator__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./cart/shipping-estimator */ "./assets/js/theme/cart/shipping-estimator.js");
/* harmony import */ var _global_modal__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./global/modal */ "./assets/js/theme/global/modal.js");
/* harmony import */ var _global_sweet_alert__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./global/sweet-alert */ "./assets/js/theme/global/sweet-alert.js");











function _inheritsLoose(t, o) { t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }






var Cart = /*#__PURE__*/function (_PageManager) {
  function Cart() {
    return _PageManager.apply(this, arguments) || this;
  }
  _inheritsLoose(Cart, _PageManager);
  var _proto = Cart.prototype;
  _proto.onReady = function onReady() {
    var _this = this;
    // Fetch coupon code from discount applied to cart
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_13__["default"].api.cart.getCart({}, function (err, response) {
      var _response$coupons$;
      var couponCode = response == null || (_response$coupons$ = response.coupons[0]) == null ? void 0 : _response$coupons$.code;
      _this.applyLocalPromo(couponCode);
    });
    this.$cartContent = $('[data-cart-content]');
    this.$cartMessages = $('[data-cart-status]');
    this.$cartTotals = $('[data-cart-totals]');
    this.$overlay = $('[data-cart] .loadingOverlay').hide(); // TODO: temporary until roper pulls in his cart components

    this.bindEvents();
    this.loadRelatedProducts();
  };
  _proto.applyLocalPromo = function applyLocalPromo(couponCode) {
    if (!couponCode) {
      return;
    }
    // Use coupon code to fetch globalPromo object for local storage
    $.ajax({
      url: "https://ijt-direct-bc-middleware.nw.r.appspot.com/v3/promotions?code=" + couponCode,
      context: document.body
    }).done(function (res) {
      if (!res.data.length) {
        return;
      } else {
        var promoData = res.data[0];
        // Add returned discount object to global promo
        promoData.coupon_code = couponCode;
        localStorage.setItem('globalPromo', JSON.stringify(promoData));
      }
    });
  };
  _proto.cartUpdate = function cartUpdate($target) {
    var _this2 = this;
    var itemId = $target.data('cartItemid');
    var $el = $("#qty-" + itemId);
    var oldQty = parseInt($el.val(), 10);
    var maxQty = parseInt($el.data('quantityMax'), 10);
    var minQty = parseInt($el.data('quantityMin'), 10);
    var minError = $el.data('quantityMinError');
    var maxError = $el.data('quantityMaxError');
    var newQty = $target.data('action') === 'inc' ? oldQty + 1 : oldQty - 1;

    // Does not quality for min/max quantity
    if (newQty < minQty) {
      return Object(_global_sweet_alert__WEBPACK_IMPORTED_MODULE_16__["default"])({
        text: minError,
        type: 'error'
      });
    } else if (maxQty > 0 && newQty > maxQty) {
      return Object(_global_sweet_alert__WEBPACK_IMPORTED_MODULE_16__["default"])({
        text: maxError,
        type: 'error'
      });
    }
    this.$overlay.show();
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_13__["default"].api.cart.itemUpdate(itemId, newQty, function (err, response) {
      _this2.$overlay.hide();
      if (response.data.status === 'succeed') {
        // if the quantity is changed "1" from "0", we have to remove the row.
        var remove = newQty === 0;
        if (remove) {
          _this2.removeSwitchedItems(itemId);
        }
        _this2.refreshContent(remove);
      } else {
        $el.val(oldQty);
        Object(_global_sweet_alert__WEBPACK_IMPORTED_MODULE_16__["default"])({
          text: response.data.errors.join('\n'),
          type: 'error'
        });
      }
    });
  };
  _proto.cartUpdateQtyTextChange = function cartUpdateQtyTextChange($target, preVal) {
    var _this3 = this;
    if (preVal === void 0) {
      preVal = null;
    }
    var itemId = $target.data('cartItemid');
    var $el = $("#qty-" + itemId);
    var maxQty = parseInt($el.data('quantityMax'), 10);
    var minQty = parseInt($el.data('quantityMin'), 10);
    var oldQty = preVal !== null ? preVal : minQty;
    var minError = $el.data('quantityMinError');
    var maxError = $el.data('quantityMaxError');
    var newQty = parseInt(Number($el.val()), 10);
    var invalidEntry;

    // Does not quality for min/max quantity
    if (!newQty) {
      invalidEntry = $el.val();
      $el.val(oldQty);
      return Object(_global_sweet_alert__WEBPACK_IMPORTED_MODULE_16__["default"])({
        text: invalidEntry + " is not a valid entry",
        type: 'error'
      });
    } else if (newQty < minQty) {
      $el.val(oldQty);
      return Object(_global_sweet_alert__WEBPACK_IMPORTED_MODULE_16__["default"])({
        text: minError,
        type: 'error'
      });
    } else if (maxQty > 0 && newQty > maxQty) {
      $el.val(oldQty);
      return Object(_global_sweet_alert__WEBPACK_IMPORTED_MODULE_16__["default"])({
        text: maxError,
        type: 'error'
      });
    }
    this.$overlay.show();
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_13__["default"].api.cart.itemUpdate(itemId, newQty, function (err, response) {
      _this3.$overlay.hide();
      if (response.data.status === 'succeed') {
        // if the quantity is changed "1" from "0", we have to remove the row.
        var remove = newQty === 0;
        if (remove) {
          _this3.removeSwitchedItems(itemId);
        }
        _this3.refreshContent(remove);
      } else {
        $el.val(oldQty);
        Object(_global_sweet_alert__WEBPACK_IMPORTED_MODULE_16__["default"])({
          text: response.data.errors.join('\n'),
          type: 'error'
        });
      }
    });
  };
  _proto.cartRemoveItem = function cartRemoveItem(itemId) {
    var _this4 = this;
    this.$overlay.show();
    setTimeout(function () {
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_13__["default"].api.cart.getCartQuantity({}, function (err, response) {
        var countItem = (parseInt(response) || 0) - (parseInt($("i.quantity-6667S").text()) || 0) - (parseInt($("i.quantity-6668S").text()) || 0);
        $('.cart-item-counts strong').text(countItem);
      });
    }, 2500);
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_13__["default"].api.cart.itemRemove(itemId, function (err, response) {
      if (response.data.status === 'succeed') {
        _this4.removeSwitchedItems(itemId);
        _this4.refreshContent(true);
      } else {
        Object(_global_sweet_alert__WEBPACK_IMPORTED_MODULE_16__["default"])({
          text: response.data.errors.join('\n'),
          type: 'error'
        });
      }
    });
  };
  _proto.cartEditOptions = function cartEditOptions(itemId) {
    var _this5 = this;
    var modal = Object(_global_modal__WEBPACK_IMPORTED_MODULE_15__["defaultModal"])();
    var options = {
      template: 'cart/modals/configure-product'
    };
    modal.open();
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_13__["default"].api.productAttributes.configureInCart(itemId, options, function (err, response) {
      modal.updateContent(response.content);
      _this5.bindGiftWrappingForm();
    });
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_13__["default"].hooks.on('product-option-change', function (event, option) {
      var $changedOption = $(option);
      var $form = $changedOption.parents('form');
      var $submit = $('input.button', $form);
      var $messageBox = $('.alertMessageBox');
      var item = $('[name="item_id"]', $form).attr('value');
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_13__["default"].api.productAttributes.optionChange(item, $form.serialize(), function (err, result) {
        var data = result.data || {};
        if (err) {
          Object(_global_sweet_alert__WEBPACK_IMPORTED_MODULE_16__["default"])({
            text: err,
            type: 'error'
          });
          return false;
        }
        if (data.purchasing_message) {
          $('p.alertBox-message', $messageBox).text(data.purchasing_message);
          $submit.prop('disabled', true);
          $messageBox.show();
        } else {
          $submit.prop('disabled', false);
          $messageBox.hide();
        }
        if (!data.purchasable || !data.instock) {
          $submit.prop('disabled', true);
        } else {
          $submit.prop('disabled', false);
        }
      });
    });
  };
  _proto.refreshContent = function refreshContent(remove) {
    var _this6 = this;
    var $cartItemsRows = $('[data-item-row]', this.$cartContent);
    var $cartPageTitle = $('[data-cart-page-title]');
    var options = {
      template: {
        content: 'cart/content',
        totals: 'cart/totals',
        pageTitle: 'cart/page-title',
        statusMessages: 'cart/status-messages'
      }
    };
    this.$overlay.show();

    // Remove last item from cart? Reload
    if (remove && $cartItemsRows.length === 1) {
      return window.location.reload();
    }
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_13__["default"].api.cart.getContent(options, function (err, response) {
      _this6.$cartContent.html(response.content);
      _this6.$cartTotals.html(response.totals);
      _this6.$cartMessages.html(response.statusMessages);
      $cartPageTitle.replaceWith(response.pageTitle);
      _this6.bindEvents();
      _this6.$overlay.hide();
      var quantity = $('[data-cart-quantity]', _this6.$cartContent).data('cartQuantity') || 0;
      $('body').trigger('cart-quantity-update', quantity);
      _this6.loadRelatedProducts();

      // Add functionality to remove coupon button that removes promo from local storage
      $('#removeCoupon').on('click', _this6.removeCoupon(event));
    });
  };
  _proto.bindCartEvents = function bindCartEvents() {
    var _this7 = this;
    var debounceTimeout = 400;
    var cartUpdate = lodash_bind__WEBPACK_IMPORTED_MODULE_1___default()(lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default()(this.cartUpdate, debounceTimeout), this);
    var cartUpdateQtyTextChange = lodash_bind__WEBPACK_IMPORTED_MODULE_1___default()(lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default()(this.cartUpdateQtyTextChange, debounceTimeout), this);
    var cartRemoveItem = lodash_bind__WEBPACK_IMPORTED_MODULE_1___default()(lodash_debounce__WEBPACK_IMPORTED_MODULE_0___default()(this.cartRemoveItem, debounceTimeout), this);
    var preVal;

    // cart update
    $('[data-cart-update]', this.$cartContent).on('click', function (event) {
      var $target = $(event.currentTarget);
      event.preventDefault();

      // update cart quantity
      cartUpdate($target);
    });

    // cart qty manually updates
    $('.cart-item-qty-input', this.$cartContent).on('focus', function onQtyFocus() {
      preVal = this.value;
    }).change(function (event) {
      var $target = $(event.currentTarget);
      event.preventDefault();

      // update cart quantity
      cartUpdateQtyTextChange($target, preVal);
    });
    $('.cart-remove', this.$cartContent).on('click', function (event) {
      var itemId = $(event.currentTarget).data('cartItemid');
      var string = $(event.currentTarget).data('confirmDelete');
      Object(_global_sweet_alert__WEBPACK_IMPORTED_MODULE_16__["default"])({
        text: string,
        type: 'warning',
        showCancelButton: true
      }).then(function () {
        // remove item from cart
        cartRemoveItem(itemId);
      });
      event.preventDefault();
    });
    $('[data-item-edit]', this.$cartContent).on('click', function (event) {
      var itemId = $(event.currentTarget).data('itemEdit');
      event.preventDefault();
      // edit item in cart
      _this7.cartEditOptions(itemId);
    });
  };
  _proto.bindPromoCodeEvents = function bindPromoCodeEvents() {
    var _this8 = this;
    var $couponContainer = $('.coupon-code');
    var $couponForm = $('.coupon-form');
    var $codeInput = $('[name="couponcode"]', $couponForm);
    $('.coupon-code-add').on('click', function (event) {
      event.preventDefault();
      $(event.currentTarget).hide();
      $couponContainer.show();
      $('.coupon-code-cancel').show();
      $codeInput.trigger('focus');
    });
    $('.coupon-code-cancel').on('click', function (event) {
      event.preventDefault();
      $couponContainer.hide();
      $('.coupon-code-cancel').hide();
      $('.coupon-code-add').show();
    });
    $couponForm.on('submit', function (event) {
      var code = $codeInput.val();
      event.preventDefault();

      // Empty code
      if (!code) {
        return Object(_global_sweet_alert__WEBPACK_IMPORTED_MODULE_16__["default"])({
          text: $codeInput.data('error'),
          type: 'error'
        });
      }
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_13__["default"].api.cart.applyCode(code, function (err, response) {
        if (response.data.status === 'success') {
          _this8.refreshContent();
        } else if (response.data.errors.includes("Coupon does not apply")) {
          // Display error modal if coupon isn't applicable to current cart
          Object(_global_sweet_alert__WEBPACK_IMPORTED_MODULE_16__["default"])({
            text: "Coupon does not apply to current cart products",
            type: 'error'
          });
        }
      });
    });
  };
  _proto.bindGiftCertificateEvents = function bindGiftCertificateEvents() {
    var _this9 = this;
    var $certContainer = $('.gift-certificate-code');
    var $certForm = $('.cart-gift-certificate-form');
    var $certInput = $('[name="certcode"]', $certForm);
    $('.gift-certificate-add').on('click', function (event) {
      event.preventDefault();
      $(event.currentTarget).toggle();
      $certContainer.toggle();
      $('.gift-certificate-cancel').toggle();
    });
    $('.gift-certificate-cancel').on('click', function (event) {
      event.preventDefault();
      $certContainer.toggle();
      $('.gift-certificate-add').toggle();
      $('.gift-certificate-cancel').toggle();
    });
    $certForm.on('submit', function (event) {
      var code = $certInput.val();
      event.preventDefault();
      if (!Object(_common_gift_certificate_validator__WEBPACK_IMPORTED_MODULE_12__["default"])(code)) {
        return Object(_global_sweet_alert__WEBPACK_IMPORTED_MODULE_16__["default"])({
          text: $certInput.data('error'),
          type: 'error'
        });
      }
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_13__["default"].api.cart.applyGiftCertificate(code, function (err, resp) {
        if (resp.data.status === 'success') {
          _this9.refreshContent();
        } else {
          Object(_global_sweet_alert__WEBPACK_IMPORTED_MODULE_16__["default"])({
            text: resp.data.errors.join('\n'),
            type: 'error'
          });
        }
      });
    });
  };
  _proto.bindGiftWrappingEvents = function bindGiftWrappingEvents() {
    var _this0 = this;
    var modal = Object(_global_modal__WEBPACK_IMPORTED_MODULE_15__["defaultModal"])();
    $('[data-item-giftwrap]').on('click', function (event) {
      var itemId = $(event.currentTarget).data('itemGiftwrap');
      var options = {
        template: 'cart/modals/gift-wrapping-form'
      };
      event.preventDefault();
      modal.open();
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_13__["default"].api.cart.getItemGiftWrappingOptions(itemId, options, function (err, response) {
        modal.updateContent(response.content);
        _this0.bindGiftWrappingForm();
      });
    });
  };
  _proto.bindGiftWrappingForm = function bindGiftWrappingForm() {
    $('.giftWrapping-select').on('change', function (event) {
      var $select = $(event.currentTarget);
      var id = $select.val();
      var index = $select.data('index');
      if (!id) {
        return;
      }
      var allowMessage = $select.find("option[value=" + id + "]").data('allowMessage');
      $(".giftWrapping-image-" + index).hide();
      $("#giftWrapping-image-" + index + "-" + id).show();
      if (allowMessage) {
        $("#giftWrapping-message-" + index).show();
      } else {
        $("#giftWrapping-message-" + index).hide();
      }
    });
    $('.giftWrapping-select').trigger('change');
    function toggleViews() {
      var value = $('input:radio[name ="giftwraptype"]:checked').val();
      var $singleForm = $('.giftWrapping-single');
      var $multiForm = $('.giftWrapping-multiple');
      if (value === 'same') {
        $singleForm.show();
        $multiForm.hide();
      } else {
        $singleForm.hide();
        $multiForm.show();
      }
    }
    $('[name="giftwraptype"]').on('click', toggleViews);
    toggleViews();
  };
  _proto.bindEvents = function bindEvents() {
    this.bindCartEvents();
    this.bindPromoCodeEvents();
    this.bindGiftWrappingEvents();
    this.bindGiftCertificateEvents();

    // initiate shipping estimator module
    this.shippingEstimator = new _cart_shipping_estimator__WEBPACK_IMPORTED_MODULE_14__["default"]($('[data-shipping-estimator]'));
  };
  _proto.removeCoupon = function removeCoupon(event) {
    event.preventDefault();
    localStorage.removeItem('globalPromo');
    if ($(event.target).attr('href') != null) {
      window.location = $(event.target).attr('href');
    }
  };
  _proto.ijt_formatMoney = function ijt_formatMoney(inputValue) {
    var outputValue = new Number(inputValue);
    return "&pound;" + outputValue.toFixed(2).toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
  };
  _proto.loadRelatedProducts = function loadRelatedProducts() {
    var _this1 = this;
    var relatedProductsCount = 0;
    this.$cartContent.find("tr.cart-related-product-container div.cart-related-product span").each(function (index, placeholder) {
      var ignoreRelatedProduct = false;
      if ($(placeholder).closest("tr.cart-related-product-container").prev("tr.cart-with-related-product").find("p.cart-item-brand").length > 0) {
        ignoreRelatedProduct = _this1.ignoreRelatedProductsBrand($(placeholder).closest("tr.cart-related-product-container").prev("tr.cart-with-related-product").find("p.cart-item-brand").text());
      }
      if (!ignoreRelatedProduct) {
        relatedProductsCount++;
      }
    });
    if (relatedProductsCount > 0 && this.$cartContent.find("tr.cart-item a.cart-item-name__label:contains('Swap & Save')").length == 0 && this.$cartContent.find("tr.cart-item a.cart-item-name__label:contains('Thank you for Swapping & Saving')").length == 0) {
      var formDataTY = new FormData();
      formDataTY.append('action', 'add');
      formDataTY.append('product_id', 13327);
      formDataTY.append('qty[]', 1);
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_13__["default"].api.cart.itemAdd(formDataTY, function (err, response) {
        var errorMessage = err || response.data.error;
        if (errorMessage) {
          return Object(_global_sweet_alert__WEBPACK_IMPORTED_MODULE_16__["default"])({
            text: errorMessage,
            type: 'error'
          });
        }
        $("i.quantity-6668S").text("1");
        _this1.refreshContent(true);
      });
      return;
    }
    if (this.$cartContent.find("tr.cart-item a.cart-item-name__label:contains('Thank you for Swapping & Saving')").length > 0 && (typeof Cookies.get('ijtd_SwitchedItems') === 'undefined' || Cookies.get("ijtd_SwitchedItems") == "")) {
      //Remove the Thank you for Swapping & Saving
      var aItemName = this.$cartContent.find("tr.cart-item a.cart-item-name__label:contains('Thank you for Swapping & Saving')")[0];
      var trItem = $(aItemName).closest("tr.cart-item");
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_13__["default"].api.cart.itemRemove($(trItem).find("input.cart-item-qty-input").attr("data-cart-itemid"), function (err, response) {
        $("i.quantity-6667S").text("0");
        _this1.refreshContent(true);
      });
      return;
    }

    //this.$cartContent.find("tr.cart-item span.cart-related-product").each((i, placeholder) => {
    this.$cartContent.find("tr.cart-related-product-container div.cart-related-product span").each(function (index, placeholder) {
      //Pace.ignore(() => {

      var ignoreRelatedProduct = false;
      if ($(placeholder).closest("tr.cart-related-product-container").prev("tr.cart-with-related-product").find("p.cart-item-brand").length > 0) {
        ignoreRelatedProduct = _this1.ignoreRelatedProductsBrand($(placeholder).closest("tr.cart-related-product-container").prev("tr.cart-with-related-product").find("p.cart-item-brand").text());
      }
      if (!ignoreRelatedProduct) {
        var template = 'cs-custom/ajax-products-by-category-id-result-product';
        _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_13__["default"].api.getPage($(placeholder).html(), {
          template: template
        }, function (err, resp) {
          $(placeholder).next().html(resp);
          var productMainPrice = parseFloat($(placeholder).closest("div.cart-related-product").attr("cart-prod-mainprice"));
          var productRelatedPrice = parseFloat($(placeholder).closest("div.cart-related-product").find("div.cart-related-prod").attr("data-product-price"));
          var productMainYields = 0;
          var productRelatedYields = 0;
          $(placeholder).closest("tr.cart-related-product-container").prev("tr.cart-with-related-product").find("div.page-yield-item-value span").each(function () {
            productMainYields += parseFloat($(this).text());
          });
          $(placeholder).closest("div.cart-related-product").find("div.page-yield-item-value span").each(function () {
            productRelatedYields += parseFloat($(this).text());
          });
          var qty = parseInt($(placeholder).closest("tr.cart-related-product-container").prev().find("input.cart-item-qty-input").val());
          if ($(placeholder).closest("div.cart-related-product").find("div.bulk_discount_rates-box").length > 0) {
            $(placeholder).closest("div.cart-related-product").find("div.bulk_discount_rates-box div[ijt-min-price-value]").each(function (index) {
              if (qty >= parseInt($(this).attr("ijt-min-price-value"))) {
                if (parseInt($(this).attr("ijt-max-price-value")) == 0 || qty <= parseInt($(this).attr("ijt-max-price-value"))) {
                  productRelatedPrice = parseFloat($(this).text().replace(/\u00A3/g, ''));
                }
              }
            });
          }
          if (productMainPrice > productRelatedPrice) {
            var relatedSave = Math.round(qty * (productMainPrice - productRelatedPrice) * 100) / 100;
            var relatedSavePerItem = Math.round((productMainPrice - productRelatedPrice) * 100) / 100;
            var relatedProdTotalPrice = Math.round(qty * productRelatedPrice * 100) / 100;
            $(placeholder).closest("div.cart-related-product").find("span.related-save").show();
            $(placeholder).closest("div.cart-related-product").find("span.related-save").html(_this1.ijt_formatMoney(relatedSave));
            $(placeholder).closest("div.cart-related-product").find("span[data-product-price-with-tax]").html(_this1.ijt_formatMoney(relatedProdTotalPrice));
            if (productMainYields == productRelatedYields) {
              $(placeholder).closest("div.cart-related-product").find("span.related-blue-message").html("<strong>DID YOU KNOW?<br/> You could save " + _this1.ijt_formatMoney(relatedSavePerItem) + " per cartridge just by swapping to the IJT Recycled brand?</strong>");
              if (qty == 1) {
                $(placeholder).closest("div.cart-related-product").find(".cart-related-product-count-item").html("Get " + qty + " cartridge for only " + _this1.ijt_formatMoney(relatedProdTotalPrice) + "<br/> saving you " + _this1.ijt_formatMoney(relatedSave));
              } else {
                $(placeholder).closest("div.cart-related-product").find(".cart-related-product-count-item").html("Get all " + qty + " cartridges for only " + _this1.ijt_formatMoney(relatedProdTotalPrice) + "<br/> saving you " + _this1.ijt_formatMoney(relatedSave));
              }
              $(placeholder).closest("div.cart-related-product").find(".switch-and-save").html("Swap & Save " + _this1.ijt_formatMoney(relatedSave));
            } else if (productMainYields > productRelatedYields) {
              $(placeholder).closest("div.cart-related-product").find("span.related-blue-message").html("<strong>DID YOU KNOW?<br/> You could save " + _this1.ijt_formatMoney(relatedSavePerItem) + " per cartridge just by swapping to the IJT Recycled brand?</strong>");
              if (qty == 1) {
                $(placeholder).closest("div.cart-related-product").find(".cart-related-product-count-item").html("Get " + qty + " cartridge for only " + _this1.ijt_formatMoney(relatedProdTotalPrice) + "<br/> saving you " + _this1.ijt_formatMoney(relatedSave));
              } else {
                $(placeholder).closest("div.cart-related-product").find(".cart-related-product-count-item").html("Get all " + qty + " cartridges for only " + _this1.ijt_formatMoney(relatedProdTotalPrice) + "<br/> saving you " + _this1.ijt_formatMoney(relatedSave));
              }
              $(placeholder).closest("div.cart-related-product").find(".switch-and-save").html("Swap & Save " + _this1.ijt_formatMoney(relatedSave));
            } else if (productMainYields < productRelatedYields) {
              $(placeholder).closest("div.cart-related-product").find("span.related-blue-message").html("<strong>DID YOU KNOW?<br/> You could save " + _this1.ijt_formatMoney(relatedSavePerItem) + " per cartridge just by swapping to the IJT Recycled brand?</strong>");
              if (qty == 1) {
                $(placeholder).closest("div.cart-related-product").find(".cart-related-product-count-item").html("Get " + qty + " cartridge for only " + _this1.ijt_formatMoney(relatedProdTotalPrice) + "<br/> saving you " + _this1.ijt_formatMoney(relatedSave));
              } else {
                $(placeholder).closest("div.cart-related-product").find(".cart-related-product-count-item").html("Get all " + qty + " cartridges for only " + _this1.ijt_formatMoney(relatedProdTotalPrice) + "<br/> saving you " + _this1.ijt_formatMoney(relatedSave));
              }
              $(placeholder).closest("div.cart-related-product").find(".switch-and-save").html("Swap & Save " + _this1.ijt_formatMoney(relatedSave));
            }
          } else if (productRelatedPrice >= productMainPrice) {
            var relatedSave = Math.round(qty * (productMainPrice - productRelatedPrice) * 100) / 100;
            var relatedSavePerItem = Math.round((productMainPrice - productRelatedPrice) * 100) / 100;
            var relatedProdTotalPrice = Math.round(qty * productRelatedPrice * 100) / 100;
            if (relatedSave < 0) {
              relatedSave = -1 * relatedSave;
            }
            $(placeholder).closest("div.cart-related-product").find("span.related-save").show();
            $(placeholder).closest("div.cart-related-product").find("span.related-save").html(_this1.ijt_formatMoney(relatedSave));
            $(placeholder).closest("div.cart-related-product").find(".switch-and-save").html("Swap & Save " + _this1.ijt_formatMoney(relatedSave));
            $(placeholder).closest("div.cart-related-product").find("span[data-product-price-with-tax]").html(_this1.ijt_formatMoney(relatedProdTotalPrice));
            if (productMainYields < productRelatedYields) {
              $(placeholder).closest("div.cart-related-product").find("span.related-blue-message").html("<strong>DID YOU KNOW?<br/> If you spend " + _this1.ijt_formatMoney(relatedSave) + " more by swapping to the IJT Recycled brand, you’ll get more prints which saves you money in the long run.</strong>");
              if (qty == 1) {
                $(placeholder).closest("div.cart-related-product").find(".cart-related-product-count-item").html("Get " + qty + " cartridge for only " + _this1.ijt_formatMoney(relatedProdTotalPrice));
              } else {
                $(placeholder).closest("div.cart-related-product").find(".cart-related-product-count-item").html("Get all " + qty + " cartridges for only " + _this1.ijt_formatMoney(relatedProdTotalPrice));
              }
              $(placeholder).closest("div.cart-related-product").find(".switch-and-save").html("Swap & Get more prints ");
            } else {
              $(placeholder).next().hide();
            }
          }
          $(placeholder).closest("div.cart-related-product").find("a.switch-and-save").on('click', function (event) {
            event.preventDefault();
            var formData = new FormData();
            formData.append('action', 'add');
            formData.append('product_id', $(event.currentTarget).closest("div.cart-related-prod").attr("data-product-id"));
            formData.append('qty[]', $(event.currentTarget).closest("tr.cart-related-product-container").prev().find("input.cart-item-qty-input").val());
            event.target.style.pointerEvents = 'none';
            _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_13__["default"].api.cart.itemAdd(formData, function (err, response) {
              var errorMessage = err || response.data.error;
              event.target.style.pointerEvents = 'auto';
              if (errorMessage) {
                return Object(_global_sweet_alert__WEBPACK_IMPORTED_MODULE_16__["default"])({
                  text: errorMessage,
                  type: 'error'
                });
              }
              if (typeof Cookies.get('ijtd_SwitchedItems') === 'undefined') {
                Cookies.set("ijtd_SwitchedItems", response.data.cart_item.id, {
                  expires: 30
                });
              } else {
                var ijtd_SwitchedItems = Cookies.get("ijtd_SwitchedItems");
                ijtd_SwitchedItems += "," + response.data.cart_item.id;
                Cookies.set("ijtd_SwitchedItems", ijtd_SwitchedItems, {
                  expires: 30
                });
              }
              _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_13__["default"].api.cart.itemRemove($(event.currentTarget).closest("tr.cart-related-product-container").prev().find("input.cart-item-qty-input").attr("data-cart-itemid"), function (err, response) {
                if (response.data.status === 'succeed') {
                  $("div.raleted-product-message").show();
                  setTimeout(function () {
                    $("div.raleted-product-message").hide();
                  }, 30000);
                  if (_this1.$cartContent.find("tr.cart-item a.cart-item-name__label:contains('Thank you for Swapping & Saving')").length == 0) {
                    var _formDataTY = new FormData();
                    _formDataTY.append('action', 'add');
                    _formDataTY.append('product_id', 13160);
                    _formDataTY.append('qty[]', 1);
                    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_13__["default"].api.cart.itemAdd(_formDataTY, function (err, response) {
                      var errorMessage = err || response.data.error;
                      if (errorMessage) {
                        return Object(_global_sweet_alert__WEBPACK_IMPORTED_MODULE_16__["default"])({
                          text: errorMessage,
                          type: 'error'
                        });
                      }
                      $("i.quantity-6667S").text("1");
                      if (_this1.$cartContent.find("tr.cart-item a.cart-item-name__label:contains('Swap & Save')").length > 0) {
                        var aItemName = _this1.$cartContent.find("tr.cart-item a.cart-item-name__label:contains('Swap & Save')")[0];
                        var trItem = $(aItemName).closest("tr.cart-item");
                        _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_13__["default"].api.cart.itemRemove($(trItem).find("input.cart-item-qty-input").attr("data-cart-itemid"), function (err, response) {
                          $("i.quantity-6668S").text("0");
                          _this1.refreshContent(true);
                        });
                      } else {
                        _this1.refreshContent(true);
                      }
                    });
                  } else {
                    _this1.refreshContent(true);
                  }
                } else {
                  return Object(_global_sweet_alert__WEBPACK_IMPORTED_MODULE_16__["default"])({
                    text: response.data.errors,
                    type: 'error'
                  });
                }
              });
            });
          });
        });
      }
      //});
    });
  };
  _proto.ignoreRelatedProductsBrand = function ignoreRelatedProductsBrand(brandName) {
    if (typeof ijtd_IgnoreBrands !== 'undefined') {
      for (var i = 0; i < ijtd_IgnoreBrands.length; i++) {
        if (ijtd_IgnoreBrands[i].toUpperCase() == brandName.toUpperCase() || ijtd_IgnoreBrands[i].toUpperCase() == "ALL") {
          return true;
        }
      }
    }
    return false;
  };
  _proto.removeSwitchedItems = function removeSwitchedItems(itemId) {
    if (typeof Cookies.get('ijtd_SwitchedItems') === 'undefined') {
      return;
    } else {
      var ijtd_SwitchedItems = Cookies.get("ijtd_SwitchedItems");
      var arrSwitchedItems = ijtd_SwitchedItems.split(",");
      var index = arrSwitchedItems.indexOf(itemId);
      if (index !== -1) {
        arrSwitchedItems.splice(index, 1);
      }
      if (arrSwitchedItems.length == 0) {
        Cookies.remove('ijtd_SwitchedItems');
      } else {
        ijtd_SwitchedItems = arrSwitchedItems.join(",");
        Cookies.set("ijtd_SwitchedItems", ijtd_SwitchedItems, {
          expires: 30
        });
      }
    }
  };
  return Cart;
}(_page_manager__WEBPACK_IMPORTED_MODULE_11__["default"]);

$(document).on('click', '.button--icon', function () {
  cartItemCounter();
});
$(document).on('change', '.cart-item-qty-input', function () {
  cartItemCounter();
});
function cartItemCounter() {
  setTimeout(function () {
    _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_13__["default"].api.cart.getCartQuantity({}, function (err, response) {
      var countItem = (parseInt(response) || 0) - (parseInt($("i.quantity-6667S").text()) || 0) - (parseInt($("i.quantity-6668S").text()) || 0);
      $('.cart-item-counts strong').text(countItem);
    });
  }, 2500);
}
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./assets/js/theme/cart/shipping-estimator.js":
/*!****************************************************!*\
  !*** ./assets/js/theme/cart/shipping-estimator.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ShippingEstimator; });
/* harmony import */ var core_js_modules_es6_number_constructor_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.number.constructor.js */ "./node_modules/core-js/modules/es6.number.constructor.js");
/* harmony import */ var core_js_modules_es6_number_constructor_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_number_constructor_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_number_is_nan_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.number.is-nan.js */ "./node_modules/core-js/modules/es6.number.is-nan.js");
/* harmony import */ var core_js_modules_es6_number_is_nan_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_number_is_nan_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.array.find.js */ "./node_modules/core-js/modules/es6.array.find.js");
/* harmony import */ var core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _common_state_country__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../common/state-country */ "./assets/js/theme/common/state-country.js");
/* harmony import */ var _common_nod__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../common/nod */ "./assets/js/theme/common/nod.js");
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _common_form_utils__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../common/form-utils */ "./assets/js/theme/common/form-utils.js");
/* harmony import */ var _global_sweet_alert__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../global/sweet-alert */ "./assets/js/theme/global/sweet-alert.js");








var ShippingEstimator = /*#__PURE__*/function () {
  function ShippingEstimator($element) {
    this.$element = $element;
    this.$state = $('[data-field-type="State"]', this.$element);
    this.initFormValidation();
    this.bindStateCountryChange();
    this.bindEstimatorEvents();
  }
  var _proto = ShippingEstimator.prototype;
  _proto.initFormValidation = function initFormValidation() {
    var _this = this;
    this.shippingEstimator = 'form[data-shipping-estimator]';
    this.shippingValidator = Object(_common_nod__WEBPACK_IMPORTED_MODULE_4__["default"])({
      submit: this.shippingEstimator + " .shipping-estimate-submit"
    });
    $('.shipping-estimate-submit', this.$element).on('click', function (event) {
      // When switching between countries, the state/region is dynamic
      // Only perform a check for all fields when country has a value
      // Otherwise areAll('valid') will check country for validity
      if ($(_this.shippingEstimator + " select[name=\"shipping-country\"]").val()) {
        _this.shippingValidator.performCheck();
      }
      if (_this.shippingValidator.areAll('valid')) {
        return;
      }
      event.preventDefault();
    });
    this.bindValidation();
    this.bindStateValidation();
    this.bindUPSRates();
  };
  _proto.bindValidation = function bindValidation() {
    this.shippingValidator.add([{
      selector: this.shippingEstimator + " select[name=\"shipping-country\"]",
      validate: function validate(cb, val) {
        var countryId = Number(val);
        var result = countryId !== 0 && !Number.isNaN(countryId);
        cb(result);
      },
      errorMessage: 'The \'Country\' field cannot be blank.'
    }]);
  };
  _proto.bindStateValidation = function bindStateValidation() {
    var _this2 = this;
    this.shippingValidator.add([{
      selector: $(this.shippingEstimator + " select[name=\"shipping-state\"]"),
      validate: function validate(cb) {
        var result;
        var $ele = $(_this2.shippingEstimator + " select[name=\"shipping-state\"]");
        if ($ele.length) {
          var eleVal = $ele.val();
          result = eleVal && eleVal.length && eleVal !== 'State/province';
        }
        cb(result);
      },
      errorMessage: 'The \'State/Province\' field cannot be blank.'
    }]);
  }

  /**
   * Toggle between default shipping and ups shipping rates
   */;
  _proto.bindUPSRates = function bindUPSRates() {
    var UPSRateToggle = '.estimator-form-toggleUPSRate';
    $('body').on('click', UPSRateToggle, function (event) {
      var $estimatorFormUps = $('.estimator-form--ups');
      var $estimatorFormDefault = $('.estimator-form--default');
      event.preventDefault();
      $estimatorFormUps.toggleClass('u-hiddenVisually');
      $estimatorFormDefault.toggleClass('u-hiddenVisually');
    });
  };
  _proto.bindStateCountryChange = function bindStateCountryChange() {
    var _this3 = this;
    var $last;

    // Requests the states for a country with AJAX
    Object(_common_state_country__WEBPACK_IMPORTED_MODULE_3__["default"])(this.$state, this.context, {
      useIdForStates: true
    }, function (err, field) {
      if (err) {
        Object(_global_sweet_alert__WEBPACK_IMPORTED_MODULE_7__["default"])({
          text: err,
          type: 'error'
        });
        throw new Error(err);
      }
      var $field = $(field);
      if (_this3.shippingValidator.getStatus(_this3.$state) !== 'undefined') {
        _this3.shippingValidator.remove(_this3.$state);
      }
      if ($last) {
        _this3.shippingValidator.remove($last);
      }
      if ($field.is('select')) {
        $last = field;
        _this3.bindStateValidation();
      } else {
        $field.attr('placeholder', 'State/province');
        _common_form_utils__WEBPACK_IMPORTED_MODULE_6__["Validators"].cleanUpStateValidation(field);
      }

      // When you change a country, you swap the state/province between an input and a select dropdown
      // Not all countries require the province to be filled
      // We have to remove this class when we swap since nod validation doesn't cleanup for us
      $(_this3.shippingEstimator).find('.form-field--success').removeClass('form-field--success');
    });
  };
  _proto.bindEstimatorEvents = function bindEstimatorEvents() {
    var $estimatorContainer = $('.shipping-estimator');
    var $estimatorForm = $('.estimator-form');
    $estimatorForm.on('submit', function (event) {
      var params = {
        country_id: $('[name="shipping-country"]', $estimatorForm).val(),
        state_id: $('[name="shipping-state"]', $estimatorForm).val(),
        city: $('[name="shipping-city"]', $estimatorForm).val(),
        zip_code: $('[name="shipping-zip"]', $estimatorForm).val()
      };
      event.preventDefault();
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__["default"].api.cart.getShippingQuotes(params, 'cart/shipping-quotes', function (err, response) {
        $('.shipping-quotes').html(response.content);

        // bind the select button
        $('.select-shipping-quote').on('click', function (clickEvent) {
          var quoteId = $('.shipping-quote:checked').val();
          clickEvent.preventDefault();
          _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_5__["default"].api.cart.submitShippingQuote(quoteId, function () {
            window.location.reload();
          });
        });
      });
    });
    $('.shipping-estimate-show').on('click', function (event) {
      event.preventDefault();
      $(event.currentTarget).hide();
      $estimatorContainer.removeClass('u-hiddenVisually');
      $('.shipping-estimate-hide').show();
    });
    $('.shipping-estimate-hide').on('click', function (event) {
      event.preventDefault();
      $estimatorContainer.addClass('u-hiddenVisually');
      $('.shipping-estimate-show').show();
      $('.shipping-estimate-hide').hide();
    });
  };
  return ShippingEstimator;
}();

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./assets/js/theme/common/gift-certificate-validator.js":
/*!**************************************************************!*\
  !*** ./assets/js/theme/common/gift-certificate-validator.js ***!
  \**************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (cert) {
  if (typeof cert !== 'string') {
    return false;
  }

  // Add any custom gift certificate validation logic here
  return true;
});

/***/ }),

/***/ "./assets/js/theme/global/sweet-alert.js":
/*!***********************************************!*\
  !*** ./assets/js/theme/global/sweet-alert.js ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! sweetalert2 */ "./node_modules/sweetalert2/dist/sweetalert2.min.js");
/* harmony import */ var sweetalert2__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(sweetalert2__WEBPACK_IMPORTED_MODULE_0__);


// Set defaults for sweetalert2 popup boxes
sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a.setDefaults({
  buttonsStyling: false,
  confirmButtonClass: 'button',
  cancelButtonClass: 'button'
});

// Re-export
/* harmony default export */ __webpack_exports__["default"] = (sweetalert2__WEBPACK_IMPORTED_MODULE_0___default.a);

/***/ }),

/***/ "./node_modules/core-js/modules/es6.number.is-nan.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.number.is-nan.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 20.1.2.4 Number.isNaN(number)
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");

$export($export.S, 'Number', {
  isNaN: function isNaN(number) {
    // eslint-disable-next-line no-self-compare
    return number != number;
  }
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.flags.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.flags.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// 21.2.5.3 get RegExp.prototype.flags()
if (__webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js") && /./g.flags != 'g') __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f(RegExp.prototype, 'flags', {
  configurable: true,
  get: __webpack_require__(/*! ./_flags */ "./node_modules/core-js/modules/_flags.js")
});


/***/ }),

/***/ "./node_modules/core-js/modules/es6.regexp.to-string.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/es6.regexp.to-string.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

__webpack_require__(/*! ./es6.regexp.flags */ "./node_modules/core-js/modules/es6.regexp.flags.js");
var anObject = __webpack_require__(/*! ./_an-object */ "./node_modules/core-js/modules/_an-object.js");
var $flags = __webpack_require__(/*! ./_flags */ "./node_modules/core-js/modules/_flags.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js");
var TO_STRING = 'toString';
var $toString = /./[TO_STRING];

var define = function (fn) {
  __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js")(RegExp.prototype, TO_STRING, fn, true);
};

// 21.2.5.14 RegExp.prototype.toString()
if (__webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js")(function () { return $toString.call({ source: 'a', flags: 'b' }) != '/a/b'; })) {
  define(function toString() {
    var R = anObject(this);
    return '/'.concat(R.source, '/',
      'flags' in R ? R.flags : !DESCRIPTORS && R instanceof RegExp ? $flags.call(R) : undefined);
  });
// FF44- RegExp#toString has a wrong name
} else if ($toString.name != TO_STRING) {
  define(function toString() {
    return $toString.call(this);
  });
}


/***/ }),

/***/ "./node_modules/lodash/_createCtor.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_createCtor.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseCreate = __webpack_require__(/*! ./_baseCreate */ "./node_modules/lodash/_baseCreate.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js");

/**
 * Creates a function that produces an instance of `Ctor` regardless of
 * whether it was invoked as part of a `new` expression or by `call` or `apply`.
 *
 * @private
 * @param {Function} Ctor The constructor to wrap.
 * @returns {Function} Returns the new wrapped function.
 */
function createCtor(Ctor) {
  return function() {
    // Use a `switch` statement to work with class constructors. See
    // http://ecma-international.org/ecma-262/7.0/#sec-ecmascript-function-objects-call-thisargument-argumentslist
    // for more details.
    var args = arguments;
    switch (args.length) {
      case 0: return new Ctor;
      case 1: return new Ctor(args[0]);
      case 2: return new Ctor(args[0], args[1]);
      case 3: return new Ctor(args[0], args[1], args[2]);
      case 4: return new Ctor(args[0], args[1], args[2], args[3]);
      case 5: return new Ctor(args[0], args[1], args[2], args[3], args[4]);
      case 6: return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5]);
      case 7: return new Ctor(args[0], args[1], args[2], args[3], args[4], args[5], args[6]);
    }
    var thisBinding = baseCreate(Ctor.prototype),
        result = Ctor.apply(thisBinding, args);

    // Mimic the constructor's `return` behavior.
    // See https://es5.github.io/#x13.2.2 for more details.
    return isObject(result) ? result : thisBinding;
  };
}

module.exports = createCtor;


/***/ }),

/***/ "./node_modules/lodash/_createWrap.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_createWrap.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var apply = __webpack_require__(/*! ./_apply */ "./node_modules/lodash/_apply.js"),
    createCtor = __webpack_require__(/*! ./_createCtor */ "./node_modules/lodash/_createCtor.js"),
    root = __webpack_require__(/*! ./_root */ "./node_modules/lodash/_root.js");

/** Used to compose bitmasks for function metadata. */
var WRAP_BIND_FLAG = 1;

/**
 * Creates a function that wraps `func` to invoke it with the `this` binding
 * of `thisArg` and `partials` prepended to the arguments it receives.
 *
 * @private
 * @param {Function} func The function to wrap.
 * @param {number} bitmask The bitmask flags. See `createWrap` for more details.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {Array} partials The arguments to prepend to those provided to
 *  the new function.
 * @returns {Function} Returns the new wrapped function.
 */
function createPartial(func, bitmask, thisArg, partials) {
  var isBind = bitmask & WRAP_BIND_FLAG,
      Ctor = createCtor(func);

  function wrapper() {
    var argsIndex = -1,
        argsLength = arguments.length,
        leftIndex = -1,
        leftLength = partials.length,
        args = Array(leftLength + argsLength),
        fn = (this && this !== root && this instanceof wrapper) ? Ctor : func;

    while (++leftIndex < leftLength) {
      args[leftIndex] = partials[leftIndex];
    }
    while (argsLength--) {
      args[leftIndex++] = arguments[++argsIndex];
    }
    return apply(fn, isBind ? thisArg : this, args);
  }
  return wrapper;
}

module.exports = createPartial;


/***/ }),

/***/ "./node_modules/lodash/_getHolder.js":
/*!*******************************************!*\
  !*** ./node_modules/lodash/_getHolder.js ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * This method returns `undefined`.
 *
 * @static
 * @memberOf _
 * @since 2.3.0
 * @category Util
 * @example
 *
 * _.times(2, _.noop);
 * // => [undefined, undefined]
 */
function noop() {
  // No operation performed.
}

module.exports = noop;


/***/ }),

/***/ "./node_modules/lodash/_replaceHolders.js":
/*!************************************************!*\
  !*** ./node_modules/lodash/_replaceHolders.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * This method returns a new empty array.
 *
 * @static
 * @memberOf _
 * @since 4.13.0
 * @category Util
 * @returns {Array} Returns the new empty array.
 * @example
 *
 * var arrays = _.times(2, _.stubArray);
 *
 * console.log(arrays);
 * // => [[], []]
 *
 * console.log(arrays[0] === arrays[1]);
 * // => false
 */
function stubArray() {
  return [];
}

module.exports = stubArray;


/***/ }),

/***/ "./node_modules/lodash/bind.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/bind.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseRest = __webpack_require__(/*! ./_baseRest */ "./node_modules/lodash/_baseRest.js"),
    createWrap = __webpack_require__(/*! ./_createWrap */ "./node_modules/lodash/_createWrap.js"),
    getHolder = __webpack_require__(/*! ./_getHolder */ "./node_modules/lodash/_getHolder.js"),
    replaceHolders = __webpack_require__(/*! ./_replaceHolders */ "./node_modules/lodash/_replaceHolders.js");

/** Used to compose bitmasks for function metadata. */
var WRAP_BIND_FLAG = 1,
    WRAP_PARTIAL_FLAG = 32;

/**
 * Creates a function that invokes `func` with the `this` binding of `thisArg`
 * and `partials` prepended to the arguments it receives.
 *
 * The `_.bind.placeholder` value, which defaults to `_` in monolithic builds,
 * may be used as a placeholder for partially applied arguments.
 *
 * **Note:** Unlike native `Function#bind`, this method doesn't set the "length"
 * property of bound functions.
 *
 * @static
 * @memberOf _
 * @since 0.1.0
 * @category Function
 * @param {Function} func The function to bind.
 * @param {*} thisArg The `this` binding of `func`.
 * @param {...*} [partials] The arguments to be partially applied.
 * @returns {Function} Returns the new bound function.
 * @example
 *
 * function greet(greeting, punctuation) {
 *   return greeting + ' ' + this.user + punctuation;
 * }
 *
 * var object = { 'user': 'fred' };
 *
 * var bound = _.bind(greet, object, 'hi');
 * bound('!');
 * // => 'hi fred!'
 *
 * // Bound with placeholders.
 * var bound = _.bind(greet, object, _, '!');
 * bound('hi');
 * // => 'hi fred!'
 */
var bind = baseRest(function(func, thisArg, partials) {
  var bitmask = WRAP_BIND_FLAG;
  if (partials.length) {
    var holders = replaceHolders(partials, getHolder(bind));
    bitmask |= WRAP_PARTIAL_FLAG;
  }
  return createWrap(func, bitmask, thisArg, partials, holders);
});

// Assign default placeholders.
bind.placeholder = {};

module.exports = bind;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvY2FydC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvY2FydC9zaGlwcGluZy1lc3RpbWF0b3IuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3RoZW1lL2NvbW1vbi9naWZ0LWNlcnRpZmljYXRlLXZhbGlkYXRvci5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvZ2xvYmFsL3N3ZWV0LWFsZXJ0LmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2Lm51bWJlci5pcy1uYW4uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczYucmVnZXhwLmZsYWdzLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9jb3JlLWpzL21vZHVsZXMvZXM2LnJlZ2V4cC50by1zdHJpbmcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fY3JlYXRlQ3Rvci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19jcmVhdGVXcmFwLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2dldEhvbGRlci5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19yZXBsYWNlSG9sZGVycy5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL2JpbmQuanMiXSwibmFtZXMiOlsiQ2FydCIsIl9QYWdlTWFuYWdlciIsImFwcGx5IiwiYXJndW1lbnRzIiwiX2luaGVyaXRzTG9vc2UiLCJfcHJvdG8iLCJwcm90b3R5cGUiLCJvblJlYWR5IiwiX3RoaXMiLCJ1dGlscyIsImFwaSIsImNhcnQiLCJnZXRDYXJ0IiwiZXJyIiwicmVzcG9uc2UiLCJfcmVzcG9uc2UkY291cG9ucyQiLCJjb3Vwb25Db2RlIiwiY291cG9ucyIsImNvZGUiLCJhcHBseUxvY2FsUHJvbW8iLCIkY2FydENvbnRlbnQiLCIkIiwiJGNhcnRNZXNzYWdlcyIsIiRjYXJ0VG90YWxzIiwiJG92ZXJsYXkiLCJoaWRlIiwiYmluZEV2ZW50cyIsImxvYWRSZWxhdGVkUHJvZHVjdHMiLCJhamF4IiwidXJsIiwiY29udGV4dCIsImRvY3VtZW50IiwiYm9keSIsImRvbmUiLCJyZXMiLCJkYXRhIiwibGVuZ3RoIiwicHJvbW9EYXRhIiwiY291cG9uX2NvZGUiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiSlNPTiIsInN0cmluZ2lmeSIsImNhcnRVcGRhdGUiLCIkdGFyZ2V0IiwiX3RoaXMyIiwiaXRlbUlkIiwiJGVsIiwib2xkUXR5IiwicGFyc2VJbnQiLCJ2YWwiLCJtYXhRdHkiLCJtaW5RdHkiLCJtaW5FcnJvciIsIm1heEVycm9yIiwibmV3UXR5Iiwic3dhbCIsInRleHQiLCJ0eXBlIiwic2hvdyIsIml0ZW1VcGRhdGUiLCJzdGF0dXMiLCJyZW1vdmUiLCJyZW1vdmVTd2l0Y2hlZEl0ZW1zIiwicmVmcmVzaENvbnRlbnQiLCJlcnJvcnMiLCJqb2luIiwiY2FydFVwZGF0ZVF0eVRleHRDaGFuZ2UiLCJwcmVWYWwiLCJfdGhpczMiLCJOdW1iZXIiLCJpbnZhbGlkRW50cnkiLCJjYXJ0UmVtb3ZlSXRlbSIsIl90aGlzNCIsInNldFRpbWVvdXQiLCJnZXRDYXJ0UXVhbnRpdHkiLCJjb3VudEl0ZW0iLCJpdGVtUmVtb3ZlIiwiY2FydEVkaXRPcHRpb25zIiwiX3RoaXM1IiwibW9kYWwiLCJkZWZhdWx0TW9kYWwiLCJvcHRpb25zIiwidGVtcGxhdGUiLCJvcGVuIiwicHJvZHVjdEF0dHJpYnV0ZXMiLCJjb25maWd1cmVJbkNhcnQiLCJ1cGRhdGVDb250ZW50IiwiY29udGVudCIsImJpbmRHaWZ0V3JhcHBpbmdGb3JtIiwiaG9va3MiLCJvbiIsImV2ZW50Iiwib3B0aW9uIiwiJGNoYW5nZWRPcHRpb24iLCIkZm9ybSIsInBhcmVudHMiLCIkc3VibWl0IiwiJG1lc3NhZ2VCb3giLCJpdGVtIiwiYXR0ciIsIm9wdGlvbkNoYW5nZSIsInNlcmlhbGl6ZSIsInJlc3VsdCIsInB1cmNoYXNpbmdfbWVzc2FnZSIsInByb3AiLCJwdXJjaGFzYWJsZSIsImluc3RvY2siLCJfdGhpczYiLCIkY2FydEl0ZW1zUm93cyIsIiRjYXJ0UGFnZVRpdGxlIiwidG90YWxzIiwicGFnZVRpdGxlIiwic3RhdHVzTWVzc2FnZXMiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsInJlbG9hZCIsImdldENvbnRlbnQiLCJodG1sIiwicmVwbGFjZVdpdGgiLCJxdWFudGl0eSIsInRyaWdnZXIiLCJyZW1vdmVDb3Vwb24iLCJiaW5kQ2FydEV2ZW50cyIsIl90aGlzNyIsImRlYm91bmNlVGltZW91dCIsIl9iaW5kIiwiX2RlYm91bmNlIiwiY3VycmVudFRhcmdldCIsInByZXZlbnREZWZhdWx0Iiwib25RdHlGb2N1cyIsInZhbHVlIiwiY2hhbmdlIiwic3RyaW5nIiwic2hvd0NhbmNlbEJ1dHRvbiIsInRoZW4iLCJiaW5kUHJvbW9Db2RlRXZlbnRzIiwiX3RoaXM4IiwiJGNvdXBvbkNvbnRhaW5lciIsIiRjb3Vwb25Gb3JtIiwiJGNvZGVJbnB1dCIsImFwcGx5Q29kZSIsImluY2x1ZGVzIiwiYmluZEdpZnRDZXJ0aWZpY2F0ZUV2ZW50cyIsIl90aGlzOSIsIiRjZXJ0Q29udGFpbmVyIiwiJGNlcnRGb3JtIiwiJGNlcnRJbnB1dCIsInRvZ2dsZSIsImdpZnRDZXJ0Q2hlY2siLCJhcHBseUdpZnRDZXJ0aWZpY2F0ZSIsInJlc3AiLCJiaW5kR2lmdFdyYXBwaW5nRXZlbnRzIiwiX3RoaXMwIiwiZ2V0SXRlbUdpZnRXcmFwcGluZ09wdGlvbnMiLCIkc2VsZWN0IiwiaWQiLCJpbmRleCIsImFsbG93TWVzc2FnZSIsImZpbmQiLCJ0b2dnbGVWaWV3cyIsIiRzaW5nbGVGb3JtIiwiJG11bHRpRm9ybSIsInNoaXBwaW5nRXN0aW1hdG9yIiwiU2hpcHBpbmdFc3RpbWF0b3IiLCJyZW1vdmVJdGVtIiwidGFyZ2V0IiwiaWp0X2Zvcm1hdE1vbmV5IiwiaW5wdXRWYWx1ZSIsIm91dHB1dFZhbHVlIiwidG9GaXhlZCIsInRvU3RyaW5nIiwicmVwbGFjZSIsIl90aGlzMSIsInJlbGF0ZWRQcm9kdWN0c0NvdW50IiwiZWFjaCIsInBsYWNlaG9sZGVyIiwiaWdub3JlUmVsYXRlZFByb2R1Y3QiLCJjbG9zZXN0IiwicHJldiIsImlnbm9yZVJlbGF0ZWRQcm9kdWN0c0JyYW5kIiwiZm9ybURhdGFUWSIsIkZvcm1EYXRhIiwiYXBwZW5kIiwiaXRlbUFkZCIsImVycm9yTWVzc2FnZSIsImVycm9yIiwiQ29va2llcyIsImdldCIsImFJdGVtTmFtZSIsInRySXRlbSIsImdldFBhZ2UiLCJuZXh0IiwicHJvZHVjdE1haW5QcmljZSIsInBhcnNlRmxvYXQiLCJwcm9kdWN0UmVsYXRlZFByaWNlIiwicHJvZHVjdE1haW5ZaWVsZHMiLCJwcm9kdWN0UmVsYXRlZFlpZWxkcyIsInF0eSIsInJlbGF0ZWRTYXZlIiwiTWF0aCIsInJvdW5kIiwicmVsYXRlZFNhdmVQZXJJdGVtIiwicmVsYXRlZFByb2RUb3RhbFByaWNlIiwiZm9ybURhdGEiLCJzdHlsZSIsInBvaW50ZXJFdmVudHMiLCJzZXQiLCJjYXJ0X2l0ZW0iLCJleHBpcmVzIiwiaWp0ZF9Td2l0Y2hlZEl0ZW1zIiwiYnJhbmROYW1lIiwiaWp0ZF9JZ25vcmVCcmFuZHMiLCJpIiwidG9VcHBlckNhc2UiLCJhcnJTd2l0Y2hlZEl0ZW1zIiwic3BsaXQiLCJpbmRleE9mIiwic3BsaWNlIiwiUGFnZU1hbmFnZXIiLCJjYXJ0SXRlbUNvdW50ZXIiLCIkZWxlbWVudCIsIiRzdGF0ZSIsImluaXRGb3JtVmFsaWRhdGlvbiIsImJpbmRTdGF0ZUNvdW50cnlDaGFuZ2UiLCJiaW5kRXN0aW1hdG9yRXZlbnRzIiwic2hpcHBpbmdWYWxpZGF0b3IiLCJub2QiLCJzdWJtaXQiLCJwZXJmb3JtQ2hlY2siLCJhcmVBbGwiLCJiaW5kVmFsaWRhdGlvbiIsImJpbmRTdGF0ZVZhbGlkYXRpb24iLCJiaW5kVVBTUmF0ZXMiLCJhZGQiLCJzZWxlY3RvciIsInZhbGlkYXRlIiwiY2IiLCJjb3VudHJ5SWQiLCJpc05hTiIsIiRlbGUiLCJlbGVWYWwiLCJVUFNSYXRlVG9nZ2xlIiwiJGVzdGltYXRvckZvcm1VcHMiLCIkZXN0aW1hdG9yRm9ybURlZmF1bHQiLCJ0b2dnbGVDbGFzcyIsIiRsYXN0Iiwic3RhdGVDb3VudHJ5IiwidXNlSWRGb3JTdGF0ZXMiLCJmaWVsZCIsIkVycm9yIiwiJGZpZWxkIiwiZ2V0U3RhdHVzIiwiaXMiLCJWYWxpZGF0b3JzIiwiY2xlYW5VcFN0YXRlVmFsaWRhdGlvbiIsInJlbW92ZUNsYXNzIiwiJGVzdGltYXRvckNvbnRhaW5lciIsIiRlc3RpbWF0b3JGb3JtIiwicGFyYW1zIiwiY291bnRyeV9pZCIsInN0YXRlX2lkIiwiY2l0eSIsInppcF9jb2RlIiwiZ2V0U2hpcHBpbmdRdW90ZXMiLCJjbGlja0V2ZW50IiwicXVvdGVJZCIsInN1Ym1pdFNoaXBwaW5nUXVvdGUiLCJhZGRDbGFzcyIsImNlcnQiLCJzd2VldEFsZXJ0Iiwic2V0RGVmYXVsdHMiLCJidXR0b25zU3R5bGluZyIsImNvbmZpcm1CdXR0b25DbGFzcyIsImNhbmNlbEJ1dHRvbkNsYXNzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUF5QztBQUV1QjtBQUNqQjtBQUNXO0FBQ1o7QUFDTjtBQUFBLElBRW5CQSxJQUFJLDBCQUFBQyxZQUFBO0VBQUEsU0FBQUQsS0FBQTtJQUFBLE9BQUFDLFlBQUEsQ0FBQUMsS0FBQSxPQUFBQyxTQUFBO0VBQUE7RUFBQUMsY0FBQSxDQUFBSixJQUFBLEVBQUFDLFlBQUE7RUFBQSxJQUFBSSxNQUFBLEdBQUFMLElBQUEsQ0FBQU0sU0FBQTtFQUFBRCxNQUFBLENBQ3JCRSxPQUFPLEdBQVAsU0FBQUEsT0FBT0EsQ0FBQSxFQUFHO0lBQUEsSUFBQUMsS0FBQTtJQUNOO0lBQ0FDLG1FQUFLLENBQUNDLEdBQUcsQ0FBQ0MsSUFBSSxDQUFDQyxPQUFPLENB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QUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOzs7Ozs7Ozs7Ozs7QUNoQkE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLE1BQU07QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7OztBQ3RCQSxlQUFlLG1CQUFPLENBQUMsdURBQWE7QUFDcEMsaUJBQWlCLG1CQUFPLENBQUMsMkRBQWU7QUFDeEMsZ0JBQWdCLG1CQUFPLENBQUMseURBQWM7QUFDdEMscUJBQXFCLG1CQUFPLENBQUMsbUVBQW1COztBQUVoRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsU0FBUztBQUNwQixXQUFXLEVBQUU7QUFDYixXQUFXLEtBQUs7QUFDaEIsYUFBYSxTQUFTO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBOztBQUVBIiwiZmlsZSI6InRoZW1lLWJ1bmRsZS5jaHVuay44LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFBhZ2VNYW5hZ2VyIGZyb20gJy4vcGFnZS1tYW5hZ2VyJztcclxuaW1wb3J0IF8gZnJvbSAnbG9kYXNoJztcclxuaW1wb3J0IGdpZnRDZXJ0Q2hlY2sgZnJvbSAnLi9jb21tb24vZ2lmdC1jZXJ0aWZpY2F0ZS12YWxpZGF0b3InO1xyXG5pbXBvcnQgdXRpbHMgZnJvbSAnQGJpZ2NvbW1lcmNlL3N0ZW5jaWwtdXRpbHMnO1xyXG5pbXBvcnQgU2hpcHBpbmdFc3RpbWF0b3IgZnJvbSAnLi9jYXJ0L3NoaXBwaW5nLWVzdGltYXRvcic7XHJcbmltcG9ydCB7IGRlZmF1bHRNb2RhbCB9IGZyb20gJy4vZ2xvYmFsL21vZGFsJztcclxuaW1wb3J0IHN3YWwgZnJvbSAnLi9nbG9iYWwvc3dlZXQtYWxlcnQnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2FydCBleHRlbmRzIFBhZ2VNYW5hZ2VyIHtcclxuICAgIG9uUmVhZHkoKSB7XHJcbiAgICAgICAgLy8gRmV0Y2ggY291cG9uIGNvZGUgZnJvbSBkaXNjb3VudCBhcHBsaWVkIHRvIGNhcnRcclxuICAgICAgICB1dGlscy5hcGkuY2FydC5nZXRDYXJ0KHt9LCAoZXJyLCByZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBjb3Vwb25Db2RlID0gcmVzcG9uc2U/LmNvdXBvbnNbMF0/LmNvZGU7XHJcbiAgICAgICAgICAgIHRoaXMuYXBwbHlMb2NhbFByb21vKGNvdXBvbkNvZGUpO1xyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIHRoaXMuJGNhcnRDb250ZW50ID0gJCgnW2RhdGEtY2FydC1jb250ZW50XScpO1xyXG4gICAgICAgIHRoaXMuJGNhcnRNZXNzYWdlcyA9ICQoJ1tkYXRhLWNhcnQtc3RhdHVzXScpO1xyXG4gICAgICAgIHRoaXMuJGNhcnRUb3RhbHMgPSAkKCdbZGF0YS1jYXJ0LXRvdGFsc10nKTtcclxuICAgICAgICB0aGlzLiRvdmVybGF5ID0gJCgnW2RhdGEtY2FydF0gLmxvYWRpbmdPdmVybGF5JylcclxuICAgICAgICAgICAgLmhpZGUoKTsgLy8gVE9ETzogdGVtcG9yYXJ5IHVudGlsIHJvcGVyIHB1bGxzIGluIGhpcyBjYXJ0IGNvbXBvbmVudHNcclxuXHJcbiAgICAgICAgdGhpcy5iaW5kRXZlbnRzKCk7XHJcbiAgICAgICAgdGhpcy5sb2FkUmVsYXRlZFByb2R1Y3RzKCk7XHJcbiAgICB9XHJcblxyXG4gICAgYXBwbHlMb2NhbFByb21vKGNvdXBvbkNvZGUpIHtcclxuICAgICAgICBpZiAoIWNvdXBvbkNvZGUpIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBVc2UgY291cG9uIGNvZGUgdG8gZmV0Y2ggZ2xvYmFsUHJvbW8gb2JqZWN0IGZvciBsb2NhbCBzdG9yYWdlXHJcbiAgICAgICAgJC5hamF4KHtcclxuICAgICAgICAgICAgdXJsOiBgaHR0cHM6Ly9panQtZGlyZWN0LWJjLW1pZGRsZXdhcmUubncuci5hcHBzcG90LmNvbS92My9wcm9tb3Rpb25zP2NvZGU9JHtjb3Vwb25Db2RlfWAsXHJcbiAgICAgICAgICAgIGNvbnRleHQ6IGRvY3VtZW50LmJvZHlcclxuICAgICAgICB9KS5kb25lKGZ1bmN0aW9uKHJlcykge1xyXG4gICAgICAgICAgICBpZighcmVzLmRhdGEubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcHJvbW9EYXRhID0gcmVzLmRhdGFbMF07XHJcbiAgICAgICAgICAgICAgICAvLyBBZGQgcmV0dXJuZWQgZGlzY291bnQgb2JqZWN0IHRvIGdsb2JhbCBwcm9tb1xyXG4gICAgICAgICAgICAgICAgcHJvbW9EYXRhLmNvdXBvbl9jb2RlID0gY291cG9uQ29kZTtcclxuICAgICAgICAgICAgICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKCdnbG9iYWxQcm9tbycsIEpTT04uc3RyaW5naWZ5KHByb21vRGF0YSkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY2FydFVwZGF0ZSgkdGFyZ2V0KSB7XHJcbiAgICAgICAgY29uc3QgaXRlbUlkID0gJHRhcmdldC5kYXRhKCdjYXJ0SXRlbWlkJyk7XHJcbiAgICAgICAgY29uc3QgJGVsID0gJChgI3F0eS0ke2l0ZW1JZH1gKTtcclxuICAgICAgICBjb25zdCBvbGRRdHkgPSBwYXJzZUludCgkZWwudmFsKCksIDEwKTtcclxuICAgICAgICBjb25zdCBtYXhRdHkgPSBwYXJzZUludCgkZWwuZGF0YSgncXVhbnRpdHlNYXgnKSwgMTApO1xyXG4gICAgICAgIGNvbnN0IG1pblF0eSA9IHBhcnNlSW50KCRlbC5kYXRhKCdxdWFudGl0eU1pbicpLCAxMCk7XHJcbiAgICAgICAgY29uc3QgbWluRXJyb3IgPSAkZWwuZGF0YSgncXVhbnRpdHlNaW5FcnJvcicpO1xyXG4gICAgICAgIGNvbnN0IG1heEVycm9yID0gJGVsLmRhdGEoJ3F1YW50aXR5TWF4RXJyb3InKTtcclxuICAgICAgICBjb25zdCBuZXdRdHkgPSAkdGFyZ2V0LmRhdGEoJ2FjdGlvbicpID09PSAnaW5jJyA/IG9sZFF0eSArIDEgOiBvbGRRdHkgLSAxO1xyXG5cclxuICAgICAgICAvLyBEb2VzIG5vdCBxdWFsaXR5IGZvciBtaW4vbWF4IHF1YW50aXR5XHJcbiAgICAgICAgaWYgKG5ld1F0eSA8IG1pblF0eSkge1xyXG4gICAgICAgICAgICByZXR1cm4gc3dhbCh7XHJcbiAgICAgICAgICAgICAgICB0ZXh0OiBtaW5FcnJvcixcclxuICAgICAgICAgICAgICAgIHR5cGU6ICdlcnJvcicsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSBpZiAobWF4UXR5ID4gMCAmJiBuZXdRdHkgPiBtYXhRdHkpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHN3YWwoe1xyXG4gICAgICAgICAgICAgICAgdGV4dDogbWF4RXJyb3IsXHJcbiAgICAgICAgICAgICAgICB0eXBlOiAnZXJyb3InLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuJG92ZXJsYXkuc2hvdygpO1xyXG5cclxuICAgICAgICB1dGlscy5hcGkuY2FydC5pdGVtVXBkYXRlKGl0ZW1JZCwgbmV3UXR5LCAoZXJyLCByZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLiRvdmVybGF5LmhpZGUoKTtcclxuXHJcbiAgICAgICAgICAgIGlmIChyZXNwb25zZS5kYXRhLnN0YXR1cyA9PT0gJ3N1Y2NlZWQnKSB7XHJcbiAgICAgICAgICAgICAgICAvLyBpZiB0aGUgcXVhbnRpdHkgaXMgY2hhbmdlZCBcIjFcIiBmcm9tIFwiMFwiLCB3ZSBoYXZlIHRvIHJlbW92ZSB0aGUgcm93LlxyXG4gICAgICAgICAgICAgICAgY29uc3QgcmVtb3ZlID0gKG5ld1F0eSA9PT0gMCk7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVtb3ZlKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlU3dpdGNoZWRJdGVtcyhpdGVtSWQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5yZWZyZXNoQ29udGVudChyZW1vdmUpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgJGVsLnZhbChvbGRRdHkpO1xyXG4gICAgICAgICAgICAgICAgc3dhbCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogcmVzcG9uc2UuZGF0YS5lcnJvcnMuam9pbignXFxuJyksXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgY2FydFVwZGF0ZVF0eVRleHRDaGFuZ2UoJHRhcmdldCwgcHJlVmFsID0gbnVsbCkge1xyXG4gICAgICAgIGNvbnN0IGl0ZW1JZCA9ICR0YXJnZXQuZGF0YSgnY2FydEl0ZW1pZCcpO1xyXG4gICAgICAgIGNvbnN0ICRlbCA9ICQoYCNxdHktJHtpdGVtSWR9YCk7XHJcbiAgICAgICAgY29uc3QgbWF4UXR5ID0gcGFyc2VJbnQoJGVsLmRhdGEoJ3F1YW50aXR5TWF4JyksIDEwKTtcclxuICAgICAgICBjb25zdCBtaW5RdHkgPSBwYXJzZUludCgkZWwuZGF0YSgncXVhbnRpdHlNaW4nKSwgMTApO1xyXG4gICAgICAgIGNvbnN0IG9sZFF0eSA9IHByZVZhbCAhPT0gbnVsbCA/IHByZVZhbCA6IG1pblF0eTtcclxuICAgICAgICBjb25zdCBtaW5FcnJvciA9ICRlbC5kYXRhKCdxdWFudGl0eU1pbkVycm9yJyk7XHJcbiAgICAgICAgY29uc3QgbWF4RXJyb3IgPSAkZWwuZGF0YSgncXVhbnRpdHlNYXhFcnJvcicpO1xyXG4gICAgICAgIGNvbnN0IG5ld1F0eSA9IHBhcnNlSW50KE51bWJlcigkZWwudmFsKCkpLCAxMCk7XHJcbiAgICAgICAgbGV0IGludmFsaWRFbnRyeTtcclxuXHJcbiAgICAgICAgLy8gRG9lcyBub3QgcXVhbGl0eSBmb3IgbWluL21heCBxdWFudGl0eVxyXG4gICAgICAgIGlmICghbmV3UXR5KSB7XHJcbiAgICAgICAgICAgIGludmFsaWRFbnRyeSA9ICRlbC52YWwoKTtcclxuICAgICAgICAgICAgJGVsLnZhbChvbGRRdHkpO1xyXG4gICAgICAgICAgICByZXR1cm4gc3dhbCh7XHJcbiAgICAgICAgICAgICAgICB0ZXh0OiBgJHtpbnZhbGlkRW50cnl9IGlzIG5vdCBhIHZhbGlkIGVudHJ5YCxcclxuICAgICAgICAgICAgICAgIHR5cGU6ICdlcnJvcicsXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0gZWxzZSBpZiAobmV3UXR5IDwgbWluUXR5KSB7XHJcbiAgICAgICAgICAgICRlbC52YWwob2xkUXR5KTtcclxuICAgICAgICAgICAgcmV0dXJuIHN3YWwoe1xyXG4gICAgICAgICAgICAgICAgdGV4dDogbWluRXJyb3IsXHJcbiAgICAgICAgICAgICAgICB0eXBlOiAnZXJyb3InLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9IGVsc2UgaWYgKG1heFF0eSA+IDAgJiYgbmV3UXR5ID4gbWF4UXR5KSB7XHJcbiAgICAgICAgICAgICRlbC52YWwob2xkUXR5KTtcclxuICAgICAgICAgICAgcmV0dXJuIHN3YWwoe1xyXG4gICAgICAgICAgICAgICAgdGV4dDogbWF4RXJyb3IsXHJcbiAgICAgICAgICAgICAgICB0eXBlOiAnZXJyb3InLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHRoaXMuJG92ZXJsYXkuc2hvdygpO1xyXG4gICAgICAgIHV0aWxzLmFwaS5jYXJ0Lml0ZW1VcGRhdGUoaXRlbUlkLCBuZXdRdHksIChlcnIsIHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuJG92ZXJsYXkuaGlkZSgpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEuc3RhdHVzID09PSAnc3VjY2VlZCcpIHtcclxuICAgICAgICAgICAgICAgIC8vIGlmIHRoZSBxdWFudGl0eSBpcyBjaGFuZ2VkIFwiMVwiIGZyb20gXCIwXCIsIHdlIGhhdmUgdG8gcmVtb3ZlIHRoZSByb3cuXHJcbiAgICAgICAgICAgICAgICBjb25zdCByZW1vdmUgPSAobmV3UXR5ID09PSAwKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAocmVtb3ZlKVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlU3dpdGNoZWRJdGVtcyhpdGVtSWQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMucmVmcmVzaENvbnRlbnQocmVtb3ZlKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICRlbC52YWwob2xkUXR5KTtcclxuICAgICAgICAgICAgICAgIHN3YWwoe1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IHJlc3BvbnNlLmRhdGEuZXJyb3JzLmpvaW4oJ1xcbicpLFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdlcnJvcicsXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNhcnRSZW1vdmVJdGVtKGl0ZW1JZCkge1xyXG4gICAgICAgIHRoaXMuJG92ZXJsYXkuc2hvdygpO1xyXG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgdXRpbHMuYXBpLmNhcnQuZ2V0Q2FydFF1YW50aXR5KHt9LCAoZXJyLCByZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdmFyIGNvdW50SXRlbSA9IChwYXJzZUludChyZXNwb25zZSkgfHwgMCkgLSAocGFyc2VJbnQoJChcImkucXVhbnRpdHktNjY2N1NcIikudGV4dCgpKSB8fCAwKSAtIChwYXJzZUludCgkKFwiaS5xdWFudGl0eS02NjY4U1wiKS50ZXh0KCkpIHx8IDApO1xyXG4gICAgICAgICAgICAgICAgJCgnLmNhcnQtaXRlbS1jb3VudHMgc3Ryb25nJykudGV4dChjb3VudEl0ZW0pO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9LCAyNTAwKTtcclxuICAgICAgICB1dGlscy5hcGkuY2FydC5pdGVtUmVtb3ZlKGl0ZW1JZCwgKGVyciwgcmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEuc3RhdHVzID09PSAnc3VjY2VlZCcpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlU3dpdGNoZWRJdGVtcyhpdGVtSWQpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZWZyZXNoQ29udGVudCh0cnVlKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHN3YWwoe1xyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IHJlc3BvbnNlLmRhdGEuZXJyb3JzLmpvaW4oJ1xcbicpLFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdlcnJvcicsXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGNhcnRFZGl0T3B0aW9ucyhpdGVtSWQpIHtcclxuICAgICAgICBjb25zdCBtb2RhbCA9IGRlZmF1bHRNb2RhbCgpO1xyXG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XHJcbiAgICAgICAgICAgIHRlbXBsYXRlOiAnY2FydC9tb2RhbHMvY29uZmlndXJlLXByb2R1Y3QnLFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIG1vZGFsLm9wZW4oKTtcclxuXHJcbiAgICAgICAgdXRpbHMuYXBpLnByb2R1Y3RBdHRyaWJ1dGVzLmNvbmZpZ3VyZUluQ2FydChpdGVtSWQsIG9wdGlvbnMsIChlcnIsIHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgIG1vZGFsLnVwZGF0ZUNvbnRlbnQocmVzcG9uc2UuY29udGVudCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmJpbmRHaWZ0V3JhcHBpbmdGb3JtKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgIHV0aWxzLmhvb2tzLm9uKCdwcm9kdWN0LW9wdGlvbi1jaGFuZ2UnLCAoZXZlbnQsIG9wdGlvbikgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCAkY2hhbmdlZE9wdGlvbiA9ICQob3B0aW9uKTtcclxuICAgICAgICAgICAgY29uc3QgJGZvcm0gPSAkY2hhbmdlZE9wdGlvbi5wYXJlbnRzKCdmb3JtJyk7XHJcbiAgICAgICAgICAgIGNvbnN0ICRzdWJtaXQgPSAkKCdpbnB1dC5idXR0b24nLCAkZm9ybSk7XHJcbiAgICAgICAgICAgIGNvbnN0ICRtZXNzYWdlQm94ID0gJCgnLmFsZXJ0TWVzc2FnZUJveCcpO1xyXG4gICAgICAgICAgICBjb25zdCBpdGVtID0gJCgnW25hbWU9XCJpdGVtX2lkXCJdJywgJGZvcm0pLmF0dHIoJ3ZhbHVlJyk7XHJcblxyXG4gICAgICAgICAgICB1dGlscy5hcGkucHJvZHVjdEF0dHJpYnV0ZXMub3B0aW9uQ2hhbmdlKGl0ZW0sICRmb3JtLnNlcmlhbGl6ZSgpLCAoZXJyLCByZXN1bHQpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSByZXN1bHQuZGF0YSB8fCB7fTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgc3dhbCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IGVycixcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGRhdGEucHVyY2hhc2luZ19tZXNzYWdlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJCgncC5hbGVydEJveC1tZXNzYWdlJywgJG1lc3NhZ2VCb3gpLnRleHQoZGF0YS5wdXJjaGFzaW5nX21lc3NhZ2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICRzdWJtaXQucHJvcCgnZGlzYWJsZWQnLCB0cnVlKTtcclxuICAgICAgICAgICAgICAgICAgICAkbWVzc2FnZUJveC5zaG93KCk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICRzdWJtaXQucHJvcCgnZGlzYWJsZWQnLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgJG1lc3NhZ2VCb3guaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmICghZGF0YS5wdXJjaGFzYWJsZSB8fCAhZGF0YS5pbnN0b2NrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgJHN1Ym1pdC5wcm9wKCdkaXNhYmxlZCcsIHRydWUpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAkc3VibWl0LnByb3AoJ2Rpc2FibGVkJywgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZWZyZXNoQ29udGVudChyZW1vdmUpIHtcclxuICAgICAgICBjb25zdCAkY2FydEl0ZW1zUm93cyA9ICQoJ1tkYXRhLWl0ZW0tcm93XScsIHRoaXMuJGNhcnRDb250ZW50KTtcclxuICAgICAgICBjb25zdCAkY2FydFBhZ2VUaXRsZSA9ICQoJ1tkYXRhLWNhcnQtcGFnZS10aXRsZV0nKTtcclxuICAgICAgICBjb25zdCBvcHRpb25zID0ge1xyXG4gICAgICAgICAgICB0ZW1wbGF0ZToge1xyXG4gICAgICAgICAgICAgICAgY29udGVudDogJ2NhcnQvY29udGVudCcsXHJcbiAgICAgICAgICAgICAgICB0b3RhbHM6ICdjYXJ0L3RvdGFscycsXHJcbiAgICAgICAgICAgICAgICBwYWdlVGl0bGU6ICdjYXJ0L3BhZ2UtdGl0bGUnLFxyXG4gICAgICAgICAgICAgICAgc3RhdHVzTWVzc2FnZXM6ICdjYXJ0L3N0YXR1cy1tZXNzYWdlcycsXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgdGhpcy4kb3ZlcmxheS5zaG93KCk7XHJcblxyXG4gICAgICAgIC8vIFJlbW92ZSBsYXN0IGl0ZW0gZnJvbSBjYXJ0PyBSZWxvYWRcclxuICAgICAgICBpZiAocmVtb3ZlICYmICRjYXJ0SXRlbXNSb3dzLmxlbmd0aCA9PT0gMSkge1xyXG4gICAgICAgICAgICByZXR1cm4gd2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdXRpbHMuYXBpLmNhcnQuZ2V0Q29udGVudChvcHRpb25zLCAoZXJyLCByZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLiRjYXJ0Q29udGVudC5odG1sKHJlc3BvbnNlLmNvbnRlbnQpO1xyXG4gICAgICAgICAgICB0aGlzLiRjYXJ0VG90YWxzLmh0bWwocmVzcG9uc2UudG90YWxzKTtcclxuICAgICAgICAgICAgdGhpcy4kY2FydE1lc3NhZ2VzLmh0bWwocmVzcG9uc2Uuc3RhdHVzTWVzc2FnZXMpO1xyXG5cclxuICAgICAgICAgICAgJGNhcnRQYWdlVGl0bGUucmVwbGFjZVdpdGgocmVzcG9uc2UucGFnZVRpdGxlKTtcclxuICAgICAgICAgICAgdGhpcy5iaW5kRXZlbnRzKCk7XHJcbiAgICAgICAgICAgIHRoaXMuJG92ZXJsYXkuaGlkZSgpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgcXVhbnRpdHkgPSAkKCdbZGF0YS1jYXJ0LXF1YW50aXR5XScsIHRoaXMuJGNhcnRDb250ZW50KS5kYXRhKCdjYXJ0UXVhbnRpdHknKSB8fCAwO1xyXG5cclxuICAgICAgICAgICAgJCgnYm9keScpLnRyaWdnZXIoJ2NhcnQtcXVhbnRpdHktdXBkYXRlJywgcXVhbnRpdHkpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5sb2FkUmVsYXRlZFByb2R1Y3RzKCk7XHJcblxyXG4gICAgICAgICAgICAvLyBBZGQgZnVuY3Rpb25hbGl0eSB0byByZW1vdmUgY291cG9uIGJ1dHRvbiB0aGF0IHJlbW92ZXMgcHJvbW8gZnJvbSBsb2NhbCBzdG9yYWdlXHJcbiAgICAgICAgICAgICQoJyNyZW1vdmVDb3Vwb24nKS5vbignY2xpY2snLCB0aGlzLnJlbW92ZUNvdXBvbihldmVudCkpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGJpbmRDYXJ0RXZlbnRzKCkge1xyXG4gICAgICAgIGNvbnN0IGRlYm91bmNlVGltZW91dCA9IDQwMDtcclxuICAgICAgICBjb25zdCBjYXJ0VXBkYXRlID0gXy5iaW5kKF8uZGVib3VuY2UodGhpcy5jYXJ0VXBkYXRlLCBkZWJvdW5jZVRpbWVvdXQpLCB0aGlzKTtcclxuICAgICAgICBjb25zdCBjYXJ0VXBkYXRlUXR5VGV4dENoYW5nZSA9IF8uYmluZChfLmRlYm91bmNlKHRoaXMuY2FydFVwZGF0ZVF0eVRleHRDaGFuZ2UsIGRlYm91bmNlVGltZW91dCksIHRoaXMpO1xyXG4gICAgICAgIGNvbnN0IGNhcnRSZW1vdmVJdGVtID0gXy5iaW5kKF8uZGVib3VuY2UodGhpcy5jYXJ0UmVtb3ZlSXRlbSwgZGVib3VuY2VUaW1lb3V0KSwgdGhpcyk7XHJcbiAgICAgICAgbGV0IHByZVZhbDtcclxuXHJcbiAgICAgICAgLy8gY2FydCB1cGRhdGVcclxuICAgICAgICAkKCdbZGF0YS1jYXJ0LXVwZGF0ZV0nLCB0aGlzLiRjYXJ0Q29udGVudCkub24oJ2NsaWNrJywgZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCAkdGFyZ2V0ID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcclxuXHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICAvLyB1cGRhdGUgY2FydCBxdWFudGl0eVxyXG4gICAgICAgICAgICBjYXJ0VXBkYXRlKCR0YXJnZXQpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBjYXJ0IHF0eSBtYW51YWxseSB1cGRhdGVzXHJcbiAgICAgICAgJCgnLmNhcnQtaXRlbS1xdHktaW5wdXQnLCB0aGlzLiRjYXJ0Q29udGVudCkub24oJ2ZvY3VzJywgZnVuY3Rpb24gb25RdHlGb2N1cygpIHtcclxuICAgICAgICAgICAgcHJlVmFsID0gdGhpcy52YWx1ZTtcclxuICAgICAgICB9KS5jaGFuZ2UoZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCAkdGFyZ2V0ID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgIC8vIHVwZGF0ZSBjYXJ0IHF1YW50aXR5XHJcbiAgICAgICAgICAgIGNhcnRVcGRhdGVRdHlUZXh0Q2hhbmdlKCR0YXJnZXQsIHByZVZhbCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICQoJy5jYXJ0LXJlbW92ZScsIHRoaXMuJGNhcnRDb250ZW50KS5vbignY2xpY2snLCBldmVudCA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGl0ZW1JZCA9ICQoZXZlbnQuY3VycmVudFRhcmdldCkuZGF0YSgnY2FydEl0ZW1pZCcpO1xyXG4gICAgICAgICAgICBjb25zdCBzdHJpbmcgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLmRhdGEoJ2NvbmZpcm1EZWxldGUnKTtcclxuICAgICAgICAgICAgc3dhbCh7XHJcbiAgICAgICAgICAgICAgICB0ZXh0OiBzdHJpbmcsXHJcbiAgICAgICAgICAgICAgICB0eXBlOiAnd2FybmluZycsXHJcbiAgICAgICAgICAgICAgICBzaG93Q2FuY2VsQnV0dG9uOiB0cnVlLFxyXG4gICAgICAgICAgICB9KS50aGVuKCgpID0+IHtcclxuICAgICAgICAgICAgICAgIC8vIHJlbW92ZSBpdGVtIGZyb20gY2FydFxyXG4gICAgICAgICAgICAgICAgY2FydFJlbW92ZUl0ZW0oaXRlbUlkKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICQoJ1tkYXRhLWl0ZW0tZWRpdF0nLCB0aGlzLiRjYXJ0Q29udGVudCkub24oJ2NsaWNrJywgZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBpdGVtSWQgPSAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLmRhdGEoJ2l0ZW1FZGl0Jyk7XHJcblxyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgICAgICAgICAvLyBlZGl0IGl0ZW0gaW4gY2FydFxyXG4gICAgICAgICAgICB0aGlzLmNhcnRFZGl0T3B0aW9ucyhpdGVtSWQpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIGJpbmRQcm9tb0NvZGVFdmVudHMoKSB7XHJcbiAgICAgICAgY29uc3QgJGNvdXBvbkNvbnRhaW5lciA9ICQoJy5jb3Vwb24tY29kZScpO1xyXG4gICAgICAgIGNvbnN0ICRjb3Vwb25Gb3JtID0gJCgnLmNvdXBvbi1mb3JtJyk7XHJcbiAgICAgICAgY29uc3QgJGNvZGVJbnB1dCA9ICQoJ1tuYW1lPVwiY291cG9uY29kZVwiXScsICRjb3Vwb25Gb3JtKTtcclxuXHJcbiAgICAgICAgJCgnLmNvdXBvbi1jb2RlLWFkZCcpLm9uKCdjbGljaycsIGV2ZW50ID0+IHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgICQoZXZlbnQuY3VycmVudFRhcmdldCkuaGlkZSgpO1xyXG4gICAgICAgICAgICAkY291cG9uQ29udGFpbmVyLnNob3coKTtcclxuICAgICAgICAgICAgJCgnLmNvdXBvbi1jb2RlLWNhbmNlbCcpLnNob3coKTtcclxuICAgICAgICAgICAgJGNvZGVJbnB1dC50cmlnZ2VyKCdmb2N1cycpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAkKCcuY291cG9uLWNvZGUtY2FuY2VsJykub24oJ2NsaWNrJywgZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG5cclxuICAgICAgICAgICAgJGNvdXBvbkNvbnRhaW5lci5oaWRlKCk7XHJcbiAgICAgICAgICAgICQoJy5jb3Vwb24tY29kZS1jYW5jZWwnKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICQoJy5jb3Vwb24tY29kZS1hZGQnKS5zaG93KCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICRjb3Vwb25Gb3JtLm9uKCdzdWJtaXQnLCBldmVudCA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvZGUgPSAkY29kZUlucHV0LnZhbCgpO1xyXG5cclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgIC8vIEVtcHR5IGNvZGVcclxuICAgICAgICAgICAgaWYgKCFjb2RlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc3dhbCh7XHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogJGNvZGVJbnB1dC5kYXRhKCdlcnJvcicpLFxyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdlcnJvcicsXHJcbiAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdXRpbHMuYXBpLmNhcnQuYXBwbHlDb2RlKGNvZGUsIChlcnIsIHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzcG9uc2UuZGF0YS5zdGF0dXMgPT09ICdzdWNjZXNzJykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVmcmVzaENvbnRlbnQoKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocmVzcG9uc2UuZGF0YS5lcnJvcnMuaW5jbHVkZXMoXCJDb3Vwb24gZG9lcyBub3QgYXBwbHlcIikpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBEaXNwbGF5IGVycm9yIG1vZGFsIGlmIGNvdXBvbiBpc24ndCBhcHBsaWNhYmxlIHRvIGN1cnJlbnQgY2FydFxyXG4gICAgICAgICAgICAgICAgICAgIHN3YWwoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBcIkNvdXBvbiBkb2VzIG5vdCBhcHBseSB0byBjdXJyZW50IGNhcnQgcHJvZHVjdHNcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgYmluZEdpZnRDZXJ0aWZpY2F0ZUV2ZW50cygpIHtcclxuICAgICAgICBjb25zdCAkY2VydENvbnRhaW5lciA9ICQoJy5naWZ0LWNlcnRpZmljYXRlLWNvZGUnKTtcclxuICAgICAgICBjb25zdCAkY2VydEZvcm0gPSAkKCcuY2FydC1naWZ0LWNlcnRpZmljYXRlLWZvcm0nKTtcclxuICAgICAgICBjb25zdCAkY2VydElucHV0ID0gJCgnW25hbWU9XCJjZXJ0Y29kZVwiXScsICRjZXJ0Rm9ybSk7XHJcblxyXG4gICAgICAgICQoJy5naWZ0LWNlcnRpZmljYXRlLWFkZCcpLm9uKCdjbGljaycsIGV2ZW50ID0+IHtcclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICAgICAgJChldmVudC5jdXJyZW50VGFyZ2V0KS50b2dnbGUoKTtcclxuICAgICAgICAgICAgJGNlcnRDb250YWluZXIudG9nZ2xlKCk7XHJcbiAgICAgICAgICAgICQoJy5naWZ0LWNlcnRpZmljYXRlLWNhbmNlbCcpLnRvZ2dsZSgpO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAkKCcuZ2lmdC1jZXJ0aWZpY2F0ZS1jYW5jZWwnKS5vbignY2xpY2snLCBldmVudCA9PiB7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICRjZXJ0Q29udGFpbmVyLnRvZ2dsZSgpO1xyXG4gICAgICAgICAgICAkKCcuZ2lmdC1jZXJ0aWZpY2F0ZS1hZGQnKS50b2dnbGUoKTtcclxuICAgICAgICAgICAgJCgnLmdpZnQtY2VydGlmaWNhdGUtY2FuY2VsJykudG9nZ2xlKCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICRjZXJ0Rm9ybS5vbignc3VibWl0JywgZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBjb2RlID0gJGNlcnRJbnB1dC52YWwoKTtcclxuXHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoIWdpZnRDZXJ0Q2hlY2soY29kZSkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBzd2FsKHtcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiAkY2VydElucHV0LmRhdGEoJ2Vycm9yJyksXHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB1dGlscy5hcGkuY2FydC5hcHBseUdpZnRDZXJ0aWZpY2F0ZShjb2RlLCAoZXJyLCByZXNwKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAocmVzcC5kYXRhLnN0YXR1cyA9PT0gJ3N1Y2Nlc3MnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZWZyZXNoQ29udGVudCgpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBzd2FsKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogcmVzcC5kYXRhLmVycm9ycy5qb2luKCdcXG4nKSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgYmluZEdpZnRXcmFwcGluZ0V2ZW50cygpIHtcclxuICAgICAgICBjb25zdCBtb2RhbCA9IGRlZmF1bHRNb2RhbCgpO1xyXG5cclxuICAgICAgICAkKCdbZGF0YS1pdGVtLWdpZnR3cmFwXScpLm9uKCdjbGljaycsIGV2ZW50ID0+IHtcclxuICAgICAgICAgICAgY29uc3QgaXRlbUlkID0gJChldmVudC5jdXJyZW50VGFyZ2V0KS5kYXRhKCdpdGVtR2lmdHdyYXAnKTtcclxuICAgICAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgICAgIHRlbXBsYXRlOiAnY2FydC9tb2RhbHMvZ2lmdC13cmFwcGluZy1mb3JtJyxcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICBtb2RhbC5vcGVuKCk7XHJcblxyXG4gICAgICAgICAgICB1dGlscy5hcGkuY2FydC5nZXRJdGVtR2lmdFdyYXBwaW5nT3B0aW9ucyhpdGVtSWQsIG9wdGlvbnMsIChlcnIsIHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBtb2RhbC51cGRhdGVDb250ZW50KHJlc3BvbnNlLmNvbnRlbnQpO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMuYmluZEdpZnRXcmFwcGluZ0Zvcm0oKTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgYmluZEdpZnRXcmFwcGluZ0Zvcm0oKSB7XHJcbiAgICAgICAgJCgnLmdpZnRXcmFwcGluZy1zZWxlY3QnKS5vbignY2hhbmdlJywgZXZlbnQgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCAkc2VsZWN0ID0gJChldmVudC5jdXJyZW50VGFyZ2V0KTtcclxuICAgICAgICAgICAgY29uc3QgaWQgPSAkc2VsZWN0LnZhbCgpO1xyXG4gICAgICAgICAgICBjb25zdCBpbmRleCA9ICRzZWxlY3QuZGF0YSgnaW5kZXgnKTtcclxuXHJcbiAgICAgICAgICAgIGlmICghaWQpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgYWxsb3dNZXNzYWdlID0gJHNlbGVjdC5maW5kKGBvcHRpb25bdmFsdWU9JHtpZH1dYCkuZGF0YSgnYWxsb3dNZXNzYWdlJyk7XHJcblxyXG4gICAgICAgICAgICAkKGAuZ2lmdFdyYXBwaW5nLWltYWdlLSR7aW5kZXh9YCkuaGlkZSgpO1xyXG4gICAgICAgICAgICAkKGAjZ2lmdFdyYXBwaW5nLWltYWdlLSR7aW5kZXh9LSR7aWR9YCkuc2hvdygpO1xyXG5cclxuICAgICAgICAgICAgaWYgKGFsbG93TWVzc2FnZSkge1xyXG4gICAgICAgICAgICAgICAgJChgI2dpZnRXcmFwcGluZy1tZXNzYWdlLSR7aW5kZXh9YCkuc2hvdygpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgJChgI2dpZnRXcmFwcGluZy1tZXNzYWdlLSR7aW5kZXh9YCkuaGlkZSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICQoJy5naWZ0V3JhcHBpbmctc2VsZWN0JykudHJpZ2dlcignY2hhbmdlJyk7XHJcblxyXG4gICAgICAgIGZ1bmN0aW9uIHRvZ2dsZVZpZXdzKCkge1xyXG4gICAgICAgICAgICBjb25zdCB2YWx1ZSA9ICQoJ2lucHV0OnJhZGlvW25hbWUgPVwiZ2lmdHdyYXB0eXBlXCJdOmNoZWNrZWQnKS52YWwoKTtcclxuICAgICAgICAgICAgY29uc3QgJHNpbmdsZUZvcm0gPSAkKCcuZ2lmdFdyYXBwaW5nLXNpbmdsZScpO1xyXG4gICAgICAgICAgICBjb25zdCAkbXVsdGlGb3JtID0gJCgnLmdpZnRXcmFwcGluZy1tdWx0aXBsZScpO1xyXG5cclxuICAgICAgICAgICAgaWYgKHZhbHVlID09PSAnc2FtZScpIHtcclxuICAgICAgICAgICAgICAgICRzaW5nbGVGb3JtLnNob3coKTtcclxuICAgICAgICAgICAgICAgICRtdWx0aUZvcm0uaGlkZSgpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgJHNpbmdsZUZvcm0uaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgJG11bHRpRm9ybS5zaG93KCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICQoJ1tuYW1lPVwiZ2lmdHdyYXB0eXBlXCJdJykub24oJ2NsaWNrJywgdG9nZ2xlVmlld3MpO1xyXG5cclxuICAgICAgICB0b2dnbGVWaWV3cygpO1xyXG4gICAgfVxyXG5cclxuICAgIGJpbmRFdmVudHMoKSB7XHJcbiAgICAgICAgdGhpcy5iaW5kQ2FydEV2ZW50cygpO1xyXG4gICAgICAgIHRoaXMuYmluZFByb21vQ29kZUV2ZW50cygpO1xyXG4gICAgICAgIHRoaXMuYmluZEdpZnRXcmFwcGluZ0V2ZW50cygpO1xyXG4gICAgICAgIHRoaXMuYmluZEdpZnRDZXJ0aWZpY2F0ZUV2ZW50cygpO1xyXG5cclxuICAgICAgICAvLyBpbml0aWF0ZSBzaGlwcGluZyBlc3RpbWF0b3IgbW9kdWxlXHJcbiAgICAgICAgdGhpcy5zaGlwcGluZ0VzdGltYXRvciA9IG5ldyBTaGlwcGluZ0VzdGltYXRvcigkKCdbZGF0YS1zaGlwcGluZy1lc3RpbWF0b3JdJykpO1xyXG4gICAgfVxyXG5cclxuICAgIHJlbW92ZUNvdXBvbihldmVudCkge1xyXG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgbG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oJ2dsb2JhbFByb21vJyk7XHJcbiAgICAgICAgaWYgKCQoZXZlbnQudGFyZ2V0KS5hdHRyKCdocmVmJykgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24gPSAkKGV2ZW50LnRhcmdldCkuYXR0cignaHJlZicpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBcclxuICAgIGlqdF9mb3JtYXRNb25leShpbnB1dFZhbHVlKVxyXG4gICAge1xyXG4gICAgICAgIHZhciBvdXRwdXRWYWx1ZSA9IG5ldyBOdW1iZXIoaW5wdXRWYWx1ZSk7XHJcbiAgICAgICAgcmV0dXJuIFwiJnBvdW5kO1wiICsgb3V0cHV0VmFsdWUudG9GaXhlZCgyKS50b1N0cmluZygpLnJlcGxhY2UoLyhcXGQpKD89KFxcZHszfSkrKD8hXFxkKSkvZywgJyQxLCcpO1xyXG4gICAgfVxyXG4gICAgXHJcblxyXG4gICAgbG9hZFJlbGF0ZWRQcm9kdWN0cygpXHJcbiAgICB7XHJcbiAgICAgICAgdmFyIHJlbGF0ZWRQcm9kdWN0c0NvdW50ID0gMDtcclxuXHJcbiAgICAgICAgdGhpcy4kY2FydENvbnRlbnQuZmluZChcInRyLmNhcnQtcmVsYXRlZC1wcm9kdWN0LWNvbnRhaW5lciBkaXYuY2FydC1yZWxhdGVkLXByb2R1Y3Qgc3BhblwiKS5lYWNoKChpbmRleCwgcGxhY2Vob2xkZXIpID0+IHtcclxuXHJcbiAgICAgICAgICAgIHZhciBpZ25vcmVSZWxhdGVkUHJvZHVjdCA9IGZhbHNlO1xyXG4gICAgICAgICAgICBpZiAoJChwbGFjZWhvbGRlcikuY2xvc2VzdChcInRyLmNhcnQtcmVsYXRlZC1wcm9kdWN0LWNvbnRhaW5lclwiKS5wcmV2KFwidHIuY2FydC13aXRoLXJlbGF0ZWQtcHJvZHVjdFwiKS5maW5kKFwicC5jYXJ0LWl0ZW0tYnJhbmRcIikubGVuZ3RoID4gMClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWdub3JlUmVsYXRlZFByb2R1Y3QgPSB0aGlzLmlnbm9yZVJlbGF0ZWRQcm9kdWN0c0JyYW5kKCQocGxhY2Vob2xkZXIpLmNsb3Nlc3QoXCJ0ci5jYXJ0LXJlbGF0ZWQtcHJvZHVjdC1jb250YWluZXJcIikucHJldihcInRyLmNhcnQtd2l0aC1yZWxhdGVkLXByb2R1Y3RcIikuZmluZChcInAuY2FydC1pdGVtLWJyYW5kXCIpLnRleHQoKSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmICghaWdub3JlUmVsYXRlZFByb2R1Y3QpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIHJlbGF0ZWRQcm9kdWN0c0NvdW50Kys7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgaWYgKHJlbGF0ZWRQcm9kdWN0c0NvdW50ID4gMCAmJiB0aGlzLiRjYXJ0Q29udGVudC5maW5kKFwidHIuY2FydC1pdGVtIGEuY2FydC1pdGVtLW5hbWVfX2xhYmVsOmNvbnRhaW5zKCdTd2FwICYgU2F2ZScpXCIpLmxlbmd0aCA9PSAwICYmXHJcbiAgICAgICAgICAgIHRoaXMuJGNhcnRDb250ZW50LmZpbmQoXCJ0ci5jYXJ0LWl0ZW0gYS5jYXJ0LWl0ZW0tbmFtZV9fbGFiZWw6Y29udGFpbnMoJ1RoYW5rIHlvdSBmb3IgU3dhcHBpbmcgJiBTYXZpbmcnKVwiKS5sZW5ndGggPT0gMClcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxldCBmb3JtRGF0YVRZID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICAgICAgICAgIGZvcm1EYXRhVFkuYXBwZW5kKCdhY3Rpb24nLCAnYWRkJyk7XHJcbiAgICAgICAgICAgIGZvcm1EYXRhVFkuYXBwZW5kKCdwcm9kdWN0X2lkJywgMTMzMjcpO1xyXG4gICAgICAgICAgICBmb3JtRGF0YVRZLmFwcGVuZCgncXR5W10nLCAxKTtcclxuXHJcbiAgICAgICAgICAgIHV0aWxzLmFwaS5jYXJ0Lml0ZW1BZGQoZm9ybURhdGFUWSwgKGVyciwgcmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGVycm9yTWVzc2FnZSA9IGVyciB8fCByZXNwb25zZS5kYXRhLmVycm9yO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChlcnJvck1lc3NhZ2UpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3dhbCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IGVycm9yTWVzc2FnZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAkKFwiaS5xdWFudGl0eS02NjY4U1wiKS50ZXh0KFwiMVwiKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlZnJlc2hDb250ZW50KHRydWUpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKHRoaXMuJGNhcnRDb250ZW50LmZpbmQoXCJ0ci5jYXJ0LWl0ZW0gYS5jYXJ0LWl0ZW0tbmFtZV9fbGFiZWw6Y29udGFpbnMoJ1RoYW5rIHlvdSBmb3IgU3dhcHBpbmcgJiBTYXZpbmcnKVwiKS5sZW5ndGggPiAwXHJcbiAgICAgICAgICAgICYmICh0eXBlb2YgQ29va2llcy5nZXQoJ2lqdGRfU3dpdGNoZWRJdGVtcycpID09PSAndW5kZWZpbmVkJyB8fCBDb29raWVzLmdldChcImlqdGRfU3dpdGNoZWRJdGVtc1wiKSA9PSBcIlwiKSlcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIC8vUmVtb3ZlIHRoZSBUaGFuayB5b3UgZm9yIFN3YXBwaW5nICYgU2F2aW5nXHJcbiAgICAgICAgICAgIHZhciBhSXRlbU5hbWUgPSB0aGlzLiRjYXJ0Q29udGVudC5maW5kKFwidHIuY2FydC1pdGVtIGEuY2FydC1pdGVtLW5hbWVfX2xhYmVsOmNvbnRhaW5zKCdUaGFuayB5b3UgZm9yIFN3YXBwaW5nICYgU2F2aW5nJylcIilbMF07XHJcbiAgICAgICAgICAgIHZhciB0ckl0ZW0gPSAkKGFJdGVtTmFtZSkuY2xvc2VzdChcInRyLmNhcnQtaXRlbVwiKTtcclxuICAgICAgICAgICAgdXRpbHMuYXBpLmNhcnQuaXRlbVJlbW92ZSgkKHRySXRlbSkuZmluZChcImlucHV0LmNhcnQtaXRlbS1xdHktaW5wdXRcIikuYXR0cihcImRhdGEtY2FydC1pdGVtaWRcIiksIChlcnIsIHJlc3BvbnNlKSA9PlxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAkKFwiaS5xdWFudGl0eS02NjY3U1wiKS50ZXh0KFwiMFwiKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVmcmVzaENvbnRlbnQodHJ1ZSk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvL3RoaXMuJGNhcnRDb250ZW50LmZpbmQoXCJ0ci5jYXJ0LWl0ZW0gc3Bhbi5jYXJ0LXJlbGF0ZWQtcHJvZHVjdFwiKS5lYWNoKChpLCBwbGFjZWhvbGRlcikgPT4ge1xyXG4gICAgICAgIHRoaXMuJGNhcnRDb250ZW50LmZpbmQoXCJ0ci5jYXJ0LXJlbGF0ZWQtcHJvZHVjdC1jb250YWluZXIgZGl2LmNhcnQtcmVsYXRlZC1wcm9kdWN0IHNwYW5cIikuZWFjaCgoaW5kZXgsIHBsYWNlaG9sZGVyKSA9PiB7XHJcbiAgICAgICAgICAgIC8vUGFjZS5pZ25vcmUoKCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgdmFyIGlnbm9yZVJlbGF0ZWRQcm9kdWN0ID0gZmFsc2U7XHJcbiAgICAgICAgICAgIGlmICgkKHBsYWNlaG9sZGVyKS5jbG9zZXN0KFwidHIuY2FydC1yZWxhdGVkLXByb2R1Y3QtY29udGFpbmVyXCIpLnByZXYoXCJ0ci5jYXJ0LXdpdGgtcmVsYXRlZC1wcm9kdWN0XCIpLmZpbmQoXCJwLmNhcnQtaXRlbS1icmFuZFwiKS5sZW5ndGggPiAwKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZ25vcmVSZWxhdGVkUHJvZHVjdCA9IHRoaXMuaWdub3JlUmVsYXRlZFByb2R1Y3RzQnJhbmQoJChwbGFjZWhvbGRlcikuY2xvc2VzdChcInRyLmNhcnQtcmVsYXRlZC1wcm9kdWN0LWNvbnRhaW5lclwiKS5wcmV2KFwidHIuY2FydC13aXRoLXJlbGF0ZWQtcHJvZHVjdFwiKS5maW5kKFwicC5jYXJ0LWl0ZW0tYnJhbmRcIikudGV4dCgpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgaWYgKCFpZ25vcmVSZWxhdGVkUHJvZHVjdClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbGV0IHRlbXBsYXRlID0gJ2NzLWN1c3RvbS9hamF4LXByb2R1Y3RzLWJ5LWNhdGVnb3J5LWlkLXJlc3VsdC1wcm9kdWN0JztcclxuICAgICAgICAgICAgICAgIHV0aWxzLmFwaS5nZXRQYWdlKCQocGxhY2Vob2xkZXIpLmh0bWwoKSwgeyB0ZW1wbGF0ZSB9LCAoZXJyLCByZXNwKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgJChwbGFjZWhvbGRlcikubmV4dCgpLmh0bWwocmVzcCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZhciBwcm9kdWN0TWFpblByaWNlID0gcGFyc2VGbG9hdCgkKHBsYWNlaG9sZGVyKS5jbG9zZXN0KFwiZGl2LmNhcnQtcmVsYXRlZC1wcm9kdWN0XCIpLmF0dHIoXCJjYXJ0LXByb2QtbWFpbnByaWNlXCIpKTtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcHJvZHVjdFJlbGF0ZWRQcmljZSA9IHBhcnNlRmxvYXQoJChwbGFjZWhvbGRlcikuY2xvc2VzdChcImRpdi5jYXJ0LXJlbGF0ZWQtcHJvZHVjdFwiKS5maW5kKFwiZGl2LmNhcnQtcmVsYXRlZC1wcm9kXCIpLmF0dHIoXCJkYXRhLXByb2R1Y3QtcHJpY2VcIikpO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhciBwcm9kdWN0TWFpbllpZWxkcyA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHByb2R1Y3RSZWxhdGVkWWllbGRzID0gMDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJChwbGFjZWhvbGRlcikuY2xvc2VzdChcInRyLmNhcnQtcmVsYXRlZC1wcm9kdWN0LWNvbnRhaW5lclwiKS5wcmV2KFwidHIuY2FydC13aXRoLXJlbGF0ZWQtcHJvZHVjdFwiKS5maW5kKFwiZGl2LnBhZ2UteWllbGQtaXRlbS12YWx1ZSBzcGFuXCIpLmVhY2goZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0TWFpbllpZWxkcyArPSBwYXJzZUZsb2F0KCQodGhpcykudGV4dCgpKTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAkKHBsYWNlaG9sZGVyKS5jbG9zZXN0KFwiZGl2LmNhcnQtcmVsYXRlZC1wcm9kdWN0XCIpLmZpbmQoXCJkaXYucGFnZS15aWVsZC1pdGVtLXZhbHVlIHNwYW5cIikuZWFjaChmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb2R1Y3RSZWxhdGVkWWllbGRzICs9IHBhcnNlRmxvYXQoJCh0aGlzKS50ZXh0KCkpO1xyXG4gICAgICAgICAgICAgICAgICAgIH0pO1xyXG5cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmFyIHF0eSA9IHBhcnNlSW50KCQocGxhY2Vob2xkZXIpLmNsb3Nlc3QoXCJ0ci5jYXJ0LXJlbGF0ZWQtcHJvZHVjdC1jb250YWluZXJcIikucHJldigpLmZpbmQoXCJpbnB1dC5jYXJ0LWl0ZW0tcXR5LWlucHV0XCIpLnZhbCgpKTtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoJChwbGFjZWhvbGRlcikuY2xvc2VzdChcImRpdi5jYXJ0LXJlbGF0ZWQtcHJvZHVjdFwiKS5maW5kKFwiZGl2LmJ1bGtfZGlzY291bnRfcmF0ZXMtYm94XCIpLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJChwbGFjZWhvbGRlcikuY2xvc2VzdChcImRpdi5jYXJ0LXJlbGF0ZWQtcHJvZHVjdFwiKS5maW5kKFwiZGl2LmJ1bGtfZGlzY291bnRfcmF0ZXMtYm94IGRpdltpanQtbWluLXByaWNlLXZhbHVlXVwiKS5lYWNoKGZ1bmN0aW9uIChpbmRleCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHF0eSA+PSBwYXJzZUludCgkKHRoaXMpLmF0dHIoXCJpanQtbWluLXByaWNlLXZhbHVlXCIpKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwYXJzZUludCgkKHRoaXMpLmF0dHIoXCJpanQtbWF4LXByaWNlLXZhbHVlXCIpKSA9PSAwIHx8IHF0eSA8PSBwYXJzZUludCgkKHRoaXMpLmF0dHIoXCJpanQtbWF4LXByaWNlLXZhbHVlXCIpKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9kdWN0UmVsYXRlZFByaWNlID0gcGFyc2VGbG9hdCgkKHRoaXMpLnRleHQoKS5yZXBsYWNlKC9cXHUwMEEzL2csICcnKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHByb2R1Y3RNYWluUHJpY2UgPiBwcm9kdWN0UmVsYXRlZFByaWNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByZWxhdGVkU2F2ZSA9IChNYXRoLnJvdW5kKChxdHkgKiAocHJvZHVjdE1haW5QcmljZSAtIHByb2R1Y3RSZWxhdGVkUHJpY2UpKSAqIDEwMCkgLyAxMDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmVsYXRlZFNhdmVQZXJJdGVtID0gKE1hdGgucm91bmQoKHByb2R1Y3RNYWluUHJpY2UgLSBwcm9kdWN0UmVsYXRlZFByaWNlKSAqIDEwMCkgLyAxMDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmVsYXRlZFByb2RUb3RhbFByaWNlID0gKE1hdGgucm91bmQoKHF0eSAqIHByb2R1Y3RSZWxhdGVkUHJpY2UpICogMTAwKSAvIDEwMCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKHBsYWNlaG9sZGVyKS5jbG9zZXN0KFwiZGl2LmNhcnQtcmVsYXRlZC1wcm9kdWN0XCIpLmZpbmQoXCJzcGFuLnJlbGF0ZWQtc2F2ZVwiKS5zaG93KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQocGxhY2Vob2xkZXIpLmNsb3Nlc3QoXCJkaXYuY2FydC1yZWxhdGVkLXByb2R1Y3RcIikuZmluZChcInNwYW4ucmVsYXRlZC1zYXZlXCIpLmh0bWwodGhpcy5panRfZm9ybWF0TW9uZXkocmVsYXRlZFNhdmUpKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQocGxhY2Vob2xkZXIpLmNsb3Nlc3QoXCJkaXYuY2FydC1yZWxhdGVkLXByb2R1Y3RcIikuZmluZChcInNwYW5bZGF0YS1wcm9kdWN0LXByaWNlLXdpdGgtdGF4XVwiKS5odG1sKHRoaXMuaWp0X2Zvcm1hdE1vbmV5KHJlbGF0ZWRQcm9kVG90YWxQcmljZSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocHJvZHVjdE1haW5ZaWVsZHMgPT0gcHJvZHVjdFJlbGF0ZWRZaWVsZHMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQocGxhY2Vob2xkZXIpLmNsb3Nlc3QoXCJkaXYuY2FydC1yZWxhdGVkLXByb2R1Y3RcIikuZmluZChcInNwYW4ucmVsYXRlZC1ibHVlLW1lc3NhZ2VcIikuaHRtbChcIjxzdHJvbmc+RElEIFlPVSBLTk9XPzxici8+IFlvdSBjb3VsZCBzYXZlIFwiICsgdGhpcy5panRfZm9ybWF0TW9uZXkocmVsYXRlZFNhdmVQZXJJdGVtKSArIFwiIHBlciBjYXJ0cmlkZ2UganVzdCBieSBzd2FwcGluZyB0byB0aGUgSUpUIFJlY3ljbGVkIGJyYW5kPzwvc3Ryb25nPlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChxdHkgPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQocGxhY2Vob2xkZXIpLmNsb3Nlc3QoXCJkaXYuY2FydC1yZWxhdGVkLXByb2R1Y3RcIikuZmluZChcIi5jYXJ0LXJlbGF0ZWQtcHJvZHVjdC1jb3VudC1pdGVtXCIpLmh0bWwoXCJHZXQgXCIgKyBxdHkgKyBcIiBjYXJ0cmlkZ2UgZm9yIG9ubHkgXCIgKyB0aGlzLmlqdF9mb3JtYXRNb25leShyZWxhdGVkUHJvZFRvdGFsUHJpY2UpICsgXCI8YnIvPiBzYXZpbmcgeW91IFwiICsgdGhpcy5panRfZm9ybWF0TW9uZXkocmVsYXRlZFNhdmUpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQocGxhY2Vob2xkZXIpLmNsb3Nlc3QoXCJkaXYuY2FydC1yZWxhdGVkLXByb2R1Y3RcIikuZmluZChcIi5jYXJ0LXJlbGF0ZWQtcHJvZHVjdC1jb3VudC1pdGVtXCIpLmh0bWwoXCJHZXQgYWxsIFwiICsgcXR5ICsgXCIgY2FydHJpZGdlcyBmb3Igb25seSBcIiArIHRoaXMuaWp0X2Zvcm1hdE1vbmV5KHJlbGF0ZWRQcm9kVG90YWxQcmljZSkgKyBcIjxici8+IHNhdmluZyB5b3UgXCIgKyB0aGlzLmlqdF9mb3JtYXRNb25leShyZWxhdGVkU2F2ZSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJChwbGFjZWhvbGRlcikuY2xvc2VzdChcImRpdi5jYXJ0LXJlbGF0ZWQtcHJvZHVjdFwiKS5maW5kKFwiLnN3aXRjaC1hbmQtc2F2ZVwiKS5odG1sKFwiU3dhcCAmIFNhdmUgXCIgKyB0aGlzLmlqdF9mb3JtYXRNb25leShyZWxhdGVkU2F2ZSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHByb2R1Y3RNYWluWWllbGRzID4gcHJvZHVjdFJlbGF0ZWRZaWVsZHMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQocGxhY2Vob2xkZXIpLmNsb3Nlc3QoXCJkaXYuY2FydC1yZWxhdGVkLXByb2R1Y3RcIikuZmluZChcInNwYW4ucmVsYXRlZC1ibHVlLW1lc3NhZ2VcIikuaHRtbChcIjxzdHJvbmc+RElEIFlPVSBLTk9XPzxici8+IFlvdSBjb3VsZCBzYXZlIFwiICsgdGhpcy5panRfZm9ybWF0TW9uZXkocmVsYXRlZFNhdmVQZXJJdGVtKSArIFwiIHBlciBjYXJ0cmlkZ2UganVzdCBieSBzd2FwcGluZyB0byB0aGUgSUpUIFJlY3ljbGVkIGJyYW5kPzwvc3Ryb25nPlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChxdHkgPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQocGxhY2Vob2xkZXIpLmNsb3Nlc3QoXCJkaXYuY2FydC1yZWxhdGVkLXByb2R1Y3RcIikuZmluZChcIi5jYXJ0LXJlbGF0ZWQtcHJvZHVjdC1jb3VudC1pdGVtXCIpLmh0bWwoXCJHZXQgXCIgKyBxdHkgKyBcIiBjYXJ0cmlkZ2UgZm9yIG9ubHkgXCIgKyB0aGlzLmlqdF9mb3JtYXRNb25leShyZWxhdGVkUHJvZFRvdGFsUHJpY2UpICsgXCI8YnIvPiBzYXZpbmcgeW91IFwiICsgdGhpcy5panRfZm9ybWF0TW9uZXkocmVsYXRlZFNhdmUpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQocGxhY2Vob2xkZXIpLmNsb3Nlc3QoXCJkaXYuY2FydC1yZWxhdGVkLXByb2R1Y3RcIikuZmluZChcIi5jYXJ0LXJlbGF0ZWQtcHJvZHVjdC1jb3VudC1pdGVtXCIpLmh0bWwoXCJHZXQgYWxsIFwiICsgcXR5ICsgXCIgY2FydHJpZGdlcyBmb3Igb25seSBcIiArIHRoaXMuaWp0X2Zvcm1hdE1vbmV5KHJlbGF0ZWRQcm9kVG90YWxQcmljZSkgKyBcIjxici8+IHNhdmluZyB5b3UgXCIgKyB0aGlzLmlqdF9mb3JtYXRNb25leShyZWxhdGVkU2F2ZSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJChwbGFjZWhvbGRlcikuY2xvc2VzdChcImRpdi5jYXJ0LXJlbGF0ZWQtcHJvZHVjdFwiKS5maW5kKFwiLnN3aXRjaC1hbmQtc2F2ZVwiKS5odG1sKFwiU3dhcCAmIFNhdmUgXCIgKyB0aGlzLmlqdF9mb3JtYXRNb25leShyZWxhdGVkU2F2ZSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHByb2R1Y3RNYWluWWllbGRzIDwgcHJvZHVjdFJlbGF0ZWRZaWVsZHMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQocGxhY2Vob2xkZXIpLmNsb3Nlc3QoXCJkaXYuY2FydC1yZWxhdGVkLXByb2R1Y3RcIikuZmluZChcInNwYW4ucmVsYXRlZC1ibHVlLW1lc3NhZ2VcIikuaHRtbChcIjxzdHJvbmc+RElEIFlPVSBLTk9XPzxici8+IFlvdSBjb3VsZCBzYXZlIFwiICsgdGhpcy5panRfZm9ybWF0TW9uZXkocmVsYXRlZFNhdmVQZXJJdGVtKSArIFwiIHBlciBjYXJ0cmlkZ2UganVzdCBieSBzd2FwcGluZyB0byB0aGUgSUpUIFJlY3ljbGVkIGJyYW5kPzwvc3Ryb25nPlwiKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChxdHkgPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQocGxhY2Vob2xkZXIpLmNsb3Nlc3QoXCJkaXYuY2FydC1yZWxhdGVkLXByb2R1Y3RcIikuZmluZChcIi5jYXJ0LXJlbGF0ZWQtcHJvZHVjdC1jb3VudC1pdGVtXCIpLmh0bWwoXCJHZXQgXCIgKyBxdHkgKyBcIiBjYXJ0cmlkZ2UgZm9yIG9ubHkgXCIgKyB0aGlzLmlqdF9mb3JtYXRNb25leShyZWxhdGVkUHJvZFRvdGFsUHJpY2UpICsgXCI8YnIvPiBzYXZpbmcgeW91IFwiICsgdGhpcy5panRfZm9ybWF0TW9uZXkocmVsYXRlZFNhdmUpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQocGxhY2Vob2xkZXIpLmNsb3Nlc3QoXCJkaXYuY2FydC1yZWxhdGVkLXByb2R1Y3RcIikuZmluZChcIi5jYXJ0LXJlbGF0ZWQtcHJvZHVjdC1jb3VudC1pdGVtXCIpLmh0bWwoXCJHZXQgYWxsIFwiICsgcXR5ICsgXCIgY2FydHJpZGdlcyBmb3Igb25seSBcIiArIHRoaXMuaWp0X2Zvcm1hdE1vbmV5KHJlbGF0ZWRQcm9kVG90YWxQcmljZSkgKyBcIjxici8+IHNhdmluZyB5b3UgXCIgKyB0aGlzLmlqdF9mb3JtYXRNb25leShyZWxhdGVkU2F2ZSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJChwbGFjZWhvbGRlcikuY2xvc2VzdChcImRpdi5jYXJ0LXJlbGF0ZWQtcHJvZHVjdFwiKS5maW5kKFwiLnN3aXRjaC1hbmQtc2F2ZVwiKS5odG1sKFwiU3dhcCAmIFNhdmUgXCIgKyB0aGlzLmlqdF9mb3JtYXRNb25leShyZWxhdGVkU2F2ZSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2UgaWYgKHByb2R1Y3RSZWxhdGVkUHJpY2UgPj0gcHJvZHVjdE1haW5QcmljZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcmVsYXRlZFNhdmUgPSAoTWF0aC5yb3VuZCgocXR5ICogKHByb2R1Y3RNYWluUHJpY2UgLSBwcm9kdWN0UmVsYXRlZFByaWNlKSkgKiAxMDApIC8gMTAwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJlbGF0ZWRTYXZlUGVySXRlbSA9IChNYXRoLnJvdW5kKChwcm9kdWN0TWFpblByaWNlIC0gcHJvZHVjdFJlbGF0ZWRQcmljZSkgKiAxMDApIC8gMTAwKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHJlbGF0ZWRQcm9kVG90YWxQcmljZSA9IChNYXRoLnJvdW5kKChxdHkgKiBwcm9kdWN0UmVsYXRlZFByaWNlKSAqIDEwMCkgLyAxMDApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVsYXRlZFNhdmUgPCAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWxhdGVkU2F2ZSA9ICgtMSAqIHJlbGF0ZWRTYXZlKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQocGxhY2Vob2xkZXIpLmNsb3Nlc3QoXCJkaXYuY2FydC1yZWxhdGVkLXByb2R1Y3RcIikuZmluZChcInNwYW4ucmVsYXRlZC1zYXZlXCIpLnNob3coKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgJChwbGFjZWhvbGRlcikuY2xvc2VzdChcImRpdi5jYXJ0LXJlbGF0ZWQtcHJvZHVjdFwiKS5maW5kKFwic3Bhbi5yZWxhdGVkLXNhdmVcIikuaHRtbCh0aGlzLmlqdF9mb3JtYXRNb25leShyZWxhdGVkU2F2ZSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAkKHBsYWNlaG9sZGVyKS5jbG9zZXN0KFwiZGl2LmNhcnQtcmVsYXRlZC1wcm9kdWN0XCIpLmZpbmQoXCIuc3dpdGNoLWFuZC1zYXZlXCIpLmh0bWwoXCJTd2FwICYgU2F2ZSBcIiArIHRoaXMuaWp0X2Zvcm1hdE1vbmV5KHJlbGF0ZWRTYXZlKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICQocGxhY2Vob2xkZXIpLmNsb3Nlc3QoXCJkaXYuY2FydC1yZWxhdGVkLXByb2R1Y3RcIikuZmluZChcInNwYW5bZGF0YS1wcm9kdWN0LXByaWNlLXdpdGgtdGF4XVwiKS5odG1sKHRoaXMuaWp0X2Zvcm1hdE1vbmV5KHJlbGF0ZWRQcm9kVG90YWxQcmljZSkpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHByb2R1Y3RNYWluWWllbGRzIDwgcHJvZHVjdFJlbGF0ZWRZaWVsZHMpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICQocGxhY2Vob2xkZXIpLmNsb3Nlc3QoXCJkaXYuY2FydC1yZWxhdGVkLXByb2R1Y3RcIikuZmluZChcInNwYW4ucmVsYXRlZC1ibHVlLW1lc3NhZ2VcIikuaHRtbChcIjxzdHJvbmc+RElEIFlPVSBLTk9XPzxici8+IElmIHlvdSBzcGVuZCBcIiArIHRoaXMuaWp0X2Zvcm1hdE1vbmV5KHJlbGF0ZWRTYXZlKSArIFwiIG1vcmUgYnkgc3dhcHBpbmcgdG8gdGhlIElKVCBSZWN5Y2xlZCBicmFuZCwgeW914oCZbGwgZ2V0IG1vcmUgcHJpbnRzIHdoaWNoIHNhdmVzIHlvdSBtb25leSBpbiB0aGUgbG9uZyBydW4uPC9zdHJvbmc+XCIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChxdHkgPT0gMSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQocGxhY2Vob2xkZXIpLmNsb3Nlc3QoXCJkaXYuY2FydC1yZWxhdGVkLXByb2R1Y3RcIikuZmluZChcIi5jYXJ0LXJlbGF0ZWQtcHJvZHVjdC1jb3VudC1pdGVtXCIpLmh0bWwoXCJHZXQgXCIgKyBxdHkgKyBcIiBjYXJ0cmlkZ2UgZm9yIG9ubHkgXCIgKyB0aGlzLmlqdF9mb3JtYXRNb25leShyZWxhdGVkUHJvZFRvdGFsUHJpY2UpKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQocGxhY2Vob2xkZXIpLmNsb3Nlc3QoXCJkaXYuY2FydC1yZWxhdGVkLXByb2R1Y3RcIikuZmluZChcIi5jYXJ0LXJlbGF0ZWQtcHJvZHVjdC1jb3VudC1pdGVtXCIpLmh0bWwoXCJHZXQgYWxsIFwiICsgcXR5ICsgXCIgY2FydHJpZGdlcyBmb3Igb25seSBcIiArIHRoaXMuaWp0X2Zvcm1hdE1vbmV5KHJlbGF0ZWRQcm9kVG90YWxQcmljZSkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgJChwbGFjZWhvbGRlcikuY2xvc2VzdChcImRpdi5jYXJ0LXJlbGF0ZWQtcHJvZHVjdFwiKS5maW5kKFwiLnN3aXRjaC1hbmQtc2F2ZVwiKS5odG1sKFwiU3dhcCAmIEdldCBtb3JlIHByaW50cyBcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAkKHBsYWNlaG9sZGVyKS5uZXh0KCkuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgJChwbGFjZWhvbGRlcikuY2xvc2VzdChcImRpdi5jYXJ0LXJlbGF0ZWQtcHJvZHVjdFwiKS5maW5kKFwiYS5zd2l0Y2gtYW5kLXNhdmVcIikub24oJ2NsaWNrJywgZXZlbnQgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSgpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ2FjdGlvbicsICdhZGQnKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybURhdGEuYXBwZW5kKCdwcm9kdWN0X2lkJywgJChldmVudC5jdXJyZW50VGFyZ2V0KS5jbG9zZXN0KFwiZGl2LmNhcnQtcmVsYXRlZC1wcm9kXCIpLmF0dHIoXCJkYXRhLXByb2R1Y3QtaWRcIikpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtRGF0YS5hcHBlbmQoJ3F0eVtdJywgJChldmVudC5jdXJyZW50VGFyZ2V0KS5jbG9zZXN0KFwidHIuY2FydC1yZWxhdGVkLXByb2R1Y3QtY29udGFpbmVyXCIpLnByZXYoKS5maW5kKFwiaW5wdXQuY2FydC1pdGVtLXF0eS1pbnB1dFwiKS52YWwoKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBldmVudC50YXJnZXQuc3R5bGUucG9pbnRlckV2ZW50cyA9ICdub25lJztcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHV0aWxzLmFwaS5jYXJ0Lml0ZW1BZGQoZm9ybURhdGEsIChlcnIsIHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBlcnJvck1lc3NhZ2UgPSBlcnIgfHwgcmVzcG9uc2UuZGF0YS5lcnJvcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV2ZW50LnRhcmdldC5zdHlsZS5wb2ludGVyRXZlbnRzID0gJ2F1dG8nO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlcnJvck1lc3NhZ2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3dhbCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IGVycm9yTWVzc2FnZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIENvb2tpZXMuZ2V0KCdpanRkX1N3aXRjaGVkSXRlbXMnKSA9PT0gJ3VuZGVmaW5lZCcpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29va2llcy5zZXQoXCJpanRkX1N3aXRjaGVkSXRlbXNcIiwgcmVzcG9uc2UuZGF0YS5jYXJ0X2l0ZW0uaWQsIHsgZXhwaXJlczogMzAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGlqdGRfU3dpdGNoZWRJdGVtcyA9IENvb2tpZXMuZ2V0KFwiaWp0ZF9Td2l0Y2hlZEl0ZW1zXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlqdGRfU3dpdGNoZWRJdGVtcyArPSBcIixcIiArIHJlc3BvbnNlLmRhdGEuY2FydF9pdGVtLmlkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvb2tpZXMuc2V0KFwiaWp0ZF9Td2l0Y2hlZEl0ZW1zXCIsIGlqdGRfU3dpdGNoZWRJdGVtcywgeyBleHBpcmVzOiAzMCB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1dGlscy5hcGkuY2FydC5pdGVtUmVtb3ZlKCQoZXZlbnQuY3VycmVudFRhcmdldCkuY2xvc2VzdChcInRyLmNhcnQtcmVsYXRlZC1wcm9kdWN0LWNvbnRhaW5lclwiKS5wcmV2KCkuZmluZChcImlucHV0LmNhcnQtaXRlbS1xdHktaW5wdXRcIikuYXR0cihcImRhdGEtY2FydC1pdGVtaWRcIiksIChlcnIsIHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEuc3RhdHVzID09PSAnc3VjY2VlZCcpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJChcImRpdi5yYWxldGVkLXByb2R1Y3QtbWVzc2FnZVwiKS5zaG93KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJChcImRpdi5yYWxldGVkLXByb2R1Y3QtbWVzc2FnZVwiKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sIDMwMDAwKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLiRjYXJ0Q29udGVudC5maW5kKFwidHIuY2FydC1pdGVtIGEuY2FydC1pdGVtLW5hbWVfX2xhYmVsOmNvbnRhaW5zKCdUaGFuayB5b3UgZm9yIFN3YXBwaW5nICYgU2F2aW5nJylcIikubGVuZ3RoID09IDApXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBmb3JtRGF0YVRZID0gbmV3IEZvcm1EYXRhKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtRGF0YVRZLmFwcGVuZCgnYWN0aW9uJywgJ2FkZCcpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybURhdGFUWS5hcHBlbmQoJ3Byb2R1Y3RfaWQnLCAxMzE2MCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtRGF0YVRZLmFwcGVuZCgncXR5W10nLCAxKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1dGlscy5hcGkuY2FydC5pdGVtQWRkKGZvcm1EYXRhVFksIChlcnIsIHJlc3BvbnNlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZXJyb3JNZXNzYWdlID0gZXJyIHx8IHJlc3BvbnNlLmRhdGEuZXJyb3I7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlcnJvck1lc3NhZ2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN3YWwoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogZXJyb3JNZXNzYWdlLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2Vycm9yJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICQoXCJpLnF1YW50aXR5LTY2NjdTXCIpLnRleHQoXCIxXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy4kY2FydENvbnRlbnQuZmluZChcInRyLmNhcnQtaXRlbSBhLmNhcnQtaXRlbS1uYW1lX19sYWJlbDpjb250YWlucygnU3dhcCAmIFNhdmUnKVwiKS5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBhSXRlbU5hbWUgPSB0aGlzLiRjYXJ0Q29udGVudC5maW5kKFwidHIuY2FydC1pdGVtIGEuY2FydC1pdGVtLW5hbWVfX2xhYmVsOmNvbnRhaW5zKCdTd2FwICYgU2F2ZScpXCIpWzBdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgdHJJdGVtID0gJChhSXRlbU5hbWUpLmNsb3Nlc3QoXCJ0ci5jYXJ0LWl0ZW1cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHV0aWxzLmFwaS5jYXJ0Lml0ZW1SZW1vdmUoJCh0ckl0ZW0pLmZpbmQoXCJpbnB1dC5jYXJ0LWl0ZW0tcXR5LWlucHV0XCIpLmF0dHIoXCJkYXRhLWNhcnQtaXRlbWlkXCIpLCAoZXJyLCByZXNwb25zZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgJChcImkucXVhbnRpdHktNjY2OFNcIikudGV4dChcIjBcIik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlZnJlc2hDb250ZW50KHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucmVmcmVzaENvbnRlbnQodHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnJlZnJlc2hDb250ZW50KHRydWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gc3dhbCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiByZXNwb25zZS5kYXRhLmVycm9ycyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdlcnJvcicsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8vfSk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgfVxyXG5cclxuICAgIGlnbm9yZVJlbGF0ZWRQcm9kdWN0c0JyYW5kKGJyYW5kTmFtZSlcclxuICAgIHtcclxuICAgICAgICBpZiAodHlwZW9mIGlqdGRfSWdub3JlQnJhbmRzICE9PSAndW5kZWZpbmVkJylcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgaWp0ZF9JZ25vcmVCcmFuZHMubGVuZ3RoOyBpKyspXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlmIChpanRkX0lnbm9yZUJyYW5kc1tpXS50b1VwcGVyQ2FzZSgpID09IGJyYW5kTmFtZS50b1VwcGVyQ2FzZSgpIHx8IGlqdGRfSWdub3JlQnJhbmRzW2ldLnRvVXBwZXJDYXNlKCkgPT0gXCJBTExcIilcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICB9XHJcblxyXG4gICAgcmVtb3ZlU3dpdGNoZWRJdGVtcyhpdGVtSWQpXHJcbiAgICB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiBDb29raWVzLmdldCgnaWp0ZF9Td2l0Y2hlZEl0ZW1zJykgPT09ICd1bmRlZmluZWQnKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgIH1cclxuICAgICAgICBlbHNlXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICB2YXIgaWp0ZF9Td2l0Y2hlZEl0ZW1zID0gQ29va2llcy5nZXQoXCJpanRkX1N3aXRjaGVkSXRlbXNcIik7XHJcbiAgICAgICAgICAgIHZhciBhcnJTd2l0Y2hlZEl0ZW1zID0gaWp0ZF9Td2l0Y2hlZEl0ZW1zLnNwbGl0KFwiLFwiKTtcclxuICAgICAgICAgICAgdmFyIGluZGV4ID0gYXJyU3dpdGNoZWRJdGVtcy5pbmRleE9mKGl0ZW1JZCk7XHJcbiAgICAgICAgICAgIGlmIChpbmRleCAhPT0gLTEpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGFyclN3aXRjaGVkSXRlbXMuc3BsaWNlKGluZGV4LCAxKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoYXJyU3dpdGNoZWRJdGVtcy5sZW5ndGggPT0gMClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgQ29va2llcy5yZW1vdmUoJ2lqdGRfU3dpdGNoZWRJdGVtcycpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgaWp0ZF9Td2l0Y2hlZEl0ZW1zID0gYXJyU3dpdGNoZWRJdGVtcy5qb2luKFwiLFwiKTtcclxuICAgICAgICAgICAgICAgIENvb2tpZXMuc2V0KFwiaWp0ZF9Td2l0Y2hlZEl0ZW1zXCIsIGlqdGRfU3dpdGNoZWRJdGVtcywgeyBleHBpcmVzOiAzMCB9KTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuXHJcbiQoZG9jdW1lbnQpLm9uKCdjbGljaycsICcuYnV0dG9uLS1pY29uJywgZnVuY3Rpb24oKXtcclxuICAgIGNhcnRJdGVtQ291bnRlcigpO1xyXG59KTtcclxuXHJcbiQoZG9jdW1lbnQpLm9uKCdjaGFuZ2UnLCAnLmNhcnQtaXRlbS1xdHktaW5wdXQnLCBmdW5jdGlvbigpe1xyXG4gICAgY2FydEl0ZW1Db3VudGVyKCk7XHJcbn0pO1xyXG5cclxuZnVuY3Rpb24gY2FydEl0ZW1Db3VudGVyKCkge1xyXG4gICAgc2V0VGltZW91dChmdW5jdGlvbigpe1xyXG4gICAgICAgIHV0aWxzLmFwaS5jYXJ0LmdldENhcnRRdWFudGl0eSh7fSwgKGVyciwgcmVzcG9uc2UpID0+IHtcclxuICAgICAgICAgICAgdmFyIGNvdW50SXRlbSA9IChwYXJzZUludChyZXNwb25zZSkgfHwgMCkgLSAocGFyc2VJbnQoJChcImkucXVhbnRpdHktNjY2N1NcIikudGV4dCgpKSB8fCAwKSAtIChwYXJzZUludCgkKFwiaS5xdWFudGl0eS02NjY4U1wiKS50ZXh0KCkpIHx8IDApO1xyXG4gICAgICAgICAgICAkKCcuY2FydC1pdGVtLWNvdW50cyBzdHJvbmcnKS50ZXh0KGNvdW50SXRlbSk7XHJcbiAgICAgIH0pO1xyXG4gICAgfSwgMjUwMCk7XHJcbn0gXHJcbiIsImltcG9ydCBzdGF0ZUNvdW50cnkgZnJvbSAnLi4vY29tbW9uL3N0YXRlLWNvdW50cnknO1xuaW1wb3J0IG5vZCBmcm9tICcuLi9jb21tb24vbm9kJztcbmltcG9ydCB1dGlscyBmcm9tICdAYmlnY29tbWVyY2Uvc3RlbmNpbC11dGlscyc7XG5pbXBvcnQgeyBWYWxpZGF0b3JzIH0gZnJvbSAnLi4vY29tbW9uL2Zvcm0tdXRpbHMnO1xuaW1wb3J0IHN3YWwgZnJvbSAnLi4vZ2xvYmFsL3N3ZWV0LWFsZXJ0JztcblxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2hpcHBpbmdFc3RpbWF0b3Ige1xuICAgIGNvbnN0cnVjdG9yKCRlbGVtZW50KSB7XG4gICAgICAgIHRoaXMuJGVsZW1lbnQgPSAkZWxlbWVudDtcblxuICAgICAgICB0aGlzLiRzdGF0ZSA9ICQoJ1tkYXRhLWZpZWxkLXR5cGU9XCJTdGF0ZVwiXScsIHRoaXMuJGVsZW1lbnQpO1xuICAgICAgICB0aGlzLmluaXRGb3JtVmFsaWRhdGlvbigpO1xuICAgICAgICB0aGlzLmJpbmRTdGF0ZUNvdW50cnlDaGFuZ2UoKTtcbiAgICAgICAgdGhpcy5iaW5kRXN0aW1hdG9yRXZlbnRzKCk7XG4gICAgfVxuXG4gICAgaW5pdEZvcm1WYWxpZGF0aW9uKCkge1xuICAgICAgICB0aGlzLnNoaXBwaW5nRXN0aW1hdG9yID0gJ2Zvcm1bZGF0YS1zaGlwcGluZy1lc3RpbWF0b3JdJztcbiAgICAgICAgdGhpcy5zaGlwcGluZ1ZhbGlkYXRvciA9IG5vZCh7XG4gICAgICAgICAgICBzdWJtaXQ6IGAke3RoaXMuc2hpcHBpbmdFc3RpbWF0b3J9IC5zaGlwcGluZy1lc3RpbWF0ZS1zdWJtaXRgLFxuICAgICAgICB9KTtcblxuICAgICAgICAkKCcuc2hpcHBpbmctZXN0aW1hdGUtc3VibWl0JywgdGhpcy4kZWxlbWVudCkub24oJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgLy8gV2hlbiBzd2l0Y2hpbmcgYmV0d2VlbiBjb3VudHJpZXMsIHRoZSBzdGF0ZS9yZWdpb24gaXMgZHluYW1pY1xuICAgICAgICAgICAgLy8gT25seSBwZXJmb3JtIGEgY2hlY2sgZm9yIGFsbCBmaWVsZHMgd2hlbiBjb3VudHJ5IGhhcyBhIHZhbHVlXG4gICAgICAgICAgICAvLyBPdGhlcndpc2UgYXJlQWxsKCd2YWxpZCcpIHdpbGwgY2hlY2sgY291bnRyeSBmb3IgdmFsaWRpdHlcbiAgICAgICAgICAgIGlmICgkKGAke3RoaXMuc2hpcHBpbmdFc3RpbWF0b3J9IHNlbGVjdFtuYW1lPVwic2hpcHBpbmctY291bnRyeVwiXWApLnZhbCgpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zaGlwcGluZ1ZhbGlkYXRvci5wZXJmb3JtQ2hlY2soKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHRoaXMuc2hpcHBpbmdWYWxpZGF0b3IuYXJlQWxsKCd2YWxpZCcpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICB9KTtcblxuICAgICAgICB0aGlzLmJpbmRWYWxpZGF0aW9uKCk7XG4gICAgICAgIHRoaXMuYmluZFN0YXRlVmFsaWRhdGlvbigpO1xuICAgICAgICB0aGlzLmJpbmRVUFNSYXRlcygpO1xuICAgIH1cblxuICAgIGJpbmRWYWxpZGF0aW9uKCkge1xuICAgICAgICB0aGlzLnNoaXBwaW5nVmFsaWRhdG9yLmFkZChbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6IGAke3RoaXMuc2hpcHBpbmdFc3RpbWF0b3J9IHNlbGVjdFtuYW1lPVwic2hpcHBpbmctY291bnRyeVwiXWAsXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6IChjYiwgdmFsKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvdW50cnlJZCA9IE51bWJlcih2YWwpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBjb3VudHJ5SWQgIT09IDAgJiYgIU51bWJlci5pc05hTihjb3VudHJ5SWQpO1xuXG4gICAgICAgICAgICAgICAgICAgIGNiKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6ICdUaGUgXFwnQ291bnRyeVxcJyBmaWVsZCBjYW5ub3QgYmUgYmxhbmsuJyxcbiAgICAgICAgICAgIH0sXG4gICAgICAgIF0pO1xuICAgIH1cblxuICAgIGJpbmRTdGF0ZVZhbGlkYXRpb24oKSB7XG4gICAgICAgIHRoaXMuc2hpcHBpbmdWYWxpZGF0b3IuYWRkKFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJChgJHt0aGlzLnNoaXBwaW5nRXN0aW1hdG9yfSBzZWxlY3RbbmFtZT1cInNoaXBwaW5nLXN0YXRlXCJdYCksXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6IChjYikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgcmVzdWx0O1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0ICRlbGUgPSAkKGAke3RoaXMuc2hpcHBpbmdFc3RpbWF0b3J9IHNlbGVjdFtuYW1lPVwic2hpcHBpbmctc3RhdGVcIl1gKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoJGVsZS5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGVsZVZhbCA9ICRlbGUudmFsKCk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IGVsZVZhbCAmJiBlbGVWYWwubGVuZ3RoICYmIGVsZVZhbCAhPT0gJ1N0YXRlL3Byb3ZpbmNlJztcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGNiKHJlc3VsdCk7XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6ICdUaGUgXFwnU3RhdGUvUHJvdmluY2VcXCcgZmllbGQgY2Fubm90IGJlIGJsYW5rLicsXG4gICAgICAgICAgICB9LFxuICAgICAgICBdKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBUb2dnbGUgYmV0d2VlbiBkZWZhdWx0IHNoaXBwaW5nIGFuZCB1cHMgc2hpcHBpbmcgcmF0ZXNcbiAgICAgKi9cbiAgICBiaW5kVVBTUmF0ZXMoKSB7XG4gICAgICAgIGNvbnN0IFVQU1JhdGVUb2dnbGUgPSAnLmVzdGltYXRvci1mb3JtLXRvZ2dsZVVQU1JhdGUnO1xuXG4gICAgICAgICQoJ2JvZHknKS5vbignY2xpY2snLCBVUFNSYXRlVG9nZ2xlLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0ICRlc3RpbWF0b3JGb3JtVXBzID0gJCgnLmVzdGltYXRvci1mb3JtLS11cHMnKTtcbiAgICAgICAgICAgIGNvbnN0ICRlc3RpbWF0b3JGb3JtRGVmYXVsdCA9ICQoJy5lc3RpbWF0b3ItZm9ybS0tZGVmYXVsdCcpO1xuXG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICAkZXN0aW1hdG9yRm9ybVVwcy50b2dnbGVDbGFzcygndS1oaWRkZW5WaXN1YWxseScpO1xuICAgICAgICAgICAgJGVzdGltYXRvckZvcm1EZWZhdWx0LnRvZ2dsZUNsYXNzKCd1LWhpZGRlblZpc3VhbGx5Jyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGJpbmRTdGF0ZUNvdW50cnlDaGFuZ2UoKSB7XG4gICAgICAgIGxldCAkbGFzdDtcblxuICAgICAgICAvLyBSZXF1ZXN0cyB0aGUgc3RhdGVzIGZvciBhIGNvdW50cnkgd2l0aCBBSkFYXG4gICAgICAgIHN0YXRlQ291bnRyeSh0aGlzLiRzdGF0ZSwgdGhpcy5jb250ZXh0LCB7IHVzZUlkRm9yU3RhdGVzOiB0cnVlIH0sIChlcnIsIGZpZWxkKSA9PiB7XG4gICAgICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgICAgICAgc3dhbCh7XG4gICAgICAgICAgICAgICAgICAgIHRleHQ6IGVycixcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2Vycm9yJyxcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihlcnIpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBjb25zdCAkZmllbGQgPSAkKGZpZWxkKTtcblxuICAgICAgICAgICAgaWYgKHRoaXMuc2hpcHBpbmdWYWxpZGF0b3IuZ2V0U3RhdHVzKHRoaXMuJHN0YXRlKSAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNoaXBwaW5nVmFsaWRhdG9yLnJlbW92ZSh0aGlzLiRzdGF0ZSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICgkbGFzdCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2hpcHBpbmdWYWxpZGF0b3IucmVtb3ZlKCRsYXN0KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCRmaWVsZC5pcygnc2VsZWN0JykpIHtcbiAgICAgICAgICAgICAgICAkbGFzdCA9IGZpZWxkO1xuICAgICAgICAgICAgICAgIHRoaXMuYmluZFN0YXRlVmFsaWRhdGlvbigpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAkZmllbGQuYXR0cigncGxhY2Vob2xkZXInLCAnU3RhdGUvcHJvdmluY2UnKTtcbiAgICAgICAgICAgICAgICBWYWxpZGF0b3JzLmNsZWFuVXBTdGF0ZVZhbGlkYXRpb24oZmllbGQpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyBXaGVuIHlvdSBjaGFuZ2UgYSBjb3VudHJ5LCB5b3Ugc3dhcCB0aGUgc3RhdGUvcHJvdmluY2UgYmV0d2VlbiBhbiBpbnB1dCBhbmQgYSBzZWxlY3QgZHJvcGRvd25cbiAgICAgICAgICAgIC8vIE5vdCBhbGwgY291bnRyaWVzIHJlcXVpcmUgdGhlIHByb3ZpbmNlIHRvIGJlIGZpbGxlZFxuICAgICAgICAgICAgLy8gV2UgaGF2ZSB0byByZW1vdmUgdGhpcyBjbGFzcyB3aGVuIHdlIHN3YXAgc2luY2Ugbm9kIHZhbGlkYXRpb24gZG9lc24ndCBjbGVhbnVwIGZvciB1c1xuICAgICAgICAgICAgJCh0aGlzLnNoaXBwaW5nRXN0aW1hdG9yKS5maW5kKCcuZm9ybS1maWVsZC0tc3VjY2VzcycpLnJlbW92ZUNsYXNzKCdmb3JtLWZpZWxkLS1zdWNjZXNzJyk7XG4gICAgICAgIH0pO1xuICAgIH1cblxuICAgIGJpbmRFc3RpbWF0b3JFdmVudHMoKSB7XG4gICAgICAgIGNvbnN0ICRlc3RpbWF0b3JDb250YWluZXIgPSAkKCcuc2hpcHBpbmctZXN0aW1hdG9yJyk7XG4gICAgICAgIGNvbnN0ICRlc3RpbWF0b3JGb3JtID0gJCgnLmVzdGltYXRvci1mb3JtJyk7XG5cbiAgICAgICAgJGVzdGltYXRvckZvcm0ub24oJ3N1Ym1pdCcsIGV2ZW50ID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHBhcmFtcyA9IHtcbiAgICAgICAgICAgICAgICBjb3VudHJ5X2lkOiAkKCdbbmFtZT1cInNoaXBwaW5nLWNvdW50cnlcIl0nLCAkZXN0aW1hdG9yRm9ybSkudmFsKCksXG4gICAgICAgICAgICAgICAgc3RhdGVfaWQ6ICQoJ1tuYW1lPVwic2hpcHBpbmctc3RhdGVcIl0nLCAkZXN0aW1hdG9yRm9ybSkudmFsKCksXG4gICAgICAgICAgICAgICAgY2l0eTogJCgnW25hbWU9XCJzaGlwcGluZy1jaXR5XCJdJywgJGVzdGltYXRvckZvcm0pLnZhbCgpLFxuICAgICAgICAgICAgICAgIHppcF9jb2RlOiAkKCdbbmFtZT1cInNoaXBwaW5nLXppcFwiXScsICRlc3RpbWF0b3JGb3JtKS52YWwoKSxcbiAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgICAgICAgICAgIHV0aWxzLmFwaS5jYXJ0LmdldFNoaXBwaW5nUXVvdGVzKHBhcmFtcywgJ2NhcnQvc2hpcHBpbmctcXVvdGVzJywgKGVyciwgcmVzcG9uc2UpID0+IHtcbiAgICAgICAgICAgICAgICAkKCcuc2hpcHBpbmctcXVvdGVzJykuaHRtbChyZXNwb25zZS5jb250ZW50KTtcblxuICAgICAgICAgICAgICAgIC8vIGJpbmQgdGhlIHNlbGVjdCBidXR0b25cbiAgICAgICAgICAgICAgICAkKCcuc2VsZWN0LXNoaXBwaW5nLXF1b3RlJykub24oJ2NsaWNrJywgY2xpY2tFdmVudCA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHF1b3RlSWQgPSAkKCcuc2hpcHBpbmctcXVvdGU6Y2hlY2tlZCcpLnZhbCgpO1xuXG4gICAgICAgICAgICAgICAgICAgIGNsaWNrRXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgICAgICAgICB1dGlscy5hcGkuY2FydC5zdWJtaXRTaGlwcGluZ1F1b3RlKHF1b3RlSWQsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgJCgnLnNoaXBwaW5nLWVzdGltYXRlLXNob3cnKS5vbignY2xpY2snLCBldmVudCA9PiB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuXG4gICAgICAgICAgICAkKGV2ZW50LmN1cnJlbnRUYXJnZXQpLmhpZGUoKTtcbiAgICAgICAgICAgICRlc3RpbWF0b3JDb250YWluZXIucmVtb3ZlQ2xhc3MoJ3UtaGlkZGVuVmlzdWFsbHknKTtcbiAgICAgICAgICAgICQoJy5zaGlwcGluZy1lc3RpbWF0ZS1oaWRlJykuc2hvdygpO1xuICAgICAgICB9KTtcblxuXG4gICAgICAgICQoJy5zaGlwcGluZy1lc3RpbWF0ZS1oaWRlJykub24oJ2NsaWNrJywgZXZlbnQgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcblxuICAgICAgICAgICAgJGVzdGltYXRvckNvbnRhaW5lci5hZGRDbGFzcygndS1oaWRkZW5WaXN1YWxseScpO1xuICAgICAgICAgICAgJCgnLnNoaXBwaW5nLWVzdGltYXRlLXNob3cnKS5zaG93KCk7XG4gICAgICAgICAgICAkKCcuc2hpcHBpbmctZXN0aW1hdGUtaGlkZScpLmhpZGUoKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKGNlcnQpIHtcbiAgICBpZiAodHlwZW9mIGNlcnQgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyBBZGQgYW55IGN1c3RvbSBnaWZ0IGNlcnRpZmljYXRlIHZhbGlkYXRpb24gbG9naWMgaGVyZVxuICAgIHJldHVybiB0cnVlO1xufVxuIiwiaW1wb3J0IHN3ZWV0QWxlcnQgZnJvbSAnc3dlZXRhbGVydDInO1xuXG4vLyBTZXQgZGVmYXVsdHMgZm9yIHN3ZWV0YWxlcnQyIHBvcHVwIGJveGVzXG5zd2VldEFsZXJ0LnNldERlZmF1bHRzKHtcbiAgICBidXR0b25zU3R5bGluZzogZmFsc2UsXG4gICAgY29uZmlybUJ1dHRvbkNsYXNzOiAnYnV0dG9uJyxcbiAgICBjYW5jZWxCdXR0b25DbGFzczogJ2J1dHRvbicsXG59KTtcblxuLy8gUmUtZXhwb3J0XG5leHBvcnQgZGVmYXVsdCBzd2VldEFsZXJ0O1xuIiwiLy8gMjAuMS4yLjQgTnVtYmVyLmlzTmFOKG51bWJlcilcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG5cbiRleHBvcnQoJGV4cG9ydC5TLCAnTnVtYmVyJywge1xuICBpc05hTjogZnVuY3Rpb24gaXNOYU4obnVtYmVyKSB7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXNlbGYtY29tcGFyZVxuICAgIHJldHVybiBudW1iZXIgIT0gbnVtYmVyO1xuICB9XG59KTtcbiIsIi8vIDIxLjIuNS4zIGdldCBSZWdFeHAucHJvdG90eXBlLmZsYWdzKClcbmlmIChyZXF1aXJlKCcuL19kZXNjcmlwdG9ycycpICYmIC8uL2cuZmxhZ3MgIT0gJ2cnKSByZXF1aXJlKCcuL19vYmplY3QtZHAnKS5mKFJlZ0V4cC5wcm90b3R5cGUsICdmbGFncycsIHtcbiAgY29uZmlndXJhYmxlOiB0cnVlLFxuICBnZXQ6IHJlcXVpcmUoJy4vX2ZsYWdzJylcbn0pO1xuIiwiJ3VzZSBzdHJpY3QnO1xucmVxdWlyZSgnLi9lczYucmVnZXhwLmZsYWdzJyk7XG52YXIgYW5PYmplY3QgPSByZXF1aXJlKCcuL19hbi1vYmplY3QnKTtcbnZhciAkZmxhZ3MgPSByZXF1aXJlKCcuL19mbGFncycpO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKTtcbnZhciBUT19TVFJJTkcgPSAndG9TdHJpbmcnO1xudmFyICR0b1N0cmluZyA9IC8uL1tUT19TVFJJTkddO1xuXG52YXIgZGVmaW5lID0gZnVuY3Rpb24gKGZuKSB7XG4gIHJlcXVpcmUoJy4vX3JlZGVmaW5lJykoUmVnRXhwLnByb3RvdHlwZSwgVE9fU1RSSU5HLCBmbiwgdHJ1ZSk7XG59O1xuXG4vLyAyMS4yLjUuMTQgUmVnRXhwLnByb3RvdHlwZS50b1N0cmluZygpXG5pZiAocmVxdWlyZSgnLi9fZmFpbHMnKShmdW5jdGlvbiAoKSB7IHJldHVybiAkdG9TdHJpbmcuY2FsbCh7IHNvdXJjZTogJ2EnLCBmbGFnczogJ2InIH0pICE9ICcvYS9iJzsgfSkpIHtcbiAgZGVmaW5lKGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHZhciBSID0gYW5PYmplY3QodGhpcyk7XG4gICAgcmV0dXJuICcvJy5jb25jYXQoUi5zb3VyY2UsICcvJyxcbiAgICAgICdmbGFncycgaW4gUiA/IFIuZmxhZ3MgOiAhREVTQ1JJUFRPUlMgJiYgUiBpbnN0YW5jZW9mIFJlZ0V4cCA/ICRmbGFncy5jYWxsKFIpIDogdW5kZWZpbmVkKTtcbiAgfSk7XG4vLyBGRjQ0LSBSZWdFeHAjdG9TdHJpbmcgaGFzIGEgd3JvbmcgbmFtZVxufSBlbHNlIGlmICgkdG9TdHJpbmcubmFtZSAhPSBUT19TVFJJTkcpIHtcbiAgZGVmaW5lKGZ1bmN0aW9uIHRvU3RyaW5nKCkge1xuICAgIHJldHVybiAkdG9TdHJpbmcuY2FsbCh0aGlzKTtcbiAgfSk7XG59XG4iLCJ2YXIgYmFzZUNyZWF0ZSA9IHJlcXVpcmUoJy4vX2Jhc2VDcmVhdGUnKSxcbiAgICBpc09iamVjdCA9IHJlcXVpcmUoJy4vaXNPYmplY3QnKTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgZnVuY3Rpb24gdGhhdCBwcm9kdWNlcyBhbiBpbnN0YW5jZSBvZiBgQ3RvcmAgcmVnYXJkbGVzcyBvZlxuICogd2hldGhlciBpdCB3YXMgaW52b2tlZCBhcyBwYXJ0IG9mIGEgYG5ld2AgZXhwcmVzc2lvbiBvciBieSBgY2FsbGAgb3IgYGFwcGx5YC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtGdW5jdGlvbn0gQ3RvciBUaGUgY29uc3RydWN0b3IgdG8gd3JhcC5cbiAqIEByZXR1cm5zIHtGdW5jdGlvbn0gUmV0dXJucyB0aGUgbmV3IHdyYXBwZWQgZnVuY3Rpb24uXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZUN0b3IoQ3Rvcikge1xuICByZXR1cm4gZnVuY3Rpb24oKSB7XG4gICAgLy8gVXNlIGEgYHN3aXRjaGAgc3RhdGVtZW50IHRvIHdvcmsgd2l0aCBjbGFzcyBjb25zdHJ1Y3RvcnMuIFNlZVxuICAgIC8vIGh0dHA6Ly9lY21hLWludGVybmF0aW9uYWwub3JnL2VjbWEtMjYyLzcuMC8jc2VjLWVjbWFzY3JpcHQtZnVuY3Rpb24tb2JqZWN0cy1jYWxsLXRoaXNhcmd1bWVudC1hcmd1bWVudHNsaXN0XG4gICAgLy8gZm9yIG1vcmUgZGV0YWlscy5cbiAgICB2YXIgYXJncyA9IGFyZ3VtZW50cztcbiAgICBzd2l0Y2ggKGFyZ3MubGVuZ3RoKSB7XG4gICAgICBjYXNlIDA6IHJldHVybiBuZXcgQ3RvcjtcbiAgICAgIGNhc2UgMTogcmV0dXJuIG5ldyBDdG9yKGFyZ3NbMF0pO1xuICAgICAgY2FzZSAyOiByZXR1cm4gbmV3IEN0b3IoYXJnc1swXSwgYXJnc1sxXSk7XG4gICAgICBjYXNlIDM6IHJldHVybiBuZXcgQ3RvcihhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdKTtcbiAgICAgIGNhc2UgNDogcmV0dXJuIG5ldyBDdG9yKGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0sIGFyZ3NbM10pO1xuICAgICAgY2FzZSA1OiByZXR1cm4gbmV3IEN0b3IoYXJnc1swXSwgYXJnc1sxXSwgYXJnc1syXSwgYXJnc1szXSwgYXJnc1s0XSk7XG4gICAgICBjYXNlIDY6IHJldHVybiBuZXcgQ3RvcihhcmdzWzBdLCBhcmdzWzFdLCBhcmdzWzJdLCBhcmdzWzNdLCBhcmdzWzRdLCBhcmdzWzVdKTtcbiAgICAgIGNhc2UgNzogcmV0dXJuIG5ldyBDdG9yKGFyZ3NbMF0sIGFyZ3NbMV0sIGFyZ3NbMl0sIGFyZ3NbM10sIGFyZ3NbNF0sIGFyZ3NbNV0sIGFyZ3NbNl0pO1xuICAgIH1cbiAgICB2YXIgdGhpc0JpbmRpbmcgPSBiYXNlQ3JlYXRlKEN0b3IucHJvdG90eXBlKSxcbiAgICAgICAgcmVzdWx0ID0gQ3Rvci5hcHBseSh0aGlzQmluZGluZywgYXJncyk7XG5cbiAgICAvLyBNaW1pYyB0aGUgY29uc3RydWN0b3IncyBgcmV0dXJuYCBiZWhhdmlvci5cbiAgICAvLyBTZWUgaHR0cHM6Ly9lczUuZ2l0aHViLmlvLyN4MTMuMi4yIGZvciBtb3JlIGRldGFpbHMuXG4gICAgcmV0dXJuIGlzT2JqZWN0KHJlc3VsdCkgPyByZXN1bHQgOiB0aGlzQmluZGluZztcbiAgfTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVDdG9yO1xuIiwidmFyIGFwcGx5ID0gcmVxdWlyZSgnLi9fYXBwbHknKSxcbiAgICBjcmVhdGVDdG9yID0gcmVxdWlyZSgnLi9fY3JlYXRlQ3RvcicpLFxuICAgIHJvb3QgPSByZXF1aXJlKCcuL19yb290Jyk7XG5cbi8qKiBVc2VkIHRvIGNvbXBvc2UgYml0bWFza3MgZm9yIGZ1bmN0aW9uIG1ldGFkYXRhLiAqL1xudmFyIFdSQVBfQklORF9GTEFHID0gMTtcblxuLyoqXG4gKiBDcmVhdGVzIGEgZnVuY3Rpb24gdGhhdCB3cmFwcyBgZnVuY2AgdG8gaW52b2tlIGl0IHdpdGggdGhlIGB0aGlzYCBiaW5kaW5nXG4gKiBvZiBgdGhpc0FyZ2AgYW5kIGBwYXJ0aWFsc2AgcHJlcGVuZGVkIHRvIHRoZSBhcmd1bWVudHMgaXQgcmVjZWl2ZXMuXG4gKlxuICogQHByaXZhdGVcbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIHdyYXAuXG4gKiBAcGFyYW0ge251bWJlcn0gYml0bWFzayBUaGUgYml0bWFzayBmbGFncy4gU2VlIGBjcmVhdGVXcmFwYCBmb3IgbW9yZSBkZXRhaWxzLlxuICogQHBhcmFtIHsqfSB0aGlzQXJnIFRoZSBgdGhpc2AgYmluZGluZyBvZiBgZnVuY2AuXG4gKiBAcGFyYW0ge0FycmF5fSBwYXJ0aWFscyBUaGUgYXJndW1lbnRzIHRvIHByZXBlbmQgdG8gdGhvc2UgcHJvdmlkZWQgdG9cbiAqICB0aGUgbmV3IGZ1bmN0aW9uLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgd3JhcHBlZCBmdW5jdGlvbi5cbiAqL1xuZnVuY3Rpb24gY3JlYXRlUGFydGlhbChmdW5jLCBiaXRtYXNrLCB0aGlzQXJnLCBwYXJ0aWFscykge1xuICB2YXIgaXNCaW5kID0gYml0bWFzayAmIFdSQVBfQklORF9GTEFHLFxuICAgICAgQ3RvciA9IGNyZWF0ZUN0b3IoZnVuYyk7XG5cbiAgZnVuY3Rpb24gd3JhcHBlcigpIHtcbiAgICB2YXIgYXJnc0luZGV4ID0gLTEsXG4gICAgICAgIGFyZ3NMZW5ndGggPSBhcmd1bWVudHMubGVuZ3RoLFxuICAgICAgICBsZWZ0SW5kZXggPSAtMSxcbiAgICAgICAgbGVmdExlbmd0aCA9IHBhcnRpYWxzLmxlbmd0aCxcbiAgICAgICAgYXJncyA9IEFycmF5KGxlZnRMZW5ndGggKyBhcmdzTGVuZ3RoKSxcbiAgICAgICAgZm4gPSAodGhpcyAmJiB0aGlzICE9PSByb290ICYmIHRoaXMgaW5zdGFuY2VvZiB3cmFwcGVyKSA/IEN0b3IgOiBmdW5jO1xuXG4gICAgd2hpbGUgKCsrbGVmdEluZGV4IDwgbGVmdExlbmd0aCkge1xuICAgICAgYXJnc1tsZWZ0SW5kZXhdID0gcGFydGlhbHNbbGVmdEluZGV4XTtcbiAgICB9XG4gICAgd2hpbGUgKGFyZ3NMZW5ndGgtLSkge1xuICAgICAgYXJnc1tsZWZ0SW5kZXgrK10gPSBhcmd1bWVudHNbKythcmdzSW5kZXhdO1xuICAgIH1cbiAgICByZXR1cm4gYXBwbHkoZm4sIGlzQmluZCA/IHRoaXNBcmcgOiB0aGlzLCBhcmdzKTtcbiAgfVxuICByZXR1cm4gd3JhcHBlcjtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBjcmVhdGVQYXJ0aWFsO1xuIiwiLyoqXG4gKiBUaGlzIG1ldGhvZCByZXR1cm5zIGB1bmRlZmluZWRgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMi4zLjBcbiAqIEBjYXRlZ29yeSBVdGlsXG4gKiBAZXhhbXBsZVxuICpcbiAqIF8udGltZXMoMiwgXy5ub29wKTtcbiAqIC8vID0+IFt1bmRlZmluZWQsIHVuZGVmaW5lZF1cbiAqL1xuZnVuY3Rpb24gbm9vcCgpIHtcbiAgLy8gTm8gb3BlcmF0aW9uIHBlcmZvcm1lZC5cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBub29wO1xuIiwiLyoqXG4gKiBUaGlzIG1ldGhvZCByZXR1cm5zIGEgbmV3IGVtcHR5IGFycmF5LlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgNC4xMy4wXG4gKiBAY2F0ZWdvcnkgVXRpbFxuICogQHJldHVybnMge0FycmF5fSBSZXR1cm5zIHRoZSBuZXcgZW1wdHkgYXJyYXkuXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBhcnJheXMgPSBfLnRpbWVzKDIsIF8uc3R1YkFycmF5KTtcbiAqXG4gKiBjb25zb2xlLmxvZyhhcnJheXMpO1xuICogLy8gPT4gW1tdLCBbXV1cbiAqXG4gKiBjb25zb2xlLmxvZyhhcnJheXNbMF0gPT09IGFycmF5c1sxXSk7XG4gKiAvLyA9PiBmYWxzZVxuICovXG5mdW5jdGlvbiBzdHViQXJyYXkoKSB7XG4gIHJldHVybiBbXTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHViQXJyYXk7XG4iLCJ2YXIgYmFzZVJlc3QgPSByZXF1aXJlKCcuL19iYXNlUmVzdCcpLFxuICAgIGNyZWF0ZVdyYXAgPSByZXF1aXJlKCcuL19jcmVhdGVXcmFwJyksXG4gICAgZ2V0SG9sZGVyID0gcmVxdWlyZSgnLi9fZ2V0SG9sZGVyJyksXG4gICAgcmVwbGFjZUhvbGRlcnMgPSByZXF1aXJlKCcuL19yZXBsYWNlSG9sZGVycycpO1xuXG4vKiogVXNlZCB0byBjb21wb3NlIGJpdG1hc2tzIGZvciBmdW5jdGlvbiBtZXRhZGF0YS4gKi9cbnZhciBXUkFQX0JJTkRfRkxBRyA9IDEsXG4gICAgV1JBUF9QQVJUSUFMX0ZMQUcgPSAzMjtcblxuLyoqXG4gKiBDcmVhdGVzIGEgZnVuY3Rpb24gdGhhdCBpbnZva2VzIGBmdW5jYCB3aXRoIHRoZSBgdGhpc2AgYmluZGluZyBvZiBgdGhpc0FyZ2BcbiAqIGFuZCBgcGFydGlhbHNgIHByZXBlbmRlZCB0byB0aGUgYXJndW1lbnRzIGl0IHJlY2VpdmVzLlxuICpcbiAqIFRoZSBgXy5iaW5kLnBsYWNlaG9sZGVyYCB2YWx1ZSwgd2hpY2ggZGVmYXVsdHMgdG8gYF9gIGluIG1vbm9saXRoaWMgYnVpbGRzLFxuICogbWF5IGJlIHVzZWQgYXMgYSBwbGFjZWhvbGRlciBmb3IgcGFydGlhbGx5IGFwcGxpZWQgYXJndW1lbnRzLlxuICpcbiAqICoqTm90ZToqKiBVbmxpa2UgbmF0aXZlIGBGdW5jdGlvbiNiaW5kYCwgdGhpcyBtZXRob2QgZG9lc24ndCBzZXQgdGhlIFwibGVuZ3RoXCJcbiAqIHByb3BlcnR5IG9mIGJvdW5kIGZ1bmN0aW9ucy5cbiAqXG4gKiBAc3RhdGljXG4gKiBAbWVtYmVyT2YgX1xuICogQHNpbmNlIDAuMS4wXG4gKiBAY2F0ZWdvcnkgRnVuY3Rpb25cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGJpbmQuXG4gKiBAcGFyYW0geyp9IHRoaXNBcmcgVGhlIGB0aGlzYCBiaW5kaW5nIG9mIGBmdW5jYC5cbiAqIEBwYXJhbSB7Li4uKn0gW3BhcnRpYWxzXSBUaGUgYXJndW1lbnRzIHRvIGJlIHBhcnRpYWxseSBhcHBsaWVkLlxuICogQHJldHVybnMge0Z1bmN0aW9ufSBSZXR1cm5zIHRoZSBuZXcgYm91bmQgZnVuY3Rpb24uXG4gKiBAZXhhbXBsZVxuICpcbiAqIGZ1bmN0aW9uIGdyZWV0KGdyZWV0aW5nLCBwdW5jdHVhdGlvbikge1xuICogICByZXR1cm4gZ3JlZXRpbmcgKyAnICcgKyB0aGlzLnVzZXIgKyBwdW5jdHVhdGlvbjtcbiAqIH1cbiAqXG4gKiB2YXIgb2JqZWN0ID0geyAndXNlcic6ICdmcmVkJyB9O1xuICpcbiAqIHZhciBib3VuZCA9IF8uYmluZChncmVldCwgb2JqZWN0LCAnaGknKTtcbiAqIGJvdW5kKCchJyk7XG4gKiAvLyA9PiAnaGkgZnJlZCEnXG4gKlxuICogLy8gQm91bmQgd2l0aCBwbGFjZWhvbGRlcnMuXG4gKiB2YXIgYm91bmQgPSBfLmJpbmQoZ3JlZXQsIG9iamVjdCwgXywgJyEnKTtcbiAqIGJvdW5kKCdoaScpO1xuICogLy8gPT4gJ2hpIGZyZWQhJ1xuICovXG52YXIgYmluZCA9IGJhc2VSZXN0KGZ1bmN0aW9uKGZ1bmMsIHRoaXNBcmcsIHBhcnRpYWxzKSB7XG4gIHZhciBiaXRtYXNrID0gV1JBUF9CSU5EX0ZMQUc7XG4gIGlmIChwYXJ0aWFscy5sZW5ndGgpIHtcbiAgICB2YXIgaG9sZGVycyA9IHJlcGxhY2VIb2xkZXJzKHBhcnRpYWxzLCBnZXRIb2xkZXIoYmluZCkpO1xuICAgIGJpdG1hc2sgfD0gV1JBUF9QQVJUSUFMX0ZMQUc7XG4gIH1cbiAgcmV0dXJuIGNyZWF0ZVdyYXAoZnVuYywgYml0bWFzaywgdGhpc0FyZywgcGFydGlhbHMsIGhvbGRlcnMpO1xufSk7XG5cbi8vIEFzc2lnbiBkZWZhdWx0IHBsYWNlaG9sZGVycy5cbmJpbmQucGxhY2Vob2xkZXIgPSB7fTtcblxubW9kdWxlLmV4cG9ydHMgPSBiaW5kO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==