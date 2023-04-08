import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SupplierEntity } from 'src/shared/entities/supplier/supplier.entity';
import { SupplierController } from './supplier.controller';
import { SupplierService } from './supplier.service';
import { ProductModule } from 'src/product/product.module';
import { ProductEntity } from 'src/shared/entities/product/product.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([SupplierEntity, ProductEntity]),
    // forwardRef(() => ProductModule),
    ProductModule,
  ],

  controllers: [SupplierController],
  providers: [SupplierService],
  exports: [SupplierService],
})
export class SupplierModule {}
