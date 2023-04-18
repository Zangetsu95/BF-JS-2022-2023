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
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';
import { UserService } from './user.service';
import { UserEntity } from 'src/shared/entities/user/user.entity';
import { UserCreateDTO } from 'src/shared/DTO/user/NewUser.dto';
import { UpdateUserDTO } from 'src/shared/DTO/user/UpdateUser.dto';
import {
  ApiBearerAuth,
  ApiBody,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { UserDTO } from 'src/shared/DTO/user/User.dto';
import { UpdateProductDTO } from 'src/shared/DTO/product/UpdatedProduct.dto';
import { AuthGuard } from 'src/auth/auth.guard';
import { RoleGuard } from 'src/auth/role.guard';
import { Roles } from 'src/auth/roles.decorator';

@ApiTags('Getsion des utilisateurs')
@Controller('api/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @ApiOperation({ summary: 'Get all users' })
  @ApiResponse({ type: UserDTO })
  @Get()
  /**
   * This function retrieves all user entities and throws an exception if none are found.
   * @returns The `findAll()` method returns a Promise that resolves to an array of `UserEntity`
   * objects. If there are no users found, it throws an `HttpException` with a message "Aucun
   * utilisateur trouvé" and a status code of `HttpStatus.NOT_FOUND`.
   */
  async findAll(): Promise<UserDTO[]> {
    const users = await this.userService.findAll();
    if (users.length === 0) {
      throw new HttpException('Aucun utilisateur trouvé', HttpStatus.NOT_FOUND);
    }
    return users;
  }

  @UseGuards(AuthGuard, RoleGuard)
  @ApiBearerAuth('access_token')
  @Roles('admin')
  @ApiOperation({ summary: 'Get one user avec son ID' })
  @ApiParam({ required: true, name: 'userID', example: '1' })
  @ApiResponse({ type: UserDTO })
  @Get(':id')
  /**
   * This is an asynchronous function that finds a user by their ID and returns it, or throws an error
   * if the user is not found.
   * @param {number} id - The id parameter is a number that is passed as a route parameter to the
   * findOne() method. It is decorated with the ParseIntPipe, which ensures that the value is parsed as
   * an integer before it is passed to the method.
   * @returns a Promise that resolves to a UserEntity object. If the user is not found, it throws an
   * HttpException with a message "Utilisateur non trouvé" and a status code of 404 (NOT_FOUND).
   */
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<UserDTO> {
    const user = await this.userService.findOne(+id);
    if (!user) {
      throw new HttpException('Utilisateur non trouvé', HttpStatus.NOT_FOUND);
    }

    return user;
  }

  // @UseGuards(AuthGuard, RoleGuard)
  // @ApiBearerAuth('access_token')
  // @Roles('admin')
  @ApiOperation({ summary: "Création d'un user" })
  @ApiBody({ type: UserCreateDTO })
  @ApiResponse({ type: UserDTO })
  @Post()
  /**
   * This is an async function that creates a user with input data and returns a success message with
   * the created user's data or throws an HTTP exception with a bad request message.
   * @param {UserCreateDTO} userData - userData is a parameter of type UserCreateDTO that is passed to
   * the createUser method using the @Body decorator and validated using the ValidationPipe. It
   * contains the data required to create a new user, such as the user's name, email, and password.
   * @returns This function is returning an object with a message and data property. The message
   * property is a string indicating that the user has been successfully created, and the data property
   * is an object containing the created user's information. If an error occurs during the creation
   * process, a HttpException with a BAD_REQUEST status code is thrown.
   */
  async createUser(
    @Body(ValidationPipe) userData: UserCreateDTO,
  ): Promise<{ message: string; data: UserDTO }> {
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

  @UseGuards(AuthGuard, RoleGuard)
  @ApiBearerAuth('access_token')
  @Roles('admin')
  @ApiOperation({ summary: "Modification d'un user" })
  @ApiBody({ type: UpdateProductDTO })
  @ApiResponse({ type: UserDTO })
  @ApiParam({ required: true, name: 'userID', example: '5' })
  @Put(':id')
  /**
   * This is an async function that updates a user with the given ID using the data provided in the
   * request body, and returns a success message along with the updated user data.
   * @param {number} id - a number parameter that is being passed as a route parameter in the URL.
   * @param {UpdateUserDTO} user - The `user` parameter is of type `UpdateUserDTO`, which is a data
   * transfer object used to update a user's information. It is passed in the request body and
   * validated using the `ValidationPipe`.
   * @returns This function returns a Promise that resolves to an object containing a message and data.
   * The message is a string indicating that the user has been successfully updated, and the data is an
   * object containing the updated user entity. If an error occurs during the update process, an
   * HttpException with a status code of 400 (Bad Request) is thrown.
   */
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

  @UseGuards(AuthGuard, RoleGuard)
  @ApiBearerAuth('access_token')
  @Roles('admin')
  @ApiOperation({ summary: 'supprimer un utilisateur' })
  @ApiResponse({ type: UserDTO })
  @ApiParam({ required: true, name: 'userID', example: '5' })
  @Delete(':id')
  /**
   * This is an asynchronous function that removes a user by their ID and throws an HTTP exception if
   * there is an error.
   * @param {number} id - a number parameter passed as a route parameter in the URL. It is extracted
   * using the @Param decorator from the @nestjs/common package.
   */
  async remove(@Param('id') id: number): Promise<void> {
    try {
      await this.userService.remove(+id);
    } catch (err) {
      throw new HttpException(err.message, HttpStatus.BAD_REQUEST);
    }
  }
}
