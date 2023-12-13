import {
  BadRequestException,
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { randomUUID } from 'crypto';
import { CategoryRepo } from './categoryRepo.repository';
import { CategoryEntity } from 'src/category/entities/category.entity';
import { TaskRepo } from 'src/task/tasks.repository';
@Injectable()
export class CategoriesService {
  constructor(
    private categoryRepository: CategoryRepo,
    private taskRepository: TaskRepo,
  ) {}
  async getCategories() {
    const allCategories = await this.categoryRepository.findAll();
    if (!allCategories) {
      throw new NotFoundException('There are no categories available');
    }
    return allCategories;
  }

  async createCategory(body) {
    try {
      const category: CategoryEntity = {
        id: randomUUID(),
        ...body,
      };
      return this.categoryRepository.addEntity(category);
    } catch (error) {
      throw new BadRequestException('Missing some parameters');
    }
  }
  async deleteCategory(id: string) {
    const categoryIndex = await this.categoryRepository.findIndex(id);
    if (categoryIndex === -1) {
      throw new NotFoundException(`Category of id: ${id} doesn't exist`);
    }
    const allTasks = await this.taskRepository.findAll();
    const isUsed = allTasks.filter((task) => task.categoryId === id);
    if (isUsed) {
      throw new ConflictException('Cannot delete category');
    }
    await this.categoryRepository.removeEntity(categoryIndex);
    return id;
  }
}
