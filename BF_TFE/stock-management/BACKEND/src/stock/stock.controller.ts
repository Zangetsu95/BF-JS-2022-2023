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
  Patch,
  UseGuards,
} from '@nestjs/common';
import { StockService } from './stock.service';
import { ProductService } from 'src/product/product.service';
import { StockEntity } from 'src/shared/entities/stock/stock.entity';
import { StockCreateDTO } from 'src/shared/DTO/stock/NewStock.dto';
import { UpdateStockDTO } from 'src/shared/DTO/stock/UpdatedStock.dto';
import { ProductEntity } from 'src/shared/entities/product/product.entity';
import {
  ApiBearerAuth,
  ApiBody,
  ApiOperation,
  ApiParam,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { StockDTO } from 'src/shared/DTO/stock/Stock.dto';
import { AuthGuard } from 'src/auth/auth.guard';
import { RoleGuard } from 'src/auth/role.guard';
import { Roles } from 'src/auth/roles.decorator';

interface UpdateQuantityResponse {
  message: string;
  data: {
    id: number;
    quantity: number;
    product: ProductEntity;
  };
}
@ApiTags('Gestion du stock')
@Controller('api/stock')
export class StockController {
  constructor(
    private readonly stockService: StockService,
    private readonly productService: ProductService,
  ) {}

  @ApiOperation({ summary: 'Get all des stocks' })
  @ApiResponse({ type: StockDTO })
  @Get()
  /**
   * This function retrieves all stocks and maps them to a StockDTO array, throwing an error if no
   * stocks are found.
   * @returns The `findAll()` method returns a Promise that resolves to an array of `StockDTO` objects.
   * If there are no stocks found, it throws an `HttpException` with a message "Aucun stock trouvé" and
   * a status code of `HttpStatus.NOT_FOUND`. If there are stocks found, it maps the array of stocks to
   * a new array of `StockDTO` objects with an additional property `
   */
  async findAll(): Promise<StockDTO[]> {
    const stocks = await this.stockService.findAll();
    if (stocks.length === 0) {
      throw new HttpException('Aucun stock trouvé', HttpStatus.NOT_FOUND);
    }
    return stocks.map((stocks) => ({
      ...stocks,
      product_id: stocks.product.id,
    }));
  }

  @ApiOperation({ summary: 'Get one stock avec son ID' })
  @ApiParam({ required: true, name: 'stockID', example: '5' })
  @ApiResponse({ type: StockDTO })
  @Get(':id')
  /**
   * This is an asynchronous function that finds a stock by its ID, creates a StockDTO object with
   * relevant information, and returns it.
   * @param {number} id - The id parameter is a number that is passed as a route parameter to the
   * findOne() method. It is decorated with the ParseIntPipe, which ensures that the value is parsed as
   * an integer before it is used in the method.
   * @returns a Promise that resolves to a StockDTO object.
   */
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<StockDTO> {
    const stock = await this.stockService.findOne(+id);

    if (!stock) {
      throw new HttpException('Stock non trouvé', HttpStatus.NOT_FOUND);
    }

    const stockDto: StockDTO = {
      id: stock.id,
      product_id: stock.product.id,
      quantity: stock.quantity,
    };

    return stockDto;
  }

  @UseGuards(AuthGuard, RoleGuard)
  @ApiBearerAuth('access_token')
  @Roles('admin')
  @ApiOperation({ summary: "Création d'un stock" })
  @ApiBody({ type: StockCreateDTO })
  @ApiResponse({ type: StockDTO })
  @Post()
  /**
   * This is an async function that creates a new stock and returns a success message along with the
   * created stock data, while also validating the input data and checking if the specified product
   * exists.
   * @param {StockCreateDTO} stockData - The data required to create a new stock, which is validated
   * using a ValidationPipe. It is of type StockCreateDTO.
   * @returns A Promise that resolves to an object containing a message and data. The message is a
   * string indicating whether the stock was created successfully or not. The data is an object of type
   * StockDTO containing the details of the created stock.
   */
  async createStock(
    @Body(ValidationPipe) stockData: StockCreateDTO,
  ): Promise<{ message: string; data: StockDTO }> {
    try {
      const productId = await this.productService.findOne(stockData.product_id);
      if (!productId) {
        throw new HttpException(
          "Le produit spécifié n'existe pas",
          HttpStatus.BAD_REQUEST,
        );
      }

      const createdStock = await this.stockService.create(stockData);
      const createdStockDTO = new StockDTO();
      Object.assign(createdStock, createdStockDTO);

      return {
        message: 'Stock crée avec succès',
        data: { ...createdStockDTO },
      };
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  // @ApiOperation({ summary: "Modification d'un stock" })
  // @Put(':id')
  // async update(
  //   @Param('id') id: number,
  //   @Body(ValidationPipe) stock: UpdateStockDTO,
  // ): Promise<{ message: string; data: StockEntity }> {
  //   try {
  //     const updatedStock = await this.stockService.update(+id, stock);
  //     return {
  //       message: 'Stock mis à jour avec succès',
  //       data: { ...updatedStock },
  //     };
  //   } catch (error) {
  //     throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
  //   }
  // }

  @UseGuards(AuthGuard, RoleGuard)
  @ApiBearerAuth('access_token')
  @Roles('admin')
  @ApiOperation({ summary: 'Modification de la quantité' })
  @ApiBody({ type: UpdateStockDTO })
  @ApiResponse({ type: StockDTO })
  @ApiParam({
    required: true,
    name: 'stockID/quantity',
    example: '15/quantity',
  })
  @Patch(':id/quantity')
  /**
   * This function updates the quantity of a stock item and returns a message with the updated data.
   * @param {number} stockId - The ID of the stock that needs to be updated. It is being passed as a
   * parameter in the URL path and is being validated using the ParseIntPipe to ensure that it is a
   * valid integer.
   * @param {number} newQuantity - The new quantity value that is being passed in the request body to
   * update the stock quantity. It is being parsed as an integer using the ParseIntPipe.
   * @returns a Promise that resolves to an object of type UpdateQuantityResponse. The object contains
   * a message and data properties. The message property is a string that indicates that the quantity
   * has been updated. The data property is an object that contains the updated stock id, quantity, and
   * product information.
   */
  @UseGuards(AuthGuard, RoleGuard)
  @ApiBearerAuth('access_token')
  @Roles('admin')
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
        product: product,
      },
    };
  }

  @UseGuards(AuthGuard, RoleGuard)
  @ApiBearerAuth('access_token')
  @Roles('admin')
  @ApiOperation({ summary: 'Supprimer un stock' })
  @ApiResponse({ type: StockDTO })
  @ApiParam({ required: true, name: 'stockID', example: '15' })
  @Delete(':id')
  /**
   * This is an async function that removes a stock item by ID and throws an HTTP exception if there is
   * an error.
   * @param {number} id - The 'id' parameter is a number that is passed as a route parameter to the
   * 'remove' method. It is used to identify the stock item that needs to be removed. The '+' sign
   * before the 'id' parameter is used to convert the string value of 'id' to a number.
   */
  async remove(@Param('id') id: number): Promise<void> {
    try {
      await this.stockService.remove(+id);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }
}
