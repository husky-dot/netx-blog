module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
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
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
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
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./lib/posts.tsx":
/*!***********************!*\
  !*** ./lib/posts.tsx ***!
  \***********************/
/*! exports provided: getPosts, getPost, getPostIds */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPosts", function() { return getPosts; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPost", function() { return getPost; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getPostIds", function() { return getPostIds; });
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! fs */ "fs");
/* harmony import */ var fs__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(fs__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! path */ "path");
/* harmony import */ var path__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(path__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gray-matter */ "gray-matter");
/* harmony import */ var gray_matter__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(gray_matter__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! marked */ "marked");
/* harmony import */ var marked__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(marked__WEBPACK_IMPORTED_MODULE_3__);




const markdownDir = path__WEBPACK_IMPORTED_MODULE_1___default.a.join(process.cwd(), 'markdown');
const getPosts = async () => {
  const fileNames = await fs__WEBPACK_IMPORTED_MODULE_0__["promises"].readdir(markdownDir);
  const posts = fileNames.map(fileName => {
    const fullPath = path__WEBPACK_IMPORTED_MODULE_1___default.a.join(markdownDir, fileName);
    const id = fileName.replace(/\.md$/, '');
    console.log(fullPath);
    const text = fs__WEBPACK_IMPORTED_MODULE_0___default.a.readFileSync(fullPath, 'utf-8');
    const {
      data: {
        title,
        date
      },
      content
    } = gray_matter__WEBPACK_IMPORTED_MODULE_2___default()(text);
    return {
      id,
      title,
      date
    };
  });
  return posts;
};
const getPost = async id => {
  const fullPath = path__WEBPACK_IMPORTED_MODULE_1___default.a.join(markdownDir, id + '.md');
  const text = fs__WEBPACK_IMPORTED_MODULE_0___default.a.readFileSync(fullPath, 'utf-8');
  const {
    data: {
      title,
      date
    },
    content
  } = gray_matter__WEBPACK_IMPORTED_MODULE_2___default()(text);
  const htmlContent = marked__WEBPACK_IMPORTED_MODULE_3___default()(content);
  return JSON.parse(JSON.stringify({
    id,
    title,
    date,
    content,
    htmlContent
  }));
};
const getPostIds = async () => {
  const fileNames = await fs__WEBPACK_IMPORTED_MODULE_0__["promises"].readdir(markdownDir);
  return fileNames.map(fileName => fileName.replace(/\.md$/g, ''));
};

/***/ }),

/***/ "./pages/posts/[id].tsx":
/*!******************************!*\
  !*** ./pages/posts/[id].tsx ***!
  \******************************/
/*! exports provided: default, getStaticPaths, getStaticProps */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticPaths", function() { return getStaticPaths; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getStaticProps", function() { return getStaticProps; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lib_posts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lib/posts */ "./lib/posts.tsx");
var _jsxFileName = "D:\\MyProject\\netx-blog\\pages\\posts\\[id].tsx";

var __jsx = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement;


const postsShow = props => {
  const {
    post
  } = props;
  return __jsx("div", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 10,
      columnNumber: 5
    }
  }, __jsx("h1", {
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 11,
      columnNumber: 7
    }
  }, post.title), __jsx("article", {
    dangerouslySetInnerHTML: {
      __html: post.htmlContent
    },
    __self: undefined,
    __source: {
      fileName: _jsxFileName,
      lineNumber: 12,
      columnNumber: 7
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (postsShow);
const getStaticPaths = async () => {
  const idList = await Object(lib_posts__WEBPACK_IMPORTED_MODULE_1__["getPostIds"])();
  idList.map(id => ({
    params: {
      id
    }
  }));
  return {
    paths: idList.map(id => ({
      params: {
        id
      }
    })),
    fallback: false
  };
};
const getStaticProps = async x => {
  const id = x.params.id;
  const post = await Object(lib_posts__WEBPACK_IMPORTED_MODULE_1__["getPost"])(id);
  return {
    props: {
      post: post
    }
  };
};

/***/ }),

/***/ 5:
/*!************************************!*\
  !*** multi ./pages/posts/[id].tsx ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\MyProject\netx-blog\pages\posts\[id].tsx */"./pages/posts/[id].tsx");


/***/ }),

/***/ "fs":
/*!*********************!*\
  !*** external "fs" ***!
  \*********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("fs");

/***/ }),

/***/ "gray-matter":
/*!******************************!*\
  !*** external "gray-matter" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("gray-matter");

/***/ }),

/***/ "marked":
/*!*************************!*\
  !*** external "marked" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("marked");

/***/ }),

