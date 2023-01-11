import { Personne } from "./Personne.js";

function Homme (nom, prenom, dateNaissance, interets, aCalvitie) {

    Personne.call(this, nom, prenom, dateNaissance, interets);
    // this.nom = nom;
    // this.prenom = prenom;
    // this.dateNaissance = dateNaissance;
    // this.interets = interets;
    this.aCalvitie = aCalvitie;


    Homme.prototype.seRaser = function () { return "Zzzzzzz"; };

    Homme.prototype = Object.create(Personne.prototype);
    Homme.prototype.constructor = Homme;
}

export default Homme;