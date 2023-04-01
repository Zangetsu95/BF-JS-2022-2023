import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class DonationEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  donatorName: string;

  @Column()
  itemName: string;

  @Column()
  quantity: number;

  @Column()
  donationDate: Date;
}
