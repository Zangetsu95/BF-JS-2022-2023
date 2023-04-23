import { ApiProperty } from '@nestjs/swagger';
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
  @ApiProperty()
  id: number;

  @IsNumber({}, { message: "L'ID du produit doit être un nombre." })
  @IsDefined({ message: "L'ID du produit ne peut pas être vide." })
  @ApiProperty()
  product_id: number;

  @IsNumber({}, { message: "L'ID de l'user doit être un nombre." })
  @IsDefined({ message: "L'ID de l'user ne peut pas être vide." })
  @ApiProperty()
  user_id: number;

  @IsDefined({ message: 'La date de tranasction ne peut pas être vide.' })
  @IsDateString()
  @MaxLength(30)
  @ApiProperty()
  date: Date[];

  @IsString()
  @MinLength(2, {
    message: 'La déscription doit comporter au moins 2 caractères.',
  })
  @MaxLength(10)
  @ApiProperty()
  type: string;

  @IsNumber()
  @IsPositive()
  @ApiProperty()
  quantity: number;

  @IsNumber()
  @IsPositive()
  @ApiProperty()
  price: number;
}
