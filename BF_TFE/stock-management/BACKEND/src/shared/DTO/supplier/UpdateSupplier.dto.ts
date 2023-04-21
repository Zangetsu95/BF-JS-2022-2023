import { ApiProperty } from '@nestjs/swagger';
import {
  IsDefined,
  IsNumber,
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
} from 'class-validator';

export class UpdateSupplierDTO {
  @IsOptional()
  @IsString()
  @MaxLength(15)
  @MinLength(2)
  @ApiProperty()
  name: string;
  /*-------------------------------------------------------- */
  @IsOptional()
  @IsString()
  @MaxLength(20)
  @MinLength(2)
  @ApiProperty()
  adress: string;
  /*-------------------------------------------------------- */
  @IsOptional()
  @IsString()
  @MaxLength(25)
  @MinLength(2)
  @ApiProperty()
  phone_number: string;
  /*-------------------------------------------------------- */
  @IsOptional()
  @IsNumber({}, { message: "L'ID de la catégorie doit être un nombre." })
  @IsDefined({ message: "L'ID de la catégorie ne peut pas être vide." })
  @ApiProperty()
  product_id: number;
}
