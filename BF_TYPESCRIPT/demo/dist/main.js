/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/docs/classes.ts":
/*!*****************************!*\
  !*** ./src/docs/classes.ts ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "AGeometry": () => (/* binding */ AGeometry),
/* harmony export */   "Audi": () => (/* binding */ Audi),
/* harmony export */   "Calculatrice": () => (/* binding */ Calculatrice),
/* harmony export */   "Carre": () => (/* binding */ Carre),
/* harmony export */   "DateConverter": () => (/* binding */ DateConverter),
/* harmony export */   "Femme": () => (/* binding */ Femme),
/* harmony export */   "Geometry": () => (/* binding */ Geometry),
/* harmony export */   "Homme": () => (/* binding */ Homme),
/* harmony export */   "MyUser": () => (/* binding */ MyUser),
/* harmony export */   "Personne": () => (/* binding */ Personne),
/* harmony export */   "Point": () => (/* binding */ Point),
/* harmony export */   "Points": () => (/* binding */ Points),
/* harmony export */   "Triangle": () => (/* binding */ Triangle),
/* harmony export */   "getX": () => (/* binding */ getX),
/* harmony export */   "getY": () => (/* binding */ getY)
/* harmony export */ });
/**
 * Partie 6 - Classes
 */
var __classPrivateFieldSet = (undefined && undefined.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _Person__password;
class Human {
    constructor() {
        this.gender = '';
        this.height = 0;
        this.weight = 0;
        this._etnic = '';
        this.__colorEyes = 'blue';
    }
}
// Encapsulation 
// → Le niveau de portée des propriétés dans le classe
// public       → disponible partout
// protected    → disponible uniquement dans la classe parent et dans les classes enfants (TypeScript !)
// private      → disponible uniquement dans la classe (TypeScript !)
// #            -> cfr. private - rendre invisible en dehors de la classe (JS)
// Héritage
// Transmettre les membres d'une classe parent à ses classes enfants
// Pour faire de l'héritage, on utilise extends
// 🪧 Un parent ne peut pas accéder à une propriété d'un enfant, par contre l'inverse oui !
// 🪧 Le constructeur du parent devra toujours être appelé dans celui de l'enfant
// Intialisation des propriétés
// prop: type = valeur  → Initialisation par défaut des valeurs
// prop!: type          → Pas besoin d'initialiser lors de la déclaration mais doit être initialiser dans le constructeur (sauf abstract)
// prop?: type          → Peut prendre la valeur du type associé ou undefined
class Person extends Human {
    constructor(id, name, firstname, password) {
        super(); // Permet de créer le parent
        _Person__password.set(this, void 0);
        this._upperPassword = (password) => {
            return password.toUpperCase();
        };
        if (!password)
            password = 'Coucou';
        __classPrivateFieldSet(this, _Person__password, this._upperPassword(password), "f");
        this.id = id;
        this.name = name;
        this.__colorEyes = 'red';
    }
}
_Person__password = new WeakMap();
class MyUser extends Person {
    constructor(id, name, firstname, password) {
        super(id, name, firstname, password);
        this.login = '';
        this.__colorEyes = 'yellow';
    }
}
// Duck Typing (y faire attention)
// Si je vois un oiseau qui vole comme un canard, cancane comme un canard, et nage comme un canard
// alors j'appelle cet oiseau un canard
class Point {
    constructor() {
        this.x = 5;
        this.y = 7;
    }
}
class Geometry {
    constructor() {
        this.x = 10;
        this.y = 100;
        this.other1 = "OK";
        this.other2 = true;
    }
}
// Geometry possède les mêmes propriétés que Point (x, y)
// Alors Geometry est un point
function getX(p) {
    return p.x * p.y;
}
function getY(p) {
    if (p instanceof Geometry)
        return p.other1;
    return p.x * p.y;
}
// Introduction à l'abstract
// Une classe abstraite est une classe qui ne peut pas être  car elle possède des méthodes abstraites (sans corps)
// Quand une classe possède des méthodes abstraites, cette classe devient elle-même abstraite.
// Obligation de redéfinir les méthodes non implémentées de la classe parent au plus tard dans les classes enfants qui héritent
// Une classe est d'office abstraite si elle possède des méthodes abstraite
// Une classe peut être abstraite MÊME si elle ne possède aucune méthode abstraite
// Le mot-clef 'abstract' peut se mettre sur : une classe, une propriété, un accesseur/mutateur, une fonction
// Utilisation : Permet de créer une certaine structure imposées (non instanciable) où l'on peut déclarer les différents membres :
// (propriétés + getters/setters + méthodes + constructeur) avec ou sans corps (ce qui se trouve entre les accolades d'une fonction)
// Signature d'une fonction : nom de la fonction + paramètres + type de retour
// Prototype d'une fonction : nom de la fonction + paramètres
class AGeometry {
    logMe() { return "Me"; }
}
class Triangle extends AGeometry {
    constructor() {
        super();
    }
    perimetre() {
        throw new Error("Method not implemented.");
    }
    air() {
        throw new Error("Method not implemented.");
    }
}
class Points extends AGeometry {
    constructor() {
        super();
    }
    perimetre() {
        return this.x * this.y;
    }
    air() {
        return this.x * this.y;
    }
}
class Carre extends AGeometry {
    constructor() {
        super();
    }
    logMe() {
        return "Ceci est un carré";
    }
    perimetre() {
        return this.x * 4;
    }
    air() {
        return this.x * this.x;
    }
}
// Exemple plus concret
class Personne {
    constructor(nom, prenom, date) {
        this.nom = nom;
        this.prenom = prenom;
        this.dateNaissance = date;
    }
    parler(message) {
        console.log(this.prenom + ' dit ' + message);
    }
}
class Femme extends Personne {
    constructor(nom, prenom, date, estEnceinte) {
        super(nom, prenom, date);
        this.genre = 'f';
        this.estEnceinte = false;
        this.estEnceinte = estEnceinte;
    }
    faireMenage() {
        console.log(`${this.prenom} fait le ménage`);
    }
    get nomComplet() {
        return "Mme. " + this.nom + ' ' + this.prenom;
    }
}
class Homme extends Personne {
    constructor(nom, prenom, date, longueurBarbe) {
        super(nom, prenom, date);
        this.genre = 'h';
        this.longueurBarbe = 0;
        this.longueurBarbe = longueurBarbe;
    }
    // Redéfinition de méthodes => garder la même signature mais changer le corps
    parler(message) {
        console.log(this.prenom + ' hurle ' + message);
    }
    faireMenage() {
        console.log(`${this.prenom} s'enfuit jouer`);
    }
    get nomComplet() {
        return "M. " + this.nom + ' ' + this.prenom;
    }
}
// Mot-clefs : Static
// Permet d'accéder aux membres d'une classe sans devoir l'instancier
// Directement sur le nom de la classe (exemple : Calculatrice.PI ou Calculatrice.addition(2, 4))
class Calculatrice {
    static addition(x, y) {
        return x + y;
    }
}
Calculatrice.PI = 3.141592;
class DateConverter {
    static convertTimeStampToDate(timestamp) {
        return new Date(parseInt(timestamp));
    }
}
class Audi {
    constructor() {
        this.modele = '';
        this.carburant = 'diesel';
        this.boiteVitesse = { auto: true, manuel: false };
    }
    avance(vitesseActuelle) {
        throw new Error("Method not implemented.");
    }
    recule(vitesseActuelle) {
        throw new Error("Method not implemented.");
    }
    log() {
        throw new Error("Method not implemented.");
    }
}
class VW {
    avance(vitesseActuelle) {
        throw new Error("Method not implemented.");
    }
    recule(vitesseActuelle) {
        throw new Error("Method not implemented.");
    }
}


/***/ }),

/***/ "./src/docs/generics.ts":
/*!******************************!*\
  !*** ./src/docs/generics.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "GenericNumber": () => (/* binding */ GenericNumber),
/* harmony export */   "Mathematique": () => (/* binding */ Mathematique),
/* harmony export */   "getProperty": () => (/* binding */ getProperty),
/* harmony export */   "identity": () => (/* binding */ identity),
/* harmony export */   "identity2": () => (/* binding */ identity2),
/* harmony export */   "identity3": () => (/* binding */ identity3),
/* harmony export */   "identity4": () => (/* binding */ identity4),
/* harmony export */   "loggingI": () => (/* binding */ loggingI)
/* harmony export */ });
/**
 * Partie 5 - Generics
 */
/*
    Fonctions génériques
*/
function identity(arg) {
    return arg;
}
// function idNumber (arg: number) {
//     // ...
//     return arg
// }
// function idString (arg: string) {
//     // ...
//     return arg
// }
// function idBoolean(arg: string) {
//     // ...
//     return arg
// }
// function idAll (arg: any) {
//     if (typeof arg === 'number') // ...
//     if (typeof arg === 'string') // ...
//     if (typeof arg === 'boolean') // ...
//     return arg
// }
// Création d'une fonction généric
function identity2(arg) {
    // Type ...
    return arg;
}
const tab = [1, 2, 3];
function identity3(arg1, arg2) {
    if (typeof arg1 === typeof arg2)
        return arg1;
    else
        return arg2;
}
function identity4(args) {
    console.log(args.length);
    return args;
}
/*
    Classes génériques
*/
class GenericNumber {
}
// Permet de créer une fonction générique basée sur une interface
// → Filtrer les types avec ceux uniquement qui possèdent les propriétés de l'interface
function loggingI(arg) {
    console.log('Length :>>', arg.length);
    return arg;
}
function getProperty(obj, key) {
    return obj[key];
}
class Mathematique {
}


/***/ }),

/***/ "./src/docs/narrowing.ts":
/*!*******************************!*\
  !*** ./src/docs/narrowing.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
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
        console.log('a VALUE :>> ', a.value);
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
// ✏ Exercice 01


/***/ }),

/***/ "./src/docs/overloads.ts":
/*!*******************************!*\
  !*** ./src/docs/overloads.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "P": () => (/* binding */ P),
/* harmony export */   "fn": () => (/* binding */ fn),
/* harmony export */   "fn2": () => (/* binding */ fn2)
/* harmony export */ });
/**
 * Partie 7 - Overloads
 * Permet de garder une méthode mais de changer
 * les types de paramètres et le type de retour
 */
function fn(a, b, c) {
    // if (c) return a + ' ' + b + ' ' + c
    // if (b) return a + ' ' + b
    // if (a) return a
    return c ? a + ' ' + b + ' ' + c : b ? a + ' ' + b : a;
}
function fn2(a) {
    if (typeof a === 'number')
        return "Vous avez entré : " + a;
    if (typeof a === 'string')
        return a.length;
    if (typeof a === 'boolean')
        return a;
}

// Surcharge de constructeur
class P {
    constructor(nom, prenom, dateNaissance, genre, animaux) {
        this.nom = nom;
        this.prenom = prenom;
        this.dateNaissance = dateNaissance ? dateNaissance : new Date();
        this.animaux = animaux !== null && animaux !== void 0 ? animaux : [];
        this.genre = genre !== null && genre !== void 0 ? genre : 'N/A';
    }
}



/***/ }),

/***/ "./src/docs/types.ts":
/*!***************************!*\
  !*** ./src/docs/types.ts ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "mesTypes": () => (/* binding */ mesTypes)
/* harmony export */ });
/**
 * Partie 1 - Types
 */
