import { OmitType } from '@nestjs/mapped-types';
import { StockDTO } from './Stock.dto';

export class StockCreateDTO extends OmitType(StockDTO, ['id']) {}
