/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/docs/types.ts":
/*!***************************!*\
  !*** ./src/docs/types.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mesTypes": () => (/* binding */ mesTypes)
/* harmony export */ });
const a = "hello les bg";
const b = 42;
const c = true;
const e = ["a", "b", "c"];
const f = ["d", "e", "f"];
const g = [1, 2, 3, 4];
const h = ["hello", true, 21, [], {}, () => { }];
const i = {};
const j = {
    firstname: "amine",
    lastname: "houssane",
};
const k = { coucou: "hello" };
const l = new Date();
const m = () => { };
const n = () => { };
const o = (i, s, b) => ["a", "b"];
const p = () => {
    throw new Error("not implemented");
};
let q = "a";
q = 1;
q = true;
// const r:HTMLSpanElement = new HTMLSpanElement
// const s:Element = new Element()
let mesTypes = { a, b, c, e, f, g, h, i, j, k, l, m, n, o, p, q };
/*export grace a export,un objet lambda qui contiendra toutes les variable
    ce qui par la suite nous evitera des erreurs de nommages ed variables déja existantes
*/
//attention a l'indexation
const ob = { 0: 'amine', 1: 474, 2: true }; // tableau classique 
console.log(ob[0]); //output amine
//l'indexation transformer fictivement mon ojbect en tableau associatif
const obj = { firstname: 'amine', lastname: 'houssane', age: 27 };
console.log('obj.firstname :>> ', obj.firstname);
console.log("obj['firstname'] :>> ", obj['firstname']);
//derniere version moins propre
//dangereux en cas de undefined ou unknown
//🐱‍👤Exercice 01


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
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _docs_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./docs/types */ "./src/docs/types.ts");
console.log("Partie 1 - Types");

console.log('mesTypes.a :>> ', _docs_types__WEBPACK_IMPORTED_MODULE_0__.mesTypes.a);
console.log('mesTypes.b :>> ', _docs_types__WEBPACK_IMPORTED_MODULE_0__.mesTypes.b);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxXQUFXO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ08saUJBQWlCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSwrQkFBK0I7QUFDNUMsb0JBQW9CO0FBQ3BCO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7VUN0Q0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7OztBQ05BO0FBQ3dDO0FBQ3hDLCtCQUErQixtREFBVTtBQUN6QywrQkFBK0IsbURBQVUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9zcmMvZG9jcy90eXBlcy50cyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9zcmMvYXBwLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGEgPSBcImhlbGxvIGxlcyBiZ1wiO1xyXG5jb25zdCBiID0gNDI7XHJcbmNvbnN0IGMgPSB0cnVlO1xyXG5jb25zdCBlID0gW1wiYVwiLCBcImJcIiwgXCJjXCJdO1xyXG5jb25zdCBmID0gW1wiZFwiLCBcImVcIiwgXCJmXCJdO1xyXG5jb25zdCBnID0gWzEsIDIsIDMsIDRdO1xyXG5jb25zdCBoID0gW1wiaGVsbG9cIiwgdHJ1ZSwgMjEsIFtdLCB7fSwgKCkgPT4geyB9XTtcclxuY29uc3QgaSA9IHt9O1xyXG5jb25zdCBqID0ge1xyXG4gICAgZmlyc3RuYW1lOiBcImFtaW5lXCIsXHJcbiAgICBsYXN0bmFtZTogXCJob3Vzc2FuZVwiLFxyXG59O1xyXG5jb25zdCBrID0geyBjb3Vjb3U6IFwiaGVsbG9cIiB9O1xyXG5jb25zdCBsID0gbmV3IERhdGUoKTtcclxuY29uc3QgbSA9ICgpID0+IHsgfTtcclxuY29uc3QgbiA9ICgpID0+IHsgfTtcclxuY29uc3QgbyA9IChpLCBzLCBiKSA9PiBbXCJhXCIsIFwiYlwiXTtcclxuY29uc3QgcCA9ICgpID0+IHtcclxuICAgIHRocm93IG5ldyBFcnJvcihcIm5vdCBpbXBsZW1lbnRlZFwiKTtcclxufTtcclxubGV0IHEgPSBcImFcIjtcclxucSA9IDE7XHJcbnEgPSB0cnVlO1xyXG4vLyBjb25zdCByOkhUTUxTcGFuRWxlbWVudCA9IG5ldyBIVE1MU3BhbkVsZW1lbnRcclxuLy8gY29uc3QgczpFbGVtZW50ID0gbmV3IEVsZW1lbnQoKVxyXG5leHBvcnQgbGV0IG1lc1R5cGVzID0geyBhLCBiLCBjLCBlLCBmLCBnLCBoLCBpLCBqLCBrLCBsLCBtLCBuLCBvLCBwLCBxIH07XHJcbi8qZXhwb3J0IGdyYWNlIGEgZXhwb3J0LHVuIG9iamV0IGxhbWJkYSBxdWkgY29udGllbmRyYSB0b3V0ZXMgbGVzIHZhcmlhYmxlXHJcbiAgICBjZSBxdWkgcGFyIGxhIHN1aXRlIG5vdXMgZXZpdGVyYSBkZXMgZXJyZXVycyBkZSBub21tYWdlcyBlZCB2YXJpYWJsZXMgZMOpamEgZXhpc3RhbnRlc1xyXG4qL1xyXG4vL2F0dGVudGlvbiBhIGwnaW5kZXhhdGlvblxyXG5jb25zdCBvYiA9IHsgMDogJ2FtaW5lJywgMTogNDc0LCAyOiB0cnVlIH07IC8vIHRhYmxlYXUgY2xhc3NpcXVlIFxyXG5jb25zb2xlLmxvZyhvYlswXSk7IC8vb3V0cHV0IGFtaW5lXHJcbi8vbCdpbmRleGF0aW9uIHRyYW5zZm9ybWVyIGZpY3RpdmVtZW50IG1vbiBvamJlY3QgZW4gdGFibGVhdSBhc3NvY2lhdGlmXHJcbmNvbnN0IG9iaiA9IHsgZmlyc3RuYW1lOiAnYW1pbmUnLCBsYXN0bmFtZTogJ2hvdXNzYW5lJywgYWdlOiAyNyB9O1xyXG5jb25zb2xlLmxvZygnb2JqLmZpcnN0bmFtZSA6Pj4gJywgb2JqLmZpcnN0bmFtZSk7XHJcbmNvbnNvbGUubG9nKFwib2JqWydmaXJzdG5hbWUnXSA6Pj4gXCIsIG9ialsnZmlyc3RuYW1lJ10pO1xyXG4vL2Rlcm5pZXJlIHZlcnNpb24gbW9pbnMgcHJvcHJlXHJcbi8vZGFuZ2VyZXV4IGVuIGNhcyBkZSB1bmRlZmluZWQgb3UgdW5rbm93blxyXG4vL/CfkLHigI3wn5GkRXhlcmNpY2UgMDFcclxuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJjb25zb2xlLmxvZyhcIlBhcnRpZSAxIC0gVHlwZXNcIik7XHJcbmltcG9ydCB7IG1lc1R5cGVzIH0gZnJvbSBcIi4vZG9jcy90eXBlc1wiO1xyXG5jb25zb2xlLmxvZygnbWVzVHlwZXMuYSA6Pj4gJywgbWVzVHlwZXMuYSk7XHJcbmNvbnNvbGUubG9nKCdtZXNUeXBlcy5iIDo+PiAnLCBtZXNUeXBlcy5iKTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9