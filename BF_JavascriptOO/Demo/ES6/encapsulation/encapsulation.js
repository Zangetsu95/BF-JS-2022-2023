class Personne {

    #_nom;
    #_prenom;
    #_sexe;
    #_dateNaissance;

    constructor (nom, prenom, sexe, dateNaissance) {

        this.#_nom = nom;
        this.#_prenom = prenom;
        this.#_sexe = sexe;
        this.#_dateNaissance = dateNaissance;
    }

    /**
     * Getters & Setters
     */

    // Getters = Accesseurs = Récupérer la valeur
    get nom () { return this.#_nom; }
    get nomComplet () { return this.#_nom + " " + this.#_prenom; }

    // Setters = Mutateurs = Modifier la valeur
    set nom (nouveauNom) { this.#_nom = nouveauNom }

}

let p = new Personne('Geerts', 'Quentin', 'M', new Date());
console.log('p :>> ', p);

console.log(p.nom); // get nom | this.nom
console.log(p.nomComplet);

p.nom = "Dupont";