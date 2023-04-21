import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StockEntity } from 'src/shared/entities/stock/stock.entity';
import { StockController } from './stock.controller';
import { StockService } from './stock.service';
import { ProductEntity } from 'src/shared/entities/product/product.entity';
import { ProductService } from 'src/product/product.service';
import { CategoryEntity } from 'src/shared/entities/category/category.entity';
import { AuthGuard } from 'src/auth/auth.guard';
import { SupplierEntity } from 'src/shared/entities/supplier/supplier.entity';
import { ProductSupplierEntity } from 'src/shared/entities/product-supplier/product-supplier.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      StockEntity,
      ProductEntity,
      CategoryEntity,
      SupplierEntity,
      ProductSupplierEntity,
    ]),
  ],
  controllers: [StockController],
  providers: [StockService, ProductService, AuthGuard],
})
export class StockModule {}
