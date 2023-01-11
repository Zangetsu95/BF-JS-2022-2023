import { Femme } from "../models/Femme.js";
import Homme from "../models/Homme.js";
import { Personne } from "../models/Personne.js";

let homme = new Homme("Geerts", "Quentin", new Date(), ['dev', 'dormir'], false);
let femme = new Femme("Geerts", "Mélanie", new Date(), ['analyse', 'Salsa'], false)
let personne = new Personne()


console.log('homme :>> ', homme);
console.log('femme :>> ', femme);
console.log('personne :>> ', personne);

console.log(femme.seMaquiller());
console.log(homme.seRaser());