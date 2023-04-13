import {
  Body,
  Controller,
  Delete,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Put,
  Query,
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { CategoryService } from 'src/category/category.service';
import { ProductEntity } from 'src/shared/entities/product/product.entity';
import { ProductCreateDTO } from 'src/shared/DTO/product/NewProduct.dto';
import { UpdateProductDTO } from 'src/shared/DTO/product/UpdatedProduct.dto';
import { StockEntity } from 'src/shared/entities/stock/stock.entity';
import {
  ApiBody,
  ApiOperation,
  ApiParam,
  ApiQuery,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { ProductDTO } from 'src/shared/DTO/product/Product.dto';
import { UpdateQuantityProductDTO } from 'src/shared/DTO/product/ProductQuantity.dto';
import { StockDTO } from 'src/shared/DTO/stock/Stock.dto';
import { UpdateStockDTO } from 'src/shared/DTO/stock/UpdatedStock.dto';

export interface UpdateQuantityResponse {
  message: string;
  data: {
    id: number;
    name: string;
    description: string;
    price: number;
    quantity: number;
    stock: UpdateStockDTO;
  };
}

@ApiTags('Gestion des produits')
@Controller('api/product')
export class ProductController {
  constructor(
    private readonly productService: ProductService,
    private readonly categoryService: CategoryService,
  ) {}

  @ApiOperation({ summary: 'Get all des produits' })
  @ApiQuery({ name: 'productName', required: false })
  @ApiQuery({ name: 'categoryName', required: false })
  @ApiResponse({ type: ProductDTO })
  @Get()
  /**
   * This function retrieves all products and maps them to include their category ID, throwing an error
   * if no products are found.
   * @param {string} [productName] - A string parameter used to filter products by their name. If
   * provided, only products with a name containing the specified string will be returned. If not
   * provided, all products will be returned.
   * @param {string} [categoryName] - The name of the category to filter the products by.
   * @returns The `findAll()` method returns a Promise that resolves to an array of `ProductDTO`
   * objects.
   */
  async findAll(
    @Query('productName') productName?: string,
    @Query('categoryName') categoryName?: string,
  ): Promise<ProductEntity[]> {
    /**
     * This function retrieves all products and maps them to include their category ID, throwing an error
     * if no products are found.
     * @returns The `findAll()` method returns a Promise that resolves to an array of `ProductEntity`
     * objects. If the array is empty, it throws an `HttpException` with a message "Aucune produits
     * trouvé" and a status code of `NOT_FOUND`. If the array is not empty, it maps each `ProductEntity`
     * object to a new object with an additional `category_id` property and returns
     */
    // const products = await this.productService.findAll();
    const products = await this.productService.findAll(
      productName,
      categoryName,
    );

    if (products.length === 0) {
      throw new HttpException('Aucune produits trouvé', HttpStatus.NOT_FOUND);
    }
    return products.map((product) => ({
      ...product,
      category_id: product.category.id,
    }));
  }

  @ApiOperation({ summary: 'Get one product avec son ID' })
  @ApiParam({ required: true, name: 'productID', example: '5' })
  @ApiResponse({ type: ProductDTO })
  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<ProductDTO> {
    /**
     * This is an async function that finds a product by its ID and returns a ProductDTO object, throwing
     * an error if the product is not found.
     * @param {number} id - The id parameter is a number that is passed as a route parameter to the
     * findOne() method. It is decorated with the @Param decorator from the @nestjs/common package, which
     * indicates that it is a parameter extracted from the request URL. The ParseIntPipe is used to parse
     * the id parameter as an
     * @returns A `ProductDTO` object is being returned.
     */
    const product = await this.productService.findOne(+id);

    if (!product) {
      throw new HttpException('Produit non trouvé', HttpStatus.NOT_FOUND);
    }
    const productDto: ProductDTO = {
      id: product.id,
      name: product.name,
      description: product.description,
      price: product.price,
      quantity: product.quantity,
      category_id: product.category_id,
    };

    return productDto;
  }

  @ApiOperation({ summary: "Création d'un produit" })
  @ApiBody({ type: ProductCreateDTO })
  @ApiResponse({ type: ProductDTO })
  @Post()
  /**
   * This function creates a new product and returns a success message along with the created product
   * data, while also validating the input data and checking if the specified category exists.
   * @param {ProductCreateDTO} productData - The product data that is being passed in the request body
   * and is validated using the ValidationPipe. It is of type ProductCreateDTO.
   * @returns a Promise that resolves to an object with a message and data property. The message
   * property contains a success message indicating that the product was created successfully, while
   * the data property contains a ProductDTO object representing the created product.
   */
  async createProduct(
    @Body(ValidationPipe) productData: ProductCreateDTO,
  ): Promise<{ message: string; data: ProductDTO }> {
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
      const createdProductDTO = new ProductDTO();
      /**
       * On crée un nouvel objet qui copie toutes les propriétés de l'objet createdProduct
       * en utilisant l'opérateur de décomposition (...).
       * Ensuite, on ajoute la propriété category_id à ce nouvel objet, en récupérant la valeur de la propriété id
       * de l'objet category qui se trouve dans la propriété category de createdProduct
       * Cela permet de retourner un objet avec toutes les propriétés de createdProduct ainsi
       * que la propriété category_id qui n'existe pas directement dans createdProduct.
       */
      Object.assign(createdProductDTO, createdProduct);

      return {
        message: 'Produit crée avec succès',
        data: { ...createdProductDTO },
      };
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  @ApiOperation({ summary: "Modification d'un produit" })
  @ApiBody({ type: UpdateProductDTO })
  @ApiResponse({ type: ProductDTO })
  @ApiParam({ required: true, name: 'productID', example: '10' })
  @Put(':id')
  async update(
    /**
     * This is an async function that updates a product with the given ID and returns a message and the
     * updated product data.
     * @param {number} id - The id parameter is a number that represents the unique identifier of a
     * product entity. It is used to identify the specific product that needs to be updated.
     * @param {UpdateProductDTO} product - The `product` parameter is of type `UpdateProductDTO`, which
     * is a data transfer object used to update a product entity. It is passed in the request body and is
     * validated using the `ValidationPipe` before being used to update the product.
     * @returns This function returns a Promise that resolves to an object containing a message and a
     * data property. The message property is a string indicating that the product has been successfully
     * updated, while the data property contains the updated product entity.
     */
    @Param('id') id: number,
    @Body(ValidationPipe) product: UpdateProductDTO,
  ): Promise<{ message: string; data: ProductDTO }> {
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

  @ApiOperation({ summary: "modification de la quantité d'un produit" })
  @ApiBody({ type: UpdateQuantityProductDTO })
  @ApiResponse({ type: ProductDTO })
  @ApiParam({
    required: true,
    name: 'productID/quantity',
    example: '15/quantity',
  })
  @Patch(':id/quantity')
  async updateProductQuantity(
    /**
     * This is an async function that updates the quantity of a product and returns a response with the
     * updated product information and stock.
     * @param {number} productId - a number representing the ID of the product that needs to be updated.
     * @param {number} newQuantity - The new quantity value that will be assigned to the product with the
     * specified productId.
     * @returns The `updateProductQuantity` method is returning a `Promise` that resolves to an object of
     * type `UpdateQuantityResponse`. This object contains a message and data properties. The message
     * property is a string indicating that the quantity has been updated, and the data property is an
     * object containing information about the updated product, including its ID, name, description,
     * price, quantity, and stock. If an error
     */
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

  @ApiOperation({ summary: 'Supprimer un produit' })
  @ApiResponse({ type: ProductDTO })
  @ApiParam({ required: true, name: 'productID', example: '25' })
  @Delete(':id')
  /**
   * This is an asynchronous function that removes a product by its ID and throws an HTTP exception if
   * there is an error.
   * @param {number} id - The 'id' parameter is a number that is passed as a route parameter to the
   * 'remove' method. It is used to identify the product that needs to be removed from the database.
   * The '+' sign before the 'id' parameter is used to convert the string value of 'id' to a
   */
  async remove(@Param('id') id: number): Promise<void> {
    try {
      await this.productService.remove(+id);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }
}
