import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/shared/entities/user/user.entity';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { UserCreateDTO } from 'src/shared/DTO/user/NewUser.dto';
import { UpdateUserDTO } from 'src/shared/DTO/user/UpdateUser.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity) private userRepo: Repository<UserEntity>,
  ) {}

  /**
   * This function asynchronously retrieves all user entities from a repository and throws an HTTP
   * exception if an error occurs.
   * @returns An array of UserEntity objects wrapped in a Promise is being returned.
   */
  async findAll(): Promise<UserEntity[]> {
    try {
      return await this.userRepo.find();
    } catch (error) {
      throw new HttpException(
        'Une erreur est survenue lors de la récupération des utilisateurs',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  /**
   * This is an asynchronous function that finds a user by their ID and returns their information,
   * throwing an error if the user is not found.
   * @param {number} id - The id parameter is a number that is used to search for a specific user in
   * the database. It is passed as an argument to the findOne method.
   * @returns The `findOne` method returns a `Promise` that resolves to a `UserEntity` object. If the
   * user is not found, it throws an `HttpException` with a `NOT_FOUND` status.
   */
  async findOne(id: number): Promise<UserEntity> {
    const user = await this.userRepo.findOne({
      where: { id },
      select: ['id', 'username', 'email', 'role'],
    });

    if (!user) {
      throw new HttpException('Utilisateur non trouvé', HttpStatus.NOT_FOUND);
    }

    return user;
  }

  async findOneByEmail(email: string): Promise<UserEntity | undefined> {
    return this.userRepo.findOne({
      where: { email },
      select: ['email', 'password', 'role'],
    });
  }

  /**
   * This function creates a new user entity with a hashed password and saves it to the user
   * repository.
   * @param {UserCreateDTO} user - UserCreateDTO object containing the information needed to create a
   * new user, including username, email, and password.
   * @returns a Promise that resolves to a UserEntity object.
   */
  async create(user: UserCreateDTO): Promise<UserEntity> {
    const newUser = new UserEntity();
    const salt = await bcrypt.genSalt();
    const password = await bcrypt.hash(user.password, salt);

    newUser.username = user.username;
    newUser.email = user.email;
    newUser.role = 'user'; // définir la valeur de "role"
    newUser.password = password;

    try {
      const savedUser = await this.userRepo.save(newUser);
      return savedUser;
    } catch (error) {
      throw new HttpException(
        "Une erreur est survenue lors de la création de l'utilisateur",
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  /**
   * This is an async function that updates a user's information, including their password if provided,
   * and returns the updated user entity.
   * @param {number} id - The ID of the user to be updated.
   * @param {UpdateUserDTO} user - The `user` parameter is an object of type `UpdateUserDTO` which
   * contains the updated information for a user. It may include properties such as `username`,
   * `email`, and `password`.
   * @returns This function returns a Promise that resolves to a UserEntity object after updating the
   * user's information in the database.
   */
  async update(id: number, user: UpdateUserDTO): Promise<UserEntity> {
    const userToUpdate = await this.userRepo.findOne({ where: { id } });

    if (!userToUpdate) {
      throw new HttpException('Utilisateur non trouvé', HttpStatus.NOT_FOUND);
    }

    try {
      // Vérifiez si l'utilisateur a fourni un nouveau mot de passe
      if (user.password) {
        const salt = await bcrypt.genSalt();
        const password = await bcrypt.hash(user.password, salt);
        userToUpdate.password = password;
      }

      // Mettez à jour les autres propriétés de l'utilisateur si elles sont fournies
      if (user.username) {
        userToUpdate.username = user.username;
      }
      if (user.email) {
        userToUpdate.email = user.email;
      }

      return this.userRepo.save(userToUpdate);
    } catch (error) {
      throw new HttpException(
        `Impossible de mettre à jour l'utilisateur: ${error.message}`,
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  /**
   * This is an asynchronous function that removes a user from a repository by their ID.
   * @param {number} id - The "id" parameter is a number that represents the unique identifier of a
   * user that needs to be removed from the database. The "remove" function is an asynchronous function
   * that uses the "delete" method of the "userRepo" object to delete the user with the specified "id"
   * from the
   */
  async remove(id: number): Promise<void> {
    await this.userRepo.delete(id);
  }
}
