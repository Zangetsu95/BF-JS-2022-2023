import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { UserEntity } from 'src/shared/entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(UserEntity) private userRepo: Repository<UserEntity>,
  ) {}

  async findAll(): Promise<UserEntity[]> {
    return this.userRepo.find();
  }

  async findOne(id: number): Promise<UserEntity> {
    return this.userRepo.findOne({ where: { id } });
  }

  //TODO create the UserCreateDTO
  async create(user): Promise<UserEntity> {
    return this.userRepo.save(user);
  }

  //TODO create the UserUpdateDTO
  async update(id: number, user): Promise<UserEntity> {
    await this.userRepo.update(id, user);
    return this.userRepo.findOne({ where: { id } });
  }

  async remove(id: number): Promise<void> {
    await this.userRepo.delete(id);
  }
}
