/**
 * Partie 6 - Classes
 */

class Human {
    public gender: string = '';
    public height: number = 0;
    public weight: number = 0;

    private _etnic: string = '';
    protected __colorEyes: string = 'blue';
}

// Encapsulation 
// → Le niveau de portée des propriétés dans le classe

// public       → disponible partout
// protected    → disponible uniquement dans la classe parent et dans les classes enfants (TypeScript !)
// private      → disponible uniquement dans la classe (TypeScript !)
// #            -> cfr. private - rendre invisible en dehors de la classe (JS)

// Héritage
// Transmettre les membres d'une classe parent à ses classes enfants
// Pour faire de l'héritage, on utilise extends
// 🪧 Un parent ne peut pas accéder à une propriété d'un enfant, par contre l'inverse oui !
// 🪧 Le constructeur du parent devra toujours être appelé dans celui de l'enfant

// Intialisation des propriétés
// prop: type = valeur  → Initialisation par défaut des valeurs
// prop!: type          → Pas besoin d'initialiser lors de la déclaration mais doit être initialiser dans le constructeur (sauf abstract)
// prop?: type          → Peut prendre la valeur du type associé ou undefined

class Person extends Human {

    public id: number;
    public name?: string;
    private firstname: string;
    #_password?: string;

    private _upperPassword: Function = (password: string): string => {
        return password.toUpperCase();
    };

    constructor (id: number, name: string, firstname?: string, password?: string) {
        super(); // Permet de créer le parent

        if (!password) password = 'Coucou';
        this.#_password = this._upperPassword(password);
        this.id = id;
        this.name = name;

        this.__colorEyes = 'red';
    }

}

export class MyUser extends Person {

    public login: string = '';

    constructor (id: number, name: string, firstname?: string, password?: string) {
        super(id, name, firstname, password);
        this.__colorEyes = 'yellow';
    }

}

// Duck Typing (y faire attention)
// Si je vois un oiseau qui vole comme un canard, cancane comme un canard, et nage comme un canard
// alors j'appelle cet oiseau un canard

export class Point {
    x: number = 5;
    y: number = 7;
}

export class Geometry {
    x: number = 10;
    y: number = 100;
    other1: string = "OK";
    other2: boolean = true;
}

// Geometry possède les mêmes propriétés que Point (x, y)
// Alors Geometry est un point

export function getX (p: Point) {
    return p.x * p.y;
}

export function getY (p: Point | Geometry) {
    if (p instanceof Geometry) return p.other1;

    return p.x * p.y;
}

// Introduction à l'abstract
// Une classe abstraite est une classe qui ne peut pas être  car elle possède des méthodes abstraites (sans corps)
// Quand une classe possède des méthodes abstraites, cette classe devient elle-même abstraite.
// Obligation de redéfinir les méthodes non implémentées de la classe parent au plus tard dans les classes enfants qui héritent

// Une classe est d'office abstraite si elle possède des méthodes abstraite
// Une classe peut être abstraite MÊME si elle ne possède aucune méthode abstraite

// Le mot-clef 'abstract' peut se mettre sur : une classe, une propriété, un accesseur/mutateur, une fonction

// Utilisation : Permet de créer une certaine structure imposées (non instanciable) où l'on peut déclarer les différents membres :
// (propriétés + getters/setters + méthodes + constructeur) avec ou sans corps (ce qui se trouve entre les accolades d'une fonction)

// Signature d'une fonction : nom de la fonction + paramètres + type de retour
// Prototype d'une fonction : nom de la fonction + paramètres

export abstract class AGeometry {
    x: number;
    y: number;

    logMe (): string { return "Me"; }

    // abstract perimetre (): number;
    // abstract air (): number;
}

export class Triangle extends AGeometry {
    constructor () {
        super();
    }

    perimetre (): number {
        throw new Error("Method not implemented.");
    }

    air (): number {
        throw new Error("Method not implemented.");
    }

}

export class Points extends AGeometry {
    constructor () {
        super();
    }

    perimetre (): number {
        return this.x * this.y;
    }

    air (): number {
        return this.x * this.y;
    }

}

export class Carre extends AGeometry {
    constructor () {
        super();
    }

    logMe (): string {
        return "Ceci est un carré";
    }

    perimetre (): number {
        return this.x * 4;
    }

