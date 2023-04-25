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
  UseGuards,
  ValidationPipe,
} from '@nestjs/common';
import { TransactionService } from './transaction.service';
import { UserService } from 'src/user/user.service';
import { TransactionEntity } from 'src/shared/entities/transaction/transaction.entity';
import { TransactionCreateDTO } from 'src/shared/DTO/transaction/NewTransaction.dto';
import {
  ApiBearerAuth,
  ApiBody,
  ApiOperation,
  ApiParam,
  ApiQuery,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { TransactionDTO } from 'src/shared/DTO/transaction/Transaction.dto';
import { AuthGuard } from 'src/auth/auth.guard';
import { RoleGuard } from 'src/auth/role.guard';
import { Roles } from 'src/auth/roles.decorator';

@ApiTags('Gestion des transactions')
@Controller('api/transaction')
export class TransactionController {
  constructor(
    private readonly transactionService: TransactionService,
    private readonly userService: UserService,
  ) {}

  @UseGuards(AuthGuard, RoleGuard)
  @ApiBearerAuth('access_token')
  @Roles('admin')
  @ApiOperation({ summary: 'Get all transaction' })
  @ApiResponse({ type: TransactionDTO })
  @Get()
  /**
   * This function retrieves all transactions and maps them to include the user ID, throwing an error
   * if no transactions are found.
   * @returns The `findAll()` method returns a Promise that resolves to an array of `TransactionEntity`
   * objects. If the array is empty, it throws an `HttpException` with a "Not Found" status code.
   * Otherwise, it maps each transaction object to a new object that includes the `user_id` property,
   * which is the ID of the user associated with the transaction.
   */
  async findAll(): Promise<TransactionDTO[]> {
    const transactions = await this.transactionService.findAll();

    if (transactions.length === 0) {
      throw new HttpException(
        'Aucune transaction trouvée',
        HttpStatus.NOT_FOUND,
      );
    }

    return transactions.map((transaction) => ({
      id: transaction.id,
      product_id: transaction.product.id, // Ajouter la propriété "product_id"
      user_id: transaction.user.id,
      date: [transaction.date],
      type: transaction.type,
      quantity: transaction.quantity,
      price: transaction.price,
    }));
  }
  @UseGuards(AuthGuard, RoleGuard)
  @ApiBearerAuth('access_token')
  @Roles('admin')
  @ApiOperation({ summary: 'Get one transaction avec son ID' })
  @ApiParam({ required: true, name: 'transactionID', example: '5' })
  @ApiResponse({ type: TransactionDTO })
  @Get(':id')
  /**
   * This function finds a transaction by its ID and returns it, or throws an error if it is not found.
   * @param {number} id - The id parameter is a number that is passed as a route parameter using the
   * @Param decorator from the @nestjs/common package. It is parsed using the ParseIntPipe to ensure
   * that it is a valid integer. The method then uses this id to call the findOne method of the
   * transactionService to retrieve a
   * @returns The `findOne` method is returning a `Promise` that resolves to a `TransactionEntity`
   * object. If the `transaction` object is not found, the method throws an `HttpException` with a
   * message "Transaction non trouvé" and a status code of `HttpStatus.NOT_FOUND`.
   */
  async findOne(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<TransactionDTO> {
    const transaction = await this.transactionService.findOne(+id);

    if (!transaction) {
      throw new HttpException('Transaction non trouvé', HttpStatus.NOT_FOUND);
    }
    const transactionDto: TransactionDTO = {
      id: transaction.id,
      date: [transaction.date],
      price: transaction.price,
      product_id: transaction.product.id,
      quantity: transaction.quantity,
      type: transaction.type,
      user_id: transaction.user.id,
    };

    return transactionDto;
  }

  // @UseGuards(AuthGuard, RoleGuard)
  // @ApiBearerAuth('access_token')
  // @Roles('admin')
  @ApiOperation({ summary: "Création d'une transaction" })
  @ApiBody({ type: TransactionCreateDTO })
  @ApiResponse({ type: TransactionDTO })
  @Post()
  /**
   * This is an async function that creates a transaction and returns a success message along with the
   * created transaction data, while also validating the user ID.
   * @param {TransactionCreateDTO} transactionData - The data required to create a new transaction,
   * which is validated using a ValidationPipe. It is of type TransactionCreateDTO, which is a DTO
   * (Data Transfer Object) that defines the structure of the data required to create a transaction.
   * @returns A Promise that resolves to an object containing a message and data property. The message
   * property is a string indicating the success or failure of the transaction creation, and the data
   * property is an object containing the created transaction data.
   */
  async createTransaction(
    @Body(ValidationPipe) transactionData: TransactionCreateDTO,
  ): Promise<{ message: string; data: TransactionDTO }> {
    try {
      const userId = await this.userService.findOne(transactionData.user_id);
      if (!userId) {
        throw new HttpException(
          "L'user ID n'existe pas",
          HttpStatus.BAD_REQUEST,
        );
      }

      const createdTransaction = await this.transactionService.create(
        transactionData,
      );
      const createdTransactionDTO = new TransactionDTO();
      Object.assign(createdTransactionDTO, createdTransaction);

      return {
        message: 'Transaction crée avec succès',
        data: { ...createdTransactionDTO },
      };
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }
}
