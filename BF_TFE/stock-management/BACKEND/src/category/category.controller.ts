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
  ValidationPipe,
} from '@nestjs/common';
import { CategoryService } from './category.service';
import { CategoryEntity } from 'src/shared/entities/category/category.entity';
import { CategoryCreateDTO } from 'src/shared/DTO/category/NewCategory.dto';
import { UpdateCategoryDTO } from 'src/shared/DTO/category/UpdatedCategory.dto';

@Controller('api/category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @Get()
  /**
   * This function retrieves all categories and throws an error if none are found.
   * @returns The `findAll()` method returns a Promise that resolves to an array of `CategoryEntity`
   * objects. If there are no categories found, it throws an `HttpException` with a message "Aucune
   * catégory trouvé" and a status code of `HttpStatus.NOT_FOUND`.
   */
  async findAll(): Promise<CategoryEntity[]> {
    const categories = await this.categoryService.findAll();

    if (categories.length === 0) {
      throw new HttpException('Aucune catégory trouvé', HttpStatus.NOT_FOUND);
    }
    return categories;
  }

  @Get(':id')
  /**
   * This function finds a category by its ID and returns it, throwing an error if it is not found.
   * @param {number} id - The id parameter is a number that is passed as a route parameter using the
   * @Param decorator from the @nestjs/common package. It is parsed using the ParseIntPipe to ensure
   * that it is a valid integer. The method returns a Promise that resolves to a CategoryEntity object.
   * If the category is not
   * @returns a Promise that resolves to a CategoryEntity object. If the category with the specified id
   * is not found, it throws an HttpException with a message "Category non trouvé" and a status code of
   * 404 (NOT_FOUND).
   */
  async findOne(
    @Param('id', ParseIntPipe) id: number,
  ): Promise<CategoryEntity> {
    const category = await this.categoryService.findOne(+id);
    if (!category) {
      throw new HttpException('Category non trouvé', HttpStatus.NOT_FOUND);
    }
    return category;
  }

  @Post()
  /**
   * This is an async function that creates a category using data provided in the request body and
   * returns a success message with the created category data or throws an HTTP exception with a bad
   * request status if an error occurs.
   * @param {CategoryCreateDTO} categoryData - The categoryData parameter is of type CategoryCreateDTO
   * and is being passed in the request body. It is being validated using the ValidationPipe to ensure
   * that it meets the specified criteria before being passed to the categoryService.create() method.
   * @returns An object with a message and data property is being returned. The message property
   * contains a success message and the data property contains the created category data.
   */
  async createCategory(@Body(ValidationPipe) categoryData: CategoryCreateDTO) {
    try {
      const createdCateg = await this.categoryService.create(categoryData);
      return {
        message: 'Category créé avec succès ',
        data: { ...createdCateg },
      };
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  @Put(':id')
  /**
   * This is an async function that updates a category entity with the given ID and returns a message
   * and the updated category data.
   * @param {number} id - a number parameter that is being passed as a route parameter in the URL.
   * @param {UpdateCategoryDTO} category - The `category` parameter is of type `UpdateCategoryDTO`,
   * which is a data transfer object used to update a category entity. It is passed in the request body
   * and validated using the `ValidationPipe`.
   * @returns This function returns a Promise that resolves to an object containing a message and data.
   * The message is a string indicating that the category has been successfully updated, and the data
   * is an object containing the updated category entity. If an error occurs, the function throws an
   * HttpException with a message and a status code of 400 (Bad Request).
   */
  async update(
    @Param('id') id: number,
    @Body(ValidationPipe) category: UpdateCategoryDTO,
  ): Promise<{ message: string; data: CategoryEntity }> {
    try {
      const updatedCategory = await this.categoryService.update(+id, category);
      return {
        message: 'Category mis à jour avec succès',
        data: { ...updatedCategory },
      };
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    try {
      await this.categoryService.remove(+id);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }
}
