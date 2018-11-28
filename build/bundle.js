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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/server/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/App.js":
/*!********************!*\
  !*** ./src/App.js ***!
  \********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _Header = __webpack_require__(/*! ./components/Header */ \"./src/components/Header/index.js\");\n\nvar _Header2 = _interopRequireDefault(_Header);\n\nvar _reactRouterConfig = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n\nvar _Routes = __webpack_require__(/*! ./Routes */ \"./src/Routes.js\");\n\nvar _Routes2 = _interopRequireDefault(_Routes);\n\nvar _store = __webpack_require__(/*! ./components/Header/store */ \"./src/components/Header/store/index.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar App = function App(props) {\n  // console.log('props', props.route)\n  return _react2.default.createElement(\n    'div',\n    null,\n    _react2.default.createElement(_Header2.default, null),\n    (0, _reactRouterConfig.renderRoutes)(props.route.routes)\n  );\n};\nApp.loadData = function (store) {\n  // return store.dispatch(getHeaderInfo())    // 少了return, 这里会导致promise是undefined\n};\nexports.default = App;\n\n//# sourceURL=webpack:///./src/App.js?");

/***/ }),

/***/ "./src/Routes.js":
/*!***********************!*\
  !*** ./src/Routes.js ***!
  \***********************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _Home = __webpack_require__(/*! ./containers/Home */ \"./src/containers/Home/index.js\");\n\nvar _Home2 = _interopRequireDefault(_Home);\n\nvar _Login = __webpack_require__(/*! ./containers/Login */ \"./src/containers/Login/index.js\");\n\nvar _Login2 = _interopRequireDefault(_Login);\n\nvar _App = __webpack_require__(/*! ./App */ \"./src/App.js\");\n\nvar _App2 = _interopRequireDefault(_App);\n\nvar _NotFound = __webpack_require__(/*! ./containers/NotFound */ \"./src/containers/NotFound/index.js\");\n\nvar _NotFound2 = _interopRequireDefault(_NotFound);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// export default (\n//     <div>\n//       <Route path='/' exact component={Home}></Route>\n//       <Route path='/login' exact component={Login}></Route>\n//     </div>\n// )\nexports.default = [{\n  path: '/',\n  component: _App2.default,\n  loadData: _App2.default.loadData,\n  routes: [{\n    path: '/',\n    component: _Home2.default,\n    exact: true,\n    loadData: _Home2.default.loadData,\n    key: 'home'\n  }, {\n    path: '/login',\n    component: _Login2.default,\n    exact: true,\n    key: 'login'\n  }, {\n    component: _NotFound2.default\n  }]\n}];\n// export default [\n//   {\n//       path: '/',\n//       component: Home,\n//       exact: true,\n//       loadData: Home.loadData,\n//       key: 'home',\n//       // routes: [{\n//       //   path: '/test',\n//       //   component: Login,\n//       //   exact: true,\n//       //   key: 'test'\n//       // }]\n//   },\n//   {\n//     path: '/login',\n//     component: Login,\n//     exact: true,\n//     key: 'login'\n//   }\n// ]\n\n//# sourceURL=webpack:///./src/Routes.js?");

/***/ }),

/***/ "./src/client/request.js":
/*!*******************************!*\
  !*** ./src/client/request.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _axios = __webpack_require__(/*! axios */ \"axios\");\n\nvar _axios2 = _interopRequireDefault(_axios);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar instance = _axios2.default.create({\n  baseURL: '/',\n  params: { secret: 'abcdefg' }\n});\n\nexports.default = instance;\n\n//# sourceURL=webpack:///./src/client/request.js?");

/***/ }),

/***/ "./src/components/Header/index.js":
/*!****************************************!*\
  !*** ./src/components/Header/index.js ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar Header = function Header(props) {\n  var login = props.login;\n\n  return _react2.default.createElement(\n    'div',\n    null,\n    _react2.default.createElement(\n      _reactRouterDom.Link,\n      { to: '/' },\n      'Home'\n    ),\n    _react2.default.createElement('br', null),\n    login ? _react2.default.createElement(\n      _react2.default.Fragment,\n      null,\n      _react2.default.createElement(\n        _reactRouterDom.Link,\n        { to: '/list' },\n        'List'\n      ),\n      _react2.default.createElement('br', null),\n      _react2.default.createElement(\n        _reactRouterDom.Link,\n        { to: '/logout' },\n        'Logout'\n      ),\n      _react2.default.createElement('br', null)\n    ) : _react2.default.createElement(\n      _reactRouterDom.Link,\n      { to: '/login' },\n      'Login'\n    )\n  );\n};\n\nexports.default = (0, _reactRedux.connect)(function (state) {\n  return state.header;\n})(Header);\n\n//# sourceURL=webpack:///./src/components/Header/index.js?");

/***/ }),

