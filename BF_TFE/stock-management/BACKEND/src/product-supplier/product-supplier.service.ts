import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductSupplierEntity } from 'src/shared/entities/product-supplier/product-supplier.entity';
import { ProductSupplierDto } from 'src/shared/DTO/supplier-product/ProductSupplierDto.dto';
import { ProductEntity } from 'src/shared/entities/product/product.entity';
import { SupplierEntity } from 'src/shared/entities/supplier/supplier.entity';

@Injectable()
export class ProductSupplierService {
  constructor(
    @InjectRepository(ProductSupplierEntity)
    private productSupplierRepository: Repository<ProductSupplierEntity>,
    @InjectRepository(ProductEntity)
    private productRepo: Repository<ProductEntity>,
    @InjectRepository(SupplierEntity)
    private supplierRepo: Repository<SupplierEntity>,
  ) {}

  async findAll() {
    return await this.productSupplierRepository.find({
      relations: ['product', 'supplier'],
    });
  }

  async create({
    productId,
    supplierId,
  }: ProductSupplierDto): Promise<
    ProductSupplierEntity & { createdProductId: number }
  > {
    console.log('productId:', productId, 'supplierId:', supplierId);

    const product = await this.productRepo.findOne({
      where: { id: productId },
    });
    const supplier = await this.supplierRepo.findOne({
      where: { id: supplierId },
    });

    if (!product || !supplier) {
      throw new NotFoundException('Produit ou fournisseur introuvable');
    }

    const newProductSupplier = new ProductSupplierEntity();
    newProductSupplier.product = product;
    newProductSupplier.supplier = supplier;

    const savedProductSupplier = await this.productSupplierRepository.save(
      newProductSupplier,
    );

    return {
      ...savedProductSupplier,
      createdProductId: savedProductSupplier.id,
    };
  }
}
