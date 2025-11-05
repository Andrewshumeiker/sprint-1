// src/tasks/dto/create-task.dto.ts
import { IsString, MinLength, IsOptional } from 'class-validator';

export class CreateTaskDto {
  @IsString()
  @MinLength(3)
  title: string;

  @IsString()
  @IsOptional()
  description?: string;
}
