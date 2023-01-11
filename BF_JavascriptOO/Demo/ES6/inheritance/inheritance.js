import { Femme } from "./models/Femme.js";
import { Homme } from "./models/Homme.js";
import { Personne } from "./models/Personne.js";

// let p = new Personne('P1', 'P1', 'M', new Date())

// console.log('p :>> ', p);

let h = new Homme('Geerts', 'Quentin', new Date(), 0.5)
let f = new Femme('Geerts', 'Mélanie', new Date(), false)

console.log(h instanceof Personne); // true
console.log(f instanceof Personne); // true

console.log(Personne instanceof Homme); // false
console.log(Personne instanceof Femme); // false

console.log(h.parler());
console.log(f.parler());

console.log(f.accoucher())

f.estEnceinte = true
console.log(f.accoucher())


f.estEnceinte = true
f.accoucher()
f.estEnceinte = true
f.accoucher()
f.estEnceinte = true
f.accoucher()

console.log(f.enfants);
