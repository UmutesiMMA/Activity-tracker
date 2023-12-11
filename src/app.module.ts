import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TasksController } from './tasks/tasks.controller';
import { CategoriesController } from './categories/categories.controller';
import { TasksService } from './tasks/tasks.service';
import { CategoriesService } from './categories/categories.service';

@Module({
  imports: [],
  controllers: [AppController, TasksController, CategoriesController],
  providers: [AppService, TasksService, CategoriesService],
})
export class AppModule {}