/***/ "./src/components/Header/store/actions.js":
/*!************************************************!*\
  !*** ./src/components/Header/store/actions.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.getHeaderInfo = exports.logout = exports.login = undefined;\n\nvar _constants = __webpack_require__(/*! ./constants */ \"./src/components/Header/store/constants.js\");\n\nvar changeLogin = function changeLogin(value) {\n  return {\n    type: 'CHANGE_LOGIN',\n    value: value\n  };\n};\n\nvar login = exports.login = function login() {\n  return function (dispatch, getState, aixosInstance) {\n    return aixosInstance.get('/api/login.json?secret=abcd').then(function (res) {\n      dispatch(changeLogin(true));\n    });\n  };\n};\n\nvar logout = exports.logout = function logout() {\n  return function (dispatch, getState, aixosInstance) {\n    return aixosInstance.get('/api/logout.json?secret=abcd').then(function (res) {\n      dispatch(changeLogin(false));\n    });\n  };\n};\n\nvar getHeaderInfo = exports.getHeaderInfo = function getHeaderInfo() {\n  return function (dispatch, getState, aixosInstance) {\n    return aixosInstance.get('/api/isLogin.json?secret=abcd').then(function (res) {\n      dispatch(changeLogin(res.data.data.login));\n    });\n  };\n};\n\n//# sourceURL=webpack:///./src/components/Header/store/actions.js?");

/***/ }),

/***/ "./src/components/Header/store/constants.js":
/*!**************************************************!*\
  !*** ./src/components/Header/store/constants.js ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar CHANGE_LOGIN = exports.CHANGE_LOGIN = 'changeLogin';\n\n//# sourceURL=webpack:///./src/components/Header/store/constants.js?");

/***/ }),

/***/ "./src/components/Header/store/index.js":
/*!**********************************************!*\
  !*** ./src/components/Header/store/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.actions = exports.reducer = undefined;\n\nvar _reducer = __webpack_require__(/*! ./reducer */ \"./src/components/Header/store/reducer.js\");\n\nvar _reducer2 = _interopRequireDefault(_reducer);\n\nvar _actions = __webpack_require__(/*! ./actions */ \"./src/components/Header/store/actions.js\");\n\nvar _actions2 = _interopRequireDefault(_actions);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nexports.reducer = _reducer2.default;\nexports.actions = _actions2.default;\n\n//# sourceURL=webpack:///./src/components/Header/store/index.js?");

/***/ }),

/***/ "./src/components/Header/store/reducer.js":
/*!************************************************!*\
  !*** ./src/components/Header/store/reducer.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _constants = __webpack_require__(/*! ./constants */ \"./src/components/Header/store/constants.js\");\n\nvar defaultState = {\n  login: false\n};\n\nexports.default = function () {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : defaultState;\n  var action = arguments[1];\n\n  switch (action.type) {\n    case _constants.CHANGE_LOGIN:\n      return _extends({}, state, { login: action.value });\n    default:\n      return state;\n  }\n};\n\n//# sourceURL=webpack:///./src/components/Header/store/reducer.js?");

/***/ }),

