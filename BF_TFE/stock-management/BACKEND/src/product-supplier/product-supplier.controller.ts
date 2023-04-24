import {
  Body,
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  ValidationPipe,
} from '@nestjs/common';
import { ProductSupplierService } from './product-supplier.service';
import { ProductSupplierDto } from 'src/shared/DTO/supplier-product/ProductSupplierDto.dto';
import { ProductSupplierEntity } from 'src/shared/entities/product-supplier/product-supplier.entity';

@Controller('api/product-supplier')
export class ProductSupplierController {
  constructor(
    private readonly productSupplierService: ProductSupplierService,
  ) {}

  @Get()
  async findAll() {
    return await this.productSupplierService.findAll();
  }

  @Post()
  async create(
    @Body(ValidationPipe) productSupplierDto: ProductSupplierDto,
  ): Promise<{ createdProductId: number }> {
    console.log('Creating product-supplier association');
    const productSupplier = await this.productSupplierService.create(
      productSupplierDto,
    );
    return { createdProductId: productSupplier.id };
  }
}
