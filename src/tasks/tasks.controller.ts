import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { TaskEntity } from 'src/Entities/task.entity';

@Controller('tasks')
export class TasksController {
  constructor(private readonly taskService: TasksService) {}
  @Get()
  findAll() {
    return this.taskService.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.taskService.findOne(id);
  }
  @Post()
  addTask(@Body() body: TaskEntity) {
    return this.taskService.addTask(body);
  }
  @Delete()
  removeTask(@Param('id') id: string) {
    return this.taskService.removeTask(id);
  }
}
