import { Injectable, NotFoundException } from '@nestjs/common';

import { TaskRepo } from './tasks.repository';
import { UpdateTaskDto } from './dto/update-task.dto/update-task.dto';
import { randomUUID } from 'crypto';
import { CategoryEntity } from 'src/category/entities/category.entity';
import { TaskEntity } from './entities/task.entity';
import { CategoryRepo } from 'src/category/categoryRepo.repository';
@Injectable()
export class TasksService {
  constructor(
    private taskRepository: TaskRepo,
    private categoryRepository: CategoryRepo,
  ) {}
  async findAll() {
    const allTasks = await this.taskRepository.findAll();
    if (!allTasks) {
      throw new NotFoundException('You have no tasks');
    }
    return allTasks;
  }
  //find a specific task
  async findOne(id: string) {
    const task = await this.taskRepository.findById(id);
    if (!task) {
      throw new NotFoundException('Task is not in the database');
    }
    return task;
  }
  //add task
  async addTask(body) {
    const category: CategoryEntity = await this.categoryRepository.findById(
      body.categoryId,
    );
    if (!category) {
      throw new NotFoundException("This category doesn't exist");
    }
    const task: TaskEntity = {
      id: randomUUID(),
      ...body,
      status: 'OPEN',
    };
    return this.taskRepository.addEntity(task);
  }
  //Update task
  async updateTask(id: string, body: UpdateTaskDto) {
    const taskIndex = await this.taskRepository.findIndex(id);
    if (taskIndex === -1) {
      throw new NotFoundException(`Task of id: ${id} doesn't exist`);
    }

    return this.taskRepository.updateEntity(id, body, taskIndex);
  }
  //remove task
  async removeTask(id: string) {
    const taskIndex = await this.taskRepository.findIndex(id);
    if (taskIndex === -1) {
      throw new NotFoundException(`Task of id: ${id} doesn't exist`);
    }
    return this.taskRepository.removeEntity(taskIndex);
  }
}
