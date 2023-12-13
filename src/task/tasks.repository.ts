import { Injectable } from '@nestjs/common';
import { generalRepo } from 'src/generalRepo.repository';
import { TaskEntity } from './entities/task.entity';

@Injectable()
export class TaskRepo extends generalRepo<TaskEntity> {
  constructor() {
    super('tasks');
  }
}
