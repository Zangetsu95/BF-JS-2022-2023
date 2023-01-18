/**
 * Partie 1 - Types
 */

const a: string = 'Hello les fullstack JS.';
const b: number = 42;
const c: boolean = true;
const d: null = null;

const e: string[] = ['a', 'b', 'c'];
const f: Array<string> = ['d', 'e', 'f'];
const g: number[] = [1, 2, 3, 4];
const h: any[] = ['Hello', true, 21, [], {}, () => { }];

const i: {} = {};
const j: { firstname: string, lastname: string; } = { firstname: 'Quentin', lastname: 'Geerts' };
const k: { [key: string]: string; } = { coucou: 'Hello' };

const l: Date = new Date();

const m: Function = (): void => { };
const n: () => void = (): void => { };
const o: (i: number, s: string, b: boolean) => string[] = (i, s, b): string[] => ['a', 'b'];
const p: () => never = () => { throw new Error('Not implemented'); };

let q: unknown = 'a';
q = 1;
q = true;
// const r: HTMLSpanElement = new HTMLSpanElement();
// const s: Element = new Element();

export let mesTypes = { a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q };

// Export grâce à export, un objet lambda qui contiendra toutes les variables
// Ce qui par la suite nous évitera des erreurs de nommages de variables déjà existantes

// Attention à l'indexation
const ob = { 0: 'Quentin', 1: 42, 2: true }; // Tableau classique (clef: number)

// console.log(ob.0); // pas possible
console.log(ob[0]); // output : 'Quentin'

// L'indexation transforme fictivement mon objet en tableau associatif
const obj = { firstname: 'Quentin', lastname: 'Geerts', age: 26 };
console.log(obj.firstname);
console.log(obj['firstname']);

// Attention que la dernière version est la moins propre
// → dangereux en cas de undefined ou unknown