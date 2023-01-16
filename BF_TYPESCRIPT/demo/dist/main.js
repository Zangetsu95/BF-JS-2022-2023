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
console.warn("Partie 4 - Custom Types");
let admin = {
    roleId: 0,
    lastName: "Geerts",
    firstName: "Quentin"
};
let admin2 = {
    roleId: "",
    lastName: "",
    firstName: ""
};
console.log('admin :>> ', admin);
let idInt = 45;
let idString = "a";
// let idBooleen: Id = true;
console.log('idInt :>> ', idInt);
console.log('idString :>> ', idString);
// console.log('idBooleen :>> ', idBooleen);
let date = "03/04/1996";
let date2 = new Date().toString();
console.log('date :>> ', date);
console.log('date :>> ', date2);

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vc3JjL2RvY3MvbmFycm93aW5nLnRzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL3NyYy9kb2NzL3R5cGVzLnRzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL3NyYy9hcHAudHMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vc3JjL2V4by50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogUGFydGllIDMgLSBOYXJyb3dpbmdcclxuICogUGVybWV0dHJlIGRlIHLDqWR1aXJlIGxhIGxpc3RlIGRlcyB0eXBlcyBkaXNwb25pYmxlc1xyXG4gKi9cclxubGV0IGJ0bjEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaW5jcmVtZW50Jyk7IC8vIEVsZW1lbnQgfCBudWxsXHJcbmxldCBidG4yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2luY3JlbWVudCcpOyAvLyBFbGVtZW50XHJcbmxldCBidG4zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2luY3JlbWVudCcpOyAvLyBIVE1MQnV0dG9uRWxlbWVudFxyXG4vLyBBdHRlbnRpb24gcG91ciBsYSB2ZXJzaW9uIDIgZXQgMywgdm91cyBlbXDDqmNoZXogbGUgcXVlcnlTZWxlY3RvciBkZSBcclxuLy8gZm9uY3Rpb25uZXIgY29ycmVjdGVtZW50IGVuIGNhcyBkZSBudWxsXHJcbi8vIExlIG1pZXV4IHNlcmEgZCd1dGlsaXNlciBkZXMgY29uZGl0aW9ucyBhdSBsaWV1IGR1IG5hcnJvd2luZyAnIScgb3UgJ2FzJ1xyXG4vLyBBdXRyZSBleGVtcGxlXHJcbmxldCBidG5fZGVjID0gKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmVzJyk7XHJcbiAgICBpZiAoaW5wdXQpIHtcclxuICAgICAgICAvLyBIVE1MSW5wdXRFbGVtZW50XHJcbiAgICAgICAgLy8gUHJlbWllciDDqWzDqW1lbnQgZHUgbmFycm93aW5nXHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICAvLyBudWxsXHJcbiAgICB9XHJcbn07XHJcbi8vIEF1dHJlIGV4ZW1wbGVcclxuZXhwb3J0IGZ1bmN0aW9uIHByaW50SWQoaWQpIHtcclxuICAgIGlmIChpZCkge1xyXG4gICAgICAgIC8vIHN0cmluZyB8IG51bWJlclxyXG4gICAgICAgIGlmICh0eXBlb2YgaWQgPT09IFwibnVtYmVyXCIpIHtcclxuICAgICAgICAgICAgLy8gbnVtYmVyXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdpZCBOVU1CRVIgOj4+ICcsIGlkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIHN0cmluZ1xyXG4gICAgICAgICAgICBsZXQgdG1wSWQgPSBwYXJzZUludChpZCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdpZCBTVFJJTkcgOj4+ICcsIGlkKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICAvLyBudWxsXHJcbiAgICAgICAgaWQgPSA0MjtcclxuICAgICAgICBjb25zb2xlLmxvZygnaWQgTlVMTCA6Pj4gJywgaWQpO1xyXG4gICAgfVxyXG59XHJcbi8vIEF1dHJlIGV4ZW1wbGUgKGRvdWJsZSB2YXJpYWJsZXMgbG9jYWxlcylcclxuZXhwb3J0IGZ1bmN0aW9uIGV4ZW1wbGVOKGEsIGIpIHtcclxuICAgIGlmIChhID09PSBiKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2EgRE9VQkxFOj4+ICcsIGEpOyAvLyBJY2kgaWwgc2VyYSBkJ29mZmljZSBlbiBzdHJpbmdcclxuICAgICAgICAvLyBMZSBzZXVsIHBvaW50IGNvbW11biBlbnRyZSBhIGV0IGIgZXN0IHN0cmluZ1xyXG4gICAgfVxyXG59XHJcbi8vIEF1dHJlIGV4ZW1wbGUgKClcclxuZnVuY3Rpb24gZXhlbXBsZU9wZXJhdGV1cihhKSB7XHJcbiAgICAvLyBFeGVtcGxlIHNpIGEgw6l0YWl0IHVuIE1vdXNlRXZlbnRcclxuICAgIC8vIE1vdXNlRXZlbnQgw6l0YW50IHVuIHR5cGUgVHlwZVNjcmlwdCwgaWwgbidlc3QgcGFzIHJlY29ubnUgcGFyIGxlIHR5cGVvZiBuYXRpZiBkZSBqc1xyXG4gICAgLy8gaWYgKHR5cGVvZiBhID09PSBcIk1vdXNlRXZlbnRcIilcclxuICAgIGlmIChcInZhbHVlXCIgaW4gYSkge1xyXG4gICAgICAgIC8vIHZhbHVlIGVzdCB1bmUgcHJvcHJpw6l0w6kgZGUgSFRNTElucHV0RWxlbWVudFxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdhIFZBTFVFIDo+PiAnLCBhKTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKFwidG90b1wiIGluIGEpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnYSBUT1RPIDo+PiAnLCBhKTsgLy8gTkUgcmVudHJlcmEgamFtYWlzXHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICAvLyBNb3VzZUV2ZW50XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2EgTU9VU0VFVkVOVCA6Pj4gJywgYSk7XHJcbiAgICB9XHJcbn1cclxuLy8gQXV0cmUgY2FzXHJcbi8vIEplIHZldXggZMOpZmluaXIgb2JsaWdhdG9pcmVtZW50IHVuIHJldG91ciBEYXRlIHN1ciBhXHJcbmV4cG9ydCBmdW5jdGlvbiBpc0RhdGUoYSkge1xyXG4gICAgcmV0dXJuIGEgaW5zdGFuY2VvZiBEYXRlO1xyXG59XHJcbi8vIENhcyBwbHVzIGNvbmNyZXRcclxuZXhwb3J0IGNsYXNzIFRVc2VyIHtcclxuICAgIGNvbnN0cnVjdG9yKG5hbWUpIHsgdGhpcy5uYW1lID0gbmFtZTsgfVxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBpc1VzZXIoYSkge1xyXG4gICAgcmV0dXJuIGEgaW5zdGFuY2VvZiBUVXNlcjtcclxufVxyXG4vLyBPbiBhdXJhaXQgdHLDqHMgYmllbiBwdSBtZXR0cmUgdW4gYm9vbMOpZW4gZW4gcmV0b3VyIGRlIGxhIGZvbmN0aW9uXHJcbi8vIG1haXMgZGFucyBsYSBsZWN0dXJlIGRlIGxhIGRvY3VtZW50YXRpb24gYXUgc3Vydm9sIGRlIGxhIGZvbmN0aW9uXHJcbi8vIElsIGVzdCBwbHVzIGludMOpcmVzc2FudCBkZSBzYXZvaXIgcXVlIGxlIHJldG91ciBkJ3VuIGJvb2zDqWVuIHNlcmEgXHJcbi8vIHN1ciB1biBUVVNlciBldCBub24gZCd1biBib29sw6llblxyXG4iLCJjb25zdCBhID0gXCJoZWxsbyBsZXMgYmdcIjtcclxuY29uc3QgYiA9IDQyO1xyXG5jb25zdCBjID0gdHJ1ZTtcclxuY29uc3QgZSA9IFtcImFcIiwgXCJiXCIsIFwiY1wiXTtcclxuY29uc3QgZiA9IFtcImRcIiwgXCJlXCIsIFwiZlwiXTtcclxuY29uc3QgZyA9IFsxLCAyLCAzLCA0XTtcclxuY29uc3QgaCA9IFtcImhlbGxvXCIsIHRydWUsIDIxLCBbXSwge30sICgpID0+IHsgfV07XHJcbmNvbnN0IGkgPSB7fTtcclxuY29uc3QgaiA9IHtcclxuICAgIGZpcnN0bmFtZTogXCJhbWluZVwiLFxyXG4gICAgbGFzdG5hbWU6IFwiaG91c3NhbmVcIixcclxufTtcclxuY29uc3QgayA9IHsgY291Y291OiBcImhlbGxvXCIgfTtcclxuY29uc3QgbCA9IG5ldyBEYXRlKCk7XHJcbmNvbnN0IG0gPSAoKSA9PiB7IH07XHJcbmNvbnN0IG4gPSAoKSA9PiB7IH07XHJcbmNvbnN0IG8gPSAoaSwgcywgYikgPT4gW1wiYVwiLCBcImJcIl07XHJcbmNvbnN0IHAgPSAoKSA9PiB7XHJcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJub3QgaW1wbGVtZW50ZWRcIik7XHJcbn07XHJcbmxldCBxID0gXCJhXCI7XHJcbnEgPSAxO1xyXG5xID0gdHJ1ZTtcclxuLy8gY29uc3QgcjpIVE1MU3BhbkVsZW1lbnQgPSBuZXcgSFRNTFNwYW5FbGVtZW50XHJcbi8vIGNvbnN0IHM6RWxlbWVudCA9IG5ldyBFbGVtZW50KClcclxuZXhwb3J0IGxldCBtZXNUeXBlcyA9IHsgYSwgYiwgYywgZSwgZiwgZywgaCwgaSwgaiwgaywgbCwgbSwgbiwgbywgcCwgcSB9O1xyXG4vKmV4cG9ydCBncmFjZSBhIGV4cG9ydCx1biBvYmpldCBsYW1iZGEgcXVpIGNvbnRpZW5kcmEgdG91dGVzIGxlcyB2YXJpYWJsZVxyXG4gICAgY2UgcXVpIHBhciBsYSBzdWl0ZSBub3VzIGV2aXRlcmEgZGVzIGVycmV1cnMgZGUgbm9tbWFnZXMgZWQgdmFyaWFibGVzIGTDqWphIGV4aXN0YW50ZXNcclxuKi9cclxuLy9hdHRlbnRpb24gYSBsJ2luZGV4YXRpb25cclxuY29uc3Qgb2IgPSB7IDA6ICdhbWluZScsIDE6IDQ3NCwgMjogdHJ1ZSB9OyAvLyB0YWJsZWF1IGNsYXNzaXF1ZSBcclxuY29uc29sZS5sb2cob2JbMF0pOyAvL291dHB1dCBhbWluZVxyXG4vL2wnaW5kZXhhdGlvbiB0cmFuc2Zvcm1lciBmaWN0aXZlbWVudCBtb24gb2piZWN0IGVuIHRhYmxlYXUgYXNzb2NpYXRpZlxyXG5jb25zdCBvYmogPSB7IGZpcnN0bmFtZTogJ2FtaW5lJywgbGFzdG5hbWU6ICdob3Vzc2FuZScsIGFnZTogMjcgfTtcclxuY29uc29sZS5sb2coJ29iai5maXJzdG5hbWUgOj4+ICcsIG9iai5maXJzdG5hbWUpO1xyXG5jb25zb2xlLmxvZyhcIm9ialsnZmlyc3RuYW1lJ10gOj4+IFwiLCBvYmpbJ2ZpcnN0bmFtZSddKTtcclxuLy9kZXJuaWVyZSB2ZXJzaW9uIG1vaW5zIHByb3ByZVxyXG4vL2RhbmdlcmV1eCBlbiBjYXMgZGUgdW5kZWZpbmVkIG91IHVua25vd25cclxuLy/wn5Cx4oCN8J+RpEV4ZXJjaWNlIDAxXHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLyoqXHJcbiAqIFBhcnRpZSAxIC0gVHlwZXNcclxuICovXHJcbmNvbnNvbGUud2FybihcIlBhcnRpZSAxIC0gVHlwZXNcIik7XHJcbmltcG9ydCB7IG1lc1R5cGVzIH0gZnJvbSBcIi4vZG9jcy90eXBlc1wiO1xyXG5jb25zb2xlLmxvZygnbWVzVHlwZXMuYSA6Pj4gJywgbWVzVHlwZXMuYSk7XHJcbmNvbnNvbGUubG9nKCdtZXNUeXBlcy5iIDo+PiAnLCBtZXNUeXBlcy5iKTtcclxuY29uc29sZS5sb2coJ21lc1R5cGVzLmMgOj4+ICcsIG1lc1R5cGVzLmMpO1xyXG5jb25zb2xlLmxvZygnbWVzVHlwZXMuZSA6Pj4gJywgbWVzVHlwZXMuZSk7XHJcbmNvbnNvbGUubG9nKCdtZXNUeXBlcy5mIDo+PiAnLCBtZXNUeXBlcy5mKTtcclxuY29uc29sZS5sb2coJ21lc1R5cGVzLmcgOj4+ICcsIG1lc1R5cGVzLmcpO1xyXG5jb25zb2xlLmxvZygnbWVzVHlwZXMuaCA6Pj4gJywgbWVzVHlwZXMuaCk7XHJcbmNvbnNvbGUubG9nKCdtZXNUeXBlcy5pIDo+PiAnLCBtZXNUeXBlcy5pKTtcclxuY29uc29sZS5sb2coJ21lc1R5cGVzLmogOj4+ICcsIG1lc1R5cGVzLmopO1xyXG5jb25zb2xlLmxvZygnbWVzVHlwZXMuayA6Pj4gJywgbWVzVHlwZXMuayk7XHJcbmNvbnNvbGUubG9nKCdtZXNUeXBlcy5sIDo+PiAnLCBtZXNUeXBlcy5sKTtcclxuY29uc29sZS5sb2coJ21lc1R5cGVzLm0gOj4+ICcsIG1lc1R5cGVzLm0pO1xyXG5jb25zb2xlLmxvZygnbWVzVHlwZXMubiA6Pj4gJywgbWVzVHlwZXMubik7XHJcbmNvbnNvbGUubG9nKCdtZXNUeXBlcy5vIDo+PiAnLCBtZXNUeXBlcy5vKTtcclxuY29uc29sZS5sb2coJ21lc1R5cGVzLnAgOj4+ICcsIG1lc1R5cGVzLnApO1xyXG5jb25zb2xlLmxvZygnbWVzVHlwZXMucSA6Pj4gJywgbWVzVHlwZXMucSk7XHJcbi8qKlxyXG4gKiBQYXJ0aWUgMiAtIEFzc2VydGlvbiBkZSB0eXBlc1xyXG4gKi9cclxuY29uc29sZS53YXJuKFwiUGFydGllIDIgLSBBc3NlcnRpb24gZGUgdHlwZXNcIik7XHJcbi8vIFZvaXIgc3JjL2RvY3MvYXNzZXJ0aW9uVHlwZXMudHNcclxuLyoqXHJcbiAqIFBhcnRpZSAzIC0gTmFycm93aW5nXHJcbiAqL1xyXG5jb25zb2xlLndhcm4oXCJQYXJ0aWUgMyAtIE5hcnJvd2luZ1wiKTtcclxuaW1wb3J0IHsgcHJpbnRJZCwgZXhlbXBsZU4sIGlzRGF0ZSwgaXNVc2VyLCBUVXNlciB9IGZyb20gXCIuL2RvY3MvbmFycm93aW5nXCI7XHJcbnByaW50SWQoMTIpO1xyXG5wcmludElkKCdhJyk7XHJcbnByaW50SWQobnVsbCk7XHJcbmV4ZW1wbGVOKCdhJywgJ2EnKTtcclxuZXhlbXBsZU4oJ2EnLCB0cnVlKTtcclxuZXhlbXBsZU4oMTIsIHRydWUpO1xyXG5sZXQgYmlydGhEYXRlID0gbmV3IERhdGUoJzAzLzA0LzE5OTYnKTtcclxuY29uc29sZS5sb2coJ0RhdGUgWzAzLzA0LzE5OTZdOj4+ICcsIGlzRGF0ZShiaXJ0aERhdGUpKTtcclxuY29uc29sZS5sb2coJ1N0cmluZyBbMDMvMDMvMTAwMV06Pj4gJywgaXNEYXRlKCcwMy8wMy8xMDAxJykpO1xyXG5sZXQgdXNlciA9IG5ldyBUVXNlcignUXVlbnRpbicpO1xyXG5jb25zb2xlLmxvZygnaXNVc2VyKHVzZXIpIDo+PiAnLCBpc1VzZXIodXNlcikpO1xyXG4vKipcclxuICogUGFydGllIDQgLSBDdXN0b20gVHlwZXNcclxuICovXHJcbmNvbnNvbGUud2FybihcIlBhcnRpZSA0IC0gQ3VzdG9tIFR5cGVzXCIpO1xyXG5sZXQgYWRtaW4gPSB7XHJcbiAgICByb2xlSWQ6IDAsXHJcbiAgICBsYXN0TmFtZTogXCJHZWVydHNcIixcclxuICAgIGZpcnN0TmFtZTogXCJRdWVudGluXCJcclxufTtcclxubGV0IGFkbWluMiA9IHtcclxuICAgIHJvbGVJZDogXCJcIixcclxuICAgIGxhc3ROYW1lOiBcIlwiLFxyXG4gICAgZmlyc3ROYW1lOiBcIlwiXHJcbn07XHJcbmNvbnNvbGUubG9nKCdhZG1pbiA6Pj4gJywgYWRtaW4pO1xyXG5sZXQgaWRJbnQgPSA0NTtcclxubGV0IGlkU3RyaW5nID0gXCJhXCI7XHJcbi8vIGxldCBpZEJvb2xlZW46IElkID0gdHJ1ZTtcclxuY29uc29sZS5sb2coJ2lkSW50IDo+PiAnLCBpZEludCk7XHJcbmNvbnNvbGUubG9nKCdpZFN0cmluZyA6Pj4gJywgaWRTdHJpbmcpO1xyXG4vLyBjb25zb2xlLmxvZygnaWRCb29sZWVuIDo+PiAnLCBpZEJvb2xlZW4pO1xyXG5sZXQgZGF0ZSA9IFwiMDMvMDQvMTk5NlwiO1xyXG5sZXQgZGF0ZTIgPSBuZXcgRGF0ZSgpLnRvU3RyaW5nKCk7XHJcbmNvbnNvbGUubG9nKCdkYXRlIDo+PiAnLCBkYXRlKTtcclxuY29uc29sZS5sb2coJ2RhdGUgOj4+ICcsIGRhdGUyKTtcclxuIiwiXCJ1c2Ugc3RyaWN0XCI7XHJcbi8qKlxyXG4gKiBQYXJ0aWUgMSAtIOKcj++4jyBFeGVyY2ljZSAwMVxyXG4gKi9cclxuLyoqXHJcbiAqIENyw6llciB1biBjb2RlIHBlcm1ldHRhbnQgZGUgY3LDqWVyIHVuIGNvbXB0ZXVyIGNsYXNzaXF1ZSwgYXZlYyArIDEsIC0xIGV0ID0uLi4sXHJcbiAqIGlsIGZhdWRyYSB0eXDDqSBsZSB0b3V0IGF1IG1heGltdW0sIHByw6lwYXJlciAyIGZvbmN0aW9ucyBwb3VyIMOnYVxyXG4gKi9cclxuY29uc29sZS53YXJuKCdFeGVyY2ljZSAwMScpO1xyXG5jb25zdCBidG5Nb2lucyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNidG5Nb2lucycpO1xyXG5jb25zdCBidG5QbHVzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2J0blBsdXMnKTtcclxuY29uc3QgdG90YWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjdG90YWwnKTtcclxubGV0IHZhbGV1cjtcclxuaWYgKHRvdGFsKVxyXG4gICAgdmFsZXVyID0gcGFyc2VJbnQodG90YWwuaW5uZXJUZXh0KTtcclxuY29uc3QgaW5jcmVtZW50ID0gKGV2ZW50KSA9PiB7XHJcbiAgICAvLyBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgaWYgKHRvdGFsKVxyXG4gICAgICAgIHRvdGFsLmlubmVyVGV4dCA9ICgrK3ZhbGV1cikudG9TdHJpbmcoKTtcclxufTtcclxuY29uc3QgZGVjcmVtZW50ID0gKGV2ZW50KSA9PiB7XHJcbiAgICAvLyBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgaWYgKHRvdGFsKVxyXG4gICAgICAgIHRvdGFsLmlubmVyVGV4dCA9ICgtLXZhbGV1cikudG9TdHJpbmcoKTtcclxufTtcclxuaWYgKGJ0blBsdXMpXHJcbiAgICBidG5QbHVzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgaW5jcmVtZW50KTtcclxuaWYgKGJ0bk1vaW5zKVxyXG4gICAgYnRuTW9pbnMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkZWNyZW1lbnQpO1xyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=