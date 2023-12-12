import { IsString } from 'class-validator';
import { status } from 'src/Entities/task.entity';

export class CreateTaskDto {
  @IsString()
  title: string;
  @IsString()
  status: status;
  @IsString()
  description: string;
  @IsString()
  categoryId: string;
}
