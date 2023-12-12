import { Body, Controller, Get, Post } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from 'src/dto/create-category.dto/create-category.dto';

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
}
