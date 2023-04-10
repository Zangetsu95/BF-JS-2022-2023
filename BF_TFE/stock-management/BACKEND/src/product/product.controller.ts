import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Put,
  ValidationPipe,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { CategoryService } from 'src/category/category.service';
import { ProductEntity } from 'src/shared/entities/product/product.entity';
import { ProductCreateDTO } from 'src/shared/DTO/product/NewProduct.dto';
import { UpdateProductDTO } from 'src/shared/DTO/product/UpdatedProduct.dto';
import { StockEntity } from 'src/shared/entities/stock/stock.entity';

export interface UpdateQuantityResponse {
  message: string;
  data: {
    id: number;
    name: string;
    description: string;
    price: number;
    quantity: number;
    stock: StockEntity;
  };
}

@Controller('api/product')
export class ProductController {
  constructor(
    private readonly productService: ProductService,
    private readonly categoryService: CategoryService,
  ) {}

  @Get()
  async findAll(): Promise<ProductEntity[]> {
    /**
     * This function retrieves all products and maps them to include their category ID, throwing an error
     * if no products are found.
     * @returns The `findAll()` method returns a Promise that resolves to an array of `ProductEntity`
     * objects. If the array is empty, it throws an `HttpException` with a message "Aucune produits
     * trouvé" and a status code of `NOT_FOUND`. If the array is not empty, it maps each `ProductEntity`
     * object to a new object with an additional `category_id` property and returns
     */
    const products = await this.productService.findAll();
    if (products.length === 0) {
      throw new HttpException('Aucune produits trouvé', HttpStatus.NOT_FOUND);
    }
    return products.map((product) => ({
      ...product,
      category_id: product.category.id,
    }));
  }

  @Get(':id')
  /**
   * This is an asynchronous function that finds a product by its ID and returns it, or throws an error
   * if the product is not found.
   * @param {number} id - The id parameter is a number that is passed as a route parameter in the URL.
   * It is parsed using the ParseIntPipe to ensure that it is a valid integer. The method then uses
   * this id to call the findOne method of the productService to retrieve a single product entity from
   * the database. If the
   * @returns The `findOne` method is returning a `Promise` that resolves to a `ProductEntity` object.
   * If the `product` variable is not `null` or `undefined`, it will be returned. If it is `null` or
   * `undefined`, an `HttpException` with a message of "Produit non trouvé" and a status code of
   * `NOT_FOUND` will be thrown.
   */
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<ProductEntity> {
    const product = await this.productService.findOne(+id);

    if (!product) {
      throw new HttpException('Produit non trouvé', HttpStatus.NOT_FOUND);
    }
    return product;
  }

  @Post()
  async createProduct(
    /**
     * This is an async function that creates a new product with the given data and returns a success
     * message along with the created product entity, while also handling errors.
     * @param {ProductCreateDTO} productData - The product data that is being passed in the request body
     * and validated using the ValidationPipe. It is of type ProductCreateDTO.
     * @returns This function returns a Promise that resolves to an object containing a message and data.
     * The message is a string indicating whether the product was successfully created or not. The data is
     * an object containing the details of the created product. If there is an error, it throws an
     * HttpException with a message and a status code.
     */
    @Body(ValidationPipe) productData: ProductCreateDTO,
  ): Promise<{ message: string; data: ProductEntity }> {
    try {
      const category = await this.categoryService.findOne(
        productData.category_id,
      );
      if (!category) {
        throw new HttpException(
          "La catégorie spécifiée n'existe pas",
          HttpStatus.BAD_REQUEST,
        );
      }

      const createdProduct = await this.productService.create(productData);
      return {
        message: 'Produit crée avec succès',
        data: { ...createdProduct },
      };
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  /* This is a method decorator in a NestJS controller that defines an HTTP PUT endpoint for updating
  an existing product. The `@Put(':id')` decorator specifies that this endpoint should be accessed
  using an HTTP PUT request with a route parameter `id` that represents the ID of the product to be
  updated. The `@Param('id')` decorator specifies that the `id` parameter should be extracted from
  the route parameter. */
  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body(ValidationPipe) product: UpdateProductDTO,
  ): Promise<{ message: string; data: ProductEntity }> {
    try {
      const updatedProduct = await this.productService.update(+id, product);
      return {
        message: 'Produit mis à jour avec succès',
        data: { ...updatedProduct },
      };
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  /**
   * This function updates the quantity of a product with a given ID.
   * @param {number} productId - a number representing the ID of the product that needs to be updated.
   * @param {number} newQuantity - The new quantity value that will be used to update the quantity of a
   * product with the specified productId.
   * @returns A Promise that resolves to void (nothing).
   */
  @Put(':id/quantity')
  async updateProductQuantity(
    @Param('id') productId: number,
    @Body('quantity') newQuantity: number,
  ): Promise<UpdateQuantityResponse> {
    try {
      const { product, stock } = await this.productService.updateQuantity(
        productId,
        newQuantity,
      );
      return {
        message: 'Quantité modifié!',
        data: {
          id: product.id,
          name: product.name,
          description: product.description,
          price: product.price,
          quantity: product.quantity,
          stock,
        },
      };
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
    // return this.productService.updateQuantity(productId, newQuantity);
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    try {
      await this.productService.remove(+id);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }
}
