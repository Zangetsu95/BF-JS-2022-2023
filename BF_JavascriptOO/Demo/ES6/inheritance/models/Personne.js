class Personne {

    // Constructeur
    constructor (nom, prenom, sexe, dateNaissance) {
        this.nom = nom;
        this.prenom = prenom;
        this.sexe = sexe;
        this.dateNaissance = dateNaissance;
        this.enfants = []
    }

    parler (message) {
        return `${this.prenom} dit "${message}"`;
    }

}

export { Personne };