import {
  IsDefined,
  IsInt,
  IsNumber,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class SupplierDTO {
  @IsInt({ message: "l'identifiant doit être un nombre entier" })
  @IsDefined({ message: "l'identifiant ne peut pas être vide" })
  id: number;
  /*-------------------------------------------------------- */

  @IsString({
    message: 'Le nom du fournisseur doit être une chaîne de caractères.',
  })
  @IsDefined({ message: 'Le nom du fournisseur ne peut pas être vide.' })
  @MaxLength(15, {
    message: 'Le nom du fournisseur ne peut pas dépasser 15 caractères.',
  })
  @MinLength(2, {
    message: 'Le nom du fournisseur doit comporter au moins 2 caractères.',
  })
  name: string;
  /*-------------------------------------------------------- */

  @IsString({
    message: "L'adresse du fournisseur doit être une chaîne de caractères.",
  })
  @IsDefined({ message: "L'adresse du fournisseur ne peut pas être vide." })
  @MaxLength(25, {
    message: "L'adresse du fournisseur ne peut pas dépasser 15 caractères.",
  })
  @MinLength(2, {
    message: "L'adresse du fournisseur doit comporter au moins 2 caractères.",
  })
  adress: string;
  /*-------------------------------------------------------- */

  @IsString({
    message: 'Le numéro de téléphone doit être une chaîne de caractères.',
  })
  @IsDefined({ message: 'Le numéro de téléphone ne peut pas être vide.' })
  @MaxLength(20, {
    message: 'Le numéro de téléphone ne peut pas dépasser 15 caractères.',
  })
  @MinLength(2, {
    message: 'Le numéro de téléphone doit comporter au moins 2 caractères.',
  })
  phone_number: string;
  /*-------------------------------------------------------- */

  @IsNumber({}, { message: "L'ID du produit doit être un nombre." })
  @IsDefined({ message: "L'ID du produit ne peut pas être vide." })
  product_id: number;
}
