import { Module } from '@nestjs/common';
import { CategoriesController } from './categories.controller';
import { CategoriesService } from './categories.service';
import { CategoryRepo } from './categoryRepo.repository';
import { TaskRepo } from 'src/task/tasks.repository';

@Module({
  controllers: [CategoriesController],
  providers: [CategoriesService, CategoryRepo, TaskRepo],
})
export class CategoryModule {}
