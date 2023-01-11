import Monstre from "./Monstre.js";

class Dragonnet extends Monstre {

    constructor (nom) {
        super(nom);
        this.cuir = this.de4.lancer();
        this.or = this.de6.lancer();
    }

    
    toString () {
        return "[Légendaire] " + super.toString()
    }

}

export default Dragonnet;