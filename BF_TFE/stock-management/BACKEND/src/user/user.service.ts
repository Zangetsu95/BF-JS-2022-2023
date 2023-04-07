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

  async remove(id: number): Promise<void> {
    await this.userRepo.delete(id);
  }
}
