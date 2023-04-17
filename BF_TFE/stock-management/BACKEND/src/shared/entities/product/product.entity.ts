import { IsNumber, IsPositive, IsString } from 'class-validator';
import { type } from 'os';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { CategoryEntity } from '../category/category.entity';
import { SupplierEntity } from '../supplier/supplier.entity';
import { StockEntity } from '../stock/stock.entity';
import { TransactionEntity } from '../transaction/transaction.entity';
import { ProductSupplierEntity } from '../product-supplier/product-supplier.entity';

@Entity()
export class ProductEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsString()
  name: string;

  @Column()
  @IsString()
  description: string;

  /**
   * colonne price comme étant decimal,
   * avec une précision de 10 et une échelle de 2.
   */
  @Column({ type: 'decimal', precision: 10, scale: 2 })
  @IsNumber()
  @IsPositive()
  price: number;

  @Column()
  @IsNumber()
  @IsPositive()
  quantity: number;

  @ManyToOne((type) => CategoryEntity, (category) => category.products)
  @JoinColumn({ name: 'category_id' })
  category: CategoryEntity;

  @OneToMany(
    () => ProductSupplierEntity,
    (supplyProduct) => supplyProduct.product,
  )
  supplyProduct: ProductSupplierEntity[];

  @OneToMany(() => StockEntity, (stock) => stock.product)
  stocks: StockEntity[];

  @OneToMany(() => TransactionEntity, (transaction) => transaction.product)
  transactions: TransactionEntity[];
}
