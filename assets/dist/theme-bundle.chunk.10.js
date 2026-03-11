(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[10],{

/***/ "./assets/js/theme/category.js":
/*!*************************************!*\
  !*** ./assets/js/theme/category.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Category; });
/* harmony import */ var core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.array.find.js */ "./node_modules/core-js/modules/es6.array.find.js");
/* harmony import */ var core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_array_map_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.array.map.js */ "./node_modules/core-js/modules/es6.array.map.js");
/* harmony import */ var core_js_modules_es6_array_map_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_map_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_function_name_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.function.name.js */ "./node_modules/core-js/modules/es6.function.name.js");
/* harmony import */ var core_js_modules_es6_function_name_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es6_set_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es6.set.js */ "./node_modules/core-js/modules/es6.set.js");
/* harmony import */ var core_js_modules_es6_set_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_set_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es6_string_iterator_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/es6.string.iterator.js */ "./node_modules/core-js/modules/es6.string.iterator.js");
/* harmony import */ var core_js_modules_es6_string_iterator_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_iterator_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es6_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es6.object.to-string.js */ "./node_modules/core-js/modules/es6.object.to-string.js");
/* harmony import */ var core_js_modules_es6_object_to_string_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_to_string_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es6_array_iterator_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es6.array.iterator.js */ "./node_modules/core-js/modules/es6.array.iterator.js");
/* harmony import */ var core_js_modules_es6_array_iterator_js__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_iterator_js__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_web_dom_iterable_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! core-js/modules/web.dom.iterable.js */ "./node_modules/core-js/modules/web.dom.iterable.js");
/* harmony import */ var core_js_modules_web_dom_iterable_js__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable_js__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_es6_regexp_search_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! core-js/modules/es6.regexp.search.js */ "./node_modules/core-js/modules/es6.regexp.search.js");
/* harmony import */ var core_js_modules_es6_regexp_search_js__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_search_js__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es6_array_slice_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! core-js/modules/es6.array.slice.js */ "./node_modules/core-js/modules/es6.array.slice.js");
/* harmony import */ var core_js_modules_es6_array_slice_js__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_slice_js__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es6_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! core-js/modules/es6.object.set-prototype-of.js */ "./node_modules/core-js/modules/es6.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es6_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @bigcommerce/stencil-utils */ "./node_modules/@bigcommerce/stencil-utils/src/main.js");
/* harmony import */ var _catalog__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./catalog */ "./assets/js/theme/catalog.js");
/* harmony import */ var _global_compare_products__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./global/compare-products */ "./assets/js/theme/global/compare-products.js");
/* harmony import */ var _common_faceted_search__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./common/faceted-search */ "./assets/js/theme/common/faceted-search.js");
/* harmony import */ var _theme_common_utils_translations_utils__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ../theme/common/utils/translations-utils */ "./assets/js/theme/common/utils/translations-utils.js");
/* harmony import */ var foundation_sites_js_foundation_foundation__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! foundation-sites/js/foundation/foundation */ "./node_modules/foundation-sites/js/foundation/foundation.js");
/* harmony import */ var foundation_sites_js_foundation_foundation__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(foundation_sites_js_foundation_foundation__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var foundation_sites_js_foundation_foundation_reveal__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! foundation-sites/js/foundation/foundation.reveal */ "./node_modules/foundation-sites/js/foundation/foundation.reveal.js");
/* harmony import */ var foundation_sites_js_foundation_foundation_reveal__WEBPACK_IMPORTED_MODULE_17___default = /*#__PURE__*/__webpack_require__.n(foundation_sites_js_foundation_foundation_reveal__WEBPACK_IMPORTED_MODULE_17__);
/* harmony import */ var _fancyapps_fancybox_dist_jquery_fancybox_min__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! @fancyapps/fancybox/dist/jquery.fancybox.min */ "./node_modules/@fancyapps/fancybox/dist/jquery.fancybox.min.js");
/* harmony import */ var _fancyapps_fancybox_dist_jquery_fancybox_min__WEBPACK_IMPORTED_MODULE_18___default = /*#__PURE__*/__webpack_require__.n(_fancyapps_fancybox_dist_jquery_fancybox_min__WEBPACK_IMPORTED_MODULE_18__);
/* harmony import */ var _fancyapps_fancybox_dist_jquery_fancybox_min_css__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! @fancyapps/fancybox/dist/jquery.fancybox.min.css */ "./node_modules/@fancyapps/fancybox/dist/jquery.fancybox.min.css");
/* harmony import */ var _fancyapps_fancybox_dist_jquery_fancybox_min_css__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(_fancyapps_fancybox_dist_jquery_fancybox_min_css__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var alertify_js_src_js_alertify__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! alertify.js/src/js/alertify */ "./node_modules/alertify.js/src/js/alertify.js");
/* harmony import */ var alertify_js_src_js_alertify__WEBPACK_IMPORTED_MODULE_20___default = /*#__PURE__*/__webpack_require__.n(alertify_js_src_js_alertify__WEBPACK_IMPORTED_MODULE_20__);
/* harmony import */ var alertify_js_src_css_alertify_css__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! alertify.js/src/css/alertify.css */ "./node_modules/alertify.js/src/css/alertify.css");
/* harmony import */ var alertify_js_src_css_alertify_css__WEBPACK_IMPORTED_MODULE_21___default = /*#__PURE__*/__webpack_require__.n(alertify_js_src_css_alertify_css__WEBPACK_IMPORTED_MODULE_21__);
/* harmony import */ var _global_modal__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./global/modal */ "./assets/js/theme/global/modal.js");











function _inheritsLoose(t, o) { t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }










$.fancybox.defaults.hash = false;



var Category = /*#__PURE__*/function (_CatalogPage) {
  function Category(context) {
    var $form = $('form[data-cart-item-add]');
    return _CatalogPage.call(this, context) || this; // this.validationDictionary = createTranslationDictionary(context);
  }
  _inheritsLoose(Category, _CatalogPage);
  var _proto = Category.prototype;
  _proto.setLiveRegionAttributes = function setLiveRegionAttributes($element, roleType, ariaLiveStatus) {
    $element.attr({
      role: roleType,
      'aria-live': ariaLiveStatus
    });
  };
  _proto.makeShopByPriceFilterAccessible = function makeShopByPriceFilterAccessible() {
    var _this = this;
    if (!$('[data-shop-by-price]').length) return;
    if ($('.navList-action').hasClass('is-active')) {
      $('a.navList-action.is-active').focus();
    }
    $('a.navList-action').on('click', function () {
      return _this.setLiveRegionAttributes($('span.price-filter-message'), 'status', 'assertive');
    });
  }

  // Add page yields title to any product card with page-yield custom fields
;
  _proto.setPageYieldsTitle = function setPageYieldsTitle() {
    var $productCards = $('.js-product');
    $productCards.each(function () {
      if ($(this).find('.js-page-yield-details').length === 0) {
        $(this).find('.js-page-yield-title').css('display', 'none');
      }
    });
  };
  _proto.displayBrandFilters = function displayBrandFilters() {
    var _this2 = this;
    // Perform check to see if there are multiple different brands of products, and don't display the filters if there isn't
    var productBrandsArray = this.context.products.map(function (product) {
      return product.brand.name;
    });
    var productBrandsSet = new Set(productBrandsArray);
    if (productBrandsSet.size <= 1) {
      return;
    }
    var modal = Object(_global_modal__WEBPACK_IMPORTED_MODULE_22__["defaultModal"])();

    // Create brand selector options at top of page
    var $brandSelector = $(this.getBrandSelectorElement());
    var $cartridgeList = $('#cartridgeListing');
    $brandSelector.insertBefore($cartridgeList);

    // Look for brandFilter parameter in URL
    var params = new URLSearchParams(window.location.search);
    var brandFilter = params.get('brandFilter');
    if (!brandFilter) {
      // Display modal to select filter if no filter already present
      this.showFilterModal(modal);
    } else if (brandFilter === 'all') {
      this.setBrandFilter('all');
    } else if (brandFilter === 'ijt') {
      this.setBrandFilter('ijt');
    } else if (brandFilter === 'original') {
      this.setBrandFilter('original');
    }

    // Set brand selector buttons to run setBrandFilter function
    $('.js-ijt-brand-selector').on('click', function () {
      return _this2.setBrandFilter('ijt', modal);
    });
    $('.js-original-brand-selector').on('click', function () {
      return _this2.setBrandFilter('original', modal);
    });
    $('.js-all-brand-selector').on('click', function () {
      return _this2.setBrandFilter('all', modal);
    });
  };
  _proto.getBrandSelectorElement = function getBrandSelectorElement() {
    return "<div class=\"brand-selector\">\n            <h3 class=\"brand-selector__header\">What products would you like to view?</h3>\n            <div class=\"brand-selector__options\">\n                <button class=\"button button--primary js-ijt-brand-selector\">IJT Branded<br>Consumables</button>\n                <button class=\"button button--primary js-original-brand-selector\">Original<br>Consumables</button>\n                <button class=\"button button--primary js-all-brand-selector\">All<br>Consumables</button>\n            </div>\n        </div>";
  };
  _proto.showFilterModal = function showFilterModal(modal) {
    modal.open();
    modal.updateContent(this.getBrandSelectorElement());
    $('#modal').addClass('modal--brand-filter');
    this.filterProductsByBrand('modalLoad');
  };
  _proto.setBrandFilter = function setBrandFilter(filter, modal) {
    // Set brandFilter URL parameter
    var url = new URL(window.location.href);
    url.searchParams.set('brandFilter', filter);
    window.history.replaceState(null, null, url);
    this.filterProductsByBrand(filter);
    if (modal) {
      modal.close();
    }
  };
  _proto.filterProductsByBrand = function filterProductsByBrand(filter) {
    var $ijtCartridgeList = $('#ijt-brand-cartridge-list');
    var $brandedCartridgeList = $('#original-brand-cartridge-list');
    var $ijtBrandButton = $('.js-ijt-brand-selector');
    var $originalBrandButton = $('.js-original-brand-selector');
    var $allBrandButton = $('.js-all-brand-selector');
    switch (filter) {
      case "modalLoad":
        // Place original brand cartridges before IJT brand
        $ijtCartridgeList.show();
        $brandedCartridgeList.show();
        // $ijtCartridgeList.insertAfter($brandedCartridgeList);
        $('#ijt-brand-cartridge-list').removeClass('all-order');
        $('#original-brand-cartridge-list').removeClass('all-order');
        $('#original-brand-cartridge-list').addClass('all-order');
        $('#ijt-brand-cartridge-list').addClass('all-order');
        break;
      case "all":
        // Place original brand cartridges before IJT brand
        $ijtCartridgeList.show();
        $brandedCartridgeList.show();
        $('#ijt-brand-cartridge-list').removeClass('all-order');
        $('#original-brand-cartridge-list').removeClass('all-order');
        $('#original-brand-cartridge-list').addClass('all-order');
        $('#ijt-brand-cartridge-list').addClass('all-order');
        // $ijtCartridgeList.insertAfter($brandedCartridgeList);

        // Set selected styles on buttons in the filter
        $allBrandButton.addClass('filter-selected');
        $originalBrandButton.removeClass('filter-selected');
        $ijtBrandButton.removeClass('filter-selected');
        break;
      case "ijt":
        // Show IJT cartridges and hide original brand cartridges
        $ijtCartridgeList.show();
        $brandedCartridgeList.hide();
        $('#ijt-brand-cartridge-list').removeClass('all-order');
        $('#original-brand-cartridge-list').removeClass('all-order');
        // Set selected styles on buttons in the filter
        $ijtBrandButton.addClass('filter-selected');
        $originalBrandButton.removeClass('filter-selected');
        $allBrandButton.removeClass('filter-selected');
        break;
      case "original":
        // Show original cartridges and hide IJT brand cartridges
        $ijtCartridgeList.hide();
        $brandedCartridgeList.show();
        $('#ijt-brand-cartridge-list').removeClass('all-order');
        $('#original-brand-cartridge-list').removeClass('all-order');

        // Set selected styles on buttons in the filter
        $originalBrandButton.addClass('filter-selected');
        $ijtBrandButton.removeClass('filter-selected');
        $allBrandButton.removeClass('filter-selected');
    }
  };
  _proto.onReady = function onReady() {
    var _this3 = this;
    this.arrangeFocusOnSortBy();
    this.setPageYieldsTitle();
    this.arrangeCategoryDescription();
    $('[data-button-type="add-cart"]').on('click', function (e) {
      return _this3.setLiveRegionAttributes($(e.currentTarget).next(), 'status', 'polite');
    });
    this.makeShopByPriceFilterAccessible();
    if ($('#facetedSearch').length > 0) {
      // this.initFacetedSearch();
    } else {
      this.onSortBySubmit = this.onSortBySubmit.bind(this);
      _bigcommerce_stencil_utils__WEBPACK_IMPORTED_MODULE_11__["hooks"].on('sortBy-submitted', this.onSortBySubmit);
    }
    $('a.reset-btn').on('click', function () {
      return _this3.setLiveRegionsAttributes($('span.reset-message'), 'status', 'polite');
    });
    this.ariaNotifyNoProducts();
    this.toggleFacets();
    this.toggleQuantity();
    this.arrangeCategorySeo();
    // Check if cartridge lister page is for a HP brand printer
    if (this.context.cartridgeBrand === 'HP') {
      this.displayBrandFilters();
    }
    $('#button-showmore-category').on('click', function () {
      $("ul.cartridge-series-list li:hidden").slice(0, 10).show();
      if ($("ul.cartridge-series-list li:hidden").length == 0) {
        $('#button-showmore-category').hide();
      }
    });
  };
  _proto.arrangeCategorySeo = function arrangeCategorySeo() {
    if ($('#seotext').length > 0) {
      var specSeo = document.getElementById("seotext");
      var specElementSeo = document.getElementById("cartridge-series-seo");
      specSeo && (specElementSeo == null ? void 0 : specElementSeo.append(specSeo));
    }
  };
  _proto.arrangeCategoryDescription = function arrangeCategoryDescription() {
    var categoryDescriptionSection2 = document.getElementById("category-section2");
    var categoryDescriptionSection3 = document.getElementById("category-section3");
    var seriesListerSection = document.getElementById("seriesLister");
    var modelListerSection = document.getElementById("modelLister");
    if (categoryDescriptionSection2) {
      seriesListerSection.after(categoryDescriptionSection2);
    }
    if (categoryDescriptionSection3) {
      modelListerSection.after(categoryDescriptionSection3);
    }
  };
  _proto.ariaNotifyNoProducts = function ariaNotifyNoProducts() {
    var $noProductsMessage = $('[data-no-products-notification]');
    if ($noProductsMessage.length) {
      $noProductsMessage.focus();
    }
  };
  _proto.toggleFacets = function toggleFacets() {
    var facetToggles = document.getElementsByClassName("facetedSearch-toggle");
    var facetLists = document.getElementsByClassName("facetedSearch-navList");
    var facetTitles = document.getElementsByClassName("accordion-navigation");
    var _loop = function _loop(i) {
      $(facetToggles[i]).click(function (event) {
        event.preventDefault();
        $(facetLists[i]).toggle();
      });
    };
    for (var i = 0; i < facetToggles.length; i++) {
      _loop(i);
    }

    // Loop through each facet on PLP
    var _loop2 = function _loop2(_i) {
      facetTitles[_i].addEventListener("click", function () {
        // If facet is already open then close it
        if (facetTitles[_i].classList.contains("is-open")) {
          facetTitles[_i].classList.remove("is-open");
          facetTitles[_i].nextElementSibling.classList.remove("is-open");
        } else {
          // If facet is already closed then open it
          facetTitles[_i].classList.add("is-open");
          facetTitles[_i].nextElementSibling.classList.add("is-open");
        }
      });
    };
    for (var _i = 0; _i < facetTitles.length; _i++) {
      _loop2(_i);
    }
  };
  _proto.initFacetedSearch = function initFacetedSearch() {
    // const {
    //     price_min_evaluation: onMinPriceError,
    //     price_max_evaluation: onMaxPriceError,
    //     price_min_not_entered: minPriceNotEntered,
    //     price_max_not_entered: maxPriceNotEntered,
    //     price_invalid_value: onInvalidPrice,
    // } = this.validationDictionary;
    var $productListingContainer = $('#product-listing-container');
    var $facetedSearchContainer = $('#faceted-search-container');
    var productsPerPage = this.context.categoryProductsPerPage;
    var requestOptions = {
      config: {
        category: {
          shop_by_price: true,
          products: {
            limit: productsPerPage
          }
        }
      },
      template: {
        productListing: 'category/product-listing',
        sidebar: 'category/sidebar'
      },
      showMore: 'category/show-more'
    };
    this.facetedSearch = new _common_faceted_search__WEBPACK_IMPORTED_MODULE_14__["default"](requestOptions, function (content) {
      $productListingContainer.html(content.productListing);
      $facetedSearchContainer.html(content.sidebar);
      $('body').triggerHandler('compareReset');
      $('html, body').animate({
        scrollTop: 0
      }, 100);
    }, {
      // validationErrorMessages: {
      //     onMinPriceError,
      //     onMaxPriceError,
      //     minPriceNotEntered,
      //     maxPriceNotEntered,
      //     onInvalidPrice,
      // },
    });
  }

  /**
   *
   * Handle action when the shopper clicks on + / - for quantity
   *
   */;
  _proto.toggleQuantity = function toggleQuantity() {
    var quantityInput = document.getElementsByClassName("js-qty-input");
    var currentQuantity;
    var quantityMin;
    var quantityMax;
    var incToggle = document.querySelectorAll('.js-inc-qty');
    var decToggle = document.querySelectorAll('.js-dec-qty');

    // Get min and max quantity values
    $(quantityInput).each(function (index, value) {
      quantityMin = value.dataset.quantityMin;
      quantityMax = value.dataset.quantityMax;
    });

    // When inc qty is clicked
    $(incToggle).each(function (index, value) {
      value.addEventListener("click", function () {
        // Set currentQuantity variable
        currentQuantity = quantityInput[index].value;
        // If max quantity is set
        if (quantityMax > 0) {
          // Check quantity does not exceed max
          if (currentQuantity + 1 <= quantityMax) {
            currentQuantity++;
          }
        } else {
          currentQuantity++;
        }
        // Update value of quantity input with new qty
        currentQuantity = quantityInput[index].value = currentQuantity;
      });
    });

    // When dec qty is clicked
    $(decToggle).each(function (index, value) {
      value.addEventListener("click", function () {
        // Set currentQuantity variable
        currentQuantity = quantityInput[index].value;
        // If min quantity is set
        if (currentQuantity > 1) {
          // If quantity min option is set
          if (quantityMin > 0) {
            // Check quantity does not fall below min
            if (currentQuantity - 1 >= quantityMin) {
              currentQuantity--;
            }
          } else {
            currentQuantity--;
          }
        }
        // Update value of quantity input with new qty
        currentQuantity = quantityInput[index].value = currentQuantity;
      });
    });
  };
  return Category;
}(_catalog__WEBPACK_IMPORTED_MODULE_12__["default"]);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./assets/js/theme/common/utils/translations-utils.js":
/*!************************************************************!*\
  !*** ./assets/js/theme/common/utils/translations-utils.js ***!
  \************************************************************/
/*! exports provided: createTranslationDictionary */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createTranslationDictionary", function() { return createTranslationDictionary; });
/* harmony import */ var core_js_modules_es6_object_keys_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.object.keys.js */ "./node_modules/core-js/modules/es6.object.keys.js");
/* harmony import */ var core_js_modules_es6_object_keys_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_keys_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es7_object_values_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es7.object.values.js */ "./node_modules/core-js/modules/es7.object.values.js");
/* harmony import */ var core_js_modules_es7_object_values_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_object_values_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_array_map_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.array.map.js */ "./node_modules/core-js/modules/es6.array.map.js");
/* harmony import */ var core_js_modules_es6_array_map_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_map_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es6_regexp_split_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es6.regexp.split.js */ "./node_modules/core-js/modules/es6.regexp.split.js");
/* harmony import */ var core_js_modules_es6_regexp_split_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_split_js__WEBPACK_IMPORTED_MODULE_3__);




