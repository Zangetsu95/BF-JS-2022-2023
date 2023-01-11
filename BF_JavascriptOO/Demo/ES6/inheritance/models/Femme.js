import { Homme } from "./Homme.js";
import { Personne } from "./Personne.js";

/**
 * Permet de créer un objet Femme
 * @extends {Personne}
 */
class Femme extends Personne {

    /**
     * Constructeur de Femme
     * @param {string} nom Le nom
     * @param {string} prenom Le prénom
     * @param {Date} dateNaissance La date de naissance
     * @param {boolean} estEnceinte Permet de savoir si la femme est enceinte ou non
     */
    constructor (nom, prenom, dateNaissance, estEnceinte) {
        super(nom, prenom, "F", dateNaissance);
        this.estEnceinte = estEnceinte;
    }

    parler (message) {
        return `${this.prenom} gueule "${message}"`;
    }

    /**
     * Permet de créer un petit être innocent
     * @returns {Homme | Femme} Un nouveau né
     */
    accoucher () {
        if (!this.estEnceinte) return;
        console.log(`${this.prenom} accouche`);

        this.estEnceinte = !this.estEnceinte;
        let bebe = Math.floor(Math.random() * 2) % 2
        ? new Homme('Anonyme', 'Anonyme', new Date(), 0)
        : new Femme('Anonyme', 'Anonyme', new Date(), false);

        this.enfants.push(bebe)
        
        return bebe
    }

}

export { Femme };