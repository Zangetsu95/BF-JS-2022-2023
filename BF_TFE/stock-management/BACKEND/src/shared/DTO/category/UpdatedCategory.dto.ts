import { ApiProperty } from '@nestjs/swagger';
import { IsOptional, IsString, MaxLength, MinLength } from 'class-validator';

export class UpdateCategoryDTO {
  @IsOptional()
  @IsString()
  @MaxLength(15)
  @MinLength(2)
  @ApiProperty()
  name?: string;
}
