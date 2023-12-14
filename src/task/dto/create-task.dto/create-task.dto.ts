import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class CreateTaskDto {
  @ApiProperty({
    example: 'Change folder arrangement',
    required: true,
  })
  @IsString()
  @IsNotEmpty()
  title: string;
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
