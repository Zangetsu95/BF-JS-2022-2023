import { OmitType } from '@nestjs/mapped-types';
import { TransactionDTO } from './Transaction.dto';

export class TransactionCreateDTO extends OmitType(TransactionDTO, ['id']) {}
