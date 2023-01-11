function Personne (nom, prenom, dateNaissance, interets) {

    this.nom = nom;
    this.prenom = prenom;
    this.dateNaissance = dateNaissance;
    this.interets = interets;

    Personne.prototype.parler = function () { return "Coucou"; };
}

export { Personne };