/***/ "./src/containers/Home/index.js":
/*!**************************************!*\
  !*** ./src/containers/Home/index.js ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _Header = __webpack_require__(/*! ../../components/Header */ \"./src/components/Header/index.js\");\n\nvar _Header2 = _interopRequireDefault(_Header);\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nvar _actions = __webpack_require__(/*! ../../store/actions */ \"./src/store/actions.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Home = function (_React$Component) {\n  _inherits(Home, _React$Component);\n\n  function Home(props) {\n    _classCallCheck(this, Home);\n\n    return _possibleConstructorReturn(this, (Home.__proto__ || Object.getPrototypeOf(Home)).call(this, props));\n  }\n\n  _createClass(Home, [{\n    key: 'componentDidMount',\n    value: function componentDidMount() {\n      var getData = this.props.getData;\n\n      getData();\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n      var _this2 = this;\n\n      return _react2.default.createElement(\n        'div',\n        null,\n        _react2.default.createElement(\n          'p',\n          null,\n          'this is Home'\n        ),\n        _react2.default.createElement(\n          'p',\n          null,\n          this.props.name\n        ),\n        _react2.default.createElement(\n          'button',\n          { onClick: function onClick() {\n              return alert(_this2.props.name);\n            } },\n          'hi, click me'\n        )\n      );\n    }\n  }]);\n\n  return Home;\n}(_react2.default.Component);\n\nHome.loadData = function (store) {\n  // return store.dispatch(getData())\n};\n\nvar mapStateToProps = function mapStateToProps(state, ownProps) {\n  return _extends({}, state.home);\n};\n\nvar mapDispatchToProps = function mapDispatchToProps(dispatch, ownProps) {\n  return {\n    getData: function getData() {\n      dispatch((0, _actions.getData)());\n    }\n  };\n};\nexports.default = (0, _reactRedux.connect)(mapStateToProps, { getData: _actions.getData })(Home);\n\n//# sourceURL=webpack:///./src/containers/Home/index.js?");

/***/ }),

/***/ "./src/containers/Login/index.js":
/*!***************************************!*\
  !*** ./src/containers/Login/index.js ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _Header = __webpack_require__(/*! ../../components/Header */ \"./src/components/Header/index.js\");\n\nvar _Header2 = _interopRequireDefault(_Header);\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar Login = function (_React$Component) {\n  _inherits(Login, _React$Component);\n\n  function Login(props) {\n    _classCallCheck(this, Login);\n\n    var _this = _possibleConstructorReturn(this, (Login.__proto__ || Object.getPrototypeOf(Login)).call(this, props));\n\n    _this.state = {\n      isLogin: false\n    };\n    return _this;\n  }\n\n  _createClass(Login, [{\n    key: 'render',\n    value: function render() {\n      var isLogin = this.state.isLogin;\n\n      return _react2.default.createElement(\n        'div',\n        null,\n        isLogin ? '' : _react2.default.createElement(_reactRouterDom.Redirect, { to: '/' })\n      );\n    }\n  }]);\n\n  return Login;\n}(_react2.default.Component);\n\nexports.default = Login;\n\n//# sourceURL=webpack:///./src/containers/Login/index.js?");

/***/ }),

/***/ "./src/containers/NotFound/index.js":
/*!******************************************!*\
  !*** ./src/containers/NotFound/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if (\"value\" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nfunction _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError(\"Cannot call a class as a function\"); } }\n\nfunction _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError(\"this hasn't been initialised - super() hasn't been called\"); } return call && (typeof call === \"object\" || typeof call === \"function\") ? call : self; }\n\nfunction _inherits(subClass, superClass) { if (typeof superClass !== \"function\" && superClass !== null) { throw new TypeError(\"Super expression must either be null or a function, not \" + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }\n\nvar NotFound = function (_React$Component) {\n  _inherits(NotFound, _React$Component);\n\n  function NotFound() {\n    _classCallCheck(this, NotFound);\n\n    return _possibleConstructorReturn(this, (NotFound.__proto__ || Object.getPrototypeOf(NotFound)).apply(this, arguments));\n  }\n\n  _createClass(NotFound, [{\n    key: 'componentWillMount',\n    value: function componentWillMount() {\n      var staticContext = this.props.staticContext;\n\n      staticContext && (staticContext.Not_Found = true);\n    }\n  }, {\n    key: 'render',\n    value: function render() {\n\n      return _react2.default.createElement(\n        'div',\n        null,\n        'Not Found Page'\n      );\n    }\n  }]);\n\n  return NotFound;\n}(_react2.default.Component);\n\nexports.default = NotFound;\n\n//# sourceURL=webpack:///./src/containers/NotFound/index.js?");

/***/ }),

