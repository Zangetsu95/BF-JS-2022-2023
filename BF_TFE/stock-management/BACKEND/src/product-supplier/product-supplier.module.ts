import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductSupplierController } from './product-supplier.controller';
import { ProductSupplierService } from './product-supplier.service';
import { ProductSupplierEntity } from 'src/shared/entities/product-supplier/product-supplier.entity';
import { ProductEntity } from 'src/shared/entities/product/product.entity';
import { SupplierEntity } from 'src/shared/entities/supplier/supplier.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      ProductSupplierEntity,
      ProductEntity,
      SupplierEntity,
    ]),
  ],
  controllers: [ProductSupplierController],
  providers: [ProductSupplierService],
})
export class ProductSupplierModule {}
