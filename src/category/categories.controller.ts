import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { ApiTags } from '@nestjs/swagger';
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
  createCategory(@Body() body: CreateCategoryDto) {
    return this.categoryRepository.createCategory(body);
  }
  @Delete(':id')
  deleteCategory(@Param('id') id: string) {
    return this.categoryRepository.deleteCategory(id);
  }
}
