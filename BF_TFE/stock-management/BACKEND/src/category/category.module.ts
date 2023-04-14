import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CategoryEntity } from 'src/shared/entities/category/category.entity';
import { CategoryController } from './category.controller';
import { CategoryService } from './category.service';
import { AuthGuard } from 'src/auth/auth.guard';

@Module({
  imports: [TypeOrmModule.forFeature([CategoryEntity])],
  controllers: [CategoryController],
  providers: [CategoryService, AuthGuard],
})
export class CategoryModule {}
