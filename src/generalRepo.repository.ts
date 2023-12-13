// import { Injectable } from '@nestjs/common';
import { Config, JsonDB } from 'node-json-db';
import { TaskEntity } from './task/entities/task.entity';
import { CategoryEntity } from './category/entities/category.entity';

// @Injectable()
export class generalRepo<T> {
  private path: string;
  private db = new JsonDB(new Config('taskdb', true, true, '/'));
  constructor(path: string) {
    this.path = path;
  }
  async findAll(): Promise<T[]> {
    return await this.db.getData(`/${this.path}`);
  }
  async findById(id: string): Promise<T> {
    return await this.db.find(`/${this.path}`, (entity) => entity.id === id);
  }

  async addEntity(entity: TaskEntity | CategoryEntity) {
    return await this.db.push(`/${this.path}[]`, entity);
  }
  async findIndex(id) {
    return await this.db.getIndex(`/${this.path}`, id);
  }
  async updateEntity(id, body, entityIndex) {
    return await this.db.push(
      `/${this.path}[${entityIndex}]`,
      { ...body },
      false,
    );
  }
  async removeEntity(entityIndex) {
    await this.db.delete(`/${this.path}[${entityIndex}]`);
    return true;
  }
}