const a = 'Hello les fullstack JS.';
const b = 42;
const c = true;
const d = null;
const e = ['a', 'b', 'c'];
const f = ['d', 'e', 'f'];
const g = [1, 2, 3, 4];
const h = ['Hello', true, 21, [], {}, () => { }];
const i = {};
const j = { firstname: 'Quentin', lastname: 'Geerts' };
const k = { coucou: 'Hello' };
const l = new Date();
const m = () => { };
const n = () => { };
const o = (i, s, b) => ['a', 'b'];
const p = () => { throw new Error('Not implemented'); };
let q = 'a';
q = 1;
q = true;
// const r: HTMLSpanElement = new HTMLSpanElement();
// const s: Element = new Element();
let mesTypes = { a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q };
// Export grâce à export, un objet lambda qui contiendra toutes les variables
// Ce qui par la suite nous évitera des erreurs de nommages de variables déjà existantes
// Attention à l'indexation
const ob = { 0: 'Quentin', 1: 42, 2: true }; // Tableau classique (clef: number)
// console.log(ob.0); // pas possible
console.log(ob[0]); // output : 'Quentin'
// L'indexation transforme fictivement mon objet en tableau associatif
const obj = { firstname: 'Quentin', lastname: 'Geerts', age: 26 };
console.log(obj.firstname);
console.log(obj['firstname']);
// Attention que la dernière version est la moins propre
// → dangereux en cas de undefined ou unknown


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
// This entry need to be wrapped in an IIFE because it need to be in strict mode.
(() => {
"use strict";
var __webpack_exports__ = {};
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _docs_types__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./docs/types */ "./src/docs/types.ts");
/* harmony import */ var _docs_narrowing__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./docs/narrowing */ "./src/docs/narrowing.ts");
/* harmony import */ var _docs_generics__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./docs/generics */ "./src/docs/generics.ts");
/* harmony import */ var _docs_classes__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./docs/classes */ "./src/docs/classes.ts");
/* harmony import */ var _docs_overloads__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./docs/overloads */ "./src/docs/overloads.ts");
/**
 * Partie 1 - Types
 */
console.warn("Partie 1 - Types");

console.log('mesTypes.a :>> ', _docs_types__WEBPACK_IMPORTED_MODULE_0__.mesTypes.a);
console.log('mesTypes.b :>> ', _docs_types__WEBPACK_IMPORTED_MODULE_0__.mesTypes.b);
console.log('mesTypes.c :>> ', _docs_types__WEBPACK_IMPORTED_MODULE_0__.mesTypes.c);
console.log('mesTypes.d :>> ', _docs_types__WEBPACK_IMPORTED_MODULE_0__.mesTypes.d);
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
let ad = {
    roleId: 5,
    lastName: "",
    firstName: ""
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
console.log('typeof idInt :>> ', typeof idInt);
console.log('idString :>> ', idString);
// console.log('idBooleen :>> ', idBooleen);
let date = "03/04/1996";
let date2 = new Date().toString();
console.log('date :>> ', date);
console.log('date :>> ', date2);
/**
 * Partie 5 - Generics
 */
console.warn("Partie 5 - Generics");

// On perd le type dynamique passé en paramètre à cause du any
const id1_1 = (0,_docs_generics__WEBPACK_IMPORTED_MODULE_2__.identity)(3);
const id1_2 = (0,_docs_generics__WEBPACK_IMPORTED_MODULE_2__.identity)('toto');
const id1_3 = (0,_docs_generics__WEBPACK_IMPORTED_MODULE_2__.identity)(true);
console.log('id1_1 :>> ', id1_1);
console.log('typeof id1_1 :>> ', typeof id1_1);
console.log('id1_2 :>> ', id1_2);
console.log('typeof id1_2 :>> ', typeof id1_2);
console.log('id1_3 :>> ', id1_3);
console.log('typeof id1_3 :>> ', typeof id1_3);
const id2 = (0,_docs_generics__WEBPACK_IMPORTED_MODULE_2__.identity2)('e');
console.log('id2 :>> ', id2);
console.log('typeof id2 :>> ', typeof id2);
const id3 = (0,_docs_generics__WEBPACK_IMPORTED_MODULE_2__.identity2)(5);
console.log('id3 :>> ', id3);
console.log('typeof id3 :>> ', typeof id3);
const id4 = (0,_docs_generics__WEBPACK_IMPORTED_MODULE_2__.identity2)('a');
console.log('id4 :>> ', id4);
console.log('typeof id4 :>> ', typeof id4);
// identity2<Admin>(3); Pas possible car c'est un number et non un admin
const id5 = (0,_docs_generics__WEBPACK_IMPORTED_MODULE_2__.identity3)("Coucou", 42);
console.log('id5 :>> ', id5);
const id6 = (0,_docs_generics__WEBPACK_IMPORTED_MODULE_2__.identity3)('Hello', 'TypeScript');
console.log('id6 :>> ', id6);
const id7 = (0,_docs_generics__WEBPACK_IMPORTED_MODULE_2__.identity4)([1, 2, 3, 4]);
console.log('id7 :>> ', id7);
let nb = new _docs_generics__WEBPACK_IMPORTED_MODULE_2__.GenericNumber();
nb.zeroValue;
nb.add = function (x, y) {
    return x + y;
};
console.log(nb.add(3, 5));
const lg = (0,_docs_generics__WEBPACK_IMPORTED_MODULE_2__.loggingI)([5, 5, 6, 3, 4, 8]);
console.log('lg :>> ', lg);
//  Ne fonctionne pas
// const lg0 = loggingI<number>(5)
// const lg0 = loggingI(5)
// console.log('lg0 :>> ', lg0);
let x = {
    roleId: 0,
    lastName: "Geerts",
    firstName: "Quentin"
};
console.log('x :>> ', (0,_docs_generics__WEBPACK_IMPORTED_MODULE_2__.getProperty)(x, 'lastName'));
// console.log('x :>> ', getProperty(x, 'hello')); // Ne fonctionne pas car pas une clef de Type de l'objet (Admin)
// console.log('x :>> ', getProperty(x, 3));
let myTotal = new _docs_generics__WEBPACK_IMPORTED_MODULE_2__.Mathematique();
myTotal.add = (x, y) => x + y;
myTotal.sub = (x, y) => x - y;
console.log(myTotal.add(5, 6));
console.log(myTotal.sub(5, 6));
// let myTotal2 = new Mathematique<string, string>();
/**
 * Partie 6 - Classes
 */
console.warn("Partie 6 - Classes");

let myUser = new _docs_classes__WEBPACK_IMPORTED_MODULE_3__.MyUser(1, 'Geerts');
console.log('myUser :>> ', myUser);
// Duck Typing

console.log('getX(new Point):>> ', (0,_docs_classes__WEBPACK_IMPORTED_MODULE_3__.getX)(new _docs_classes__WEBPACK_IMPORTED_MODULE_3__.Point));
console.log('getX(new Geometry):>> ', (0,_docs_classes__WEBPACK_IMPORTED_MODULE_3__.getX)(new _docs_classes__WEBPACK_IMPORTED_MODULE_3__.Geometry));
console.log('getY(new Point):>> ', (0,_docs_classes__WEBPACK_IMPORTED_MODULE_3__.getY)(new _docs_classes__WEBPACK_IMPORTED_MODULE_3__.Point));
console.log('getY(new Geometry):>> ', (0,_docs_classes__WEBPACK_IMPORTED_MODULE_3__.getY)(new _docs_classes__WEBPACK_IMPORTED_MODULE_3__.Geometry));

// const ag = new AGeometry(); // Impossible d'instancier une classe abstraite! 
const p = new _docs_classes__WEBPACK_IMPORTED_MODULE_3__.Points();
p.x = 2;
p.y = 5;
const c = new _docs_classes__WEBPACK_IMPORTED_MODULE_3__.Carre();
c.x = 5;
console.log('object :>> ', p.logMe());
console.log('object :>> ', c.logMe());
console.log('object :>> ', p.perimetre());
console.log('object :>> ', p.air());
console.log('object :>> ', c.perimetre());
console.log('object :>> ', c.air());

// const p = new Personne()
const h = new _docs_classes__WEBPACK_IMPORTED_MODULE_3__.Homme('Geerts', 'Quentin', new Date('1996-04-03'), 0.5);
const f = new _docs_classes__WEBPACK_IMPORTED_MODULE_3__.Femme('Geerts', 'Mélanie', new Date(), false);
h.parler('Bonjour les JS !');
f.parler('Bonjour les JS !');
// Mot-clef : static

console.log(_docs_classes__WEBPACK_IMPORTED_MODULE_3__.Calculatrice.addition(5, 3));
// Calculatrice.PI = 2 // Impossible à changer avec un readonly
console.log(_docs_classes__WEBPACK_IMPORTED_MODULE_3__.Calculatrice.addition(_docs_classes__WEBPACK_IMPORTED_MODULE_3__.Calculatrice.PI, 1));
const calc = new _docs_classes__WEBPACK_IMPORTED_MODULE_3__.Calculatrice();
// calc.addition(5, 3) // Impossible d'appeler un membre static sur une instance

console.log(_docs_classes__WEBPACK_IMPORTED_MODULE_3__.DateConverter.convertTimeStampToDate(new Date().getTime().toString()));
// Interfaces

const v = new _docs_classes__WEBPACK_IMPORTED_MODULE_3__.Audi();
/**
 * Partie 7 - Overloads
 */

console.log((0,_docs_overloads__WEBPACK_IMPORTED_MODULE_4__.fn)('Hello'));
console.log((0,_docs_overloads__WEBPACK_IMPORTED_MODULE_4__.fn)('Hello', 'World'));
console.log((0,_docs_overloads__WEBPACK_IMPORTED_MODULE_4__.fn)('Hello', 'World', '!'));
console.log('fn2 string :>>', (0,_docs_overloads__WEBPACK_IMPORTED_MODULE_4__.fn2)('Bonjour'));
console.log('fn2 number :>>', (0,_docs_overloads__WEBPACK_IMPORTED_MODULE_4__.fn2)(5));
console.log('fn2 booléen :>>', (0,_docs_overloads__WEBPACK_IMPORTED_MODULE_4__.fn2)(true));

let noirau = { nom: 'Noirau', type: 'chat' };
let bill = { nom: 'Bill', type: 'chien' };
let titi = { nom: 'Titi', type: 'canari' };
let quentin = new _docs_overloads__WEBPACK_IMPORTED_MODULE_4__.P('Geerts', 'Quentin');
let melanie = new _docs_overloads__WEBPACK_IMPORTED_MODULE_4__.P('Geerts', 'Mélanie', new Date('08-05-1988'), 'f', [{ nom: 'Willy', type: 'dauphin' }]);
quentin.animaux = [noirau, bill, titi];
console.log('quentin :>> ', quentin);
console.log('melanie :>> ', melanie);

})();

// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
/*!**************************!*\
  !*** ./src/exercices.ts ***!
  \**************************/
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
// const decrement: Function = (event: MouseEvent) => {
const decrement = (event) => {
    // event.preventDefault();
    if (total)
        total.innerText = (--valeur).toString();
};
if (btnPlus)
    btnPlus.addEventListener('click', increment);
if (btnMoins)
    btnMoins.addEventListener('click', decrement);
/**
 * Partie 4 - ✏️ Exercice 02
 */
/**
 * Reprendre le code de l'exos 1 et tranformer le tout avec des narrowing et des generics
 */
/**
 * Partie 5 - ✏️ Exercice 03
 */
