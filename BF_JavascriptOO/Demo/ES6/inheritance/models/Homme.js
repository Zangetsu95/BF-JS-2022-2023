import { Personne } from "./Personne.js";

class Homme extends Personne {

    constructor (nom, prenom, dateNaissance, longueurBarbe) {
        super(nom, prenom, 'H', dateNaissance);
        this.longueurBarbe = longueurBarbe;
    }

}

export { Homme };