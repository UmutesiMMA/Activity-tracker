import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { randomUUID } from 'crypto';
import { Config, JsonDB } from 'node-json-db';
import { CategoryEntity } from 'src/Entities/category.entity';
@Injectable()
export class CategoriesService {
  db = new JsonDB(new Config('taskdb', true, true, '/'));
  async getCategories() {
    const allCategories: CategoryEntity = await this.db.getData('/categories');
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
      return this.db.push('/categories[]', category);
    } catch (error) {
      console.log('before the error');
      console.log(error);
      console.log('after the error');
      throw new BadRequestException('Missing some parameters');
    }
  }
}
