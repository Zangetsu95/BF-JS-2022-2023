/**
 * Partie 1 - ✏️ Exercice 01
 */

/**
 * Créer un code permettant de créer un compteur classique, avec + 1, -1 et =..., 
 * il faudra typé le tout au maximum, préparer 2 fonctions pour ça
 */

console.warn('Exercice 01');

const btnMoins: HTMLButtonElement | null = document.querySelector('#btnMoins');
const btnPlus: HTMLButtonElement | null = document.querySelector('#btnPlus');
const total: HTMLSpanElement | null = document.querySelector('#total');

let valeur: number;

if (total) valeur = parseInt(total.innerText);

const increment: (e: MouseEvent) => void = (event: MouseEvent) => {
    // event.preventDefault();
    if (total) total.innerText = (++valeur).toString();
};

// const decrement: Function = (event: MouseEvent) => {
const decrement: (e: MouseEvent) => void = (event: MouseEvent) => {
    // event.preventDefault();
    if (total) total.innerText = (--valeur).toString();
};

if (btnPlus) btnPlus.addEventListener('click', increment);
if (btnMoins) btnMoins.addEventListener('click', decrement);

/**
 * Partie 4 - ✏️ Exercice 02
 */

/**
 * Reprendre le code de l'exos 1 et tranformer le tout avec des narrowing et des generics
 */


/**
 * Partie 5 - ✏️ Exercice 03
 */
 
/**
 * Préparer un micro jeu de type heroes vs monster, vous aurez 2 grandes classes, heroes et monster, 
 * le but, étant de pouvoir instancier un nouveau hero et un monstre avec des caractèristiques différentes,
 * ils devront être stocker dans un objet tableau grace a une fonction, 
 * il devront pouvoir s'affronter graçe a des points de vie, d'attaque et de défense,
 * si vous avez terminer dans les temps impartis, vous pouvez améliorer, utilisez votre imagination
 * requis: un generic, un narrowing, des classes, un static, une abstract, le tout entièrement typé !
 * n'hésitez par à utiliser l'html pour ça et le rendre encore plus chouette
 */