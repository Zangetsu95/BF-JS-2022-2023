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
// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
var __webpack_exports__ = {};
/*!********************!*\
  !*** ./src/app.ts ***!
  \********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _docs_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./docs/types */ "./src/docs/types.ts");
console.log("Partie 1 - Types");

console.log('mesTypes.a :>> ', _docs_types__WEBPACK_IMPORTED_MODULE_0__.mesTypes.a);
console.log('mesTypes.b :>> ', _docs_types__WEBPACK_IMPORTED_MODULE_0__.mesTypes.b);

})();

// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
/*!********************!*\
  !*** ./src/exo.ts ***!
  \********************/

/**
 * Partie 1 - ✏️ Exercice 01
 */
/**
 * Créer un code permettant de créer un compteur classique, avec + 1, -1 et =...,
 * il faudra typé le tout au maximum, préparer 2 fonctions pour ça
 */
console.warn('Exercice 01');
const btnMoins = document.querySelector('#btnMoins');
const btnPlus = document.querySelector('#btnPlus');
const total = document.querySelector('#total');
let valeur;
if (total)
    valeur = parseInt(total.innerText);
const increment = (event) => {
    // event.preventDefault();
    if (total)
        total.innerText = (++valeur).toString();
};
const decrement = (event) => {
    // event.preventDefault();
    if (total)
        total.innerText = (--valeur).toString();
};
if (btnPlus)
    btnPlus.addEventListener('click', increment);
