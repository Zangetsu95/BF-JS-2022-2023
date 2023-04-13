import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductCreateDTO } from 'src/shared/DTO/product/NewProduct.dto';
import { UpdateProductDTO } from 'src/shared/DTO/product/UpdatedProduct.dto';
import { CategoryEntity } from 'src/shared/entities/category/category.entity';
import { ProductEntity } from 'src/shared/entities/product/product.entity';
import { StockEntity } from 'src/shared/entities/stock/stock.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(ProductEntity)
    private productRepo: Repository<ProductEntity>,
    @InjectRepository(CategoryEntity)
    private categoryRepository: Repository<CategoryEntity>,
    @InjectRepository(StockEntity)
    private stockRepo: Repository<StockEntity>,
  ) {}

  /**
   * This is an asynchronous function that retrieves all products with their associated category from a
   * database and returns them as an array of ProductEntity objects, or throws an error if there is a
   * problem with the database connection.
   * @returns An array of ProductEntity objects is being returned.
   */
  async findAll(
    productName?: string,
    categoryName?: string,
  ): Promise<ProductEntity[]> {
    try {
      const query = this.productRepo
        .createQueryBuilder('product')
        .leftJoinAndSelect('product.category', 'category');

      if (productName) {
        query.andWhere('product.name LIKE :productName', {
          //LOWER(product.name) LIKE LOWER(:productName)
          productName: `%${productName}%`,
        });
      }

      if (categoryName) {
        query.andWhere('category.name LIKE :categoryName', {
          categoryName: `%${categoryName}%`,
        });
      }
      const products = await query.getMany();
      return products;

      // const products = await this.productRepo.find({ relations: ['category'] });
      // return products;
    } catch (error) {
      console.log(error);
      throw new HttpException(
        'Une erreur est survenu lors de la récupération des produit',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  /**
   * This is an asynchronous function that finds a product by its ID and throws an error if it is not
   * found.
   * @param {number} id - The id parameter is a number that represents the unique identifier of a
   * product entity. The function uses this id to search for a product in the database using the
   * findOne method of the productRepo object. If the product is not found, the function throws an
   * HttpException with a message "Produit non trouvé
   * @returns The `findOne` method is returning a `Promise` that resolves to a `ProductEntity` object.
   * If the product with the specified `id` is not found, the method throws an `HttpException` with a
   * message "Produit non trouvé" and a status code of `NOT_FOUND` (404).
   */
  async findOne(id: number): Promise<ProductEntity> {
    const product = await this.productRepo.findOne({
      where: { id },
      relations: ['category'],
    });

    if (!product) {
      throw new HttpException('Produit non trouvé', HttpStatus.NOT_FOUND);
    }

    return product;
  }

  /**
   * This function creates a new product entity with the given product information and saves it to the
   * database, while also associating it with a category.
   * @param {ProductCreateDTO} product - A DTO (Data Transfer Object) representing the data needed to
   * create a new product. It contains the following properties:
   * @returns a Promise that resolves to a ProductEntity object.
   */
  async create(product: ProductCreateDTO): Promise<ProductEntity> {
    const newProduct = new ProductEntity();
    const newStock = new StockEntity();

    newProduct.description = product.description;
    newProduct.name = product.name;
    newProduct.price = product.price;
    newProduct.quantity = product.quantity;

    newStock.quantity = product.quantity;

    const categoryId = await this.categoryRepository.findOne({
      where: { id: product.category_id },
    });
    newProduct.category = categoryId;

    try {
      const savedProduct = await this.productRepo.save(newProduct);
      newStock.product = savedProduct;
      await this.stockRepo.save(newStock);

      return savedProduct;
    } catch (error) {
      console.log(error);
      throw new HttpException(
        'une erreur est survenu lors de la création de la catégory',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  // const savedProduct = await this.productRepo.save(newProduct);
  //   newStock.product = savedProduct;

  //   await this.stockRepository.save(newStock);

  //   return savedProduct;

  /**
   * This function updates a product entity in the database based on the provided ID and properties in
   * the UpdateProductDTO object.
   * @param {number} id - A number representing the ID of the product to be updated.
   * @param {UpdateProductDTO} product - The `product` parameter is an object of type
   * `UpdateProductDTO` which contains the updated information for a product. It may have the following
   * properties: `name`, `description`, `price`, `quantity`, and `category_id`.
   * @returns a Promise that resolves to a ProductEntity object.
   */
  async update(id: number, product: UpdateProductDTO): Promise<ProductEntity> {
    const productToUpdate = await this.productRepo.findOne({ where: { id } });

    if (!productToUpdate) {
      throw new HttpException('Produit non trouvé', HttpStatus.NOT_FOUND);
    }

    try {
      /* This is a loop that iterates over the properties of the `product` object. For each property,
      it checks if the value is not `undefined`. If the value is defined, it checks the name of the
      property using a `switch` statement. Depending on the property name, it updates the
      corresponding property of the `productToUpdate` object with the value of the property in the
      `product` object. If the property name is `category_id`, it also retrieves the corresponding
      category from the database using the `categoryRepository` and assigns it to the `category`
      property of the `productToUpdate` object. */
      for (const property in product) {
        if (product[property] !== undefined) {
          switch (property) {
            case 'description':
              productToUpdate.description = product[property];
              break;
            case 'name':
              productToUpdate.name = product[property];
              break;
            case 'price':
              productToUpdate.price = product[property];
              break;
            case 'quantity':
              productToUpdate.quantity = product[property];
              break;
            case 'category_id':
              const categoryId = await this.categoryRepository.findOne({
                where: { id: product[property] },
              });
              productToUpdate.category = categoryId;
              break;
            default:
              break;
          }
        }
      }

      return this.productRepo.save(productToUpdate);
    } catch (error) {
      throw new HttpException(
        'Impossible de mettre a jour le produit',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  async updateQuantity(
    id: number,
    newQuantity: number,
  ): Promise<{ product: ProductEntity; stock: StockEntity }> {
    const product = await this.productRepo.findOne({
      where: { id },
      relations: ['stocks'],
    });
    if (!product) {
      throw new HttpException('Produit non trouvé', HttpStatus.NOT_FOUND);
    }
    const stock = await this.stockRepo.findOne({
      where: { id: product.stocks[0].id },
      relations: ['product'],
    });
    if (!stock) {
      throw new HttpException(
        'Stock non trouvé pour ce produit',
        HttpStatus.NOT_FOUND,
      );
    }

    console.log('Before update:');
    console.log('Stock:', product);
    console.log('Product:', stock);

    product.quantity = newQuantity;
    stock.quantity = newQuantity;

    const updatedQuantityProduct = await this.productRepo.save(product);
    // await this.stockRepo.save(stock);
    const updatedStock = await this.stockRepo.save(stock);

    console.log('After update:');
    console.log('Stock:', product);
    console.log('Product:', stock);

    // return this.productRepo.save(product);
    return { product: updatedQuantityProduct, stock: updatedStock };
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
