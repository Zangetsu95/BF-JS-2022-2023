import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TransactionCreateDTO } from 'src/shared/DTO/transaction/NewTransaction.dto';
import { ProductEntity } from 'src/shared/entities/product/product.entity';
import { StockEntity } from 'src/shared/entities/stock/stock.entity';
import { TransactionEntity } from 'src/shared/entities/transaction/transaction.entity';
import { UserEntity } from 'src/shared/entities/user/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class TransactionService {
  constructor(
    @InjectRepository(TransactionEntity)
    private transactionRepo: Repository<TransactionEntity>,
    @InjectRepository(ProductEntity)
    private productRepo: Repository<ProductEntity>,
    @InjectRepository(UserEntity)
    private userRepo: Repository<UserEntity>,
    @InjectRepository(StockEntity)
    private stockRepo: Repository<StockEntity>,
  ) {}

  /**
   * This function retrieves all transactions with related product and user entities and returns them
   * as a Promise, handling any errors with an HTTP exception.
   * @returns The `findAll()` method returns a Promise that resolves to an array of `TransactionEntity`
   * objects.
   */
  async findAll(): Promise<TransactionEntity[]> {
    try {
      const transactions = await this.transactionRepo.find({
        relations: ['product', 'user'],
      });
      return transactions;
    } catch (error) {
      throw new HttpException(
        'Une erreur est survenu lors de la récupération des transactions',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  /**
   * This function finds a transaction by its ID and returns it, or throws an error if it is not found.
   * @param {number} id - The id parameter is a number that is used to find a specific transaction in
   * the database.
   * @returns The `findOne` method is returning a `Promise` that resolves to a `TransactionEntity`
   * object.
   */
  async findOne(id: number): Promise<TransactionEntity> {
    const transaction = await this.transactionRepo.findOne({
      where: { id },
      relations: ['product', 'user'],
    });

    if (!transaction) {
      throw new HttpException('Transaction non trouvé', HttpStatus.NOT_FOUND);
    }

    return transaction;
  }

  /**
   * This function creates a new transaction entity with the given data and saves it to the database.
   * @param {TransactionCreateDTO} transaction - TransactionCreateDTO object containing the details of
   * the transaction to be created, including price, quantity, type, and the IDs of the product and
   * user associated with the transaction.
   * @returns a Promise that resolves to a TransactionEntity object.
   */
  async create(transaction: TransactionCreateDTO): Promise<TransactionEntity> {
    const newTransaction = new TransactionEntity();

    newTransaction.date = new Date();
    newTransaction.price = transaction.price;
    newTransaction.quantity = transaction.quantity;
    newTransaction.type = transaction.type;
    newTransaction.transaction_number = transaction.transaction_number;

    const productId = await this.productRepo.findOne({
      where: { id: transaction.product_id },
      relations: ['stocks'],
    });
    newTransaction.product = productId;

    const userId = await this.userRepo.findOne({
      where: { id: transaction.user_id },
    });
    newTransaction.user = userId;

    const stock = await this.stockRepo.findOne({
      where: { product: { id: transaction.product_id } },
      relations: ['product'],
    });

    if (!stock) {
      throw new HttpException('Stock non trouvé', HttpStatus.NOT_FOUND);
    }

    /* This code block is checking if the quantity of the product being transacted is greater than the
    quantity available in the stock. */
    if (transaction.quantity > stock.quantity) {
      throw new HttpException('Stock insuffisant', HttpStatus.BAD_REQUEST);
    }

    //update du stock
    if (transaction.type == 'purchasse') {
      productId.quantity += newTransaction.quantity;
      stock.quantity += newTransaction.quantity;
    } else if (transaction.type == 'sale') {
      productId.quantity -= newTransaction.quantity;
      stock.quantity -= newTransaction.quantity;
    }
    await this.productRepo.save(productId);
    await this.stockRepo.save(stock);

    try {
      const savedTransaction = await this.transactionRepo.save(newTransaction);
      return savedTransaction;
    } catch (error) {
      throw new HttpException(
        'une erreur est survenu lors de la création de la transaction',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
