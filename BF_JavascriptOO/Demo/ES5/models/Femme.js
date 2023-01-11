import { Personne } from "./Personne.js";

function Femme (nom, prenom, dateNaissance, interets, estEnceinte) {

    Personne.call(this, nom, prenom, dateNaissance, interets);
    // this.nom = nom;
    // this.prenom = prenom;
    // this.dateNaissance = dateNaissance;
    // this.interets = interets;
    this.estEnceinte = estEnceinte;

    Femme.prototype.seMaquiller = function () { return "Zzzzzzz"; };


    Femme.prototype = Object.create(Personne.prototype);
    Femme.prototype.constructor = Femme;
}

export { Femme };