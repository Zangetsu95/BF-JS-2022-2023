/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/models/de.ts":
/*!**************************!*\
  !*** ./src/models/de.ts ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
class De {
    constructor(max) {
        this.min = 1;
        this.max = max;
    }
    lancer() {
        return Math.floor(Math.random() * this.max + this.min);
    }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (De);


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
/* harmony import */ var _models_de__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./models/de */ "./src/models/de.ts");
// /**
//  * Partie 1 - Types
//  */
// console.warn("Partie 1 - Types");
// import { mesTypes } from "./docs/types";
// console.log('mesTypes.a :>> ', mesTypes.a);
// console.log('mesTypes.b :>> ', mesTypes.b);
// console.log('mesTypes.c :>> ', mesTypes.c);
// console.log('mesTypes.d :>> ', mesTypes.d);
// console.log('mesTypes.e :>> ', mesTypes.e);
// console.log('mesTypes.f :>> ', mesTypes.f);
// console.log('mesTypes.g :>> ', mesTypes.g);
// console.log('mesTypes.h :>> ', mesTypes.h);
// console.log('mesTypes.i :>> ', mesTypes.i);
// console.log('mesTypes.j :>> ', mesTypes.j);
// console.log('mesTypes.k :>> ', mesTypes.k);
// console.log('mesTypes.l :>> ', mesTypes.l);
// console.log('mesTypes.m :>> ', mesTypes.m);
// console.log('mesTypes.n :>> ', mesTypes.n);
// console.log('mesTypes.o :>> ', mesTypes.o);
// console.log('mesTypes.p :>> ', mesTypes.p);
// console.log('mesTypes.q :>> ', mesTypes.q);
// /**
//  * Partie 2 - Assertion de types
//  */
// console.warn("Partie 2 - Assertion de types");
// // Voir src/docs/assertionTypes.ts
// /**
//  * Partie 3 - Narrowing
//  */
// console.warn("Partie 3 - Narrowing");
// import { printId, exempleN, isDate, isUser, TUser } from "./docs/narrowing";
// printId(12);
// printId('a');
// printId(null);
// exempleN('a', 'a');
// exempleN('a', true);
// exempleN(12, true);
// let birthDate = new Date('03/04/1996');
// console.log('Date [03/04/1996]:>> ', isDate(birthDate));
// console.log('String [03/03/1001]:>> ', isDate('03/03/1001'));
// let user = new TUser('Quentin');
// console.log('isUser(user) :>> ', isUser(user));
// /**
//  * Partie 4 - Custom Types
//  */
// console.warn("Partie 4 - Custom Types");
// import { Admin, Admin2, Id, DateString } from './docs/customTypes';
// let admin: Admin = {
//     roleId: 0,
//     lastName: "Geerts",
//     firstName: "Quentin"
// };
// let ad: Admin = {
//     roleId: 5,
//     lastName: "",
//     firstName: ""
// };
// let admin2: Admin2 = {
//     roleId: "",
//     lastName: "",
//     firstName: ""
// };
// console.log('admin :>> ', admin);
// let idInt: Id = 45;
// let idString: Id = "a";
// // let idBooleen: Id = true;
// console.log('idInt :>> ', idInt);
// console.log('typeof idInt :>> ', typeof idInt);
// console.log('idString :>> ', idString);
// // console.log('idBooleen :>> ', idBooleen);
// let date: DateString = "03/04/1996";
// let date2: DateString = new Date().toString();
// console.log('date :>> ', date);
// console.log('date :>> ', date2);
// /**
//  * Partie 5 - Generics
//  */
// console.warn("Partie 5 - Generics");
// import { GenericNumber, getProperty, identity, identity2, identity3, identity4, loggingI, Mathematique } from './docs/generics';
// // On perd le type dynamique passé en paramètre à cause du any
// const id1_1 = identity(3);
// const id1_2 = identity('toto');
// const id1_3 = identity(true);
// console.log('id1_1 :>> ', id1_1);
// console.log('typeof id1_1 :>> ', typeof id1_1);
// console.log('id1_2 :>> ', id1_2);
// console.log('typeof id1_2 :>> ', typeof id1_2);
// console.log('id1_3 :>> ', id1_3);
// console.log('typeof id1_3 :>> ', typeof id1_3);
// const id2 = identity2<string>('e');
// console.log('id2 :>> ', id2);
// console.log('typeof id2 :>> ', typeof id2);
// const id3 = identity2<Id>(5);
// console.log('id3 :>> ', id3);
// console.log('typeof id3 :>> ', typeof id3);
// const id4 = identity2<Id>('a');
// console.log('id4 :>> ', id4);
// console.log('typeof id4 :>> ', typeof id4);
// // identity2<Admin>(3); Pas possible car c'est un number et non un admin
// const id5 = identity3<string, number>("Coucou", 42);
// console.log('id5 :>> ', id5);
// const id6 = identity3<string, string>('Hello', 'TypeScript');
// console.log('id6 :>> ', id6);
// const id7 = identity4<number>([1, 2, 3, 4]);
// console.log('id7 :>> ', id7);
// let nb = new GenericNumber<number>();
// nb.zeroValue;
// nb.add = function (x, y) {
//     return x + y;
// };
// console.log(nb.add(3, 5));
// const lg = loggingI<number[]>([5, 5, 6, 3, 4, 8]);
// console.log('lg :>> ', lg);
// //  Ne fonctionne pas
// // const lg0 = loggingI<number>(5)
// // const lg0 = loggingI(5)
// // console.log('lg0 :>> ', lg0);
// let x: Admin = {
//     roleId: 0,
//     lastName: "Geerts",
//     firstName: "Quentin"
// };
// console.log('x :>> ', getProperty(x, 'lastName'));
// // console.log('x :>> ', getProperty(x, 'hello')); // Ne fonctionne pas car pas une clef de Type de l'objet (Admin)
// // console.log('x :>> ', getProperty(x, 3));
// let myTotal = new Mathematique<number, number>();
// myTotal.add = (x, y) => x + y;
// myTotal.sub = (x, y) => x - y;
// console.log(myTotal.add(5, 6));
// console.log(myTotal.sub(5, 6));
// // let myTotal2 = new Mathematique<string, string>();
// /**
//  * Partie 6 - Classes
//  */
// console.warn("Partie 6 - Classes");
// import { MyUser } from './docs/classes';
// let myUser = new MyUser(1, 'Geerts');
// console.log('myUser :>> ', myUser);
// // Duck Typing
// import { Point, Geometry, getX, getY } from "./docs/classes";
// console.log('getX(new Point):>> ', getX(new Point));
// console.log('getX(new Geometry):>> ', getX(new Geometry));
// console.log('getY(new Point):>> ', getY(new Point));
// console.log('getY(new Geometry):>> ', getY(new Geometry));
// import { AGeometry, Triangle, Points, Carre } from './docs/classes';
// // const ag = new AGeometry(); // Impossible d'instancier une classe abstraite! 
// const p = new Points();
// p.x = 2;
// p.y = 5;
// const c = new Carre();
// c.x = 5;
// console.log('object :>> ', p.logMe());
// console.log('object :>> ', c.logMe());
// console.log('object :>> ', p.perimetre());
// console.log('object :>> ', p.air());
// console.log('object :>> ', c.perimetre());
// console.log('object :>> ', c.air());
// import { Personne, Femme, Homme } from "./docs/classes";
// // const p = new Personne()
// const h = new Homme('Geerts', 'Quentin', new Date('1996-04-03'), 0.5);
// const f = new Femme('Geerts', 'Mélanie', new Date(), false);
// h.parler('Bonjour les JS !')
// f.parler('Bonjour les JS !')
// // Mot-clef : static
// import { Calculatrice } from "./docs/classes";
// console.log(Calculatrice.addition(5, 3));
// // Calculatrice.PI = 2 // Impossible à changer avec un readonly
// console.log(Calculatrice.addition(Calculatrice.PI, 1));
// const calc = new Calculatrice()
// // calc.addition(5, 3) // Impossible d'appeler un membre static sur une instance
// import { DateConverter } from "./docs/classes";
// console.log(DateConverter.convertTimeStampToDate(new Date().getTime().toString()));
// // Interfaces
// import { Audi, ILogger, Voiture, Action, Vehicule } from "./docs/classes";
// const v = new Audi()
// /**
//  * Partie 7 - Overloads
//  */
// import { fn, fn2 } from './docs/overloads'
// console.log(fn('Hello'))
// console.log(fn('Hello', 'World'))
// console.log(fn('Hello', 'World', '!'))
// console.log('fn2 string :>>', fn2('Bonjour'));
// console.log('fn2 number :>>', fn2(5));
// console.log('fn2 booléen :>>', fn2(true));
// import { Animal, P } from "./docs/overloads";
// let noirau: Animal = { nom: 'Noirau', type: 'chat' }
// let bill: Animal = { nom: 'Bill', type: 'chien' }
// let titi: Animal = { nom: 'Titi', type: 'canari' }
// let quentin = new P('Geerts', 'Quentin')
// let melanie = new P('Geerts', 'Mélanie', new Date('08-05-1988'), 'f', [{nom: 'Willy', type: 'dauphin'} as Animal])
// quentin.animaux = [noirau, bill, titi]
// console.log('quentin :>> ', quentin);
// console.log('melanie :>> ', melanie);
//------------------RPG--------------------------

