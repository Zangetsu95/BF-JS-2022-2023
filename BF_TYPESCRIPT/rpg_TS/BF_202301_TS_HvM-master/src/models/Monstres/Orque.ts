import IOr from "../interfaces/IOr";
import Monstre from "./Monstre";

class Orque extends Monstre implements IOr {

    or: number;

    constructor (nom: string) {
        super(nom);
        this.or = this.de6.lancer();
    }

    get force () { return super.force + 1 }

}

export default Orque;