/**
 * Partie 5 - Generics
 */

/*
    Fonctions génériques
*/

export function identity (arg: any) : any {
    return arg
}

// function idNumber (arg: number) {
//     // ...
//     return arg
// }

// function idString (arg: string) {
//     // ...
//     return arg
// }

// function idBoolean(arg: string) {
//     // ...
//     return arg
// }

// function idAll (arg: any) {

//     if (typeof arg === 'number') // ...
//     if (typeof arg === 'string') // ...
//     if (typeof arg === 'boolean') // ...

//     return arg
// }

// Création d'une fonction généric
export function identity2<Type>(arg: Type): Type {

    // Type ...

    return arg
}

const tab: Array<number> = [1, 2, 3]

export function identity3<T1, T2> (arg1: T1, arg2: T2): T1 | T2 {
    if (typeof arg1 === typeof arg2) return arg1
    else return arg2
}

export function identity4<Type> (args: Type[]): Type[] {
    console.log(args.length);
    return args
}

/*
    Classes génériques
*/

export class GenericNumber<T> {
    zeroValue: T
    add: (x: T, y: T) => T
}

/*
    Interface
*/

interface IMyLength {
    length: number
}

// Permet de créer une fonction générique basée sur une interface
// → Filtrer les types avec ceux uniquement qui possèdent les propriétés de l'interface
export function loggingI <Type extends IMyLength> (arg: Type) : Type {
    console.log('Length :>>', arg.length);
    return arg
}

export function getProperty<Type, Key extends keyof Type> (obj: Type, key: Key) {
    return obj[key]
}

export class Mathematique<T extends number, U extends number> {
    add: (x: T, y: U) => T
    sub: (x: T, y: U) => T
}