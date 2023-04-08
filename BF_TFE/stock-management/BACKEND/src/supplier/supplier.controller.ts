import {
  Body,
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Put,
  ValidationPipe,
  Delete,
} from '@nestjs/common';
import { SupplierService } from './supplier.service';
import { ProductService } from 'src/product/product.service';
import { SupplierEntity } from 'src/shared/entities/supplier/supplier.entity';
import { SupplierCreateDTO } from 'src/shared/DTO/supplier/NewSupplier.dto';
import { UpdateSupplierDTO } from 'src/shared/DTO/supplier/UpdateSupplier.dto';

@Controller('api/supplier')
export class SupplierController {
  constructor(
    private readonly supplierService: SupplierService,
    private readonly productService: ProductService,
  ) {}

  @Get()
  /**
   * This function retrieves all suppliers and their associated products, throwing an error if no
   * suppliers are found.
   * @returns The `findAll()` method returns a Promise that resolves to an array of `SupplierEntity`
   * objects. If there are no suppliers found, it throws an `HttpException` with a message "Aucun
   * fournisseur trouvé" and a status code of `HttpStatus.NOT_FOUND`. If there are suppliers found, it
   * maps each supplier to a new object that includes the supplier's properties and the ID of the
   * product
   */
  async findAll(): Promise<SupplierEntity[]> {
    const suppliers = await this.supplierService.findAll();
    if (suppliers.length === 0) {
      throw new HttpException('Aucun fournisseur trouvé', HttpStatus.NOT_FOUND);
    }
    return suppliers.map((supplier) => ({
      ...supplier,
      product_id: supplier.product.id,
    }));
  }

  @Get('id')
  /**
   * This is an asynchronous function that finds a supplier by ID and returns it, or throws an error if
   * it is not found.
   * @param {number} id - The id parameter is a number that is passed as a route parameter using the
   * @Param decorator from the @nestjs/common package. It is parsed as an integer using the
   * ParseIntPipe from the same package. The method returns a Promise that resolves to a SupplierEntity
   * object. If the supplier is not found
   * @returns a Promise that resolves to a SupplierEntity object.
   */
  async findOne(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<SupplierEntity> {
    const supplier = await this.supplierService.findOne(+id);

    if (!supplier) {
      throw new HttpException('Fournisseur non trouvé', HttpStatus.NOT_FOUND);
    }
    return supplier;
  }

  @Post()
  /**
   * This is an async function that creates a new supplier with the given data and returns a success
   * message along with the created supplier entity, while also handling any errors that may occur.
   * @param {SupplierCreateDTO} supplierData - The supplierData parameter is of type SupplierCreateDTO
   * and is being passed in the request body. It is being validated using the ValidationPipe.
   * @returns This function returns a Promise that resolves to an object containing a message and data.
   * The message is a string indicating whether the supplier was successfully created or not. The data
   * is an object containing the details of the created supplier. If there is an error, an
   * HttpException is thrown with a message indicating the reason for the error.
   */
  async createSupplier(
    @Body(ValidationPipe) supplierData: SupplierCreateDTO,
  ): Promise<{ message: string; data: SupplierEntity }> {
    try {
      const product_id = await this.productService.findOne(
        supplierData.product_id,
      );
      if (!product_id) {
        throw new HttpException(
          "Le produit spécifié n'existe pas",
          HttpStatus.BAD_REQUEST,
        );
      }

      const createdSupplier = await this.supplierService.create(supplierData);
      return {
        message: 'Fournisseur crée avec succès',
        data: { ...createdSupplier },
      };
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  @Put('id')
  /**
   * This is an async function that updates a supplier entity with the given ID and returns a success
   * message along with the updated data.
   * @param {number} id - a number parameter that is passed in the URL path and represents the ID of the
   * supplier to be updated.
   * @param {UpdateSupplierDTO} supplier - The `supplier` parameter is of type `UpdateSupplierDTO`,
   * which is a data transfer object used to update a supplier entity. It is passed in the request body
   * and is validated using the `ValidationPipe` before being used to update the supplier.
   * @returns This function returns an object containing a message and data. The message is a string
   * indicating whether the supplier was successfully updated or not. The data is an object containing
   * the updated supplier entity.
   */
  async update(
    @Param('id') id: number,
    @Body(ValidationPipe) supplier: UpdateSupplierDTO,
  ): Promise<{ message: string; data: SupplierEntity }> {
    try {
      const updatedSupplier = await this.supplierService.update(+id, supplier);
      return {
        message: 'Fournisseur mis à jour avec succès',
        data: { ...updatedSupplier },
      };
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  @Delete(':id')
  /**
   * This is an asynchronous function that removes a supplier by ID and throws an HTTP exception if an
   * error occurs.
   * @param {number} id - The parameter 'id' is a number that is passed as a route parameter in the
   * HTTP request. It is used to identify the specific supplier that needs to be removed from the
   * database. The '+' sign before the 'id' parameter is used to convert the string value of 'id' to a
   * number
   */
  async remove(@Param('id') id: number): Promise<void> {
    try {
      await this.supplierService.remove(+id);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }
}
