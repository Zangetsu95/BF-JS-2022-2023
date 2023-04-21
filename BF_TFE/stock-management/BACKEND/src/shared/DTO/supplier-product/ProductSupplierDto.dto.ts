import { IsNumber } from 'class-validator';

export class ProductSupplierDto {
  @IsNumber()
  productId: number;

  @IsNumber()
  supplierId: number;

  createdProductId?: number;
}
