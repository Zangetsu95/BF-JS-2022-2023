import { Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { ProductEntity } from '../product/product.entity';
import { SupplierEntity } from '../supplier/supplier.entity';

@Entity()
export class ProductSupplierEntity {
  @PrimaryGeneratedColumn()
  id: number;

  //   {
  //     onDelete: 'CASCADE',
  //   }
  @ManyToOne(() => ProductEntity, (product) => product.id)
  @JoinColumn({ name: 'product_id' })
  product: ProductEntity;

  @ManyToOne(() => SupplierEntity, (supplier) => supplier.id)
  @JoinColumn({ name: 'supplier_id' })
  supplier: SupplierEntity;
}
