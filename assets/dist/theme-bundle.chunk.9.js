(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[9],{

/***/ "./assets/js/theme/auth.js":
/*!*********************************!*\
  !*** ./assets/js/theme/auth.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Auth; });
/* harmony import */ var core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.array.find.js */ "./node_modules/core-js/modules/es6.array.find.js");
/* harmony import */ var core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.object.set-prototype-of.js */ "./node_modules/core-js/modules/es6.object.set-prototype-of.js");
/* harmony import */ var core_js_modules_es6_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_set_prototype_of_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _page_manager__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./page-manager */ "./assets/js/theme/page-manager.js");
/* harmony import */ var _common_state_country__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/state-country */ "./assets/js/theme/common/state-country.js");
/* harmony import */ var _common_nod__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./common/nod */ "./assets/js/theme/common/nod.js");
/* harmony import */ var _common_form_validation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./common/form-validation */ "./assets/js/theme/common/form-validation.js");
/* harmony import */ var _common_models_forms__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./common/models/forms */ "./assets/js/theme/common/models/forms.js");
/* harmony import */ var _common_form_utils__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./common/form-utils */ "./assets/js/theme/common/form-utils.js");


function _inheritsLoose(t, o) { t.prototype = Object.create(o.prototype), t.prototype.constructor = t, _setPrototypeOf(t, o); }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }






var Auth = /*#__PURE__*/function (_PageManager) {
  function Auth(context) {
    var _this;
    _this = _PageManager.call(this, context) || this;
    _this.formCreateSelector = 'form[data-create-account-form]';
    return _this;
  }
  _inheritsLoose(Auth, _PageManager);
  var _proto = Auth.prototype;
  _proto.registerLoginValidation = function registerLoginValidation($loginForm) {
    var _this2 = this;
    var loginModel = _common_models_forms__WEBPACK_IMPORTED_MODULE_6__["default"];
    this.loginValidator = Object(_common_nod__WEBPACK_IMPORTED_MODULE_4__["default"])({
      submit: '.login-form input[type="submit"]'
    });
    this.loginValidator.add([{
      selector: '.login-form input[name="login_email"]',
      validate: function validate(cb, val) {
        var result = loginModel.email(val);
        cb(result);
      },
      errorMessage: this.context.useValidEmail
    }, {
      selector: '.login-form input[name="login_pass"]',
      validate: function validate(cb, val) {
        var result = loginModel.password(val);
        cb(result);
      },
      errorMessage: this.context.enterPass
    }]);
    $loginForm.on('submit', function (event) {
      _this2.loginValidator.performCheck();
      if (_this2.loginValidator.areAll('valid')) {
        return;
      }
      event.preventDefault();
    });
  };
  _proto.registerForgotPasswordValidation = function registerForgotPasswordValidation($forgotPasswordForm) {
    var _this3 = this;
    this.forgotPasswordValidator = Object(_common_nod__WEBPACK_IMPORTED_MODULE_4__["default"])({
      submit: '.forgot-password-form input[type="submit"]'
    });
    this.forgotPasswordValidator.add([{
      selector: '.forgot-password-form input[name="email"]',
      validate: function validate(cb, val) {
        var result = _common_models_forms__WEBPACK_IMPORTED_MODULE_6__["default"].email(val);
        cb(result);
      },
      errorMessage: this.context.useValidEmail
    }]);
    $forgotPasswordForm.on('submit', function (event) {
      _this3.forgotPasswordValidator.performCheck();
      if (_this3.forgotPasswordValidator.areAll('valid')) {
        return;
      }
      event.preventDefault();
    });
  };
  _proto.registerNewPasswordValidation = function registerNewPasswordValidation() {
    var newPasswordForm = '.new-password-form';
    var newPasswordValidator = Object(_common_nod__WEBPACK_IMPORTED_MODULE_4__["default"])({
      submit: $(newPasswordForm + " input[type=\"submit\"]")
    });
    var passwordSelector = $(newPasswordForm + " input[name=\"password\"]");
    var password2Selector = $(newPasswordForm + " input[name=\"password_confirm\"]");
    _common_form_utils__WEBPACK_IMPORTED_MODULE_7__["Validators"].setPasswordValidation(newPasswordValidator, passwordSelector, password2Selector, this.passwordRequirements);
  };
  _proto.registerCreateAccountValidator = function registerCreateAccountValidator($createAccountForm) {
    var _this4 = this;
    var validationModel = Object(_common_form_validation__WEBPACK_IMPORTED_MODULE_5__["default"])($createAccountForm);
    this.createAccountValidator = Object(_common_nod__WEBPACK_IMPORTED_MODULE_4__["default"])({
      submit: this.formCreateSelector + " input[type='submit']"
    });
    var $stateElement = $('[data-field-type="State"]');
    var emailSelector = this.formCreateSelector + " [data-field-type='EmailAddress']";
    var $emailElement = $(emailSelector);
    var passwordSelector = this.formCreateSelector + " [data-field-type='Password']";
    var $passwordElement = $(passwordSelector);
    var password2Selector = this.formCreateSelector + " [data-field-type='ConfirmPassword']";
    var $password2Element = $(password2Selector);
    this.createAccountValidator.add(validationModel);
    if ($stateElement) {
      var $last;

      // Requests the states for a country with AJAX
      Object(_common_state_country__WEBPACK_IMPORTED_MODULE_3__["default"])($stateElement, this.context, function (err, field) {
        if (err) {
          throw new Error(err);
        }
        var $field = $(field);
        if (_this4.createAccountValidator.getStatus($stateElement) !== 'undefined') {
          _this4.createAccountValidator.remove($stateElement);
        }
        if ($last) {
          _this4.createAccountValidator.remove($last);
        }
        if ($field.is('select')) {
          $last = field;
          _common_form_utils__WEBPACK_IMPORTED_MODULE_7__["Validators"].setStateCountryValidation(_this4.createAccountValidator, field);
        } else {
          _common_form_utils__WEBPACK_IMPORTED_MODULE_7__["Validators"].cleanUpStateValidation(field);
        }
        $createAccountForm.find("[data-field-type='State']").attr('tabindex', 12);
      });
    }
    if ($emailElement) {
      this.createAccountValidator.remove(emailSelector);
      _common_form_utils__WEBPACK_IMPORTED_MODULE_7__["Validators"].setEmailValidation(this.createAccountValidator, emailSelector);
    }
    if ($passwordElement && $password2Element) {
      this.createAccountValidator.remove(passwordSelector);
      this.createAccountValidator.remove(password2Selector);
      _common_form_utils__WEBPACK_IMPORTED_MODULE_7__["Validators"].setPasswordValidation(this.createAccountValidator, passwordSelector, password2Selector, this.passwordRequirements);
    }
    $createAccountForm.on('submit', function (event) {
      _this4.createAccountValidator.performCheck();
      if (_this4.createAccountValidator.areAll('valid')) {
        return;
      }
      event.preventDefault();
    });
    $("#aNextStep1").on('click', function (event) {
      event.preventDefault();
      if (_this4.validateStep1()) {
        $("div.create-account-steps li").removeClass("active");
        $("div.create-account-steps li.create-account-step-1").addClass("valid");
        $("div.create-account-steps li.create-account-step-2").addClass("active");
        $("div.account-body div.form-row div.form-field").hide();
        _this4.showStep2();
        return;
      }
    });
    $("div.create-account-steps li a").on("click", function (event) {
      event.preventDefault();
      if (!$(event.target).closest("li").hasClass("valid") || $(event.target).closest("li").hasClass("active")) {
        return;
      }
      if ($("div.create-account-steps li.active").hasClass("create-account-step-1")) {
        if (_this4.validateStep1()) {
          $("div.create-account-steps li.create-account-step-1").addClass("valid");
        } else {
          return;
        }
      } else if ($("div.create-account-steps li.active").hasClass("create-account-step-2")) {
        if (_this4.validateStep2()) {
          $("div.create-account-steps li.create-account-step-2").addClass("valid");
        } else {
          return;
        }
      }
      $("div.create-account-steps li").removeClass("active");
      $("div.account-body div.form-row div.form-field").hide();
      $("a.create-account-nextstep").hide();
      $("div.form-actions").hide();
      $(event.target).closest("li").addClass("active");
      if ($(event.target).closest("li").hasClass("create-account-step-1")) {
        _this4.showStep1();
      }
      if ($(event.target).closest("li").hasClass("create-account-step-2")) {
        _this4.showStep2();
      }
    });
  };
  _proto.validateStep1 = function validateStep1() {
    this.createAccountValidator.performCheck(["input[data-field-type='FirstName']", "input[data-field-type='LastName']", "input[data-field-type='Phone']", "input[data-field-type='EmailAddress']", "input[data-field-type='Password']", "input[data-field-type='ConfirmPassword']"]);
    return this.createAccountValidator.getStatus("input[data-field-type='FirstName']") === _common_nod__WEBPACK_IMPORTED_MODULE_4__["default"].constants.VALID && this.createAccountValidator.getStatus("input[data-field-type='LastName']") === _common_nod__WEBPACK_IMPORTED_MODULE_4__["default"].constants.VALID && this.createAccountValidator.getStatus("input[data-field-type='Phone']") === _common_nod__WEBPACK_IMPORTED_MODULE_4__["default"].constants.VALID && this.createAccountValidator.getStatus("input[data-field-type='EmailAddress']") === _common_nod__WEBPACK_IMPORTED_MODULE_4__["default"].constants.VALID && this.createAccountValidator.getStatus("input[data-field-type='Password']") === _common_nod__WEBPACK_IMPORTED_MODULE_4__["default"].constants.VALID && this.createAccountValidator.getStatus("input[data-field-type='ConfirmPassword']") === _common_nod__WEBPACK_IMPORTED_MODULE_4__["default"].constants.VALID;
  };
  _proto.validateStep2 = function validateStep2() {
    this.createAccountValidator.performCheck();
    return this.createAccountValidator.areAll('valid');
  };
  _proto.showStep1 = function showStep1() {
    $("#FormField_45").show();
    $("div.form-field[data-type='FirstName']").show();
    $("div.form-field[data-type='LastName']").show();
    $("div.form-field[data-type='Phone']").show();
    $("div.form-field[data-type='EmailAddress']").show();
    $("div.form-field[data-type='Password']").show();
    $("div.form-field[data-type='ConfirmPassword']").show();
    $("div.form-field.create_account-next-btn").show();
    $("#aNextStep1").show();
  };
  _proto.showStep2 = function showStep2() {
    $("div.form-field [data-field-type='State']").attr('tabindex', 12);
    $("div.form-field[data-type='AddressLine1']").show();
    $("div.form-field[data-type='City']").show();
    $("div.form-field[data-type='State']").show();
    $("div.form-field[data-type='Zip']").show();
    $("div.form-field[data-type='Country']").show();
    $("div.social-login-field").show();
    $("#aNextStep1").hide();
    $("#FormField_54").show();
    $("#FormField_53").show();
    $(".create_account-custon-checkbox").show();
    $("div.create_account-recaptcha").show();
    $("div.create_account-action-buttons").show();
    $("div.form-actions").show();
    if ($("select[data-field-type='Country'] option:selected").val() == "United Kingdom") {
      $("div.alertBox--country").hide();
    } else {
      $("div.alertBox--country").show();
    }
  }

  /**
   * Request is made in this function to the remote endpoint and pulls back the states for country.
   */;
  _proto.onReady = function onReady() {
    var $createAccountForm = Object(_common_form_utils__WEBPACK_IMPORTED_MODULE_7__["classifyForm"])(this.formCreateSelector);
    var $loginForm = Object(_common_form_utils__WEBPACK_IMPORTED_MODULE_7__["classifyForm"])('.login-form');
    var $forgotPasswordForm = Object(_common_form_utils__WEBPACK_IMPORTED_MODULE_7__["classifyForm"])('.forgot-password-form');
    var $newPasswordForm = Object(_common_form_utils__WEBPACK_IMPORTED_MODULE_7__["classifyForm"])('.new-password-form'); // reset password

    // Injected via auth.html
    this.passwordRequirements = this.context.passwordRequirements;
    if ($loginForm.length) {
      this.registerLoginValidation($loginForm);
    }
    if ($newPasswordForm.length) {
      this.registerNewPasswordValidation();
    }
    if ($forgotPasswordForm.length) {
      this.registerForgotPasswordValidation($forgotPasswordForm);
    }
    if ($createAccountForm.length) {
      this.registerCreateAccountValidator($createAccountForm);
    }
  };
  return Auth;
}(_page_manager__WEBPACK_IMPORTED_MODULE_2__["default"]);

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./assets/js/theme/common/form-validation.js":
/*!***************************************************!*\
  !*** ./assets/js/theme/common/form-validation.js ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var core_js_modules_es6_regexp_split_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.regexp.split.js */ "./node_modules/core-js/modules/es6.regexp.split.js");
