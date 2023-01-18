// /**
//  * Partie 1 - ✏️ Exercice 01
//  */

// /**
//  * Créer un code permettant de créer un compteur classique, avec + 1, -1 et =..., 
//  * il faudra typé le tout au maximum, préparer 2 fonctions pour ça
//  */

// // console.warn('Exercice 01');
// // const btnMoins: HTMLButtonElement | null = document.querySelector('#btnMoins');
// // const btnPlus: HTMLButtonElement | null = document.querySelector('#btnPlus');
// // const total: HTMLSpanElement | null = document.querySelector('#total');


// // let valeur: number;

// // if (total) valeur = parseInt(total.innerText);

// // const increment: (e: MouseEvent) => void = (event: MouseEvent) => {
// //     event.preventDefault();
// //     if (total) total.innerText = (++valeur).toString();
// // };

// // const decrement: Function = (event: MouseEvent) => {
// // const decrement: (e: MouseEvent) => void = (event: MouseEvent) => {
// //     event.preventDefault();
// //     if (total) total.innerText = (--valeur).toString();
// // };

// // if (btnPlus) btnPlus.addEventListener('click', increment);
// // if (btnMoins) btnMoins.addEventListener('click', decrement);

// /**
//  * Partie 4 - ✏️ Exercice 02
//  */

// /**
//  * Reprendre le code de l'exos 1 et tranformer le tout avec des narrowing et des generics
//  */
// const btnMoins: HTMLButtonElement = document.querySelector<HTMLButtonElement>('#btnMoins')!;
// const btnPlus: HTMLButtonElement = document.querySelector<HTMLButtonElement>('#btnPlus')!;
// const total: HTMLSpanElement = document.querySelector<HTMLSpanElement>('#total')!;

// let valeur: number;
// if (total) valeur = parseInt(total.innerText);

// const increment: (e: MouseEvent) => void = (event: MouseEvent) => {
//     event.preventDefault();
//     if (total) total.innerText = (++valeur).toString();
    
// };

// const decrement: (e: MouseEvent) => void = (event: MouseEvent) => {
//     event.preventDefault();
//     if (total) total.innerText = (--valeur).toString();
// };

// if (btnPlus) btnPlus.addEventListener('click', increment);
// if (btnMoins) btnMoins.addEventListener('click', decrement);


// /**
//  * Partie 5 - ✏️ Exercice 03
//  */
 
// /**
//  * Préparer un micro jeu de type heroes vs monster, vous aurez 2 grandes classes, heroes et monster, 
//  * le but, étant de pouvoir instancier un nouveau hero et un monstre avec des caractèristiques différentes,
//  * ils devront être stocker dans un objet tableau grace a une fonction, 
//  * il devront pouvoir s'affronter graçe a des points de vie, d'attaque et de défense,
//  * si vous avez terminer dans les temps impartis, vous pouvez améliorer, utilisez votre imagination
//  * requis: un generic, un narrowing, des classes, un static, une abstract, le tout entièrement typé !
//  * n'hésitez par à utiliser l'html pour ça et le rendre encore plus chouette
//  */


// // abstract class Personnage<T>{
// //    protected pv
// //     protected endurance
// //     protected force

// //     constructor(){
// //         this.endurance = this.endurance
// //         this.force = this.force
// //         this.pv= this.pv
// //     }

    
// // }


// //  class Hero extends Personnage<{pv:number,endurance:number}>{
    
// // }

// // class Monstre<T>{

// // }

// abstract class Personnage<T> {
//    protected nom: string;
//    protected vie: number;
//    protected attaque: number;
//    protected defense: number;

//     constructor(nom: string,vie: number, attaque: number, defense: number) {
//         this.nom = nom;
//         this.vie = vie;
//         this.attaque = attaque;
//         this.defense = defense;
//     }

//     abstract attaquer(ennemi: Personnage<T>): void;

   
//     get defenseValue(): number {
//         return this.defense;
//     }

//    public subirDegats(degats: number): void {
//         this.vie -= degats;
//         console.log(`${this.nom} subit ${degats} degats et possede encore ${this.vie} PV`);
//     }

// /* A static property of the class Personnage. It is an array of Personnage objects. */
//     static personnages: Personnage<any>[] = [];

//     static ajouterPersonnage(personnage: Personnage<any>) {
//         this.personnages.push(personnage);
//     }
// }


// class Heros<T> extends Personnage<T> {
//     constructor(nom: string,vie: number, attaque: number, defense: number) {
//         super(nom, vie, attaque, defense);
//     }

//     attaquer(ennemi: Monstre<T>): void {
//         const degats = this.attaque - ennemi.defenseValue;
//         ennemi.subirDegats(degats);
//     }
// }

// class Monstre<T> extends Personnage<T> {
//     constructor(nom: string,vie: number, attaque: number, defense: number) {
//         super(nom, vie, attaque, defense);
//     }

//     attaquer(ennemi: Heros<T>): void {
//         const degats = this.attaque - ennemi.defenseValue;
//         ennemi.subirDegats(degats);
//     }
// }

// let hero = new Heros('amine',25,5,10)
// console.log('hero :>> ', hero);

// let monstre = new Monstre('babouche',50,7,30)
// console.log('monstre :>> ', monstre);
// console.log(hero.attaquer(monstre))
// console.log(monstre.subirDegats)
