function Cours (intitule, responsable, nbHeures) {
    this.intitule = intitule;
    this.responsable = responsable;
    this.nbHeures = nbHeures;

    Cours.prototype.details = function() {
        // Javascript (Quentin) - 36 heures
        return `${this.intitule} (${this.responsable}) - ${this.nbHeures} heures`
    }
}

export { Cours }