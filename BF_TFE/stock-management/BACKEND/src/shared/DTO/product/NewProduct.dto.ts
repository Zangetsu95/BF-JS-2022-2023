import { OmitType } from '@nestjs/mapped-types';
import { ProductDTO } from './Product.dto';
import { ApiProperty, ApiTags } from '@nestjs/swagger';

@ApiTags('ProductCreate')
export class ProductCreateDTO extends OmitType(ProductDTO, ['id']) {
  @ApiProperty()
  name: string;

  @ApiProperty()
  description: string;

  @ApiProperty()
  price: number;

  @ApiProperty()
  quantity: number;

  @ApiProperty()
  category_id: number;

  @ApiProperty()
  supplier_id: number;
}
