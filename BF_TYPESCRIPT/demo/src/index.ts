/**
 * Partie 1 - Types
 */

console.warn("Partie 1 - Types");

import { mesTypes } from "./docs/types";

console.log('mesTypes.a :>> ', mesTypes.a);
console.log('mesTypes.b :>> ', mesTypes.b);
console.log('mesTypes.c :>> ', mesTypes.c);
console.log('mesTypes.d :>> ', mesTypes.d);
console.log('mesTypes.e :>> ', mesTypes.e);
console.log('mesTypes.f :>> ', mesTypes.f);
console.log('mesTypes.g :>> ', mesTypes.g);
console.log('mesTypes.h :>> ', mesTypes.h);
console.log('mesTypes.i :>> ', mesTypes.i);
console.log('mesTypes.j :>> ', mesTypes.j);
console.log('mesTypes.k :>> ', mesTypes.k);
console.log('mesTypes.l :>> ', mesTypes.l);
console.log('mesTypes.m :>> ', mesTypes.m);
console.log('mesTypes.n :>> ', mesTypes.n);
console.log('mesTypes.o :>> ', mesTypes.o);
console.log('mesTypes.p :>> ', mesTypes.p);
console.log('mesTypes.q :>> ', mesTypes.q);

/**
 * Partie 2 - Assertion de types
 */

console.warn("Partie 2 - Assertion de types");
// Voir src/docs/assertionTypes.ts

/**
 * Partie 3 - Narrowing
 */

console.warn("Partie 3 - Narrowing");

import { printId, exempleN, isDate, isUser, TUser } from "./docs/narrowing";

printId(12);
printId('a');
printId(null);

exempleN('a', 'a');
exempleN('a', true);
exempleN(12, true);

let birthDate = new Date('03/04/1996');

console.log('Date [03/04/1996]:>> ', isDate(birthDate));
console.log('String [03/03/1001]:>> ', isDate('03/03/1001'));


let user = new TUser('Quentin');
console.log('isUser(user) :>> ', isUser(user));

/**
 * Partie 4 - Custom Types
 */

console.warn("Partie 4 - Custom Types");

import { Admin, Admin2, Id, DateString } from './docs/customTypes';

let admin: Admin = {
    roleId: 0,
    lastName: "Geerts",
    firstName: "Quentin"
};

let ad: Admin = {
    roleId: 5,
    lastName: "",
    firstName: ""
};

let admin2: Admin2 = {
    roleId: "",
    lastName: "",
    firstName: ""
};

console.log('admin :>> ', admin);

let idInt: Id = 45;
let idString: Id = "a";
// let idBooleen: Id = true;

console.log('idInt :>> ', idInt);
console.log('typeof idInt :>> ', typeof idInt);
console.log('idString :>> ', idString);
// console.log('idBooleen :>> ', idBooleen);

let date: DateString = "03/04/1996";
let date2: DateString = new Date().toString();
console.log('date :>> ', date);
console.log('date :>> ', date2);


/**
 * Partie 5 - Generics
 */

console.warn("Partie 5 - Generics");

import { GenericNumber, getProperty, identity, identity2, identity3, identity4, loggingI, Mathematique } from './docs/generics';

// On perd le type dynamique passé en paramètre à cause du any
const id1_1 = identity(3);
const id1_2 = identity('toto');
const id1_3 = identity(true);

console.log('id1_1 :>> ', id1_1);
console.log('typeof id1_1 :>> ', typeof id1_1);
console.log('id1_2 :>> ', id1_2);
console.log('typeof id1_2 :>> ', typeof id1_2);
console.log('id1_3 :>> ', id1_3);
console.log('typeof id1_3 :>> ', typeof id1_3);

const id2 = identity2<string>('e');
console.log('id2 :>> ', id2);
console.log('typeof id2 :>> ', typeof id2);

const id3 = identity2<Id>(5);
console.log('id3 :>> ', id3);
console.log('typeof id3 :>> ', typeof id3);

const id4 = identity2<Id>('a');
console.log('id4 :>> ', id4);
console.log('typeof id4 :>> ', typeof id4);

// identity2<Admin>(3); Pas possible car c'est un number et non un admin

const id5 = identity3<string, number>("Coucou", 42);
console.log('id5 :>> ', id5);

