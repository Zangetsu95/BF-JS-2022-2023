class Personne {
    // Attributs
    // nom
    // prenom
    // sexe
    // dateNaissance
    // interets

    constructor(nom = "Anonyme", prenom, sexe, dateNaissance, ...interets) {
        this.nom = nom
        this.prenom = prenom
        this.sexe = sexe
        this.dateNaissance = dateNaissance
        this.interets = [...interets]
        this.nomComplet = () => `${this.nom} ${this.prenom}`
    }

    parler(message) {
        return `${this.nomComplet()} dit "${message}"`
    }
}

let p = new Personne("Geerts", "Quentin", "Homme", new Date(1996, 3, 3), "Développement", "High-tech", "One Piece" , "Jeux-vidéos")
let p2 = new Personne("Geerts", "Mélanie", "Femme", new Date(1989, 4, 8), "MindMap", "Salsa")

let p3 = new Personne()

console.log('p :>> ', p);
console.log('p2 :>> ', p2);
console.log('p3 :>> ', p3);

console.log(p.nomComplet());
console.log(p2.nomComplet());

console.log(p.parler("Coucou"));
console.log(p2.parler("Coucou"));