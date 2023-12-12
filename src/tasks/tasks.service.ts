import { Injectable, NotFoundException } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { JsonDB, Config } from 'node-json-db';
import { TaskEntity } from 'src/Entities/task.entity';
@Injectable()
export class TasksService {
  private db;
  constructor() {
    this.db = new JsonDB(new Config('taskdb', true, true, '/'));
  }
  async findAll() {
    const allTasks = await this.db.getData('/tasks');
    if (!allTasks) {
      throw new NotFoundException('You have no tasks');
    }
    return allTasks;
  }
  async findOne(id: string) {
    const task = await this.db.find('/tasks', (task) => task.id === id);
    if (!task) {
      throw new NotFoundException('Task is not in the database');
    }
    return task;
  }
  async addTask(body) {
    const { title, status, description, categoryId } = body;
    const { name } = await this.db.find(
      '/categories',
      (category) => category.id === categoryId,
    );
    console.log(name);
    const task: TaskEntity = {
      id: randomUUID(),
      title,
      status,
      description,
      category: name,
    };
    return this.db.push('/tasks[]', task);
  }
  async updateTask(id) {
    return `updating ${id}`;
  }
  async removeTask(id: string) {
    const taskIndex = await this.db.getIndex('/tasks', id);
    if (taskIndex === -1) {
      throw new NotFoundException(`Task of id: ${id} doesn't exist`);
    }
    await this.db.delete(`/tasks[${taskIndex}]`);
    return id;
  }
}
