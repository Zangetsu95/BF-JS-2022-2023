import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
} from '@nestjs/common';
import { UserService } from './user.service';
import { UserEntity } from 'src/shared/entities/user.entity';

@Controller('api/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async findAll(): Promise<UserEntity[]> {
    const users = await this.userService.findAll();
    if (users.length === 0) {
      throw new HttpException('No user found', HttpStatus.NOT_FOUND);
    }
    return users;
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<UserEntity> {
    const user = await this.userService.findOne(+id);
    if (!user) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }

    return user;
  }

  //TODO DTO For NewUserDTO
  @Post()
  async createUser(@Body() userData) {
    return this.userService.create(userData);
  }
  //TODO finir le crud
}
