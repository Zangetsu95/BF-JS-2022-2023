/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/docs/narrowing.ts":
/*!*******************************!*\
  !*** ./src/docs/narrowing.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "TUser": () => (/* binding */ TUser),
/* harmony export */   "exempleN": () => (/* binding */ exempleN),
/* harmony export */   "isDate": () => (/* binding */ isDate),
/* harmony export */   "isUser": () => (/* binding */ isUser),
/* harmony export */   "printId": () => (/* binding */ printId)
/* harmony export */ });
/**
 * Partie 3 - Narrowing
 * Permettre de réduire la liste des types disponibles
 */
let btn1 = document.querySelector('#increment'); // Element | null
let btn2 = document.querySelector('#increment'); // Element
let btn3 = document.querySelector('#increment'); // HTMLButtonElement
// Attention pour la version 2 et 3, vous empêchez le querySelector de 
// fonctionner correctement en cas de null
// Le mieux sera d'utiliser des conditions au lieu du narrowing '!' ou 'as'
// Autre exemple
let btn_dec = (event) => {
    event.preventDefault();
    const input = document.querySelector('#res');
    if (input) {
        // HTMLInputElement
        // Premier élément du narrowing
    }
    else {
        // null
    }
};
// Autre exemple
function printId(id) {
    if (id) {
        // string | number
        if (typeof id === "number") {
            // number
            console.log('id NUMBER :>> ', id);
        }
        else {
            // string
            let tmpId = parseInt(id);
            console.log('id STRING :>> ', id);
        }
    }
    else {
        // null
        id = 42;
        console.log('id NULL :>> ', id);
    }
}
// Autre exemple (double variables locales)
function exempleN(a, b) {
    if (a === b) {
        console.log('a DOUBLE:>> ', a); // Ici il sera d'office en string
        // Le seul point commun entre a et b est string
    }
}
// Autre exemple ()
function exempleOperateur(a) {
    // Exemple si a était un MouseEvent
    // MouseEvent étant un type TypeScript, il n'est pas reconnu par le typeof natif de js
    // if (typeof a === "MouseEvent")
    if ("value" in a) {
        // value est une propriété de HTMLInputElement
        console.log('a VALUE :>> ', a);
    }
    else if ("toto" in a) {
        console.log('a TOTO :>> ', a); // NE rentrera jamais
    }
    else {
        // MouseEvent
        console.log('a MOUSEEVENT :>> ', a);
    }
}
// Autre cas
// Je veux définir obligatoirement un retour Date sur a
function isDate(a) {
    return a instanceof Date;
}
// Cas plus concret
class TUser {
    constructor(name) { this.name = name; }
}
function isUser(a) {
    return a instanceof TUser;
}
// On aurait très bien pu mettre un booléen en retour de la fonction
// mais dans la lecture de la documentation au survol de la fonction
// Il est plus intéressant de savoir que le retour d'un booléen sera 
// sur un TUSer et non d'un booléen


/***/ }),

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
/* harmony import */ var _docs_narrowing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./docs/narrowing */ "./src/docs/narrowing.ts");
/**
 * Partie 1 - Types
 */
console.warn("Partie 1 - Types");

console.log('mesTypes.a :>> ', _docs_types__WEBPACK_IMPORTED_MODULE_0__.mesTypes.a);
console.log('mesTypes.b :>> ', _docs_types__WEBPACK_IMPORTED_MODULE_0__.mesTypes.b);
console.log('mesTypes.c :>> ', _docs_types__WEBPACK_IMPORTED_MODULE_0__.mesTypes.c);
console.log('mesTypes.e :>> ', _docs_types__WEBPACK_IMPORTED_MODULE_0__.mesTypes.e);
console.log('mesTypes.f :>> ', _docs_types__WEBPACK_IMPORTED_MODULE_0__.mesTypes.f);
console.log('mesTypes.g :>> ', _docs_types__WEBPACK_IMPORTED_MODULE_0__.mesTypes.g);
console.log('mesTypes.h :>> ', _docs_types__WEBPACK_IMPORTED_MODULE_0__.mesTypes.h);
console.log('mesTypes.i :>> ', _docs_types__WEBPACK_IMPORTED_MODULE_0__.mesTypes.i);
console.log('mesTypes.j :>> ', _docs_types__WEBPACK_IMPORTED_MODULE_0__.mesTypes.j);
console.log('mesTypes.k :>> ', _docs_types__WEBPACK_IMPORTED_MODULE_0__.mesTypes.k);
console.log('mesTypes.l :>> ', _docs_types__WEBPACK_IMPORTED_MODULE_0__.mesTypes.l);
console.log('mesTypes.m :>> ', _docs_types__WEBPACK_IMPORTED_MODULE_0__.mesTypes.m);
console.log('mesTypes.n :>> ', _docs_types__WEBPACK_IMPORTED_MODULE_0__.mesTypes.n);
console.log('mesTypes.o :>> ', _docs_types__WEBPACK_IMPORTED_MODULE_0__.mesTypes.o);
console.log('mesTypes.p :>> ', _docs_types__WEBPACK_IMPORTED_MODULE_0__.mesTypes.p);
console.log('mesTypes.q :>> ', _docs_types__WEBPACK_IMPORTED_MODULE_0__.mesTypes.q);
/**
 * Partie 2 - Assertion de types
 */
