function Chien (nom, race, couleur) {

    this.nom = nom;
    this.race = race;
    this.couleur = couleur;

    Chien.prototype.aboie = () => "Wouaf";
    Chien.prototype.medaille = function () {
        return `${this.nom} ${this.race} ${this.couleur}`;
    }

}

export { Chien }