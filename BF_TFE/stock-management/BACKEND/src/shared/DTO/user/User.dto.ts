import {
  IsDefined,
  IsEmail,
  IsInt,
  IsNotEmpty,
  IsString,
  Length,
  MaxLength,
  MinLength,
} from 'class-validator';

export class UserDTO {
  @IsInt({ message: "l'identifiant doit être un nombre entier" })
  @IsDefined({ message: "l'identifiant ne peut pas être vide" })
  id: number;

  @IsString({
    message: 'Le pseudo doit être une chaîne de caractères.',
  })
  @IsDefined({ message: 'Le pseudo ne peut pas être vide.' })
  @MaxLength(15, {
    message: 'Le pseudo ne peut pas dépasser 15 caractères.',
  })
  @MinLength(2, {
    message: 'Le nom du donateur doit comporter au moins 2 caractères.',
  })
  username: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsNotEmpty({ message: 'Le mot de passe est requis' })
  @Length(8, 20, {
    message: 'Le mot de passe doit avoir entre 8 et 20 caractères',
  })
  password: string;

  role: string;
}
