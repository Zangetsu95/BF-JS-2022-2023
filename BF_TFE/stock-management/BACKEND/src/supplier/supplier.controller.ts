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
  UseGuards,
} from '@nestjs/common';
import { SupplierService } from './supplier.service';
import { ProductService } from 'src/product/product.service';
import { SupplierEntity } from 'src/shared/entities/supplier/supplier.entity';
import { SupplierCreateDTO } from 'src/shared/DTO/supplier/NewSupplier.dto';
import { UpdateSupplierDTO } from 'src/shared/DTO/supplier/UpdateSupplier.dto';
import {
  ApiBearerAuth,
  ApiBody,
  ApiOperation,
  ApiParam,
  ApiQuery,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { SupplierDTO } from 'src/shared/DTO/supplier/Supplier.dto';
import { AuthGuard } from 'src/auth/auth.guard';
import { RoleGuard } from 'src/auth/role.guard';
import { Roles } from 'src/auth/roles.decorator';
@ApiTags('Gestion des fournisseurs')
@Controller('api/supplier')
export class SupplierController {
  constructor(
    private readonly supplierService: SupplierService,
    private readonly productService: ProductService,
  ) {}

  @ApiOperation({ summary: 'Get all des fournisseurs' })
  @ApiResponse({ type: SupplierDTO })
  @Get()
  /**
   * This function finds all suppliers and returns their information along with their associated
   * product ID, throwing an error if no suppliers are found.
   * @returns An array of SupplierDTO objects with an additional property "product_id" for each
   * supplier. If no suppliers are found, an HttpException is thrown with a message "Aucun fournisseur
   * trouvé" and a status code of 404 (NOT_FOUND).
   */
  async findAll(): Promise<SupplierDTO[]> {
    const suppliers = await this.supplierService.findAll();
    if (suppliers.length === 0) {
      throw new HttpException('Aucun fournisseur trouvé', HttpStatus.NOT_FOUND);
    }
    return suppliers.map((supplier) => ({
      ...supplier,
      product_id: supplier.product.id,
    }));
  }

  @ApiOperation({ summary: 'Get one supplier avec son ID' })
  @ApiParam({ required: true, name: 'supplierID', example: '5' })
  @ApiResponse({ type: SupplierDTO })
  @Get('id')
  /**
   * This function finds a supplier by ID and returns a DTO (Data Transfer Object) with specific
   * properties.
   * @param {number} id - The id parameter is a number that is passed as a route parameter to the
   * findOne() method. It is decorated with the ParseIntPipe, which ensures that the parameter is
   * parsed as an integer before it is used in the method.
   * @returns a Promise that resolves to a SupplierDTO object.
   */
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<SupplierDTO> {
    const supplier = await this.supplierService.findOne(+id);

    if (!supplier) {
      throw new HttpException('Fournisseur non trouvé', HttpStatus.NOT_FOUND);
    }
    const supplierDto: SupplierDTO = {
      id: supplier.id,
      name: supplier.name,
      adress: supplier.adress,
      phone_number: supplier.phone_number,
      product_id: supplier.product.id,
    };

    return supplierDto;
  }

  @UseGuards(AuthGuard, RoleGuard)
  @ApiBearerAuth('access_token')
  @Roles('admin')
  @ApiOperation({ summary: "Création d'un fournisseur" })
  @ApiBody({ type: SupplierCreateDTO })
  @ApiResponse({ type: SupplierDTO })
  @Post()
  /**
   * This is an async function that creates a new supplier and returns a success message along with the
   * created supplier data, while also validating the input data and checking if the specified product
   * exists.
   * @param {SupplierCreateDTO} supplierData - The supplierData parameter is of type SupplierCreateDTO
   * and is being passed in the request body. It is being validated using the ValidationPipe.
   * @returns A Promise that resolves to an object containing a message and data. The message is a
   * string indicating whether the supplier was successfully created or not, and the data is a
   * SupplierDTO object containing information about the created supplier.
   */
  async createSupplier(
    @Body(ValidationPipe) supplierData: SupplierCreateDTO,
  ): Promise<{ message: string; data: SupplierDTO }> {
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
      const createdProductDTO = new SupplierDTO();
      Object.assign(createdSupplier, createdProductDTO);
      return {
        message: 'Fournisseur crée avec succès',
        data: { ...createdProductDTO },
      };
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  @UseGuards(AuthGuard, RoleGuard)
  @ApiBearerAuth('access_token')
  @Roles('admin')
  @ApiOperation({ summary: "Modification d'un fournisseur" })
  @ApiBody({ type: UpdateSupplierDTO })
  @ApiResponse({ type: SupplierDTO })
  @ApiParam({ required: true, name: 'supplierID', example: '5' })
  @Put('id')
  /**
   * This is an async function that updates a supplier entity with the given ID and returns a success
   * message along with the updated data.
   * @param {number} id - The ID of the supplier that needs to be updated.
   * @param {UpdateSupplierDTO} supplier - The `supplier` parameter is of type `UpdateSupplierDTO`,
   * which is a data transfer object used to update a supplier entity. It is passed in the request body
   * and validated using the `ValidationPipe`.
   * @returns This function returns a Promise that resolves to an object containing a message and data.
   * The message is a string indicating the success of the update operation, and the data is an object
   * containing the updated supplier entity.
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

  @UseGuards(AuthGuard, RoleGuard)
  @ApiBearerAuth('access_token')
  @Roles('admin')
  @ApiOperation({ summary: 'Supprimer un produit' })
  @ApiResponse({ type: SupplierDTO })
  @ApiParam({ required: true, name: 'supplierID', example: '5' })
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