/* harmony import */ var core_js_modules_es6_regexp_split_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_split_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_number_constructor_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.number.constructor.js */ "./node_modules/core-js/modules/es6.number.constructor.js");
/* harmony import */ var core_js_modules_es6_number_constructor_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_number_constructor_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.array.find.js */ "./node_modules/core-js/modules/es6.array.find.js");
/* harmony import */ var core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_find_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es6_function_name_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es6.function.name.js */ "./node_modules/core-js/modules/es6.function.name.js");
/* harmony import */ var core_js_modules_es6_function_name_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name_js__WEBPACK_IMPORTED_MODULE_3__);




/**
 * Validate that the given date for the day/month/year select inputs is within potential range
 * @param $formField
 * @param validation
 * @returns {{selector: string, triggeredBy: string, validate: Function, errorMessage: string}}
 */
function buildDateValidation($formField, validation) {
  // No date range restriction, skip
  if (validation.min_date && validation.max_date) {
    var invalidMessage = "Your chosen date must fall between " + validation.min_date + " and " + validation.max_date + ".";
    var formElementId = $formField.attr('id');
    var minSplit = validation.min_date.split('-');
    var maxSplit = validation.max_date.split('-');
    var minDate = new Date(minSplit[0], minSplit[1] - 1, minSplit[2]);
    var maxDate = new Date(maxSplit[0], maxSplit[1] - 1, maxSplit[2]);
    return {
      selector: "#" + formElementId + " select[data-label=\"year\"]",
      triggeredBy: "#" + formElementId + " select:not([data-label=\"year\"])",
      validate: function validate(cb, val) {
        var day = Number($formField.find('select[data-label="day"]').val());
        var month = Number($formField.find('select[data-label="month"]').val()) - 1;
        var year = Number(val);
        var chosenDate = new Date(year, month, day);
        cb(chosenDate >= minDate && chosenDate <= maxDate);
      },
      errorMessage: invalidMessage
    };
  }
}

/**
 * We validate checkboxes separately from single input fields, as they must have at least one checked option
 * from many different inputs
 * @param $formField
 * @param validation
 */
function buildRequiredCheckboxValidation($formField, validation) {
  var formFieldId = $formField.attr('id');
  var primarySelector = "#" + formFieldId + " input:first-of-type";
  var secondarySelector = "#" + formFieldId + " input";
  return {
    selector: primarySelector,
    triggeredBy: secondarySelector,
    validate: function validate(cb) {
      var result = false;
      $(secondarySelector).each(function (index, checkbox) {
        if (checkbox.checked) {
          result = true;
          return false;
        }
      });
      cb(result);
    },
    errorMessage: "The '" + validation.label + "' field cannot be blank."
  };
}
function buildRequiredValidation(validation, selector) {
  return {
    selector: selector,
    validate: function validate(cb, val) {
      cb(val.length > 0);
    },
    errorMessage: "The '" + validation.label + "' field cannot be blank."
  };
}
function buildNumberRangeValidation(validation, formFieldSelector) {
  var invalidMessage = "The value for " + validation.label + " must be between " + validation.min + " and " + validation.max + ".";
  var min = Number(validation.min);
  var max = Number(validation.max);
  return {
    selector: formFieldSelector + " input[name=\"" + validation.name + "\"]",
    validate: function validate(cb, val) {
      var numberVal = Number(val);
      cb(numberVal >= min && numberVal <= max);
    },
    errorMessage: invalidMessage
  };
}
function buildValidation($validateableElement) {
  var validation = $validateableElement.data('validation');
  var fieldValidations = [];
  var formFieldSelector = "#" + $validateableElement.attr('id');
  if (validation.type === 'datechooser') {
    var dateValidation = buildDateValidation($validateableElement, validation);
    if (dateValidation) {
      fieldValidations.push(dateValidation);
    }
  } else if (validation.required && (validation.type === 'checkboxselect' || validation.type === 'radioselect')) {
    fieldValidations.push(buildRequiredCheckboxValidation($validateableElement, validation));
  } else {
    $validateableElement.find('input, select, textarea').each(function (index, element) {
      var $inputElement = $(element);
      var tagName = $inputElement.get(0).tagName;
      var inputName = $inputElement.attr('name');
      var elementSelector = formFieldSelector + " " + tagName + "[name=\"" + inputName + "\"]";
      if (validation.type === 'numberonly') {
        fieldValidations.push(buildNumberRangeValidation(validation, formFieldSelector));
      }
      if (validation.required) {
        fieldValidations.push(buildRequiredValidation(validation, elementSelector));
      }
    });
  }
  return fieldValidations;
}

/**
 * Builds the validation model for dynamic forms
 * @param $form
 * @returns {Array}
 */
/* harmony default export */ __webpack_exports__["default"] = (function ($form) {
  var validationsToPerform = [];
  $form.find('[data-validation]').each(function (index, input) {
    validationsToPerform = validationsToPerform.concat(buildValidation($(input)));
  });
  return validationsToPerform;
});
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "./node_modules/jquery/dist/jquery.min.js")))

/***/ }),

/***/ "./node_modules/lodash/_baseFor.js":
/*!*****************************************!*\
  !*** ./node_modules/lodash/_baseFor.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var createBaseFor = __webpack_require__(/*! ./_createBaseFor */ "./node_modules/lodash/_createBaseFor.js");

/**
 * The base implementation of `baseForOwn` which iterates over `object`
 * properties returned by `keysFunc` and invokes `iteratee` for each property.
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {Function} keysFunc The function to get the keys of `object`.
 * @returns {Object} Returns `object`.
 */
var baseFor = createBaseFor();

module.exports = baseFor;


/***/ }),

/***/ "./node_modules/lodash/_baseForOwn.js":
/*!********************************************!*\
  !*** ./node_modules/lodash/_baseForOwn.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var baseFor = __webpack_require__(/*! ./_baseFor */ "./node_modules/lodash/_baseFor.js"),
    keys = __webpack_require__(/*! ./keys */ "./node_modules/lodash/keys.js");

/**
 * The base implementation of `_.forOwn` without support for iteratee shorthands.
 *
 * @private
 * @param {Object} object The object to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Object} Returns `object`.
 */
function baseForOwn(object, iteratee) {
  return object && baseFor(object, iteratee, keys);
}

module.exports = baseForOwn;


/***/ }),

/***/ "./node_modules/lodash/_baseIteratee.js":
/*!**********************************************!*\
  !*** ./node_modules/lodash/_baseIteratee.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * This method returns the first argument it receives.
 *
 * @static
 * @since 0.1.0
 * @memberOf _
 * @category Util
 * @param {*} value Any value.
 * @returns {*} Returns `value`.
 * @example
 *
 * var object = { 'a': 1 };
 *
 * console.log(_.identity(object) === object);
 * // => true
 */
function identity(value) {
  return value;
}

module.exports = identity;


/***/ }),

/***/ "./node_modules/lodash/_createBaseFor.js":
/*!***********************************************!*\
  !*** ./node_modules/lodash/_createBaseFor.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Creates a base function for methods like `_.forIn` and `_.forOwn`.
 *
 * @private
 * @param {boolean} [fromRight] Specify iterating from right to left.
 * @returns {Function} Returns the new base function.
 */
function createBaseFor(fromRight) {
  return function(object, iteratee, keysFunc) {
    var index = -1,
        iterable = Object(object),
        props = keysFunc(object),
        length = props.length;

    while (length--) {
      var key = props[fromRight ? length : ++index];
      if (iteratee(iterable[key], key, iterable) === false) {
        break;
      }
    }
    return object;
  };
}

module.exports = createBaseFor;


/***/ }),

/***/ "./node_modules/lodash/each.js":
/*!*************************************!*\
  !*** ./node_modules/lodash/each.js ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * A specialized version of `_.forEach` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @returns {Array} Returns `array`.
 */
function arrayEach(array, iteratee) {
  var index = -1,
      length = array == null ? 0 : array.length;

  while (++index < length) {
    if (iteratee(array[index], index, array) === false) {
      break;
    }
  }
  return array;
}

module.exports = arrayEach;


/***/ }),

/***/ "./node_modules/lodash/transform.js":
/*!******************************************!*\
  !*** ./node_modules/lodash/transform.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var arrayEach = __webpack_require__(/*! ./_arrayEach */ "./node_modules/lodash/_arrayEach.js"),
    baseCreate = __webpack_require__(/*! ./_baseCreate */ "./node_modules/lodash/_baseCreate.js"),
    baseForOwn = __webpack_require__(/*! ./_baseForOwn */ "./node_modules/lodash/_baseForOwn.js"),
    baseIteratee = __webpack_require__(/*! ./_baseIteratee */ "./node_modules/lodash/_baseIteratee.js"),
    getPrototype = __webpack_require__(/*! ./_getPrototype */ "./node_modules/lodash/_getPrototype.js"),
    isArray = __webpack_require__(/*! ./isArray */ "./node_modules/lodash/isArray.js"),
    isBuffer = __webpack_require__(/*! ./isBuffer */ "./node_modules/lodash/isBuffer.js"),
    isFunction = __webpack_require__(/*! ./isFunction */ "./node_modules/lodash/isFunction.js"),
    isObject = __webpack_require__(/*! ./isObject */ "./node_modules/lodash/isObject.js"),
    isTypedArray = __webpack_require__(/*! ./isTypedArray */ "./node_modules/lodash/isTypedArray.js");

