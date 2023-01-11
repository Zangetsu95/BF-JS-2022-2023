import Personnage from "../Personnage.js";
class Monstre extends Personnage {

    constructor (nom) {
        super(nom);
    }

    toString () {
        return "Monstre" + super.toString()
    }
}

export default Monstre