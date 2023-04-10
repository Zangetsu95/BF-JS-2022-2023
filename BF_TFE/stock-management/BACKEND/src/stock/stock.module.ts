import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StockEntity } from 'src/shared/entities/stock/stock.entity';
import { StockController } from './stock.controller';
import { StockService } from './stock.service';
import { ProductEntity } from 'src/shared/entities/product/product.entity';
import { ProductService } from 'src/product/product.service';
import { CategoryEntity } from 'src/shared/entities/category/category.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([StockEntity, ProductEntity, CategoryEntity]),
  ],
  controllers: [StockController],
  providers: [StockService, ProductService],
})
export class StockModule {}
