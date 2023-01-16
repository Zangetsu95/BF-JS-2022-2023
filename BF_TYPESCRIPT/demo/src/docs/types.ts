const a: string = "hello les bg";
const b: number = 42;
const c: boolean = true;
const e: string[] = ["a", "b", "c"];
const f: Array<string> = ["d", "e", "f"];
const g: number[] = [1, 2, 3, 4];
const h: any[] = ["hello", true, 21, [], {}, () => {}];
const i: {} = {};
const j: { firstname: string; lastname: string } = {
  firstname: "amine",
  lastname: "houssane",
};
const k: { [key: string]: string } = { coucou: "hello" };
const l: Date = new Date();
const m: Function = (): void => {};
const n: () => void = (): void => {};
const o: (i: number, s: string, b: boolean) => string[] = (
  i,
  s,
  b
): string[] => ["a", "b"];
const p: () => never = () => {
  throw new Error("not implemented");
};
let q: unknown = "a";
q = 1;
q = true;
// const r:HTMLSpanElement = new HTMLSpanElement
// const s:Element = new Element()

export let mesTypes = { a, b, c, e, f, g, h, i, j, k, l, m, n, o, p, q };

/*export grace a export,un objet lambda qui contiendra toutes les variable
    ce qui par la suite nous evitera des erreurs de nommages ed variables déja existantes
*/
//attention a l'indexation
const ob = {0:'amine',1:474,2:true} // tableau classique 
console.log(ob[0]) //output amine
//l'indexation transformer fictivement mon ojbect en tableau associatif
const obj = {firstname:'amine',lastname:'houssane',age:27}
console.log('obj.firstname :>> ', obj.firstname);
console.log("obj['firstname'] :>> ", obj['firstname']);
//derniere version moins propre
//dangereux en cas de undefined ou unknown

//🐱‍👤Exercice 01