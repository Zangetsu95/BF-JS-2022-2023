import {
  IsDecimal,
  IsDefined,
  IsInt,
  IsNumber,
  IsPositive,
  IsString,
  Matches,
  MaxLength,
  MinLength,
  Validate,
} from 'class-validator';

export class ProductDTO {
  @IsInt({ message: "l'identifiant doit être un nombre entier" })
  @IsDefined({ message: "l'identifiant ne peut pas être vide" })
  id: number;
  /*-------------------------------------------------------- */
  @IsString({
    message: 'Le nom du produit doit être une chaîne de caractères.',
  })
  @IsDefined({ message: 'Le nom du produit ne peut pas être vide.' })
  @MaxLength(15, {
    message: 'Le nom du produit ne peut pas dépasser 15 caractères.',
  })
  @MinLength(2, {
    message: 'Le nom du produit doit comporter au moins 2 caractères.',
  })
  name: string;
  /*-------------------------------------------------------- */
  @IsString({
    message: 'La déscription doit être une chaîne de caractères.',
  })
  @IsDefined({ message: 'La déscription ne peut pas être vide.' })
  @MaxLength(35, {
    message: 'La déscription ne peut pas dépasser 35 caractères.',
  })
  @MinLength(2, {
    message: 'La déscription doit comporter au moins 2 caractères.',
  })
  description: string;
  /*-------------------------------------------------------- */
  @IsNumber({ maxDecimalPlaces: 2 })
  @IsPositive()
  price: number;
  /*-------------------------------------------------------- */
  @IsPositive({ message: 'La quantité doit être positive.' })
  quantity: number;

  @IsNumber({}, { message: "L'ID de la catégorie doit être un nombre." })
  @IsDefined({ message: "L'ID de la catégorie ne peut pas être vide." })
  category_id: number;
}
