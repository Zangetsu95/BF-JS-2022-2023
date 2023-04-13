import { ApiProperty } from '@nestjs/swagger';
import {
  IsEmail,
  IsOptional,
  IsString,
  Length,
  MaxLength,
  MinLength,
} from 'class-validator';

export class UpdateUserDTO {
  @IsOptional()
  @IsString()
  @MaxLength(15)
  @MinLength(2)
  @ApiProperty()
  username?: string;

  @IsOptional()
  @IsEmail()
  @ApiProperty()
  email?: string;

  @IsOptional()
  @Length(8, 20)
  @ApiProperty()
  password?: string;
}
