/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/car.js":
/*!********************!*\
  !*** ./src/car.js ***!
  \********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Car\": () => (/* binding */ Car)\n/* harmony export */ });\nclass Car {\n    constructor(id, make, model, year) {\n        this.id = id,\n        this.make = make,\n        this.model = model,\n        this.year = year\n      }\n}\n\n//# sourceURL=webpack://es6_modules/./src/car.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _wishlist_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./wishlist.js */ \"./src/wishlist.js\");\n\n\nconst form = document.querySelector('form')\nconst make = document.querySelector('#makeInput')\nconst model = document.querySelector('#modelInput')\nconst year = document.querySelector('#yearInput')\nconst makeP = document.querySelector('#car-make')\nconst modelP = document.querySelector('#car-model')\nconst yearP = document.querySelector('#car-year')\nconst removeBtn = document.querySelector('.removeBtn')\nconst list = document.querySelector('ul')\n\n\nconsole.log(\"Hello World\");\n// TODO\n\nlet wishlist = new _wishlist_js__WEBPACK_IMPORTED_MODULE_0__.Wishlist();\n\nform.addEventListener(\"submit\", addCar);\nremoveBtn.addEventListener(\"click\", removeCar);\n\nfunction showCarDetails(car) {\n    makeP.textContent = car.make;\n    modelP.textContent = car.model;\n    yearP.textContent = car.year;\n    removeBtn.disabled = false;\n    removeBtn.setAttribute(\"data-carId\", car.id);\n}\n\nfunction updateDOMList() {\n    make.value = \"\";\n    model.value = \"\";\n    year.value = \"\";\n    list.innerHTML = \"\";\n    for (let i = 0; i < wishlist.list.length; i++) {\n      let newList = document.createElement(\"li\");\n      newList.textContent = `${wishlist.list[i].make} ${wishlist.list[i].model}`;\n      newList.addEventListener(\"click\", () => showCarDetails(wishlist.list[i]));\n      list.appendChild(newList);\n    }\n}\n\nfunction addCar(e) {\n    e.preventDefault();\n    let getCarMakeVal = make.value;\n    let getCarModelVal = model.value;\n    let getCarYearVal = year.value;\n    wishlist.add(getCarMakeVal, getCarModelVal, getCarYearVal);\n    updateDOMList();\n  }\n  \n  function removeCar() {\n    let carId = Number(removeBtn.getAttribute(\"data-carId\"));\n    wishlist.remove(carId);\n    updateDOMList();\n    makeP.textContent = \"\";\n    modelP.textContent = \"\";\n    yearP.textContent = \"\";\n    removeBtn.disabled = true;\n  }\n\n//# sourceURL=webpack://es6_modules/./src/index.js?");

/***/ }),

/***/ "./src/wishlist.js":
/*!*************************!*\
  !*** ./src/wishlist.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"Wishlist\": () => (/* binding */ Wishlist)\n/* harmony export */ });\n/* harmony import */ var _car_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./car.js */ \"./src/car.js\");\n\n\nclass Wishlist {\n    constructor(list, nextId) {\n        this.list = [],\n        this.nextId = 0\n    }\n\n    add(make, model, year) {\n        let newCar = new _car_js__WEBPACK_IMPORTED_MODULE_0__.Car(++this.nextId, make, model, year) \n        console.log(newCar) \n        this.list.push(newCar)\n        console.log(this.list)\n    }\n\n    remove(carId) {\n        for (let i = 0; i < this.list.length; i++) {\n            if (carId === this.list[i].id) {\n                this.list.splice(i, 1)\n            }\n        }\n        console.log(this.list)\n    }\n}\n\n//# sourceURL=webpack://es6_modules/./src/wishlist.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;