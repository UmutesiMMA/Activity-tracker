import { Module } from '@nestjs/common';
import { TasksController } from './tasks.controller';
import { TasksService } from './tasks.service';
import { TaskRepo } from './tasks.repository';
import { CategoryRepo } from 'src/category/categoryRepo.repository';

@Module({
  controllers: [TasksController],
  providers: [TasksService, TaskRepo, CategoryRepo],
})
export class TaskModule {}
