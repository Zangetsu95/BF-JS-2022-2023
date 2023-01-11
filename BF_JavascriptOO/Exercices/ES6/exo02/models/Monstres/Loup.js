import Monstre from "../Monstres/Monstre.js";

class Loup extends Monstre {

    constructor (nom) {
        super(nom);
        this.cuir = this.de4.lancer();
    }

}

export default Loup;