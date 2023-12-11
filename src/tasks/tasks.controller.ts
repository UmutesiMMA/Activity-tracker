import { Controller, Delete, Get, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';

@Controller('tasks')
export class TasksController {
  constructor(private readonly taskService: TasksService) {}
  @Get()
  findAll() {}
  @Get()
  findOne() {}
  @Post()
  addTAsk() {}
  @Delete()
  removeTask() {}
}
