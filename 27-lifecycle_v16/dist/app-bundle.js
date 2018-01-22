webpackJsonp([0],{

/***/ 185:
/*!******************!*\
  !*** ./timer.js ***!
  \******************/
/*! exports provided: default */
/*! exports used: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(/*! react */ 32);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\n\n\nvar Timer = function (_React$Component) {\n  _inherits(Timer, _React$Component);\n\n  function Timer(props) {\n    _classCallCheck(this, Timer);\n\n    var _this = _possibleConstructorReturn(this, (Timer.__proto__ || Object.getPrototypeOf(Timer)).call(this, props));\n\n    _this.tick = function () {\n      _this.setState(function (oldState) {\n        return { ticks: oldState.ticks + 1 };\n      });\n    };\n\n    _this.state = { ticks: 0 };\n    return _this;\n  }\n\n  _createClass(Timer, [{\n    key: 'componentWillMount',\n    value: function componentWillMount() {\n      this.timer = setInterval(this.tick, 1000);\n    }\n  }, {\n    key: 'componentWillUnmount',\n    value: function componentWillUnmount() {\n      clearInterval(this.timer);\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n        'div',\n        null,\n        __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n          'p',\n          null,\n          'Ticks: ',\n          this.state.ticks\n        )\n      );\n    }\n  }]);\n\n  return Timer;\n}(__WEBPACK_IMPORTED_MODULE_0_react___default.a.Component);\n\n/* harmony default export */ __webpack_exports__[\"a\"] = (Timer);//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiMTg1LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL3NyYy90aW1lci5qcz81MGExIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tICdyZWFjdCc7XG5cbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFRpbWVyIGV4dGVuZHMgUmVhY3QuQ29tcG9uZW50IHtcbiAgY29uc3RydWN0b3IocHJvcHMpIHtcbiAgICBzdXBlcihwcm9wcyk7XG4gICAgdGhpcy5zdGF0ZSA9IHsgdGlja3M6IDAgfTtcbiAgfVxuXG4gIGNvbXBvbmVudFdpbGxNb3VudCgpIHtcbiAgICB0aGlzLnRpbWVyID0gc2V0SW50ZXJ2YWwodGhpcy50aWNrLCAxMDAwKVxuICB9XG5cbiAgY29tcG9uZW50V2lsbFVubW91bnQoKSB7XG4gICAgY2xlYXJJbnRlcnZhbCh0aGlzLnRpbWVyKTtcbiAgfVxuXG4gIHRpY2sgPSAoKSA9PiB7XG4gICAgdGhpcy5zZXRTdGF0ZShvbGRTdGF0ZSA9PiAoeyB0aWNrczogb2xkU3RhdGUudGlja3MgKyAxIH0pKTtcbiAgfVxuXG4gIHJlbmRlcigpIHtcbiAgICByZXR1cm4gKFxuICAgICAgPGRpdj5cbiAgICAgIDxwPlRpY2tzOiB7dGhpcy5zdGF0ZS50aWNrc308L3A+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9XG59XG5cblxuXG4vLyBXRUJQQUNLIEZPT1RFUiAvL1xuLy8gc3JjL3RpbWVyLmpzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBOzs7QUFDQTtBQUFBO0FBQ0E7QUFEQTtBQUNBO0FBREE7QUFjQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBZEE7QUFGQTtBQUdBO0FBQ0E7OztBQUNBO0FBQ0E7QUFDQTs7O0FBRUE7QUFDQTtBQUNBOzs7QUFNQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQURBO0FBSUE7Ozs7QUF4QkE7QUFDQTtBQURBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///185\n");

/***/ }),

/***/ 83:
/*!************************!*\
  !*** multi ./main.jsx ***!
  \************************/
/*! dynamic exports provided */
/*! all exports used */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./main.jsx */84);


/***/ }),

/***/ 84:
/*!******************!*\
  !*** ./main.jsx ***!
  \******************/
/*! no exports provided */
/*! all exports used */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("Object.defineProperty(__webpack_exports__, \"__esModule\", { value: true });\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react__ = __webpack_require__(/*! react */ 32);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_react___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_react__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom__ = __webpack_require__(/*! react-dom */ 57);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_react_dom___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_react_dom__);\n/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__timer__ = __webpack_require__(/*! ./timer */ 185);\n\n\n\n\nvar App = function App(props) {\n  return __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(\n    'div',\n    null,\n    __WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(__WEBPACK_IMPORTED_MODULE_2__timer__[\"a\" /* default */], null)\n  );\n};\n\n__WEBPACK_IMPORTED_MODULE_1_react_dom___default.a.render(__WEBPACK_IMPORTED_MODULE_0_react___default.a.createElement(App, null), document.querySelector('main'));//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiODQuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vc3JjL21haW4uanN4PzIzYTciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gJ3JlYWN0JztcbmltcG9ydCBSZWFjdERPTSBmcm9tICdyZWFjdC1kb20nO1xuaW1wb3J0IFRpbWVyIGZyb20gJy4vdGltZXInO1xuXG5jb25zdCBBcHAgPSBmdW5jdGlvbihwcm9wcykge1xuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8VGltZXIgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuUmVhY3RET00ucmVuZGVyKDxBcHAgLz4sIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ21haW4nKSk7XG5cblxuXG5cbi8vIFdFQlBBQ0sgRk9PVEVSIC8vXG4vLyBzcmMvbWFpbi5qc3giXSwibWFwcGluZ3MiOiJBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQURBO0FBSUE7QUFDQTtBQUNBIiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///84\n");

/***/ })

},[83]);