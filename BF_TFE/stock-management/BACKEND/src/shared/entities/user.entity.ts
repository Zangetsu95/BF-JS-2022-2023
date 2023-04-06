import {
  BeforeInsert,
  Column,
  Entity,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from 'typeorm';
import * as bcrypt from 'bcrypt';
import { IsNotEmpty, IsEmail } from 'class-validator';

@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  @IsNotEmpty()
  username: string;

  @Column({ unique: true })
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @Column()
  @IsNotEmpty()
  password: string;

  //TODO modifier le hash ne fonctionne pas
  @BeforeInsert()
  async hashPassword() {
    const salt = await bcrypt.gentSalt();
    this.password = await bcrypt.hash(this.password, salt);
  }

  @Column()
  role: string;
}
