import Monstre from "./Monstre.js";

class Orque extends Monstre {

    constructor (nom) {
        super(nom);
        this.or = this.de6.lancer();
    }

    get force () { return super.force + 1 }

}

export default Orque;