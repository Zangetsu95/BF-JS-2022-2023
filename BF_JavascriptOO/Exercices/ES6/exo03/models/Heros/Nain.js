import Heros from "../Heros/Heros.js";

class Nain extends Heros {

    constructor (nom) {
        super(nom);
    }

    get endurance () { return super.endurance + 2 }

}

export default Nain;