console.log(new _models_de__WEBPACK_IMPORTED_MODULE_0__["default"](5).lancer());

})();

// This entry need to be wrapped in an IIFE because it need to be isolated against other entry modules.
(() => {
/*!**************************!*\
  !*** ./src/exercices.ts ***!
  \**************************/
// /**
//  * Partie 1 - ✏️ Exercice 01
//  */
// /**
//  * Créer un code permettant de créer un compteur classique, avec + 1, -1 et =..., 
//  * il faudra typé le tout au maximum, préparer 2 fonctions pour ça
//  */
// // console.warn('Exercice 01');
// // const btnMoins: HTMLButtonElement | null = document.querySelector('#btnMoins');
// // const btnPlus: HTMLButtonElement | null = document.querySelector('#btnPlus');
// // const total: HTMLSpanElement | null = document.querySelector('#total');
// // let valeur: number;
// // if (total) valeur = parseInt(total.innerText);
// // const increment: (e: MouseEvent) => void = (event: MouseEvent) => {
// //     event.preventDefault();
// //     if (total) total.innerText = (++valeur).toString();
// // };
// // const decrement: Function = (event: MouseEvent) => {
// // const decrement: (e: MouseEvent) => void = (event: MouseEvent) => {
// //     event.preventDefault();
// //     if (total) total.innerText = (--valeur).toString();
// // };
// // if (btnPlus) btnPlus.addEventListener('click', increment);
// // if (btnMoins) btnMoins.addEventListener('click', decrement);
// /**
//  * Partie 4 - ✏️ Exercice 02
//  */
// /**
//  * Reprendre le code de l'exos 1 et tranformer le tout avec des narrowing et des generics
//  */
// const btnMoins: HTMLButtonElement = document.querySelector<HTMLButtonElement>('#btnMoins')!;
// const btnPlus: HTMLButtonElement = document.querySelector<HTMLButtonElement>('#btnPlus')!;
// const total: HTMLSpanElement = document.querySelector<HTMLSpanElement>('#total')!;
// let valeur: number;
// if (total) valeur = parseInt(total.innerText);
// const increment: (e: MouseEvent) => void = (event: MouseEvent) => {
//     event.preventDefault();
//     if (total) total.innerText = (++valeur).toString();
// };
// const decrement: (e: MouseEvent) => void = (event: MouseEvent) => {
//     event.preventDefault();
//     if (total) total.innerText = (--valeur).toString();
// };
// if (btnPlus) btnPlus.addEventListener('click', increment);
// if (btnMoins) btnMoins.addEventListener('click', decrement);
// /**
//  * Partie 5 - ✏️ Exercice 03
//  */
// /**
//  * Préparer un micro jeu de type heroes vs monster, vous aurez 2 grandes classes, heroes et monster, 
//  * le but, étant de pouvoir instancier un nouveau hero et un monstre avec des caractèristiques différentes,
//  * ils devront être stocker dans un objet tableau grace a une fonction, 
//  * il devront pouvoir s'affronter graçe a des points de vie, d'attaque et de défense,
//  * si vous avez terminer dans les temps impartis, vous pouvez améliorer, utilisez votre imagination
//  * requis: un generic, un narrowing, des classes, un static, une abstract, le tout entièrement typé !
//  * n'hésitez par à utiliser l'html pour ça et le rendre encore plus chouette
//  */
// // abstract class Personnage<T>{
// //    protected pv
// //     protected endurance
// //     protected force
// //     constructor(){
// //         this.endurance = this.endurance
// //         this.force = this.force
// //         this.pv= this.pv
// //     }
// // }
// //  class Hero extends Personnage<{pv:number,endurance:number}>{
// // }
// // class Monstre<T>{
// // }
// abstract class Personnage<T> {
//    protected nom: string;
//    protected vie: number;
//    protected attaque: number;
//    protected defense: number;
//     constructor(nom: string,vie: number, attaque: number, defense: number) {
//         this.nom = nom;
//         this.vie = vie;
//         this.attaque = attaque;
//         this.defense = defense;
//     }
//     abstract attaquer(ennemi: Personnage<T>): void;
//     get defenseValue(): number {
//         return this.defense;
//     }
//    public subirDegats(degats: number): void {
//         this.vie -= degats;
//         console.log(`${this.nom} subit ${degats} degats et possede encore ${this.vie} PV`);
//     }
// /* A static property of the class Personnage. It is an array of Personnage objects. */
//     static personnages: Personnage<any>[] = [];
//     static ajouterPersonnage(personnage: Personnage<any>) {
//         this.personnages.push(personnage);
//     }
// }
// class Heros<T> extends Personnage<T> {
//     constructor(nom: string,vie: number, attaque: number, defense: number) {
//         super(nom, vie, attaque, defense);
//     }
//     attaquer(ennemi: Monstre<T>): void {
//         const degats = this.attaque - ennemi.defenseValue;
//         ennemi.subirDegats(degats);
//     }
// }
// class Monstre<T> extends Personnage<T> {
//     constructor(nom: string,vie: number, attaque: number, defense: number) {
//         super(nom, vie, attaque, defense);
//     }
//     attaquer(ennemi: Heros<T>): void {
//         const degats = this.attaque - ennemi.defenseValue;
//         ennemi.subirDegats(degats);
//     }
// }
// let hero = new Heros('amine',25,5,10)
// console.log('hero :>> ', hero);
// let monstre = new Monstre('babouche',50,7,30)
// console.log('monstre :>> ', monstre);
// console.log(hero.attaquer(monstre))
// console.log(monstre.subirDegats)

})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQ0FBc0MsMkJBQTJCO0FBQ2pFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsVUFBVSxRQUFRLFFBQVEsMkJBQTJCLFVBQVU7QUFDekY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9zcmMvbW9kZWxzL2RlLnRzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3Qvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kIiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL215LXdlYnBhY2stcHJvamVjdC8uL3NyYy9pbmRleC50cyIsIndlYnBhY2s6Ly9teS13ZWJwYWNrLXByb2plY3QvLi9zcmMvZXhlcmNpY2VzLnRzIl0sInNvdXJjZXNDb250ZW50IjpbImNsYXNzIERlIHtcclxuICAgIGNvbnN0cnVjdG9yKG1heCkge1xyXG4gICAgICAgIHRoaXMubWluID0gMTtcclxuICAgICAgICB0aGlzLm1heCA9IG1heDtcclxuICAgIH1cclxuICAgIGxhbmNlcigpIHtcclxuICAgICAgICByZXR1cm4gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogdGhpcy5tYXggKyB0aGlzLm1pbik7XHJcbiAgICB9XHJcbn1cclxuZXhwb3J0IGRlZmF1bHQgRGU7XHJcbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSAoZXhwb3J0cywgZGVmaW5pdGlvbikgPT4ge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gKGV4cG9ydHMpID0+IHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiLy8gLyoqXHJcbi8vICAqIFBhcnRpZSAxIC0gVHlwZXNcclxuLy8gICovXHJcbi8vIGNvbnNvbGUud2FybihcIlBhcnRpZSAxIC0gVHlwZXNcIik7XHJcbi8vIGltcG9ydCB7IG1lc1R5cGVzIH0gZnJvbSBcIi4vZG9jcy90eXBlc1wiO1xyXG4vLyBjb25zb2xlLmxvZygnbWVzVHlwZXMuYSA6Pj4gJywgbWVzVHlwZXMuYSk7XHJcbi8vIGNvbnNvbGUubG9nKCdtZXNUeXBlcy5iIDo+PiAnLCBtZXNUeXBlcy5iKTtcclxuLy8gY29uc29sZS5sb2coJ21lc1R5cGVzLmMgOj4+ICcsIG1lc1R5cGVzLmMpO1xyXG4vLyBjb25zb2xlLmxvZygnbWVzVHlwZXMuZCA6Pj4gJywgbWVzVHlwZXMuZCk7XHJcbi8vIGNvbnNvbGUubG9nKCdtZXNUeXBlcy5lIDo+PiAnLCBtZXNUeXBlcy5lKTtcclxuLy8gY29uc29sZS5sb2coJ21lc1R5cGVzLmYgOj4+ICcsIG1lc1R5cGVzLmYpO1xyXG4vLyBjb25zb2xlLmxvZygnbWVzVHlwZXMuZyA6Pj4gJywgbWVzVHlwZXMuZyk7XHJcbi8vIGNvbnNvbGUubG9nKCdtZXNUeXBlcy5oIDo+PiAnLCBtZXNUeXBlcy5oKTtcclxuLy8gY29uc29sZS5sb2coJ21lc1R5cGVzLmkgOj4+ICcsIG1lc1R5cGVzLmkpO1xyXG4vLyBjb25zb2xlLmxvZygnbWVzVHlwZXMuaiA6Pj4gJywgbWVzVHlwZXMuaik7XHJcbi8vIGNvbnNvbGUubG9nKCdtZXNUeXBlcy5rIDo+PiAnLCBtZXNUeXBlcy5rKTtcclxuLy8gY29uc29sZS5sb2coJ21lc1R5cGVzLmwgOj4+ICcsIG1lc1R5cGVzLmwpO1xyXG4vLyBjb25zb2xlLmxvZygnbWVzVHlwZXMubSA6Pj4gJywgbWVzVHlwZXMubSk7XHJcbi8vIGNvbnNvbGUubG9nKCdtZXNUeXBlcy5uIDo+PiAnLCBtZXNUeXBlcy5uKTtcclxuLy8gY29uc29sZS5sb2coJ21lc1R5cGVzLm8gOj4+ICcsIG1lc1R5cGVzLm8pO1xyXG4vLyBjb25zb2xlLmxvZygnbWVzVHlwZXMucCA6Pj4gJywgbWVzVHlwZXMucCk7XHJcbi8vIGNvbnNvbGUubG9nKCdtZXNUeXBlcy5xIDo+PiAnLCBtZXNUeXBlcy5xKTtcclxuLy8gLyoqXHJcbi8vICAqIFBhcnRpZSAyIC0gQXNzZXJ0aW9uIGRlIHR5cGVzXHJcbi8vICAqL1xyXG4vLyBjb25zb2xlLndhcm4oXCJQYXJ0aWUgMiAtIEFzc2VydGlvbiBkZSB0eXBlc1wiKTtcclxuLy8gLy8gVm9pciBzcmMvZG9jcy9hc3NlcnRpb25UeXBlcy50c1xyXG4vLyAvKipcclxuLy8gICogUGFydGllIDMgLSBOYXJyb3dpbmdcclxuLy8gICovXHJcbi8vIGNvbnNvbGUud2FybihcIlBhcnRpZSAzIC0gTmFycm93aW5nXCIpO1xyXG4vLyBpbXBvcnQgeyBwcmludElkLCBleGVtcGxlTiwgaXNEYXRlLCBpc1VzZXIsIFRVc2VyIH0gZnJvbSBcIi4vZG9jcy9uYXJyb3dpbmdcIjtcclxuLy8gcHJpbnRJZCgxMik7XHJcbi8vIHByaW50SWQoJ2EnKTtcclxuLy8gcHJpbnRJZChudWxsKTtcclxuLy8gZXhlbXBsZU4oJ2EnLCAnYScpO1xyXG4vLyBleGVtcGxlTignYScsIHRydWUpO1xyXG4vLyBleGVtcGxlTigxMiwgdHJ1ZSk7XHJcbi8vIGxldCBiaXJ0aERhdGUgPSBuZXcgRGF0ZSgnMDMvMDQvMTk5NicpO1xyXG4vLyBjb25zb2xlLmxvZygnRGF0ZSBbMDMvMDQvMTk5Nl06Pj4gJywgaXNEYXRlKGJpcnRoRGF0ZSkpO1xyXG4vLyBjb25zb2xlLmxvZygnU3RyaW5nIFswMy8wMy8xMDAxXTo+PiAnLCBpc0RhdGUoJzAzLzAzLzEwMDEnKSk7XHJcbi8vIGxldCB1c2VyID0gbmV3IFRVc2VyKCdRdWVudGluJyk7XHJcbi8vIGNvbnNvbGUubG9nKCdpc1VzZXIodXNlcikgOj4+ICcsIGlzVXNlcih1c2VyKSk7XHJcbi8vIC8qKlxyXG4vLyAgKiBQYXJ0aWUgNCAtIEN1c3RvbSBUeXBlc1xyXG4vLyAgKi9cclxuLy8gY29uc29sZS53YXJuKFwiUGFydGllIDQgLSBDdXN0b20gVHlwZXNcIik7XHJcbi8vIGltcG9ydCB7IEFkbWluLCBBZG1pbjIsIElkLCBEYXRlU3RyaW5nIH0gZnJvbSAnLi9kb2NzL2N1c3RvbVR5cGVzJztcclxuLy8gbGV0IGFkbWluOiBBZG1pbiA9IHtcclxuLy8gICAgIHJvbGVJZDogMCxcclxuLy8gICAgIGxhc3ROYW1lOiBcIkdlZXJ0c1wiLFxyXG4vLyAgICAgZmlyc3ROYW1lOiBcIlF1ZW50aW5cIlxyXG4vLyB9O1xyXG4vLyBsZXQgYWQ6IEFkbWluID0ge1xyXG4vLyAgICAgcm9sZUlkOiA1LFxyXG4vLyAgICAgbGFzdE5hbWU6IFwiXCIsXHJcbi8vICAgICBmaXJzdE5hbWU6IFwiXCJcclxuLy8gfTtcclxuLy8gbGV0IGFkbWluMjogQWRtaW4yID0ge1xyXG4vLyAgICAgcm9sZUlkOiBcIlwiLFxyXG4vLyAgICAgbGFzdE5hbWU6IFwiXCIsXHJcbi8vICAgICBmaXJzdE5hbWU6IFwiXCJcclxuLy8gfTtcclxuLy8gY29uc29sZS5sb2coJ2FkbWluIDo+PiAnLCBhZG1pbik7XHJcbi8vIGxldCBpZEludDogSWQgPSA0NTtcclxuLy8gbGV0IGlkU3RyaW5nOiBJZCA9IFwiYVwiO1xyXG4vLyAvLyBsZXQgaWRCb29sZWVuOiBJZCA9IHRydWU7XHJcbi8vIGNvbnNvbGUubG9nKCdpZEludCA6Pj4gJywgaWRJbnQpO1xyXG4vLyBjb25zb2xlLmxvZygndHlwZW9mIGlkSW50IDo+PiAnLCB0eXBlb2YgaWRJbnQpO1xyXG4vLyBjb25zb2xlLmxvZygnaWRTdHJpbmcgOj4+ICcsIGlkU3RyaW5nKTtcclxuLy8gLy8gY29uc29sZS5sb2coJ2lkQm9vbGVlbiA6Pj4gJywgaWRCb29sZWVuKTtcclxuLy8gbGV0IGRhdGU6IERhdGVTdHJpbmcgPSBcIjAzLzA0LzE5OTZcIjtcclxuLy8gbGV0IGRhdGUyOiBEYXRlU3RyaW5nID0gbmV3IERhdGUoKS50b1N0cmluZygpO1xyXG4vLyBjb25zb2xlLmxvZygnZGF0ZSA6Pj4gJywgZGF0ZSk7XHJcbi8vIGNvbnNvbGUubG9nKCdkYXRlIDo+PiAnLCBkYXRlMik7XHJcbi8vIC8qKlxyXG4vLyAgKiBQYXJ0aWUgNSAtIEdlbmVyaWNzXHJcbi8vICAqL1xyXG4vLyBjb25zb2xlLndhcm4oXCJQYXJ0aWUgNSAtIEdlbmVyaWNzXCIpO1xyXG4vLyBpbXBvcnQgeyBHZW5lcmljTnVtYmVyLCBnZXRQcm9wZXJ0eSwgaWRlbnRpdHksIGlkZW50aXR5MiwgaWRlbnRpdHkzLCBpZGVudGl0eTQsIGxvZ2dpbmdJLCBNYXRoZW1hdGlxdWUgfSBmcm9tICcuL2RvY3MvZ2VuZXJpY3MnO1xyXG4vLyAvLyBPbiBwZXJkIGxlIHR5cGUgZHluYW1pcXVlIHBhc3PDqSBlbiBwYXJhbcOodHJlIMOgIGNhdXNlIGR1IGFueVxyXG4vLyBjb25zdCBpZDFfMSA9IGlkZW50aXR5KDMpO1xyXG4vLyBjb25zdCBpZDFfMiA9IGlkZW50aXR5KCd0b3RvJyk7XHJcbi8vIGNvbnN0IGlkMV8zID0gaWRlbnRpdHkodHJ1ZSk7XHJcbi8vIGNvbnNvbGUubG9nKCdpZDFfMSA6Pj4gJywgaWQxXzEpO1xyXG4vLyBjb25zb2xlLmxvZygndHlwZW9mIGlkMV8xIDo+PiAnLCB0eXBlb2YgaWQxXzEpO1xyXG4vLyBjb25zb2xlLmxvZygnaWQxXzIgOj4+ICcsIGlkMV8yKTtcclxuLy8gY29uc29sZS5sb2coJ3R5cGVvZiBpZDFfMiA6Pj4gJywgdHlwZW9mIGlkMV8yKTtcclxuLy8gY29uc29sZS5sb2coJ2lkMV8zIDo+PiAnLCBpZDFfMyk7XHJcbi8vIGNvbnNvbGUubG9nKCd0eXBlb2YgaWQxXzMgOj4+ICcsIHR5cGVvZiBpZDFfMyk7XHJcbi8vIGNvbnN0IGlkMiA9IGlkZW50aXR5MjxzdHJpbmc+KCdlJyk7XHJcbi8vIGNvbnNvbGUubG9nKCdpZDIgOj4+ICcsIGlkMik7XHJcbi8vIGNvbnNvbGUubG9nKCd0eXBlb2YgaWQyIDo+PiAnLCB0eXBlb2YgaWQyKTtcclxuLy8gY29uc3QgaWQzID0gaWRlbnRpdHkyPElkPig1KTtcclxuLy8gY29uc29sZS5sb2coJ2lkMyA6Pj4gJywgaWQzKTtcclxuLy8gY29uc29sZS5sb2coJ3R5cGVvZiBpZDMgOj4+ICcsIHR5cGVvZiBpZDMpO1xyXG4vLyBjb25zdCBpZDQgPSBpZGVudGl0eTI8SWQ+KCdhJyk7XHJcbi8vIGNvbnNvbGUubG9nKCdpZDQgOj4+ICcsIGlkNCk7XHJcbi8vIGNvbnNvbGUubG9nKCd0eXBlb2YgaWQ0IDo+PiAnLCB0eXBlb2YgaWQ0KTtcclxuLy8gLy8gaWRlbnRpdHkyPEFkbWluPigzKTsgUGFzIHBvc3NpYmxlIGNhciBjJ2VzdCB1biBudW1iZXIgZXQgbm9uIHVuIGFkbWluXHJcbi8vIGNvbnN0IGlkNSA9IGlkZW50aXR5MzxzdHJpbmcsIG51bWJlcj4oXCJDb3Vjb3VcIiwgNDIpO1xyXG4vLyBjb25zb2xlLmxvZygnaWQ1IDo+PiAnLCBpZDUpO1xyXG4vLyBjb25zdCBpZDYgPSBpZGVudGl0eTM8c3RyaW5nLCBzdHJpbmc+KCdIZWxsbycsICdUeXBlU2NyaXB0Jyk7XHJcbi8vIGNvbnNvbGUubG9nKCdpZDYgOj4+ICcsIGlkNik7XHJcbi8vIGNvbnN0IGlkNyA9IGlkZW50aXR5NDxudW1iZXI+KFsxLCAyLCAzLCA0XSk7XHJcbi8vIGNvbnNvbGUubG9nKCdpZDcgOj4+ICcsIGlkNyk7XHJcbi8vIGxldCBuYiA9IG5ldyBHZW5lcmljTnVtYmVyPG51bWJlcj4oKTtcclxuLy8gbmIuemVyb1ZhbHVlO1xyXG4vLyBuYi5hZGQgPSBmdW5jdGlvbiAoeCwgeSkge1xyXG4vLyAgICAgcmV0dXJuIHggKyB5O1xyXG4vLyB9O1xyXG4vLyBjb25zb2xlLmxvZyhuYi5hZGQoMywgNSkpO1xyXG4vLyBjb25zdCBsZyA9IGxvZ2dpbmdJPG51bWJlcltdPihbNSwgNSwgNiwgMywgNCwgOF0pO1xyXG4vLyBjb25zb2xlLmxvZygnbGcgOj4+ICcsIGxnKTtcclxuLy8gLy8gIE5lIGZvbmN0aW9ubmUgcGFzXHJcbi8vIC8vIGNvbnN0IGxnMCA9IGxvZ2dpbmdJPG51bWJlcj4oNSlcclxuLy8gLy8gY29uc3QgbGcwID0gbG9nZ2luZ0koNSlcclxuLy8gLy8gY29uc29sZS5sb2coJ2xnMCA6Pj4gJywgbGcwKTtcclxuLy8gbGV0IHg6IEFkbWluID0ge1xyXG4vLyAgICAgcm9sZUlkOiAwLFxyXG4vLyAgICAgbGFzdE5hbWU6IFwiR2VlcnRzXCIsXHJcbi8vICAgICBmaXJzdE5hbWU6IFwiUXVlbnRpblwiXHJcbi8vIH07XHJcbi8vIGNvbnNvbGUubG9nKCd4IDo+PiAnLCBnZXRQcm9wZXJ0eSh4LCAnbGFzdE5hbWUnKSk7XHJcbi8vIC8vIGNvbnNvbGUubG9nKCd4IDo+PiAnLCBnZXRQcm9wZXJ0eSh4LCAnaGVsbG8nKSk7IC8vIE5lIGZvbmN0aW9ubmUgcGFzIGNhciBwYXMgdW5lIGNsZWYgZGUgVHlwZSBkZSBsJ29iamV0IChBZG1pbilcclxuLy8gLy8gY29uc29sZS5sb2coJ3ggOj4+ICcsIGdldFByb3BlcnR5KHgsIDMpKTtcclxuLy8gbGV0IG15VG90YWwgPSBuZXcgTWF0aGVtYXRpcXVlPG51bWJlciwgbnVtYmVyPigpO1xyXG4vLyBteVRvdGFsLmFkZCA9ICh4LCB5KSA9PiB4ICsgeTtcclxuLy8gbXlUb3RhbC5zdWIgPSAoeCwgeSkgPT4geCAtIHk7XHJcbi8vIGNvbnNvbGUubG9nKG15VG90YWwuYWRkKDUsIDYpKTtcclxuLy8gY29uc29sZS5sb2cobXlUb3RhbC5zdWIoNSwgNikpO1xyXG4vLyAvLyBsZXQgbXlUb3RhbDIgPSBuZXcgTWF0aGVtYXRpcXVlPHN0cmluZywgc3RyaW5nPigpO1xyXG4vLyAvKipcclxuLy8gICogUGFydGllIDYgLSBDbGFzc2VzXHJcbi8vICAqL1xyXG4vLyBjb25zb2xlLndhcm4oXCJQYXJ0aWUgNiAtIENsYXNzZXNcIik7XHJcbi8vIGltcG9ydCB7IE15VXNlciB9IGZyb20gJy4vZG9jcy9jbGFzc2VzJztcclxuLy8gbGV0IG15VXNlciA9IG5ldyBNeVVzZXIoMSwgJ0dlZXJ0cycpO1xyXG4vLyBjb25zb2xlLmxvZygnbXlVc2VyIDo+PiAnLCBteVVzZXIpO1xyXG4vLyAvLyBEdWNrIFR5cGluZ1xyXG4vLyBpbXBvcnQgeyBQb2ludCwgR2VvbWV0cnksIGdldFgsIGdldFkgfSBmcm9tIFwiLi9kb2NzL2NsYXNzZXNcIjtcclxuLy8gY29uc29sZS5sb2coJ2dldFgobmV3IFBvaW50KTo+PiAnLCBnZXRYKG5ldyBQb2ludCkpO1xyXG4vLyBjb25zb2xlLmxvZygnZ2V0WChuZXcgR2VvbWV0cnkpOj4+ICcsIGdldFgobmV3IEdlb21ldHJ5KSk7XHJcbi8vIGNvbnNvbGUubG9nKCdnZXRZKG5ldyBQb2ludCk6Pj4gJywgZ2V0WShuZXcgUG9pbnQpKTtcclxuLy8gY29uc29sZS5sb2coJ2dldFkobmV3IEdlb21ldHJ5KTo+PiAnLCBnZXRZKG5ldyBHZW9tZXRyeSkpO1xyXG4vLyBpbXBvcnQgeyBBR2VvbWV0cnksIFRyaWFuZ2xlLCBQb2ludHMsIENhcnJlIH0gZnJvbSAnLi9kb2NzL2NsYXNzZXMnO1xyXG4vLyAvLyBjb25zdCBhZyA9IG5ldyBBR2VvbWV0cnkoKTsgLy8gSW1wb3NzaWJsZSBkJ2luc3RhbmNpZXIgdW5lIGNsYXNzZSBhYnN0cmFpdGUhIFxyXG4vLyBjb25zdCBwID0gbmV3IFBvaW50cygpO1xyXG4vLyBwLnggPSAyO1xyXG4vLyBwLnkgPSA1O1xyXG4vLyBjb25zdCBjID0gbmV3IENhcnJlKCk7XHJcbi8vIGMueCA9IDU7XHJcbi8vIGNvbnNvbGUubG9nKCdvYmplY3QgOj4+ICcsIHAubG9nTWUoKSk7XHJcbi8vIGNvbnNvbGUubG9nKCdvYmplY3QgOj4+ICcsIGMubG9nTWUoKSk7XHJcbi8vIGNvbnNvbGUubG9nKCdvYmplY3QgOj4+ICcsIHAucGVyaW1ldHJlKCkpO1xyXG4vLyBjb25zb2xlLmxvZygnb2JqZWN0IDo+PiAnLCBwLmFpcigpKTtcclxuLy8gY29uc29sZS5sb2coJ29iamVjdCA6Pj4gJywgYy5wZXJpbWV0cmUoKSk7XHJcbi8vIGNvbnNvbGUubG9nKCdvYmplY3QgOj4+ICcsIGMuYWlyKCkpO1xyXG4vLyBpbXBvcnQgeyBQZXJzb25uZSwgRmVtbWUsIEhvbW1lIH0gZnJvbSBcIi4vZG9jcy9jbGFzc2VzXCI7XHJcbi8vIC8vIGNvbnN0IHAgPSBuZXcgUGVyc29ubmUoKVxyXG4vLyBjb25zdCBoID0gbmV3IEhvbW1lKCdHZWVydHMnLCAnUXVlbnRpbicsIG5ldyBEYXRlKCcxOTk2LTA0LTAzJyksIDAuNSk7XHJcbi8vIGNvbnN0IGYgPSBuZXcgRmVtbWUoJ0dlZXJ0cycsICdNw6lsYW5pZScsIG5ldyBEYXRlKCksIGZhbHNlKTtcclxuLy8gaC5wYXJsZXIoJ0JvbmpvdXIgbGVzIEpTICEnKVxyXG4vLyBmLnBhcmxlcignQm9uam91ciBsZXMgSlMgIScpXHJcbi8vIC8vIE1vdC1jbGVmIDogc3RhdGljXHJcbi8vIGltcG9ydCB7IENhbGN1bGF0cmljZSB9IGZyb20gXCIuL2RvY3MvY2xhc3Nlc1wiO1xyXG4vLyBjb25zb2xlLmxvZyhDYWxjdWxhdHJpY2UuYWRkaXRpb24oNSwgMykpO1xyXG4vLyAvLyBDYWxjdWxhdHJpY2UuUEkgPSAyIC8vIEltcG9zc2libGUgw6AgY2hhbmdlciBhdmVjIHVuIHJlYWRvbmx5XHJcbi8vIGNvbnNvbGUubG9nKENhbGN1bGF0cmljZS5hZGRpdGlvbihDYWxjdWxhdHJpY2UuUEksIDEpKTtcclxuLy8gY29uc3QgY2FsYyA9IG5ldyBDYWxjdWxhdHJpY2UoKVxyXG4vLyAvLyBjYWxjLmFkZGl0aW9uKDUsIDMpIC8vIEltcG9zc2libGUgZCdhcHBlbGVyIHVuIG1lbWJyZSBzdGF0aWMgc3VyIHVuZSBpbnN0YW5jZVxyXG4vLyBpbXBvcnQgeyBEYXRlQ29udmVydGVyIH0gZnJvbSBcIi4vZG9jcy9jbGFzc2VzXCI7XHJcbi8vIGNvbnNvbGUubG9nKERhdGVDb252ZXJ0ZXIuY29udmVydFRpbWVTdGFtcFRvRGF0ZShuZXcgRGF0ZSgpLmdldFRpbWUoKS50b1N0cmluZygpKSk7XHJcbi8vIC8vIEludGVyZmFjZXNcclxuLy8gaW1wb3J0IHsgQXVkaSwgSUxvZ2dlciwgVm9pdHVyZSwgQWN0aW9uLCBWZWhpY3VsZSB9IGZyb20gXCIuL2RvY3MvY2xhc3Nlc1wiO1xyXG4vLyBjb25zdCB2ID0gbmV3IEF1ZGkoKVxyXG4vLyAvKipcclxuLy8gICogUGFydGllIDcgLSBPdmVybG9hZHNcclxuLy8gICovXHJcbi8vIGltcG9ydCB7IGZuLCBmbjIgfSBmcm9tICcuL2RvY3Mvb3ZlcmxvYWRzJ1xyXG4vLyBjb25zb2xlLmxvZyhmbignSGVsbG8nKSlcclxuLy8gY29uc29sZS5sb2coZm4oJ0hlbGxvJywgJ1dvcmxkJykpXHJcbi8vIGNvbnNvbGUubG9nKGZuKCdIZWxsbycsICdXb3JsZCcsICchJykpXHJcbi8vIGNvbnNvbGUubG9nKCdmbjIgc3RyaW5nIDo+PicsIGZuMignQm9uam91cicpKTtcclxuLy8gY29uc29sZS5sb2coJ2ZuMiBudW1iZXIgOj4+JywgZm4yKDUpKTtcclxuLy8gY29uc29sZS5sb2coJ2ZuMiBib29sw6llbiA6Pj4nLCBmbjIodHJ1ZSkpO1xyXG4vLyBpbXBvcnQgeyBBbmltYWwsIFAgfSBmcm9tIFwiLi9kb2NzL292ZXJsb2Fkc1wiO1xyXG4vLyBsZXQgbm9pcmF1OiBBbmltYWwgPSB7IG5vbTogJ05vaXJhdScsIHR5cGU6ICdjaGF0JyB9XHJcbi8vIGxldCBiaWxsOiBBbmltYWwgPSB7IG5vbTogJ0JpbGwnLCB0eXBlOiAnY2hpZW4nIH1cclxuLy8gbGV0IHRpdGk6IEFuaW1hbCA9IHsgbm9tOiAnVGl0aScsIHR5cGU6ICdjYW5hcmknIH1cclxuLy8gbGV0IHF1ZW50aW4gPSBuZXcgUCgnR2VlcnRzJywgJ1F1ZW50aW4nKVxyXG4vLyBsZXQgbWVsYW5pZSA9IG5ldyBQKCdHZWVydHMnLCAnTcOpbGFuaWUnLCBuZXcgRGF0ZSgnMDgtMDUtMTk4OCcpLCAnZicsIFt7bm9tOiAnV2lsbHknLCB0eXBlOiAnZGF1cGhpbid9IGFzIEFuaW1hbF0pXHJcbi8vIHF1ZW50aW4uYW5pbWF1eCA9IFtub2lyYXUsIGJpbGwsIHRpdGldXHJcbi8vIGNvbnNvbGUubG9nKCdxdWVudGluIDo+PiAnLCBxdWVudGluKTtcclxuLy8gY29uc29sZS5sb2coJ21lbGFuaWUgOj4+ICcsIG1lbGFuaWUpO1xyXG4vLy0tLS0tLS0tLS0tLS0tLS0tLVJQRy0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tXHJcbmltcG9ydCBEZSBmcm9tIFwiLi9tb2RlbHMvZGVcIjtcclxuY29uc29sZS5sb2cobmV3IERlKDUpLmxhbmNlcigpKTtcclxuIiwiLy8gLyoqXHJcbi8vICAqIFBhcnRpZSAxIC0g4pyP77iPIEV4ZXJjaWNlIDAxXHJcbi8vICAqL1xyXG4vLyAvKipcclxuLy8gICogQ3LDqWVyIHVuIGNvZGUgcGVybWV0dGFudCBkZSBjcsOpZXIgdW4gY29tcHRldXIgY2xhc3NpcXVlLCBhdmVjICsgMSwgLTEgZXQgPS4uLiwgXHJcbi8vICAqIGlsIGZhdWRyYSB0eXDDqSBsZSB0b3V0IGF1IG1heGltdW0sIHByw6lwYXJlciAyIGZvbmN0aW9ucyBwb3VyIMOnYVxyXG4vLyAgKi9cclxuLy8gLy8gY29uc29sZS53YXJuKCdFeGVyY2ljZSAwMScpO1xyXG4vLyAvLyBjb25zdCBidG5Nb2luczogSFRNTEJ1dHRvbkVsZW1lbnQgfCBudWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI2J0bk1vaW5zJyk7XHJcbi8vIC8vIGNvbnN0IGJ0blBsdXM6IEhUTUxCdXR0b25FbGVtZW50IHwgbnVsbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJyNidG5QbHVzJyk7XHJcbi8vIC8vIGNvbnN0IHRvdGFsOiBIVE1MU3BhbkVsZW1lbnQgfCBudWxsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignI3RvdGFsJyk7XHJcbi8vIC8vIGxldCB2YWxldXI6IG51bWJlcjtcclxuLy8gLy8gaWYgKHRvdGFsKSB2YWxldXIgPSBwYXJzZUludCh0b3RhbC5pbm5lclRleHQpO1xyXG4vLyAvLyBjb25zdCBpbmNyZW1lbnQ6IChlOiBNb3VzZUV2ZW50KSA9PiB2b2lkID0gKGV2ZW50OiBNb3VzZUV2ZW50KSA9PiB7XHJcbi8vIC8vICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4vLyAvLyAgICAgaWYgKHRvdGFsKSB0b3RhbC5pbm5lclRleHQgPSAoKyt2YWxldXIpLnRvU3RyaW5nKCk7XHJcbi8vIC8vIH07XHJcbi8vIC8vIGNvbnN0IGRlY3JlbWVudDogRnVuY3Rpb24gPSAoZXZlbnQ6IE1vdXNlRXZlbnQpID0+IHtcclxuLy8gLy8gY29uc3QgZGVjcmVtZW50OiAoZTogTW91c2VFdmVudCkgPT4gdm9pZCA9IChldmVudDogTW91c2VFdmVudCkgPT4ge1xyXG4vLyAvLyAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuLy8gLy8gICAgIGlmICh0b3RhbCkgdG90YWwuaW5uZXJUZXh0ID0gKC0tdmFsZXVyKS50b1N0cmluZygpO1xyXG4vLyAvLyB9O1xyXG4vLyAvLyBpZiAoYnRuUGx1cykgYnRuUGx1cy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGluY3JlbWVudCk7XHJcbi8vIC8vIGlmIChidG5Nb2lucykgYnRuTW9pbnMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkZWNyZW1lbnQpO1xyXG4vLyAvKipcclxuLy8gICogUGFydGllIDQgLSDinI/vuI8gRXhlcmNpY2UgMDJcclxuLy8gICovXHJcbi8vIC8qKlxyXG4vLyAgKiBSZXByZW5kcmUgbGUgY29kZSBkZSBsJ2V4b3MgMSBldCB0cmFuZm9ybWVyIGxlIHRvdXQgYXZlYyBkZXMgbmFycm93aW5nIGV0IGRlcyBnZW5lcmljc1xyXG4vLyAgKi9cclxuLy8gY29uc3QgYnRuTW9pbnM6IEhUTUxCdXR0b25FbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcjxIVE1MQnV0dG9uRWxlbWVudD4oJyNidG5Nb2lucycpITtcclxuLy8gY29uc3QgYnRuUGx1czogSFRNTEJ1dHRvbkVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxCdXR0b25FbGVtZW50PignI2J0blBsdXMnKSE7XHJcbi8vIGNvbnN0IHRvdGFsOiBIVE1MU3BhbkVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yPEhUTUxTcGFuRWxlbWVudD4oJyN0b3RhbCcpITtcclxuLy8gbGV0IHZhbGV1cjogbnVtYmVyO1xyXG4vLyBpZiAodG90YWwpIHZhbGV1ciA9IHBhcnNlSW50KHRvdGFsLmlubmVyVGV4dCk7XHJcbi8vIGNvbnN0IGluY3JlbWVudDogKGU6IE1vdXNlRXZlbnQpID0+IHZvaWQgPSAoZXZlbnQ6IE1vdXNlRXZlbnQpID0+IHtcclxuLy8gICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbi8vICAgICBpZiAodG90YWwpIHRvdGFsLmlubmVyVGV4dCA9ICgrK3ZhbGV1cikudG9TdHJpbmcoKTtcclxuLy8gfTtcclxuLy8gY29uc3QgZGVjcmVtZW50OiAoZTogTW91c2VFdmVudCkgPT4gdm9pZCA9IChldmVudDogTW91c2VFdmVudCkgPT4ge1xyXG4vLyAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuLy8gICAgIGlmICh0b3RhbCkgdG90YWwuaW5uZXJUZXh0ID0gKC0tdmFsZXVyKS50b1N0cmluZygpO1xyXG4vLyB9O1xyXG4vLyBpZiAoYnRuUGx1cykgYnRuUGx1cy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGluY3JlbWVudCk7XHJcbi8vIGlmIChidG5Nb2lucykgYnRuTW9pbnMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkZWNyZW1lbnQpO1xyXG4vLyAvKipcclxuLy8gICogUGFydGllIDUgLSDinI/vuI8gRXhlcmNpY2UgMDNcclxuLy8gICovXHJcbi8vIC8qKlxyXG4vLyAgKiBQcsOpcGFyZXIgdW4gbWljcm8gamV1IGRlIHR5cGUgaGVyb2VzIHZzIG1vbnN0ZXIsIHZvdXMgYXVyZXogMiBncmFuZGVzIGNsYXNzZXMsIGhlcm9lcyBldCBtb25zdGVyLCBcclxuLy8gICogbGUgYnV0LCDDqXRhbnQgZGUgcG91dm9pciBpbnN0YW5jaWVyIHVuIG5vdXZlYXUgaGVybyBldCB1biBtb25zdHJlIGF2ZWMgZGVzIGNhcmFjdMOocmlzdGlxdWVzIGRpZmbDqXJlbnRlcyxcclxuLy8gICogaWxzIGRldnJvbnQgw6p0cmUgc3RvY2tlciBkYW5zIHVuIG9iamV0IHRhYmxlYXUgZ3JhY2UgYSB1bmUgZm9uY3Rpb24sIFxyXG4vLyAgKiBpbCBkZXZyb250IHBvdXZvaXIgcydhZmZyb250ZXIgZ3Jhw6dlIGEgZGVzIHBvaW50cyBkZSB2aWUsIGQnYXR0YXF1ZSBldCBkZSBkw6lmZW5zZSxcclxuLy8gICogc2kgdm91cyBhdmV6IHRlcm1pbmVyIGRhbnMgbGVzIHRlbXBzIGltcGFydGlzLCB2b3VzIHBvdXZleiBhbcOpbGlvcmVyLCB1dGlsaXNleiB2b3RyZSBpbWFnaW5hdGlvblxyXG4vLyAgKiByZXF1aXM6IHVuIGdlbmVyaWMsIHVuIG5hcnJvd2luZywgZGVzIGNsYXNzZXMsIHVuIHN0YXRpYywgdW5lIGFic3RyYWN0LCBsZSB0b3V0IGVudGnDqHJlbWVudCB0eXDDqSAhXHJcbi8vICAqIG4naMOpc2l0ZXogcGFyIMOgIHV0aWxpc2VyIGwnaHRtbCBwb3VyIMOnYSBldCBsZSByZW5kcmUgZW5jb3JlIHBsdXMgY2hvdWV0dGVcclxuLy8gICovXHJcbi8vIC8vIGFic3RyYWN0IGNsYXNzIFBlcnNvbm5hZ2U8VD57XHJcbi8vIC8vICAgIHByb3RlY3RlZCBwdlxyXG4vLyAvLyAgICAgcHJvdGVjdGVkIGVuZHVyYW5jZVxyXG4vLyAvLyAgICAgcHJvdGVjdGVkIGZvcmNlXHJcbi8vIC8vICAgICBjb25zdHJ1Y3Rvcigpe1xyXG4vLyAvLyAgICAgICAgIHRoaXMuZW5kdXJhbmNlID0gdGhpcy5lbmR1cmFuY2VcclxuLy8gLy8gICAgICAgICB0aGlzLmZvcmNlID0gdGhpcy5mb3JjZVxyXG4vLyAvLyAgICAgICAgIHRoaXMucHY9IHRoaXMucHZcclxuLy8gLy8gICAgIH1cclxuLy8gLy8gfVxyXG4vLyAvLyAgY2xhc3MgSGVybyBleHRlbmRzIFBlcnNvbm5hZ2U8e3B2Om51bWJlcixlbmR1cmFuY2U6bnVtYmVyfT57XHJcbi8vIC8vIH1cclxuLy8gLy8gY2xhc3MgTW9uc3RyZTxUPntcclxuLy8gLy8gfVxyXG4vLyBhYnN0cmFjdCBjbGFzcyBQZXJzb25uYWdlPFQ+IHtcclxuLy8gICAgcHJvdGVjdGVkIG5vbTogc3RyaW5nO1xyXG4vLyAgICBwcm90ZWN0ZWQgdmllOiBudW1iZXI7XHJcbi8vICAgIHByb3RlY3RlZCBhdHRhcXVlOiBudW1iZXI7XHJcbi8vICAgIHByb3RlY3RlZCBkZWZlbnNlOiBudW1iZXI7XHJcbi8vICAgICBjb25zdHJ1Y3Rvcihub206IHN0cmluZyx2aWU6IG51bWJlciwgYXR0YXF1ZTogbnVtYmVyLCBkZWZlbnNlOiBudW1iZXIpIHtcclxuLy8gICAgICAgICB0aGlzLm5vbSA9IG5vbTtcclxuLy8gICAgICAgICB0aGlzLnZpZSA9IHZpZTtcclxuLy8gICAgICAgICB0aGlzLmF0dGFxdWUgPSBhdHRhcXVlO1xyXG4vLyAgICAgICAgIHRoaXMuZGVmZW5zZSA9IGRlZmVuc2U7XHJcbi8vICAgICB9XHJcbi8vICAgICBhYnN0cmFjdCBhdHRhcXVlcihlbm5lbWk6IFBlcnNvbm5hZ2U8VD4pOiB2b2lkO1xyXG4vLyAgICAgZ2V0IGRlZmVuc2VWYWx1ZSgpOiBudW1iZXIge1xyXG4vLyAgICAgICAgIHJldHVybiB0aGlzLmRlZmVuc2U7XHJcbi8vICAgICB9XHJcbi8vICAgIHB1YmxpYyBzdWJpckRlZ2F0cyhkZWdhdHM6IG51bWJlcik6IHZvaWQge1xyXG4vLyAgICAgICAgIHRoaXMudmllIC09IGRlZ2F0cztcclxuLy8gICAgICAgICBjb25zb2xlLmxvZyhgJHt0aGlzLm5vbX0gc3ViaXQgJHtkZWdhdHN9IGRlZ2F0cyBldCBwb3NzZWRlIGVuY29yZSAke3RoaXMudmllfSBQVmApO1xyXG4vLyAgICAgfVxyXG4vLyAvKiBBIHN0YXRpYyBwcm9wZXJ0eSBvZiB0aGUgY2xhc3MgUGVyc29ubmFnZS4gSXQgaXMgYW4gYXJyYXkgb2YgUGVyc29ubmFnZSBvYmplY3RzLiAqL1xyXG4vLyAgICAgc3RhdGljIHBlcnNvbm5hZ2VzOiBQZXJzb25uYWdlPGFueT5bXSA9IFtdO1xyXG4vLyAgICAgc3RhdGljIGFqb3V0ZXJQZXJzb25uYWdlKHBlcnNvbm5hZ2U6IFBlcnNvbm5hZ2U8YW55Pikge1xyXG4vLyAgICAgICAgIHRoaXMucGVyc29ubmFnZXMucHVzaChwZXJzb25uYWdlKTtcclxuLy8gICAgIH1cclxuLy8gfVxyXG4vLyBjbGFzcyBIZXJvczxUPiBleHRlbmRzIFBlcnNvbm5hZ2U8VD4ge1xyXG4vLyAgICAgY29uc3RydWN0b3Iobm9tOiBzdHJpbmcsdmllOiBudW1iZXIsIGF0dGFxdWU6IG51bWJlciwgZGVmZW5zZTogbnVtYmVyKSB7XHJcbi8vICAgICAgICAgc3VwZXIobm9tLCB2aWUsIGF0dGFxdWUsIGRlZmVuc2UpO1xyXG4vLyAgICAgfVxyXG4vLyAgICAgYXR0YXF1ZXIoZW5uZW1pOiBNb25zdHJlPFQ+KTogdm9pZCB7XHJcbi8vICAgICAgICAgY29uc3QgZGVnYXRzID0gdGhpcy5hdHRhcXVlIC0gZW5uZW1pLmRlZmVuc2VWYWx1ZTtcclxuLy8gICAgICAgICBlbm5lbWkuc3ViaXJEZWdhdHMoZGVnYXRzKTtcclxuLy8gICAgIH1cclxuLy8gfVxyXG4vLyBjbGFzcyBNb25zdHJlPFQ+IGV4dGVuZHMgUGVyc29ubmFnZTxUPiB7XHJcbi8vICAgICBjb25zdHJ1Y3Rvcihub206IHN0cmluZyx2aWU6IG51bWJlciwgYXR0YXF1ZTogbnVtYmVyLCBkZWZlbnNlOiBudW1iZXIpIHtcclxuLy8gICAgICAgICBzdXBlcihub20sIHZpZSwgYXR0YXF1ZSwgZGVmZW5zZSk7XHJcbi8vICAgICB9XHJcbi8vICAgICBhdHRhcXVlcihlbm5lbWk6IEhlcm9zPFQ+KTogdm9pZCB7XHJcbi8vICAgICAgICAgY29uc3QgZGVnYXRzID0gdGhpcy5hdHRhcXVlIC0gZW5uZW1pLmRlZmVuc2VWYWx1ZTtcclxuLy8gICAgICAgICBlbm5lbWkuc3ViaXJEZWdhdHMoZGVnYXRzKTtcclxuLy8gICAgIH1cclxuLy8gfVxyXG4vLyBsZXQgaGVybyA9IG5ldyBIZXJvcygnYW1pbmUnLDI1LDUsMTApXHJcbi8vIGNvbnNvbGUubG9nKCdoZXJvIDo+PiAnLCBoZXJvKTtcclxuLy8gbGV0IG1vbnN0cmUgPSBuZXcgTW9uc3RyZSgnYmFib3VjaGUnLDUwLDcsMzApXHJcbi8vIGNvbnNvbGUubG9nKCdtb25zdHJlIDo+PiAnLCBtb25zdHJlKTtcclxuLy8gY29uc29sZS5sb2coaGVyby5hdHRhcXVlcihtb25zdHJlKSlcclxuLy8gY29uc29sZS5sb2cobW9uc3RyZS5zdWJpckRlZ2F0cylcclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9