import { Injectable } from '@nestjs/common';
import { randomUUID } from 'crypto';
import { JsonDB, Config } from 'node-json-db';
import { CreateTaskDto } from 'src/dto/create-task.dto/create-task.dto';
const filePath = '..\taskdb.json';
@Injectable()
export class TasksService {
  db = new JsonDB(new Config('taskdb', true, false, '/'));
  async findAll() {
    const allTasks = await this.db.getData(filePath);
    return allTasks;
  }
  async findOne(id: string) {
    const task = await this.db.find('/tasks', (task) => task.id === id);
    return task;
  }
  async addTask(body) {
    const task: CreateTaskDto = {
      id: randomUUID(),
      ...body,
    };
    return this.db.push('/tasks[]', task);
  }
  async removeTask(id: string) {
    const taskIndex = await this.db.getIndex('/tasks', id);
    return await this.db.delete(`/tasks[${taskIndex}]`);
  }
}
