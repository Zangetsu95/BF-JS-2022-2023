import {
  Column,
  Entity,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { ProductEntity } from '../product/product.entity';
import { IsString } from 'class-validator';
import { ProductSupplierEntity } from '../product-supplier/product-supplier.entity';

@Entity()
export class SupplierEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  @IsString()
  adress: string;

  @Column({ length: 20 })
  @IsString()
  phone_number: string;

  @OneToMany(
    () => ProductSupplierEntity,
    (productSupplier) => productSupplier.supplier,
  )
  productSupplier: ProductSupplierEntity[];
}
