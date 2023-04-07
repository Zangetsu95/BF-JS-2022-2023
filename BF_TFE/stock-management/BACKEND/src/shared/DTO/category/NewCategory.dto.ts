import { OmitType } from '@nestjs/swagger';
import { CategoryDTO } from './Category.dto';

export class CategoryCreateDTO extends OmitType(CategoryDTO, ['id']) {}
