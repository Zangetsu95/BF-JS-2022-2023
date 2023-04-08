import {
  HttpException,
  HttpStatus,
  Inject,
  Injectable,
  forwardRef,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductService } from 'src/product/product.service';
import { SupplierCreateDTO } from 'src/shared/DTO/supplier/NewSupplier.dto';
import { UpdateSupplierDTO } from 'src/shared/DTO/supplier/UpdateSupplier.dto';
import { ProductEntity } from 'src/shared/entities/product/product.entity';
import { SupplierEntity } from 'src/shared/entities/supplier/supplier.entity';
import { Repository } from 'typeorm';

@Injectable()
export class SupplierService {
  constructor(
    @InjectRepository(SupplierEntity)
    private supplierRepo: Repository<SupplierEntity>,
    @InjectRepository(ProductEntity)
    private productRepo: Repository<ProductEntity>,
  ) // @Inject(forwardRef(() => ProductService))
  // private readonly productService: ProductService,
  {}

  /**
   * This is an asynchronous function that retrieves all suppliers with their related products from a
   * repository and returns them as an array of SupplierEntity objects, or throws an error if there is
   * an issue with the retrieval process.
   * @returns An array of SupplierEntity objects is being returned.
   */
  async findAll(): Promise<SupplierEntity[]> {
    try {
      const suppliers = await this.supplierRepo.find({
        relations: ['product'],
      });
      return suppliers;
    } catch (error) {
      throw new HttpException(
        'Une erreur est survenu lors de la récupération des fournisseurs',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  /**
   * This is an asynchronous function that finds a supplier by their ID and returns it, or throws an
   * error if the supplier is not found.
   * @param {number} id - The id parameter is a number that represents the unique identifier of a
   * supplier entity. The function uses this parameter to search for a supplier in the database using
   * the findOne method of the supplierRepo object. If a supplier with the specified id is found, it is
   * returned as a Promise. If not, an
   * @returns a Promise that resolves to a SupplierEntity object. If the supplier with the given id is
   * not found, the function throws an HttpException with a message "Fournisseur non trouvé" and a
   * status code of 404 (NOT_FOUND).
   */
  async findOne(id: number): Promise<SupplierEntity> {
    const supplier = await this.supplierRepo.findOne({ where: { id } });

    if (!supplier) {
      throw new HttpException('Fournisseur non trouvé', HttpStatus.NOT_FOUND);
    }
    return supplier;
  }

  /**
   * This is an async function that creates a new supplier entity with the given information and saves
   * it to the database, returning the saved supplier entity or throwing an error if there is an issue.
   * @param {SupplierCreateDTO} supplier - SupplierCreateDTO object containing the data needed to
   * create a new supplier entity. It includes the supplier's name, address, phone number, and the ID
   * of the product they supply.
   * @returns a Promise that resolves to a SupplierEntity object.
   */
  async create(supplier: SupplierCreateDTO): Promise<SupplierEntity> {
    const newSupplier = new SupplierEntity();

    newSupplier.adress = supplier.adress;
    newSupplier.name = supplier.name;
    newSupplier.phone_number = supplier.phone_number;

    const productId = await this.productRepo.findOne({
      where: { id: supplier.product_id },
    });

    newSupplier.product = productId;

    try {
      const savedSupplier = await this.supplierRepo.save(newSupplier);
      return savedSupplier;
    } catch (error) {
      throw new HttpException(
        "Une erreur est survenu lors de la création d'un fournisseur",
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  /**
   * This is an async function that updates a supplier entity based on the provided ID and the
   * properties in the UpdateSupplierDTO object.
   * @param {number} id - The ID of the supplier to be updated.
   * @param {UpdateSupplierDTO} supplier - UpdateSupplierDTO, which is a data transfer object
   * containing the updated information for a supplier entity.
   * @returns A Promise that resolves to a SupplierEntity object.
   */
  async update(
    id: number,
    supplier: UpdateSupplierDTO,
  ): Promise<SupplierEntity> {
    const supplierUpdate = await this.supplierRepo.findOne({ where: { id } });

    if (!supplierUpdate) {
      throw new HttpException('Fournisseur non trouvé', HttpStatus.NOT_FOUND);
    }

    try {
      for (const proprety in supplier) {
        if (supplier[proprety] !== undefined) {
          switch (proprety) {
            case 'adress':
              supplierUpdate.adress = supplier[proprety];
              break;
            case 'name':
              supplierUpdate.name = supplier[proprety];
              break;
            case 'phone_number':
              supplierUpdate.phone_number = supplier[proprety];
              break;
            case 'product_id':
              const productId = await this.productRepo.findOne({
                where: { id: supplier[proprety] },
              });
              supplierUpdate.product = productId;
              break;
            default:
              break;
          }
        }
      }
      return this.supplierRepo.save(supplierUpdate);
    } catch (error) {
      throw new HttpException(
        'Impossible de mettre a jour le fournisseur',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  /**
   * This is an asynchronous function that removes a supplier from a repository based on their ID.
   * @param {number} id - The `id` parameter is a number that represents the unique identifier of the
   * supplier that needs to be removed from the database. The `remove` method is an asynchronous
   * function that takes in this `id` parameter and uses it to delete the corresponding supplier record
   * from the database. The method returns a Promise
   */
  async remove(id: number): Promise<void> {
    await this.supplierRepo.delete(id);
  }
}
