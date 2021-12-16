module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "fb15");
/******/ })
/************************************************************************/
/******/ ({

/***/ "999b":
/***/ (function(module, exports) {

module.exports = require("django-airavata-api");

/***/ }),

/***/ "f6fd":
/***/ (function(module, exports) {

// document.currentScript polyfill by Adam Miller

// MIT license

(function(document){
  var currentScript = "currentScript",
      scripts = document.getElementsByTagName('script'); // Live NodeList collection

  // If browser needs currentScript polyfill, add get currentScript() to the document object
  if (!(currentScript in document)) {
    Object.defineProperty(document, currentScript, {
      get: function(){

        // IE 6-10 supports script readyState
        // IE 10+ support stack trace
        try { throw new Error(); }
        catch (err) {

          // Find the second match for the "at" string to get file src url from stack.
          // Specifically works with the format of stack traces in IE.
          var i, res = ((/.*at [^\(]*\((.*):.+:.+\)$/ig).exec(err.stack) || [false])[1];

          // For all scripts on the page, if src matches or if ready state is interactive, return the script tag
          for(i in scripts){
            if(scripts[i].src == res || scripts[i].readyState == "interactive"){
              return scripts[i];
            }
          }

          // If no match, return null
          return null;
        }
      }
    });
  }
})(document);


/***/ }),

/***/ "fb15":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/setPublicPath.js
// This file is imported into lib/wc client bundles.

if (typeof window !== 'undefined') {
  if (true) {
    __webpack_require__("f6fd")
  }

  var i
  if ((i = window.document.currentScript) && (i = i.src.match(/(.+\/)[^/]+\.js(\?.*)?$/))) {
    __webpack_require__.p = i[1] // eslint-disable-line
  }
}

// Indicate to webpack that this file can be concatenated
/* harmony default export */ var setPublicPath = (null);

// EXTERNAL MODULE: external "django-airavata-api"
var external_django_airavata_api_ = __webpack_require__("999b");

// CONCATENATED MODULE: ./js/input-editors/InputEditorMixin.js
// InputEditorMixin: mixin for experiment InputEditors, provides basic v-model
// and validation functionality and defines the basic props interface
// (experimentInput and id).

/* harmony default export */ var InputEditorMixin = ({
  props: {
    value: {
      type: String
    },
    experimentInput: {
      type: external_django_airavata_api_["models"].InputDataObjectType,
      required: true
    },
    experiment: {
      type: external_django_airavata_api_["models"].Experiment,
      required: false
    },
    id: {
      type: String,
      required: true
    },
    readOnly: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      data: this.value,
      inputHasBegun: false
    };
  },
  asyncComputed: {
    validationResults: {
      get: function get() {
        var results = this.experimentInput.validate(this.data);
        var value = [];

        if ("value" in results) {
          value = Promise.all(results["value"]).then(function (arr) {
            return arr.filter(function (x) {
              return x !== null;
            });
          });
        }

        return {
          "value": value
        };
      },
      default: function _default() {
        return {
          "value": []
        };
      }
    },
    validationMessages: function validationMessages() {
      return "value" in this.validationResults ? this.validationResults["value"] : [];
    },
    valid: function valid() {
      if (this.validationMessages) return this.validationMessages.length === 0;else return false;
    },
    componentValidState: function componentValidState() {
      if (this.inputHasBegun) {
        return this.valid ? "valid" : "invalid";
      } else {
        return null;
      }
    }
  },
  computed: {
    editorConfig: function editorConfig() {
      return this.experimentInput.editorConfig;
    }
  },
  methods: {
    valueChanged: function valueChanged() {
      this.inputHasBegun = true;
      this.$emit("input", this.data);
    },
    checkValidation: function checkValidation() {
      if (this.valid) {
        this.$emit("valid");
      } else {
        this.$emit("invalid", this.validationMessages);
      }
    }
  },
  created: function created() {
    this.checkValidation();
  },
  watch: {
    value: function value(newValue) {
      this.data = newValue;
    },
    valid: function valid() {
      this.checkValidation();
    },
    validationMessages: function validationMessages() {
      this.checkValidation();
    }
  }
});
// CONCATENATED MODULE: ./js/index.js

/* harmony default export */ var js = ({
  InputEditorMixin: InputEditorMixin
});

// CONCATENATED MODULE: ./node_modules/@vue/cli-service/lib/commands/build/entry-lib.js
/* concated harmony reexport InputEditorMixin */__webpack_require__.d(__webpack_exports__, "InputEditorMixin", function() { return InputEditorMixin; });


/* harmony default export */ var entry_lib = __webpack_exports__["default"] = (js);



/***/ })

/******/ });
//# sourceMappingURL=index.common.js.map