console.warn("Partie 2 - Assertion de types");
// Voir src/docs/assertionTypes.ts
/**
 * Partie 3 - Narrowing
 */
console.warn("Partie 3 - Narrowing");

(0,_docs_narrowing__WEBPACK_IMPORTED_MODULE_1__.printId)(12);
(0,_docs_narrowing__WEBPACK_IMPORTED_MODULE_1__.printId)('a');
(0,_docs_narrowing__WEBPACK_IMPORTED_MODULE_1__.printId)(null);
(0,_docs_narrowing__WEBPACK_IMPORTED_MODULE_1__.exempleN)('a', 'a');
(0,_docs_narrowing__WEBPACK_IMPORTED_MODULE_1__.exempleN)('a', true);
(0,_docs_narrowing__WEBPACK_IMPORTED_MODULE_1__.exempleN)(12, true);
let birthDate = new Date('03/04/1996');
console.log('Date [03/04/1996]:>> ', (0,_docs_narrowing__WEBPACK_IMPORTED_MODULE_1__.isDate)(birthDate));
console.log('String [03/03/1001]:>> ', (0,_docs_narrowing__WEBPACK_IMPORTED_MODULE_1__.isDate)('03/03/1001'));
let user = new _docs_narrowing__WEBPACK_IMPORTED_MODULE_1__.TUser('Quentin');
console.log('isUser(user) :>> ', (0,_docs_narrowing__WEBPACK_IMPORTED_MODULE_1__.isUser)(user));
/**
 * Partie 4 - Custom Types
 */ 

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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cyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9zcmMvZG9jcy90eXBlcy50cyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9zcmMvYXBwLnRzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL3NyYy9leG8udHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyoqXHJcbiAqIFBhcnRpZSAzIC0gTmFycm93aW5nXHJcbiAqIFBlcm1ldHRyZSBkZSByw6lkdWlyZSBsYSBsaXN0ZSBkZXMgdHlwZXMgZGlzcG9uaWJsZXNcclxuICovXHJcbmxldCBidG4xID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2luY3JlbWVudCcpOyAvLyBFbGVtZW50IHwgbnVsbFxyXG5sZXQgYnRuMiA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpbmNyZW1lbnQnKTsgLy8gRWxlbWVudFxyXG5sZXQgYnRuMyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNpbmNyZW1lbnQnKTsgLy8gSFRNTEJ1dHRvbkVsZW1lbnRcclxuLy8gQXR0ZW50aW9uIHBvdXIgbGEgdmVyc2lvbiAyIGV0IDMsIHZvdXMgZW1ww6pjaGV6IGxlIHF1ZXJ5U2VsZWN0b3IgZGUgXHJcbi8vIGZvbmN0aW9ubmVyIGNvcnJlY3RlbWVudCBlbiBjYXMgZGUgbnVsbFxyXG4vLyBMZSBtaWV1eCBzZXJhIGQndXRpbGlzZXIgZGVzIGNvbmRpdGlvbnMgYXUgbGlldSBkdSBuYXJyb3dpbmcgJyEnIG91ICdhcydcclxuLy8gQXV0cmUgZXhlbXBsZVxyXG5sZXQgYnRuX2RlYyA9IChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3JlcycpO1xyXG4gICAgaWYgKGlucHV0KSB7XHJcbiAgICAgICAgLy8gSFRNTElucHV0RWxlbWVudFxyXG4gICAgICAgIC8vIFByZW1pZXIgw6lsw6ltZW50IGR1IG5hcnJvd2luZ1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgLy8gbnVsbFxyXG4gICAgfVxyXG59O1xyXG4vLyBBdXRyZSBleGVtcGxlXHJcbmV4cG9ydCBmdW5jdGlvbiBwcmludElkKGlkKSB7XHJcbiAgICBpZiAoaWQpIHtcclxuICAgICAgICAvLyBzdHJpbmcgfCBudW1iZXJcclxuICAgICAgICBpZiAodHlwZW9mIGlkID09PSBcIm51bWJlclwiKSB7XHJcbiAgICAgICAgICAgIC8vIG51bWJlclxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnaWQgTlVNQkVSIDo+PiAnLCBpZCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAvLyBzdHJpbmdcclxuICAgICAgICAgICAgbGV0IHRtcElkID0gcGFyc2VJbnQoaWQpO1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnaWQgU1RSSU5HIDo+PiAnLCBpZCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgLy8gbnVsbFxyXG4gICAgICAgIGlkID0gNDI7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2lkIE5VTEwgOj4+ICcsIGlkKTtcclxuICAgIH1cclxufVxyXG4vLyBBdXRyZSBleGVtcGxlIChkb3VibGUgdmFyaWFibGVzIGxvY2FsZXMpXHJcbmV4cG9ydCBmdW5jdGlvbiBleGVtcGxlTihhLCBiKSB7XHJcbiAgICBpZiAoYSA9PT0gYikge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdhIERPVUJMRTo+PiAnLCBhKTsgLy8gSWNpIGlsIHNlcmEgZCdvZmZpY2UgZW4gc3RyaW5nXHJcbiAgICAgICAgLy8gTGUgc2V1bCBwb2ludCBjb21tdW4gZW50cmUgYSBldCBiIGVzdCBzdHJpbmdcclxuICAgIH1cclxufVxyXG4vLyBBdXRyZSBleGVtcGxlICgpXHJcbmZ1bmN0aW9uIGV4ZW1wbGVPcGVyYXRldXIoYSkge1xyXG4gICAgLy8gRXhlbXBsZSBzaSBhIMOpdGFpdCB1biBNb3VzZUV2ZW50XHJcbiAgICAvLyBNb3VzZUV2ZW50IMOpdGFudCB1biB0eXBlIFR5cGVTY3JpcHQsIGlsIG4nZXN0IHBhcyByZWNvbm51IHBhciBsZSB0eXBlb2YgbmF0aWYgZGUganNcclxuICAgIC8vIGlmICh0eXBlb2YgYSA9PT0gXCJNb3VzZUV2ZW50XCIpXHJcbiAgICBpZiAoXCJ2YWx1ZVwiIGluIGEpIHtcclxuICAgICAgICAvLyB2YWx1ZSBlc3QgdW5lIHByb3ByacOpdMOpIGRlIEhUTUxJbnB1dEVsZW1lbnRcclxuICAgICAgICBjb25zb2xlLmxvZygnYSBWQUxVRSA6Pj4gJywgYSk7XHJcbiAgICB9XHJcbiAgICBlbHNlIGlmIChcInRvdG9cIiBpbiBhKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2EgVE9UTyA6Pj4gJywgYSk7IC8vIE5FIHJlbnRyZXJhIGphbWFpc1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgLy8gTW91c2VFdmVudFxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdhIE1PVVNFRVZFTlQgOj4+ICcsIGEpO1xyXG4gICAgfVxyXG59XHJcbi8vIEF1dHJlIGNhc1xyXG4vLyBKZSB2ZXV4IGTDqWZpbmlyIG9ibGlnYXRvaXJlbWVudCB1biByZXRvdXIgRGF0ZSBzdXIgYVxyXG5leHBvcnQgZnVuY3Rpb24gaXNEYXRlKGEpIHtcclxuICAgIHJldHVybiBhIGluc3RhbmNlb2YgRGF0ZTtcclxufVxyXG4vLyBDYXMgcGx1cyBjb25jcmV0XHJcbmV4cG9ydCBjbGFzcyBUVXNlciB7XHJcbiAgICBjb25zdHJ1Y3RvcihuYW1lKSB7IHRoaXMubmFtZSA9IG5hbWU7IH1cclxufVxyXG5leHBvcnQgZnVuY3Rpb24gaXNVc2VyKGEpIHtcclxuICAgIHJldHVybiBhIGluc3RhbmNlb2YgVFVzZXI7XHJcbn1cclxuLy8gT24gYXVyYWl0IHRyw6hzIGJpZW4gcHUgbWV0dHJlIHVuIGJvb2zDqWVuIGVuIHJldG91ciBkZSBsYSBmb25jdGlvblxyXG4vLyBtYWlzIGRhbnMgbGEgbGVjdHVyZSBkZSBsYSBkb2N1bWVudGF0aW9uIGF1IHN1cnZvbCBkZSBsYSBmb25jdGlvblxyXG4vLyBJbCBlc3QgcGx1cyBpbnTDqXJlc3NhbnQgZGUgc2F2b2lyIHF1ZSBsZSByZXRvdXIgZCd1biBib29sw6llbiBzZXJhIFxyXG4vLyBzdXIgdW4gVFVTZXIgZXQgbm9uIGQndW4gYm9vbMOpZW5cclxuIiwiY29uc3QgYSA9IFwiaGVsbG8gbGVzIGJnXCI7XHJcbmNvbnN0IGIgPSA0MjtcclxuY29uc3QgYyA9IHRydWU7XHJcbmNvbnN0IGUgPSBbXCJhXCIsIFwiYlwiLCBcImNcIl07XHJcbmNvbnN0IGYgPSBbXCJkXCIsIFwiZVwiLCBcImZcIl07XHJcbmNvbnN0IGcgPSBbMSwgMiwgMywgNF07XHJcbmNvbnN0IGggPSBbXCJoZWxsb1wiLCB0cnVlLCAyMSwgW10sIHt9LCAoKSA9PiB7IH1dO1xyXG5jb25zdCBpID0ge307XHJcbmNvbnN0IGogPSB7XHJcbiAgICBmaXJzdG5hbWU6IFwiYW1pbmVcIixcclxuICAgIGxhc3RuYW1lOiBcImhvdXNzYW5lXCIsXHJcbn07XHJcbmNvbnN0IGsgPSB7IGNvdWNvdTogXCJoZWxsb1wiIH07XHJcbmNvbnN0IGwgPSBuZXcgRGF0ZSgpO1xyXG5jb25zdCBtID0gKCkgPT4geyB9O1xyXG5jb25zdCBuID0gKCkgPT4geyB9O1xyXG5jb25zdCBvID0gKGksIHMsIGIpID0+IFtcImFcIiwgXCJiXCJdO1xyXG5jb25zdCBwID0gKCkgPT4ge1xyXG4gICAgdGhyb3cgbmV3IEVycm9yKFwibm90IGltcGxlbWVudGVkXCIpO1xyXG59O1xyXG5sZXQgcSA9IFwiYVwiO1xyXG5xID0gMTtcclxucSA9IHRydWU7XHJcbi8vIGNvbnN0IHI6SFRNTFNwYW5FbGVtZW50ID0gbmV3IEhUTUxTcGFuRWxlbWVudFxyXG4vLyBjb25zdCBzOkVsZW1lbnQgPSBuZXcgRWxlbWVudCgpXHJcbmV4cG9ydCBsZXQgbWVzVHlwZXMgPSB7IGEsIGIsIGMsIGUsIGYsIGcsIGgsIGksIGosIGssIGwsIG0sIG4sIG8sIHAsIHEgfTtcclxuLypleHBvcnQgZ3JhY2UgYSBleHBvcnQsdW4gb2JqZXQgbGFtYmRhIHF1aSBjb250aWVuZHJhIHRvdXRlcyBsZXMgdmFyaWFibGVcclxuICAgIGNlIHF1aSBwYXIgbGEgc3VpdGUgbm91cyBldml0ZXJhIGRlcyBlcnJldXJzIGRlIG5vbW1hZ2VzIGVkIHZhcmlhYmxlcyBkw6lqYSBleGlzdGFudGVzXHJcbiovXHJcbi8vYXR0ZW50aW9uIGEgbCdpbmRleGF0aW9uXHJcbmNvbnN0IG9iID0geyAwOiAnYW1pbmUnLCAxOiA0NzQsIDI6IHRydWUgfTsgLy8gdGFibGVhdSBjbGFzc2lxdWUgXHJcbmNvbnNvbGUubG9nKG9iWzBdKTsgLy9vdXRwdXQgYW1pbmVcclxuLy9sJ2luZGV4YXRpb24gdHJhbnNmb3JtZXIgZmljdGl2ZW1lbnQgbW9uIG9qYmVjdCBlbiB0YWJsZWF1IGFzc29jaWF0aWZcclxuY29uc3Qgb2JqID0geyBmaXJzdG5hbWU6ICdhbWluZScsIGxhc3RuYW1lOiAnaG91c3NhbmUnLCBhZ2U6IDI3IH07XHJcbmNvbnNvbGUubG9nKCdvYmouZmlyc3RuYW1lIDo+PiAnLCBvYmouZmlyc3RuYW1lKTtcclxuY29uc29sZS5sb2coXCJvYmpbJ2ZpcnN0bmFtZSddIDo+PiBcIiwgb2JqWydmaXJzdG5hbWUnXSk7XHJcbi8vZGVybmllcmUgdmVyc2lvbiBtb2lucyBwcm9wcmVcclxuLy9kYW5nZXJldXggZW4gY2FzIGRlIHVuZGVmaW5lZCBvdSB1bmtub3duXHJcbi8v8J+QseKAjfCfkaRFeGVyY2ljZSAwMVxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8qKlxyXG4gKiBQYXJ0aWUgMSAtIFR5cGVzXHJcbiAqL1xyXG5jb25zb2xlLndhcm4oXCJQYXJ0aWUgMSAtIFR5cGVzXCIpO1xyXG5pbXBvcnQgeyBtZXNUeXBlcyB9IGZyb20gXCIuL2RvY3MvdHlwZXNcIjtcclxuY29uc29sZS5sb2coJ21lc1R5cGVzLmEgOj4+ICcsIG1lc1R5cGVzLmEpO1xyXG5jb25zb2xlLmxvZygnbWVzVHlwZXMuYiA6Pj4gJywgbWVzVHlwZXMuYik7XHJcbmNvbnNvbGUubG9nKCdtZXNUeXBlcy5jIDo+PiAnLCBtZXNUeXBlcy5jKTtcclxuY29uc29sZS5sb2coJ21lc1R5cGVzLmUgOj4+ICcsIG1lc1R5cGVzLmUpO1xyXG5jb25zb2xlLmxvZygnbWVzVHlwZXMuZiA6Pj4gJywgbWVzVHlwZXMuZik7XHJcbmNvbnNvbGUubG9nKCdtZXNUeXBlcy5nIDo+PiAnLCBtZXNUeXBlcy5nKTtcclxuY29uc29sZS5sb2coJ21lc1R5cGVzLmggOj4+ICcsIG1lc1R5cGVzLmgpO1xyXG5jb25zb2xlLmxvZygnbWVzVHlwZXMuaSA6Pj4gJywgbWVzVHlwZXMuaSk7XHJcbmNvbnNvbGUubG9nKCdtZXNUeXBlcy5qIDo+PiAnLCBtZXNUeXBlcy5qKTtcclxuY29uc29sZS5sb2coJ21lc1R5cGVzLmsgOj4+ICcsIG1lc1R5cGVzLmspO1xyXG5jb25zb2xlLmxvZygnbWVzVHlwZXMubCA6Pj4gJywgbWVzVHlwZXMubCk7XHJcbmNvbnNvbGUubG9nKCdtZXNUeXBlcy5tIDo+PiAnLCBtZXNUeXBlcy5tKTtcclxuY29uc29sZS5sb2coJ21lc1R5cGVzLm4gOj4+ICcsIG1lc1R5cGVzLm4pO1xyXG5jb25zb2xlLmxvZygnbWVzVHlwZXMubyA6Pj4gJywgbWVzVHlwZXMubyk7XHJcbmNvbnNvbGUubG9nKCdtZXNUeXBlcy5wIDo+PiAnLCBtZXNUeXBlcy5wKTtcclxuY29uc29sZS5sb2coJ21lc1R5cGVzLnEgOj4+ICcsIG1lc1R5cGVzLnEpO1xyXG4vKipcclxuICogUGFydGllIDIgLSBBc3NlcnRpb24gZGUgdHlwZXNcclxuICovXHJcbmNvbnNvbGUud2FybihcIlBhcnRpZSAyIC0gQXNzZXJ0aW9uIGRlIHR5cGVzXCIpO1xyXG4vLyBWb2lyIHNyYy9kb2NzL2Fzc2VydGlvblR5cGVzLnRzXHJcbi8qKlxyXG4gKiBQYXJ0aWUgMyAtIE5hcnJvd2luZ1xyXG4gKi9cclxuY29uc29sZS53YXJuKFwiUGFydGllIDMgLSBOYXJyb3dpbmdcIik7XHJcbmltcG9ydCB7IHByaW50SWQsIGV4ZW1wbGVOLCBpc0RhdGUsIGlzVXNlciwgVFVzZXIgfSBmcm9tIFwiLi9kb2NzL25hcnJvd2luZ1wiO1xyXG5wcmludElkKDEyKTtcclxucHJpbnRJZCgnYScpO1xyXG5wcmludElkKG51bGwpO1xyXG5leGVtcGxlTignYScsICdhJyk7XHJcbmV4ZW1wbGVOKCdhJywgdHJ1ZSk7XHJcbmV4ZW1wbGVOKDEyLCB0cnVlKTtcclxubGV0IGJpcnRoRGF0ZSA9IG5ldyBEYXRlKCcwMy8wNC8xOTk2Jyk7XHJcbmNvbnNvbGUubG9nKCdEYXRlIFswMy8wNC8xOTk2XTo+PiAnLCBpc0RhdGUoYmlydGhEYXRlKSk7XHJcbmNvbnNvbGUubG9nKCdTdHJpbmcgWzAzLzAzLzEwMDFdOj4+ICcsIGlzRGF0ZSgnMDMvMDMvMTAwMScpKTtcclxubGV0IHVzZXIgPSBuZXcgVFVzZXIoJ1F1ZW50aW4nKTtcclxuY29uc29sZS5sb2coJ2lzVXNlcih1c2VyKSA6Pj4gJywgaXNVc2VyKHVzZXIpKTtcclxuLyoqXHJcbiAqIFBhcnRpZSA0IC0gQ3VzdG9tIFR5cGVzXHJcbiAqLyBcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbi8qKlxyXG4gKiBQYXJ0aWUgMSAtIOKcj++4jyBFeGVyY2ljZSAwMVxyXG4gKi9cclxuLyoqXHJcbiAqIENyw6llciB1biBjb2RlIHBlcm1ldHRhbnQgZGUgY3LDqWVyIHVuIGNvbXB0ZXVyIGNsYXNzaXF1ZSwgYXZlYyArIDEsIC0xIGV0ID0uLi4sXHJcbiAqIGlsIGZhdWRyYSB0eXDDqSBsZSB0b3V0IGF1IG1heGltdW0sIHByw6lwYXJlciAyIGZvbmN0aW9ucyBwb3VyIMOnYVxyXG4gKi9cclxuY29uc29sZS53YXJuKCdFeGVyY2ljZSAwMScpO1xyXG5jb25zdCBidG5Nb2lucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNidG5Nb2lucycpO1xyXG5jb25zdCBidG5QbHVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2J0blBsdXMnKTtcclxuY29uc3QgdG90YWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG90YWwnKTtcclxubGV0IHZhbGV1cjtcclxuaWYgKHRvdGFsKVxyXG4gICAgdmFsZXVyID0gcGFyc2VJbnQodG90YWwuaW5uZXJUZXh0KTtcclxuY29uc3QgaW5jcmVtZW50ID0gKGV2ZW50KSA9PiB7XHJcbiAgICAvLyBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgaWYgKHRvdGFsKVxyXG4gICAgICAgIHRvdGFsLmlubmVyVGV4dCA9ICgrK3ZhbGV1cikudG9TdHJpbmcoKTtcclxufTtcclxuY29uc3QgZGVjcmVtZW50ID0gKGV2ZW50KSA9PiB7XHJcbiAgICAvLyBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgaWYgKHRvdGFsKVxyXG4gICAgICAgIHRvdGFsLmlubmVyVGV4dCA9ICgtLXZhbGV1cikudG9TdHJpbmcoKTtcclxufTtcclxuaWYgKGJ0blBsdXMpXHJcbiAgICBidG5QbHVzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaW5jcmVtZW50KTtcclxuaWYgKGJ0bk1vaW5zKVxyXG4gICAgYnRuTW9pbnMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkZWNyZW1lbnQpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=