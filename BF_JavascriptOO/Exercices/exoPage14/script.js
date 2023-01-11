import { Chien } from "./models/Chien.js";

let c1 = new Chien("Snoppy", "Beagle", "Blanc")
let c2 = new Chien("Beethoven", "Saint-Bernard", "Brun")

console.log(c1.aboie());
console.log(c2.aboie());

console.log(c1.medaille());
console.log(c2.medaille());