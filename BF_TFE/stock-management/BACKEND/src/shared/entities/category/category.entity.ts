import { IsNotEmpty } from 'class-validator';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { ProductEntity } from '../product/product.entity';

@Entity()
export class CategoryEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  @IsNotEmpty()
  name: string;

  /**
   * Cela signifie que cette propriété contiendra
   * plusieurs instances de l'entité "Product",
   * plutôt qu'une seule instance.
   */
  @OneToMany((type) => ProductEntity, (product) => product.category)
  products: ProductEntity[];
}
