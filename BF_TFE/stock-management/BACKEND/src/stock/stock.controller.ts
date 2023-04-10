import {
  Controller,
  Get,
  HttpException,
  HttpStatus,
  Param,
  ParseIntPipe,
  Post,
  Body,
  ValidationPipe,
  Put,
  Delete,
} from '@nestjs/common';
import { StockService } from './stock.service';
import { ProductService } from 'src/product/product.service';
import { StockEntity } from 'src/shared/entities/stock/stock.entity';
import { StockCreateDTO } from 'src/shared/DTO/stock/NewStock.dto';
import { UpdateStockDTO } from 'src/shared/DTO/stock/UpdatedStock.dto';
import { ProductEntity } from 'src/shared/entities/product/product.entity';

interface UpdateQuantityResponse {
  message: string;
  data: {
    id: number;
    quantity: number;
    product: ProductEntity;
  };
}

@Controller('api/stock')
export class StockController {
  constructor(
    private readonly stockService: StockService,
    private readonly productService: ProductService,
  ) {}

  @Get()
  /**
   * This function retrieves all stocks and maps them to include the product ID, throwing an error if
   * no stocks are found.
   * @returns The `findAll()` method returns a Promise that resolves to an array of `StockEntity`
   * objects. Before returning the array, the method checks if the array is empty and throws an
   * `HttpException` with a `NOT_FOUND` status if it is. Then, the method maps over the array and
   * returns a new array of objects with the same properties as the original `StockEntity` objects, but
   * with
   */
  async findAll(): Promise<StockEntity[]> {
    const stocks = await this.stockService.findAll();
    if (stocks.length === 0) {
      throw new HttpException('Aucun stock trouvé', HttpStatus.NOT_FOUND);
    }
    return stocks.map((stocks) => ({
      ...stocks,
      product_id: stocks.product.id,
    }));
  }

  @Get(':id')
  /**
   * This is an asynchronous function that finds a stock entity by its ID and returns it, or throws an
   * error if it is not found.
   * @param {number} id - The id parameter is a number that is passed as a route parameter to the
   * findOne method. It is decorated with the ParseIntPipe, which ensures that the value is parsed as
   * an integer before it is used in the method. The method then uses this id to find a stock entity
   * using the stockService
   * @returns The `findOne` method is returning a `Promise` that resolves to a `StockEntity` object.
   * This object is then returned by the `findOne` method.
   */
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<StockEntity> {
    const stock = await this.stockService.findOne(+id);

    if (!stock) {
      throw new HttpException('Stock non trouvé', HttpStatus.NOT_FOUND);
    }
    return stock;
  }

  @Post()
  /**
   * This function creates a new stock entity and returns a success message along with the created
   * stock data, while also validating the input data and checking if the specified product exists.
   * @param {StockCreateDTO} stockData - The stockData parameter is of type StockCreateDTO and is
   * passed in the request body. It is validated using the ValidationPipe before being used in the
   * function.
   * @returns This function returns a Promise that resolves to an object containing a message and data.
   * The message is a string indicating whether the stock was created successfully or not. The data is
   * an object containing the details of the created stock. If there is an error, an HttpException is
   * thrown with a message indicating the reason for the error.
   */
  async createStock(
    @Body(ValidationPipe) stockData: StockCreateDTO,
  ): Promise<{ message: string; data: StockEntity }> {
    try {
      const productId = await this.productService.findOne(stockData.product_id);
      if (!productId) {
        throw new HttpException(
          "Le produit spécifié n'existe pas",
          HttpStatus.BAD_REQUEST,
        );
      }

      const createdStock = await this.stockService.create(stockData);

      return {
        message: 'Stock crée avec succès',
        data: { ...createdStock },
      };
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  @Put(':id')
  /**
   * This is an async function that updates a stock entity with the given ID and returns a message and
   * the updated stock data.
   * @param {number} id - The ID of the stock entity that needs to be updated.
   * @param {UpdateStockDTO} stock - The `stock` parameter is of type `UpdateStockDTO`, which is a data
   * transfer object used to update a `StockEntity` object. It is passed in the request body and
   * validated using the `ValidationPipe`.
   * @returns This function returns a Promise that resolves to an object containing a message and a
   * data property. The message property is a string indicating that the stock has been successfully
   * updated, and the data property is an object containing the updated stock entity. If an error
   * occurs during the update process, a HttpException with a status code of 400 (Bad Request) is
   * thrown.
   */
  async update(
    @Param('id') id: number,
    @Body(ValidationPipe) stock: UpdateStockDTO,
  ): Promise<{ message: string; data: StockEntity }> {
    try {
      const updatedStock = await this.stockService.update(+id, stock);
      return {
        message: 'Stock mis à jour avec succès',
        data: { ...updatedStock },
      };
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  @Put(':id/quantity')
  async updateQuantity(
    @Param('id', ParseIntPipe) stockId: number,
    @Body('quantity', ParseIntPipe) newQuantity: number,
  ): Promise<UpdateQuantityResponse> {
    const { stock, product } = await this.stockService.updateStockQuantity(
      stockId,
      newQuantity,
    );

    return {
      message: 'Quantité modifié !',
      data: {
        id: stock.id,
        quantity: stock.quantity,
        product,
      },
    };
  }

  /* This is a method in the `StockController` class that handles the HTTP DELETE request to delete a
  stock entity with the specified ID. It uses the `@Delete` decorator to specify the route for the
  request, which includes the `:id` parameter. The `@Param` decorator is used to extract the `id`
  parameter from the request URL and pass it to the `remove` method as an argument. */
  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    try {
      await this.stockService.remove(+id);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }
}
