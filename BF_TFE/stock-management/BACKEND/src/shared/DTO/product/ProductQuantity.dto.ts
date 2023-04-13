import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsOptional, IsPositive } from 'class-validator';

export class UpdateQuantityProductDTO {
  @IsOptional()
  @IsNumber(
    { allowNaN: false, allowInfinity: false },
    { message: 'La quantité doit être un nombre.' },
  )
  @IsPositive({ message: 'La quantité doit être positive.' })
  @ApiProperty()
  quantity: number;
}