/***/ "path":
/*!***********************!*\
  !*** external "path" ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vbGliL3Bvc3RzLnRzeCIsIndlYnBhY2s6Ly8vLi9wYWdlcy9wb3N0cy8udHN4Iiwid2VicGFjazovLy9leHRlcm5hbCBcImZzXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiZ3JheS1tYXR0ZXJcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJtYXJrZWRcIiIsIndlYnBhY2s6Ly8vZXh0ZXJuYWwgXCJwYXRoXCIiLCJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwicmVhY3RcIiJdLCJuYW1lcyI6WyJtYXJrZG93bkRpciIsInBhdGgiLCJqb2luIiwicHJvY2VzcyIsImN3ZCIsImdldFBvc3RzIiwiZmlsZU5hbWVzIiwiZnNQcm9taXNlIiwicmVhZGRpciIsInBvc3RzIiwibWFwIiwiZmlsZU5hbWUiLCJmdWxsUGF0aCIsImlkIiwicmVwbGFjZSIsImNvbnNvbGUiLCJsb2ciLCJ0ZXh0IiwiZnMiLCJyZWFkRmlsZVN5bmMiLCJkYXRhIiwidGl0bGUiLCJkYXRlIiwiY29udGVudCIsIm1hdHRlciIsImdldFBvc3QiLCJodG1sQ29udGVudCIsIm1hcmtlZCIsIkpTT04iLCJwYXJzZSIsInN0cmluZ2lmeSIsImdldFBvc3RJZHMiLCJwb3N0c1Nob3ciLCJwcm9wcyIsInBvc3QiLCJfX2h0bWwiLCJnZXRTdGF0aWNQYXRocyIsImlkTGlzdCIsInBhcmFtcyIsInBhdGhzIiwiZmFsbGJhY2siLCJnZXRTdGF0aWNQcm9wcyIsIngiXSwibWFwcGluZ3MiOiI7O1FBQUE7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNBO1FBQ0E7UUFDQSxJQUFJO1FBQ0o7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTs7O1FBR0E7UUFDQTs7UUFFQTtRQUNBOztRQUVBO1FBQ0E7UUFDQTtRQUNB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Y1xcZGV2ZWxvcG1lbnRcXHBhZ2VzXFxwb3N0c1xcW2lkXS5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0gcmVxdWlyZSgnLi4vLi4vLi4vLi4vc3NyLW1vZHVsZS1jYWNoZS5qcycpO1xuXG4gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuIFx0ZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXG4gXHRcdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuIFx0XHRpZihpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSkge1xuIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuIFx0XHR9XG4gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbiBcdFx0XHRpOiBtb2R1bGVJZCxcbiBcdFx0XHRsOiBmYWxzZSxcbiBcdFx0XHRleHBvcnRzOiB7fVxuIFx0XHR9O1xuXG4gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuIFx0XHR2YXIgdGhyZXcgPSB0cnVlO1xuIFx0XHR0cnkge1xuIFx0XHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuIFx0XHRcdHRocmV3ID0gZmFsc2U7XG4gXHRcdH0gZmluYWxseSB7XG4gXHRcdFx0aWYodGhyZXcpIGRlbGV0ZSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXTtcbiBcdFx0fVxuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSA1KTtcbiIsImltcG9ydCBmcywgeyBwcm9taXNlcyBhcyBmc1Byb21pc2V9IGZyb20gJ2ZzJ1xyXG5pbXBvcnQgcGF0aCBmcm9tIFwicGF0aFwiO1xyXG5pbXBvcnQgbWF0dGVyIGZyb20gJ2dyYXktbWF0dGVyJztcclxuaW1wb3J0IG1hcmtlZCBmcm9tICdtYXJrZWQnXHJcblxyXG5jb25zdCBtYXJrZG93bkRpciA9IHBhdGguam9pbihwcm9jZXNzLmN3ZCgpLCAnbWFya2Rvd24nKTtcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRQb3N0cyA9IGFzeW5jICgpID0+IHtcclxuICBjb25zdCBmaWxlTmFtZXMgPSBhd2FpdCBmc1Byb21pc2UucmVhZGRpcihtYXJrZG93bkRpcilcclxuICBjb25zdCBwb3N0cyA9IGZpbGVOYW1lcy5tYXAoIGZpbGVOYW1lID0+IHtcclxuICAgIGNvbnN0IGZ1bGxQYXRoID0gcGF0aC5qb2luKG1hcmtkb3duRGlyLCBmaWxlTmFtZSlcclxuICAgIGNvbnN0IGlkID0gZmlsZU5hbWUucmVwbGFjZSgvXFwubWQkLywgJycpXHJcbiAgICBjb25zb2xlLmxvZyhmdWxsUGF0aClcclxuICAgIGNvbnN0IHRleHQgPSBmcy5yZWFkRmlsZVN5bmMoZnVsbFBhdGgsICd1dGYtOCcpXHJcbiAgICBjb25zdCB7ZGF0YTp7dGl0bGUsIGRhdGV9LCBjb250ZW50IH0gPSBtYXR0ZXIodGV4dClcclxuXHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBpZCwgdGl0bGUsIGRhdGVcclxuICAgIH1cclxuICB9KVxyXG4gIHJldHVybiBwb3N0c1xyXG59XHJcblxyXG5cclxuZXhwb3J0IGNvbnN0IGdldFBvc3QgPSBhc3luYyAoaWQ6IHN0cmluZykgPT4ge1xyXG4gIGNvbnN0IGZ1bGxQYXRoID0gcGF0aC5qb2luKG1hcmtkb3duRGlyLCBpZCArICcubWQnKVxyXG4gIGNvbnN0IHRleHQgPSBmcy5yZWFkRmlsZVN5bmMoZnVsbFBhdGgsICd1dGYtOCcpXHJcbiAgY29uc3Qge2RhdGE6e3RpdGxlLCBkYXRlfSwgY29udGVudCB9ID0gbWF0dGVyKHRleHQpXHJcbiAgY29uc3QgaHRtbENvbnRlbnQgPSBtYXJrZWQoY29udGVudClcclxuICByZXR1cm4gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh7XHJcbiAgICBpZCwgdGl0bGUsIGRhdGUsIGNvbnRlbnQsIGh0bWxDb250ZW50XHJcbiAgfSkpXHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRQb3N0SWRzID0gYXN5bmMgKCkgPT4ge1xyXG4gIGNvbnN0IGZpbGVOYW1lcyA9IGF3YWl0IGZzUHJvbWlzZS5yZWFkZGlyKG1hcmtkb3duRGlyKVxyXG4gIHJldHVybiBmaWxlTmFtZXMubWFwKGZpbGVOYW1lID0+IGZpbGVOYW1lLnJlcGxhY2UoL1xcLm1kJC9nLCAnJykpXHJcbn0iLCJpbXBvcnQgeyBnZXRQb3N0LCBnZXRQb3N0SWRzIH0gZnJvbSBcImxpYi9wb3N0c1wiO1xyXG5pbXBvcnQgeyBOZXh0UGFnZSB9IGZyb20gXCJuZXh0XCI7XHJcblxyXG50eXBlIFByb3BzID0ge1xyXG4gIHBvc3Q6IFBvc3RcclxufVxyXG5jb25zdCBwb3N0c1Nob3c6TmV4dFBhZ2U8UHJvcHM+ID0gKHByb3BzKSA9PiB7XHJcbiAgY29uc3Qge3Bvc3R9ID0gcHJvcHM7XHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxoMT57cG9zdC50aXRsZX08L2gxPlxyXG4gICAgICA8YXJ0aWNsZSBkYW5nZXJvdXNseVNldElubmVySFRNTD17e19faHRtbDogcG9zdC5odG1sQ29udGVudH19PlxyXG4gICAgICA8L2FydGljbGU+XHJcbiAgICA8L2Rpdj5cclxuICApXHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHBvc3RzU2hvdztcclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQYXRocyA9IGFzeW5jICgpID0+IHtcclxuICBjb25zdCBpZExpc3QgPSBhd2FpdCBnZXRQb3N0SWRzKClcclxuICBpZExpc3QubWFwKGlkID0+ICh7IHBhcmFtczoge2lkfX0pKVxyXG4gIHJldHVybiB7XHJcbiAgICBwYXRoczogaWRMaXN0Lm1hcChpZCA9PiAoeyBwYXJhbXM6IHtpZH19KSksXHJcbiAgICBmYWxsYmFjazogZmFsc2VcclxuICB9XHJcbn1cclxuXHJcbmV4cG9ydCBjb25zdCBnZXRTdGF0aWNQcm9wcyA9IGFzeW5jICh4OmFueSkgPT4ge1xyXG4gIGNvbnN0IGlkID0geC5wYXJhbXMuaWRcclxuICBjb25zdCBwb3N0ID0gYXdhaXQgZ2V0UG9zdChpZClcclxuICByZXR1cm4ge1xyXG4gICAgcHJvcHM6IHtcclxuICAgICAgcG9zdDogcG9zdFxyXG4gICAgfVxyXG4gIH1cclxufSIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImZzXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcImdyYXktbWF0dGVyXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIm1hcmtlZFwiKTsiLCJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJwYXRoXCIpOyIsIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcInJlYWN0XCIpOyJdLCJzb3VyY2VSb290IjoiIn0=