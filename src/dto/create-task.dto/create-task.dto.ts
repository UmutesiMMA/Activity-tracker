import { IsNumber, IsString } from 'class-validator';
import { status } from 'src/Entities/task.entity';

export class CreateTaskDto {
  @IsNumber()
  id: number;
  @IsString()
  title: string;
  @IsString()
  status: status;
  @IsString()
  description: string;
}