var TRANSLATIONS = 'translations';
var isTranslationDictionaryNotEmpty = function isTranslationDictionaryNotEmpty(dictionary) {
  return !!Object.keys(dictionary[TRANSLATIONS]).length;
};
var chooseActiveDictionary = function chooseActiveDictionary() {
  for (var _len = arguments.length, dictionaryJsonList = new Array(_len), _key = 0; _key < _len; _key++) {
    dictionaryJsonList[_key] = arguments[_key];
  }
  for (var i = 0; i < dictionaryJsonList.length; i++) {
    console.log(dictionaryJsonList);
    var dictionary = JSON.parse(dictionaryJsonList[i]);
    console.log(dictionary);
    if (isTranslationDictionaryNotEmpty(dictionary)) {
      return dictionary;
    }
  }
};

/**
 * defines Translation Dictionary to use
 * @param context provides access to 3 validation JSONs from en.json:
 * validation_messages, validation_fallback_messages and default_messages
 * @returns {Object}
 */
var createTranslationDictionary = function createTranslationDictionary(context) {
  var validationDictionaryJSON = context.validationDictionaryJSON,
    validationFallbackDictionaryJSON = context.validationFallbackDictionaryJSON,
    validationDefaultDictionaryJSON = context.validationDefaultDictionaryJSON;
  var activeDictionary = chooseActiveDictionary(validationDictionaryJSON, validationFallbackDictionaryJSON, validationDefaultDictionaryJSON);
  var localizations = Object.values(activeDictionary[TRANSLATIONS]);
  var translationKeys = Object.keys(activeDictionary[TRANSLATIONS]).map(function (key) {
    return key.split('.').pop();
  });
  return translationKeys.reduce(function (acc, key, i) {
    acc[key] = localizations[i];
    return acc;
  }, {});
};

/***/ }),

/***/ "./node_modules/core-js/modules/_collection-strong.js":
/*!************************************************************!*\
  !*** ./node_modules/core-js/modules/_collection-strong.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var dP = __webpack_require__(/*! ./_object-dp */ "./node_modules/core-js/modules/_object-dp.js").f;
var create = __webpack_require__(/*! ./_object-create */ "./node_modules/core-js/modules/_object-create.js");
var redefineAll = __webpack_require__(/*! ./_redefine-all */ "./node_modules/core-js/modules/_redefine-all.js");
var ctx = __webpack_require__(/*! ./_ctx */ "./node_modules/core-js/modules/_ctx.js");
var anInstance = __webpack_require__(/*! ./_an-instance */ "./node_modules/core-js/modules/_an-instance.js");
var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/core-js/modules/_for-of.js");
var $iterDefine = __webpack_require__(/*! ./_iter-define */ "./node_modules/core-js/modules/_iter-define.js");
var step = __webpack_require__(/*! ./_iter-step */ "./node_modules/core-js/modules/_iter-step.js");
var setSpecies = __webpack_require__(/*! ./_set-species */ "./node_modules/core-js/modules/_set-species.js");
var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js");
var fastKey = __webpack_require__(/*! ./_meta */ "./node_modules/core-js/modules/_meta.js").fastKey;
var validate = __webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/modules/_validate-collection.js");
var SIZE = DESCRIPTORS ? '_s' : 'size';

var getEntry = function (that, key) {
  // fast case
  var index = fastKey(key);
  var entry;
  if (index !== 'F') return that._i[index];
  // frozen object case
  for (entry = that._f; entry; entry = entry.n) {
    if (entry.k == key) return entry;
  }
};

module.exports = {
  getConstructor: function (wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._t = NAME;         // collection type
      that._i = create(null); // index
      that._f = undefined;    // first entry
      that._l = undefined;    // last entry
      that[SIZE] = 0;         // size
      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear() {
        for (var that = validate(this, NAME), data = that._i, entry = that._f; entry; entry = entry.n) {
          entry.r = true;
          if (entry.p) entry.p = entry.p.n = undefined;
          delete data[entry.i];
        }
        that._f = that._l = undefined;
        that[SIZE] = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      'delete': function (key) {
        var that = validate(this, NAME);
        var entry = getEntry(that, key);
        if (entry) {
          var next = entry.n;
          var prev = entry.p;
          delete that._i[entry.i];
          entry.r = true;
          if (prev) prev.n = next;
          if (next) next.p = prev;
          if (that._f == entry) that._f = next;
          if (that._l == entry) that._l = prev;
          that[SIZE]--;
        } return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn /* , that = undefined */) {
        validate(this, NAME);
        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
        var entry;
        while (entry = entry ? entry.n : this._f) {
          f(entry.v, entry.k, this);
          // revert to the last existing entry
          while (entry && entry.r) entry = entry.p;
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has(key) {
        return !!getEntry(validate(this, NAME), key);
      }
    });
    if (DESCRIPTORS) dP(C.prototype, 'size', {
      get: function () {
        return validate(this, NAME)[SIZE];
      }
    });
    return C;
  },
  def: function (that, key, value) {
    var entry = getEntry(that, key);
    var prev, index;
    // change existing entry
    if (entry) {
      entry.v = value;
    // create new entry
    } else {
      that._l = entry = {
        i: index = fastKey(key, true), // <- index
        k: key,                        // <- key
        v: value,                      // <- value
        p: prev = that._l,             // <- previous entry
        n: undefined,                  // <- next entry
        r: false                       // <- removed
      };
      if (!that._f) that._f = entry;
      if (prev) prev.n = entry;
      that[SIZE]++;
      // add to index
      if (index !== 'F') that._i[index] = entry;
    } return that;
  },
  getEntry: getEntry,
  setStrong: function (C, NAME, IS_MAP) {
    // add .keys, .values, .entries, [@@iterator]
    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
    $iterDefine(C, NAME, function (iterated, kind) {
      this._t = validate(iterated, NAME); // target
      this._k = kind;                     // kind
      this._l = undefined;                // previous
    }, function () {
      var that = this;
      var kind = that._k;
      var entry = that._l;
      // revert to the last existing entry
      while (entry && entry.r) entry = entry.p;
      // get next entry
      if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
        // or finish the iteration
        that._t = undefined;
        return step(1);
      }
      // return step by kind
      if (kind == 'keys') return step(0, entry.k);
      if (kind == 'values') return step(0, entry.v);
      return step(0, [entry.k, entry.v]);
    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

    // add [@@species], 23.1.2.2, 23.2.2.2
    setSpecies(NAME);
  }
};


/***/ }),

/***/ "./node_modules/core-js/modules/_collection.js":
/*!*****************************************************!*\
  !*** ./node_modules/core-js/modules/_collection.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var global = __webpack_require__(/*! ./_global */ "./node_modules/core-js/modules/_global.js");
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var redefine = __webpack_require__(/*! ./_redefine */ "./node_modules/core-js/modules/_redefine.js");
var redefineAll = __webpack_require__(/*! ./_redefine-all */ "./node_modules/core-js/modules/_redefine-all.js");
var meta = __webpack_require__(/*! ./_meta */ "./node_modules/core-js/modules/_meta.js");
var forOf = __webpack_require__(/*! ./_for-of */ "./node_modules/core-js/modules/_for-of.js");
var anInstance = __webpack_require__(/*! ./_an-instance */ "./node_modules/core-js/modules/_an-instance.js");
var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
var fails = __webpack_require__(/*! ./_fails */ "./node_modules/core-js/modules/_fails.js");
var $iterDetect = __webpack_require__(/*! ./_iter-detect */ "./node_modules/core-js/modules/_iter-detect.js");
var setToStringTag = __webpack_require__(/*! ./_set-to-string-tag */ "./node_modules/core-js/modules/_set-to-string-tag.js");
var inheritIfRequired = __webpack_require__(/*! ./_inherit-if-required */ "./node_modules/core-js/modules/_inherit-if-required.js");

module.exports = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
  var Base = global[NAME];
  var C = Base;
  var ADDER = IS_MAP ? 'set' : 'add';
  var proto = C && C.prototype;
  var O = {};
  var fixMethod = function (KEY) {
    var fn = proto[KEY];
    redefine(proto, KEY,
      KEY == 'delete' ? function (a) {
        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'has' ? function has(a) {
        return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'get' ? function get(a) {
        return IS_WEAK && !isObject(a) ? undefined : fn.call(this, a === 0 ? 0 : a);
      } : KEY == 'add' ? function add(a) { fn.call(this, a === 0 ? 0 : a); return this; }
        : function set(a, b) { fn.call(this, a === 0 ? 0 : a, b); return this; }
    );
  };
  if (typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function () {
    new C().entries().next();
  }))) {
    // create collection constructor
    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
    redefineAll(C.prototype, methods);
    meta.NEED = true;
  } else {
    var instance = new C();
    // early implementations not supports chaining
    var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance;
    // V8 ~  Chromium 40- weak-collections throws on primitives, but should return false
    var THROWS_ON_PRIMITIVES = fails(function () { instance.has(1); });
    // most early implementations doesn't supports iterables, most modern - not close it correctly
    var ACCEPT_ITERABLES = $iterDetect(function (iter) { new C(iter); }); // eslint-disable-line no-new
    // for early implementations -0 and +0 not the same
    var BUGGY_ZERO = !IS_WEAK && fails(function () {
      // V8 ~ Chromium 42- fails only with 5+ elements
      var $instance = new C();
      var index = 5;
      while (index--) $instance[ADDER](index, index);
      return !$instance.has(-0);
    });
    if (!ACCEPT_ITERABLES) {
      C = wrapper(function (target, iterable) {
        anInstance(target, C, NAME);
        var that = inheritIfRequired(new Base(), target, C);
        if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
        return that;
      });
      C.prototype = proto;
      proto.constructor = C;
    }
    if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
      fixMethod('delete');
      fixMethod('has');
      IS_MAP && fixMethod('get');
    }
    if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);
    // weak collections should not contains .clear method
    if (IS_WEAK && proto.clear) delete proto.clear;
  }

  setToStringTag(C, NAME);

  O[NAME] = C;
  $export($export.G + $export.W + $export.F * (C != Base), O);

  if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);

  return C;
};


/***/ }),

/***/ "./node_modules/core-js/modules/_object-to-array.js":
/*!**********************************************************!*\
  !*** ./node_modules/core-js/modules/_object-to-array.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(/*! ./_descriptors */ "./node_modules/core-js/modules/_descriptors.js");
var getKeys = __webpack_require__(/*! ./_object-keys */ "./node_modules/core-js/modules/_object-keys.js");
var toIObject = __webpack_require__(/*! ./_to-iobject */ "./node_modules/core-js/modules/_to-iobject.js");
var isEnum = __webpack_require__(/*! ./_object-pie */ "./node_modules/core-js/modules/_object-pie.js").f;
module.exports = function (isEntries) {
  return function (it) {
    var O = toIObject(it);
    var keys = getKeys(O);
    var length = keys.length;
    var i = 0;
    var result = [];
    var key;
    while (length > i) {
      key = keys[i++];
      if (!DESCRIPTORS || isEnum.call(O, key)) {
        result.push(isEntries ? [key, O[key]] : O[key]);
      }
    }
    return result;
  };
};


/***/ }),

/***/ "./node_modules/core-js/modules/_validate-collection.js":
/*!**************************************************************!*\
  !*** ./node_modules/core-js/modules/_validate-collection.js ***!
  \**************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(/*! ./_is-object */ "./node_modules/core-js/modules/_is-object.js");
module.exports = function (it, TYPE) {
  if (!isObject(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');
  return it;
};


/***/ }),

/***/ "./node_modules/core-js/modules/es6.set.js":
/*!*************************************************!*\
  !*** ./node_modules/core-js/modules/es6.set.js ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var strong = __webpack_require__(/*! ./_collection-strong */ "./node_modules/core-js/modules/_collection-strong.js");
var validate = __webpack_require__(/*! ./_validate-collection */ "./node_modules/core-js/modules/_validate-collection.js");
var SET = 'Set';

// 23.2 Set Objects
module.exports = __webpack_require__(/*! ./_collection */ "./node_modules/core-js/modules/_collection.js")(SET, function (get) {
  return function Set() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
}, {
  // 23.2.3.1 Set.prototype.add(value)
  add: function add(value) {
    return strong.def(validate(this, SET), value = value === 0 ? 0 : value, value);
  }
}, strong);


/***/ }),

/***/ "./node_modules/core-js/modules/es7.object.values.js":
/*!***********************************************************!*\
  !*** ./node_modules/core-js/modules/es7.object.values.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-object-values-entries
var $export = __webpack_require__(/*! ./_export */ "./node_modules/core-js/modules/_export.js");
var $values = __webpack_require__(/*! ./_object-to-array */ "./node_modules/core-js/modules/_object-to-array.js")(false);

