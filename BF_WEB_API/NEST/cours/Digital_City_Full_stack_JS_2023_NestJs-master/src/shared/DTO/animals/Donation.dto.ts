import {
  IsDefined,
  IsNumber,
  IsString,
  MaxLength,
  MinLength,
  IsDate,
  IsInt,
} from 'class-validator';

import { Transform, TransformFnParams } from 'class-transformer';
import { IsDateString } from '@nestjs/class-validator';

export class DonationDTO {
  @IsInt({ message: "L'identifiant doit être un nombre entier." })
  @IsDefined({ message: "L'identifiant ne peut pas être vide." })
  id: number;

  @IsString({
    message: 'Le nom du donateur doit être une chaîne de caractères.',
  })
  @IsDefined({ message: 'Le nom du donateur ne peut pas être vide.' })
  @MaxLength(15, {
    message: 'Le nom du donateur ne peut pas dépasser 15 caractères.',
  })
  @MinLength(2, {
    message: 'Le nom du donateur doit comporter au moins 2 caractères.',
  })
  donatorName: string;

  @IsString({
    message: "Le nom de l'objet doit être une chaîne de caractères.",
  })
  @IsDefined({ message: "Le nom de l'objet ne peut pas être vide." })
  @MaxLength(15, {
    message: "Le nom de l'objet ne peut pas dépasser 15 caractères.",
  })
  @MinLength(2, {
    message: "Le nom de l'objet doit comporter au moins 2 caractères.",
  })
  itemName: string;

  @IsNumber()
  @IsDefined({ message: 'La quantité ne peut pas être vide.' })
  quantity: number;

  @IsDefined({ message: 'La date de donation ne peut pas être vide.' })
  @IsDateString()
  @MaxLength(10)
  donationDate: Date[];
}
