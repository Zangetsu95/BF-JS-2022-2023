import Humain from './models/Heros/Humain';
import Nain from "./models/Heros/Nain";

import Loup from "./models/Monstres/Loup";
import Orque from "./models/Monstres/Orque";
import Dragonnet from "./models/Monstres/Dragonnet";


// → Création des personnages
let humain = new Humain("Hakhio");
let nain = new Nain("Gimly");
let loup = new Loup("Sif");
let orque = new Orque("Thrall");
let dragonnet = new Dragonnet("Mushu");

// → Affichage des personnages
console.log('humain :>> ', humain.toString());
console.log('nain :>> ', nain.toString());
console.log('loup :>> ', loup.toString());
console.log('orque :>> ', orque.toString());
console.log('dragonnet :>> ', dragonnet.toString());
// console.log('humain :>> ', humain);
// console.log('nain :>> ', nain);
// console.log('loup :>> ', loup);
// console.log('orque :>> ', orque);
// console.log('dragonnet :>> ', dragonnet);

// → Affrontements

humain.frapper(loup);
humain.frapper(loup);
humain.frapper(loup);
humain.frapper(loup);
humain.frapper(loup);
humain.frapper(loup);

// → Ramassage des ressources
console.log('humain :>> ', humain.toString());
humain.loot(loup);
console.log('humain :>> ', humain.toString());
console.log('loup :>> ', loup.toString());