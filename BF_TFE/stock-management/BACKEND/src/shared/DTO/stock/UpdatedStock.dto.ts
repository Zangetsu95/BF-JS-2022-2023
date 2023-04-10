import { IsDefined, IsNumber, IsOptional, IsPositive } from 'class-validator';

export class UpdateStockDTO {
  @IsOptional()
  @IsNumber({}, { message: "L'ID du produt doit être un nombre." })
  @IsDefined({ message: "L'ID du produt ne peut pas être vide." })
  product_id: number;

  @IsOptional()
  @IsNumber(
    { allowNaN: false, allowInfinity: false },
    { message: 'La quantité doit être un nombre.' },
  )
  @IsPositive({ message: 'La quantité doit être positive.' })
  quantity: number;
}
