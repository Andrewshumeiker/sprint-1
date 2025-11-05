import { IsOptional, IsString, MinLength, IsEnum } from 'class-validator';
import { ApiPropertyOptional } from '@nestjs/swagger';
import { TaskStatus } from '../entities/task.entity';

export class UpdateTaskDto {
  @ApiPropertyOptional({
    example: 'Comprar pan',
    description: 'Título de la tarea (mínimo 3 caracteres)',
  })
  @IsOptional()
  @IsString()
  @MinLength(3)
  title?: string;

  @ApiPropertyOptional({
    example: 'Ir a la panadería y comprar pan integral',
    description: 'Descripción de la tarea',
  })
  @IsOptional()
  @IsString()
  description?: string;

  @ApiPropertyOptional({
    enum: TaskStatus,
    example: TaskStatus.COMPLETED,
    description: 'Estado de la tarea',
  })
  @IsOptional()
  @IsEnum(TaskStatus)
  status?: TaskStatus;
}
