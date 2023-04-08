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
  name: string;
  /*-------------------------------------------------------- */
  @IsOptional()
  @IsString()
  @MaxLength(20)
  @MinLength(2)
  adress: string;
  /*-------------------------------------------------------- */
  @IsOptional()
  @IsString()
  @MaxLength(15)
  @MinLength(2)
  phone_number: string;
  /*-------------------------------------------------------- */
  @IsOptional()
  @IsNumber({}, { message: "L'ID de la catégorie doit être un nombre." })
  @IsDefined({ message: "L'ID de la catégorie ne peut pas être vide." })
  product_id: number;
}
