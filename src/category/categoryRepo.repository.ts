import { Injectable } from '@nestjs/common';
import { generalRepo } from 'src/generalRepo.repository';
import { CategoryEntity } from './entities/category.entity';

@Injectable()
export class CategoryRepo extends generalRepo<CategoryEntity> {
  constructor() {
    super('categories');
  }
}
