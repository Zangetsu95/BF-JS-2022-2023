/**
 * Partie 4 - Custom Types
 * Permet de créer ses propres types
 */

// Avantage des custom types, pas besoin de classe 
// avec constructeur et instanciation

type Admin = { roleId: number, lastName: string, firstName: string; };

type Id = string | number;

type Admin2 = { roleId: Id, lastName: string, firstName: string; };

type DateString = string


export { Admin, Admin2, Id, DateString }

