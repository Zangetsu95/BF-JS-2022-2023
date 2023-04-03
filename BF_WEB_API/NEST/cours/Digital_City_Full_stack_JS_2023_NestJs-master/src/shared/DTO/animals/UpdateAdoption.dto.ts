import {
  IsDefined,
  IsNumber,
  IsString,
  MaxLength,
  MinLength,
  IsDate,
  IsInt,
  IsPositive,
} from 'class-validator';

import { Transform, TransformFnParams } from 'class-transformer';
import { IsDateString } from '@nestjs/class-validator';

export class UpdateDonation {
  @IsString()
  @MaxLength(15)
  @MinLength(2)
  donatorName: string;

  @IsString()
  @MaxLength(15)
  @MinLength(2)
  itemName: string;

  @IsNumber()
  @IsPositive()
  quantity: number;

  @IsDefined({ message: 'La date de donation ne peut pas être vide.' })
  @IsDateString()
  @MaxLength(10)
  donationDate: Date[];
}
