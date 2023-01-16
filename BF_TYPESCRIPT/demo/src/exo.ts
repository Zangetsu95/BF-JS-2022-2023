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

const decrement: (e: MouseEvent) => void = (event: MouseEvent) => {
    // event.preventDefault();
    if (total) total.innerText = (--valeur).toString();
};

if (btnPlus) btnPlus.addEventListener('click', increment);
if (btnMoins) btnMoins.addEventListener('click', decrement);