import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CategoryDTO } from 'src/shared/DTO/category/Category.dto';
import { CategoryCreateDTO } from 'src/shared/DTO/category/NewCategory.dto';
import { UpdateCategoryDTO } from 'src/shared/DTO/category/UpdatedCategory.dto';
import { UserDTO } from 'src/shared/DTO/user/User.dto';
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
   * as an array of CategoryDTO objects, or throws an HTTP exception if an error occurs.
   * @returns An array of CategoryDTO objects wrapped in a Promise is being returned.
   */
  async findAll(): Promise<CategoryDTO[]> {
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
   * This function finds a category by its ID and returns it as a CategoryDTO, or throws an error if it
   * is not found.
   * @param {number} id - The id parameter is a number that represents the unique identifier of a
   * category that needs to be retrieved from the database.
   * @returns a Promise that resolves to a CategoryDTO object.
   */
  async findOne(id: number): Promise<CategoryDTO> {
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
   * create a new category. It likely includes properties such as the name of the category.
   * @returns a Promise that resolves to a CategoryDTO object.
   */
  async create(category: CategoryCreateDTO): Promise<CategoryDTO> {
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
   * This is an async function that updates a category in a database and returns a CategoryDTO object,
   * throwing an error if the category is not found or if the update fails.
   * @param {number} id - A number representing the ID of the category to be updated.
   * @param {UpdateCategoryDTO} category - UpdateCategoryDTO, which is a data transfer object
   * containing the updated information for a category.
   * @returns A Promise that resolves to a CategoryDTO object.
   */
  async update(id: number, category: UpdateCategoryDTO): Promise<CategoryDTO> {
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
