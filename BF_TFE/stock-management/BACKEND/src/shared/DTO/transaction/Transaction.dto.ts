import {
  IsDate,
  IsDateString,
  IsDefined,
  IsInt,
  IsNumber,
  IsPositive,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class TransactionDTO {
  @IsInt({ message: "l'identifiant doit être un nombre entier" })
  @IsDefined({ message: "l'identifiant ne peut pas être vide" })
  id: number;

  @IsNumber({}, { message: "L'ID du produit doit être un nombre." })
  @IsDefined({ message: "L'ID du produit ne peut pas être vide." })
  product_id: number;

  @IsNumber({}, { message: "L'ID de l'user doit être un nombre." })
  @IsDefined({ message: "L'ID de l'user ne peut pas être vide." })
  user_id: number;

  @IsDefined({ message: 'La date de donation ne peut pas être vide.' })
  @IsDateString()
  @MaxLength(10)
  date: Date[];

  @IsString()
  @MinLength(2, {
    message: 'La déscription doit comporter au moins 2 caractères.',
  })
  @MaxLength(10)
  type: string;

  @IsNumber()
  @IsPositive()
  quantity: number;

  @IsNumber()
  @IsPositive()
  price: number;
}
