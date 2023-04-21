import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { StockCreateDTO } from 'src/shared/DTO/stock/NewStock.dto';
import { UpdateStockDTO } from 'src/shared/DTO/stock/UpdatedStock.dto';
import { ProductEntity } from 'src/shared/entities/product/product.entity';
import { StockEntity } from 'src/shared/entities/stock/stock.entity';
import { Repository } from 'typeorm';

@Injectable()
export class StockService {
  constructor(
    @InjectRepository(StockEntity)
    private stockRepo: Repository<StockEntity>,
    @InjectRepository(ProductEntity)
    private productRepo: Repository<ProductEntity>,
  ) {}

  /**
   * This function retrieves all stock entities with their related product entities and returns them as
   * a Promise, handling any errors that may occur.
   * @returns An array of StockEntity objects with their associated ProductEntity objects (through the
   * "product" relation).
   */
  async findAll(): Promise<StockEntity[]> {
    try {
      const stocks = await this.stockRepo.find({ relations: ['product'] });
      return stocks;
    } catch (error) {
      throw new HttpException(
        'Une erreur est survenu lorsq de la récupération du stock',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  /**
   * This is an asynchronous function that finds a stock entity by its ID and returns it, or throws an
   * error if it is not found.
   * @param {number} id - The id parameter is a number that is used to find a specific stock entity in
   * the database.
   * @returns The `findOne` method is returning a `Promise` that resolves to a `StockEntity` object. If
   * the `id` provided is not found in the database, it throws an `HttpException` with a message "Stock
   * non trouvé" and a status code of `NOT_FOUND` (404).
   */
  async findOne(id: number): Promise<StockEntity> {
    const stock = await this.stockRepo.findOne({
      where: { id },
      relations: ['product'],
    });

    if (!stock) {
      throw new HttpException('Stock non trouvé', HttpStatus.NOT_FOUND);
    }
    return stock;
  }

  /**
   * This is an async function that creates a new stock entity with a given quantity and product ID,
   * and saves it to the database.
   * @param {StockCreateDTO} stock - StockCreateDTO, which is a data transfer object containing
   * information about a new stock to be created.
   * @returns a Promise that resolves to a StockEntity object.
   */
  async create(stock: StockCreateDTO): Promise<StockEntity> {
    const newStock = new StockEntity();

    newStock.quantity = stock.quantity;

    const product_id = await this.productRepo.findOne({
      where: { id: stock.product_id },
    });

    // Vérifiez si une entrée de stock existe déjà pour ce produit
    const existingStock = await this.stockRepo.findOne({
      where: { product: product_id },
    });

    // S'il existe déjà une entrée de stock, lancez une exception
    if (existingStock) {
      throw new HttpException(
        'Une entrée de stock existe déjà pour ce produit',
        HttpStatus.BAD_REQUEST,
      );
    }

    newStock.product = product_id;

    try {
      const savedStock = await this.stockRepo.save(newStock);
      return savedStock;
    } catch (error) {
      throw new HttpException(
        'une erreur est survenu lors de la création du stock',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  // async update(id: number, stock: UpdateStockDTO): Promise<StockEntity> {
  //   const stockToUpdate = await this.stockRepo.findOne({ where: { id } });

  //   if (!stockToUpdate) {
  //     throw new HttpException('Stock non trouvé', HttpStatus.NOT_FOUND);
  //   }

  //   try {
  //     for (const proprety in stock) {
  //       switch (proprety) {
  //         case 'quantity':
  //           stockToUpdate.quantity = stock[proprety];
  //           break;
  //         case 'product_id':
  //           const productId = await this.productRepo.findOne({
  //             where: { id: stock[proprety] },
  //           });
  //           stockToUpdate.product = productId;
  //           break;
  //         default:
  //           break;
  //       }
  //     }
  //     return this.stockRepo.save(stockToUpdate);
  //   } catch (error) {
  //     throw new HttpException(
  //       'Impossible de mettre à jour le stock',
  //       HttpStatus.INTERNAL_SERVER_ERROR,
  //     );
  //   }
  // }

  /**
   * This function updates the stock quantity of a product and returns the updated stock and product
   * entities.
   * @param {number} id - The ID of the stock entity to be updated.
   * @param {number} newQuantity - The new quantity value that will be assigned to the stock and
   * product entities.
   * @returns An object with two properties: "stock" and "product". The "stock" property contains the
   * updated stock entity, while the "product" property contains the updated product entity.
   */
  async updateStockQuantity(
    /**
     * This function updates the stock quantity of a product and returns the updated stock and product
     * entities.
     * @param {number} id - The ID of the stock entity to be updated.
     * @param {number} newQuantity - The new quantity value that will be assigned to the stock and
     * product entities.
     * @returns an object with two properties: "stock" and "product". The "stock" property contains the
     * updated stock entity, while the "product" property contains the updated product entity.
     */
    id: number,
    newQuantity: number,
  ): Promise<{ stock: StockEntity; product: ProductEntity }> {
    const stock = await this.stockRepo.findOne({
      where: { id },
      relations: ['product'],
    });
    if (!stock) {
      throw new HttpException('Stock non trouvé', HttpStatus.NOT_FOUND);
    }

    const product = await this.productRepo.findOne({
      where: { id: stock.product.id },
      relations: ['stocks'],
    });

    // console.log('Before update:');
    // console.log('Stock:', stock);
    // console.log('Product:', product);

    stock.quantity = newQuantity;
    product.quantity = newQuantity;

    await this.stockRepo.save(stock);
    const updatedProduct = await this.productRepo.save(product);

    // console.log('After update:');
    // console.log('Stock:', stock);
    // console.log('Product:', updatedProduct);

    return { stock, product: updatedProduct };
  }

  /**
   * This is an asynchronous function that removes a product from a repository based on its ID.
   * @param {number} id - The "id" parameter is a number that represents the unique identifier of a
   * product that needs to be removed from the database. The function is an asynchronous function that
   * returns a Promise that resolves to void, indicating that it does not return any value. The
   * function uses the "await" keyword to wait for
   */
  async remove(id: number): Promise<void> {
    await this.productRepo.delete(id);
  }
}