/***/ "./src/server/index.js":
/*!*****************************!*\
  !*** ./src/server/index.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nvar _express = __webpack_require__(/*! express */ \"express\");\n\nvar _express2 = _interopRequireDefault(_express);\n\nvar _util = __webpack_require__(/*! ./util */ \"./src/server/util.js\");\n\nvar _expressHttpProxy = __webpack_require__(/*! express-http-proxy */ \"express-http-proxy\");\n\nvar _expressHttpProxy2 = _interopRequireDefault(_expressHttpProxy);\n\nvar _reactRouterConfig = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n\nvar _Routes = __webpack_require__(/*! ../Routes */ \"./src/Routes.js\");\n\nvar _Routes2 = _interopRequireDefault(_Routes);\n\nvar _store = __webpack_require__(/*! ../store */ \"./src/store/index.js\");\n\nvar _uriJs = __webpack_require__(/*! uri-js */ \"uri-js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar app = (0, _express2.default)();\napp.use(_express2.default.static('public'));\n\n// const content = renderToString(<Home />);\n\n// http://47.95.113.63\n// app.use('/api', proxy('www.google.com', {\n//   proxyReqPathResolver: function(req) {\n//     // return new Promise(function (resolve, reject) {\n//     //   setTimeout(function () {   // simulate async\n//     //     var parts = req.url.split('?');\n//     //     var queryString = parts[1];\n//     //     var updatedPath = parts[0].replace(/test/, 'tent');\n//     //     var resolvedPathValue = updatedPath + (queryString ? '?' + queryString : '');\n//     //     resolve(resolvedPathValue);\n//     //   }, 200);\n//     // });\n//     return new Promise(function (resolve) { \n//       resolve('hahaha');\n//     }); \n//   }\n// }));\n\napp.use('/api', function (req, res) {\n  res.send('hahaha');\n});\n\napp.get('*', function (req, res) {\n  // res.send(render(req))、\n  var store = (0, _store.getStore)(req);\n  var matchedRoutes = (0, _reactRouterConfig.matchRoutes)(_Routes2.default, req.path);\n  // console.log(matchedRoutes);\n  var promises = [];\n  matchedRoutes.forEach(function (item) {\n    if (item.route.loadData) {\n      // promises.push(item.route.loadData(store));\n      var promise = new Promise(function (resolve, reject) {\n        item.route.loadData(store).then(resolve).catch(resolve);\n      });\n      promises.push(promise);\n    }\n  });\n\n  Promise.all(promises).then(function () {\n    var context = {};\n    var html = (0, _util.render)(store, _Routes2.default, req, context);\n    if (context.action === 'REPLACE') {\n      res.redirect(301, context.url);\n    } else if (context.Not_Found) {\n      res.status(404);\n      res.send(html);\n    } else {\n      res.send(html);\n    }\n  }).catch(function () {\n    // res.end('sorry requse err')\n  });\n});\n\nvar server = app.listen(3009, function () {\n  var host = server.address().address;\n  var port = server.address().port;\n\n  console.log('Example app listening at http://', host, port);\n});\n\n//# sourceURL=webpack:///./src/server/index.js?");

/***/ }),

/***/ "./src/server/request.js":
/*!*******************************!*\
  !*** ./src/server/request.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\n\nvar _axios = __webpack_require__(/*! axios */ \"axios\");\n\nvar _axios2 = _interopRequireDefault(_axios);\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\n// 之前的写法，一个实例\nvar instance = _axios2.default.create({\n  baseURL: 'http://47.95.113.63/ssr'\n});\n\n// 现在的写法，一个方法\nvar createInstance = function createInstance(req) {\n  return _axios2.default.create({\n    baseURL: 'http://47.95.113.63/ssr',\n    headers: {\n      cookie: req.get('cookie') || ''\n    }\n  });\n};\n\nexports.default = createInstance;\n\n//# sourceURL=webpack:///./src/server/request.js?");

/***/ }),

