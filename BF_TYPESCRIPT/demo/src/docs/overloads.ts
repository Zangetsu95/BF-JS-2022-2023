/**
 * Partie 7 - Overloads
 * Permet de garder une méthode mais de changer 
 * les types de paramètres et le type de retour
 */

// Dernière ligne : structure globale

// Surcharge de méthodes
function fn (a: string): string;
function fn (a: string, b: string): string;
function fn (a: string, b: string, c: string): string;
function fn (a: string, b?: string, c?: string): string {
    // if (c) return a + ' ' + b + ' ' + c
    // if (b) return a + ' ' + b
    // if (a) return a

    return c ? a + ' ' + b + ' ' + c : b ? a + ' ' + b : a;
}



function fn2 (a: string): number;
function fn2 (a: number): string;
function fn2 (a: boolean): boolean;
function fn2 (a: any): any {
    if (typeof a === 'number') return "Vous avez entré : " + a;
    if (typeof a === 'string') return a.length;
    if (typeof a === 'boolean') return a;
}

export { fn, fn2 };

type Animal = { nom: string, type: string; };

// Surcharge de constructeur
 
class P {

    nom: string;
    prenom: string;
    dateNaissance: Date;
    genre: string;
    animaux: Animal[];

    constructor (nom: string, prenom: string);
    constructor (nom: string, prenom: string, dateNaissance: Date);
    constructor (nom: string, prenom: string, dateNaissance: Date, genre: string);
    constructor (nom: string, prenom: string, dateNaissance: Date, genre: string, animaux: Animal[])
    constructor (nom: string, prenom: string, dateNaissance?: Date, genre?: string, animaux?: Animal[]) {
        this.nom = nom;
        this.prenom = prenom;

        this.dateNaissance = dateNaissance ? dateNaissance : new Date()
        
        this.animaux = animaux ?? []

        this.genre = genre ?? 'N/A'
    }

}

export { Animal, P }