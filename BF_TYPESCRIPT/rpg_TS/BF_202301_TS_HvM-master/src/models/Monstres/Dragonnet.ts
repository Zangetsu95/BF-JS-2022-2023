import ICuir from "../interfaces/ICuir";
import IOr from "../interfaces/IOr";
import Monstre from "./Monstre";

class Dragonnet extends Monstre implements IOr, ICuir {

    cuir: number;
    or: number;

    constructor (nom: string) {
        super(nom);
        this.cuir = this.de4.lancer();
        this.or = this.de6.lancer();
    }

    get endurance () { return super.endurance + 1 }
    
    toString () {
        return "[Légendaire] " + super.toString()
    }

}

export default Dragonnet;