/***/ "./src/server/util.js":
/*!****************************!*\
  !*** ./src/server/util.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.render = undefined;\n\nvar _react = __webpack_require__(/*! react */ \"react\");\n\nvar _react2 = _interopRequireDefault(_react);\n\nvar _server = __webpack_require__(/*! react-dom/server */ \"react-dom/server\");\n\nvar _reactRouterDom = __webpack_require__(/*! react-router-dom */ \"react-router-dom\");\n\nvar _reactRouterConfig = __webpack_require__(/*! react-router-config */ \"react-router-config\");\n\nvar _reactRedux = __webpack_require__(/*! react-redux */ \"react-redux\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar render = exports.render = function render(store, Routes, req, context) {\n  var content = (0, _server.renderToString)(_react2.default.createElement(\n    _reactRedux.Provider,\n    { store: store },\n    _react2.default.createElement(\n      _reactRouterDom.StaticRouter,\n      { context: context, location: req.path },\n      _react2.default.createElement(\n        \"div\",\n        null,\n        (0, _reactRouterConfig.renderRoutes)(Routes)\n      )\n    )\n  ));\n\n  return \"<html>\\n    <body>\\n      <div id=root>\" + content + \"</div>\\n      <script>\\n        window.context = {\\n          state: \" + JSON.stringify(store.getState()) + \"\\n        }\\n      </script>\\n      <script src='/index.js'></script>\\n    </body>\\n  </html>\";\n\n  // 先调试客户端请求数据的情况\n  // const content = renderToString(\n  //   <Provider store={store}>\n  //     <StaticRouter context={{}} location={req.path}>\n  //       <div>\n  //         {Routes.map(route => (\n  //           <Route {...route} />\n  //         ))}\n  //       </div>\n  //     </StaticRouter>\n  //   </Provider>\n  // );\n  // res.send(`<html>\n  //     <body>\n  //       <div id=root>${content}</div>\n  //       <script>\n  //         window.context = {\n  //           state: ${JSON.stringify(store.getState())}\n  //         }\n  //       </script>\n  //       <script src='/index.js'></script>\n  //     </body>\n  //   </html>`);\n};\n\n//# sourceURL=webpack:///./src/server/util.js?");

/***/ }),

/***/ "./src/store/actions.js":
/*!******************************!*\
  !*** ./src/store/actions.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.getData = undefined;\n\nvar _constants = __webpack_require__(/*! ./constants */ \"./src/store/constants.js\");\n\n// export const getData = () => {\n//   return (dispatch, action) => {\n//     return new Promise((resolve, reject) => {\n//       resolve(1)\n//     }).then(res => {\n//       dispatch({type: GET_DATA, payload: res})\n//     })\n//   }\n// }\n\nvar getData = exports.getData = function getData() {\n  return function (dispatch, getState, aixosInstance) {\n    return aixosInstance.get('/api/getData').then(function (res) {\n      dispatch({ type: _constants.GET_DATA, payload: res.data });\n    });\n  };\n};\n\n//# sourceURL=webpack:///./src/store/actions.js?");

/***/ }),

/***/ "./src/store/constants.js":
/*!********************************!*\
  !*** ./src/store/constants.js ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nvar GET_DATA = exports.GET_DATA = 'get_data';\n\n//# sourceURL=webpack:///./src/store/constants.js?");

/***/ }),

/***/ "./src/store/index.js":
/*!****************************!*\
  !*** ./src/store/index.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.getClientStore = exports.getStore = undefined;\n\nvar _redux = __webpack_require__(/*! redux */ \"redux\");\n\nvar _reduxThunk = __webpack_require__(/*! redux-thunk */ \"redux-thunk\");\n\nvar _reduxThunk2 = _interopRequireDefault(_reduxThunk);\n\nvar _reduxLogger = __webpack_require__(/*! redux-logger */ \"redux-logger\");\n\nvar _reduxLogger2 = _interopRequireDefault(_reduxLogger);\n\nvar _reduxDevtoolsExtension = __webpack_require__(/*! redux-devtools-extension */ \"redux-devtools-extension\");\n\nvar _reducers = __webpack_require__(/*! ./reducers */ \"./src/store/reducers.js\");\n\nvar _request = __webpack_require__(/*! ../client/request */ \"./src/client/request.js\");\n\nvar _request2 = _interopRequireDefault(_request);\n\nvar _request3 = __webpack_require__(/*! ../server/request */ \"./src/server/request.js\");\n\nvar _request4 = _interopRequireDefault(_request3);\n\nvar _store = __webpack_require__(/*! ../components/Header/store */ \"./src/components/Header/store/index.js\");\n\nfunction _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }\n\nvar rootReducer = (0, _redux.combineReducers)({\n  home: _reducers.homeReducer,\n  header: _store.reducer\n});\n\n// 单例模式\n//  const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(Thunk, logger)))\n\n//  export default store\n\nvar getStore = exports.getStore = function getStore(req) {\n  return (0, _redux.createStore)(rootReducer, (0, _reduxDevtoolsExtension.composeWithDevTools)((0, _redux.applyMiddleware)(_reduxThunk2.default.withExtraArgument((0, _request4.default)(req)), _reduxLogger2.default)));\n};\n\nvar getClientStore = exports.getClientStore = function getClientStore() {\n  var defautlStore = window.context.state;\n  return (0, _redux.createStore)(rootReducer, defautlStore, (0, _reduxDevtoolsExtension.composeWithDevTools)((0, _redux.applyMiddleware)(_reduxThunk2.default.withExtraArgument(_request2.default), _reduxLogger2.default)));\n};\n\n//# sourceURL=webpack:///./src/store/index.js?");

