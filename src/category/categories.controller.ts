import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateCategoryDto } from './dto/create-category.dto';
@ApiTags('Categories')
@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoryRepository: CategoriesService) {}
  @Get()
  getCategories() {
    return this.categoryRepository.getCategories();
  }
  @Post()
  @ApiResponse({
    status: 201,
    description: 'The category has been successfully created',
  })
  @ApiResponse({
    status: 400,
    description: 'Missing some parameters',
  })
  createCategory(@Body() body: CreateCategoryDto) {
    return this.categoryRepository.createCategory(body);
  }
  @Delete(':id')
  @ApiResponse({ status: 201, description: 'Category successfully deletded' })
  @ApiResponse({ status: 404, description: "Category doesn't exist" })
  @ApiResponse({ status: 409, description: 'Cannot delete a categeory in use' })
  deleteCategory(@Param('id') id: string) {
    return this.categoryRepository.deleteCategory(id);
  }
}
