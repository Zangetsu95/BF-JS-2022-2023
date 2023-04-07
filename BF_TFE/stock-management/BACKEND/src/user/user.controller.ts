import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Put,
  ValidationPipe,
} from '@nestjs/common';
import { UserService } from './user.service';
import { UserEntity } from 'src/shared/entities/user/user.entity';
import { UserCreateDTO } from 'src/shared/DTO/user/NewUser.dto';
import { UpdateUserDTO } from 'src/shared/DTO/user/UpdateUser.dto';

@Controller('api/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  async findAll(): Promise<UserEntity[]> {
    const users = await this.userService.findAll();
    if (users.length === 0) {
      throw new HttpException('Aucun utilisateur trouvé', HttpStatus.NOT_FOUND);
    }
    return users;
  }

  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<UserEntity> {
    const user = await this.userService.findOne(+id);
    if (!user) {
      throw new HttpException('Utilisateur non trouvé', HttpStatus.NOT_FOUND);
    }

    return user;
  }

  @Post()
  async createUser(@Body(ValidationPipe) userData: UserCreateDTO) {
    // return this.userService.create(userData);
    try {
      const createdUser = await this.userService.create(userData);
      return {
        message: 'Utilisateur créé avec succès',
        data: { ...createdUser },
      };
    } catch (err) {
      throw new HttpException(err.message, HttpStatus.BAD_REQUEST);
    }
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body(ValidationPipe) user: UpdateUserDTO,
  ): Promise<{ message: string; data: UserEntity }> {
    try {
      const updatedUser = await this.userService.update(+id, user);
      return {
        message: 'Utilisateur mis à jour avec succès',
        data: { ...updatedUser },
      };
    } catch (err) {
      throw new HttpException(err.message, HttpStatus.BAD_REQUEST);
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    try {
      await this.userService.remove(+id);
    } catch (err) {
      throw new HttpException(err.message, HttpStatus.BAD_REQUEST);
    }
  }
}
