import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoryCreateDTO } from 'src/shared/DTO/category/NewCategory.dto';
import { UpdateCategoryDTO } from 'src/shared/DTO/category/UpdatedCategory.dto';
import { CategoryEntity } from 'src/shared/entities/category/category.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CategoryService {
  constructor(
    @InjectRepository(CategoryEntity)
    private categoryRepo: Repository<CategoryEntity>,
  ) {}

  /**
   * This is an asynchronous function that retrieves all categories from a repository and returns them
   * as a Promise, with error handling.
   * @returns An array of CategoryEntity objects wrapped in a Promise is being returned.
   */
  async findAll(): Promise<CategoryEntity[]> {
    try {
      return await this.categoryRepo.find();
    } catch (error) {
      throw new HttpException(
        'Une erreur est survenu lors de la récupération des catégory',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  /**
   * This is an asynchronous function that finds a category by its ID and throws an error if it is not
   * found.
   * @param {number} id - a number representing the ID of the category to be found in the database.
   * @returns a Promise that resolves to a CategoryEntity object.
   */
  async findOne(id: number): Promise<CategoryEntity> {
    const category = await this.categoryRepo.findOne({ where: { id } });

    if (!category) {
      throw new HttpException('Category non trouvé', HttpStatus.NOT_FOUND);
    }

    return category;
  }

  /**
   * This function creates a new category entity and saves it to the database, returning the saved
   * category or throwing an error if there is an issue.
   * @param {CategoryCreateDTO} category - CategoryCreateDTO object that contains the data needed to
   * create a new category entity.
   * @returns a Promise that resolves to a CategoryEntity object.
   */
  async create(category: CategoryCreateDTO): Promise<CategoryEntity> {
    const newCateg = new CategoryEntity();

    newCateg.name = category.name;

    try {
      const savedCategory = await this.categoryRepo.save(newCateg);
      return savedCategory;
    } catch (error) {
      throw new HttpException(
        'une erreur est survenu lors de la création de la catéogry',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  /**
   * This is an async function that updates a category entity in a database based on the provided ID
   * and category data.
   * @param {number} id - The ID of the category to be updated, which is a number.
   * @param {UpdateCategoryDTO} category - UpdateCategoryDTO is a data transfer object that contains
   * the updated information for a category entity. It may include properties such as name,
   * description, or any other relevant fields that can be updated. The function checks if the name
   * property is present in the category object and updates the corresponding property in the category
   * entity
   * @returns This function returns a Promise that resolves to a CategoryEntity object.
   */
  async update(
    id: number,
    category: UpdateCategoryDTO,
  ): Promise<CategoryEntity> {
    const categoryToUpdate = await this.categoryRepo.findOne({ where: { id } });
    if (!categoryToUpdate) {
      throw new HttpException('Category non trouvé', HttpStatus.NOT_FOUND);
    }

    try {
      if (category.name) {
        categoryToUpdate.name = category.name;
      }

      return this.categoryRepo.save(categoryToUpdate);
    } catch (error) {
      throw new HttpException(
        'Impossible de mettre a jour la category',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  /**
   * This is an asynchronous function that removes a category from a repository based on its ID.
   * @param {number} id - The parameter "id" is a number that represents the unique identifier of the
   * category that needs to be removed from the database. The function is an asynchronous function that
   * returns a Promise that resolves to void, indicating that it does not return any value. The
   * function uses the "await" keyword to wait for
   */
  async remove(id: number): Promise<void> {
    await this.categoryRepo.delete(id);
  }
}
