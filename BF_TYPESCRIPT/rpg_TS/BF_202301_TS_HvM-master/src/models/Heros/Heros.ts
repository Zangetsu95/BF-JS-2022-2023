import Personnage from "../Personnage";
import Monstre from "../Monstres/Monstre";

import IOr from '../interfaces/IOr'
import ICuir from '../interfaces/ICuir'

/** 
 * Personnage Héros
 */
class Heros extends Personnage implements IOr, ICuir {
    
    or: number;
    cuir: number;

    constructor (nom: string) {
        super(nom);
        this.or = 0;
        this.cuir = 0;
    }

    /**
     * Permet de ramasser le cuir et/ou l'or d'un monstre
     * @param {Monstre} monstre Le monstre à fouiller
     */
    loot (monstre: Monstre) {

        // A commenter pour les tests
        if (monstre.pv > 0 || !(monstre instanceof Monstre)) return;

        if ('or' in monstre) {
            this.or += (monstre as IOr).or;
            console.log(`Vous avez récupéré ${monstre.or} or sur ${monstre.nom}`);
            monstre.or = 0;
        }

        if ("cuir" in monstre) {
            this.cuir += (monstre as ICuir).cuir;
            // Permet de récupérer le nom de la classe
            console.log(`Vous avez récupéré ${monstre.cuir} cuirs sur ${monstre.constructor.name}`);
            monstre.cuir = 0;
        }

    }

    toString () {
        return "Héros" + super.toString();
    }
}

export default Heros;