import { ApiProperty } from '@nestjs/swagger';
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
  @ApiProperty()
  name?: string;

  @IsOptional()
  @IsString()
  @MaxLength(50)
  @MinLength(2)
  @ApiProperty()
  description?: string;

  @IsOptional()
  @IsNumber({ maxDecimalPlaces: 2 })
  @IsPositive({ message: 'Le prix doit être positif.' })
  @ApiProperty()
  price?: number;

  @IsOptional()
  @IsNumber(
    { allowNaN: false, allowInfinity: false },
    { message: 'La quantité doit être un nombre.' },
  )
  @IsPositive({ message: 'La quantité doit être positive.' })
  @ApiProperty()
  quantity?: number;

  @IsOptional()
  @IsNumber({}, { message: "L'ID de la catégorie doit être un nombre." })
  // @IsDefined({ message: "L'ID de la catégorie ne peut pas être vide." })
  @ApiProperty()
  category_id?: number;
}
