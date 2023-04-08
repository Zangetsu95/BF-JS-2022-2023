import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductEntity } from 'src/shared/entities/product/product.entity';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';
import { Module } from '@nestjs/common';
import { CategoryModule } from 'src/category/category.module';
import { CategoryEntity } from 'src/shared/entities/category/category.entity';
import { CategoryService } from 'src/category/category.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([ProductEntity, CategoryEntity]),
    CategoryModule,
  ],
  controllers: [ProductController],
  providers: [ProductService, CategoryService],
})
export class ProductModule {}
