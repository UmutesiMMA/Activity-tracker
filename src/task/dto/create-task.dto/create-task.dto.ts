import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';
// import { status } from 'src/task/entities/task.entity';

export class CreateTaskDto {
  @ApiProperty({
    example: 'Change folder arrangement',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  title: string;
  // @ApiProperty({
  //   example: 'DONE| OPEN | IN_PROGRESS',
  //   required: true,
  // })
  // @IsString()
  // @IsNotEmpty()
  // @IsEnum(status)
  // status: status;
  @ApiProperty({
    example:
      'Create a clear folder structure for documents folder and its sub-folders',
    required: true,
  })
  @IsString()
  description: string;
  @ApiProperty({
    example: '288a4977-b38c-40d2-93c6-d7316fc8baa4',
    required: true,
  })
  @IsString()
  categoryId: string;
}
