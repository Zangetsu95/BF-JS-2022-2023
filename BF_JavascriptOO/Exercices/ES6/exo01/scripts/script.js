import { Personnage } from "../models/Personnage.js";

// → Création des personnages
let paladin = new Personnage("Hakhio");
let shaman = new Personnage("Amino");

// → Affichage des informations des personnages
console.log('paladin :>> ', paladin.toString());
console.log('shaman :>> ', shaman.toString());

// → C'est leur du du-du-duel
paladin.frapper(shaman);
shaman.frapper(paladin);

// → Affichage des informations des personnages
console.log('paladin :>> ', paladin.toString());
console.log('shaman :>> ', shaman.toString());
