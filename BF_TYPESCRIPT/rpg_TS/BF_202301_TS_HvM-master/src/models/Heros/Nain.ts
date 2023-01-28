import Heros from "./Heros";

class Nain extends Heros {

    constructor (nom: string) {
        super(nom);
    }

    get endurance (): number { return super.endurance + 2 }

}

export default Nain;