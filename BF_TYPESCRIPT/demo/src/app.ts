/**
 * Partie 1 - Types
 */

console.warn("Partie 1 - Types");

import { mesTypes } from "./docs/types";

console.log('mesTypes.a :>> ', mesTypes.a);
console.log('mesTypes.b :>> ', mesTypes.b);
console.log('mesTypes.c :>> ', mesTypes.c);
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

let admin2: Admin2 = {
    roleId: "",
    lastName: "",
    firstName: ""
}

console.log('admin :>> ', admin);

let idInt: Id = 45;
let idString: Id = "a";
// let idBooleen: Id = true;

console.log('idInt :>> ', idInt);
console.log('idString :>> ', idString);
// console.log('idBooleen :>> ', idBooleen);

let date: DateString = "03/04/1996";
let date2: DateString = new Date().toString()
console.log('date :>> ', date);
console.log('date :>> ', date2);