/**
 * An alternative to `_.reduce`; this method transforms `object` to a new
 * `accumulator` object which is the result of running each of its own
 * enumerable string keyed properties thru `iteratee`, with each invocation
 * potentially mutating the `accumulator` object. If `accumulator` is not
 * provided, a new object with the same `[[Prototype]]` will be used. The
 * iteratee is invoked with four arguments: (accumulator, value, key, object).
 * Iteratee functions may exit iteration early by explicitly returning `false`.
 *
 * @static
 * @memberOf _
 * @since 1.3.0
 * @category Object
 * @param {Object} object The object to iterate over.
 * @param {Function} [iteratee=_.identity] The function invoked per iteration.
 * @param {*} [accumulator] The custom accumulator value.
 * @returns {*} Returns the accumulated value.
 * @example
 *
 * _.transform([2, 3, 4], function(result, n) {
 *   result.push(n *= n);
 *   return n % 2 == 0;
 * }, []);
 * // => [4, 9]
 *
 * _.transform({ 'a': 1, 'b': 2, 'c': 1 }, function(result, value, key) {
 *   (result[value] || (result[value] = [])).push(key);
 * }, {});
 * // => { '1': ['a', 'c'], '2': ['b'] }
 */
function transform(object, iteratee, accumulator) {
  var isArr = isArray(object),
      isArrLike = isArr || isBuffer(object) || isTypedArray(object);

  iteratee = baseIteratee(iteratee, 4);
  if (accumulator == null) {
    var Ctor = object && object.constructor;
    if (isArrLike) {
      accumulator = isArr ? new Ctor : [];
    }
    else if (isObject(object)) {
      accumulator = isFunction(Ctor) ? baseCreate(getPrototype(object)) : {};
    }
    else {
      accumulator = {};
    }
  }
  (isArrLike ? arrayEach : baseForOwn)(object, function(value, index, object) {
    return iteratee(accumulator, value, index, object);
  });
  return accumulator;
}

