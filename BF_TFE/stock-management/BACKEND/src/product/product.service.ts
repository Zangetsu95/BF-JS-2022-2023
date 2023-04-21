import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import {
  classToPlain,
  instanceToPlain,
  plainToClass,
  plainToInstance,
} from 'class-transformer';
import { ProductCreateDTO } from 'src/shared/DTO/product/NewProduct.dto';
import { ProductDTO } from 'src/shared/DTO/product/Product.dto';
import { UpdateProductDTO } from 'src/shared/DTO/product/UpdatedProduct.dto';
import { StockDTO } from 'src/shared/DTO/stock/Stock.dto';
import { UpdateStockDTO } from 'src/shared/DTO/stock/UpdatedStock.dto';
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
   * This function retrieves a list of products from the database based on optional search parameters
   * and returns them as an array of ProductDTO objects along with the total number of items.
   * @param {string} [productName] - A string that represents the name of the product to search for. If
   * provided, the query will filter the results to only include products whose name contains the
   * provided string.
   * @param {string} [categoryName] - A string parameter used to filter products by category name. If
   * provided, the query will only return products that belong to a category with a name that contains
   * the specified string. If not provided, all products will be returned regardless of their category.
   * @param {number} [offset=0] - The number of items to skip before starting to return items. It is
   * used for pagination purposes.
   * @param {number} [limit=12] - The maximum number of items to be returned in the result set. If not
   * specified, the default value is 12.
   * @returns A Promise that resolves to an object containing an array of `ProductEntity` objects
   * transformed into `ProductDTO` objects and the total number of items in the database that match the
   * query parameters.
   */
  async findAll(
    productName?: string,
    categoryName?: string,
    offset: number = 0,
    limit: number = 12,
  ): Promise<{ items: ProductEntity[]; totalItems: number }> {
    offset = Number(offset);
    limit = Number(limit);
    try {
      const query = this.productRepo
        .createQueryBuilder('product')
        .leftJoinAndSelect('product.category', 'category')
        .skip(offset)
        .take(limit);

      if (productName) {
        query.andWhere('product.name LIKE :productName', {
          productName: `%${productName}%`,
        });
      }

      if (categoryName) {
        query.andWhere('category.name LIKE :categoryName', {
          categoryName: `%${categoryName}%`,
        });
      }

      /* This code retrieves an array of `ProductEntity` objects from the database using a query
      builder and assigns it to the `products` constant. Then, it uses the `plainToInstance`
      function from the `class-transformer` library to transform the `ProductEntity` objects into
      `ProductDTO` objects, which are plain JavaScript objects that only contain the properties
      defined in the `ProductDTO` class. The `excludeExtraneousValues` option is set to `true`,
      which means that any properties in the `ProductEntity` objects that are not defined in the
      `ProductDTO` class will be excluded from the resulting `ProductDTO` objects. Finally, the
      function returns the array of `ProductDTO` objects. */

      const products = await query.getMany();
      const countQuery = this.productRepo
        .createQueryBuilder('product')
        .leftJoin('product.category', 'category');
      const totalItems = await countQuery.getCount();

      return { items: products, totalItems };
    } catch (error) {
      console.log(error);
      throw new HttpException(
        'Une erreur est survenue lors de la récupération des produits',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  /**
   * This function finds a product by its ID and returns its details in a ProductDTO format.
   * @param {number} id - The ID of the product that needs to be retrieved from the database.
   * @returns a Promise that resolves to a ProductDTO object.
   */
  async findOne(id: number): Promise<ProductDTO> {
    const product = await this.productRepo.findOne({
      where: { id },
      relations: ['category'],
    });

    if (!product) {
      throw new HttpException('Produit non trouvé', HttpStatus.NOT_FOUND);
    }
    const productDto: ProductDTO = {
      id: product.id,
      category_id: product.category.id,
      description: product.description,
      name: product.name,
      price: product.price,
      quantity: product.quantity,
    };

    return productDto;
  }

  /**
   * This is an async function that creates a new product and saves it to the database along with its
   * stock quantity and returns a ProductDTO object.
   * @param {ProductCreateDTO} product - ProductCreateDTO object, which contains the information needed
   * to create a new product, such as description, name, price, quantity, and category_id.
   * @returns a Promise that resolves to a ProductDTO object.
   */
  async create(product: ProductCreateDTO): Promise<ProductDTO> {
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

      const productDTO = instanceToPlain(savedProduct) as ProductDTO;
      productDTO.category_id = savedProduct.category.id; // Ajouter la propriété manquante

      return productDTO;
    } catch (error) {
      console.log(error);
      throw new HttpException(
        'Une erreur est survenue lors de la création du produit',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  /**
   * This is an async function that updates a product in the database based on the provided ID and
   * properties in the UpdateProductDTO object.
   * @param {number} id - The ID of the product to be updated.
   * @param {UpdateProductDTO} product - The `product` parameter is an object of type
   * `UpdateProductDTO` which contains the updated information for a product. It may have the following
   * properties: `name`, `description`, `price`, `quantity`, and `category_id`.
   * @returns a Promise that resolves to a ProductDTO object.
   */
  async update(id: number, product: UpdateProductDTO): Promise<ProductDTO> {
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
      const productDto: ProductDTO = {
        id: productToUpdate.id,
        description: productToUpdate.description,
        name: productToUpdate.name,
        price: productToUpdate.price,
        quantity: productToUpdate.quantity,
        category_id: productToUpdate.category.id,
      };

      await this.productRepo.save(productToUpdate);
      return productDto;
    } catch (error) {
      throw new HttpException(
        'Impossible de mettre a jour le produit',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  /**
   * This is an async function that updates the quantity of a product and its corresponding stock
   * entity in a database and returns the updated product and stock entities.
   * @param {number} id - The ID of the product to update the quantity for.
   * @param {number} newQuantity - The new quantity value that will be assigned to both the product and
   * its associated stock.
   * @returns A Promise that resolves to an object containing the updated ProductEntity and
   * StockEntity.
   */
  async updateQuantity(
    id: number,
    newQuantity: number,
  ): Promise<{ product: ProductDTO; stock: UpdateStockDTO }> {
    const product = await this.productRepo.findOne({
      where: { id },
      relations: ['stocks', 'category'],
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
    const updatedStock = await this.stockRepo.save(stock);

    const productDTO = new ProductDTO();
    productDTO.id = updatedQuantityProduct.id;
    productDTO.name = updatedQuantityProduct.name;
    productDTO.description = updatedQuantityProduct.description;
    productDTO.price = updatedQuantityProduct.price;
    productDTO.quantity = updatedQuantityProduct.quantity;
    productDTO.category_id = updatedQuantityProduct.category.id;

    console.log('After update:');
    console.log('Stock:', product);
    console.log('Product:', stock);

    return { product: productDTO, stock: updatedStock };
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
