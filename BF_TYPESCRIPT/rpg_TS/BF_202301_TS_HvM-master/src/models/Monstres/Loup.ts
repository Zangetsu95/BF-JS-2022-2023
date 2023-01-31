import ICuir from "../interfaces/ICuir";
import Monstre from "./Monstre";

class Loup extends Monstre implements ICuir {

    cuir: number;
    
    constructor (nom: string) {
        super(nom);
        this.cuir = this.de4.lancer();
    }

}

export default Loup;