/***/ }),

/***/ "./src/store/reducers.js":
/*!*******************************!*\
  !*** ./src/store/reducers.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
eval("\n\nObject.defineProperty(exports, \"__esModule\", {\n  value: true\n});\nexports.homeReducer = undefined;\n\nvar _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };\n\nvar _constants = __webpack_require__(/*! ./constants */ \"./src/store/constants.js\");\n\nvar initialHomeState = {\n  name: 'init'\n};\n\nvar homeReducer = exports.homeReducer = function homeReducer() {\n  var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialHomeState;\n  var action = arguments[1];\n\n  switch (action.type) {\n    case _constants.GET_DATA:\n      return _extends({}, state, { name: action.payload });\n      break;\n    default:\n      return _extends({}, state);\n  }\n};\n\n//# sourceURL=webpack:///./src/store/reducers.js?");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"axios\");\n\n//# sourceURL=webpack:///external_%22axios%22?");

/***/ }),

/***/ "express":
/*!**************************!*\
  !*** external "express" ***!
  \**************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express\");\n\n//# sourceURL=webpack:///external_%22express%22?");

/***/ }),

/***/ "express-http-proxy":
/*!*************************************!*\
  !*** external "express-http-proxy" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"express-http-proxy\");\n\n//# sourceURL=webpack:///external_%22express-http-proxy%22?");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react\");\n\n//# sourceURL=webpack:///external_%22react%22?");

/***/ }),

/***/ "react-dom/server":
/*!***********************************!*\
  !*** external "react-dom/server" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-dom/server\");\n\n//# sourceURL=webpack:///external_%22react-dom/server%22?");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-redux\");\n\n//# sourceURL=webpack:///external_%22react-redux%22?");

/***/ }),

/***/ "react-router-config":
/*!**************************************!*\
  !*** external "react-router-config" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-config\");\n\n//# sourceURL=webpack:///external_%22react-router-config%22?");

/***/ }),

/***/ "react-router-dom":
/*!***********************************!*\
  !*** external "react-router-dom" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"react-router-dom\");\n\n//# sourceURL=webpack:///external_%22react-router-dom%22?");

/***/ }),

/***/ "redux":
/*!************************!*\
  !*** external "redux" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux\");\n\n//# sourceURL=webpack:///external_%22redux%22?");

/***/ }),

/***/ "redux-devtools-extension":
/*!*******************************************!*\
  !*** external "redux-devtools-extension" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-devtools-extension\");\n\n//# sourceURL=webpack:///external_%22redux-devtools-extension%22?");

/***/ }),

/***/ "redux-logger":
/*!*******************************!*\
  !*** external "redux-logger" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-logger\");\n\n//# sourceURL=webpack:///external_%22redux-logger%22?");

/***/ }),

/***/ "redux-thunk":
/*!******************************!*\
  !*** external "redux-thunk" ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"redux-thunk\");\n\n//# sourceURL=webpack:///external_%22redux-thunk%22?");

/***/ }),

/***/ "uri-js":
/*!*************************!*\
  !*** external "uri-js" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"uri-js\");\n\n//# sourceURL=webpack:///external_%22uri-js%22?");

/***/ })

/******/ });