import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { CreateTaskDto } from 'src/dto/create-task.dto/create-task.dto';

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
  addTask(@Body() body: CreateTaskDto) {
    return this.taskService.addTask(body);
  }
  @Delete(':id')
  removeTask(@Param('id') id: string) {
    return this.taskService.removeTask(id);
  }
}