module.exports = transform;


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvYXV0aC5qcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdGhlbWUvY29tbW9uL2Zvcm0tdmFsaWRhdGlvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvbG9kYXNoL19iYXNlRm9yLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2Jhc2VGb3JPd24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9fYmFzZUl0ZXJhdGVlLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvX2NyZWF0ZUJhc2VGb3IuanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL2xvZGFzaC9lYWNoLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9sb2Rhc2gvdHJhbnNmb3JtLmpzIl0sIm5hbWVzIjpbIkF1dGgiLCJfUGFnZU1hbmFnZXIiLCJjb250ZXh0IiwiX3RoaXMiLCJjYWxsIiwiZm9ybUNyZWF0ZVNlbGVjdG9yIiwiX2luaGVyaXRzTG9vc2UiLCJfcHJvdG8iLCJwcm90b3R5cGUiLCJyZWdpc3RlckxvZ2luVmFsaWRhdGlvbiIsIiRsb2dpbkZvcm0iLCJfdGhpczIiLCJsb2dpbk1vZGVsIiwiZm9ybXMiLCJsb2dpblZhbGlkYXRvciIsIm5vZCIsInN1Ym1pdCIsImFkZCIsInNlbGVjdG9yIiwidmFsaWRhdGUiLCJjYiIsInZhbCIsInJlc3VsdCIsImVtYWlsIiwiZXJyb3JNZXNzYWdlIiwidXNlVmFsaWRFbWFpbCIsInBhc3N3b3JkIiwiZW50ZXJQYXNzIiwib24iLCJldmVudCIsInBlcmZvcm1DaGVjayIsImFyZUFsbCIsInByZXZlbnREZWZhdWx0IiwicmVnaXN0ZXJGb3Jnb3RQYXNzd29yZFZhbGlkYXRpb24iLCIkZm9yZ290UGFzc3dvcmRGb3JtIiwiX3RoaXMzIiwiZm9yZ290UGFzc3dvcmRWYWxpZGF0b3IiLCJyZWdpc3Rlck5ld1Bhc3N3b3JkVmFsaWRhdGlvbiIsIm5ld1Bhc3N3b3JkRm9ybSIsIm5ld1Bhc3N3b3JkVmFsaWRhdG9yIiwiJCIsInBhc3N3b3JkU2VsZWN0b3IiLCJwYXNzd29yZDJTZWxlY3RvciIsIlZhbGlkYXRvcnMiLCJzZXRQYXNzd29yZFZhbGlkYXRpb24iLCJwYXNzd29yZFJlcXVpcmVtZW50cyIsInJlZ2lzdGVyQ3JlYXRlQWNjb3VudFZhbGlkYXRvciIsIiRjcmVhdGVBY2NvdW50Rm9ybSIsIl90aGlzNCIsInZhbGlkYXRpb25Nb2RlbCIsInZhbGlkYXRpb24iLCJjcmVhdGVBY2NvdW50VmFsaWRhdG9yIiwiJHN0YXRlRWxlbWVudCIsImVtYWlsU2VsZWN0b3IiLCIkZW1haWxFbGVtZW50IiwiJHBhc3N3b3JkRWxlbWVudCIsIiRwYXNzd29yZDJFbGVtZW50IiwiJGxhc3QiLCJzdGF0ZUNvdW50cnkiLCJlcnIiLCJmaWVsZCIsIkVycm9yIiwiJGZpZWxkIiwiZ2V0U3RhdHVzIiwicmVtb3ZlIiwiaXMiLCJzZXRTdGF0ZUNvdW50cnlWYWxpZGF0aW9uIiwiY2xlYW5VcFN0YXRlVmFsaWRhdGlvbiIsImZpbmQiLCJhdHRyIiwic2V0RW1haWxWYWxpZGF0aW9uIiwidmFsaWRhdGVTdGVwMSIsInJlbW92ZUNsYXNzIiwiYWRkQ2xhc3MiLCJoaWRlIiwic2hvd1N0ZXAyIiwidGFyZ2V0IiwiY2xvc2VzdCIsImhhc0NsYXNzIiwidmFsaWRhdGVTdGVwMiIsInNob3dTdGVwMSIsImNvbnN0YW50cyIsIlZBTElEIiwic2hvdyIsIm9uUmVhZHkiLCJjbGFzc2lmeUZvcm0iLCIkbmV3UGFzc3dvcmRGb3JtIiwibGVuZ3RoIiwiUGFnZU1hbmFnZXIiLCJidWlsZERhdGVWYWxpZGF0aW9uIiwiJGZvcm1GaWVsZCIsIm1pbl9kYXRlIiwibWF4X2RhdGUiLCJpbnZhbGlkTWVzc2FnZSIsImZvcm1FbGVtZW50SWQiLCJtaW5TcGxpdCIsInNwbGl0IiwibWF4U3BsaXQiLCJtaW5EYXRlIiwiRGF0ZSIsIm1heERhdGUiLCJ0cmlnZ2VyZWRCeSIsImRheSIsIk51bWJlciIsIm1vbnRoIiwieWVhciIsImNob3NlbkRhdGUiLCJidWlsZFJlcXVpcmVkQ2hlY2tib3hWYWxpZGF0aW9uIiwiZm9ybUZpZWxkSWQiLCJwcmltYXJ5U2VsZWN0b3IiLCJzZWNvbmRhcnlTZWxlY3RvciIsImVhY2giLCJpbmRleCIsImNoZWNrYm94IiwiY2hlY2tlZCIsImxhYmVsIiwiYnVpbGRSZXF1aXJlZFZhbGlkYXRpb24iLCJidWlsZE51bWJlclJhbmdlVmFsaWRhdGlvbiIsImZvcm1GaWVsZFNlbGVjdG9yIiwibWluIiwibWF4IiwibmFtZSIsIm51bWJlclZhbCIsImJ1aWxkVmFsaWRhdGlvbiIsIiR2YWxpZGF0ZWFibGVFbGVtZW50IiwiZGF0YSIsImZpZWxkVmFsaWRhdGlvbnMiLCJ0eXBlIiwiZGF0ZVZhbGlkYXRpb24iLCJwdXNoIiwicmVxdWlyZWQiLCJlbGVtZW50IiwiJGlucHV0RWxlbWVudCIsInRhZ05hbWUiLCJnZXQiLCJpbnB1dE5hbWUiLCJlbGVtZW50U2VsZWN0b3IiLCIkZm9ybSIsInZhbGlkYXRpb25zVG9QZXJmb3JtIiwiaW5wdXQiLCJjb25jYXQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXlDO0FBQ1M7QUFDbkI7QUFDbUI7QUFDUjtBQUNxQjtBQUFBLElBRTFDQSxJQUFJLDBCQUFBQyxZQUFBO0VBQ3JCLFNBQUFELEtBQVlFLE9BQU8sRUFBRTtJQUFBLElBQUFDLEtBQUE7SUFDakJBLEtBQUEsR0FBQUYsWUFBQSxDQUFBRyxJQUFBLE9BQU1GLE9BQU8sQ0FBQztJQUNkQyxLQUFBLENBQUtFLGtCQUFrQixHQUFHLGdDQUFnQztJQUFDLE9BQUFGLEtBQUE7RUFDL0Q7RUFBQ0csY0FBQSxDQUFBTixJQUFBLEVBQUFDLFlBQUE7RUFBQSxJQUFBTSxNQUFBLEdBQUFQLElBQUEsQ0FBQVEsU0FBQTtFQUFBRCxNQUFBLENBRURFLHVCQUF1QixHQUF2QixTQUFBQSx1QkFBdUJBLENBQUNDLFVBQVUsRUFB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QUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxNQUFNO0FBQ2pCLFdBQVcsU0FBUztBQUNwQixhQUFhLE1BQU07QUFDbkI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7Ozs7Ozs7Ozs7OztBQ3JCQSxnQkFBZ0IsbUJBQU8sQ0FBQyx5REFBYztBQUN0QyxpQkFBaUIsbUJBQU8sQ0FBQywyREFBZTtBQUN4QyxpQkFBaUIsbUJBQU8sQ0FBQywyREFBZTtBQUN4QyxtQkFBbUIsbUJBQU8sQ0FBQywrREFBaUI7QUFDNUMsbUJBQW1CLG1CQUFPLENBQUMsK0RBQWlCO0FBQzVDLGNBQWMsbUJBQU8sQ0FBQyxtREFBVztBQUNqQyxlQUFlLG1CQUFPLENBQUMscURBQVk7QUFDbkMsaUJBQWlCLG1CQUFPLENBQUMseURBQWM7QUFDdkMsZUFBZSxtQkFBTyxDQUFDLHFEQUFZO0FBQ25DLG1CQUFtQixtQkFBTyxDQUFDLDZEQUFnQjs7QUFFM0M7QUFDQSxnQ0FBZ0M7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsT0FBTztBQUNsQixXQUFXLFNBQVM7QUFDcEIsV0FBVyxFQUFFO0FBQ2IsYUFBYSxFQUFFO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUk7QUFDSjtBQUNBO0FBQ0EsZ0JBQWdCLHlCQUF5QjtBQUN6QztBQUNBLElBQUksSUFBSTtBQUNSLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTs7QUFFQSIsImZpbGUiOiJ0aGVtZS1idW5kbGUuY2h1bmsuOS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBQYWdlTWFuYWdlciBmcm9tICcuL3BhZ2UtbWFuYWdlcic7XHJcbmltcG9ydCBzdGF0ZUNvdW50cnkgZnJvbSAnLi9jb21tb24vc3RhdGUtY291bnRyeSc7XHJcbmltcG9ydCBub2QgZnJvbSAnLi9jb21tb24vbm9kJztcclxuaW1wb3J0IHZhbGlkYXRpb24gZnJvbSAnLi9jb21tb24vZm9ybS12YWxpZGF0aW9uJztcclxuaW1wb3J0IGZvcm1zIGZyb20gJy4vY29tbW9uL21vZGVscy9mb3Jtcyc7XHJcbmltcG9ydCB7IGNsYXNzaWZ5Rm9ybSwgVmFsaWRhdG9ycyB9IGZyb20gJy4vY29tbW9uL2Zvcm0tdXRpbHMnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXV0aCBleHRlbmRzIFBhZ2VNYW5hZ2VyIHtcclxuICAgIGNvbnN0cnVjdG9yKGNvbnRleHQpIHtcclxuICAgICAgICBzdXBlcihjb250ZXh0KTtcclxuICAgICAgICB0aGlzLmZvcm1DcmVhdGVTZWxlY3RvciA9ICdmb3JtW2RhdGEtY3JlYXRlLWFjY291bnQtZm9ybV0nO1xyXG4gICAgfVxyXG5cclxuICAgIHJlZ2lzdGVyTG9naW5WYWxpZGF0aW9uKCRsb2dpbkZvcm0pIHtcclxuICAgICAgICBjb25zdCBsb2dpbk1vZGVsID0gZm9ybXM7XHJcblxyXG4gICAgICAgIHRoaXMubG9naW5WYWxpZGF0b3IgPSBub2Qoe1xyXG4gICAgICAgICAgICBzdWJtaXQ6ICcubG9naW4tZm9ybSBpbnB1dFt0eXBlPVwic3VibWl0XCJdJyxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5sb2dpblZhbGlkYXRvci5hZGQoW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJy5sb2dpbi1mb3JtIGlucHV0W25hbWU9XCJsb2dpbl9lbWFpbFwiXScsXHJcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZTogKGNiLCB2YWwpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBsb2dpbk1vZGVsLmVtYWlsKHZhbCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNiKHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiB0aGlzLmNvbnRleHQudXNlVmFsaWRFbWFpbCxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgc2VsZWN0b3I6ICcubG9naW4tZm9ybSBpbnB1dFtuYW1lPVwibG9naW5fcGFzc1wiXScsXHJcbiAgICAgICAgICAgICAgICB2YWxpZGF0ZTogKGNiLCB2YWwpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBsb2dpbk1vZGVsLnBhc3N3b3JkKHZhbCk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGNiKHJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZXJyb3JNZXNzYWdlOiB0aGlzLmNvbnRleHQuZW50ZXJQYXNzLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIF0pO1xyXG5cclxuICAgICAgICAkbG9naW5Gb3JtLm9uKCdzdWJtaXQnLCBldmVudCA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMubG9naW5WYWxpZGF0b3IucGVyZm9ybUNoZWNrKCk7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5sb2dpblZhbGlkYXRvci5hcmVBbGwoJ3ZhbGlkJykpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZWdpc3RlckZvcmdvdFBhc3N3b3JkVmFsaWRhdGlvbigkZm9yZ290UGFzc3dvcmRGb3JtKSB7XHJcbiAgICAgICAgdGhpcy5mb3Jnb3RQYXNzd29yZFZhbGlkYXRvciA9IG5vZCh7XHJcbiAgICAgICAgICAgIHN1Ym1pdDogJy5mb3Jnb3QtcGFzc3dvcmQtZm9ybSBpbnB1dFt0eXBlPVwic3VibWl0XCJdJyxcclxuICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgdGhpcy5mb3Jnb3RQYXNzd29yZFZhbGlkYXRvci5hZGQoW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBzZWxlY3RvcjogJy5mb3Jnb3QtcGFzc3dvcmQtZm9ybSBpbnB1dFtuYW1lPVwiZW1haWxcIl0nLFxyXG4gICAgICAgICAgICAgICAgdmFsaWRhdGU6IChjYiwgdmFsKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gZm9ybXMuZW1haWwodmFsKTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgY2IocmVzdWx0KTtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlcnJvck1lc3NhZ2U6IHRoaXMuY29udGV4dC51c2VWYWxpZEVtYWlsLFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgIF0pO1xyXG5cclxuICAgICAgICAkZm9yZ290UGFzc3dvcmRGb3JtLm9uKCdzdWJtaXQnLCBldmVudCA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuZm9yZ290UGFzc3dvcmRWYWxpZGF0b3IucGVyZm9ybUNoZWNrKCk7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy5mb3Jnb3RQYXNzd29yZFZhbGlkYXRvci5hcmVBbGwoJ3ZhbGlkJykpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICByZWdpc3Rlck5ld1Bhc3N3b3JkVmFsaWRhdGlvbigpIHtcclxuICAgICAgICBjb25zdCBuZXdQYXNzd29yZEZvcm0gPSAnLm5ldy1wYXNzd29yZC1mb3JtJztcclxuICAgICAgICBjb25zdCBuZXdQYXNzd29yZFZhbGlkYXRvciA9IG5vZCh7XHJcbiAgICAgICAgICAgIHN1Ym1pdDogJChgJHtuZXdQYXNzd29yZEZvcm19IGlucHV0W3R5cGU9XCJzdWJtaXRcIl1gKSxcclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zdCBwYXNzd29yZFNlbGVjdG9yID0gJChgJHtuZXdQYXNzd29yZEZvcm19IGlucHV0W25hbWU9XCJwYXNzd29yZFwiXWApO1xyXG4gICAgICAgIGNvbnN0IHBhc3N3b3JkMlNlbGVjdG9yID0gJChgJHtuZXdQYXNzd29yZEZvcm19IGlucHV0W25hbWU9XCJwYXNzd29yZF9jb25maXJtXCJdYCk7XHJcblxyXG4gICAgICAgIFZhbGlkYXRvcnMuc2V0UGFzc3dvcmRWYWxpZGF0aW9uKFxyXG4gICAgICAgICAgICBuZXdQYXNzd29yZFZhbGlkYXRvcixcclxuICAgICAgICAgICAgcGFzc3dvcmRTZWxlY3RvcixcclxuICAgICAgICAgICAgcGFzc3dvcmQyU2VsZWN0b3IsXHJcbiAgICAgICAgICAgIHRoaXMucGFzc3dvcmRSZXF1aXJlbWVudHMsXHJcbiAgICAgICAgKTtcclxuICAgIH1cclxuXHJcbiAgICByZWdpc3RlckNyZWF0ZUFjY291bnRWYWxpZGF0b3IoJGNyZWF0ZUFjY291bnRGb3JtKSB7XHJcbiAgICAgICAgY29uc3QgdmFsaWRhdGlvbk1vZGVsID0gdmFsaWRhdGlvbigkY3JlYXRlQWNjb3VudEZvcm0pO1xyXG4gICAgICAgIHRoaXMuY3JlYXRlQWNjb3VudFZhbGlkYXRvciA9IG5vZCh7XHJcbiAgICAgICAgICAgIHN1Ym1pdDogYCR7dGhpcy5mb3JtQ3JlYXRlU2VsZWN0b3J9IGlucHV0W3R5cGU9J3N1Ym1pdCddYCxcclxuICAgICAgICB9KTtcclxuICAgICAgICBjb25zdCAkc3RhdGVFbGVtZW50ID0gJCgnW2RhdGEtZmllbGQtdHlwZT1cIlN0YXRlXCJdJyk7XHJcbiAgICAgICAgY29uc3QgZW1haWxTZWxlY3RvciA9IGAke3RoaXMuZm9ybUNyZWF0ZVNlbGVjdG9yfSBbZGF0YS1maWVsZC10eXBlPSdFbWFpbEFkZHJlc3MnXWA7XHJcbiAgICAgICAgY29uc3QgJGVtYWlsRWxlbWVudCA9ICQoZW1haWxTZWxlY3Rvcik7XHJcbiAgICAgICAgY29uc3QgcGFzc3dvcmRTZWxlY3RvciA9IGAke3RoaXMuZm9ybUNyZWF0ZVNlbGVjdG9yfSBbZGF0YS1maWVsZC10eXBlPSdQYXNzd29yZCddYDtcclxuICAgICAgICBjb25zdCAkcGFzc3dvcmRFbGVtZW50ID0gJChwYXNzd29yZFNlbGVjdG9yKTtcclxuICAgICAgICBjb25zdCBwYXNzd29yZDJTZWxlY3RvciA9IGAke3RoaXMuZm9ybUNyZWF0ZVNlbGVjdG9yfSBbZGF0YS1maWVsZC10eXBlPSdDb25maXJtUGFzc3dvcmQnXWA7XHJcbiAgICAgICAgY29uc3QgJHBhc3N3b3JkMkVsZW1lbnQgPSAkKHBhc3N3b3JkMlNlbGVjdG9yKTtcclxuXHJcbiAgICAgICAgdGhpcy5jcmVhdGVBY2NvdW50VmFsaWRhdG9yLmFkZCh2YWxpZGF0aW9uTW9kZWwpO1xyXG5cclxuICAgICAgICBpZiAoJHN0YXRlRWxlbWVudCkge1xyXG4gICAgICAgICAgICBsZXQgJGxhc3Q7XHJcblxyXG4gICAgICAgICAgICAvLyBSZXF1ZXN0cyB0aGUgc3RhdGVzIGZvciBhIGNvdW50cnkgd2l0aCBBSkFYXHJcbiAgICAgICAgICAgIHN0YXRlQ291bnRyeSgkc3RhdGVFbGVtZW50LCB0aGlzLmNvbnRleHQsIChlcnIsIGZpZWxkKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZXJyKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGVycik7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgY29uc3QgJGZpZWxkID0gJChmaWVsZCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY3JlYXRlQWNjb3VudFZhbGlkYXRvci5nZXRTdGF0dXMoJHN0YXRlRWxlbWVudCkgIT09ICd1bmRlZmluZWQnKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jcmVhdGVBY2NvdW50VmFsaWRhdG9yLnJlbW92ZSgkc3RhdGVFbGVtZW50KTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoJGxhc3QpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZUFjY291bnRWYWxpZGF0b3IucmVtb3ZlKCRsYXN0KTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoJGZpZWxkLmlzKCdzZWxlY3QnKSkge1xyXG4gICAgICAgICAgICAgICAgICAgICRsYXN0ID0gZmllbGQ7XHJcbiAgICAgICAgICAgICAgICAgICAgVmFsaWRhdG9ycy5zZXRTdGF0ZUNvdW50cnlWYWxpZGF0aW9uKHRoaXMuY3JlYXRlQWNjb3VudFZhbGlkYXRvciwgZmllbGQpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBWYWxpZGF0b3JzLmNsZWFuVXBTdGF0ZVZhbGlkYXRpb24oZmllbGQpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgJGNyZWF0ZUFjY291bnRGb3JtLmZpbmQoXCJbZGF0YS1maWVsZC10eXBlPSdTdGF0ZSddXCIpLmF0dHIoJ3RhYmluZGV4JywgMTIpO1xyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICgkZW1haWxFbGVtZW50KSB7XHJcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlQWNjb3VudFZhbGlkYXRvci5yZW1vdmUoZW1haWxTZWxlY3Rvcik7XHJcbiAgICAgICAgICAgIFZhbGlkYXRvcnMuc2V0RW1haWxWYWxpZGF0aW9uKHRoaXMuY3JlYXRlQWNjb3VudFZhbGlkYXRvciwgZW1haWxTZWxlY3Rvcik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAoJHBhc3N3b3JkRWxlbWVudCAmJiAkcGFzc3dvcmQyRWxlbWVudCkge1xyXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZUFjY291bnRWYWxpZGF0b3IucmVtb3ZlKHBhc3N3b3JkU2VsZWN0b3IpO1xyXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZUFjY291bnRWYWxpZGF0b3IucmVtb3ZlKHBhc3N3b3JkMlNlbGVjdG9yKTtcclxuICAgICAgICAgICAgVmFsaWRhdG9ycy5zZXRQYXNzd29yZFZhbGlkYXRpb24oXHJcbiAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZUFjY291bnRWYWxpZGF0b3IsXHJcbiAgICAgICAgICAgICAgICBwYXNzd29yZFNlbGVjdG9yLFxyXG4gICAgICAgICAgICAgICAgcGFzc3dvcmQyU2VsZWN0b3IsXHJcbiAgICAgICAgICAgICAgICB0aGlzLnBhc3N3b3JkUmVxdWlyZW1lbnRzLFxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgJGNyZWF0ZUFjY291bnRGb3JtLm9uKCdzdWJtaXQnLCBldmVudCA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlQWNjb3VudFZhbGlkYXRvci5wZXJmb3JtQ2hlY2soKTtcclxuXHJcbiAgICAgICAgICAgIGlmICh0aGlzLmNyZWF0ZUFjY291bnRWYWxpZGF0b3IuYXJlQWxsKCd2YWxpZCcpKSB7ICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICQoXCIjYU5leHRTdGVwMVwiKS5vbignY2xpY2snLCBldmVudCA9PiB7XHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICBpZiAodGhpcy52YWxpZGF0ZVN0ZXAxKCkpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICQoXCJkaXYuY3JlYXRlLWFjY291bnQtc3RlcHMgbGlcIikucmVtb3ZlQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgICAgICAgICAkKFwiZGl2LmNyZWF0ZS1hY2NvdW50LXN0ZXBzIGxpLmNyZWF0ZS1hY2NvdW50LXN0ZXAtMVwiKS5hZGRDbGFzcyhcInZhbGlkXCIpO1xyXG4gICAgICAgICAgICAgICAgJChcImRpdi5jcmVhdGUtYWNjb3VudC1zdGVwcyBsaS5jcmVhdGUtYWNjb3VudC1zdGVwLTJcIikuYWRkQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgICAgICAgICAkKFwiZGl2LmFjY291bnQtYm9keSBkaXYuZm9ybS1yb3cgZGl2LmZvcm0tZmllbGRcIikuaGlkZSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93U3RlcDIoKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pO1xyXG5cclxuXHJcblxyXG4gICAgICAgICQoXCJkaXYuY3JlYXRlLWFjY291bnQtc3RlcHMgbGkgYVwiKS5vbihcImNsaWNrXCIsIGV2ZW50ID0+IHtcclxuXHJcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoISQoZXZlbnQudGFyZ2V0KS5jbG9zZXN0KFwibGlcIikuaGFzQ2xhc3MoXCJ2YWxpZFwiKSB8fCAkKGV2ZW50LnRhcmdldCkuY2xvc2VzdChcImxpXCIpLmhhc0NsYXNzKFwiYWN0aXZlXCIpKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCQoXCJkaXYuY3JlYXRlLWFjY291bnQtc3RlcHMgbGkuYWN0aXZlXCIpLmhhc0NsYXNzKFwiY3JlYXRlLWFjY291bnQtc3RlcC0xXCIpKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy52YWxpZGF0ZVN0ZXAxKCkpXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgJChcImRpdi5jcmVhdGUtYWNjb3VudC1zdGVwcyBsaS5jcmVhdGUtYWNjb3VudC1zdGVwLTFcIikuYWRkQ2xhc3MoXCJ2YWxpZFwiKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZWxzZSBpZiAoJChcImRpdi5jcmVhdGUtYWNjb3VudC1zdGVwcyBsaS5hY3RpdmVcIikuaGFzQ2xhc3MoXCJjcmVhdGUtYWNjb3VudC1zdGVwLTJcIikpXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLnZhbGlkYXRlU3RlcDIoKSlcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAkKFwiZGl2LmNyZWF0ZS1hY2NvdW50LXN0ZXBzIGxpLmNyZWF0ZS1hY2NvdW50LXN0ZXAtMlwiKS5hZGRDbGFzcyhcInZhbGlkXCIpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgJChcImRpdi5jcmVhdGUtYWNjb3VudC1zdGVwcyBsaVwiKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKTtcclxuICAgICAgICAgICAgJChcImRpdi5hY2NvdW50LWJvZHkgZGl2LmZvcm0tcm93IGRpdi5mb3JtLWZpZWxkXCIpLmhpZGUoKTtcclxuICAgICAgICAgICAgJChcImEuY3JlYXRlLWFjY291bnQtbmV4dHN0ZXBcIikuaGlkZSgpO1xyXG4gICAgICAgICAgICAkKFwiZGl2LmZvcm0tYWN0aW9uc1wiKS5oaWRlKCk7XHJcbiAgICAgICAgICAgICQoZXZlbnQudGFyZ2V0KS5jbG9zZXN0KFwibGlcIikuYWRkQ2xhc3MoXCJhY3RpdmVcIik7XHJcbiAgICAgICAgICAgIGlmICgkKGV2ZW50LnRhcmdldCkuY2xvc2VzdChcImxpXCIpLmhhc0NsYXNzKFwiY3JlYXRlLWFjY291bnQtc3RlcC0xXCIpKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dTdGVwMSgpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICgkKGV2ZW50LnRhcmdldCkuY2xvc2VzdChcImxpXCIpLmhhc0NsYXNzKFwiY3JlYXRlLWFjY291bnQtc3RlcC0yXCIpKVxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dTdGVwMigpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHZhbGlkYXRlU3RlcDEoKVxyXG4gICAge1xyXG4gICAgICAgIHRoaXMuY3JlYXRlQWNjb3VudFZhbGlkYXRvci5wZXJmb3JtQ2hlY2soW1wiaW5wdXRbZGF0YS1maWVsZC10eXBlPSdGaXJzdE5hbWUnXVwiLCBcImlucHV0W2RhdGEtZmllbGQtdHlwZT0nTGFzdE5hbWUnXVwiLCBcImlucHV0W2RhdGEtZmllbGQtdHlwZT0nUGhvbmUnXVwiLFxyXG4gICAgICAgICAgICBcImlucHV0W2RhdGEtZmllbGQtdHlwZT0nRW1haWxBZGRyZXNzJ11cIiwgXCJpbnB1dFtkYXRhLWZpZWxkLXR5cGU9J1Bhc3N3b3JkJ11cIiwgXCJpbnB1dFtkYXRhLWZpZWxkLXR5cGU9J0NvbmZpcm1QYXNzd29yZCddXCJdKTtcclxuICAgICAgICByZXR1cm4gKHRoaXMuY3JlYXRlQWNjb3VudFZhbGlkYXRvci5nZXRTdGF0dXMoXCJpbnB1dFtkYXRhLWZpZWxkLXR5cGU9J0ZpcnN0TmFtZSddXCIpID09PSBub2QuY29uc3RhbnRzLlZBTElEXHJcbiAgICAgICAgICAgICYmIHRoaXMuY3JlYXRlQWNjb3VudFZhbGlkYXRvci5nZXRTdGF0dXMoXCJpbnB1dFtkYXRhLWZpZWxkLXR5cGU9J0xhc3ROYW1lJ11cIikgPT09IG5vZC5jb25zdGFudHMuVkFMSURcclxuICAgICAgICAgICAgJiYgdGhpcy5jcmVhdGVBY2NvdW50VmFsaWRhdG9yLmdldFN0YXR1cyhcImlucHV0W2RhdGEtZmllbGQtdHlwZT0nUGhvbmUnXVwiKSA9PT0gbm9kLmNvbnN0YW50cy5WQUxJRFxyXG4gICAgICAgICAgICAmJiB0aGlzLmNyZWF0ZUFjY291bnRWYWxpZGF0b3IuZ2V0U3RhdHVzKFwiaW5wdXRbZGF0YS1maWVsZC10eXBlPSdFbWFpbEFkZHJlc3MnXVwiKSA9PT0gbm9kLmNvbnN0YW50cy5WQUxJRFxyXG4gICAgICAgICAgICAmJiB0aGlzLmNyZWF0ZUFjY291bnRWYWxpZGF0b3IuZ2V0U3RhdHVzKFwiaW5wdXRbZGF0YS1maWVsZC10eXBlPSdQYXNzd29yZCddXCIpID09PSBub2QuY29uc3RhbnRzLlZBTElEXHJcbiAgICAgICAgICAgICYmIHRoaXMuY3JlYXRlQWNjb3VudFZhbGlkYXRvci5nZXRTdGF0dXMoXCJpbnB1dFtkYXRhLWZpZWxkLXR5cGU9J0NvbmZpcm1QYXNzd29yZCddXCIpID09PSBub2QuY29uc3RhbnRzLlZBTElEKTtcclxuICAgIH1cclxuXHJcbiAgICB2YWxpZGF0ZVN0ZXAyKClcclxuICAgIHtcclxuICAgICAgICB0aGlzLmNyZWF0ZUFjY291bnRWYWxpZGF0b3IucGVyZm9ybUNoZWNrKCk7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMuY3JlYXRlQWNjb3VudFZhbGlkYXRvci5hcmVBbGwoJ3ZhbGlkJyk7XHJcbiAgICB9XHJcblxyXG5cclxuXHJcbiAgICBzaG93U3RlcDEoKVxyXG4gICAge1xyXG4gICAgICAgICQoXCIjRm9ybUZpZWxkXzQ1XCIpLnNob3coKTtcclxuICAgICAgICAkKFwiZGl2LmZvcm0tZmllbGRbZGF0YS10eXBlPSdGaXJzdE5hbWUnXVwiKS5zaG93KCk7XHJcbiAgICAgICAgJChcImRpdi5mb3JtLWZpZWxkW2RhdGEtdHlwZT0nTGFzdE5hbWUnXVwiKS5zaG93KCk7XHJcbiAgICAgICAgJChcImRpdi5mb3JtLWZpZWxkW2RhdGEtdHlwZT0nUGhvbmUnXVwiKS5zaG93KCk7XHJcbiAgICAgICAgJChcImRpdi5mb3JtLWZpZWxkW2RhdGEtdHlwZT0nRW1haWxBZGRyZXNzJ11cIikuc2hvdygpO1xyXG4gICAgICAgICQoXCJkaXYuZm9ybS1maWVsZFtkYXRhLXR5cGU9J1Bhc3N3b3JkJ11cIikuc2hvdygpO1xyXG4gICAgICAgICQoXCJkaXYuZm9ybS1maWVsZFtkYXRhLXR5cGU9J0NvbmZpcm1QYXNzd29yZCddXCIpLnNob3coKTtcclxuICAgICAgICAkKFwiZGl2LmZvcm0tZmllbGQuY3JlYXRlX2FjY291bnQtbmV4dC1idG5cIikuc2hvdygpOyAgICAgICAgXHJcbiAgICAgICAgJChcIiNhTmV4dFN0ZXAxXCIpLnNob3coKTtcclxuICAgIH1cclxuXHJcbiAgICBzaG93U3RlcDIoKVxyXG4gICAge1xyXG4gICAgICAgICQoXCJkaXYuZm9ybS1maWVsZCBbZGF0YS1maWVsZC10eXBlPSdTdGF0ZSddXCIpLmF0dHIoJ3RhYmluZGV4JywgMTIpO1xyXG4gICAgICAgICQoXCJkaXYuZm9ybS1maWVsZFtkYXRhLXR5cGU9J0FkZHJlc3NMaW5lMSddXCIpLnNob3coKTtcclxuICAgICAgICAkKFwiZGl2LmZvcm0tZmllbGRbZGF0YS10eXBlPSdDaXR5J11cIikuc2hvdygpO1xyXG4gICAgICAgICQoXCJkaXYuZm9ybS1maWVsZFtkYXRhLXR5cGU9J1N0YXRlJ11cIikuc2hvdygpO1xyXG4gICAgICAgICQoXCJkaXYuZm9ybS1maWVsZFtkYXRhLXR5cGU9J1ppcCddXCIpLnNob3coKTtcclxuICAgICAgICAkKFwiZGl2LmZvcm0tZmllbGRbZGF0YS10eXBlPSdDb3VudHJ5J11cIikuc2hvdygpO1xyXG4gICAgICAgICQoXCJkaXYuc29jaWFsLWxvZ2luLWZpZWxkXCIpLnNob3coKTsgICAgICAgIFxyXG4gICAgICAgICQoXCIjYU5leHRTdGVwMVwiKS5oaWRlKCk7XHJcbiAgICAgICAgJChcIiNGb3JtRmllbGRfNTRcIikuc2hvdygpO1xyXG4gICAgICAgICQoXCIjRm9ybUZpZWxkXzUzXCIpLnNob3coKTtcclxuICAgICAgICAkKFwiLmNyZWF0ZV9hY2NvdW50LWN1c3Rvbi1jaGVja2JveFwiKS5zaG93KCk7XHJcbiAgICAgICAgJChcImRpdi5jcmVhdGVfYWNjb3VudC1yZWNhcHRjaGFcIikuc2hvdygpO1xyXG4gICAgICAgICQoXCJkaXYuY3JlYXRlX2FjY291bnQtYWN0aW9uLWJ1dHRvbnNcIikuc2hvdygpO1xyXG4gICAgICAgICQoXCJkaXYuZm9ybS1hY3Rpb25zXCIpLnNob3coKTtcclxuICAgICAgICBpZiAoJChcInNlbGVjdFtkYXRhLWZpZWxkLXR5cGU9J0NvdW50cnknXSBvcHRpb246c2VsZWN0ZWRcIikudmFsKCkgPT0gXCJVbml0ZWQgS2luZ2RvbVwiKVxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgJChcImRpdi5hbGVydEJveC0tY291bnRyeVwiKS5oaWRlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2VcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgICQoXCJkaXYuYWxlcnRCb3gtLWNvdW50cnlcIikuc2hvdygpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcblxyXG5cclxuICAgIC8qKlxyXG4gICAgICogUmVxdWVzdCBpcyBtYWRlIGluIHRoaXMgZnVuY3Rpb24gdG8gdGhlIHJlbW90ZSBlbmRwb2ludCBhbmQgcHVsbHMgYmFjayB0aGUgc3RhdGVzIGZvciBjb3VudHJ5LlxyXG4gICAgICovXHJcbiAgICBvblJlYWR5KCkge1xyXG4gICAgICAgIGNvbnN0ICRjcmVhdGVBY2NvdW50Rm9ybSA9IGNsYXNzaWZ5Rm9ybSh0aGlzLmZvcm1DcmVhdGVTZWxlY3Rvcik7XHJcbiAgICAgICAgY29uc3QgJGxvZ2luRm9ybSA9IGNsYXNzaWZ5Rm9ybSgnLmxvZ2luLWZvcm0nKTtcclxuICAgICAgICBjb25zdCAkZm9yZ290UGFzc3dvcmRGb3JtID0gY2xhc3NpZnlGb3JtKCcuZm9yZ290LXBhc3N3b3JkLWZvcm0nKTtcclxuICAgICAgICBjb25zdCAkbmV3UGFzc3dvcmRGb3JtID0gY2xhc3NpZnlGb3JtKCcubmV3LXBhc3N3b3JkLWZvcm0nKTsgLy8gcmVzZXQgcGFzc3dvcmRcclxuXHJcbiAgICAgICAgLy8gSW5qZWN0ZWQgdmlhIGF1dGguaHRtbFxyXG4gICAgICAgIHRoaXMucGFzc3dvcmRSZXF1aXJlbWVudHMgPSB0aGlzLmNvbnRleHQucGFzc3dvcmRSZXF1aXJlbWVudHM7XHJcblxyXG4gICAgICAgIGlmICgkbG9naW5Gb3JtLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aGlzLnJlZ2lzdGVyTG9naW5WYWxpZGF0aW9uKCRsb2dpbkZvcm0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCRuZXdQYXNzd29yZEZvcm0ubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIHRoaXMucmVnaXN0ZXJOZXdQYXNzd29yZFZhbGlkYXRpb24oKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmICgkZm9yZ290UGFzc3dvcmRGb3JtLmxlbmd0aCkge1xyXG4gICAgICAgICAgICB0aGlzLnJlZ2lzdGVyRm9yZ290UGFzc3dvcmRWYWxpZGF0aW9uKCRmb3Jnb3RQYXNzd29yZEZvcm0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKCRjcmVhdGVBY2NvdW50Rm9ybS5sZW5ndGgpIHtcclxuICAgICAgICAgICAgdGhpcy5yZWdpc3RlckNyZWF0ZUFjY291bnRWYWxpZGF0b3IoJGNyZWF0ZUFjY291bnRGb3JtKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIiwiLyoqXG4gKiBWYWxpZGF0ZSB0aGF0IHRoZSBnaXZlbiBkYXRlIGZvciB0aGUgZGF5L21vbnRoL3llYXIgc2VsZWN0IGlucHV0cyBpcyB3aXRoaW4gcG90ZW50aWFsIHJhbmdlXG4gKiBAcGFyYW0gJGZvcm1GaWVsZFxuICogQHBhcmFtIHZhbGlkYXRpb25cbiAqIEByZXR1cm5zIHt7c2VsZWN0b3I6IHN0cmluZywgdHJpZ2dlcmVkQnk6IHN0cmluZywgdmFsaWRhdGU6IEZ1bmN0aW9uLCBlcnJvck1lc3NhZ2U6IHN0cmluZ319XG4gKi9cbmZ1bmN0aW9uIGJ1aWxkRGF0ZVZhbGlkYXRpb24oJGZvcm1GaWVsZCwgdmFsaWRhdGlvbikge1xuICAgIC8vIE5vIGRhdGUgcmFuZ2UgcmVzdHJpY3Rpb24sIHNraXBcbiAgICBpZiAodmFsaWRhdGlvbi5taW5fZGF0ZSAmJiB2YWxpZGF0aW9uLm1heF9kYXRlKSB7XG4gICAgICAgIGNvbnN0IGludmFsaWRNZXNzYWdlID0gYFlvdXIgY2hvc2VuIGRhdGUgbXVzdCBmYWxsIGJldHdlZW4gJHt2YWxpZGF0aW9uLm1pbl9kYXRlfSBhbmQgJHt2YWxpZGF0aW9uLm1heF9kYXRlfS5gO1xuICAgICAgICBjb25zdCBmb3JtRWxlbWVudElkID0gJGZvcm1GaWVsZC5hdHRyKCdpZCcpO1xuICAgICAgICBjb25zdCBtaW5TcGxpdCA9IHZhbGlkYXRpb24ubWluX2RhdGUuc3BsaXQoJy0nKTtcbiAgICAgICAgY29uc3QgbWF4U3BsaXQgPSB2YWxpZGF0aW9uLm1heF9kYXRlLnNwbGl0KCctJyk7XG4gICAgICAgIGNvbnN0IG1pbkRhdGUgPSBuZXcgRGF0ZShtaW5TcGxpdFswXSwgbWluU3BsaXRbMV0gLSAxLCBtaW5TcGxpdFsyXSk7XG4gICAgICAgIGNvbnN0IG1heERhdGUgPSBuZXcgRGF0ZShtYXhTcGxpdFswXSwgbWF4U3BsaXRbMV0gLSAxLCBtYXhTcGxpdFsyXSk7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHNlbGVjdG9yOiBgIyR7Zm9ybUVsZW1lbnRJZH0gc2VsZWN0W2RhdGEtbGFiZWw9XCJ5ZWFyXCJdYCxcbiAgICAgICAgICAgIHRyaWdnZXJlZEJ5OiBgIyR7Zm9ybUVsZW1lbnRJZH0gc2VsZWN0Om5vdChbZGF0YS1sYWJlbD1cInllYXJcIl0pYCxcbiAgICAgICAgICAgIHZhbGlkYXRlOiAoY2IsIHZhbCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGRheSA9IE51bWJlcigkZm9ybUZpZWxkLmZpbmQoJ3NlbGVjdFtkYXRhLWxhYmVsPVwiZGF5XCJdJykudmFsKCkpO1xuICAgICAgICAgICAgICAgIGNvbnN0IG1vbnRoID0gTnVtYmVyKCRmb3JtRmllbGQuZmluZCgnc2VsZWN0W2RhdGEtbGFiZWw9XCJtb250aFwiXScpLnZhbCgpKSAtIDE7XG4gICAgICAgICAgICAgICAgY29uc3QgeWVhciA9IE51bWJlcih2YWwpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGNob3NlbkRhdGUgPSBuZXcgRGF0ZSh5ZWFyLCBtb250aCwgZGF5KTtcblxuICAgICAgICAgICAgICAgIGNiKGNob3NlbkRhdGUgPj0gbWluRGF0ZSAmJiBjaG9zZW5EYXRlIDw9IG1heERhdGUpO1xuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGVycm9yTWVzc2FnZTogaW52YWxpZE1lc3NhZ2UsXG4gICAgICAgIH07XG4gICAgfVxufVxuXG4vKipcbiAqIFdlIHZhbGlkYXRlIGNoZWNrYm94ZXMgc2VwYXJhdGVseSBmcm9tIHNpbmdsZSBpbnB1dCBmaWVsZHMsIGFzIHRoZXkgbXVzdCBoYXZlIGF0IGxlYXN0IG9uZSBjaGVja2VkIG9wdGlvblxuICogZnJvbSBtYW55IGRpZmZlcmVudCBpbnB1dHNcbiAqIEBwYXJhbSAkZm9ybUZpZWxkXG4gKiBAcGFyYW0gdmFsaWRhdGlvblxuICovXG5mdW5jdGlvbiBidWlsZFJlcXVpcmVkQ2hlY2tib3hWYWxpZGF0aW9uKCRmb3JtRmllbGQsIHZhbGlkYXRpb24pIHtcbiAgICBjb25zdCBmb3JtRmllbGRJZCA9ICRmb3JtRmllbGQuYXR0cignaWQnKTtcbiAgICBjb25zdCBwcmltYXJ5U2VsZWN0b3IgPSBgIyR7Zm9ybUZpZWxkSWR9IGlucHV0OmZpcnN0LW9mLXR5cGVgO1xuICAgIGNvbnN0IHNlY29uZGFyeVNlbGVjdG9yID0gYCMke2Zvcm1GaWVsZElkfSBpbnB1dGA7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBzZWxlY3RvcjogcHJpbWFyeVNlbGVjdG9yLFxuICAgICAgICB0cmlnZ2VyZWRCeTogc2Vjb25kYXJ5U2VsZWN0b3IsXG4gICAgICAgIHZhbGlkYXRlOiAoY2IpID0+IHtcbiAgICAgICAgICAgIGxldCByZXN1bHQgPSBmYWxzZTtcblxuICAgICAgICAgICAgJChzZWNvbmRhcnlTZWxlY3RvcikuZWFjaCgoaW5kZXgsIGNoZWNrYm94KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGNoZWNrYm94LmNoZWNrZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVzdWx0ID0gdHJ1ZTtcblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIGNiKHJlc3VsdCk7XG4gICAgICAgIH0sXG4gICAgICAgIGVycm9yTWVzc2FnZTogYFRoZSAnJHt2YWxpZGF0aW9uLmxhYmVsfScgZmllbGQgY2Fubm90IGJlIGJsYW5rLmAsXG4gICAgfTtcbn1cblxuZnVuY3Rpb24gYnVpbGRSZXF1aXJlZFZhbGlkYXRpb24odmFsaWRhdGlvbiwgc2VsZWN0b3IpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBzZWxlY3RvcixcbiAgICAgICAgdmFsaWRhdGUoY2IsIHZhbCkge1xuICAgICAgICAgICAgY2IodmFsLmxlbmd0aCA+IDApO1xuICAgICAgICB9LFxuICAgICAgICBlcnJvck1lc3NhZ2U6IGBUaGUgJyR7dmFsaWRhdGlvbi5sYWJlbH0nIGZpZWxkIGNhbm5vdCBiZSBibGFuay5gLFxuICAgIH07XG59XG5cbmZ1bmN0aW9uIGJ1aWxkTnVtYmVyUmFuZ2VWYWxpZGF0aW9uKHZhbGlkYXRpb24sIGZvcm1GaWVsZFNlbGVjdG9yKSB7XG4gICAgY29uc3QgaW52YWxpZE1lc3NhZ2UgPSBgVGhlIHZhbHVlIGZvciAke3ZhbGlkYXRpb24ubGFiZWx9IG11c3QgYmUgYmV0d2VlbiAke3ZhbGlkYXRpb24ubWlufSBhbmQgJHt2YWxpZGF0aW9uLm1heH0uYDtcbiAgICBjb25zdCBtaW4gPSBOdW1iZXIodmFsaWRhdGlvbi5taW4pO1xuICAgIGNvbnN0IG1heCA9IE51bWJlcih2YWxpZGF0aW9uLm1heCk7XG5cbiAgICByZXR1cm4ge1xuICAgICAgICBzZWxlY3RvcjogYCR7Zm9ybUZpZWxkU2VsZWN0b3J9IGlucHV0W25hbWU9XCIke3ZhbGlkYXRpb24ubmFtZX1cIl1gLFxuICAgICAgICB2YWxpZGF0ZTogKGNiLCB2YWwpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IG51bWJlclZhbCA9IE51bWJlcih2YWwpO1xuXG4gICAgICAgICAgICBjYihudW1iZXJWYWwgPj0gbWluICYmIG51bWJlclZhbCA8PSBtYXgpO1xuICAgICAgICB9LFxuICAgICAgICBlcnJvck1lc3NhZ2U6IGludmFsaWRNZXNzYWdlLFxuICAgIH07XG59XG5cblxuZnVuY3Rpb24gYnVpbGRWYWxpZGF0aW9uKCR2YWxpZGF0ZWFibGVFbGVtZW50KSB7XG4gICAgY29uc3QgdmFsaWRhdGlvbiA9ICR2YWxpZGF0ZWFibGVFbGVtZW50LmRhdGEoJ3ZhbGlkYXRpb24nKTtcbiAgICBjb25zdCBmaWVsZFZhbGlkYXRpb25zID0gW107XG4gICAgY29uc3QgZm9ybUZpZWxkU2VsZWN0b3IgPSBgIyR7JHZhbGlkYXRlYWJsZUVsZW1lbnQuYXR0cignaWQnKX1gO1xuXG4gICAgaWYgKHZhbGlkYXRpb24udHlwZSA9PT0gJ2RhdGVjaG9vc2VyJykge1xuICAgICAgICBjb25zdCBkYXRlVmFsaWRhdGlvbiA9IGJ1aWxkRGF0ZVZhbGlkYXRpb24oJHZhbGlkYXRlYWJsZUVsZW1lbnQsIHZhbGlkYXRpb24pO1xuXG4gICAgICAgIGlmIChkYXRlVmFsaWRhdGlvbikge1xuICAgICAgICAgICAgZmllbGRWYWxpZGF0aW9ucy5wdXNoKGRhdGVWYWxpZGF0aW9uKTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSBpZiAodmFsaWRhdGlvbi5yZXF1aXJlZCAmJiAodmFsaWRhdGlvbi50eXBlID09PSAnY2hlY2tib3hzZWxlY3QnIHx8IHZhbGlkYXRpb24udHlwZSA9PT0gJ3JhZGlvc2VsZWN0JykpIHtcbiAgICAgICAgZmllbGRWYWxpZGF0aW9ucy5wdXNoKGJ1aWxkUmVxdWlyZWRDaGVja2JveFZhbGlkYXRpb24oJHZhbGlkYXRlYWJsZUVsZW1lbnQsIHZhbGlkYXRpb24pKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICAkdmFsaWRhdGVhYmxlRWxlbWVudC5maW5kKCdpbnB1dCwgc2VsZWN0LCB0ZXh0YXJlYScpLmVhY2goKGluZGV4LCBlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCAkaW5wdXRFbGVtZW50ID0gJChlbGVtZW50KTtcbiAgICAgICAgICAgIGNvbnN0IHRhZ05hbWUgPSAkaW5wdXRFbGVtZW50LmdldCgwKS50YWdOYW1lO1xuICAgICAgICAgICAgY29uc3QgaW5wdXROYW1lID0gJGlucHV0RWxlbWVudC5hdHRyKCduYW1lJyk7XG4gICAgICAgICAgICBjb25zdCBlbGVtZW50U2VsZWN0b3IgPSBgJHtmb3JtRmllbGRTZWxlY3Rvcn0gJHt0YWdOYW1lfVtuYW1lPVwiJHtpbnB1dE5hbWV9XCJdYDtcblxuICAgICAgICAgICAgaWYgKHZhbGlkYXRpb24udHlwZSA9PT0gJ251bWJlcm9ubHknKSB7XG4gICAgICAgICAgICAgICAgZmllbGRWYWxpZGF0aW9ucy5wdXNoKGJ1aWxkTnVtYmVyUmFuZ2VWYWxpZGF0aW9uKHZhbGlkYXRpb24sIGZvcm1GaWVsZFNlbGVjdG9yKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodmFsaWRhdGlvbi5yZXF1aXJlZCkge1xuICAgICAgICAgICAgICAgIGZpZWxkVmFsaWRhdGlvbnMucHVzaChidWlsZFJlcXVpcmVkVmFsaWRhdGlvbih2YWxpZGF0aW9uLCBlbGVtZW50U2VsZWN0b3IpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcmV0dXJuIGZpZWxkVmFsaWRhdGlvbnM7XG59XG5cbi8qKlxuICogQnVpbGRzIHRoZSB2YWxpZGF0aW9uIG1vZGVsIGZvciBkeW5hbWljIGZvcm1zXG4gKiBAcGFyYW0gJGZvcm1cbiAqIEByZXR1cm5zIHtBcnJheX1cbiAqL1xuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gKCRmb3JtKSB7XG4gICAgbGV0IHZhbGlkYXRpb25zVG9QZXJmb3JtID0gW107XG5cbiAgICAkZm9ybS5maW5kKCdbZGF0YS12YWxpZGF0aW9uXScpLmVhY2goKGluZGV4LCBpbnB1dCkgPT4ge1xuICAgICAgICB2YWxpZGF0aW9uc1RvUGVyZm9ybSA9IHZhbGlkYXRpb25zVG9QZXJmb3JtLmNvbmNhdChidWlsZFZhbGlkYXRpb24oJChpbnB1dCkpKTtcbiAgICB9KTtcblxuICAgIHJldHVybiB2YWxpZGF0aW9uc1RvUGVyZm9ybTtcbn1cbiIsInZhciBjcmVhdGVCYXNlRm9yID0gcmVxdWlyZSgnLi9fY3JlYXRlQmFzZUZvcicpO1xuXG4vKipcbiAqIFRoZSBiYXNlIGltcGxlbWVudGF0aW9uIG9mIGBiYXNlRm9yT3duYCB3aGljaCBpdGVyYXRlcyBvdmVyIGBvYmplY3RgXG4gKiBwcm9wZXJ0aWVzIHJldHVybmVkIGJ5IGBrZXlzRnVuY2AgYW5kIGludm9rZXMgYGl0ZXJhdGVlYCBmb3IgZWFjaCBwcm9wZXJ0eS5cbiAqIEl0ZXJhdGVlIGZ1bmN0aW9ucyBtYXkgZXhpdCBpdGVyYXRpb24gZWFybHkgYnkgZXhwbGljaXRseSByZXR1cm5pbmcgYGZhbHNlYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGl0ZXJhdGVlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBrZXlzRnVuYyBUaGUgZnVuY3Rpb24gdG8gZ2V0IHRoZSBrZXlzIG9mIGBvYmplY3RgLlxuICogQHJldHVybnMge09iamVjdH0gUmV0dXJucyBgb2JqZWN0YC5cbiAqL1xudmFyIGJhc2VGb3IgPSBjcmVhdGVCYXNlRm9yKCk7XG5cbm1vZHVsZS5leHBvcnRzID0gYmFzZUZvcjtcbiIsInZhciBiYXNlRm9yID0gcmVxdWlyZSgnLi9fYmFzZUZvcicpLFxuICAgIGtleXMgPSByZXF1aXJlKCcuL2tleXMnKTtcblxuLyoqXG4gKiBUaGUgYmFzZSBpbXBsZW1lbnRhdGlvbiBvZiBgXy5mb3JPd25gIHdpdGhvdXQgc3VwcG9ydCBmb3IgaXRlcmF0ZWUgc2hvcnRoYW5kcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtPYmplY3R9IG9iamVjdCBUaGUgb2JqZWN0IHRvIGl0ZXJhdGUgb3Zlci5cbiAqIEBwYXJhbSB7RnVuY3Rpb259IGl0ZXJhdGVlIFRoZSBmdW5jdGlvbiBpbnZva2VkIHBlciBpdGVyYXRpb24uXG4gKiBAcmV0dXJucyB7T2JqZWN0fSBSZXR1cm5zIGBvYmplY3RgLlxuICovXG5mdW5jdGlvbiBiYXNlRm9yT3duKG9iamVjdCwgaXRlcmF0ZWUpIHtcbiAgcmV0dXJuIG9iamVjdCAmJiBiYXNlRm9yKG9iamVjdCwgaXRlcmF0ZWUsIGtleXMpO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGJhc2VGb3JPd247XG4iLCIvKipcbiAqIFRoaXMgbWV0aG9kIHJldHVybnMgdGhlIGZpcnN0IGFyZ3VtZW50IGl0IHJlY2VpdmVzLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBzaW5jZSAwLjEuMFxuICogQG1lbWJlck9mIF9cbiAqIEBjYXRlZ29yeSBVdGlsXG4gKiBAcGFyYW0geyp9IHZhbHVlIEFueSB2YWx1ZS5cbiAqIEByZXR1cm5zIHsqfSBSZXR1cm5zIGB2YWx1ZWAuXG4gKiBAZXhhbXBsZVxuICpcbiAqIHZhciBvYmplY3QgPSB7ICdhJzogMSB9O1xuICpcbiAqIGNvbnNvbGUubG9nKF8uaWRlbnRpdHkob2JqZWN0KSA9PT0gb2JqZWN0KTtcbiAqIC8vID0+IHRydWVcbiAqL1xuZnVuY3Rpb24gaWRlbnRpdHkodmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGlkZW50aXR5O1xuIiwiLyoqXG4gKiBDcmVhdGVzIGEgYmFzZSBmdW5jdGlvbiBmb3IgbWV0aG9kcyBsaWtlIGBfLmZvckluYCBhbmQgYF8uZm9yT3duYC5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtib29sZWFufSBbZnJvbVJpZ2h0XSBTcGVjaWZ5IGl0ZXJhdGluZyBmcm9tIHJpZ2h0IHRvIGxlZnQuXG4gKiBAcmV0dXJucyB7RnVuY3Rpb259IFJldHVybnMgdGhlIG5ldyBiYXNlIGZ1bmN0aW9uLlxuICovXG5mdW5jdGlvbiBjcmVhdGVCYXNlRm9yKGZyb21SaWdodCkge1xuICByZXR1cm4gZnVuY3Rpb24ob2JqZWN0LCBpdGVyYXRlZSwga2V5c0Z1bmMpIHtcbiAgICB2YXIgaW5kZXggPSAtMSxcbiAgICAgICAgaXRlcmFibGUgPSBPYmplY3Qob2JqZWN0KSxcbiAgICAgICAgcHJvcHMgPSBrZXlzRnVuYyhvYmplY3QpLFxuICAgICAgICBsZW5ndGggPSBwcm9wcy5sZW5ndGg7XG5cbiAgICB3aGlsZSAobGVuZ3RoLS0pIHtcbiAgICAgIHZhciBrZXkgPSBwcm9wc1tmcm9tUmlnaHQgPyBsZW5ndGggOiArK2luZGV4XTtcbiAgICAgIGlmIChpdGVyYXRlZShpdGVyYWJsZVtrZXldLCBrZXksIGl0ZXJhYmxlKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgYnJlYWs7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBvYmplY3Q7XG4gIH07XG59XG5cbm1vZHVsZS5leHBvcnRzID0gY3JlYXRlQmFzZUZvcjtcbiIsIi8qKlxuICogQSBzcGVjaWFsaXplZCB2ZXJzaW9uIG9mIGBfLmZvckVhY2hgIGZvciBhcnJheXMgd2l0aG91dCBzdXBwb3J0IGZvclxuICogaXRlcmF0ZWUgc2hvcnRoYW5kcy5cbiAqXG4gKiBAcHJpdmF0ZVxuICogQHBhcmFtIHtBcnJheX0gW2FycmF5XSBUaGUgYXJyYXkgdG8gaXRlcmF0ZSBvdmVyLlxuICogQHBhcmFtIHtGdW5jdGlvbn0gaXRlcmF0ZWUgVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEByZXR1cm5zIHtBcnJheX0gUmV0dXJucyBgYXJyYXlgLlxuICovXG5mdW5jdGlvbiBhcnJheUVhY2goYXJyYXksIGl0ZXJhdGVlKSB7XG4gIHZhciBpbmRleCA9IC0xLFxuICAgICAgbGVuZ3RoID0gYXJyYXkgPT0gbnVsbCA/IDAgOiBhcnJheS5sZW5ndGg7XG5cbiAgd2hpbGUgKCsraW5kZXggPCBsZW5ndGgpIHtcbiAgICBpZiAoaXRlcmF0ZWUoYXJyYXlbaW5kZXhdLCBpbmRleCwgYXJyYXkpID09PSBmYWxzZSkge1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG4gIHJldHVybiBhcnJheTtcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBhcnJheUVhY2g7XG4iLCJ2YXIgYXJyYXlFYWNoID0gcmVxdWlyZSgnLi9fYXJyYXlFYWNoJyksXG4gICAgYmFzZUNyZWF0ZSA9IHJlcXVpcmUoJy4vX2Jhc2VDcmVhdGUnKSxcbiAgICBiYXNlRm9yT3duID0gcmVxdWlyZSgnLi9fYmFzZUZvck93bicpLFxuICAgIGJhc2VJdGVyYXRlZSA9IHJlcXVpcmUoJy4vX2Jhc2VJdGVyYXRlZScpLFxuICAgIGdldFByb3RvdHlwZSA9IHJlcXVpcmUoJy4vX2dldFByb3RvdHlwZScpLFxuICAgIGlzQXJyYXkgPSByZXF1aXJlKCcuL2lzQXJyYXknKSxcbiAgICBpc0J1ZmZlciA9IHJlcXVpcmUoJy4vaXNCdWZmZXInKSxcbiAgICBpc0Z1bmN0aW9uID0gcmVxdWlyZSgnLi9pc0Z1bmN0aW9uJyksXG4gICAgaXNPYmplY3QgPSByZXF1aXJlKCcuL2lzT2JqZWN0JyksXG4gICAgaXNUeXBlZEFycmF5ID0gcmVxdWlyZSgnLi9pc1R5cGVkQXJyYXknKTtcblxuLyoqXG4gKiBBbiBhbHRlcm5hdGl2ZSB0byBgXy5yZWR1Y2VgOyB0aGlzIG1ldGhvZCB0cmFuc2Zvcm1zIGBvYmplY3RgIHRvIGEgbmV3XG4gKiBgYWNjdW11bGF0b3JgIG9iamVjdCB3aGljaCBpcyB0aGUgcmVzdWx0IG9mIHJ1bm5pbmcgZWFjaCBvZiBpdHMgb3duXG4gKiBlbnVtZXJhYmxlIHN0cmluZyBrZXllZCBwcm9wZXJ0aWVzIHRocnUgYGl0ZXJhdGVlYCwgd2l0aCBlYWNoIGludm9jYXRpb25cbiAqIHBvdGVudGlhbGx5IG11dGF0aW5nIHRoZSBgYWNjdW11bGF0b3JgIG9iamVjdC4gSWYgYGFjY3VtdWxhdG9yYCBpcyBub3RcbiAqIHByb3ZpZGVkLCBhIG5ldyBvYmplY3Qgd2l0aCB0aGUgc2FtZSBgW1tQcm90b3R5cGVdXWAgd2lsbCBiZSB1c2VkLiBUaGVcbiAqIGl0ZXJhdGVlIGlzIGludm9rZWQgd2l0aCBmb3VyIGFyZ3VtZW50czogKGFjY3VtdWxhdG9yLCB2YWx1ZSwga2V5LCBvYmplY3QpLlxuICogSXRlcmF0ZWUgZnVuY3Rpb25zIG1heSBleGl0IGl0ZXJhdGlvbiBlYXJseSBieSBleHBsaWNpdGx5IHJldHVybmluZyBgZmFsc2VgLlxuICpcbiAqIEBzdGF0aWNcbiAqIEBtZW1iZXJPZiBfXG4gKiBAc2luY2UgMS4zLjBcbiAqIEBjYXRlZ29yeSBPYmplY3RcbiAqIEBwYXJhbSB7T2JqZWN0fSBvYmplY3QgVGhlIG9iamVjdCB0byBpdGVyYXRlIG92ZXIuXG4gKiBAcGFyYW0ge0Z1bmN0aW9ufSBbaXRlcmF0ZWU9Xy5pZGVudGl0eV0gVGhlIGZ1bmN0aW9uIGludm9rZWQgcGVyIGl0ZXJhdGlvbi5cbiAqIEBwYXJhbSB7Kn0gW2FjY3VtdWxhdG9yXSBUaGUgY3VzdG9tIGFjY3VtdWxhdG9yIHZhbHVlLlxuICogQHJldHVybnMgeyp9IFJldHVybnMgdGhlIGFjY3VtdWxhdGVkIHZhbHVlLlxuICogQGV4YW1wbGVcbiAqXG4gKiBfLnRyYW5zZm9ybShbMiwgMywgNF0sIGZ1bmN0aW9uKHJlc3VsdCwgbikge1xuICogICByZXN1bHQucHVzaChuICo9IG4pO1xuICogICByZXR1cm4gbiAlIDIgPT0gMDtcbiAqIH0sIFtdKTtcbiAqIC8vID0+IFs0LCA5XVxuICpcbiAqIF8udHJhbnNmb3JtKHsgJ2EnOiAxLCAnYic6IDIsICdjJzogMSB9LCBmdW5jdGlvbihyZXN1bHQsIHZhbHVlLCBrZXkpIHtcbiAqICAgKHJlc3VsdFt2YWx1ZV0gfHwgKHJlc3VsdFt2YWx1ZV0gPSBbXSkpLnB1c2goa2V5KTtcbiAqIH0sIHt9KTtcbiAqIC8vID0+IHsgJzEnOiBbJ2EnLCAnYyddLCAnMic6IFsnYiddIH1cbiAqL1xuZnVuY3Rpb24gdHJhbnNmb3JtKG9iamVjdCwgaXRlcmF0ZWUsIGFjY3VtdWxhdG9yKSB7XG4gIHZhciBpc0FyciA9IGlzQXJyYXkob2JqZWN0KSxcbiAgICAgIGlzQXJyTGlrZSA9IGlzQXJyIHx8IGlzQnVmZmVyKG9iamVjdCkgfHwgaXNUeXBlZEFycmF5KG9iamVjdCk7XG5cbiAgaXRlcmF0ZWUgPSBiYXNlSXRlcmF0ZWUoaXRlcmF0ZWUsIDQpO1xuICBpZiAoYWNjdW11bGF0b3IgPT0gbnVsbCkge1xuICAgIHZhciBDdG9yID0gb2JqZWN0ICYmIG9iamVjdC5jb25zdHJ1Y3RvcjtcbiAgICBpZiAoaXNBcnJMaWtlKSB7XG4gICAgICBhY2N1bXVsYXRvciA9IGlzQXJyID8gbmV3IEN0b3IgOiBbXTtcbiAgICB9XG4gICAgZWxzZSBpZiAoaXNPYmplY3Qob2JqZWN0KSkge1xuICAgICAgYWNjdW11bGF0b3IgPSBpc0Z1bmN0aW9uKEN0b3IpID8gYmFzZUNyZWF0ZShnZXRQcm90b3R5cGUob2JqZWN0KSkgOiB7fTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICBhY2N1bXVsYXRvciA9IHt9O1xuICAgIH1cbiAgfVxuICAoaXNBcnJMaWtlID8gYXJyYXlFYWNoIDogYmFzZUZvck93bikob2JqZWN0LCBmdW5jdGlvbih2YWx1ZSwgaW5kZXgsIG9iamVjdCkge1xuICAgIHJldHVybiBpdGVyYXRlZShhY2N1bXVsYXRvciwgdmFsdWUsIGluZGV4LCBvYmplY3QpO1xuICB9KTtcbiAgcmV0dXJuIGFjY3VtdWxhdG9yO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IHRyYW5zZm9ybTtcbiJdLCJzb3VyY2VSb290IjoiIn0=