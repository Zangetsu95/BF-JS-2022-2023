import genererStats from "../utils/genererStats.js";
import modificateur from "../utils/modificateur.js";
import De from "./De.js";

/** Classe représentant un personnage */
class Personnage {

    #_force;
    #_endurance;
    #_pv;

    /**
     * Créer un personnage
     * @param {string} nom Le nom du personnage
     */
    constructor (nom) {
        this.de4 = new De(4);
        this.de6 = new De(6);
        this.nom = nom;
        this.#_force = genererStats();
        this.#_endurance = genererStats();
        this.#_pv = this.endurance + modificateur(this.endurance);
    }

    get force () { return this.#_force; }
    get endurance () { return this.#_endurance; }
    get pv () { return this.#_pv; }

    /**
     * Permet de frapper un personnage cible lui ôtant une certaine quantité de points de vie
     * @param {Personnage} cible Personnage cible de l'attaque
     */
    frapper (cible) {
        if (cible === this || !(cible instanceof Personnage) || cible.#_pv <= 0) return;

        console.log("Pv cible avant attaque : ", cible.#_pv);
        let degats = this.de4.lancer() + modificateur(this.force);
        // cible.pv = cible.pv - degats
        cible.#_pv -= degats;
        console.log(`${this.nom} a infligé ${degats} points de dégats à ${cible.nom}`);
        console.log("Pv cible après attaque : ", cible.#_pv);
    }

    /**
     * Permet de récupérer les détails du personnage
     * @returns {string} Détails du personnage
     */
    toString () {
        let str = `\nNom : ${this.nom} \nForce: ${this.#_force} (${this.force}) \nEndurance: ${this.#_endurance} (${this.endurance}) \nPV: ${this.#_pv} (${this.pv})`;
        return str + "\nInventaire : "
            + ("cuir" in this ? `\n - Cuir: ${this.cuir}` : "")
            + ("or" in this ? `\n - Or: ${this.or}` : "");
    }
}


export default Personnage;