import { OmitType } from '@nestjs/mapped-types';
import { UserDTO } from './User.dto';

export class UserCreateDTO extends OmitType(UserDTO, ['id']) {}