    air (): number {
        return this.x * this.x;
    }

}

// Exemple plus concret

export abstract class Personne {

    nom: string;
    prenom: string;
    dateNaissance: Date;
    abstract genre: string;

    constructor (nom: string, prenom: string, date: Date) {
        this.nom = nom;
        this.prenom = prenom;
        this.dateNaissance = date;
    }

    parler (message: string): void {
        console.log(this.prenom + ' dit ' + message);
    }

    abstract faireMenage (): void;

    abstract get nomComplet (): string;

}

export class Femme extends Personne {
    genre: string = 'f';
    estEnceinte: boolean = false;

    constructor (nom: string, prenom: string, date: Date, estEnceinte: boolean) {
        super(nom, prenom, date);
        this.estEnceinte = estEnceinte;
    }

    faireMenage (): void {
        console.log(`${this.prenom} fait le ménage`);
    }

    get nomComplet (): string {
        return "Mme. " + this.nom + ' ' + this.prenom;
    }
}

export class Homme extends Personne {
    genre: string = 'h';
    longueurBarbe: number = 0;

    constructor (nom: string, prenom: string, date: Date, longueurBarbe: number) {
        super(nom, prenom, date);
        this.longueurBarbe = longueurBarbe;
    }

    // Redéfinition de méthodes => garder la même signature mais changer le corps
    parler (message: string): void {
        console.log(this.prenom + ' hurle ' + message);
    }

    faireMenage (): void {
        console.log(`${this.prenom} s'enfuit jouer`);
    }

    get nomComplet (): string {
        return "M. " + this.nom + ' ' + this.prenom;
    }
}

// Mot-clefs : Static
// Permet d'accéder aux membres d'une classe sans devoir l'instancier
// Directement sur le nom de la classe (exemple : Calculatrice.PI ou Calculatrice.addition(2, 4))

export class Calculatrice {

    static readonly PI: number = 3.141592;

    static addition (x: number, y: number): number {
        return x + y;
    }

}

export class DateConverter {
    static convertTimeStampToDate (timestamp: string): Date {
        return new Date(parseInt(timestamp));
    }
}

// Mot-clefs : Interface (implements)
// C'est un genre de contract
// Une classe qui implémente une interface se doit d'implémenter tous les membres de celle-ci


// Une interface peut hériter d'une ou plusieurs autres interfaces
//      interface IMonInterface extends IInterface1, IInterface2, ....
// Une classe peut hériter que d'une seule classe
// Une classe peut implémenter une ou plusieurs interfaces
//      class MaClasse extends AutreClasse implements IInterface1, Interface2, ...

// Utilisation : Permet de créer structure imposée contenant uniquement propriétés et les signatures des fonctions

// Différences entre classe abstraite et interface :

/*

Intitulé                                        Classe Abstraite            Interface

Instanciable                                            NON                     NON
Peut contenir des props                                 OUI                     OUI
Peut contenir des fonctions implémentées                OUI                     NON
...

*/

export interface Vehicule {
    nbRoues: number;
}

export interface ILogger {
    log (): string;
}

export interface Action {
    avance (vitesseActuelle: number): number;
    recule (vitesseActuelle: number): number;
}

export interface Voiture extends Vehicule, Action {
    carburant: string;
    typeMoteur: string;
    giletJaune: number;
    boiteVitesse: { auto: boolean, manuel: boolean; };

    
}

export class Audi implements Voiture, ILogger {
    
    nbRoues: number;
    modele: string = '';

    carburant: string = 'diesel';
    typeMoteur: string;
    giletJaune: number;
    boiteVitesse: { auto: boolean; manuel: boolean; } = { auto: true, manuel: false };

    avance (vitesseActuelle: number): number {
        throw new Error("Method not implemented.");
    }
    recule (vitesseActuelle: number): number {
        throw new Error("Method not implemented.");
    }

    log (): string {
        throw new Error("Method not implemented.");
    }

}


class VW implements Voiture {
    nbRoues: number;
    carburant: string;
    typeMoteur: string;
    giletJaune: number;
    boiteVitesse: { auto: boolean; manuel: boolean; };
    avance (vitesseActuelle: number): number {
        throw new Error("Method not implemented.");
    }
    recule (vitesseActuelle: number): number {
        throw new Error("Method not implemented.");
    }

}

