import Heros from "./Heros";

class Humain extends Heros {

    constructor (nom: string) {
        super(nom);
    }

    get force (): number { return super.force + 1 }
    get endurance (): number { return super.endurance + 1 }

}

export default Humain;