if (btnMoins)
    btnMoins.addEventListener('click', decrement);

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQyxXQUFXO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ08saUJBQWlCO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSwrQkFBK0I7QUFDNUMsb0JBQW9CO0FBQ3BCO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7VUN0Q0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7Ozs7Ozs7Ozs7QUNOQTtBQUN3QztBQUN4QywrQkFBK0IsbURBQVU7QUFDekMsK0JBQStCLG1EQUFVOzs7Ozs7Ozs7QUNINUI7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL3NyYy9kb2NzL3R5cGVzLnRzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL3NyYy9hcHAudHMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vc3JjL2V4by50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBhID0gXCJoZWxsbyBsZXMgYmdcIjtcclxuY29uc3QgYiA9IDQyO1xyXG5jb25zdCBjID0gdHJ1ZTtcclxuY29uc3QgZSA9IFtcImFcIiwgXCJiXCIsIFwiY1wiXTtcclxuY29uc3QgZiA9IFtcImRcIiwgXCJlXCIsIFwiZlwiXTtcclxuY29uc3QgZyA9IFsxLCAyLCAzLCA0XTtcclxuY29uc3QgaCA9IFtcImhlbGxvXCIsIHRydWUsIDIxLCBbXSwge30sICgpID0+IHsgfV07XHJcbmNvbnN0IGkgPSB7fTtcclxuY29uc3QgaiA9IHtcclxuICAgIGZpcnN0bmFtZTogXCJhbWluZVwiLFxyXG4gICAgbGFzdG5hbWU6IFwiaG91c3NhbmVcIixcclxufTtcclxuY29uc3QgayA9IHsgY291Y291OiBcImhlbGxvXCIgfTtcclxuY29uc3QgbCA9IG5ldyBEYXRlKCk7XHJcbmNvbnN0IG0gPSAoKSA9PiB7IH07XHJcbmNvbnN0IG4gPSAoKSA9PiB7IH07XHJcbmNvbnN0IG8gPSAoaSwgcywgYikgPT4gW1wiYVwiLCBcImJcIl07XHJcbmNvbnN0IHAgPSAoKSA9PiB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJub3QgaW1wbGVtZW50ZWRcIik7XHJcbn07XHJcbmxldCBxID0gXCJhXCI7XHJcbnEgPSAxO1xyXG5xID0gdHJ1ZTtcclxuLy8gY29uc3QgcjpIVE1MU3BhbkVsZW1lbnQgPSBuZXcgSFRNTFNwYW5FbGVtZW50XHJcbi8vIGNvbnN0IHM6RWxlbWVudCA9IG5ldyBFbGVtZW50KClcclxuZXhwb3J0IGxldCBtZXNUeXBlcyA9IHsgYSwgYiwgYywgZSwgZiwgZywgaCwgaSwgaiwgaywgbCwgbSwgbiwgbywgcCwgcSB9O1xyXG4vKmV4cG9ydCBncmFjZSBhIGV4cG9ydCx1biBvYmpldCBsYW1iZGEgcXVpIGNvbnRpZW5kcmEgdG91dGVzIGxlcyB2YXJpYWJsZVxyXG4gICAgY2UgcXVpIHBhciBsYSBzdWl0ZSBub3VzIGV2aXRlcmEgZGVzIGVycmV1cnMgZGUgbm9tbWFnZXMgZWQgdmFyaWFibGVzIGTDqWphIGV4aXN0YW50ZXNcclxuKi9cclxuLy9hdHRlbnRpb24gYSBsJ2luZGV4YXRpb25cclxuY29uc3Qgb2IgPSB7IDA6ICdhbWluZScsIDE6IDQ3NCwgMjogdHJ1ZSB9OyAvLyB0YWJsZWF1IGNsYXNzaXF1ZSBcclxuY29uc29sZS5sb2cob2JbMF0pOyAvL291dHB1dCBhbWluZVxyXG4vL2wnaW5kZXhhdGlvbiB0cmFuc2Zvcm1lciBmaWN0aXZlbWVudCBtb24gb2piZWN0IGVuIHRhYmxlYXUgYXNzb2NpYXRpZlxyXG5jb25zdCBvYmogPSB7IGZpcnN0bmFtZTogJ2FtaW5lJywgbGFzdG5hbWU6ICdob3Vzc2FuZScsIGFnZTogMjcgfTtcclxuY29uc29sZS5sb2coJ29iai5maXJzdG5hbWUgOj4+ICcsIG9iai5maXJzdG5hbWUpO1xyXG5jb25zb2xlLmxvZyhcIm9ialsnZmlyc3RuYW1lJ10gOj4+IFwiLCBvYmpbJ2ZpcnN0bmFtZSddKTtcclxuLy9kZXJuaWVyZSB2ZXJzaW9uIG1vaW5zIHByb3ByZVxyXG4vL2RhbmdlcmV1eCBlbiBjYXMgZGUgdW5kZWZpbmVkIG91IHVua25vd25cclxuLy/wn5Cx4oCN8J+RpEV4ZXJjaWNlIDAxXHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiY29uc29sZS5sb2coXCJQYXJ0aWUgMSAtIFR5cGVzXCIpO1xyXG5pbXBvcnQgeyBtZXNUeXBlcyB9IGZyb20gXCIuL2RvY3MvdHlwZXNcIjtcclxuY29uc29sZS5sb2coJ21lc1R5cGVzLmEgOj4+ICcsIG1lc1R5cGVzLmEpO1xyXG5jb25zb2xlLmxvZygnbWVzVHlwZXMuYiA6Pj4gJywgbWVzVHlwZXMuYik7XHJcbiIsIlwidXNlIHN0cmljdFwiO1xyXG4vKipcclxuICogUGFydGllIDEgLSDinI/vuI8gRXhlcmNpY2UgMDFcclxuICovXHJcbi8qKlxyXG4gKiBDcsOpZXIgdW4gY29kZSBwZXJtZXR0YW50IGRlIGNyw6llciB1biBjb21wdGV1ciBjbGFzc2lxdWUsIGF2ZWMgKyAxLCAtMSBldCA9Li4uLFxyXG4gKiBpbCBmYXVkcmEgdHlww6kgbGUgdG91dCBhdSBtYXhpbXVtLCBwcsOpcGFyZXIgMiBmb25jdGlvbnMgcG91ciDDp2FcclxuICovXHJcbmNvbnNvbGUud2FybignRXhlcmNpY2UgMDEnKTtcclxuY29uc3QgYnRuTW9pbnMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYnRuTW9pbnMnKTtcclxuY29uc3QgYnRuUGx1cyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNidG5QbHVzJyk7XHJcbmNvbnN0IHRvdGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvdGFsJyk7XHJcbmxldCB2YWxldXI7XHJcbmlmICh0b3RhbClcclxuICAgIHZhbGV1ciA9IHBhcnNlSW50KHRvdGFsLmlubmVyVGV4dCk7XHJcbmNvbnN0IGluY3JlbWVudCA9IChldmVudCkgPT4ge1xyXG4gICAgLy8gZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGlmICh0b3RhbClcclxuICAgICAgICB0b3RhbC5pbm5lclRleHQgPSAoKyt2YWxldXIpLnRvU3RyaW5nKCk7XHJcbn07XHJcbmNvbnN0IGRlY3JlbWVudCA9IChldmVudCkgPT4ge1xyXG4gICAgLy8gZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGlmICh0b3RhbClcclxuICAgICAgICB0b3RhbC5pbm5lclRleHQgPSAoLS12YWxldXIpLnRvU3RyaW5nKCk7XHJcbn07XHJcbmlmIChidG5QbHVzKVxyXG4gICAgYnRuUGx1cy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGluY3JlbWVudCk7XHJcbmlmIChidG5Nb2lucylcclxuICAgIGJ0bk1vaW5zLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGVjcmVtZW50KTtcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9