import Personnage from "../Personnage";
class Monstre extends Personnage {

    constructor (nom: string) {
        super(nom);
    }

    toString () {
        return "Monstre" + super.toString()
    }
}

export default Monstre