import { OmitType } from '@nestjs/mapped-types';
import { SupplierDTO } from './Supplier.dto';

export class SupplierCreateDTO extends OmitType(SupplierDTO, ['id']) {}