const id6 = identity3<string, string>('Hello', 'TypeScript');
console.log('id6 :>> ', id6);

const id7 = identity4<number>([1, 2, 3, 4]);
console.log('id7 :>> ', id7);

let nb = new GenericNumber<number>();

nb.zeroValue;
nb.add = function (x, y) {
    return x + y;
};

console.log(nb.add(3, 5));

const lg = loggingI<number[]>([5, 5, 6, 3, 4, 8]);
console.log('lg :>> ', lg);

//  Ne fonctionne pas
// const lg0 = loggingI<number>(5)
// const lg0 = loggingI(5)
// console.log('lg0 :>> ', lg0);

let x: Admin = {
    roleId: 0,
    lastName: "Geerts",
    firstName: "Quentin"
};

console.log('x :>> ', getProperty(x, 'lastName'));
// console.log('x :>> ', getProperty(x, 'hello')); // Ne fonctionne pas car pas une clef de Type de l'objet (Admin)
// console.log('x :>> ', getProperty(x, 3));


let myTotal = new Mathematique<number, number>();
myTotal.add = (x, y) => x + y;
myTotal.sub = (x, y) => x - y;

console.log(myTotal.add(5, 6));
console.log(myTotal.sub(5, 6));


// let myTotal2 = new Mathematique<string, string>();

/**
 * Partie 6 - Classes
 */

console.warn("Partie 6 - Classes");

import { MyUser } from './docs/classes';

let myUser = new MyUser(1, 'Geerts');

console.log('myUser :>> ', myUser);

// Duck Typing

import { Point, Geometry, getX, getY } from "./docs/classes";

console.log('getX(new Point):>> ', getX(new Point));
console.log('getX(new Geometry):>> ', getX(new Geometry));

console.log('getY(new Point):>> ', getY(new Point));
console.log('getY(new Geometry):>> ', getY(new Geometry));

import { AGeometry, Triangle, Points, Carre } from './docs/classes';

// const ag = new AGeometry(); // Impossible d'instancier une classe abstraite! 

const p = new Points();
p.x = 2;
p.y = 5;

const c = new Carre();
c.x = 5;

console.log('object :>> ', p.logMe());
console.log('object :>> ', c.logMe());

console.log('object :>> ', p.perimetre());
console.log('object :>> ', p.air());

console.log('object :>> ', c.perimetre());
console.log('object :>> ', c.air());

import { Personne, Femme, Homme } from "./docs/classes";

// const p = new Personne()

const h = new Homme('Geerts', 'Quentin', new Date('1996-04-03'), 0.5);
const f = new Femme('Geerts', 'Mélanie', new Date(), false);

h.parler('Bonjour les JS !')
f.parler('Bonjour les JS !')

// Mot-clef : static

import { Calculatrice } from "./docs/classes";

console.log(Calculatrice.addition(5, 3));

// Calculatrice.PI = 2 // Impossible à changer avec un readonly

console.log(Calculatrice.addition(Calculatrice.PI, 1));

const calc = new Calculatrice()
// calc.addition(5, 3) // Impossible d'appeler un membre static sur une instance

import { DateConverter } from "./docs/classes";

console.log(DateConverter.convertTimeStampToDate(new Date().getTime().toString()));

// Interfaces

import { Audi, ILogger, Voiture, Action, Vehicule } from "./docs/classes";

const v = new Audi()


/**
 * Partie 7 - Overloads
 */

import { fn, fn2 } from './docs/overloads'

console.log(fn('Hello'))
console.log(fn('Hello', 'World'))
console.log(fn('Hello', 'World', '!'))

console.log('fn2 string :>>', fn2('Bonjour'));
console.log('fn2 number :>>', fn2(5));
console.log('fn2 booléen :>>', fn2(true));

import { Animal, P } from "./docs/overloads";

let noirau: Animal = { nom: 'Noirau', type: 'chat' }
let bill: Animal = { nom: 'Bill', type: 'chien' }
let titi: Animal = { nom: 'Titi', type: 'canari' }

let quentin = new P('Geerts', 'Quentin')
let melanie = new P('Geerts', 'Mélanie', new Date('08-05-1988'), 'f', [{nom: 'Willy', type: 'dauphin'} as Animal])

quentin.animaux = [noirau, bill, titi]

console.log('quentin :>> ', quentin);
console.log('melanie :>> ', melanie);
