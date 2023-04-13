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
import {
  ApiBody,
  ApiOperation,
  ApiParam,
  ApiQuery,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';
import { CategoryDTO } from 'src/shared/DTO/category/Category.dto';

@ApiTags('Gestion des catégories')
@Controller('api/category')
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @ApiOperation({ summary: 'Get all des categories' })
  @ApiResponse({ type: CategoryDTO })
  @Get()
  async findAll(): Promise<CategoryDTO[]> {
    /**
     * This function retrieves all categories and throws an error if none are found.
     * @returns An array of CategoryDTO objects is being returned.
     */
    const categories = await this.categoryService.findAll();

    if (categories.length === 0) {
      throw new HttpException('Aucune catégory trouvé', HttpStatus.NOT_FOUND);
    }
    return categories;
  }

  @ApiOperation({ summary: 'Get one category avec son ID' })
  @ApiParam({ required: true, name: 'categoryID', example: '7' })
  @ApiResponse({ type: CategoryDTO })
  @Get(':id')
  /**
   * This is an asynchronous function that finds a category by its ID and returns it as a CategoryDTO,
   * throwing an error if it is not found.
   * @param {number} id - The id parameter is a number that is passed as a route parameter to the
   * findOne() method. It is decorated with the ParseIntPipe, which ensures that the value is parsed as
   * an integer before it is used in the method.
   * @returns The `findOne` method is returning a `Promise` that resolves to a `CategoryDTO` object.
   * This object is then returned by the `findOne` method. If the `category` object is not found, an
   * `HttpException` is thrown with a message "Category non trouvé" and a status code of `NOT_FOUND`.
   */
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<CategoryDTO> {
    const category = await this.categoryService.findOne(+id);
    if (!category) {
      throw new HttpException('Category non trouvé', HttpStatus.NOT_FOUND);
    }
    return category;
  }

  @ApiOperation({ summary: "Création d'une category" })
  @ApiBody({ type: CategoryCreateDTO })
  @ApiResponse({ type: CategoryDTO })
  @Post()
  /**
   * This is an async function that creates a category using data provided in the request body and
   * returns a success message with the created category data or throws an HTTP exception with a bad
   * request status if an error occurs.
   * @param {CategoryCreateDTO} categoryData - The categoryData parameter is of type CategoryCreateDTO
   * and is being passed to the create method of the categoryService. It is being validated using the
   * ValidationPipe, which ensures that the data being passed meets the specified validation rules
   * before it is processed.
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

  @ApiOperation({ summary: "Modification d'une category" })
  @ApiBody({ type: UpdateCategoryDTO })
  @ApiBody({ type: CategoryDTO })
  @Put(':id')
  /**
   * This is an async function that updates a category entity with the given ID and returns a message
   * and the updated category data.
   * @param {number} id - a number parameter that represents the ID of the category to be updated.
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
  ): Promise<{ message: string; data: CategoryDTO }> {
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

  @ApiOperation({ summary: 'Supprimer une category' })
  @ApiResponse({ type: CategoryDTO })
  @ApiParam({ required: true, name: 'categoryID', example: '7' })
  @Delete(':id')
  /**
   * This is an asynchronous function that removes a category by its ID and throws an HTTP exception if
   * there is an error.
   * @param {number} id - The "id" parameter is a number that is passed as a route parameter in an HTTP
   * request. It is used to identify the specific category that needs to be removed. The "+" sign
   * before the "id" parameter is used to convert the string value of "id" to a number. The "
   */
  async remove(@Param('id') id: number): Promise<void> {
    try {
      await this.categoryService.remove(+id);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }
}
