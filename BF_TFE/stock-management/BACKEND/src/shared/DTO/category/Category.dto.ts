import { ApiProperty } from '@nestjs/swagger';
import {
  IsDefined,
  IsInt,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class CategoryDTO {
  @IsInt({ message: "l'identifiant doit être un nombre entier" })
  @IsDefined({ message: "l'identifiant ne peut pas être vide" })
  @ApiProperty()
  id: number;

  @IsString({
    message: 'Le nom de la catégorie doit être une chaîne de caractères.',
  })
  @IsDefined({ message: 'Le nom de la catégorie ne peut pas être vide.' })
  @MaxLength(40, {
    message: 'Le nom de la catégorie ne peut pas dépasser 15 caractères.',
  })
  @MinLength(2, {
    message: 'Le nom de la catégorie doit comporter au moins 2 caractères.',
  })
  @ApiProperty()
  name: string;
}
