import Heros from "../Heros/Heros.js";

class Humain extends Heros {

    constructor (nom) {
        super(nom);
    }

    get force () { return super.force + 1 }
    get endurance () { return super.endurance + 1 }

}

export default Humain;