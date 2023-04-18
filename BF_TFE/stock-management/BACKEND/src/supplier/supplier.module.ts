import { Module, forwardRef } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SupplierEntity } from 'src/shared/entities/supplier/supplier.entity';
import { SupplierController } from './supplier.controller';
import { SupplierService } from './supplier.service';
import { ProductModule } from 'src/product/product.module';
import { ProductEntity } from 'src/shared/entities/product/product.entity';
import { AuthGuard } from 'src/auth/auth.guard';
import { ProductSupplierEntity } from 'src/shared/entities/product-supplier/product-supplier.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      SupplierEntity,
      ProductEntity,
      ProductSupplierEntity,
    ]),
    // forwardRef(() => ProductModule),
    ProductModule,
  ],

  controllers: [SupplierController],
  providers: [SupplierService, AuthGuard],
  exports: [SupplierService],
})
export class SupplierModule {}
