import { Cours } from "./models/Cours.js";

let javascript = new Cours("Javascript", "Quentin Geerts", 60);
let csharp = new Cours("C#", "Quentin", 89);

console.log('javascript :>> ', javascript);
console.log('csharp :>> ', csharp);

console.log(javascript.details());
console.log(csharp.details());