/**
 * Préparer un micro jeu de type heroes vs monster, vous aurez 2 grandes classes, heroes et monster,
 * le but, étant de pouvoir instancier un nouveau hero et un monstre avec des caractèristiques différentes,
 * ils devront être stocker dans un objet tableau grace a une fonction,
 * il devront pouvoir s'affronter graçe a des points de vie, d'attaque et de défense,
 * si vous avez terminer dans les temps impartis, vous pouvez améliorer, utilisez votre imagination
 * requis: un generic, un narrowing, des classes, un static, une abstract, le tout entièrement typé !
 * n'hésitez par à utiliser l'html pour ça et le rendre encore plus chouette
 */ 

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RztBQUNyQyxlQUFlO0FBQ2YsYUFBYTtBQUNiLGFBQWE7QUFDYixrQkFBa0IsOENBQUM7QUFDbkIsa0JBQWtCLDhDQUFDLHNEQUFzRCwrQkFBK0I7QUFDeEc7QUFDQTtBQUNBOzs7Ozs7Ozs7QUNqTUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL3NyYy9kb2NzL2NsYXNzZXMudHMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vc3JjL2RvY3MvZ2VuZXJpY3MudHMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vc3JjL2RvY3MvbmFycm93aW5nLnRzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL3NyYy9kb2NzL292ZXJsb2Fkcy50cyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9zcmMvZG9jcy90eXBlcy50cyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3Qvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3Qvd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9zcmMvaW5kZXgudHMiLCJ3ZWJwYWNrOi8vbXktd2VicGFjay1wcm9qZWN0Ly4vc3JjL2V4ZXJjaWNlcy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKipcclxuICogUGFydGllIDYgLSBDbGFzc2VzXHJcbiAqL1xyXG52YXIgX19jbGFzc1ByaXZhdGVGaWVsZFNldCA9ICh0aGlzICYmIHRoaXMuX19jbGFzc1ByaXZhdGVGaWVsZFNldCkgfHwgZnVuY3Rpb24gKHJlY2VpdmVyLCBzdGF0ZSwgdmFsdWUsIGtpbmQsIGYpIHtcclxuICAgIGlmIChraW5kID09PSBcIm1cIikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgbWV0aG9kIGlzIG5vdCB3cml0YWJsZVwiKTtcclxuICAgIGlmIChraW5kID09PSBcImFcIiAmJiAhZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgYWNjZXNzb3Igd2FzIGRlZmluZWQgd2l0aG91dCBhIHNldHRlclwiKTtcclxuICAgIGlmICh0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyICE9PSBzdGF0ZSB8fCAhZiA6ICFzdGF0ZS5oYXMocmVjZWl2ZXIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHdyaXRlIHByaXZhdGUgbWVtYmVyIHRvIGFuIG9iamVjdCB3aG9zZSBjbGFzcyBkaWQgbm90IGRlY2xhcmUgaXRcIik7XHJcbiAgICByZXR1cm4gKGtpbmQgPT09IFwiYVwiID8gZi5jYWxsKHJlY2VpdmVyLCB2YWx1ZSkgOiBmID8gZi52YWx1ZSA9IHZhbHVlIDogc3RhdGUuc2V0KHJlY2VpdmVyLCB2YWx1ZSkpLCB2YWx1ZTtcclxufTtcclxudmFyIF9QZXJzb25fX3Bhc3N3b3JkO1xyXG5jbGFzcyBIdW1hbiB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICB0aGlzLmdlbmRlciA9ICcnO1xyXG4gICAgICAgIHRoaXMuaGVpZ2h0ID0gMDtcclxuICAgICAgICB0aGlzLndlaWdodCA9IDA7XHJcbiAgICAgICAgdGhpcy5fZXRuaWMgPSAnJztcclxuICAgICAgICB0aGlzLl9fY29sb3JFeWVzID0gJ2JsdWUnO1xyXG4gICAgfVxyXG59XHJcbi8vIEVuY2Fwc3VsYXRpb24gXHJcbi8vIOKGkiBMZSBuaXZlYXUgZGUgcG9ydMOpZSBkZXMgcHJvcHJpw6l0w6lzIGRhbnMgbGUgY2xhc3NlXHJcbi8vIHB1YmxpYyAgICAgICDihpIgZGlzcG9uaWJsZSBwYXJ0b3V0XHJcbi8vIHByb3RlY3RlZCAgICDihpIgZGlzcG9uaWJsZSB1bmlxdWVtZW50IGRhbnMgbGEgY2xhc3NlIHBhcmVudCBldCBkYW5zIGxlcyBjbGFzc2VzIGVuZmFudHMgKFR5cGVTY3JpcHQgISlcclxuLy8gcHJpdmF0ZSAgICAgIOKGkiBkaXNwb25pYmxlIHVuaXF1ZW1lbnQgZGFucyBsYSBjbGFzc2UgKFR5cGVTY3JpcHQgISlcclxuLy8gIyAgICAgICAgICAgIC0+IGNmci4gcHJpdmF0ZSAtIHJlbmRyZSBpbnZpc2libGUgZW4gZGVob3JzIGRlIGxhIGNsYXNzZSAoSlMpXHJcbi8vIEjDqXJpdGFnZVxyXG4vLyBUcmFuc21ldHRyZSBsZXMgbWVtYnJlcyBkJ3VuZSBjbGFzc2UgcGFyZW50IMOgIHNlcyBjbGFzc2VzIGVuZmFudHNcclxuLy8gUG91ciBmYWlyZSBkZSBsJ2jDqXJpdGFnZSwgb24gdXRpbGlzZSBleHRlbmRzXHJcbi8vIPCfqqcgVW4gcGFyZW50IG5lIHBldXQgcGFzIGFjY8OpZGVyIMOgIHVuZSBwcm9wcmnDqXTDqSBkJ3VuIGVuZmFudCwgcGFyIGNvbnRyZSBsJ2ludmVyc2Ugb3VpICFcclxuLy8g8J+qpyBMZSBjb25zdHJ1Y3RldXIgZHUgcGFyZW50IGRldnJhIHRvdWpvdXJzIMOqdHJlIGFwcGVsw6kgZGFucyBjZWx1aSBkZSBsJ2VuZmFudFxyXG4vLyBJbnRpYWxpc2F0aW9uIGRlcyBwcm9wcmnDqXTDqXNcclxuLy8gcHJvcDogdHlwZSA9IHZhbGV1ciAg4oaSIEluaXRpYWxpc2F0aW9uIHBhciBkw6lmYXV0IGRlcyB2YWxldXJzXHJcbi8vIHByb3AhOiB0eXBlICAgICAgICAgIOKGkiBQYXMgYmVzb2luIGQnaW5pdGlhbGlzZXIgbG9ycyBkZSBsYSBkw6ljbGFyYXRpb24gbWFpcyBkb2l0IMOqdHJlIGluaXRpYWxpc2VyIGRhbnMgbGUgY29uc3RydWN0ZXVyIChzYXVmIGFic3RyYWN0KVxyXG4vLyBwcm9wPzogdHlwZSAgICAgICAgICDihpIgUGV1dCBwcmVuZHJlIGxhIHZhbGV1ciBkdSB0eXBlIGFzc29jacOpIG91IHVuZGVmaW5lZFxyXG5jbGFzcyBQZXJzb24gZXh0ZW5kcyBIdW1hbiB7XHJcbiAgICBjb25zdHJ1Y3RvcihpZCwgbmFtZSwgZmlyc3RuYW1lLCBwYXNzd29yZCkge1xyXG4gICAgICAgIHN1cGVyKCk7IC8vIFBlcm1ldCBkZSBjcsOpZXIgbGUgcGFyZW50XHJcbiAgICAgICAgX1BlcnNvbl9fcGFzc3dvcmQuc2V0KHRoaXMsIHZvaWQgMCk7XHJcbiAgICAgICAgdGhpcy5fdXBwZXJQYXNzd29yZCA9IChwYXNzd29yZCkgPT4ge1xyXG4gICAgICAgICAgICByZXR1cm4gcGFzc3dvcmQudG9VcHBlckNhc2UoKTtcclxuICAgICAgICB9O1xyXG4gICAgICAgIGlmICghcGFzc3dvcmQpXHJcbiAgICAgICAgICAgIHBhc3N3b3JkID0gJ0NvdWNvdSc7XHJcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfUGVyc29uX19wYXNzd29yZCwgdGhpcy5fdXBwZXJQYXNzd29yZChwYXNzd29yZCksIFwiZlwiKTtcclxuICAgICAgICB0aGlzLmlkID0gaWQ7XHJcbiAgICAgICAgdGhpcy5uYW1lID0gbmFtZTtcclxuICAgICAgICB0aGlzLl9fY29sb3JFeWVzID0gJ3JlZCc7XHJcbiAgICB9XHJcbn1cclxuX1BlcnNvbl9fcGFzc3dvcmQgPSBuZXcgV2Vha01hcCgpO1xyXG5leHBvcnQgY2xhc3MgTXlVc2VyIGV4dGVuZHMgUGVyc29uIHtcclxuICAgIGNvbnN0cnVjdG9yKGlkLCBuYW1lLCBmaXJzdG5hbWUsIHBhc3N3b3JkKSB7XHJcbiAgICAgICAgc3VwZXIoaWQsIG5hbWUsIGZpcnN0bmFtZSwgcGFzc3dvcmQpO1xyXG4gICAgICAgIHRoaXMubG9naW4gPSAnJztcclxuICAgICAgICB0aGlzLl9fY29sb3JFeWVzID0gJ3llbGxvdyc7XHJcbiAgICB9XHJcbn1cclxuLy8gRHVjayBUeXBpbmcgKHkgZmFpcmUgYXR0ZW50aW9uKVxyXG4vLyBTaSBqZSB2b2lzIHVuIG9pc2VhdSBxdWkgdm9sZSBjb21tZSB1biBjYW5hcmQsIGNhbmNhbmUgY29tbWUgdW4gY2FuYXJkLCBldCBuYWdlIGNvbW1lIHVuIGNhbmFyZFxyXG4vLyBhbG9ycyBqJ2FwcGVsbGUgY2V0IG9pc2VhdSB1biBjYW5hcmRcclxuZXhwb3J0IGNsYXNzIFBvaW50IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMueCA9IDU7XHJcbiAgICAgICAgdGhpcy55ID0gNztcclxuICAgIH1cclxufVxyXG5leHBvcnQgY2xhc3MgR2VvbWV0cnkge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgdGhpcy54ID0gMTA7XHJcbiAgICAgICAgdGhpcy55ID0gMTAwO1xyXG4gICAgICAgIHRoaXMub3RoZXIxID0gXCJPS1wiO1xyXG4gICAgICAgIHRoaXMub3RoZXIyID0gdHJ1ZTtcclxuICAgIH1cclxufVxyXG4vLyBHZW9tZXRyeSBwb3Nzw6hkZSBsZXMgbcOqbWVzIHByb3ByacOpdMOpcyBxdWUgUG9pbnQgKHgsIHkpXHJcbi8vIEFsb3JzIEdlb21ldHJ5IGVzdCB1biBwb2ludFxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0WChwKSB7XHJcbiAgICByZXR1cm4gcC54ICogcC55O1xyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBnZXRZKHApIHtcclxuICAgIGlmIChwIGluc3RhbmNlb2YgR2VvbWV0cnkpXHJcbiAgICAgICAgcmV0dXJuIHAub3RoZXIxO1xyXG4gICAgcmV0dXJuIHAueCAqIHAueTtcclxufVxyXG4vLyBJbnRyb2R1Y3Rpb24gw6AgbCdhYnN0cmFjdFxyXG4vLyBVbmUgY2xhc3NlIGFic3RyYWl0ZSBlc3QgdW5lIGNsYXNzZSBxdWkgbmUgcGV1dCBwYXMgw6p0cmUgIGNhciBlbGxlIHBvc3PDqGRlIGRlcyBtw6l0aG9kZXMgYWJzdHJhaXRlcyAoc2FucyBjb3JwcylcclxuLy8gUXVhbmQgdW5lIGNsYXNzZSBwb3Nzw6hkZSBkZXMgbcOpdGhvZGVzIGFic3RyYWl0ZXMsIGNldHRlIGNsYXNzZSBkZXZpZW50IGVsbGUtbcOqbWUgYWJzdHJhaXRlLlxyXG4vLyBPYmxpZ2F0aW9uIGRlIHJlZMOpZmluaXIgbGVzIG3DqXRob2RlcyBub24gaW1wbMOpbWVudMOpZXMgZGUgbGEgY2xhc3NlIHBhcmVudCBhdSBwbHVzIHRhcmQgZGFucyBsZXMgY2xhc3NlcyBlbmZhbnRzIHF1aSBow6lyaXRlbnRcclxuLy8gVW5lIGNsYXNzZSBlc3QgZCdvZmZpY2UgYWJzdHJhaXRlIHNpIGVsbGUgcG9zc8OoZGUgZGVzIG3DqXRob2RlcyBhYnN0cmFpdGVcclxuLy8gVW5lIGNsYXNzZSBwZXV0IMOqdHJlIGFic3RyYWl0ZSBNw4pNRSBzaSBlbGxlIG5lIHBvc3PDqGRlIGF1Y3VuZSBtw6l0aG9kZSBhYnN0cmFpdGVcclxuLy8gTGUgbW90LWNsZWYgJ2Fic3RyYWN0JyBwZXV0IHNlIG1ldHRyZSBzdXIgOiB1bmUgY2xhc3NlLCB1bmUgcHJvcHJpw6l0w6ksIHVuIGFjY2Vzc2V1ci9tdXRhdGV1ciwgdW5lIGZvbmN0aW9uXHJcbi8vIFV0aWxpc2F0aW9uIDogUGVybWV0IGRlIGNyw6llciB1bmUgY2VydGFpbmUgc3RydWN0dXJlIGltcG9zw6llcyAobm9uIGluc3RhbmNpYWJsZSkgb8O5IGwnb24gcGV1dCBkw6ljbGFyZXIgbGVzIGRpZmbDqXJlbnRzIG1lbWJyZXMgOlxyXG4vLyAocHJvcHJpw6l0w6lzICsgZ2V0dGVycy9zZXR0ZXJzICsgbcOpdGhvZGVzICsgY29uc3RydWN0ZXVyKSBhdmVjIG91IHNhbnMgY29ycHMgKGNlIHF1aSBzZSB0cm91dmUgZW50cmUgbGVzIGFjY29sYWRlcyBkJ3VuZSBmb25jdGlvbilcclxuLy8gU2lnbmF0dXJlIGQndW5lIGZvbmN0aW9uIDogbm9tIGRlIGxhIGZvbmN0aW9uICsgcGFyYW3DqHRyZXMgKyB0eXBlIGRlIHJldG91clxyXG4vLyBQcm90b3R5cGUgZCd1bmUgZm9uY3Rpb24gOiBub20gZGUgbGEgZm9uY3Rpb24gKyBwYXJhbcOodHJlc1xyXG5leHBvcnQgY2xhc3MgQUdlb21ldHJ5IHtcclxuICAgIGxvZ01lKCkgeyByZXR1cm4gXCJNZVwiOyB9XHJcbn1cclxuZXhwb3J0IGNsYXNzIFRyaWFuZ2xlIGV4dGVuZHMgQUdlb21ldHJ5IHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHN1cGVyKCk7XHJcbiAgICB9XHJcbiAgICBwZXJpbWV0cmUoKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XHJcbiAgICB9XHJcbiAgICBhaXIoKSB7XHJcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTWV0aG9kIG5vdCBpbXBsZW1lbnRlZC5cIik7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGNsYXNzIFBvaW50cyBleHRlbmRzIEFHZW9tZXRyeSB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcigpO1xyXG4gICAgfVxyXG4gICAgcGVyaW1ldHJlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnggKiB0aGlzLnk7XHJcbiAgICB9XHJcbiAgICBhaXIoKSB7XHJcbiAgICAgICAgcmV0dXJuIHRoaXMueCAqIHRoaXMueTtcclxuICAgIH1cclxufVxyXG5leHBvcnQgY2xhc3MgQ2FycmUgZXh0ZW5kcyBBR2VvbWV0cnkge1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoKTtcclxuICAgIH1cclxuICAgIGxvZ01lKCkge1xyXG4gICAgICAgIHJldHVybiBcIkNlY2kgZXN0IHVuIGNhcnLDqVwiO1xyXG4gICAgfVxyXG4gICAgcGVyaW1ldHJlKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnggKiA0O1xyXG4gICAgfVxyXG4gICAgYWlyKCkge1xyXG4gICAgICAgIHJldHVybiB0aGlzLnggKiB0aGlzLng7XHJcbiAgICB9XHJcbn1cclxuLy8gRXhlbXBsZSBwbHVzIGNvbmNyZXRcclxuZXhwb3J0IGNsYXNzIFBlcnNvbm5lIHtcclxuICAgIGNvbnN0cnVjdG9yKG5vbSwgcHJlbm9tLCBkYXRlKSB7XHJcbiAgICAgICAgdGhpcy5ub20gPSBub207XHJcbiAgICAgICAgdGhpcy5wcmVub20gPSBwcmVub207XHJcbiAgICAgICAgdGhpcy5kYXRlTmFpc3NhbmNlID0gZGF0ZTtcclxuICAgIH1cclxuICAgIHBhcmxlcihtZXNzYWdlKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5wcmVub20gKyAnIGRpdCAnICsgbWVzc2FnZSk7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGNsYXNzIEZlbW1lIGV4dGVuZHMgUGVyc29ubmUge1xyXG4gICAgY29uc3RydWN0b3Iobm9tLCBwcmVub20sIGRhdGUsIGVzdEVuY2VpbnRlKSB7XHJcbiAgICAgICAgc3VwZXIobm9tLCBwcmVub20sIGRhdGUpO1xyXG4gICAgICAgIHRoaXMuZ2VucmUgPSAnZic7XHJcbiAgICAgICAgdGhpcy5lc3RFbmNlaW50ZSA9IGZhbHNlO1xyXG4gICAgICAgIHRoaXMuZXN0RW5jZWludGUgPSBlc3RFbmNlaW50ZTtcclxuICAgIH1cclxuICAgIGZhaXJlTWVuYWdlKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGAke3RoaXMucHJlbm9tfSBmYWl0IGxlIG3DqW5hZ2VgKTtcclxuICAgIH1cclxuICAgIGdldCBub21Db21wbGV0KCkge1xyXG4gICAgICAgIHJldHVybiBcIk1tZS4gXCIgKyB0aGlzLm5vbSArICcgJyArIHRoaXMucHJlbm9tO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBjbGFzcyBIb21tZSBleHRlbmRzIFBlcnNvbm5lIHtcclxuICAgIGNvbnN0cnVjdG9yKG5vbSwgcHJlbm9tLCBkYXRlLCBsb25ndWV1ckJhcmJlKSB7XHJcbiAgICAgICAgc3VwZXIobm9tLCBwcmVub20sIGRhdGUpO1xyXG4gICAgICAgIHRoaXMuZ2VucmUgPSAnaCc7XHJcbiAgICAgICAgdGhpcy5sb25ndWV1ckJhcmJlID0gMDtcclxuICAgICAgICB0aGlzLmxvbmd1ZXVyQmFyYmUgPSBsb25ndWV1ckJhcmJlO1xyXG4gICAgfVxyXG4gICAgLy8gUmVkw6lmaW5pdGlvbiBkZSBtw6l0aG9kZXMgPT4gZ2FyZGVyIGxhIG3Dqm1lIHNpZ25hdHVyZSBtYWlzIGNoYW5nZXIgbGUgY29ycHNcclxuICAgIHBhcmxlcihtZXNzYWdlKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5wcmVub20gKyAnIGh1cmxlICcgKyBtZXNzYWdlKTtcclxuICAgIH1cclxuICAgIGZhaXJlTWVuYWdlKCkge1xyXG4gICAgICAgIGNvbnNvbGUubG9nKGAke3RoaXMucHJlbm9tfSBzJ2VuZnVpdCBqb3VlcmApO1xyXG4gICAgfVxyXG4gICAgZ2V0IG5vbUNvbXBsZXQoKSB7XHJcbiAgICAgICAgcmV0dXJuIFwiTS4gXCIgKyB0aGlzLm5vbSArICcgJyArIHRoaXMucHJlbm9tO1xyXG4gICAgfVxyXG59XHJcbi8vIE1vdC1jbGVmcyA6IFN0YXRpY1xyXG4vLyBQZXJtZXQgZCdhY2PDqWRlciBhdXggbWVtYnJlcyBkJ3VuZSBjbGFzc2Ugc2FucyBkZXZvaXIgbCdpbnN0YW5jaWVyXHJcbi8vIERpcmVjdGVtZW50IHN1ciBsZSBub20gZGUgbGEgY2xhc3NlIChleGVtcGxlIDogQ2FsY3VsYXRyaWNlLlBJIG91IENhbGN1bGF0cmljZS5hZGRpdGlvbigyLCA0KSlcclxuZXhwb3J0IGNsYXNzIENhbGN1bGF0cmljZSB7XHJcbiAgICBzdGF0aWMgYWRkaXRpb24oeCwgeSkge1xyXG4gICAgICAgIHJldHVybiB4ICsgeTtcclxuICAgIH1cclxufVxyXG5DYWxjdWxhdHJpY2UuUEkgPSAzLjE0MTU5MjtcclxuZXhwb3J0IGNsYXNzIERhdGVDb252ZXJ0ZXIge1xyXG4gICAgc3RhdGljIGNvbnZlcnRUaW1lU3RhbXBUb0RhdGUodGltZXN0YW1wKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBEYXRlKHBhcnNlSW50KHRpbWVzdGFtcCkpO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCBjbGFzcyBBdWRpIHtcclxuICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgIHRoaXMubW9kZWxlID0gJyc7XHJcbiAgICAgICAgdGhpcy5jYXJidXJhbnQgPSAnZGllc2VsJztcclxuICAgICAgICB0aGlzLmJvaXRlVml0ZXNzZSA9IHsgYXV0bzogdHJ1ZSwgbWFudWVsOiBmYWxzZSB9O1xyXG4gICAgfVxyXG4gICAgYXZhbmNlKHZpdGVzc2VBY3R1ZWxsZSkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xyXG4gICAgfVxyXG4gICAgcmVjdWxlKHZpdGVzc2VBY3R1ZWxsZSkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xyXG4gICAgfVxyXG4gICAgbG9nKCkge1xyXG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIk1ldGhvZCBub3QgaW1wbGVtZW50ZWQuXCIpO1xyXG4gICAgfVxyXG59XHJcbmNsYXNzIFZXIHtcclxuICAgIGF2YW5jZSh2aXRlc3NlQWN0dWVsbGUpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcclxuICAgIH1cclxuICAgIHJlY3VsZSh2aXRlc3NlQWN0dWVsbGUpIHtcclxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJNZXRob2Qgbm90IGltcGxlbWVudGVkLlwiKTtcclxuICAgIH1cclxufVxyXG4iLCIvKipcclxuICogUGFydGllIDUgLSBHZW5lcmljc1xyXG4gKi9cclxuLypcclxuICAgIEZvbmN0aW9ucyBnw6luw6lyaXF1ZXNcclxuKi9cclxuZXhwb3J0IGZ1bmN0aW9uIGlkZW50aXR5KGFyZykge1xyXG4gICAgcmV0dXJuIGFyZztcclxufVxyXG4vLyBmdW5jdGlvbiBpZE51bWJlciAoYXJnOiBudW1iZXIpIHtcclxuLy8gICAgIC8vIC4uLlxyXG4vLyAgICAgcmV0dXJuIGFyZ1xyXG4vLyB9XHJcbi8vIGZ1bmN0aW9uIGlkU3RyaW5nIChhcmc6IHN0cmluZykge1xyXG4vLyAgICAgLy8gLi4uXHJcbi8vICAgICByZXR1cm4gYXJnXHJcbi8vIH1cclxuLy8gZnVuY3Rpb24gaWRCb29sZWFuKGFyZzogc3RyaW5nKSB7XHJcbi8vICAgICAvLyAuLi5cclxuLy8gICAgIHJldHVybiBhcmdcclxuLy8gfVxyXG4vLyBmdW5jdGlvbiBpZEFsbCAoYXJnOiBhbnkpIHtcclxuLy8gICAgIGlmICh0eXBlb2YgYXJnID09PSAnbnVtYmVyJykgLy8gLi4uXHJcbi8vICAgICBpZiAodHlwZW9mIGFyZyA9PT0gJ3N0cmluZycpIC8vIC4uLlxyXG4vLyAgICAgaWYgKHR5cGVvZiBhcmcgPT09ICdib29sZWFuJykgLy8gLi4uXHJcbi8vICAgICByZXR1cm4gYXJnXHJcbi8vIH1cclxuLy8gQ3LDqWF0aW9uIGQndW5lIGZvbmN0aW9uIGfDqW7DqXJpY1xyXG5leHBvcnQgZnVuY3Rpb24gaWRlbnRpdHkyKGFyZykge1xyXG4gICAgLy8gVHlwZSAuLi5cclxuICAgIHJldHVybiBhcmc7XHJcbn1cclxuY29uc3QgdGFiID0gWzEsIDIsIDNdO1xyXG5leHBvcnQgZnVuY3Rpb24gaWRlbnRpdHkzKGFyZzEsIGFyZzIpIHtcclxuICAgIGlmICh0eXBlb2YgYXJnMSA9PT0gdHlwZW9mIGFyZzIpXHJcbiAgICAgICAgcmV0dXJuIGFyZzE7XHJcbiAgICBlbHNlXHJcbiAgICAgICAgcmV0dXJuIGFyZzI7XHJcbn1cclxuZXhwb3J0IGZ1bmN0aW9uIGlkZW50aXR5NChhcmdzKSB7XHJcbiAgICBjb25zb2xlLmxvZyhhcmdzLmxlbmd0aCk7XHJcbiAgICByZXR1cm4gYXJncztcclxufVxyXG4vKlxyXG4gICAgQ2xhc3NlcyBnw6luw6lyaXF1ZXNcclxuKi9cclxuZXhwb3J0IGNsYXNzIEdlbmVyaWNOdW1iZXIge1xyXG59XHJcbi8vIFBlcm1ldCBkZSBjcsOpZXIgdW5lIGZvbmN0aW9uIGfDqW7DqXJpcXVlIGJhc8OpZSBzdXIgdW5lIGludGVyZmFjZVxyXG4vLyDihpIgRmlsdHJlciBsZXMgdHlwZXMgYXZlYyBjZXV4IHVuaXF1ZW1lbnQgcXVpIHBvc3PDqGRlbnQgbGVzIHByb3ByacOpdMOpcyBkZSBsJ2ludGVyZmFjZVxyXG5leHBvcnQgZnVuY3Rpb24gbG9nZ2luZ0koYXJnKSB7XHJcbiAgICBjb25zb2xlLmxvZygnTGVuZ3RoIDo+PicsIGFyZy5sZW5ndGgpO1xyXG4gICAgcmV0dXJuIGFyZztcclxufVxyXG5leHBvcnQgZnVuY3Rpb24gZ2V0UHJvcGVydHkob2JqLCBrZXkpIHtcclxuICAgIHJldHVybiBvYmpba2V5XTtcclxufVxyXG5leHBvcnQgY2xhc3MgTWF0aGVtYXRpcXVlIHtcclxufVxyXG4iLCIvKipcclxuICogUGFydGllIDMgLSBOYXJyb3dpbmdcclxuICogUGVybWV0dHJlIGRlIHLDqWR1aXJlIGxhIGxpc3RlIGRlcyB0eXBlcyBkaXNwb25pYmxlc1xyXG4gKi9cclxubGV0IGJ0bjEgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjaW5jcmVtZW50Jyk7IC8vIEVsZW1lbnQgfCBudWxsXHJcbmxldCBidG4yID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2luY3JlbWVudCcpOyAvLyBFbGVtZW50XHJcbmxldCBidG4zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2luY3JlbWVudCcpOyAvLyBIVE1MQnV0dG9uRWxlbWVudFxyXG4vLyBBdHRlbnRpb24gcG91ciBsYSB2ZXJzaW9uIDIgZXQgMywgdm91cyBlbXDDqmNoZXogbGUgcXVlcnlTZWxlY3RvciBkZSBcclxuLy8gZm9uY3Rpb25uZXIgY29ycmVjdGVtZW50IGVuIGNhcyBkZSBudWxsXHJcbi8vIExlIG1pZXV4IHNlcmEgZCd1dGlsaXNlciBkZXMgY29uZGl0aW9ucyBhdSBsaWV1IGR1IG5hcnJvd2luZyAnIScgb3UgJ2FzJ1xyXG4vLyBBdXRyZSBleGVtcGxlXHJcbmxldCBidG5fZGVjID0gKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjcmVzJyk7XHJcbiAgICBpZiAoaW5wdXQpIHtcclxuICAgICAgICAvLyBIVE1MSW5wdXRFbGVtZW50XHJcbiAgICAgICAgLy8gUHJlbWllciDDqWzDqW1lbnQgZHUgbmFycm93aW5nXHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICAvLyBudWxsXHJcbiAgICB9XHJcbn07XHJcbi8vIEF1dHJlIGV4ZW1wbGVcclxuZXhwb3J0IGZ1bmN0aW9uIHByaW50SWQoaWQpIHtcclxuICAgIGlmIChpZCkge1xyXG4gICAgICAgIC8vIHN0cmluZyB8IG51bWJlclxyXG4gICAgICAgIGlmICh0eXBlb2YgaWQgPT09IFwibnVtYmVyXCIpIHtcclxuICAgICAgICAgICAgLy8gbnVtYmVyXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdpZCBOVU1CRVIgOj4+ICcsIGlkKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgIC8vIHN0cmluZ1xyXG4gICAgICAgICAgICBsZXQgdG1wSWQgPSBwYXJzZUludChpZCk7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdpZCBTVFJJTkcgOj4+ICcsIGlkKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICAvLyBudWxsXHJcbiAgICAgICAgaWQgPSA0MjtcclxuICAgICAgICBjb25zb2xlLmxvZygnaWQgTlVMTCA6Pj4gJywgaWQpO1xyXG4gICAgfVxyXG59XHJcbi8vIEF1dHJlIGV4ZW1wbGUgKGRvdWJsZSB2YXJpYWJsZXMgbG9jYWxlcylcclxuZXhwb3J0IGZ1bmN0aW9uIGV4ZW1wbGVOKGEsIGIpIHtcclxuICAgIGlmIChhID09PSBiKSB7XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2EgRE9VQkxFOj4+ICcsIGEpOyAvLyBJY2kgaWwgc2VyYSBkJ29mZmljZSBlbiBzdHJpbmdcclxuICAgICAgICAvLyBMZSBzZXVsIHBvaW50IGNvbW11biBlbnRyZSBhIGV0IGIgZXN0IHN0cmluZ1xyXG4gICAgfVxyXG59XHJcbi8vIEF1dHJlIGV4ZW1wbGUgKClcclxuZnVuY3Rpb24gZXhlbXBsZU9wZXJhdGV1cihhKSB7XHJcbiAgICAvLyBFeGVtcGxlIHNpIGEgw6l0YWl0IHVuIE1vdXNlRXZlbnRcclxuICAgIC8vIE1vdXNlRXZlbnQgw6l0YW50IHVuIHR5cGUgVHlwZVNjcmlwdCwgaWwgbidlc3QgcGFzIHJlY29ubnUgcGFyIGxlIHR5cGVvZiBuYXRpZiBkZSBqc1xyXG4gICAgLy8gaWYgKHR5cGVvZiBhID09PSBcIk1vdXNlRXZlbnRcIilcclxuICAgIGlmIChcInZhbHVlXCIgaW4gYSkge1xyXG4gICAgICAgIC8vIHZhbHVlIGVzdCB1bmUgcHJvcHJpw6l0w6kgZGUgSFRNTElucHV0RWxlbWVudFxyXG4gICAgICAgIGNvbnNvbGUubG9nKCdhIFZBTFVFIDo+PiAnLCBhLnZhbHVlKTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKFwidG90b1wiIGluIGEpIHtcclxuICAgICAgICBjb25zb2xlLmxvZygnYSBUT1RPIDo+PiAnLCBhKTsgLy8gTkUgcmVudHJlcmEgamFtYWlzXHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICAvLyBNb3VzZUV2ZW50XHJcbiAgICAgICAgY29uc29sZS5sb2coJ2EgTU9VU0VFVkVOVCA6Pj4gJywgYSk7XHJcbiAgICB9XHJcbn1cclxuLy8gQXV0cmUgY2FzXHJcbi8vIEplIHZldXggZMOpZmluaXIgb2JsaWdhdG9pcmVtZW50IHVuIHJldG91ciBEYXRlIHN1ciBhXHJcbmV4cG9ydCBmdW5jdGlvbiBpc0RhdGUoYSkge1xyXG4gICAgcmV0dXJuIGEgaW5zdGFuY2VvZiBEYXRlO1xyXG59XHJcbi8vIENhcyBwbHVzIGNvbmNyZXRcclxuZXhwb3J0IGNsYXNzIFRVc2VyIHtcclxuICAgIGNvbnN0cnVjdG9yKG5hbWUpIHsgdGhpcy5uYW1lID0gbmFtZTsgfVxyXG59XHJcbmV4cG9ydCBmdW5jdGlvbiBpc1VzZXIoYSkge1xyXG4gICAgcmV0dXJuIGEgaW5zdGFuY2VvZiBUVXNlcjtcclxufVxyXG4vLyBPbiBhdXJhaXQgdHLDqHMgYmllbiBwdSBtZXR0cmUgdW4gYm9vbMOpZW4gZW4gcmV0b3VyIGRlIGxhIGZvbmN0aW9uXHJcbi8vIG1haXMgZGFucyBsYSBsZWN0dXJlIGRlIGxhIGRvY3VtZW50YXRpb24gYXUgc3Vydm9sIGRlIGxhIGZvbmN0aW9uXHJcbi8vIElsIGVzdCBwbHVzIGludMOpcmVzc2FudCBkZSBzYXZvaXIgcXVlIGxlIHJldG91ciBkJ3VuIGJvb2zDqWVuIHNlcmEgXHJcbi8vIHN1ciB1biBUVVNlciBldCBub24gZCd1biBib29sw6llblxyXG4vLyDinI8gRXhlcmNpY2UgMDFcclxuIiwiLyoqXHJcbiAqIFBhcnRpZSA3IC0gT3ZlcmxvYWRzXHJcbiAqIFBlcm1ldCBkZSBnYXJkZXIgdW5lIG3DqXRob2RlIG1haXMgZGUgY2hhbmdlclxyXG4gKiBsZXMgdHlwZXMgZGUgcGFyYW3DqHRyZXMgZXQgbGUgdHlwZSBkZSByZXRvdXJcclxuICovXHJcbmZ1bmN0aW9uIGZuKGEsIGIsIGMpIHtcclxuICAgIC8vIGlmIChjKSByZXR1cm4gYSArICcgJyArIGIgKyAnICcgKyBjXHJcbiAgICAvLyBpZiAoYikgcmV0dXJuIGEgKyAnICcgKyBiXHJcbiAgICAvLyBpZiAoYSkgcmV0dXJuIGFcclxuICAgIHJldHVybiBjID8gYSArICcgJyArIGIgKyAnICcgKyBjIDogYiA/IGEgKyAnICcgKyBiIDogYTtcclxufVxyXG5mdW5jdGlvbiBmbjIoYSkge1xyXG4gICAgaWYgKHR5cGVvZiBhID09PSAnbnVtYmVyJylcclxuICAgICAgICByZXR1cm4gXCJWb3VzIGF2ZXogZW50csOpIDogXCIgKyBhO1xyXG4gICAgaWYgKHR5cGVvZiBhID09PSAnc3RyaW5nJylcclxuICAgICAgICByZXR1cm4gYS5sZW5ndGg7XHJcbiAgICBpZiAodHlwZW9mIGEgPT09ICdib29sZWFuJylcclxuICAgICAgICByZXR1cm4gYTtcclxufVxyXG5leHBvcnQgeyBmbiwgZm4yIH07XHJcbi8vIFN1cmNoYXJnZSBkZSBjb25zdHJ1Y3RldXJcclxuY2xhc3MgUCB7XHJcbiAgICBjb25zdHJ1Y3Rvcihub20sIHByZW5vbSwgZGF0ZU5haXNzYW5jZSwgZ2VucmUsIGFuaW1hdXgpIHtcclxuICAgICAgICB0aGlzLm5vbSA9IG5vbTtcclxuICAgICAgICB0aGlzLnByZW5vbSA9IHByZW5vbTtcclxuICAgICAgICB0aGlzLmRhdGVOYWlzc2FuY2UgPSBkYXRlTmFpc3NhbmNlID8gZGF0ZU5haXNzYW5jZSA6IG5ldyBEYXRlKCk7XHJcbiAgICAgICAgdGhpcy5hbmltYXV4ID0gYW5pbWF1eCAhPT0gbnVsbCAmJiBhbmltYXV4ICE9PSB2b2lkIDAgPyBhbmltYXV4IDogW107XHJcbiAgICAgICAgdGhpcy5nZW5yZSA9IGdlbnJlICE9PSBudWxsICYmIGdlbnJlICE9PSB2b2lkIDAgPyBnZW5yZSA6ICdOL0EnO1xyXG4gICAgfVxyXG59XHJcbmV4cG9ydCB7IFAgfTtcclxuIiwiLyoqXHJcbiAqIFBhcnRpZSAxIC0gVHlwZXNcclxuICovXHJcbmNvbnN0IGEgPSAnSGVsbG8gbGVzIGZ1bGxzdGFjayBKUy4nO1xyXG5jb25zdCBiID0gNDI7XHJcbmNvbnN0IGMgPSB0cnVlO1xyXG5jb25zdCBkID0gbnVsbDtcclxuY29uc3QgZSA9IFsnYScsICdiJywgJ2MnXTtcclxuY29uc3QgZiA9IFsnZCcsICdlJywgJ2YnXTtcclxuY29uc3QgZyA9IFsxLCAyLCAzLCA0XTtcclxuY29uc3QgaCA9IFsnSGVsbG8nLCB0cnVlLCAyMSwgW10sIHt9LCAoKSA9PiB7IH1dO1xyXG5jb25zdCBpID0ge307XHJcbmNvbnN0IGogPSB7IGZpcnN0bmFtZTogJ1F1ZW50aW4nLCBsYXN0bmFtZTogJ0dlZXJ0cycgfTtcclxuY29uc3QgayA9IHsgY291Y291OiAnSGVsbG8nIH07XHJcbmNvbnN0IGwgPSBuZXcgRGF0ZSgpO1xyXG5jb25zdCBtID0gKCkgPT4geyB9O1xyXG5jb25zdCBuID0gKCkgPT4geyB9O1xyXG5jb25zdCBvID0gKGksIHMsIGIpID0+IFsnYScsICdiJ107XHJcbmNvbnN0IHAgPSAoKSA9PiB7IHRocm93IG5ldyBFcnJvcignTm90IGltcGxlbWVudGVkJyk7IH07XHJcbmxldCBxID0gJ2EnO1xyXG5xID0gMTtcclxucSA9IHRydWU7XHJcbi8vIGNvbnN0IHI6IEhUTUxTcGFuRWxlbWVudCA9IG5ldyBIVE1MU3BhbkVsZW1lbnQoKTtcclxuLy8gY29uc3QgczogRWxlbWVudCA9IG5ldyBFbGVtZW50KCk7XHJcbmV4cG9ydCBsZXQgbWVzVHlwZXMgPSB7IGEsIGIsIGMsIGQsIGUsIGYsIGcsIGgsIGksIGosIGssIGwsIG0sIG4sIG8sIHAsIHEgfTtcclxuLy8gRXhwb3J0IGdyw6JjZSDDoCBleHBvcnQsIHVuIG9iamV0IGxhbWJkYSBxdWkgY29udGllbmRyYSB0b3V0ZXMgbGVzIHZhcmlhYmxlc1xyXG4vLyBDZSBxdWkgcGFyIGxhIHN1aXRlIG5vdXMgw6l2aXRlcmEgZGVzIGVycmV1cnMgZGUgbm9tbWFnZXMgZGUgdmFyaWFibGVzIGTDqWrDoCBleGlzdGFudGVzXHJcbi8vIEF0dGVudGlvbiDDoCBsJ2luZGV4YXRpb25cclxuY29uc3Qgb2IgPSB7IDA6ICdRdWVudGluJywgMTogNDIsIDI6IHRydWUgfTsgLy8gVGFibGVhdSBjbGFzc2lxdWUgKGNsZWY6IG51bWJlcilcclxuLy8gY29uc29sZS5sb2cob2IuMCk7IC8vIHBhcyBwb3NzaWJsZVxyXG5jb25zb2xlLmxvZyhvYlswXSk7IC8vIG91dHB1dCA6ICdRdWVudGluJ1xyXG4vLyBMJ2luZGV4YXRpb24gdHJhbnNmb3JtZSBmaWN0aXZlbWVudCBtb24gb2JqZXQgZW4gdGFibGVhdSBhc3NvY2lhdGlmXHJcbmNvbnN0IG9iaiA9IHsgZmlyc3RuYW1lOiAnUXVlbnRpbicsIGxhc3RuYW1lOiAnR2VlcnRzJywgYWdlOiAyNiB9O1xyXG5jb25zb2xlLmxvZyhvYmouZmlyc3RuYW1lKTtcclxuY29uc29sZS5sb2cob2JqWydmaXJzdG5hbWUnXSk7XHJcbi8vIEF0dGVudGlvbiBxdWUgbGEgZGVybmnDqHJlIHZlcnNpb24gZXN0IGxhIG1vaW5zIHByb3ByZVxyXG4vLyDihpIgZGFuZ2VyZXV4IGVuIGNhcyBkZSB1bmRlZmluZWQgb3UgdW5rbm93blxyXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIi8qKlxyXG4gKiBQYXJ0aWUgMSAtIFR5cGVzXHJcbiAqL1xyXG5jb25zb2xlLndhcm4oXCJQYXJ0aWUgMSAtIFR5cGVzXCIpO1xyXG5pbXBvcnQgeyBtZXNUeXBlcyB9IGZyb20gXCIuL2RvY3MvdHlwZXNcIjtcclxuY29uc29sZS5sb2coJ21lc1R5cGVzLmEgOj4+ICcsIG1lc1R5cGVzLmEpO1xyXG5jb25zb2xlLmxvZygnbWVzVHlwZXMuYiA6Pj4gJywgbWVzVHlwZXMuYik7XHJcbmNvbnNvbGUubG9nKCdtZXNUeXBlcy5jIDo+PiAnLCBtZXNUeXBlcy5jKTtcclxuY29uc29sZS5sb2coJ21lc1R5cGVzLmQgOj4+ICcsIG1lc1R5cGVzLmQpO1xyXG5jb25zb2xlLmxvZygnbWVzVHlwZXMuZSA6Pj4gJywgbWVzVHlwZXMuZSk7XHJcbmNvbnNvbGUubG9nKCdtZXNUeXBlcy5mIDo+PiAnLCBtZXNUeXBlcy5mKTtcclxuY29uc29sZS5sb2coJ21lc1R5cGVzLmcgOj4+ICcsIG1lc1R5cGVzLmcpO1xyXG5jb25zb2xlLmxvZygnbWVzVHlwZXMuaCA6Pj4gJywgbWVzVHlwZXMuaCk7XHJcbmNvbnNvbGUubG9nKCdtZXNUeXBlcy5pIDo+PiAnLCBtZXNUeXBlcy5pKTtcclxuY29uc29sZS5sb2coJ21lc1R5cGVzLmogOj4+ICcsIG1lc1R5cGVzLmopO1xyXG5jb25zb2xlLmxvZygnbWVzVHlwZXMuayA6Pj4gJywgbWVzVHlwZXMuayk7XHJcbmNvbnNvbGUubG9nKCdtZXNUeXBlcy5sIDo+PiAnLCBtZXNUeXBlcy5sKTtcclxuY29uc29sZS5sb2coJ21lc1R5cGVzLm0gOj4+ICcsIG1lc1R5cGVzLm0pO1xyXG5jb25zb2xlLmxvZygnbWVzVHlwZXMubiA6Pj4gJywgbWVzVHlwZXMubik7XHJcbmNvbnNvbGUubG9nKCdtZXNUeXBlcy5vIDo+PiAnLCBtZXNUeXBlcy5vKTtcclxuY29uc29sZS5sb2coJ21lc1R5cGVzLnAgOj4+ICcsIG1lc1R5cGVzLnApO1xyXG5jb25zb2xlLmxvZygnbWVzVHlwZXMucSA6Pj4gJywgbWVzVHlwZXMucSk7XHJcbi8qKlxyXG4gKiBQYXJ0aWUgMiAtIEFzc2VydGlvbiBkZSB0eXBlc1xyXG4gKi9cclxuY29uc29sZS53YXJuKFwiUGFydGllIDIgLSBBc3NlcnRpb24gZGUgdHlwZXNcIik7XHJcbi8vIFZvaXIgc3JjL2RvY3MvYXNzZXJ0aW9uVHlwZXMudHNcclxuLyoqXHJcbiAqIFBhcnRpZSAzIC0gTmFycm93aW5nXHJcbiAqL1xyXG5jb25zb2xlLndhcm4oXCJQYXJ0aWUgMyAtIE5hcnJvd2luZ1wiKTtcclxuaW1wb3J0IHsgcHJpbnRJZCwgZXhlbXBsZU4sIGlzRGF0ZSwgaXNVc2VyLCBUVXNlciB9IGZyb20gXCIuL2RvY3MvbmFycm93aW5nXCI7XHJcbnByaW50SWQoMTIpO1xyXG5wcmludElkKCdhJyk7XHJcbnByaW50SWQobnVsbCk7XHJcbmV4ZW1wbGVOKCdhJywgJ2EnKTtcclxuZXhlbXBsZU4oJ2EnLCB0cnVlKTtcclxuZXhlbXBsZU4oMTIsIHRydWUpO1xyXG5sZXQgYmlydGhEYXRlID0gbmV3IERhdGUoJzAzLzA0LzE5OTYnKTtcclxuY29uc29sZS5sb2coJ0RhdGUgWzAzLzA0LzE5OTZdOj4+ICcsIGlzRGF0ZShiaXJ0aERhdGUpKTtcclxuY29uc29sZS5sb2coJ1N0cmluZyBbMDMvMDMvMTAwMV06Pj4gJywgaXNEYXRlKCcwMy8wMy8xMDAxJykpO1xyXG5sZXQgdXNlciA9IG5ldyBUVXNlcignUXVlbnRpbicpO1xyXG5jb25zb2xlLmxvZygnaXNVc2VyKHVzZXIpIDo+PiAnLCBpc1VzZXIodXNlcikpO1xyXG4vKipcclxuICogUGFydGllIDQgLSBDdXN0b20gVHlwZXNcclxuICovXHJcbmNvbnNvbGUud2FybihcIlBhcnRpZSA0IC0gQ3VzdG9tIFR5cGVzXCIpO1xyXG5sZXQgYWRtaW4gPSB7XHJcbiAgICByb2xlSWQ6IDAsXHJcbiAgICBsYXN0TmFtZTogXCJHZWVydHNcIixcclxuICAgIGZpcnN0TmFtZTogXCJRdWVudGluXCJcclxufTtcclxubGV0IGFkID0ge1xyXG4gICAgcm9sZUlkOiA1LFxyXG4gICAgbGFzdE5hbWU6IFwiXCIsXHJcbiAgICBmaXJzdE5hbWU6IFwiXCJcclxufTtcclxubGV0IGFkbWluMiA9IHtcclxuICAgIHJvbGVJZDogXCJcIixcclxuICAgIGxhc3ROYW1lOiBcIlwiLFxyXG4gICAgZmlyc3ROYW1lOiBcIlwiXHJcbn07XHJcbmNvbnNvbGUubG9nKCdhZG1pbiA6Pj4gJywgYWRtaW4pO1xyXG5sZXQgaWRJbnQgPSA0NTtcclxubGV0IGlkU3RyaW5nID0gXCJhXCI7XHJcbi8vIGxldCBpZEJvb2xlZW46IElkID0gdHJ1ZTtcclxuY29uc29sZS5sb2coJ2lkSW50IDo+PiAnLCBpZEludCk7XHJcbmNvbnNvbGUubG9nKCd0eXBlb2YgaWRJbnQgOj4+ICcsIHR5cGVvZiBpZEludCk7XHJcbmNvbnNvbGUubG9nKCdpZFN0cmluZyA6Pj4gJywgaWRTdHJpbmcpO1xyXG4vLyBjb25zb2xlLmxvZygnaWRCb29sZWVuIDo+PiAnLCBpZEJvb2xlZW4pO1xyXG5sZXQgZGF0ZSA9IFwiMDMvMDQvMTk5NlwiO1xyXG5sZXQgZGF0ZTIgPSBuZXcgRGF0ZSgpLnRvU3RyaW5nKCk7XHJcbmNvbnNvbGUubG9nKCdkYXRlIDo+PiAnLCBkYXRlKTtcclxuY29uc29sZS5sb2coJ2RhdGUgOj4+ICcsIGRhdGUyKTtcclxuLyoqXHJcbiAqIFBhcnRpZSA1IC0gR2VuZXJpY3NcclxuICovXHJcbmNvbnNvbGUud2FybihcIlBhcnRpZSA1IC0gR2VuZXJpY3NcIik7XHJcbmltcG9ydCB7IEdlbmVyaWNOdW1iZXIsIGdldFByb3BlcnR5LCBpZGVudGl0eSwgaWRlbnRpdHkyLCBpZGVudGl0eTMsIGlkZW50aXR5NCwgbG9nZ2luZ0ksIE1hdGhlbWF0aXF1ZSB9IGZyb20gJy4vZG9jcy9nZW5lcmljcyc7XHJcbi8vIE9uIHBlcmQgbGUgdHlwZSBkeW5hbWlxdWUgcGFzc8OpIGVuIHBhcmFtw6h0cmUgw6AgY2F1c2UgZHUgYW55XHJcbmNvbnN0IGlkMV8xID0gaWRlbnRpdHkoMyk7XHJcbmNvbnN0IGlkMV8yID0gaWRlbnRpdHkoJ3RvdG8nKTtcclxuY29uc3QgaWQxXzMgPSBpZGVudGl0eSh0cnVlKTtcclxuY29uc29sZS5sb2coJ2lkMV8xIDo+PiAnLCBpZDFfMSk7XHJcbmNvbnNvbGUubG9nKCd0eXBlb2YgaWQxXzEgOj4+ICcsIHR5cGVvZiBpZDFfMSk7XHJcbmNvbnNvbGUubG9nKCdpZDFfMiA6Pj4gJywgaWQxXzIpO1xyXG5jb25zb2xlLmxvZygndHlwZW9mIGlkMV8yIDo+PiAnLCB0eXBlb2YgaWQxXzIpO1xyXG5jb25zb2xlLmxvZygnaWQxXzMgOj4+ICcsIGlkMV8zKTtcclxuY29uc29sZS5sb2coJ3R5cGVvZiBpZDFfMyA6Pj4gJywgdHlwZW9mIGlkMV8zKTtcclxuY29uc3QgaWQyID0gaWRlbnRpdHkyKCdlJyk7XHJcbmNvbnNvbGUubG9nKCdpZDIgOj4+ICcsIGlkMik7XHJcbmNvbnNvbGUubG9nKCd0eXBlb2YgaWQyIDo+PiAnLCB0eXBlb2YgaWQyKTtcclxuY29uc3QgaWQzID0gaWRlbnRpdHkyKDUpO1xyXG5jb25zb2xlLmxvZygnaWQzIDo+PiAnLCBpZDMpO1xyXG5jb25zb2xlLmxvZygndHlwZW9mIGlkMyA6Pj4gJywgdHlwZW9mIGlkMyk7XHJcbmNvbnN0IGlkNCA9IGlkZW50aXR5MignYScpO1xyXG5jb25zb2xlLmxvZygnaWQ0IDo+PiAnLCBpZDQpO1xyXG5jb25zb2xlLmxvZygndHlwZW9mIGlkNCA6Pj4gJywgdHlwZW9mIGlkNCk7XHJcbi8vIGlkZW50aXR5MjxBZG1pbj4oMyk7IFBhcyBwb3NzaWJsZSBjYXIgYydlc3QgdW4gbnVtYmVyIGV0IG5vbiB1biBhZG1pblxyXG5jb25zdCBpZDUgPSBpZGVudGl0eTMoXCJDb3Vjb3VcIiwgNDIpO1xyXG5jb25zb2xlLmxvZygnaWQ1IDo+PiAnLCBpZDUpO1xyXG5jb25zdCBpZDYgPSBpZGVudGl0eTMoJ0hlbGxvJywgJ1R5cGVTY3JpcHQnKTtcclxuY29uc29sZS5sb2coJ2lkNiA6Pj4gJywgaWQ2KTtcclxuY29uc3QgaWQ3ID0gaWRlbnRpdHk0KFsxLCAyLCAzLCA0XSk7XHJcbmNvbnNvbGUubG9nKCdpZDcgOj4+ICcsIGlkNyk7XHJcbmxldCBuYiA9IG5ldyBHZW5lcmljTnVtYmVyKCk7XHJcbm5iLnplcm9WYWx1ZTtcclxubmIuYWRkID0gZnVuY3Rpb24gKHgsIHkpIHtcclxuICAgIHJldHVybiB4ICsgeTtcclxufTtcclxuY29uc29sZS5sb2cobmIuYWRkKDMsIDUpKTtcclxuY29uc3QgbGcgPSBsb2dnaW5nSShbNSwgNSwgNiwgMywgNCwgOF0pO1xyXG5jb25zb2xlLmxvZygnbGcgOj4+ICcsIGxnKTtcclxuLy8gIE5lIGZvbmN0aW9ubmUgcGFzXHJcbi8vIGNvbnN0IGxnMCA9IGxvZ2dpbmdJPG51bWJlcj4oNSlcclxuLy8gY29uc3QgbGcwID0gbG9nZ2luZ0koNSlcclxuLy8gY29uc29sZS5sb2coJ2xnMCA6Pj4gJywgbGcwKTtcclxubGV0IHggPSB7XHJcbiAgICByb2xlSWQ6IDAsXHJcbiAgICBsYXN0TmFtZTogXCJHZWVydHNcIixcclxuICAgIGZpcnN0TmFtZTogXCJRdWVudGluXCJcclxufTtcclxuY29uc29sZS5sb2coJ3ggOj4+ICcsIGdldFByb3BlcnR5KHgsICdsYXN0TmFtZScpKTtcclxuLy8gY29uc29sZS5sb2coJ3ggOj4+ICcsIGdldFByb3BlcnR5KHgsICdoZWxsbycpKTsgLy8gTmUgZm9uY3Rpb25uZSBwYXMgY2FyIHBhcyB1bmUgY2xlZiBkZSBUeXBlIGRlIGwnb2JqZXQgKEFkbWluKVxyXG4vLyBjb25zb2xlLmxvZygneCA6Pj4gJywgZ2V0UHJvcGVydHkoeCwgMykpO1xyXG5sZXQgbXlUb3RhbCA9IG5ldyBNYXRoZW1hdGlxdWUoKTtcclxubXlUb3RhbC5hZGQgPSAoeCwgeSkgPT4geCArIHk7XHJcbm15VG90YWwuc3ViID0gKHgsIHkpID0+IHggLSB5O1xyXG5jb25zb2xlLmxvZyhteVRvdGFsLmFkZCg1LCA2KSk7XHJcbmNvbnNvbGUubG9nKG15VG90YWwuc3ViKDUsIDYpKTtcclxuLy8gbGV0IG15VG90YWwyID0gbmV3IE1hdGhlbWF0aXF1ZTxzdHJpbmcsIHN0cmluZz4oKTtcclxuLyoqXHJcbiAqIFBhcnRpZSA2IC0gQ2xhc3Nlc1xyXG4gKi9cclxuY29uc29sZS53YXJuKFwiUGFydGllIDYgLSBDbGFzc2VzXCIpO1xyXG5pbXBvcnQgeyBNeVVzZXIgfSBmcm9tICcuL2RvY3MvY2xhc3Nlcyc7XHJcbmxldCBteVVzZXIgPSBuZXcgTXlVc2VyKDEsICdHZWVydHMnKTtcclxuY29uc29sZS5sb2coJ215VXNlciA6Pj4gJywgbXlVc2VyKTtcclxuLy8gRHVjayBUeXBpbmdcclxuaW1wb3J0IHsgUG9pbnQsIEdlb21ldHJ5LCBnZXRYLCBnZXRZIH0gZnJvbSBcIi4vZG9jcy9jbGFzc2VzXCI7XHJcbmNvbnNvbGUubG9nKCdnZXRYKG5ldyBQb2ludCk6Pj4gJywgZ2V0WChuZXcgUG9pbnQpKTtcclxuY29uc29sZS5sb2coJ2dldFgobmV3IEdlb21ldHJ5KTo+PiAnLCBnZXRYKG5ldyBHZW9tZXRyeSkpO1xyXG5jb25zb2xlLmxvZygnZ2V0WShuZXcgUG9pbnQpOj4+ICcsIGdldFkobmV3IFBvaW50KSk7XHJcbmNvbnNvbGUubG9nKCdnZXRZKG5ldyBHZW9tZXRyeSk6Pj4gJywgZ2V0WShuZXcgR2VvbWV0cnkpKTtcclxuaW1wb3J0IHsgUG9pbnRzLCBDYXJyZSB9IGZyb20gJy4vZG9jcy9jbGFzc2VzJztcclxuLy8gY29uc3QgYWcgPSBuZXcgQUdlb21ldHJ5KCk7IC8vIEltcG9zc2libGUgZCdpbnN0YW5jaWVyIHVuZSBjbGFzc2UgYWJzdHJhaXRlISBcclxuY29uc3QgcCA9IG5ldyBQb2ludHMoKTtcclxucC54ID0gMjtcclxucC55ID0gNTtcclxuY29uc3QgYyA9IG5ldyBDYXJyZSgpO1xyXG5jLnggPSA1O1xyXG5jb25zb2xlLmxvZygnb2JqZWN0IDo+PiAnLCBwLmxvZ01lKCkpO1xyXG5jb25zb2xlLmxvZygnb2JqZWN0IDo+PiAnLCBjLmxvZ01lKCkpO1xyXG5jb25zb2xlLmxvZygnb2JqZWN0IDo+PiAnLCBwLnBlcmltZXRyZSgpKTtcclxuY29uc29sZS5sb2coJ29iamVjdCA6Pj4gJywgcC5haXIoKSk7XHJcbmNvbnNvbGUubG9nKCdvYmplY3QgOj4+ICcsIGMucGVyaW1ldHJlKCkpO1xyXG5jb25zb2xlLmxvZygnb2JqZWN0IDo+PiAnLCBjLmFpcigpKTtcclxuaW1wb3J0IHsgRmVtbWUsIEhvbW1lIH0gZnJvbSBcIi4vZG9jcy9jbGFzc2VzXCI7XHJcbi8vIGNvbnN0IHAgPSBuZXcgUGVyc29ubmUoKVxyXG5jb25zdCBoID0gbmV3IEhvbW1lKCdHZWVydHMnLCAnUXVlbnRpbicsIG5ldyBEYXRlKCcxOTk2LTA0LTAzJyksIDAuNSk7XHJcbmNvbnN0IGYgPSBuZXcgRmVtbWUoJ0dlZXJ0cycsICdNw6lsYW5pZScsIG5ldyBEYXRlKCksIGZhbHNlKTtcclxuaC5wYXJsZXIoJ0JvbmpvdXIgbGVzIEpTICEnKTtcclxuZi5wYXJsZXIoJ0JvbmpvdXIgbGVzIEpTICEnKTtcclxuLy8gTW90LWNsZWYgOiBzdGF0aWNcclxuaW1wb3J0IHsgQ2FsY3VsYXRyaWNlIH0gZnJvbSBcIi4vZG9jcy9jbGFzc2VzXCI7XHJcbmNvbnNvbGUubG9nKENhbGN1bGF0cmljZS5hZGRpdGlvbig1LCAzKSk7XHJcbi8vIENhbGN1bGF0cmljZS5QSSA9IDIgLy8gSW1wb3NzaWJsZSDDoCBjaGFuZ2VyIGF2ZWMgdW4gcmVhZG9ubHlcclxuY29uc29sZS5sb2coQ2FsY3VsYXRyaWNlLmFkZGl0aW9uKENhbGN1bGF0cmljZS5QSSwgMSkpO1xyXG5jb25zdCBjYWxjID0gbmV3IENhbGN1bGF0cmljZSgpO1xyXG4vLyBjYWxjLmFkZGl0aW9uKDUsIDMpIC8vIEltcG9zc2libGUgZCdhcHBlbGVyIHVuIG1lbWJyZSBzdGF0aWMgc3VyIHVuZSBpbnN0YW5jZVxyXG5pbXBvcnQgeyBEYXRlQ29udmVydGVyIH0gZnJvbSBcIi4vZG9jcy9jbGFzc2VzXCI7XHJcbmNvbnNvbGUubG9nKERhdGVDb252ZXJ0ZXIuY29udmVydFRpbWVTdGFtcFRvRGF0ZShuZXcgRGF0ZSgpLmdldFRpbWUoKS50b1N0cmluZygpKSk7XHJcbi8vIEludGVyZmFjZXNcclxuaW1wb3J0IHsgQXVkaSB9IGZyb20gXCIuL2RvY3MvY2xhc3Nlc1wiO1xyXG5jb25zdCB2ID0gbmV3IEF1ZGkoKTtcclxuLyoqXHJcbiAqIFBhcnRpZSA3IC0gT3ZlcmxvYWRzXHJcbiAqL1xyXG5pbXBvcnQgeyBmbiwgZm4yIH0gZnJvbSAnLi9kb2NzL292ZXJsb2Fkcyc7XHJcbmNvbnNvbGUubG9nKGZuKCdIZWxsbycpKTtcclxuY29uc29sZS5sb2coZm4oJ0hlbGxvJywgJ1dvcmxkJykpO1xyXG5jb25zb2xlLmxvZyhmbignSGVsbG8nLCAnV29ybGQnLCAnIScpKTtcclxuY29uc29sZS5sb2coJ2ZuMiBzdHJpbmcgOj4+JywgZm4yKCdCb25qb3VyJykpO1xyXG5jb25zb2xlLmxvZygnZm4yIG51bWJlciA6Pj4nLCBmbjIoNSkpO1xyXG5jb25zb2xlLmxvZygnZm4yIGJvb2zDqWVuIDo+PicsIGZuMih0cnVlKSk7XHJcbmltcG9ydCB7IFAgfSBmcm9tIFwiLi9kb2NzL292ZXJsb2Fkc1wiO1xyXG5sZXQgbm9pcmF1ID0geyBub206ICdOb2lyYXUnLCB0eXBlOiAnY2hhdCcgfTtcclxubGV0IGJpbGwgPSB7IG5vbTogJ0JpbGwnLCB0eXBlOiAnY2hpZW4nIH07XHJcbmxldCB0aXRpID0geyBub206ICdUaXRpJywgdHlwZTogJ2NhbmFyaScgfTtcclxubGV0IHF1ZW50aW4gPSBuZXcgUCgnR2VlcnRzJywgJ1F1ZW50aW4nKTtcclxubGV0IG1lbGFuaWUgPSBuZXcgUCgnR2VlcnRzJywgJ03DqWxhbmllJywgbmV3IERhdGUoJzA4LTA1LTE5ODgnKSwgJ2YnLCBbeyBub206ICdXaWxseScsIHR5cGU6ICdkYXVwaGluJyB9XSk7XHJcbnF1ZW50aW4uYW5pbWF1eCA9IFtub2lyYXUsIGJpbGwsIHRpdGldO1xyXG5jb25zb2xlLmxvZygncXVlbnRpbiA6Pj4gJywgcXVlbnRpbik7XHJcbmNvbnNvbGUubG9nKCdtZWxhbmllIDo+PiAnLCBtZWxhbmllKTtcclxuIiwiLyoqXHJcbiAqIFBhcnRpZSAxIC0g4pyP77iPIEV4ZXJjaWNlIDAxXHJcbiAqL1xyXG4vKipcclxuICogQ3LDqWVyIHVuIGNvZGUgcGVybWV0dGFudCBkZSBjcsOpZXIgdW4gY29tcHRldXIgY2xhc3NpcXVlLCBhdmVjICsgMSwgLTEgZXQgPS4uLixcclxuICogaWwgZmF1ZHJhIHR5cMOpIGxlIHRvdXQgYXUgbWF4aW11bSwgcHLDqXBhcmVyIDIgZm9uY3Rpb25zIHBvdXIgw6dhXHJcbiAqL1xyXG5jb25zb2xlLndhcm4oJ0V4ZXJjaWNlIDAxJyk7XHJcbmNvbnN0IGJ0bk1vaW5zID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2J0bk1vaW5zJyk7XHJcbmNvbnN0IGJ0blBsdXMgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcjYnRuUGx1cycpO1xyXG5jb25zdCB0b3RhbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyN0b3RhbCcpO1xyXG5sZXQgdmFsZXVyO1xyXG5pZiAodG90YWwpXHJcbiAgICB2YWxldXIgPSBwYXJzZUludCh0b3RhbC5pbm5lclRleHQpO1xyXG5jb25zdCBpbmNyZW1lbnQgPSAoZXZlbnQpID0+IHtcclxuICAgIC8vIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICBpZiAodG90YWwpXHJcbiAgICAgICAgdG90YWwuaW5uZXJUZXh0ID0gKCsrdmFsZXVyKS50b1N0cmluZygpO1xyXG59O1xyXG4vLyBjb25zdCBkZWNyZW1lbnQ6IEZ1bmN0aW9uID0gKGV2ZW50OiBNb3VzZUV2ZW50KSA9PiB7XHJcbmNvbnN0IGRlY3JlbWVudCA9IChldmVudCkgPT4ge1xyXG4gICAgLy8gZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIGlmICh0b3RhbClcclxuICAgICAgICB0b3RhbC5pbm5lclRleHQgPSAoLS12YWxldXIpLnRvU3RyaW5nKCk7XHJcbn07XHJcbmlmIChidG5QbHVzKVxyXG4gICAgYnRuUGx1cy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGluY3JlbWVudCk7XHJcbmlmIChidG5Nb2lucylcclxuICAgIGJ0bk1vaW5zLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZGVjcmVtZW50KTtcclxuLyoqXHJcbiAqIFBhcnRpZSA0IC0g4pyP77iPIEV4ZXJjaWNlIDAyXHJcbiAqL1xyXG4vKipcclxuICogUmVwcmVuZHJlIGxlIGNvZGUgZGUgbCdleG9zIDEgZXQgdHJhbmZvcm1lciBsZSB0b3V0IGF2ZWMgZGVzIG5hcnJvd2luZyBldCBkZXMgZ2VuZXJpY3NcclxuICovXHJcbi8qKlxyXG4gKiBQYXJ0aWUgNSAtIOKcj++4jyBFeGVyY2ljZSAwM1xyXG4gKi9cclxuLyoqXHJcbiAqIFByw6lwYXJlciB1biBtaWNybyBqZXUgZGUgdHlwZSBoZXJvZXMgdnMgbW9uc3Rlciwgdm91cyBhdXJleiAyIGdyYW5kZXMgY2xhc3NlcywgaGVyb2VzIGV0IG1vbnN0ZXIsXHJcbiAqIGxlIGJ1dCwgw6l0YW50IGRlIHBvdXZvaXIgaW5zdGFuY2llciB1biBub3V2ZWF1IGhlcm8gZXQgdW4gbW9uc3RyZSBhdmVjIGRlcyBjYXJhY3TDqHJpc3RpcXVlcyBkaWZmw6lyZW50ZXMsXHJcbiAqIGlscyBkZXZyb250IMOqdHJlIHN0b2NrZXIgZGFucyB1biBvYmpldCB0YWJsZWF1IGdyYWNlIGEgdW5lIGZvbmN0aW9uLFxyXG4gKiBpbCBkZXZyb250IHBvdXZvaXIgcydhZmZyb250ZXIgZ3Jhw6dlIGEgZGVzIHBvaW50cyBkZSB2aWUsIGQnYXR0YXF1ZSBldCBkZSBkw6lmZW5zZSxcclxuICogc2kgdm91cyBhdmV6IHRlcm1pbmVyIGRhbnMgbGVzIHRlbXBzIGltcGFydGlzLCB2b3VzIHBvdXZleiBhbcOpbGlvcmVyLCB1dGlsaXNleiB2b3RyZSBpbWFnaW5hdGlvblxyXG4gKiByZXF1aXM6IHVuIGdlbmVyaWMsIHVuIG5hcnJvd2luZywgZGVzIGNsYXNzZXMsIHVuIHN0YXRpYywgdW5lIGFic3RyYWN0LCBsZSB0b3V0IGVudGnDqHJlbWVudCB0eXDDqSAhXHJcbiAqIG4naMOpc2l0ZXogcGFyIMOgIHV0aWxpc2VyIGwnaHRtbCBwb3VyIMOnYSBldCBsZSByZW5kcmUgZW5jb3JlIHBsdXMgY2hvdWV0dGVcclxuICovIFxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=