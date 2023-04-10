import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductEntity } from 'src/shared/entities/product/product.entity';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { Module, forwardRef } from '@nestjs/common';
import { CategoryModule } from 'src/category/category.module';
import { CategoryEntity } from 'src/shared/entities/category/category.entity';
import { CategoryService } from 'src/category/category.service';
import { SupplierEntity } from 'src/shared/entities/supplier/supplier.entity';
import { SupplierService } from 'src/supplier/supplier.service';
import { SupplierModule } from 'src/supplier/supplier.module';
import { StockEntity } from 'src/shared/entities/stock/stock.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      ProductEntity,
      CategoryEntity,
      SupplierEntity,
      StockEntity,
    ]),
    // CategoryModule,
    // forwardRef(() => SupplierModule),
  ],
  controllers: [ProductController],
  providers: [ProductService, CategoryService, SupplierService],
  exports: [ProductService],
})
export class ProductModule {}
