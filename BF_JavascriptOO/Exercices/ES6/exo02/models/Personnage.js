import genererStats from "../utils/genererStats.js";
import modificateur from "../utils/modificateur.js";
import De from "./De.js";

/** Classe représentant un personnage */
class Personnage {

    /**
     * Créer un personnage
     * @param {string} nom Le nom du personnage
     */
    constructor (nom) {
        this.de4 = new De(4);
        this.de6 = new De(6);
        this.nom = nom;
        this.force = genererStats();
        this.endurance = genererStats();
        this.pv = this.endurance + modificateur(this.endurance);
    }

    /**
     * Permet de frapper un personnage cible lui ôtant une certaine quantité de points de vie
     * @param {Personnage} cible Personnage cible de l'attaque
     */
    frapper (cible) {
        if (cible === this || !(cible instanceof Personnage) || cible.pv <= 0) return;

        console.log("Pv cible avant attaque : ", cible.pv);
        let degats = this.de4.lancer() + modificateur(this.force);
        // cible.pv = cible.pv - degats
        cible.pv -= degats;
        console.log(`${this.nom} a infligé ${degats} points de dégats à ${cible.nom}`);
        console.log("Pv cible après attaque : ", cible.pv);
    }

    /**
     * Permet de récupérer les détails du personnage
     * @returns {string} Détails du personnage
     */
    toString () {
        let str = `\nNom : ${this.nom} \nForce: ${this.force} \nEndurance: ${this.endurance} \nPV: ${this.pv}`
        return str + "\nInventaire : "
            + ( "cuir" in this ? `\n - Cuir: ${this.cuir}` : "" )
            + ( "or" in this ? `\n - Or: ${this.or}` : "" );
    }
}


export default Personnage;