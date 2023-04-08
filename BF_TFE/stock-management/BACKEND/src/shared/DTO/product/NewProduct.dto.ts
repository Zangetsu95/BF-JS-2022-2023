import { OmitType } from '@nestjs/mapped-types';
import { ProductDTO } from './Product.dto';

export class ProductCreateDTO extends OmitType(ProductDTO, ['id']) {}