$export($export.S, 'Object', {
  values: function values(it) {
    return $values(it);
  }
});


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvY2F0ZWdvcnkuanMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3RoZW1lL2NvbW1vbi91dGlscy90cmFuc2xhdGlvbnMtdXRpbHMuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fY29sbGVjdGlvbi1zdHJvbmcuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fY29sbGVjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL19vYmplY3QtdG8tYXJyYXkuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9fdmFsaWRhdGUtY29sbGVjdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvY29yZS1qcy9tb2R1bGVzL2VzNi5zZXQuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2NvcmUtanMvbW9kdWxlcy9lczcub2JqZWN0LnZhbHVlcy5qcyJdLCJuYW1lcyI6WyIkIiwiZmFuY3lib3giLCJkZWZhdWx0cyIsImhhc2giLCJDYXRlZ29yeSIsIl9DYXRhbG9nUGFnZSIsImNvbnRleHQiLCIkZm9ybSIsImNhbGwiLCJfaW5oZXJpdHNMb29zZSIsIl9wcm90byIsInByb3RvdHlwZSIsInNldExpdmVSZWdpb25BdHRyaWJ1dGVzIiwiJGVsZW1lbnQiLCJyb2xlVHlwZSIsImFyaWFMaXZlU3RhdHVzIiwiYXR0ciIsInJvbGUiLCJtYWtlU2hvcEJ5UHJpY2VGaWx0ZXJBY2Nlc3NpYmxlIiwiX3RoaXMiLCJsZW5ndGgiLCJoYXNDbGFzcyIsImZvY3VzIiwib24iLCJzZXRQYWdlWWllbGRzVGl0bGUiLCIkcHJvZHVjdENhcmRzIiwiZWFjaCIsImZpbmQiLCJjc3MiLCJkaXNwbGF5QnJhbmRGaWx0ZXJzIiwiX3RoaXMyIiwicHJvZHVjdEJyYW5kc0FycmF5IiwicHJvZHVjdHMiLCJtYXAiLCJwcm9kdWN0IiwiYnJhbmQiLCJuYW1lIiwicHJvZHVjdEJyYW5kc1NldCIsIlNldCIsInNpemUiLCJtb2RhbCIsImRlZmF1bHRNb2RhbCIsIiRicmFuZFNlbGVjdG9yIiwiZ2V0QnJhbmRTZWxlY3RvckVsZW1lbnQiLCIkY2FydHJpZGdlTGlzdCIsImluc2VydEJlZm9yZSIsInBhcmFtcyIsIlVSTFNlYXJjaFBhcmFtcyIsIndpbmRvdyIsImxvY2F0aW9uIiwic2VhcmNoIiwiYnJhbmRGaWx0ZXIiLCJnZXQiLCJzaG93RmlsdGVyTW9kYWwiLCJzZXRCcmFuZEZpbHRlciIsIm9wZW4iLCJ1cGRhdGVDb250ZW50IiwiYWRkQ2xhc3MiLCJmaWx0ZXJQcm9kdWN0c0J5QnJhbmQiLCJmaWx0ZXIiLCJ1cmwiLCJVUkwiLCJocmVmIiwic2VhcmNoUGFyYW1zIiwic2V0IiwiaGlzdG9yeSIsInJlcGxhY2VTdGF0ZSIsImNsb3NlIiwiJGlqdENhcnRyaWRnZUxpc3QiLCIkYnJhbmRlZENhcnRyaWRnZUxpc3QiLCIkaWp0QnJhbmRCdXR0b24iLCIkb3JpZ2luYWxCcmFuZEJ1dHRvbiIsIiRhbGxCcmFuZEJ1dHRvbiIsInNob3ciLCJyZW1vdmVDbGFzcyIsImhpZGUiLCJvblJlYWR5IiwiX3RoaXMzIiwiYXJyYW5nZUZvY3VzT25Tb3J0QnkiLCJhcnJhbmdlQ2F0ZWdvcnlEZXNjcmlwdGlvbiIsImUiLCJjdXJyZW50VGFyZ2V0IiwibmV4dCIsIm9uU29ydEJ5U3VibWl0IiwiYmluZCIsImhvb2tzIiwic2V0TGl2ZVJlZ2lvbnNBdHRyaWJ1dGVzIiwiYXJpYU5vdGlmeU5vUHJvZHVjdHMiLCJ0b2dnbGVGYWNldHMiLCJ0b2dnbGVRdWFudGl0eSIsImFycmFuZ2VDYXRlZ29yeVNlbyIsImNhcnRyaWRnZUJyYW5kIiwic2xpY2UiLCJzcGVjU2VvIiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInNwZWNFbGVtZW50U2VvIiwiYXBwZW5kIiwiY2F0ZWdvcnlEZXNjcmlwdGlvblNlY3Rpb24yIiwiY2F0ZWdvcnlEZXNjcmlwdGlvblNlY3Rpb24zIiwic2VyaWVzTGlzdGVyU2VjdGlvbiIsIm1vZGVsTGlzdGVyU2VjdGlvbiIsImFmdGVyIiwiJG5vUHJvZHVjdHNNZXNzYWdlIiwiZmFjZXRUb2dnbGVzIiwiZ2V0RWxlbWVudHNCeUNsYXNzTmFtZSIsImZhY2V0TGlzdHMiLCJmYWNldFRpdGxlcyIsIl9sb29wIiwiaSIsImNsaWNrIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsInRvZ2dsZSIsIl9sb29wMiIsIl9pIiwiYWRkRXZlbnRMaXN0ZW5lciIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwicmVtb3ZlIiwibmV4dEVsZW1lbnRTaWJsaW5nIiwiYWRkIiwiaW5pdEZhY2V0ZWRTZWFyY2giLCIkcHJvZHVjdExpc3RpbmdDb250YWluZXIiLCIkZmFjZXRlZFNlYXJjaENvbnRhaW5lciIsInByb2R1Y3RzUGVyUGFnZSIsImNhdGVnb3J5UHJvZHVjdHNQZXJQYWdlIiwicmVxdWVzdE9wdGlvbnMiLCJjb25maWciLCJjYXRlZ29yeSIsInNob3BfYnlfcHJpY2UiLCJsaW1pdCIsInRlbXBsYXRlIiwicHJvZHVjdExpc3RpbmciLCJzaWRlYmFyIiwic2hvd01vcmUiLCJmYWNldGVkU2VhcmNoIiwiRmFjZXRlZFNlYXJjaCIsImNvbnRlbnQiLCJodG1sIiwidHJpZ2dlckhhbmRsZXIiLCJhbmltYXRlIiwic2Nyb2xsVG9wIiwicXVhbnRpdHlJbnB1dCIsImN1cnJlbnRRdWFudGl0eSIsInF1YW50aXR5TWluIiwicXVhbnRpdHlNYXgiLCJpbmNUb2dnbGUiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZGVjVG9nZ2xlIiwiaW5kZXgiLCJ2YWx1ZSIsImRhdGFzZXQiLCJDYXRhbG9nUGFnZSIsIlRSQU5TTEFUSU9OUyIsImlzVHJhbnNsYXRpb25EaWN0aW9uYXJ5Tm90RW1wdHkiLCJkaWN0aW9uYXJ5IiwiT2JqZWN0Iiwia2V5cyIsImNob29zZUFjdGl2ZURpY3Rpb25hcnkiLCJfbGVuIiwiYXJndW1lbnRzIiwiZGljdGlvbmFyeUpzb25MaXN0IiwiQXJyYXkiLCJfa2V5IiwiY29uc29sZSIsImxvZyIsIkpTT04iLCJwYXJzZSIsImNyZWF0ZVRyYW5zbGF0aW9uRGljdGlvbmFyeSIsInZhbGlkYXRpb25EaWN0aW9uYXJ5SlNPTiIsInZhbGlkYXRpb25GYWxsYmFja0RpY3Rpb25hcnlKU09OIiwidmFsaWRhdGlvbkRlZmF1bHREaWN0aW9uYXJ5SlNPTiIsImFjdGl2ZURpY3Rpb25hcnkiLCJsb2NhbGl6YXRpb25zIiwidmFsdWVzIiwidHJhbnNsYXRpb25LZXlzIiwia2V5Iiwic3BsaXQiLCJwb3AiLCJyZWR1Y2UiLCJhY2MiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQW1EO0FBQ2Y7QUFDb0I7QUFDSjtBQUNtQztBQUN4QztBQUNJO0FBQ087QUFFSjtBQUNJO0FBQzFEQSxDQUFDLENBQUNDLFFBQVEsQ0FBQ0MsUUFBUSxDQUFDQyxJQUFJLEdBQUcsS0FBSztBQUNtQjtBQUNUO0FBRUk7QUFBQSxJQUd6QkMsUUFBUSwwQkFBQUMsWUFBQTtFQUN6QixTQUFBRCxTQUFZRSxPQUFPLEVBQUU7SUFDakIsSUFBTUMsS0FBSyxHQUFHUCxDQUFDLENBQUMsMEJBQTBCLENBQUM7SUFBQyxPQUU1Q0ssWUFBQSxDQUFBRyxJQUFBLE9BQU1GLE9BQU8sQ0FBQyxVQUNkO0VBQ0o7RUFBQ0csY0FBQSxDQUFBTCxRQUFBLEVBQUFDLFlBQUE7RUFBQSxJQUFBSyxNQUFBLEdBQUFOLFFBQUEsQ0FBQU8sU0FBQTtFQUFBRCxNQUFBLENBRURFLHVCQUF1QixHQUF2QixTQUFBQSx1QkFBdUJBLENBQUNDLFFBQVEsRUFBRUMsUUFBUSxFQUFFQyxjQUFjLEVBQUU7SUFDeERGLFFBQVEsQ0FBQ0csSUFBSSxDQUFDO01BQ1ZDLElBQUksRUFBRUgsUUFBUTtNQUNkLFdBQVcsRUFBRUM7SUFDakIsQ0FBQyxDQUFDO0VBQ04sQ0FBQztFQUFBTCxNQUFBLENBRURRLCtCQUErQixHQUEvQixTQUFBQSwrQkFBK0JBLENBQUEsRUFBRztJQUFBLElBQUFDLEtBQUE7SUFDOUIsSUFBSSxDQUFDbkIsQ0FBQyxDQUFDLHNCQUFzQixDQUFDLENBQUNvQixNQUFNLEVBQUU7SUFFdkMsSUFBSXBCLENBQUMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDcUIsUUFBUSxDQUFDLFdBQVcsQ0FBQyxFQUFFO01BQzVDckIsQ0FBQyxDQUFDLDRCQUE0QixDQUFDLENBQUNzQixLQUFLLENBQUMsQ0FBQztJQUMzQztJQUVBdEIsQ0FBQyxDQUFDLGtCQUFrQixDQUFDLENBQUN1QixFQUFFLENBQUMsT0FBTyxFQUFFO01BQUEsT0FBTUosS0FBSSxDQUFDUCx1QkFBdUIsQ0FBQ1osQ0FBQyxDQUFDLDJCQUEyQixDQUFDLEVBQUUsUUFBUSxFQUFFLFdBQVcsQ0FBQztJQUFBLEVBQUM7RUFDaEk7O0VBRUE7QUFBQTtFQUFBVSxNQUFBLENBQ0FjLGtCQUFrQixHQUFsQixTQUFBQSxrQkFBa0JBLENBQUEsRUFBRztJQUNqQixJQUFNQyxhQUFhLEdBQUd6QixDQUFDLENBQUMsYUFBYSxDQUFDO0lBRXRDeUIsYUFBYSxDQUFDQyxJQUFJLENBQUMsWUFBVTtNQUN6QixJQUFJMUIsQ0FBQyxDQUFDLElBQUksQ0FBQyxDQUFDMkIsSUFBSSxDQUFDLHdCQUF3QixDQUFDLENBQUNQLE1BQU0sS0FBSyxDQUFDLEVBQUU7UUFDckRwQixDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMyQixJQUFJLENBQUMsc0JBQXNCLENBQUMsQ0FBQ0MsR0FBRyxDQUFDLFNBQVMsRUFBRSxNQUFNLENBQUM7TUFDL0Q7SUFDSixDQUFDLENBQUM7RUFDTixDQUFDO0VBQUFsQixNQUFBLENBRURtQixtQkFBbUIsR0FBbkIsU0FBQUEsbUJBQW1CQSxDQUFBLEVBQUc7SUFBQSxJQUFBQyxNQUFBO0lBQ2xCO0lBQ0EsSUFBTUMsa0JBQWtCLEdBQUcsSUFBSSxDQUFDekIsT0FBTyxDQUFDMEIsUUFBUSxDQUFDQyxHQUFHLENBQUMsVUFBQUMsT0FBTztNQUFBLE9BQUlBLE9BQU8sQ0FBQ0MsS0FBSyxDQUFDQyxJQUFJO0lBQUEsRUFBQztJQUNuRixJQUFNQyxnQkFBZ0IsR0FBRyxJQUFJQyxHQUFHLENBQUNQLGtCQUFrQixDQUFDO0lBRXBELElBQUdNLGdCQUFnQixDQUFDRSxJQUFJLElBQUksQ0FBQyxFQUFFO01BQzNCO0lBQ0o7SUFFQSxJQUFNQyxLQUFLLEdBQUdDLG1FQUFZLENBQUMsQ0FBQzs7SUFFNUI7SUFDQSxJQUFNQyxjQUFjLEdBQUcxQyxDQUFDLENBQUMsSUFBSSxDQUFDMkMsdUJBQXVCLENBQUMsQ0FBQyxDQUFDO0lBQ3hELElBQU1DLGNBQWMsR0FBRzVDLENBQUMsQ0FBQyxtQkFBbUIsQ0FBQztJQUM3QzBDLGNBQWMsQ0FBQ0csWUFBWSxDQUFDRCxjQUFjLENBQUM7O0lBRTNDO0lBQ0EsSUFBTUUsTUFBTSxHQUFHLElBQUlDLGVBQWUsQ0FBQ0MsTUFBTSxDQUFDQyxRQUFRLENBQUNDLE1BQU0sQ0FBQztJQUMxRCxJQUFNQyxXQUFXLEdBQUdMLE1BQU0sQ0FBQ00sR0FBRyxDQUFDLGFBQWEsQ0FBQztJQUU3QyxJQUFJLENBQUNELFdBQVcsRUFBRTtNQUNkO01BQ0EsSUFBSSxDQUFDRSxlQUFlLENBQUNiLEtBQUssQ0FBQztJQUMvQixDQUFDLE1BQU0sSUFBSVcsV0FBVyxLQUFLLEtBQUssRUFBRTtNQUM5QixJQUFJLENBQUNHLGNBQWMsQ0FBQyxLQUFLLENBQUM7SUFDOUIsQ0FBQyxNQUFNLElBQUlILFdBQVcsS0FBSyxLQUFLLEVBQUU7TUFDOUIsSUFBSSxDQUFDRyxjQUFjLENBQUMsS0FBSyxDQUFDO0lBQzlCLENBQUMsTUFBTSxJQUFJSCxXQUFXLEtBQUssVUFBVSxFQUFFO01BQ25DLElBQUksQ0FBQ0csY0FBYyxDQUFDLFVBQVUsQ0FBQztJQUNuQzs7SUFFQTtJQUNBdEQsQ0FBQyxDQUFDLHdCQUF3QixDQUFDLENBQUN1QixFQUFFLENBQUMsT0FBTyxFQUFFO01BQUEsT0FBTU8sTUFBSSxDQUFDd0IsY0FBYyxDQUFDLEtBQUssRUFBRWQsS0FBSyxDQUFDO0lBQUEsRUFBQztJQUNoRnhDLENBQUMsQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDdUIsRUFBRSxDQUFDLE9BQU8sRUFBRTtNQUFBLE9BQU1PLE1BQUksQ0FBQ3dCLGNBQWMsQ0FBQyxVQUFVLEVBQUVkLEtBQUssQ0FBQztJQUFBLEVBQUM7SUFDMUZ4QyxDQUFDLENBQUMsd0JBQXdCLENBQUMsQ0FBQ3VCLEVBQUUsQ0FBQyxPQUFPLEVBQUU7TUFBQSxPQUFNTyxNQUFJLENBQUN3QixjQUFjLENBQUMsS0FBSyxFQUFFZCxLQUFLLENBQUM7SUFBQSxFQUFDO0VBQ3BGLENBQUM7RUFBQTlCLE1BQUEsQ0FFRGlDLHVCQUF1QixHQUF2QixTQUFBQSx1QkFBdUJBLENBQUEsRUFBRztJQUN0QjtFQVFKLENBQUM7RUFBQWpDLE1BQUEsQ0FFRDJDLGVBQWUsR0FBZixTQUFBQSxlQUFlQSxDQUFDYixLQUFLLEVBQUU7SUFDbkJBLEtBQUssQ0FBQ2UsSUFBSSxDQUFDLENBQUM7SUFDWmYsS0FBSyxDQUFDZ0IsYUFBYSxDQUFDLElBQUksQ0FBQ2IsdUJBQXVCLENBQUMsQ0FBQyxDQUFDO0lBQ25EM0MsQ0FBQyxDQUFDLFFBQVEsQ0FBQyxDQUFDeUQsUUFBUSxDQUFDLHFCQUFxQixDQUFDO0lBQzNDLElBQUksQ0FBQ0MscUJBQXFCLENBQUMsV0FBVyxDQUFDO0VBQzNDLENBQUM7RUFBQWhELE1BQUEsQ0FFRDRDLGNBQWMsR0FBZCxTQUFBQSxjQUFjQSxDQUFDSyxNQUFNLEVBQUVuQixLQUFLLEVBQUU7SUFDMUI7SUFDQSxJQUFJb0IsR0FBRyxHQUFHLElBQUlDLEdBQUcsQ0FBQ2IsTUFBTSxDQUFDQyxRQUFRLENBQUNhLElBQUksQ0FBQztJQUN2Q0YsR0FBRyxDQUFDRyxZQUFZLENBQUNDLEdBQUcsQ0FBQyxhQUFhLEVBQUVMLE1BQU0sQ0FBQztJQUMzQ1gsTUFBTSxDQUFDaUIsT0FBTyxDQUFDQyxZQUFZLENBQUMsSUFBSSxFQUFFLElBQUksRUFBRU4sR0FBRyxDQUFDO0lBRTVDLElBQUksQ0FBQ0YscUJBQXFCLENBQUNDLE1BQU0sQ0FBQztJQUVsQyxJQUFJbkIsS0FBSyxFQUFFO01BQ1BBLEtBQUssQ0FBQzJCLEtBQUssQ0FBQyxDQUFDO0lBQ2pCO0VBQ0osQ0FBQztFQUFBekQsTUFBQSxDQUVEZ0QscUJBQXFCLEdBQXJCLFNBQUFBLHFCQUFxQkEsQ0FBQ0MsTUFBTSxFQUFFO0lBQzFCLElBQU1TLGlCQUFpQixHQUFHcEUsQ0FBQyxDQUFDLDJCQUEyQixDQUFDO0lBQ3hELElBQU1xRSxxQkFBcUIsR0FBR3JFLENBQUMsQ0FBQyxnQ0FBZ0MsQ0FBQztJQUNqRSxJQUFNc0UsZUFBZSxHQUFHdEUsQ0FBQyxDQUFDLHdCQUF3QixDQUFDO0lBQ25ELElBQU11RSxvQkFBb0IsR0FBR3ZFLENBQUMsQ0FBQyw2QkFBNkIsQ0FBQztJQUM3RCxJQUFNd0UsZUFBZSxHQUFHeEUsQ0FBQyxDQUFDLHdCQUF3QixDQUFDO0lBRW5ELFFBQVEyRCxNQUFNO01BQ1YsS0FBSyxXQUFXO1FBQ1o7UUFDQVMsaUJBQWlCLENBQUNLLElBQUksQ0FBQyxDQUFDO1FBQ3hCSixxQkFBcUIsQ0FBQ0ksSUFBSSxDQUFDLENBQUM7UUFDNUI7UUFDQXpFLENBQUMsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDMEUsV0FBVyxDQUFDLFdBQVcsQ0FBQztRQUN2RDFFLENBQUMsQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDMEUsV0FBVyxDQUFDLFdBQVcsQ0FBQztRQUM1RDFFLENBQUMsQ0FBQyxnQ0FBZ0MsQ0FBQyxDQUFDeUQsUUFBUSxDQUFDLFdBQVcsQ0FBQztRQUN6RHpELENBQUMsQ0FBQywyQkFBMkIsQ0FBQyxDQUFDeUQsUUFBUSxDQUFDLFdBQVcsQ0FBQztRQUNwRDtNQUNKLEtBQUssS0FBSztRQUNOO1FBQ0FXLGlCQUFpQixDQUFDSyxJQUFJLENBQUMsQ0FBQztRQUN4QkoscUJBQXFCLENBQUNJLElBQUksQ0FBQyxDQUFDO1FBQzVCekUsQ0FBQyxDQUFDLDJCQUEyQixDQUFDLENBQUMwRSxXQUFXLENBQUMsV0FBVyxDQUFDO1FBQ3ZEMUUsQ0FBQyxDQUFDLGdDQUFnQyxDQUFDLENBQUMwRSxXQUFXLENBQUMsV0FBVyxDQUFDO1FBQzVEMUUsQ0FBQyxDQUFDLGdDQUFnQyxDQUFDLENBQUN5RCxRQUFRLENBQUMsV0FBVyxDQUFDO1FBQ3pEekQsQ0FBQyxDQUFDLDJCQUEyQixDQUFDLENBQUN5RCxRQUFRLENBQUMsV0FBVyxDQUFDO1FBQ3JEOztRQUVDO1FBQ0FlLGVBQWUsQ0FBQ2YsUUFBUSxDQUFDLGlCQUFpQixDQUFDO1FBQzNDYyxvQkFBb0IsQ0FBQ0csV0FBVyxDQUFDLGlCQUFpQixDQUFDO1FBQ25ESixlQUFlLENBQUNJLFdBQVcsQ0FBQyxpQkFBaUIsQ0FBQztRQUM5QztNQUNKLEtBQUssS0FBSztRQUNOO1FBQ0FOLGlCQUFpQixDQUFDSyxJQUFJLENBQUMsQ0FBQztRQUN4QkoscUJBQXFCLENBQUNNLElBQUksQ0FBQyxDQUFDO1FBQzVCM0UsQ0FBQyxDQUFDLDJCQUEyQixDQUFDLENBQUMwRSxXQUFXLENBQUMsV0FBVyxDQUFDO1FBQ3ZEMUUsQ0FBQyxDQUFDLGdDQUFnQyxDQUFDLENBQUMwRSxXQUFXLENBQUMsV0FBVyxDQUFDO1FBQzVEO1FBQ0FKLGVBQWUsQ0FBQ2IsUUFBUSxDQUFDLGlCQUFpQixDQUFDO1FBQzNDYyxvQkFBb0IsQ0FBQ0csV0FBVyxDQUFDLGlCQUFpQixDQUFDO1FBRW5ERixlQUFlLENBQUNFLFdBQVcsQ0FBQyxpQkFBaUIsQ0FBQztRQUM5QztNQUNKLEtBQUssVUFBVTtRQUNYO1FBQ0FOLGlCQUFpQixDQUFDTyxJQUFJLENBQUMsQ0FBQztRQUN4Qk4scUJBQXFCLENBQUNJLElBQUksQ0FBQyxDQUFDO1FBQzVCekUsQ0FBQyxDQUFDLDJCQUEyQixDQUFDLENBQUMwRSxXQUFXLENBQUMsV0FBVyxDQUFDO1FBQ3ZEMUUsQ0FBQyxDQUFDLGdDQUFnQyxDQUFDLENBQUMwRSxXQUFXLENBQUMsV0FBVyxDQUFDOztRQUU1RDtRQUNBSCxvQkFBb0IsQ0FBQ2QsUUFBUSxDQUFDLGlCQUFpQixDQUFDO1FBQ2hEYSxlQUFlLENBQUNJLFdBQVcsQ0FBQyxpQkFBaUIsQ0FBQztRQUM5Q0YsZUFBZSxDQUFDRSxXQUFXLENBQUMsaUJBQWlCLENBQUM7SUFDdEQ7RUFDSixDQUFDO0VBQUFoRSxNQUFBLENBRURrRSxPQUFPLEdBQVAsU0FBQUEsT0FBT0EsQ0FBQSxFQUFHO0lBQUEsSUFBQUMsTUFBQTtJQUNOLElBQUksQ0FBQ0Msb0JBQW9CLENBQUMsQ0FBQztJQUUzQixJQUFJLENBQUN0RCxrQkFBa0IsQ0FBQyxDQUFDO0lBRXpCLElBQUksQ0FBQ3VELDBCQUEwQixDQUFDLENBQUM7SUFFakMvRSxDQUFDLENBQUMsK0JBQStCLENBQUMsQ0FBQ3VCLEVBQUUsQ0FBQyxPQUFPLEVBQUUsVUFBQ3lELENBQUM7TUFBQSxPQUFLSCxNQUFJLENBQUNqRSx1QkFBdUIsQ0FBQ1osQ0FBQyxDQUFDZ0YsQ0FBQyxDQUFDQyxhQUFhLENBQUMsQ0FBQ0MsSUFBSSxDQUFDLENBQUMsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO0lBQUEsRUFBQztJQUVsSSxJQUFJLENBQUNoRSwrQkFBK0IsQ0FBQyxDQUFDO0lBRXRDLElBQUlsQixDQUFDLENBQUMsZ0JBQWdCLENBQUMsQ0FBQ29CLE1BQU0sR0FBRyxDQUFDLEVBQUU7TUFDaEM7SUFBQSxDQUNILE1BQU07TUFDSCxJQUFJLENBQUMrRCxjQUFjLEdBQUcsSUFBSSxDQUFDQSxjQUFjLENBQUNDLElBQUksQ0FBQyxJQUFJLENBQUM7TUFDcERDLGlFQUFLLENBQUM5RCxFQUFFLENBQUMsa0JBQWtCLEVBQUUsSUFBSSxDQUFDNEQsY0FBYyxDQUFDO0lBQ3JEO0lBRUFuRixDQUFDLENBQUMsYUFBYSxDQUFDLENBQUN1QixFQUFFLENBQUMsT0FBTyxFQUFFO01BQUEsT0FBTXNELE1BQUksQ0FBQ1Msd0JBQXdCLENBQUN0RixDQUFDLENBQUMsb0JBQW9CLENBQUMsRUFBRSxRQUFRLEVBQUUsUUFBUSxDQUFDO0lBQUEsRUFBQztJQUU5RyxJQUFJLENBQUN1RixvQkFBb0IsQ0FBQyxDQUFDO0lBRTNCLElBQUksQ0FBQ0MsWUFBWSxDQUFDLENBQUM7SUFFbkIsSUFBSSxDQUFDQyxjQUFjLENBQUMsQ0FBQztJQUNyQixJQUFJLENBQUNDLGtCQUFrQixDQUFDLENBQUM7SUFDekI7SUFDQSxJQUFJLElBQUksQ0FBQ3BGLE9BQU8sQ0FBQ3FGLGNBQWMsS0FBSyxJQUFJLEVBQUU7TUFDdEMsSUFBSSxDQUFDOUQsbUJBQW1CLENBQUMsQ0FBQztJQUM5QjtJQUNBN0IsQ0FBQyxDQUFDLDJCQUEyQixDQUFDLENBQUN1QixFQUFFLENBQUMsT0FBTyxFQUFFLFlBQVk7TUFDbkR2QixDQUFDLENBQUMsb0NBQW9DLENBQUMsQ0FBQzRGLEtBQUssQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUNuQixJQUFJLENBQUMsQ0FBQztNQUMzRCxJQUFJekUsQ0FBQyxDQUFDLG9DQUFvQyxDQUFDLENBQUNvQixNQUFNLElBQUksQ0FBQyxFQUN2RDtRQUNJcEIsQ0FBQyxDQUFDLDJCQUEyQixDQUFDLENBQUMyRSxJQUFJLENBQUMsQ0FBQztNQUN6QztJQUNKLENBQUMsQ0FBQztFQUNOLENBQUM7RUFBQWpFLE1BQUEsQ0FDRGdGLGtCQUFrQixHQUFsQixTQUFBQSxrQkFBa0JBLENBQUEsRUFBRztJQUNqQixJQUFJMUYsQ0FBQyxDQUFDLFVBQVUsQ0FBQyxDQUFDb0IsTUFBTSxHQUFHLENBQUMsRUFBRTtNQUMxQixJQUFNeUUsT0FBTyxHQUFHQyxRQUFRLENBQUNDLGNBQWMsQ0FBQyxTQUFTLENBQUM7TUFDbEQsSUFBTUMsY0FBYyxHQUFHRixRQUFRLENBQUNDLGNBQWMsQ0FBQyxzQkFBc0IsQ0FBQztNQUN0RUYsT0FBTyxLQUFJRyxjQUFjLG9CQUFkQSxjQUFjLENBQUVDLE1BQU0sQ0FBQ0osT0FBTyxDQUFDO0lBQzlDO0VBRUosQ0FBQztFQUFBbkYsTUFBQSxDQUVEcUUsMEJBQTBCLEdBQTFCLFNBQUFBLDBCQUEwQkEsQ0FBQSxFQUFHO0lBQ3pCLElBQU1tQiwyQkFBMkIsR0FBR0osUUFBUSxDQUFDQyxjQUFjLENBQUMsbUJBQW1CLENBQUM7SUFDaEYsSUFBTUksMkJBQTJCLEdBQUdMLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLG1CQUFtQixDQUFDO0lBQ2hGLElBQU1LLG1CQUFtQixHQUFHTixRQUFRLENBQUNDLGNBQWMsQ0FBQyxjQUFjLENBQUM7SUFDbkUsSUFBTU0sa0JBQWtCLEdBQUdQLFFBQVEsQ0FBQ0MsY0FBYyxDQUFDLGFBQWEsQ0FBQztJQUVqRSxJQUFJRywyQkFBMkIsRUFBRTtNQUM3QkUsbUJBQW1CLENBQUNFLEtBQUssQ0FBQ0osMkJBQTJCLENBQUM7SUFDMUQ7SUFFQSxJQUFJQywyQkFBMkIsRUFBRTtNQUM3QkUsa0JBQWtCLENBQUNDLEtBQUssQ0FBQ0gsMkJBQTJCLENBQUM7SUFDekQ7RUFDSixDQUFDO0VBQUF6RixNQUFBLENBRUQ2RSxvQkFBb0IsR0FBcEIsU0FBQUEsb0JBQW9CQSxDQUFBLEVBQUc7SUFDbkIsSUFBTWdCLGtCQUFrQixHQUFHdkcsQ0FBQyxDQUFDLGlDQUFpQyxDQUFDO0lBQy9ELElBQUl1RyxrQkFBa0IsQ0FBQ25GLE1BQU0sRUFBRTtNQUMzQm1GLGtCQUFrQixDQUFDakYsS0FBSyxDQUFDLENBQUM7SUFDOUI7RUFDSixDQUFDO0VBQUFaLE1BQUEsQ0FFRDhFLFlBQVksR0FBWixTQUFBQSxZQUFZQSxDQUFBLEVBQUc7SUFDWCxJQUFNZ0IsWUFBWSxHQUFHVixRQUFRLENBQUNXLHNCQUFzQixDQUFDLHNCQUFzQixDQUFDO0lBQzVFLElBQU1DLFVBQVUsR0FBR1osUUFBUSxDQUFDVyxzQkFBc0IsQ0FBQyx1QkFBdUIsQ0FBQztJQUMzRSxJQUFNRSxXQUFXLEdBQUdiLFFBQVEsQ0FBQ1csc0JBQXNCLENBQUMsc0JBQXNCLENBQUM7SUFBQyxJQUFBRyxLQUFBLFlBQUFBLE1BQUFDLENBQUEsRUFFOUI7TUFDMUM3RyxDQUFDLENBQUN3RyxZQUFZLENBQUNLLENBQUMsQ0FBQyxDQUFDLENBQUNDLEtBQUssQ0FBQyxVQUFTQyxLQUFLLEVBQUM7UUFDcENBLEtBQUssQ0FBQ0MsY0FBYyxDQUFDLENBQUM7UUFDdEJoSCxDQUFDLENBQUMwRyxVQUFVLENBQUNHLENBQUMsQ0FBQyxDQUFDLENBQUNJLE1BQU0sQ0FBQyxDQUFDO01BQzdCLENBQUMsQ0FBQztJQUNOLENBQUM7SUFMRCxLQUFLLElBQUlKLENBQUMsR0FBRyxDQUFDLEVBQUVBLENBQUMsR0FBR0wsWUFBWSxDQUFDcEYsTUFBTSxFQUFFeUYsQ0FBQyxFQUFFO01BQUFELEtBQUEsQ0FBQUMsQ0FBQTtJQUFBOztJQU81QztJQUFBLElBQUFLLE1BQUEsWUFBQUEsT0FBQUMsRUFBQSxFQUM2QztNQUN6Q1IsV0FBVyxDQUFDRSxFQUFDLENBQUMsQ0FBQ08sZ0JBQWdCLENBQUMsT0FBTyxFQUFFLFlBQVc7UUFDaEQ7UUFDQSxJQUFJVCxXQUFXLENBQUNFLEVBQUMsQ0FBQyxDQUFDUSxTQUFTLENBQUNDLFFBQVEsQ0FBQyxTQUFTLENBQUMsRUFBRTtVQUM5Q1gsV0FBVyxDQUFDRSxFQUFDLENBQUMsQ0FBQ1EsU0FBUyxDQUFDRSxNQUFNLENBQUMsU0FBUyxDQUFDO1VBQzFDWixXQUFXLENBQUNFLEVBQUMsQ0FBQyxDQUFDVyxrQkFBa0IsQ0FBQ0gsU0FBUyxDQUFDRSxNQUFNLENBQUMsU0FBUyxDQUFDO1FBQ2pFLENBQUMsTUFBTTtVQUFFO1VBQ0xaLFdBQVcsQ0FBQ0UsRUFBQyxDQUFDLENBQUNRLFNBQVMsQ0FBQ0ksR0FBRyxDQUFDLFNBQVMsQ0FBQztVQUN2Q2QsV0FBVyxDQUFDRSxFQUFDLENBQUMsQ0FBQ1csa0JBQWtCLENBQUNILFNBQVMsQ0FBQ0ksR0FBRyxDQUFDLFNBQVMsQ0FBQztRQUM5RDtNQUNKLENBQUMsQ0FBQztJQUNOLENBQUM7SUFYRCxLQUFLLElBQUlaLEVBQUMsR0FBRyxDQUFDLEVBQUVBLEVBQUMsR0FBR0YsV0FBVyxDQUFDdkYsTUFBTSxFQUFFeUYsRUFBQyxFQUFFO01BQUFLLE1BQUEsQ0FBQUMsRUFBQTtJQUFBO0VBWS9DLENBQUM7RUFBQXpHLE1BQUEsQ0FFRGdILGlCQUFpQixHQUFqQixTQUFBQSxpQkFBaUJBLENBQUEsRUFBRztJQUNoQjtJQUNBO0lBQ0E7SUFDQTtJQUNBO0lBQ0E7SUFDQTtJQUNBLElBQU1DLHdCQUF3QixHQUFHM0gsQ0FBQyxDQUFDLDRCQUE0QixDQUFDO0lBQ2hFLElBQU00SCx1QkFBdUIsR0FBRzVILENBQUMsQ0FBQywyQkFBMkIsQ0FBQztJQUM5RCxJQUFNNkgsZUFBZSxHQUFHLElBQUksQ0FBQ3ZILE9BQU8sQ0FBQ3dILHVCQUF1QjtJQUM1RCxJQUFNQyxjQUFjLEdBQUc7TUFDbkJDLE1BQU0sRUFBRTtRQUNKQyxRQUFRLEVBQUU7VUFDTkMsYUFBYSxFQUFFLElBQUk7VUFDbkJsRyxRQUFRLEVBQUU7WUFDTm1HLEtBQUssRUFBRU47VUFDWDtRQUNKO01BQ0osQ0FBQztNQUNETyxRQUFRLEVBQUU7UUFDTkMsY0FBYyxFQUFFLDBCQUEwQjtRQUMxQ0MsT0FBTyxFQUFFO01BQ2IsQ0FBQztNQUNEQyxRQUFRLEVBQUU7SUFDZCxDQUFDO0lBRUQsSUFBSSxDQUFDQyxhQUFhLEdBQUcsSUFBSUMsK0RBQWEsQ0FBQ1YsY0FBYyxFQUFFLFVBQUNXLE9BQU8sRUFBSztNQUNoRWYsd0JBQXdCLENBQUNnQixJQUFJLENBQUNELE9BQU8sQ0FBQ0wsY0FBYyxDQUFDO01BQ3JEVCx1QkFBdUIsQ0FBQ2UsSUFBSSxDQUFDRCxPQUFPLENBQUNKLE9BQU8sQ0FBQztNQUU3Q3RJLENBQUMsQ0FBQyxNQUFNLENBQUMsQ0FBQzRJLGNBQWMsQ0FBQyxjQUFjLENBQUM7TUFFeEM1SSxDQUFDLENBQUMsWUFBWSxDQUFDLENBQUM2SSxPQUFPLENBQUM7UUFDcEJDLFNBQVMsRUFBRTtNQUNmLENBQUMsRUFBRSxHQUFHLENBQUM7SUFDWCxDQUFDLEVBQUU7TUFDQztNQUNBO01BQ0E7TUFDQTtNQUNBO01BQ0E7TUFDQTtJQUFBLENBQ0gsQ0FBQztFQUNOOztFQUVBO0FBQ0o7QUFDQTtBQUNBO0FBQ0EsS0FKSTtFQUFBcEksTUFBQSxDQUtDK0UsY0FBYyxHQUFkLFNBQUFBLGNBQWNBLENBQUEsRUFBRztJQUNkLElBQU1zRCxhQUFhLEdBQUdqRCxRQUFRLENBQUNXLHNCQUFzQixDQUFDLGNBQWMsQ0FBQztJQUNyRSxJQUFJdUMsZUFBZTtJQUNuQixJQUFJQyxXQUFXO0lBQ2YsSUFBSUMsV0FBVztJQUNmLElBQU1DLFNBQVMsR0FBR3JELFFBQVEsQ0FBQ3NELGdCQUFnQixDQUFDLGFBQWEsQ0FBQztJQUMxRCxJQUFNQyxTQUFTLEdBQUd2RCxRQUFRLENBQUNzRCxnQkFBZ0IsQ0FBQyxhQUFhLENBQUM7O0lBRTFEO0lBQ0FwSixDQUFDLENBQUMrSSxhQUFhLENBQUMsQ0FBQ3JILElBQUksQ0FBQyxVQUFTNEgsS0FBSyxFQUFFQyxLQUFLLEVBQUM7TUFDeENOLFdBQVcsR0FBR00sS0FBSyxDQUFDQyxPQUFPLENBQUNQLFdBQVc7TUFDdkNDLFdBQVcsR0FBR0ssS0FBSyxDQUFDQyxPQUFPLENBQUNOLFdBQVc7SUFDM0MsQ0FBQyxDQUFDOztJQUVGO0lBQ0FsSixDQUFDLENBQUNtSixTQUFTLENBQUMsQ0FBQ3pILElBQUksQ0FBQyxVQUFTNEgsS0FBSyxFQUFFQyxLQUFLLEVBQUU7TUFDckNBLEtBQUssQ0FBQ25DLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFVO1FBQ3RDO1FBQ0E0QixlQUFlLEdBQUdELGFBQWEsQ0FBQ08sS0FBSyxDQUFDLENBQUNDLEtBQUs7UUFDNUM7UUFDQSxJQUFJTCxXQUFXLEdBQUcsQ0FBQyxFQUFFO1VBQ2pCO1VBQ0EsSUFBS0YsZUFBZSxHQUFHLENBQUMsSUFBS0UsV0FBVyxFQUFFO1lBQ3RDRixlQUFlLEVBQUU7VUFDckI7UUFDSixDQUFDLE1BQU07VUFDSEEsZUFBZSxFQUFFO1FBQ3JCO1FBQ0E7UUFDQUEsZUFBZSxHQUFHRCxhQUFhLENBQUNPLEtBQUssQ0FBQyxDQUFDQyxLQUFLLEdBQUdQLGVBQWU7TUFDbEUsQ0FBQyxDQUFDO0lBQ04sQ0FBQyxDQUFDOztJQUVGO0lBQ0FoSixDQUFDLENBQUNxSixTQUFTLENBQUMsQ0FBQzNILElBQUksQ0FBQyxVQUFTNEgsS0FBSyxFQUFFQyxLQUFLLEVBQUU7TUFDckNBLEtBQUssQ0FBQ25DLGdCQUFnQixDQUFDLE9BQU8sRUFBRSxZQUFVO1FBQ3RDO1FBQ0E0QixlQUFlLEdBQUdELGFBQWEsQ0FBQ08sS0FBSyxDQUFDLENBQUNDLEtBQUs7UUFDNUM7UUFDQSxJQUFJUCxlQUFlLEdBQUcsQ0FBQyxFQUFFO1VBQ3JCO1VBQ0EsSUFBSUMsV0FBVyxHQUFHLENBQUMsRUFBRTtZQUNqQjtZQUNBLElBQUtELGVBQWUsR0FBRyxDQUFDLElBQUtDLFdBQVcsRUFBRTtjQUN0Q0QsZUFBZSxFQUFFO1lBQ3JCO1VBQ0osQ0FBQyxNQUFNO1lBQ0hBLGVBQWUsRUFBRTtVQUNyQjtRQUNKO1FBQ0E7UUFDQUEsZUFBZSxHQUFHRCxhQUFhLENBQUNPLEtBQUssQ0FBQyxDQUFDQyxLQUFLLEdBQUdQLGVBQWU7TUFDbEUsQ0FBQyxDQUFDO0lBQ04sQ0FBQyxDQUFDO0VBQ04sQ0FBQztFQUFBLE9BQUE1SSxRQUFBO0FBQUEsRUE3V2lDcUosaURBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNsQmpELElBQU1DLFlBQVksR0FBRyxjQUFjO0FBQ25DLElBQU1DLCtCQUErQixHQUFHLFNBQWxDQSwrQkFBK0JBLENBQUlDLFVBQVU7RUFBQSxPQUFLLENBQUMsQ0FBQ0MsTUFBTSxDQUFDQyxJQUFJLENBQUNGLFVBQVUsQ0FBQ0YsWUFBWSxDQUFDLENBQUMsQ0FBQ3RJLE1BQU07QUFBQTtBQUN0RyxJQUFNMkksc0JBQXNCLEdBQUcsU0FBekJBLHNCQUFzQkEsQ0FBQSxFQUE4QjtFQUFBLFNBQUFDLElBQUEsR0FBQUMsU0FBQSxDQUFBN0ksTUFBQSxFQUF2QjhJLGtCQUFrQixPQUFBQyxLQUFBLENBQUFILElBQUEsR0FBQUksSUFBQSxNQUFBQSxJQUFBLEdBQUFKLElBQUEsRUFBQUksSUFBQTtJQUFsQkYsa0JBQWtCLENBQUFFLElBQUEsSUFBQUgsU0FBQSxDQUFBRyxJQUFBO0VBQUE7RUFDakQsS0FBSyxJQUFJdkQsQ0FBQyxHQUFHLENBQUMsRUFBRUEsQ0FBQyxHQUFHcUQsa0JBQWtCLENBQUM5SSxNQUFNLEVBQUV5RixDQUFDLEVBQUUsRUFBRTtJQUNoRHdELE9BQU8sQ0FBQ0MsR0FBRyxDQUFDSixrQkFBa0IsQ0FBQztJQUMvQixJQUFNTixVQUFVLEdBQUdXLElBQUksQ0FBQ0MsS0FBSyxDQUFDTixrQkFBa0IsQ0FBQ3JELENBQUMsQ0FBQyxDQUFDO0lBQ3BEd0QsT0FBTyxDQUFDQyxHQUFHLENBQUNWLFVBQVUsQ0FBQztJQUN2QixJQUFJRCwrQkFBK0IsQ0FBQ0MsVUFBVSxDQUFDLEVBQUU7TUFDN0MsT0FBT0EsVUFBVTtJQUNyQjtFQUNKO0FBQ0osQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTyxJQUFNYSwyQkFBMkIsR0FBRyxTQUE5QkEsMkJBQTJCQSxDQUFJbkssT0FBTyxFQUFLO0VBQ3BELElBQVFvSyx3QkFBd0IsR0FBd0VwSyxPQUFPLENBQXZHb0ssd0JBQXdCO0lBQUVDLGdDQUFnQyxHQUFzQ3JLLE9BQU8sQ0FBN0VxSyxnQ0FBZ0M7SUFBRUMsK0JBQStCLEdBQUt0SyxPQUFPLENBQTNDc0ssK0JBQStCO0VBQ25HLElBQU1DLGdCQUFnQixHQUFHZCxzQkFBc0IsQ0FBQ1csd0JBQXdCLEVBQUVDLGdDQUFnQyxFQUFFQywrQkFBK0IsQ0FBQztFQUM1SSxJQUFNRSxhQUFhLEdBQUdqQixNQUFNLENBQUNrQixNQUFNLENBQUNGLGdCQUFnQixDQUFDbkIsWUFBWSxDQUFDLENBQUM7RUFDbkUsSUFBTXNCLGVBQWUsR0FBR25CLE1BQU0sQ0FBQ0MsSUFBSSxDQUFDZSxnQkFBZ0IsQ0FBQ25CLFlBQVksQ0FBQyxDQUFDLENBQUN6SCxHQUFHLENBQUMsVUFBQWdKLEdBQUc7SUFBQSxPQUFJQSxHQUFHLENBQUNDLEtBQUssQ0FBQyxHQUFHLENBQUMsQ0FBQ0MsR0FBRyxDQUFDLENBQUM7RUFBQSxFQUFDO0VBRXBHLE9BQU9ILGVBQWUsQ0FBQ0ksTUFBTSxDQUFDLFVBQUNDLEdBQUcsRUFBRUosR0FBRyxFQUFFcEUsQ0FBQyxFQUFLO0lBQzNDd0UsR0FBRyxDQUFDSixHQUFHLENBQUMsR0FBR0gsYUFBYSxDQUFDakUsQ0FBQyxDQUFDO0lBQzNCLE9BQU93RSxHQUFHO0VBQ2QsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO0FBQ1YsQ0FBQyxDOzs7Ozs7Ozs7Ozs7QUM3Qlk7QUFDYixTQUFTLG1CQUFPLENBQUMsa0VBQWM7QUFDL0IsYUFBYSxtQkFBTyxDQUFDLDBFQUFrQjtBQUN2QyxrQkFBa0IsbUJBQU8sQ0FBQyx3RUFBaUI7QUFDM0MsVUFBVSxtQkFBTyxDQUFDLHNEQUFRO0FBQzFCLGlCQUFpQixtQkFBTyxDQUFDLHNFQUFnQjtBQUN6QyxZQUFZLG1CQUFPLENBQUMsNERBQVc7QUFDL0Isa0JBQWtCLG1CQUFPLENBQUMsc0VBQWdCO0FBQzFDLFdBQVcsbUJBQU8sQ0FBQyxrRUFBYztBQUNqQyxpQkFBaUIsbUJBQU8sQ0FBQyxzRUFBZ0I7QUFDekMsa0JBQWtCLG1CQUFPLENBQUMsc0VBQWdCO0FBQzFDLGNBQWMsbUJBQU8sQ0FBQyx3REFBUztBQUMvQixlQUFlLG1CQUFPLENBQUMsc0ZBQXdCO0FBQy9DOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixPQUFPO0FBQzlCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQiw2QkFBNkI7QUFDN0IsMEJBQTBCO0FBQzFCLDBCQUEwQjtBQUMxQixxQkFBcUI7QUFDckI7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4RUFBOEUsT0FBTztBQUNyRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUM7QUFDekMscUJBQXFCO0FBQ3JCLDBCQUEwQjtBQUMxQixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSzs7QUFFTDtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQy9JYTtBQUNiLGFBQWEsbUJBQU8sQ0FBQyw0REFBVztBQUNoQyxjQUFjLG1CQUFPLENBQUMsNERBQVc7QUFDakMsZUFBZSxtQkFBTyxDQUFDLGdFQUFhO0FBQ3BDLGtCQUFrQixtQkFBTyxDQUFDLHdFQUFpQjtBQUMzQyxXQUFXLG1CQUFPLENBQUMsd0RBQVM7QUFDNUIsWUFBWSxtQkFBTyxDQUFDLDREQUFXO0FBQy9CLGlCQUFpQixtQkFBTyxDQUFDLHNFQUFnQjtBQUN6QyxlQUFlLG1CQUFPLENBQUMsa0VBQWM7QUFDckMsWUFBWSxtQkFBTyxDQUFDLDBEQUFVO0FBQzlCLGtCQUFrQixtQkFBTyxDQUFDLHNFQUFnQjtBQUMxQyxxQkFBcUIsbUJBQU8sQ0FBQyxrRkFBc0I7QUFDbkQsd0JBQXdCLG1CQUFPLENBQUMsc0ZBQXdCOztBQUV4RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTztBQUNQO0FBQ0EsT0FBTyxtQ0FBbUMsZ0NBQWdDLGFBQWE7QUFDdkYsOEJBQThCLG1DQUFtQyxhQUFhO0FBQzlFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQSxxREFBcUQ7QUFDckQ7QUFDQSxrREFBa0QsaUJBQWlCLEVBQUU7QUFDckU7QUFDQSx3REFBd0QsYUFBYSxFQUFFLEVBQUU7QUFDekU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7Ozs7Ozs7Ozs7OztBQ3BGQSxrQkFBa0IsbUJBQU8sQ0FBQyxzRUFBZ0I7QUFDMUMsY0FBYyxtQkFBTyxDQUFDLHNFQUFnQjtBQUN0QyxnQkFBZ0IsbUJBQU8sQ0FBQyxvRUFBZTtBQUN2QyxhQUFhLG1CQUFPLENBQUMsb0VBQWU7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7O0FDcEJBLGVBQWUsbUJBQU8sQ0FBQyxrRUFBYztBQUNyQztBQUNBO0FBQ0E7QUFDQTs7Ozs7Ozs7Ozs7OztBQ0phO0FBQ2IsYUFBYSxtQkFBTyxDQUFDLGtGQUFzQjtBQUMzQyxlQUFlLG1CQUFPLENBQUMsc0ZBQXdCO0FBQy9DOztBQUVBO0FBQ0EsaUJBQWlCLG1CQUFPLENBQUMsb0VBQWU7QUFDeEMseUJBQXlCLG1FQUFtRTtBQUM1RixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDOzs7Ozs7Ozs7Ozs7QUNiRDtBQUNBLGNBQWMsbUJBQU8sQ0FBQyw0REFBVztBQUNqQyxjQUFjLG1CQUFPLENBQUMsOEVBQW9COztBQUUxQztBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUMiLCJmaWxlIjoidGhlbWUtYnVuZGxlLmNodW5rLjEwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgaG9va3MgfSBmcm9tICdAYmlnY29tbWVyY2Uvc3RlbmNpbC11dGlscyc7XHJcbmltcG9ydCBDYXRhbG9nUGFnZSBmcm9tICcuL2NhdGFsb2cnO1xyXG5pbXBvcnQgY29tcGFyZVByb2R1Y3RzIGZyb20gJy4vZ2xvYmFsL2NvbXBhcmUtcHJvZHVjdHMnO1xyXG5pbXBvcnQgRmFjZXRlZFNlYXJjaCBmcm9tICcuL2NvbW1vbi9mYWNldGVkLXNlYXJjaCc7XHJcbmltcG9ydCB7IGNyZWF0ZVRyYW5zbGF0aW9uRGljdGlvbmFyeSB9IGZyb20gJy4uL3RoZW1lL2NvbW1vbi91dGlscy90cmFuc2xhdGlvbnMtdXRpbHMnO1xyXG5pbXBvcnQgdXRpbHMgZnJvbSAnQGJpZ2NvbW1lcmNlL3N0ZW5jaWwtdXRpbHMnO1xyXG5pbXBvcnQgJ2ZvdW5kYXRpb24tc2l0ZXMvanMvZm91bmRhdGlvbi9mb3VuZGF0aW9uJztcclxuaW1wb3J0ICdmb3VuZGF0aW9uLXNpdGVzL2pzL2ZvdW5kYXRpb24vZm91bmRhdGlvbi5yZXZlYWwnO1xyXG5pbXBvcnQgXyBmcm9tICdsb2Rhc2gnO1xyXG5pbXBvcnQgJ0BmYW5jeWFwcHMvZmFuY3lib3gvZGlzdC9qcXVlcnkuZmFuY3lib3gubWluJztcclxuaW1wb3J0ICdAZmFuY3lhcHBzL2ZhbmN5Ym94L2Rpc3QvanF1ZXJ5LmZhbmN5Ym94Lm1pbi5jc3MnO1xyXG4kLmZhbmN5Ym94LmRlZmF1bHRzLmhhc2ggPSBmYWxzZTtcclxuaW1wb3J0IGFsZXJ0aWZ5IGZyb20gJ2FsZXJ0aWZ5LmpzL3NyYy9qcy9hbGVydGlmeSc7XHJcbmltcG9ydCAnYWxlcnRpZnkuanMvc3JjL2Nzcy9hbGVydGlmeS5jc3MnO1xyXG5cclxuaW1wb3J0IHsgZGVmYXVsdE1vZGFsIH0gZnJvbSAnLi9nbG9iYWwvbW9kYWwnO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhdGVnb3J5IGV4dGVuZHMgQ2F0YWxvZ1BhZ2Uge1xyXG4gICAgY29uc3RydWN0b3IoY29udGV4dCkge1xyXG4gICAgICAgIGNvbnN0ICRmb3JtID0gJCgnZm9ybVtkYXRhLWNhcnQtaXRlbS1hZGRdJyk7XHJcblxyXG4gICAgICAgIHN1cGVyKGNvbnRleHQpO1xyXG4gICAgICAgIC8vIHRoaXMudmFsaWRhdGlvbkRpY3Rpb25hcnkgPSBjcmVhdGVUcmFuc2xhdGlvbkRpY3Rpb25hcnkoY29udGV4dCk7XHJcbiAgICB9XHJcblxyXG4gICAgc2V0TGl2ZVJlZ2lvbkF0dHJpYnV0ZXMoJGVsZW1lbnQsIHJvbGVUeXBlLCBhcmlhTGl2ZVN0YXR1cykge1xyXG4gICAgICAgICRlbGVtZW50LmF0dHIoe1xyXG4gICAgICAgICAgICByb2xlOiByb2xlVHlwZSxcclxuICAgICAgICAgICAgJ2FyaWEtbGl2ZSc6IGFyaWFMaXZlU3RhdHVzLFxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIG1ha2VTaG9wQnlQcmljZUZpbHRlckFjY2Vzc2libGUoKSB7XHJcbiAgICAgICAgaWYgKCEkKCdbZGF0YS1zaG9wLWJ5LXByaWNlXScpLmxlbmd0aCkgcmV0dXJuO1xyXG5cclxuICAgICAgICBpZiAoJCgnLm5hdkxpc3QtYWN0aW9uJykuaGFzQ2xhc3MoJ2lzLWFjdGl2ZScpKSB7XHJcbiAgICAgICAgICAgICQoJ2EubmF2TGlzdC1hY3Rpb24uaXMtYWN0aXZlJykuZm9jdXMoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgICQoJ2EubmF2TGlzdC1hY3Rpb24nKS5vbignY2xpY2snLCAoKSA9PiB0aGlzLnNldExpdmVSZWdpb25BdHRyaWJ1dGVzKCQoJ3NwYW4ucHJpY2UtZmlsdGVyLW1lc3NhZ2UnKSwgJ3N0YXR1cycsICdhc3NlcnRpdmUnKSk7XHJcbiAgICB9XHJcblxyXG4gICAgLy8gQWRkIHBhZ2UgeWllbGRzIHRpdGxlIHRvIGFueSBwcm9kdWN0IGNhcmQgd2l0aCBwYWdlLXlpZWxkIGN1c3RvbSBmaWVsZHNcclxuICAgIHNldFBhZ2VZaWVsZHNUaXRsZSgpIHtcclxuICAgICAgICBjb25zdCAkcHJvZHVjdENhcmRzID0gJCgnLmpzLXByb2R1Y3QnKTtcclxuXHJcbiAgICAgICAgJHByb2R1Y3RDYXJkcy5lYWNoKGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgIGlmICgkKHRoaXMpLmZpbmQoJy5qcy1wYWdlLXlpZWxkLWRldGFpbHMnKS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgICAgICQodGhpcykuZmluZCgnLmpzLXBhZ2UteWllbGQtdGl0bGUnKS5jc3MoJ2Rpc3BsYXknLCAnbm9uZScpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSlcclxuICAgIH1cclxuICAgIFxyXG4gICAgZGlzcGxheUJyYW5kRmlsdGVycygpIHtcclxuICAgICAgICAvLyBQZXJmb3JtIGNoZWNrIHRvIHNlZSBpZiB0aGVyZSBhcmUgbXVsdGlwbGUgZGlmZmVyZW50IGJyYW5kcyBvZiBwcm9kdWN0cywgYW5kIGRvbid0IGRpc3BsYXkgdGhlIGZpbHRlcnMgaWYgdGhlcmUgaXNuJ3RcclxuICAgICAgICBjb25zdCBwcm9kdWN0QnJhbmRzQXJyYXkgPSB0aGlzLmNvbnRleHQucHJvZHVjdHMubWFwKHByb2R1Y3QgPT4gcHJvZHVjdC5icmFuZC5uYW1lKTtcclxuICAgICAgICBjb25zdCBwcm9kdWN0QnJhbmRzU2V0ID0gbmV3IFNldChwcm9kdWN0QnJhbmRzQXJyYXkpO1xyXG5cclxuICAgICAgICBpZihwcm9kdWN0QnJhbmRzU2V0LnNpemUgPD0gMSkge1xyXG4gICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdCBtb2RhbCA9IGRlZmF1bHRNb2RhbCgpO1xyXG5cclxuICAgICAgICAvLyBDcmVhdGUgYnJhbmQgc2VsZWN0b3Igb3B0aW9ucyBhdCB0b3Agb2YgcGFnZVxyXG4gICAgICAgIGNvbnN0ICRicmFuZFNlbGVjdG9yID0gJCh0aGlzLmdldEJyYW5kU2VsZWN0b3JFbGVtZW50KCkpO1xyXG4gICAgICAgIGNvbnN0ICRjYXJ0cmlkZ2VMaXN0ID0gJCgnI2NhcnRyaWRnZUxpc3RpbmcnKTtcclxuICAgICAgICAkYnJhbmRTZWxlY3Rvci5pbnNlcnRCZWZvcmUoJGNhcnRyaWRnZUxpc3QpO1xyXG5cclxuICAgICAgICAvLyBMb29rIGZvciBicmFuZEZpbHRlciBwYXJhbWV0ZXIgaW4gVVJMXHJcbiAgICAgICAgY29uc3QgcGFyYW1zID0gbmV3IFVSTFNlYXJjaFBhcmFtcyh3aW5kb3cubG9jYXRpb24uc2VhcmNoKTtcclxuICAgICAgICBjb25zdCBicmFuZEZpbHRlciA9IHBhcmFtcy5nZXQoJ2JyYW5kRmlsdGVyJyk7XHJcblxyXG4gICAgICAgIGlmICghYnJhbmRGaWx0ZXIpIHtcclxuICAgICAgICAgICAgLy8gRGlzcGxheSBtb2RhbCB0byBzZWxlY3QgZmlsdGVyIGlmIG5vIGZpbHRlciBhbHJlYWR5IHByZXNlbnRcclxuICAgICAgICAgICAgdGhpcy5zaG93RmlsdGVyTW9kYWwobW9kYWwpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoYnJhbmRGaWx0ZXIgPT09ICdhbGwnKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0QnJhbmRGaWx0ZXIoJ2FsbCcpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoYnJhbmRGaWx0ZXIgPT09ICdpanQnKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0QnJhbmRGaWx0ZXIoJ2lqdCcpO1xyXG4gICAgICAgIH0gZWxzZSBpZiAoYnJhbmRGaWx0ZXIgPT09ICdvcmlnaW5hbCcpIHtcclxuICAgICAgICAgICAgdGhpcy5zZXRCcmFuZEZpbHRlcignb3JpZ2luYWwnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIFNldCBicmFuZCBzZWxlY3RvciBidXR0b25zIHRvIHJ1biBzZXRCcmFuZEZpbHRlciBmdW5jdGlvblxyXG4gICAgICAgICQoJy5qcy1panQtYnJhbmQtc2VsZWN0b3InKS5vbignY2xpY2snLCAoKSA9PiB0aGlzLnNldEJyYW5kRmlsdGVyKCdpanQnLCBtb2RhbCkpO1xyXG4gICAgICAgICQoJy5qcy1vcmlnaW5hbC1icmFuZC1zZWxlY3RvcicpLm9uKCdjbGljaycsICgpID0+IHRoaXMuc2V0QnJhbmRGaWx0ZXIoJ29yaWdpbmFsJywgbW9kYWwpKTtcclxuICAgICAgICAkKCcuanMtYWxsLWJyYW5kLXNlbGVjdG9yJykub24oJ2NsaWNrJywgKCkgPT4gdGhpcy5zZXRCcmFuZEZpbHRlcignYWxsJywgbW9kYWwpKTtcclxuICAgIH1cclxuXHJcbiAgICBnZXRCcmFuZFNlbGVjdG9yRWxlbWVudCgpIHtcclxuICAgICAgICByZXR1cm4gKGA8ZGl2IGNsYXNzPVwiYnJhbmQtc2VsZWN0b3JcIj5cclxuICAgICAgICAgICAgPGgzIGNsYXNzPVwiYnJhbmQtc2VsZWN0b3JfX2hlYWRlclwiPldoYXQgcHJvZHVjdHMgd291bGQgeW91IGxpa2UgdG8gdmlldz88L2gzPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYnJhbmQtc2VsZWN0b3JfX29wdGlvbnNcIj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJidXR0b24gYnV0dG9uLS1wcmltYXJ5IGpzLWlqdC1icmFuZC1zZWxlY3RvclwiPklKVCBCcmFuZGVkPGJyPkNvbnN1bWFibGVzPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnV0dG9uIGJ1dHRvbi0tcHJpbWFyeSBqcy1vcmlnaW5hbC1icmFuZC1zZWxlY3RvclwiPk9yaWdpbmFsPGJyPkNvbnN1bWFibGVzPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnV0dG9uIGJ1dHRvbi0tcHJpbWFyeSBqcy1hbGwtYnJhbmQtc2VsZWN0b3JcIj5BbGw8YnI+Q29uc3VtYWJsZXM8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+YClcclxuICAgIH1cclxuXHJcbiAgICBzaG93RmlsdGVyTW9kYWwobW9kYWwpIHtcclxuICAgICAgICBtb2RhbC5vcGVuKCk7XHJcbiAgICAgICAgbW9kYWwudXBkYXRlQ29udGVudCh0aGlzLmdldEJyYW5kU2VsZWN0b3JFbGVtZW50KCkpO1xyXG4gICAgICAgICQoJyNtb2RhbCcpLmFkZENsYXNzKCdtb2RhbC0tYnJhbmQtZmlsdGVyJyk7XHJcbiAgICAgICAgdGhpcy5maWx0ZXJQcm9kdWN0c0J5QnJhbmQoJ21vZGFsTG9hZCcpO1xyXG4gICAgfVxyXG5cclxuICAgIHNldEJyYW5kRmlsdGVyKGZpbHRlciwgbW9kYWwpIHtcclxuICAgICAgICAvLyBTZXQgYnJhbmRGaWx0ZXIgVVJMIHBhcmFtZXRlclxyXG4gICAgICAgIGxldCB1cmwgPSBuZXcgVVJMKHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcclxuICAgICAgICB1cmwuc2VhcmNoUGFyYW1zLnNldCgnYnJhbmRGaWx0ZXInLCBmaWx0ZXIpO1xyXG4gICAgICAgIHdpbmRvdy5oaXN0b3J5LnJlcGxhY2VTdGF0ZShudWxsLCBudWxsLCB1cmwpOyBcclxuICAgICAgICBcclxuICAgICAgICB0aGlzLmZpbHRlclByb2R1Y3RzQnlCcmFuZChmaWx0ZXIpO1xyXG5cclxuICAgICAgICBpZiAobW9kYWwpIHtcclxuICAgICAgICAgICAgbW9kYWwuY2xvc2UoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZmlsdGVyUHJvZHVjdHNCeUJyYW5kKGZpbHRlcikge1xyXG4gICAgICAgIGNvbnN0ICRpanRDYXJ0cmlkZ2VMaXN0ID0gJCgnI2lqdC1icmFuZC1jYXJ0cmlkZ2UtbGlzdCcpO1xyXG4gICAgICAgIGNvbnN0ICRicmFuZGVkQ2FydHJpZGdlTGlzdCA9ICQoJyNvcmlnaW5hbC1icmFuZC1jYXJ0cmlkZ2UtbGlzdCcpO1xyXG4gICAgICAgIGNvbnN0ICRpanRCcmFuZEJ1dHRvbiA9ICQoJy5qcy1panQtYnJhbmQtc2VsZWN0b3InKTtcclxuICAgICAgICBjb25zdCAkb3JpZ2luYWxCcmFuZEJ1dHRvbiA9ICQoJy5qcy1vcmlnaW5hbC1icmFuZC1zZWxlY3RvcicpO1xyXG4gICAgICAgIGNvbnN0ICRhbGxCcmFuZEJ1dHRvbiA9ICQoJy5qcy1hbGwtYnJhbmQtc2VsZWN0b3InKTtcclxuXHJcbiAgICAgICAgc3dpdGNoIChmaWx0ZXIpIHtcclxuICAgICAgICAgICAgY2FzZSBcIm1vZGFsTG9hZFwiOlxyXG4gICAgICAgICAgICAgICAgLy8gUGxhY2Ugb3JpZ2luYWwgYnJhbmQgY2FydHJpZGdlcyBiZWZvcmUgSUpUIGJyYW5kXHJcbiAgICAgICAgICAgICAgICAkaWp0Q2FydHJpZGdlTGlzdC5zaG93KCk7XHJcbiAgICAgICAgICAgICAgICAkYnJhbmRlZENhcnRyaWRnZUxpc3Quc2hvdygpO1xyXG4gICAgICAgICAgICAgICAgLy8gJGlqdENhcnRyaWRnZUxpc3QuaW5zZXJ0QWZ0ZXIoJGJyYW5kZWRDYXJ0cmlkZ2VMaXN0KTtcclxuICAgICAgICAgICAgICAgICQoJyNpanQtYnJhbmQtY2FydHJpZGdlLWxpc3QnKS5yZW1vdmVDbGFzcygnYWxsLW9yZGVyJyk7XHJcbiAgICAgICAgICAgICAgICAkKCcjb3JpZ2luYWwtYnJhbmQtY2FydHJpZGdlLWxpc3QnKS5yZW1vdmVDbGFzcygnYWxsLW9yZGVyJyk7XHJcbiAgICAgICAgICAgICAgICAkKCcjb3JpZ2luYWwtYnJhbmQtY2FydHJpZGdlLWxpc3QnKS5hZGRDbGFzcygnYWxsLW9yZGVyJyk7XHJcbiAgICAgICAgICAgICAgICAkKCcjaWp0LWJyYW5kLWNhcnRyaWRnZS1saXN0JykuYWRkQ2xhc3MoJ2FsbC1vcmRlcicpO1xyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgIGNhc2UgXCJhbGxcIjpcclxuICAgICAgICAgICAgICAgIC8vIFBsYWNlIG9yaWdpbmFsIGJyYW5kIGNhcnRyaWRnZXMgYmVmb3JlIElKVCBicmFuZFxyXG4gICAgICAgICAgICAgICAgJGlqdENhcnRyaWRnZUxpc3Quc2hvdygpO1xyXG4gICAgICAgICAgICAgICAgJGJyYW5kZWRDYXJ0cmlkZ2VMaXN0LnNob3coKTtcclxuICAgICAgICAgICAgICAgICQoJyNpanQtYnJhbmQtY2FydHJpZGdlLWxpc3QnKS5yZW1vdmVDbGFzcygnYWxsLW9yZGVyJyk7XHJcbiAgICAgICAgICAgICAgICAkKCcjb3JpZ2luYWwtYnJhbmQtY2FydHJpZGdlLWxpc3QnKS5yZW1vdmVDbGFzcygnYWxsLW9yZGVyJyk7XHJcbiAgICAgICAgICAgICAgICAkKCcjb3JpZ2luYWwtYnJhbmQtY2FydHJpZGdlLWxpc3QnKS5hZGRDbGFzcygnYWxsLW9yZGVyJyk7XHJcbiAgICAgICAgICAgICAgICAkKCcjaWp0LWJyYW5kLWNhcnRyaWRnZS1saXN0JykuYWRkQ2xhc3MoJ2FsbC1vcmRlcicpO1xyXG4gICAgICAgICAgICAgICAvLyAkaWp0Q2FydHJpZGdlTGlzdC5pbnNlcnRBZnRlcigkYnJhbmRlZENhcnRyaWRnZUxpc3QpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIFNldCBzZWxlY3RlZCBzdHlsZXMgb24gYnV0dG9ucyBpbiB0aGUgZmlsdGVyXHJcbiAgICAgICAgICAgICAgICAkYWxsQnJhbmRCdXR0b24uYWRkQ2xhc3MoJ2ZpbHRlci1zZWxlY3RlZCcpO1xyXG4gICAgICAgICAgICAgICAgJG9yaWdpbmFsQnJhbmRCdXR0b24ucmVtb3ZlQ2xhc3MoJ2ZpbHRlci1zZWxlY3RlZCcpO1xyXG4gICAgICAgICAgICAgICAgJGlqdEJyYW5kQnV0dG9uLnJlbW92ZUNsYXNzKCdmaWx0ZXItc2VsZWN0ZWQnKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwiaWp0XCI6XHJcbiAgICAgICAgICAgICAgICAvLyBTaG93IElKVCBjYXJ0cmlkZ2VzIGFuZCBoaWRlIG9yaWdpbmFsIGJyYW5kIGNhcnRyaWRnZXNcclxuICAgICAgICAgICAgICAgICRpanRDYXJ0cmlkZ2VMaXN0LnNob3coKTtcclxuICAgICAgICAgICAgICAgICRicmFuZGVkQ2FydHJpZGdlTGlzdC5oaWRlKCk7XHJcbiAgICAgICAgICAgICAgICAkKCcjaWp0LWJyYW5kLWNhcnRyaWRnZS1saXN0JykucmVtb3ZlQ2xhc3MoJ2FsbC1vcmRlcicpO1xyXG4gICAgICAgICAgICAgICAgJCgnI29yaWdpbmFsLWJyYW5kLWNhcnRyaWRnZS1saXN0JykucmVtb3ZlQ2xhc3MoJ2FsbC1vcmRlcicpO1xyXG4gICAgICAgICAgICAgICAgLy8gU2V0IHNlbGVjdGVkIHN0eWxlcyBvbiBidXR0b25zIGluIHRoZSBmaWx0ZXJcclxuICAgICAgICAgICAgICAgICRpanRCcmFuZEJ1dHRvbi5hZGRDbGFzcygnZmlsdGVyLXNlbGVjdGVkJyk7XHJcbiAgICAgICAgICAgICAgICAkb3JpZ2luYWxCcmFuZEJ1dHRvbi5yZW1vdmVDbGFzcygnZmlsdGVyLXNlbGVjdGVkJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgJGFsbEJyYW5kQnV0dG9uLnJlbW92ZUNsYXNzKCdmaWx0ZXItc2VsZWN0ZWQnKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIFwib3JpZ2luYWxcIjpcclxuICAgICAgICAgICAgICAgIC8vIFNob3cgb3JpZ2luYWwgY2FydHJpZGdlcyBhbmQgaGlkZSBJSlQgYnJhbmQgY2FydHJpZGdlc1xyXG4gICAgICAgICAgICAgICAgJGlqdENhcnRyaWRnZUxpc3QuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgJGJyYW5kZWRDYXJ0cmlkZ2VMaXN0LnNob3coKTtcclxuICAgICAgICAgICAgICAgICQoJyNpanQtYnJhbmQtY2FydHJpZGdlLWxpc3QnKS5yZW1vdmVDbGFzcygnYWxsLW9yZGVyJyk7XHJcbiAgICAgICAgICAgICAgICAkKCcjb3JpZ2luYWwtYnJhbmQtY2FydHJpZGdlLWxpc3QnKS5yZW1vdmVDbGFzcygnYWxsLW9yZGVyJyk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gU2V0IHNlbGVjdGVkIHN0eWxlcyBvbiBidXR0b25zIGluIHRoZSBmaWx0ZXJcclxuICAgICAgICAgICAgICAgICRvcmlnaW5hbEJyYW5kQnV0dG9uLmFkZENsYXNzKCdmaWx0ZXItc2VsZWN0ZWQnKTtcclxuICAgICAgICAgICAgICAgICRpanRCcmFuZEJ1dHRvbi5yZW1vdmVDbGFzcygnZmlsdGVyLXNlbGVjdGVkJyk7XHJcbiAgICAgICAgICAgICAgICAkYWxsQnJhbmRCdXR0b24ucmVtb3ZlQ2xhc3MoJ2ZpbHRlci1zZWxlY3RlZCcpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBvblJlYWR5KCkge1xyXG4gICAgICAgIHRoaXMuYXJyYW5nZUZvY3VzT25Tb3J0QnkoKTtcclxuXHJcbiAgICAgICAgdGhpcy5zZXRQYWdlWWllbGRzVGl0bGUoKVxyXG5cclxuICAgICAgICB0aGlzLmFycmFuZ2VDYXRlZ29yeURlc2NyaXB0aW9uKCk7XHJcblxyXG4gICAgICAgICQoJ1tkYXRhLWJ1dHRvbi10eXBlPVwiYWRkLWNhcnRcIl0nKS5vbignY2xpY2snLCAoZSkgPT4gdGhpcy5zZXRMaXZlUmVnaW9uQXR0cmlidXRlcygkKGUuY3VycmVudFRhcmdldCkubmV4dCgpLCAnc3RhdHVzJywgJ3BvbGl0ZScpKTtcclxuXHJcbiAgICAgICAgdGhpcy5tYWtlU2hvcEJ5UHJpY2VGaWx0ZXJBY2Nlc3NpYmxlKCk7XHJcblxyXG4gICAgICAgIGlmICgkKCcjZmFjZXRlZFNlYXJjaCcpLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgLy8gdGhpcy5pbml0RmFjZXRlZFNlYXJjaCgpO1xyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIHRoaXMub25Tb3J0QnlTdWJtaXQgPSB0aGlzLm9uU29ydEJ5U3VibWl0LmJpbmQodGhpcyk7XHJcbiAgICAgICAgICAgIGhvb2tzLm9uKCdzb3J0Qnktc3VibWl0dGVkJywgdGhpcy5vblNvcnRCeVN1Ym1pdCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAkKCdhLnJlc2V0LWJ0bicpLm9uKCdjbGljaycsICgpID0+IHRoaXMuc2V0TGl2ZVJlZ2lvbnNBdHRyaWJ1dGVzKCQoJ3NwYW4ucmVzZXQtbWVzc2FnZScpLCAnc3RhdHVzJywgJ3BvbGl0ZScpKTtcclxuXHJcbiAgICAgICAgdGhpcy5hcmlhTm90aWZ5Tm9Qcm9kdWN0cygpO1xyXG5cclxuICAgICAgICB0aGlzLnRvZ2dsZUZhY2V0cygpO1xyXG5cclxuICAgICAgICB0aGlzLnRvZ2dsZVF1YW50aXR5KCk7XHJcbiAgICAgICAgdGhpcy5hcnJhbmdlQ2F0ZWdvcnlTZW8oKTtcclxuICAgICAgICAvLyBDaGVjayBpZiBjYXJ0cmlkZ2UgbGlzdGVyIHBhZ2UgaXMgZm9yIGEgSFAgYnJhbmQgcHJpbnRlclxyXG4gICAgICAgIGlmICh0aGlzLmNvbnRleHQuY2FydHJpZGdlQnJhbmQgPT09ICdIUCcpIHtcclxuICAgICAgICAgICAgdGhpcy5kaXNwbGF5QnJhbmRGaWx0ZXJzKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgICQoJyNidXR0b24tc2hvd21vcmUtY2F0ZWdvcnknKS5vbignY2xpY2snLCBmdW5jdGlvbiAoKSB7XHJcbiAgICAgICAgICAgICQoXCJ1bC5jYXJ0cmlkZ2Utc2VyaWVzLWxpc3QgbGk6aGlkZGVuXCIpLnNsaWNlKDAsIDEwKS5zaG93KCk7XHJcbiAgICAgICAgICAgIGlmICgkKFwidWwuY2FydHJpZGdlLXNlcmllcy1saXN0IGxpOmhpZGRlblwiKS5sZW5ndGggPT0gMClcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgJCgnI2J1dHRvbi1zaG93bW9yZS1jYXRlZ29yeScpLmhpZGUoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG4gICAgYXJyYW5nZUNhdGVnb3J5U2VvKCkgeyBcclxuICAgICAgICBpZiAoJCgnI3Nlb3RleHQnKS5sZW5ndGggPiAwKSB7ICAgICAgICAgICBcclxuICAgICAgICAgICAgY29uc3Qgc3BlY1NlbyA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwic2VvdGV4dFwiKTtcclxuICAgICAgICAgICAgY29uc3Qgc3BlY0VsZW1lbnRTZW8gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChcImNhcnRyaWRnZS1zZXJpZXMtc2VvXCIpO1xyXG4gICAgICAgICAgICBzcGVjU2VvICYmIHNwZWNFbGVtZW50U2VvPy5hcHBlbmQoc3BlY1Nlbyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgfVxyXG5cclxuICAgIGFycmFuZ2VDYXRlZ29yeURlc2NyaXB0aW9uKCkge1xyXG4gICAgICAgIGNvbnN0IGNhdGVnb3J5RGVzY3JpcHRpb25TZWN0aW9uMiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiY2F0ZWdvcnktc2VjdGlvbjJcIik7XHJcbiAgICAgICAgY29uc3QgY2F0ZWdvcnlEZXNjcmlwdGlvblNlY3Rpb24zID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJjYXRlZ29yeS1zZWN0aW9uM1wiKTtcclxuICAgICAgICBjb25zdCBzZXJpZXNMaXN0ZXJTZWN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJzZXJpZXNMaXN0ZXJcIik7XHJcbiAgICAgICAgY29uc3QgbW9kZWxMaXN0ZXJTZWN0aW9uID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJtb2RlbExpc3RlclwiKTtcclxuXHJcbiAgICAgICAgaWYgKGNhdGVnb3J5RGVzY3JpcHRpb25TZWN0aW9uMikge1xyXG4gICAgICAgICAgICBzZXJpZXNMaXN0ZXJTZWN0aW9uLmFmdGVyKGNhdGVnb3J5RGVzY3JpcHRpb25TZWN0aW9uMik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIFxyXG4gICAgICAgIGlmIChjYXRlZ29yeURlc2NyaXB0aW9uU2VjdGlvbjMpIHtcclxuICAgICAgICAgICAgbW9kZWxMaXN0ZXJTZWN0aW9uLmFmdGVyKGNhdGVnb3J5RGVzY3JpcHRpb25TZWN0aW9uMyk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGFyaWFOb3RpZnlOb1Byb2R1Y3RzKCkge1xyXG4gICAgICAgIGNvbnN0ICRub1Byb2R1Y3RzTWVzc2FnZSA9ICQoJ1tkYXRhLW5vLXByb2R1Y3RzLW5vdGlmaWNhdGlvbl0nKTtcclxuICAgICAgICBpZiAoJG5vUHJvZHVjdHNNZXNzYWdlLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAkbm9Qcm9kdWN0c01lc3NhZ2UuZm9jdXMoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdG9nZ2xlRmFjZXRzKCkge1xyXG4gICAgICAgIGNvbnN0IGZhY2V0VG9nZ2xlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJmYWNldGVkU2VhcmNoLXRvZ2dsZVwiKTtcclxuICAgICAgICBjb25zdCBmYWNldExpc3RzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeUNsYXNzTmFtZShcImZhY2V0ZWRTZWFyY2gtbmF2TGlzdFwiKTtcclxuICAgICAgICBjb25zdCBmYWNldFRpdGxlcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlDbGFzc05hbWUoXCJhY2NvcmRpb24tbmF2aWdhdGlvblwiKTtcclxuXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBmYWNldFRvZ2dsZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgJChmYWNldFRvZ2dsZXNbaV0pLmNsaWNrKGZ1bmN0aW9uKGV2ZW50KXtcclxuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgICAgICAgICAkKGZhY2V0TGlzdHNbaV0pLnRvZ2dsZSgpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vIExvb3AgdGhyb3VnaCBlYWNoIGZhY2V0IG9uIFBMUFxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZmFjZXRUaXRsZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgZmFjZXRUaXRsZXNbaV0uYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICAgICAgLy8gSWYgZmFjZXQgaXMgYWxyZWFkeSBvcGVuIHRoZW4gY2xvc2UgaXRcclxuICAgICAgICAgICAgICAgIGlmIChmYWNldFRpdGxlc1tpXS5jbGFzc0xpc3QuY29udGFpbnMoXCJpcy1vcGVuXCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZmFjZXRUaXRsZXNbaV0uY2xhc3NMaXN0LnJlbW92ZShcImlzLW9wZW5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgZmFjZXRUaXRsZXNbaV0ubmV4dEVsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC5yZW1vdmUoXCJpcy1vcGVuXCIpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHsgLy8gSWYgZmFjZXQgaXMgYWxyZWFkeSBjbG9zZWQgdGhlbiBvcGVuIGl0XHJcbiAgICAgICAgICAgICAgICAgICAgZmFjZXRUaXRsZXNbaV0uY2xhc3NMaXN0LmFkZChcImlzLW9wZW5cIik7XHJcbiAgICAgICAgICAgICAgICAgICAgZmFjZXRUaXRsZXNbaV0ubmV4dEVsZW1lbnRTaWJsaW5nLmNsYXNzTGlzdC5hZGQoXCJpcy1vcGVuXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTsgXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGluaXRGYWNldGVkU2VhcmNoKCkge1xyXG4gICAgICAgIC8vIGNvbnN0IHtcclxuICAgICAgICAvLyAgICAgcHJpY2VfbWluX2V2YWx1YXRpb246IG9uTWluUHJpY2VFcnJvcixcclxuICAgICAgICAvLyAgICAgcHJpY2VfbWF4X2V2YWx1YXRpb246IG9uTWF4UHJpY2VFcnJvcixcclxuICAgICAgICAvLyAgICAgcHJpY2VfbWluX25vdF9lbnRlcmVkOiBtaW5QcmljZU5vdEVudGVyZWQsXHJcbiAgICAgICAgLy8gICAgIHByaWNlX21heF9ub3RfZW50ZXJlZDogbWF4UHJpY2VOb3RFbnRlcmVkLFxyXG4gICAgICAgIC8vICAgICBwcmljZV9pbnZhbGlkX3ZhbHVlOiBvbkludmFsaWRQcmljZSxcclxuICAgICAgICAvLyB9ID0gdGhpcy52YWxpZGF0aW9uRGljdGlvbmFyeTtcclxuICAgICAgICBjb25zdCAkcHJvZHVjdExpc3RpbmdDb250YWluZXIgPSAkKCcjcHJvZHVjdC1saXN0aW5nLWNvbnRhaW5lcicpO1xyXG4gICAgICAgIGNvbnN0ICRmYWNldGVkU2VhcmNoQ29udGFpbmVyID0gJCgnI2ZhY2V0ZWQtc2VhcmNoLWNvbnRhaW5lcicpO1xyXG4gICAgICAgIGNvbnN0IHByb2R1Y3RzUGVyUGFnZSA9IHRoaXMuY29udGV4dC5jYXRlZ29yeVByb2R1Y3RzUGVyUGFnZTtcclxuICAgICAgICBjb25zdCByZXF1ZXN0T3B0aW9ucyA9IHtcclxuICAgICAgICAgICAgY29uZmlnOiB7XHJcbiAgICAgICAgICAgICAgICBjYXRlZ29yeToge1xyXG4gICAgICAgICAgICAgICAgICAgIHNob3BfYnlfcHJpY2U6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdHM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGltaXQ6IHByb2R1Y3RzUGVyUGFnZSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgdGVtcGxhdGU6IHtcclxuICAgICAgICAgICAgICAgIHByb2R1Y3RMaXN0aW5nOiAnY2F0ZWdvcnkvcHJvZHVjdC1saXN0aW5nJyxcclxuICAgICAgICAgICAgICAgIHNpZGViYXI6ICdjYXRlZ29yeS9zaWRlYmFyJyxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc2hvd01vcmU6ICdjYXRlZ29yeS9zaG93LW1vcmUnLFxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIHRoaXMuZmFjZXRlZFNlYXJjaCA9IG5ldyBGYWNldGVkU2VhcmNoKHJlcXVlc3RPcHRpb25zLCAoY29udGVudCkgPT4ge1xyXG4gICAgICAgICAgICAkcHJvZHVjdExpc3RpbmdDb250YWluZXIuaHRtbChjb250ZW50LnByb2R1Y3RMaXN0aW5nKTtcclxuICAgICAgICAgICAgJGZhY2V0ZWRTZWFyY2hDb250YWluZXIuaHRtbChjb250ZW50LnNpZGViYXIpO1xyXG5cclxuICAgICAgICAgICAgJCgnYm9keScpLnRyaWdnZXJIYW5kbGVyKCdjb21wYXJlUmVzZXQnKTtcclxuXHJcbiAgICAgICAgICAgICQoJ2h0bWwsIGJvZHknKS5hbmltYXRlKHtcclxuICAgICAgICAgICAgICAgIHNjcm9sbFRvcDogMCxcclxuICAgICAgICAgICAgfSwgMTAwKTtcclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIC8vIHZhbGlkYXRpb25FcnJvck1lc3NhZ2VzOiB7XHJcbiAgICAgICAgICAgIC8vICAgICBvbk1pblByaWNlRXJyb3IsXHJcbiAgICAgICAgICAgIC8vICAgICBvbk1heFByaWNlRXJyb3IsXHJcbiAgICAgICAgICAgIC8vICAgICBtaW5QcmljZU5vdEVudGVyZWQsXHJcbiAgICAgICAgICAgIC8vICAgICBtYXhQcmljZU5vdEVudGVyZWQsXHJcbiAgICAgICAgICAgIC8vICAgICBvbkludmFsaWRQcmljZSxcclxuICAgICAgICAgICAgLy8gfSxcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqXHJcbiAgICAgKiBIYW5kbGUgYWN0aW9uIHdoZW4gdGhlIHNob3BwZXIgY2xpY2tzIG9uICsgLyAtIGZvciBxdWFudGl0eVxyXG4gICAgICpcclxuICAgICAqL1xyXG4gICAgIHRvZ2dsZVF1YW50aXR5KCkge1xyXG4gICAgICAgIGNvbnN0IHF1YW50aXR5SW5wdXQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5Q2xhc3NOYW1lKFwianMtcXR5LWlucHV0XCIpO1xyXG4gICAgICAgIGxldCBjdXJyZW50UXVhbnRpdHk7XHJcbiAgICAgICAgbGV0IHF1YW50aXR5TWluO1xyXG4gICAgICAgIGxldCBxdWFudGl0eU1heDtcclxuICAgICAgICBjb25zdCBpbmNUb2dnbGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcuanMtaW5jLXF0eScpO1xyXG4gICAgICAgIGNvbnN0IGRlY1RvZ2dsZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5qcy1kZWMtcXR5Jyk7XHJcblxyXG4gICAgICAgIC8vIEdldCBtaW4gYW5kIG1heCBxdWFudGl0eSB2YWx1ZXNcclxuICAgICAgICAkKHF1YW50aXR5SW5wdXQpLmVhY2goZnVuY3Rpb24oaW5kZXgsIHZhbHVlKXtcclxuICAgICAgICAgICAgcXVhbnRpdHlNaW4gPSB2YWx1ZS5kYXRhc2V0LnF1YW50aXR5TWluO1xyXG4gICAgICAgICAgICBxdWFudGl0eU1heCA9IHZhbHVlLmRhdGFzZXQucXVhbnRpdHlNYXg7XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgLy8gV2hlbiBpbmMgcXR5IGlzIGNsaWNrZWRcclxuICAgICAgICAkKGluY1RvZ2dsZSkuZWFjaChmdW5jdGlvbihpbmRleCwgdmFsdWUpIHtcclxuICAgICAgICAgICAgdmFsdWUuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCl7XHJcbiAgICAgICAgICAgICAgICAvLyBTZXQgY3VycmVudFF1YW50aXR5IHZhcmlhYmxlXHJcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVhbnRpdHkgPSBxdWFudGl0eUlucHV0W2luZGV4XS52YWx1ZTtcclxuICAgICAgICAgICAgICAgIC8vIElmIG1heCBxdWFudGl0eSBpcyBzZXRcclxuICAgICAgICAgICAgICAgIGlmIChxdWFudGl0eU1heCA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBDaGVjayBxdWFudGl0eSBkb2VzIG5vdCBleGNlZWQgbWF4XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKChjdXJyZW50UXVhbnRpdHkgKyAxKSA8PSBxdWFudGl0eU1heCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50UXVhbnRpdHkrKztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRRdWFudGl0eSsrO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8gVXBkYXRlIHZhbHVlIG9mIHF1YW50aXR5IGlucHV0IHdpdGggbmV3IHF0eVxyXG4gICAgICAgICAgICAgICAgY3VycmVudFF1YW50aXR5ID0gcXVhbnRpdHlJbnB1dFtpbmRleF0udmFsdWUgPSBjdXJyZW50UXVhbnRpdHk7XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0pO1xyXG5cclxuICAgICAgICAvLyBXaGVuIGRlYyBxdHkgaXMgY2xpY2tlZFxyXG4gICAgICAgICQoZGVjVG9nZ2xlKS5lYWNoKGZ1bmN0aW9uKGluZGV4LCB2YWx1ZSkge1xyXG4gICAgICAgICAgICB2YWx1ZS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24oKXtcclxuICAgICAgICAgICAgICAgIC8vIFNldCBjdXJyZW50UXVhbnRpdHkgdmFyaWFibGVcclxuICAgICAgICAgICAgICAgIGN1cnJlbnRRdWFudGl0eSA9IHF1YW50aXR5SW5wdXRbaW5kZXhdLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgLy8gSWYgbWluIHF1YW50aXR5IGlzIHNldFxyXG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRRdWFudGl0eSA+IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBJZiBxdWFudGl0eSBtaW4gb3B0aW9uIGlzIHNldFxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChxdWFudGl0eU1pbiA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQ2hlY2sgcXVhbnRpdHkgZG9lcyBub3QgZmFsbCBiZWxvdyBtaW5cclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKChjdXJyZW50UXVhbnRpdHkgLSAxKSA+PSBxdWFudGl0eU1pbikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFF1YW50aXR5LS07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50UXVhbnRpdHktLTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAvLyBVcGRhdGUgdmFsdWUgb2YgcXVhbnRpdHkgaW5wdXQgd2l0aCBuZXcgcXR5XHJcbiAgICAgICAgICAgICAgICBjdXJyZW50UXVhbnRpdHkgPSBxdWFudGl0eUlucHV0W2luZGV4XS52YWx1ZSA9IGN1cnJlbnRRdWFudGl0eTtcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbn1cclxuIiwiY29uc3QgVFJBTlNMQVRJT05TID0gJ3RyYW5zbGF0aW9ucyc7XG5jb25zdCBpc1RyYW5zbGF0aW9uRGljdGlvbmFyeU5vdEVtcHR5ID0gKGRpY3Rpb25hcnkpID0+ICEhT2JqZWN0LmtleXMoZGljdGlvbmFyeVtUUkFOU0xBVElPTlNdKS5sZW5ndGg7XG5jb25zdCBjaG9vc2VBY3RpdmVEaWN0aW9uYXJ5ID0gKC4uLmRpY3Rpb25hcnlKc29uTGlzdCkgPT4ge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGljdGlvbmFyeUpzb25MaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKGRpY3Rpb25hcnlKc29uTGlzdCk7XG4gICAgICAgIGNvbnN0IGRpY3Rpb25hcnkgPSBKU09OLnBhcnNlKGRpY3Rpb25hcnlKc29uTGlzdFtpXSk7XG4gICAgICAgIGNvbnNvbGUubG9nKGRpY3Rpb25hcnkpO1xuICAgICAgICBpZiAoaXNUcmFuc2xhdGlvbkRpY3Rpb25hcnlOb3RFbXB0eShkaWN0aW9uYXJ5KSkge1xuICAgICAgICAgICAgcmV0dXJuIGRpY3Rpb25hcnk7XG4gICAgICAgIH1cbiAgICB9XG59O1xuXG4vKipcbiAqIGRlZmluZXMgVHJhbnNsYXRpb24gRGljdGlvbmFyeSB0byB1c2VcbiAqIEBwYXJhbSBjb250ZXh0IHByb3ZpZGVzIGFjY2VzcyB0byAzIHZhbGlkYXRpb24gSlNPTnMgZnJvbSBlbi5qc29uOlxuICogdmFsaWRhdGlvbl9tZXNzYWdlcywgdmFsaWRhdGlvbl9mYWxsYmFja19tZXNzYWdlcyBhbmQgZGVmYXVsdF9tZXNzYWdlc1xuICogQHJldHVybnMge09iamVjdH1cbiAqL1xuZXhwb3J0IGNvbnN0IGNyZWF0ZVRyYW5zbGF0aW9uRGljdGlvbmFyeSA9IChjb250ZXh0KSA9PiB7XG4gICAgY29uc3QgeyB2YWxpZGF0aW9uRGljdGlvbmFyeUpTT04sIHZhbGlkYXRpb25GYWxsYmFja0RpY3Rpb25hcnlKU09OLCB2YWxpZGF0aW9uRGVmYXVsdERpY3Rpb25hcnlKU09OIH0gPSBjb250ZXh0O1xuICAgIGNvbnN0IGFjdGl2ZURpY3Rpb25hcnkgPSBjaG9vc2VBY3RpdmVEaWN0aW9uYXJ5KHZhbGlkYXRpb25EaWN0aW9uYXJ5SlNPTiwgdmFsaWRhdGlvbkZhbGxiYWNrRGljdGlvbmFyeUpTT04sIHZhbGlkYXRpb25EZWZhdWx0RGljdGlvbmFyeUpTT04pO1xuICAgIGNvbnN0IGxvY2FsaXphdGlvbnMgPSBPYmplY3QudmFsdWVzKGFjdGl2ZURpY3Rpb25hcnlbVFJBTlNMQVRJT05TXSk7XG4gICAgY29uc3QgdHJhbnNsYXRpb25LZXlzID0gT2JqZWN0LmtleXMoYWN0aXZlRGljdGlvbmFyeVtUUkFOU0xBVElPTlNdKS5tYXAoa2V5ID0+IGtleS5zcGxpdCgnLicpLnBvcCgpKTtcblxuICAgIHJldHVybiB0cmFuc2xhdGlvbktleXMucmVkdWNlKChhY2MsIGtleSwgaSkgPT4ge1xuICAgICAgICBhY2Nba2V5XSA9IGxvY2FsaXphdGlvbnNbaV07XG4gICAgICAgIHJldHVybiBhY2M7XG4gICAgfSwge30pO1xufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBkUCA9IHJlcXVpcmUoJy4vX29iamVjdC1kcCcpLmY7XG52YXIgY3JlYXRlID0gcmVxdWlyZSgnLi9fb2JqZWN0LWNyZWF0ZScpO1xudmFyIHJlZGVmaW5lQWxsID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUtYWxsJyk7XG52YXIgY3R4ID0gcmVxdWlyZSgnLi9fY3R4Jyk7XG52YXIgYW5JbnN0YW5jZSA9IHJlcXVpcmUoJy4vX2FuLWluc3RhbmNlJyk7XG52YXIgZm9yT2YgPSByZXF1aXJlKCcuL19mb3Itb2YnKTtcbnZhciAkaXRlckRlZmluZSA9IHJlcXVpcmUoJy4vX2l0ZXItZGVmaW5lJyk7XG52YXIgc3RlcCA9IHJlcXVpcmUoJy4vX2l0ZXItc3RlcCcpO1xudmFyIHNldFNwZWNpZXMgPSByZXF1aXJlKCcuL19zZXQtc3BlY2llcycpO1xudmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKTtcbnZhciBmYXN0S2V5ID0gcmVxdWlyZSgnLi9fbWV0YScpLmZhc3RLZXk7XG52YXIgdmFsaWRhdGUgPSByZXF1aXJlKCcuL192YWxpZGF0ZS1jb2xsZWN0aW9uJyk7XG52YXIgU0laRSA9IERFU0NSSVBUT1JTID8gJ19zJyA6ICdzaXplJztcblxudmFyIGdldEVudHJ5ID0gZnVuY3Rpb24gKHRoYXQsIGtleSkge1xuICAvLyBmYXN0IGNhc2VcbiAgdmFyIGluZGV4ID0gZmFzdEtleShrZXkpO1xuICB2YXIgZW50cnk7XG4gIGlmIChpbmRleCAhPT0gJ0YnKSByZXR1cm4gdGhhdC5faVtpbmRleF07XG4gIC8vIGZyb3plbiBvYmplY3QgY2FzZVxuICBmb3IgKGVudHJ5ID0gdGhhdC5fZjsgZW50cnk7IGVudHJ5ID0gZW50cnkubikge1xuICAgIGlmIChlbnRyeS5rID09IGtleSkgcmV0dXJuIGVudHJ5O1xuICB9XG59O1xuXG5tb2R1bGUuZXhwb3J0cyA9IHtcbiAgZ2V0Q29uc3RydWN0b3I6IGZ1bmN0aW9uICh3cmFwcGVyLCBOQU1FLCBJU19NQVAsIEFEREVSKSB7XG4gICAgdmFyIEMgPSB3cmFwcGVyKGZ1bmN0aW9uICh0aGF0LCBpdGVyYWJsZSkge1xuICAgICAgYW5JbnN0YW5jZSh0aGF0LCBDLCBOQU1FLCAnX2knKTtcbiAgICAgIHRoYXQuX3QgPSBOQU1FOyAgICAgICAgIC8vIGNvbGxlY3Rpb24gdHlwZVxuICAgICAgdGhhdC5faSA9IGNyZWF0ZShudWxsKTsgLy8gaW5kZXhcbiAgICAgIHRoYXQuX2YgPSB1bmRlZmluZWQ7ICAgIC8vIGZpcnN0IGVudHJ5XG4gICAgICB0aGF0Ll9sID0gdW5kZWZpbmVkOyAgICAvLyBsYXN0IGVudHJ5XG4gICAgICB0aGF0W1NJWkVdID0gMDsgICAgICAgICAvLyBzaXplXG4gICAgICBpZiAoaXRlcmFibGUgIT0gdW5kZWZpbmVkKSBmb3JPZihpdGVyYWJsZSwgSVNfTUFQLCB0aGF0W0FEREVSXSwgdGhhdCk7XG4gICAgfSk7XG4gICAgcmVkZWZpbmVBbGwoQy5wcm90b3R5cGUsIHtcbiAgICAgIC8vIDIzLjEuMy4xIE1hcC5wcm90b3R5cGUuY2xlYXIoKVxuICAgICAgLy8gMjMuMi4zLjIgU2V0LnByb3RvdHlwZS5jbGVhcigpXG4gICAgICBjbGVhcjogZnVuY3Rpb24gY2xlYXIoKSB7XG4gICAgICAgIGZvciAodmFyIHRoYXQgPSB2YWxpZGF0ZSh0aGlzLCBOQU1FKSwgZGF0YSA9IHRoYXQuX2ksIGVudHJ5ID0gdGhhdC5fZjsgZW50cnk7IGVudHJ5ID0gZW50cnkubikge1xuICAgICAgICAgIGVudHJ5LnIgPSB0cnVlO1xuICAgICAgICAgIGlmIChlbnRyeS5wKSBlbnRyeS5wID0gZW50cnkucC5uID0gdW5kZWZpbmVkO1xuICAgICAgICAgIGRlbGV0ZSBkYXRhW2VudHJ5LmldO1xuICAgICAgICB9XG4gICAgICAgIHRoYXQuX2YgPSB0aGF0Ll9sID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGF0W1NJWkVdID0gMDtcbiAgICAgIH0sXG4gICAgICAvLyAyMy4xLjMuMyBNYXAucHJvdG90eXBlLmRlbGV0ZShrZXkpXG4gICAgICAvLyAyMy4yLjMuNCBTZXQucHJvdG90eXBlLmRlbGV0ZSh2YWx1ZSlcbiAgICAgICdkZWxldGUnOiBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIHZhciB0aGF0ID0gdmFsaWRhdGUodGhpcywgTkFNRSk7XG4gICAgICAgIHZhciBlbnRyeSA9IGdldEVudHJ5KHRoYXQsIGtleSk7XG4gICAgICAgIGlmIChlbnRyeSkge1xuICAgICAgICAgIHZhciBuZXh0ID0gZW50cnkubjtcbiAgICAgICAgICB2YXIgcHJldiA9IGVudHJ5LnA7XG4gICAgICAgICAgZGVsZXRlIHRoYXQuX2lbZW50cnkuaV07XG4gICAgICAgICAgZW50cnkuciA9IHRydWU7XG4gICAgICAgICAgaWYgKHByZXYpIHByZXYubiA9IG5leHQ7XG4gICAgICAgICAgaWYgKG5leHQpIG5leHQucCA9IHByZXY7XG4gICAgICAgICAgaWYgKHRoYXQuX2YgPT0gZW50cnkpIHRoYXQuX2YgPSBuZXh0O1xuICAgICAgICAgIGlmICh0aGF0Ll9sID09IGVudHJ5KSB0aGF0Ll9sID0gcHJldjtcbiAgICAgICAgICB0aGF0W1NJWkVdLS07XG4gICAgICAgIH0gcmV0dXJuICEhZW50cnk7XG4gICAgICB9LFxuICAgICAgLy8gMjMuMi4zLjYgU2V0LnByb3RvdHlwZS5mb3JFYWNoKGNhbGxiYWNrZm4sIHRoaXNBcmcgPSB1bmRlZmluZWQpXG4gICAgICAvLyAyMy4xLjMuNSBNYXAucHJvdG90eXBlLmZvckVhY2goY2FsbGJhY2tmbiwgdGhpc0FyZyA9IHVuZGVmaW5lZClcbiAgICAgIGZvckVhY2g6IGZ1bmN0aW9uIGZvckVhY2goY2FsbGJhY2tmbiAvKiAsIHRoYXQgPSB1bmRlZmluZWQgKi8pIHtcbiAgICAgICAgdmFsaWRhdGUodGhpcywgTkFNRSk7XG4gICAgICAgIHZhciBmID0gY3R4KGNhbGxiYWNrZm4sIGFyZ3VtZW50cy5sZW5ndGggPiAxID8gYXJndW1lbnRzWzFdIDogdW5kZWZpbmVkLCAzKTtcbiAgICAgICAgdmFyIGVudHJ5O1xuICAgICAgICB3aGlsZSAoZW50cnkgPSBlbnRyeSA/IGVudHJ5Lm4gOiB0aGlzLl9mKSB7XG4gICAgICAgICAgZihlbnRyeS52LCBlbnRyeS5rLCB0aGlzKTtcbiAgICAgICAgICAvLyByZXZlcnQgdG8gdGhlIGxhc3QgZXhpc3RpbmcgZW50cnlcbiAgICAgICAgICB3aGlsZSAoZW50cnkgJiYgZW50cnkucikgZW50cnkgPSBlbnRyeS5wO1xuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgLy8gMjMuMS4zLjcgTWFwLnByb3RvdHlwZS5oYXMoa2V5KVxuICAgICAgLy8gMjMuMi4zLjcgU2V0LnByb3RvdHlwZS5oYXModmFsdWUpXG4gICAgICBoYXM6IGZ1bmN0aW9uIGhhcyhrZXkpIHtcbiAgICAgICAgcmV0dXJuICEhZ2V0RW50cnkodmFsaWRhdGUodGhpcywgTkFNRSksIGtleSk7XG4gICAgICB9XG4gICAgfSk7XG4gICAgaWYgKERFU0NSSVBUT1JTKSBkUChDLnByb3RvdHlwZSwgJ3NpemUnLCB7XG4gICAgICBnZXQ6IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHZhbGlkYXRlKHRoaXMsIE5BTUUpW1NJWkVdO1xuICAgICAgfVxuICAgIH0pO1xuICAgIHJldHVybiBDO1xuICB9LFxuICBkZWY6IGZ1bmN0aW9uICh0aGF0LCBrZXksIHZhbHVlKSB7XG4gICAgdmFyIGVudHJ5ID0gZ2V0RW50cnkodGhhdCwga2V5KTtcbiAgICB2YXIgcHJldiwgaW5kZXg7XG4gICAgLy8gY2hhbmdlIGV4aXN0aW5nIGVudHJ5XG4gICAgaWYgKGVudHJ5KSB7XG4gICAgICBlbnRyeS52ID0gdmFsdWU7XG4gICAgLy8gY3JlYXRlIG5ldyBlbnRyeVxuICAgIH0gZWxzZSB7XG4gICAgICB0aGF0Ll9sID0gZW50cnkgPSB7XG4gICAgICAgIGk6IGluZGV4ID0gZmFzdEtleShrZXksIHRydWUpLCAvLyA8LSBpbmRleFxuICAgICAgICBrOiBrZXksICAgICAgICAgICAgICAgICAgICAgICAgLy8gPC0ga2V5XG4gICAgICAgIHY6IHZhbHVlLCAgICAgICAgICAgICAgICAgICAgICAvLyA8LSB2YWx1ZVxuICAgICAgICBwOiBwcmV2ID0gdGhhdC5fbCwgICAgICAgICAgICAgLy8gPC0gcHJldmlvdXMgZW50cnlcbiAgICAgICAgbjogdW5kZWZpbmVkLCAgICAgICAgICAgICAgICAgIC8vIDwtIG5leHQgZW50cnlcbiAgICAgICAgcjogZmFsc2UgICAgICAgICAgICAgICAgICAgICAgIC8vIDwtIHJlbW92ZWRcbiAgICAgIH07XG4gICAgICBpZiAoIXRoYXQuX2YpIHRoYXQuX2YgPSBlbnRyeTtcbiAgICAgIGlmIChwcmV2KSBwcmV2Lm4gPSBlbnRyeTtcbiAgICAgIHRoYXRbU0laRV0rKztcbiAgICAgIC8vIGFkZCB0byBpbmRleFxuICAgICAgaWYgKGluZGV4ICE9PSAnRicpIHRoYXQuX2lbaW5kZXhdID0gZW50cnk7XG4gICAgfSByZXR1cm4gdGhhdDtcbiAgfSxcbiAgZ2V0RW50cnk6IGdldEVudHJ5LFxuICBzZXRTdHJvbmc6IGZ1bmN0aW9uIChDLCBOQU1FLCBJU19NQVApIHtcbiAgICAvLyBhZGQgLmtleXMsIC52YWx1ZXMsIC5lbnRyaWVzLCBbQEBpdGVyYXRvcl1cbiAgICAvLyAyMy4xLjMuNCwgMjMuMS4zLjgsIDIzLjEuMy4xMSwgMjMuMS4zLjEyLCAyMy4yLjMuNSwgMjMuMi4zLjgsIDIzLjIuMy4xMCwgMjMuMi4zLjExXG4gICAgJGl0ZXJEZWZpbmUoQywgTkFNRSwgZnVuY3Rpb24gKGl0ZXJhdGVkLCBraW5kKSB7XG4gICAgICB0aGlzLl90ID0gdmFsaWRhdGUoaXRlcmF0ZWQsIE5BTUUpOyAvLyB0YXJnZXRcbiAgICAgIHRoaXMuX2sgPSBraW5kOyAgICAgICAgICAgICAgICAgICAgIC8vIGtpbmRcbiAgICAgIHRoaXMuX2wgPSB1bmRlZmluZWQ7ICAgICAgICAgICAgICAgIC8vIHByZXZpb3VzXG4gICAgfSwgZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIHRoYXQgPSB0aGlzO1xuICAgICAgdmFyIGtpbmQgPSB0aGF0Ll9rO1xuICAgICAgdmFyIGVudHJ5ID0gdGhhdC5fbDtcbiAgICAgIC8vIHJldmVydCB0byB0aGUgbGFzdCBleGlzdGluZyBlbnRyeVxuICAgICAgd2hpbGUgKGVudHJ5ICYmIGVudHJ5LnIpIGVudHJ5ID0gZW50cnkucDtcbiAgICAgIC8vIGdldCBuZXh0IGVudHJ5XG4gICAgICBpZiAoIXRoYXQuX3QgfHwgISh0aGF0Ll9sID0gZW50cnkgPSBlbnRyeSA/IGVudHJ5Lm4gOiB0aGF0Ll90Ll9mKSkge1xuICAgICAgICAvLyBvciBmaW5pc2ggdGhlIGl0ZXJhdGlvblxuICAgICAgICB0aGF0Ll90ID0gdW5kZWZpbmVkO1xuICAgICAgICByZXR1cm4gc3RlcCgxKTtcbiAgICAgIH1cbiAgICAgIC8vIHJldHVybiBzdGVwIGJ5IGtpbmRcbiAgICAgIGlmIChraW5kID09ICdrZXlzJykgcmV0dXJuIHN0ZXAoMCwgZW50cnkuayk7XG4gICAgICBpZiAoa2luZCA9PSAndmFsdWVzJykgcmV0dXJuIHN0ZXAoMCwgZW50cnkudik7XG4gICAgICByZXR1cm4gc3RlcCgwLCBbZW50cnkuaywgZW50cnkudl0pO1xuICAgIH0sIElTX01BUCA/ICdlbnRyaWVzJyA6ICd2YWx1ZXMnLCAhSVNfTUFQLCB0cnVlKTtcblxuICAgIC8vIGFkZCBbQEBzcGVjaWVzXSwgMjMuMS4yLjIsIDIzLjIuMi4yXG4gICAgc2V0U3BlY2llcyhOQU1FKTtcbiAgfVxufTtcbiIsIid1c2Ugc3RyaWN0JztcbnZhciBnbG9iYWwgPSByZXF1aXJlKCcuL19nbG9iYWwnKTtcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgcmVkZWZpbmUgPSByZXF1aXJlKCcuL19yZWRlZmluZScpO1xudmFyIHJlZGVmaW5lQWxsID0gcmVxdWlyZSgnLi9fcmVkZWZpbmUtYWxsJyk7XG52YXIgbWV0YSA9IHJlcXVpcmUoJy4vX21ldGEnKTtcbnZhciBmb3JPZiA9IHJlcXVpcmUoJy4vX2Zvci1vZicpO1xudmFyIGFuSW5zdGFuY2UgPSByZXF1aXJlKCcuL19hbi1pbnN0YW5jZScpO1xudmFyIGlzT2JqZWN0ID0gcmVxdWlyZSgnLi9faXMtb2JqZWN0Jyk7XG52YXIgZmFpbHMgPSByZXF1aXJlKCcuL19mYWlscycpO1xudmFyICRpdGVyRGV0ZWN0ID0gcmVxdWlyZSgnLi9faXRlci1kZXRlY3QnKTtcbnZhciBzZXRUb1N0cmluZ1RhZyA9IHJlcXVpcmUoJy4vX3NldC10by1zdHJpbmctdGFnJyk7XG52YXIgaW5oZXJpdElmUmVxdWlyZWQgPSByZXF1aXJlKCcuL19pbmhlcml0LWlmLXJlcXVpcmVkJyk7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKE5BTUUsIHdyYXBwZXIsIG1ldGhvZHMsIGNvbW1vbiwgSVNfTUFQLCBJU19XRUFLKSB7XG4gIHZhciBCYXNlID0gZ2xvYmFsW05BTUVdO1xuICB2YXIgQyA9IEJhc2U7XG4gIHZhciBBRERFUiA9IElTX01BUCA/ICdzZXQnIDogJ2FkZCc7XG4gIHZhciBwcm90byA9IEMgJiYgQy5wcm90b3R5cGU7XG4gIHZhciBPID0ge307XG4gIHZhciBmaXhNZXRob2QgPSBmdW5jdGlvbiAoS0VZKSB7XG4gICAgdmFyIGZuID0gcHJvdG9bS0VZXTtcbiAgICByZWRlZmluZShwcm90bywgS0VZLFxuICAgICAgS0VZID09ICdkZWxldGUnID8gZnVuY3Rpb24gKGEpIHtcbiAgICAgICAgcmV0dXJuIElTX1dFQUsgJiYgIWlzT2JqZWN0KGEpID8gZmFsc2UgOiBmbi5jYWxsKHRoaXMsIGEgPT09IDAgPyAwIDogYSk7XG4gICAgICB9IDogS0VZID09ICdoYXMnID8gZnVuY3Rpb24gaGFzKGEpIHtcbiAgICAgICAgcmV0dXJuIElTX1dFQUsgJiYgIWlzT2JqZWN0KGEpID8gZmFsc2UgOiBmbi5jYWxsKHRoaXMsIGEgPT09IDAgPyAwIDogYSk7XG4gICAgICB9IDogS0VZID09ICdnZXQnID8gZnVuY3Rpb24gZ2V0KGEpIHtcbiAgICAgICAgcmV0dXJuIElTX1dFQUsgJiYgIWlzT2JqZWN0KGEpID8gdW5kZWZpbmVkIDogZm4uY2FsbCh0aGlzLCBhID09PSAwID8gMCA6IGEpO1xuICAgICAgfSA6IEtFWSA9PSAnYWRkJyA/IGZ1bmN0aW9uIGFkZChhKSB7IGZuLmNhbGwodGhpcywgYSA9PT0gMCA/IDAgOiBhKTsgcmV0dXJuIHRoaXM7IH1cbiAgICAgICAgOiBmdW5jdGlvbiBzZXQoYSwgYikgeyBmbi5jYWxsKHRoaXMsIGEgPT09IDAgPyAwIDogYSwgYik7IHJldHVybiB0aGlzOyB9XG4gICAgKTtcbiAgfTtcbiAgaWYgKHR5cGVvZiBDICE9ICdmdW5jdGlvbicgfHwgIShJU19XRUFLIHx8IHByb3RvLmZvckVhY2ggJiYgIWZhaWxzKGZ1bmN0aW9uICgpIHtcbiAgICBuZXcgQygpLmVudHJpZXMoKS5uZXh0KCk7XG4gIH0pKSkge1xuICAgIC8vIGNyZWF0ZSBjb2xsZWN0aW9uIGNvbnN0cnVjdG9yXG4gICAgQyA9IGNvbW1vbi5nZXRDb25zdHJ1Y3Rvcih3cmFwcGVyLCBOQU1FLCBJU19NQVAsIEFEREVSKTtcbiAgICByZWRlZmluZUFsbChDLnByb3RvdHlwZSwgbWV0aG9kcyk7XG4gICAgbWV0YS5ORUVEID0gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgaW5zdGFuY2UgPSBuZXcgQygpO1xuICAgIC8vIGVhcmx5IGltcGxlbWVudGF0aW9ucyBub3Qgc3VwcG9ydHMgY2hhaW5pbmdcbiAgICB2YXIgSEFTTlRfQ0hBSU5JTkcgPSBpbnN0YW5jZVtBRERFUl0oSVNfV0VBSyA/IHt9IDogLTAsIDEpICE9IGluc3RhbmNlO1xuICAgIC8vIFY4IH4gIENocm9taXVtIDQwLSB3ZWFrLWNvbGxlY3Rpb25zIHRocm93cyBvbiBwcmltaXRpdmVzLCBidXQgc2hvdWxkIHJldHVybiBmYWxzZVxuICAgIHZhciBUSFJPV1NfT05fUFJJTUlUSVZFUyA9IGZhaWxzKGZ1bmN0aW9uICgpIHsgaW5zdGFuY2UuaGFzKDEpOyB9KTtcbiAgICAvLyBtb3N0IGVhcmx5IGltcGxlbWVudGF0aW9ucyBkb2Vzbid0IHN1cHBvcnRzIGl0ZXJhYmxlcywgbW9zdCBtb2Rlcm4gLSBub3QgY2xvc2UgaXQgY29ycmVjdGx5XG4gICAgdmFyIEFDQ0VQVF9JVEVSQUJMRVMgPSAkaXRlckRldGVjdChmdW5jdGlvbiAoaXRlcikgeyBuZXcgQyhpdGVyKTsgfSk7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tbmV3XG4gICAgLy8gZm9yIGVhcmx5IGltcGxlbWVudGF0aW9ucyAtMCBhbmQgKzAgbm90IHRoZSBzYW1lXG4gICAgdmFyIEJVR0dZX1pFUk8gPSAhSVNfV0VBSyAmJiBmYWlscyhmdW5jdGlvbiAoKSB7XG4gICAgICAvLyBWOCB+IENocm9taXVtIDQyLSBmYWlscyBvbmx5IHdpdGggNSsgZWxlbWVudHNcbiAgICAgIHZhciAkaW5zdGFuY2UgPSBuZXcgQygpO1xuICAgICAgdmFyIGluZGV4ID0gNTtcbiAgICAgIHdoaWxlIChpbmRleC0tKSAkaW5zdGFuY2VbQURERVJdKGluZGV4LCBpbmRleCk7XG4gICAgICByZXR1cm4gISRpbnN0YW5jZS5oYXMoLTApO1xuICAgIH0pO1xuICAgIGlmICghQUNDRVBUX0lURVJBQkxFUykge1xuICAgICAgQyA9IHdyYXBwZXIoZnVuY3Rpb24gKHRhcmdldCwgaXRlcmFibGUpIHtcbiAgICAgICAgYW5JbnN0YW5jZSh0YXJnZXQsIEMsIE5BTUUpO1xuICAgICAgICB2YXIgdGhhdCA9IGluaGVyaXRJZlJlcXVpcmVkKG5ldyBCYXNlKCksIHRhcmdldCwgQyk7XG4gICAgICAgIGlmIChpdGVyYWJsZSAhPSB1bmRlZmluZWQpIGZvck9mKGl0ZXJhYmxlLCBJU19NQVAsIHRoYXRbQURERVJdLCB0aGF0KTtcbiAgICAgICAgcmV0dXJuIHRoYXQ7XG4gICAgICB9KTtcbiAgICAgIEMucHJvdG90eXBlID0gcHJvdG87XG4gICAgICBwcm90by5jb25zdHJ1Y3RvciA9IEM7XG4gICAgfVxuICAgIGlmIChUSFJPV1NfT05fUFJJTUlUSVZFUyB8fCBCVUdHWV9aRVJPKSB7XG4gICAgICBmaXhNZXRob2QoJ2RlbGV0ZScpO1xuICAgICAgZml4TWV0aG9kKCdoYXMnKTtcbiAgICAgIElTX01BUCAmJiBmaXhNZXRob2QoJ2dldCcpO1xuICAgIH1cbiAgICBpZiAoQlVHR1lfWkVSTyB8fCBIQVNOVF9DSEFJTklORykgZml4TWV0aG9kKEFEREVSKTtcbiAgICAvLyB3ZWFrIGNvbGxlY3Rpb25zIHNob3VsZCBub3QgY29udGFpbnMgLmNsZWFyIG1ldGhvZFxuICAgIGlmIChJU19XRUFLICYmIHByb3RvLmNsZWFyKSBkZWxldGUgcHJvdG8uY2xlYXI7XG4gIH1cblxuICBzZXRUb1N0cmluZ1RhZyhDLCBOQU1FKTtcblxuICBPW05BTUVdID0gQztcbiAgJGV4cG9ydCgkZXhwb3J0LkcgKyAkZXhwb3J0LlcgKyAkZXhwb3J0LkYgKiAoQyAhPSBCYXNlKSwgTyk7XG5cbiAgaWYgKCFJU19XRUFLKSBjb21tb24uc2V0U3Ryb25nKEMsIE5BTUUsIElTX01BUCk7XG5cbiAgcmV0dXJuIEM7XG59O1xuIiwidmFyIERFU0NSSVBUT1JTID0gcmVxdWlyZSgnLi9fZGVzY3JpcHRvcnMnKTtcbnZhciBnZXRLZXlzID0gcmVxdWlyZSgnLi9fb2JqZWN0LWtleXMnKTtcbnZhciB0b0lPYmplY3QgPSByZXF1aXJlKCcuL190by1pb2JqZWN0Jyk7XG52YXIgaXNFbnVtID0gcmVxdWlyZSgnLi9fb2JqZWN0LXBpZScpLmY7XG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChpc0VudHJpZXMpIHtcbiAgcmV0dXJuIGZ1bmN0aW9uIChpdCkge1xuICAgIHZhciBPID0gdG9JT2JqZWN0KGl0KTtcbiAgICB2YXIga2V5cyA9IGdldEtleXMoTyk7XG4gICAgdmFyIGxlbmd0aCA9IGtleXMubGVuZ3RoO1xuICAgIHZhciBpID0gMDtcbiAgICB2YXIgcmVzdWx0ID0gW107XG4gICAgdmFyIGtleTtcbiAgICB3aGlsZSAobGVuZ3RoID4gaSkge1xuICAgICAga2V5ID0ga2V5c1tpKytdO1xuICAgICAgaWYgKCFERVNDUklQVE9SUyB8fCBpc0VudW0uY2FsbChPLCBrZXkpKSB7XG4gICAgICAgIHJlc3VsdC5wdXNoKGlzRW50cmllcyA/IFtrZXksIE9ba2V5XV0gOiBPW2tleV0pO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9O1xufTtcbiIsInZhciBpc09iamVjdCA9IHJlcXVpcmUoJy4vX2lzLW9iamVjdCcpO1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoaXQsIFRZUEUpIHtcbiAgaWYgKCFpc09iamVjdChpdCkgfHwgaXQuX3QgIT09IFRZUEUpIHRocm93IFR5cGVFcnJvcignSW5jb21wYXRpYmxlIHJlY2VpdmVyLCAnICsgVFlQRSArICcgcmVxdWlyZWQhJyk7XG4gIHJldHVybiBpdDtcbn07XG4iLCIndXNlIHN0cmljdCc7XG52YXIgc3Ryb25nID0gcmVxdWlyZSgnLi9fY29sbGVjdGlvbi1zdHJvbmcnKTtcbnZhciB2YWxpZGF0ZSA9IHJlcXVpcmUoJy4vX3ZhbGlkYXRlLWNvbGxlY3Rpb24nKTtcbnZhciBTRVQgPSAnU2V0JztcblxuLy8gMjMuMiBTZXQgT2JqZWN0c1xubW9kdWxlLmV4cG9ydHMgPSByZXF1aXJlKCcuL19jb2xsZWN0aW9uJykoU0VULCBmdW5jdGlvbiAoZ2V0KSB7XG4gIHJldHVybiBmdW5jdGlvbiBTZXQoKSB7IHJldHVybiBnZXQodGhpcywgYXJndW1lbnRzLmxlbmd0aCA+IDAgPyBhcmd1bWVudHNbMF0gOiB1bmRlZmluZWQpOyB9O1xufSwge1xuICAvLyAyMy4yLjMuMSBTZXQucHJvdG90eXBlLmFkZCh2YWx1ZSlcbiAgYWRkOiBmdW5jdGlvbiBhZGQodmFsdWUpIHtcbiAgICByZXR1cm4gc3Ryb25nLmRlZih2YWxpZGF0ZSh0aGlzLCBTRVQpLCB2YWx1ZSA9IHZhbHVlID09PSAwID8gMCA6IHZhbHVlLCB2YWx1ZSk7XG4gIH1cbn0sIHN0cm9uZyk7XG4iLCIvLyBodHRwczovL2dpdGh1Yi5jb20vdGMzOS9wcm9wb3NhbC1vYmplY3QtdmFsdWVzLWVudHJpZXNcbnZhciAkZXhwb3J0ID0gcmVxdWlyZSgnLi9fZXhwb3J0Jyk7XG52YXIgJHZhbHVlcyA9IHJlcXVpcmUoJy4vX29iamVjdC10by1hcnJheScpKGZhbHNlKTtcblxuJGV4cG9ydCgkZXhwb3J0LlMsICdPYmplY3QnLCB7XG4gIHZhbHVlczogZnVuY3Rpb24gdmFsdWVzKGl0KSB7XG4gICAgcmV0dXJuICR2YWx1ZXMoaXQpO1xuICB9XG59KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=