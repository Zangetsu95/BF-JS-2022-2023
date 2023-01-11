/**
 * Notion d'objet en JS
 */ 
let objet = {};
console.log('objet :>> ', objet);

let personne = {
    nom: ['Geerts', 'Quentin'],
    age: 26,
    sexe: 'masculin',
    interets: ['Développement', 'One Piece', 'jeux-vidéos'],
    bio: function () {
        return `${this.nom[0]} ${this.nom[1]} a ${this.age} ans. La personne aime ${this.interets[1]}`
    }
}

/**
 * Notion avec un point
 */ 

// Opérateur d'accès aux membres : .

console.dir(personne);
console.log('personne.nom[1] :>> ', personne.nom[1]);
console.log('personne.bio() :>> ', personne.bio());

// Notation avec les crochets

personne = {
    nom: {
        nomFamille: 'Geerts', 
        prenom: 'Quentin'
    },
    sexe: 'masculin',
    interets: ['Développement', 'One Piece', 'jeux-vidéos'],
    bio: function () {
        return `${this.nom[0]} ${this.nom[1]} a ${this.age} ans. La personne aime ${this.interets[1]}`
    }
}

console.log('personne.nom.nomFamille :>> ', personne.nom.nomFamille);
console.log('personne.nom["prenom"] :>> ', personne.nom["prenom"]);

// Création de nouveaux membres
personne['yeux'] = "marron";
console.log('personne.yeux :>> ', personne.yeux);

personne.auRevoir = () => "Il va bientôt être l'heure d'aller manger."
console.log('personne.auRevoir() :>> ', personne.auRevoir());

let userInputMember = "age";
let userInputValue = 26;

personne[userInputMember] = userInputValue; // OK

// N'est pas correcte car ça ajouterait un membre appelé "userInputMember" et non "age"
// personne.userInputMember = userInputValue; // Pas ok

console.log('personne.age :>> ', personne.age);

// Mot-clef = this
// Fais référence à l'objet courant
