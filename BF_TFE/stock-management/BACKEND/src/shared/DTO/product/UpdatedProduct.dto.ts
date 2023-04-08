import {
  IsDecimal,
  IsDefined,
  IsNumber,
  IsOptional,
  IsPositive,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class UpdateProductDTO {
  @IsOptional()
  @IsString()
  @MaxLength(15)
  @MinLength(2)
  name: string;

  @IsOptional()
  @IsString()
  @MaxLength(20)
  @MinLength(2)
  description: string;

  @IsOptional()
  @IsNumber(
    { allowNaN: false, allowInfinity: false },
    { message: 'Le prix doit être un nombre.' },
  )
  @IsDecimal(
    { decimal_digits: '2' },
    { message: 'Le prix doit être un nombre décimal avec deux décimales.' },
  )
  @IsPositive({ message: 'Le prix doit être positif.' })
  price: number;

  @IsOptional()
  @IsNumber(
    { allowNaN: false, allowInfinity: false },
    { message: 'La quantité doit être un nombre.' },
  )
  @IsPositive({ message: 'La quantité doit être positive.' })
  quantity: number;

  @IsOptional()
  @IsNumber({}, { message: "L'ID de la catégorie doit être un nombre." })
  @IsDefined({ message: "L'ID de la catégorie ne peut pas être vide." })
  category_id: number;
}
