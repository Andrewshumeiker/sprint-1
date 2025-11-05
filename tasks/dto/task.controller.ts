// src/tasks/tasks.controller.ts
import { Controller, Get, Post, Patch, Delete, Param, Body, Query, UseGuards } from '@nestjs/common';
import { TasksService } from './tasks.service';
import { JwtAuthGuard } from '../auth/guards/jwt-auth.guard';
import { GetUser } from '../common/decorators/get-user.decorator';
import { CreateTaskDto } from './dto/create-task.dto';
import { UpdateTaskDto } from './dto/update-task.dto';
import { PaginationDto } from './dto/pagination.dto';

@UseGuards(JwtAuthGuard)
@Controller('tasks')
export class TasksController {
  constructor(private tasksService: TasksService) {}

  // HU-1: Listar tareas con paginación
  @Get()
  listTasks(
    @GetUser() user: { userId: string },
    @Query() query: PaginationDto,
  ) {
    const page = query.page ? parseInt(query.page, 10) : 1;
    const limit = query.limit ? parseInt(query.limit, 10) : 10;
    return this.tasksService.listTasksForUser(user.userId, page, limit);
  }

  // HU-2: Crear tarea
  @Post()
  createTask(
    @GetUser() user: { userId: string },
    @Body() dto: CreateTaskDto,
  ) {
    return this.tasksService.createTaskForUser(
      user.userId,
      dto.title,
      dto.description,
    );
  }

  // HU-3: Ver detalle
  @Get(':id')
  getTask(
    @GetUser() user: { userId: string },
    @Param('id') id: string,
  ) {
    return this.tasksService.getTaskByIdForUser(id, user.userId);
  }

  // HU-4: Actualizar
  @Patch(':id')
  updateTask(
    @GetUser() user: { userId: string },
    @Param('id') id: string,
    @Body() dto: UpdateTaskDto,
  ) {
    return this.tasksService.updateTaskForUser(id, user.userId, dto);
  }

  // HU-5: Eliminar
  @Delete(':id')
  deleteTask(
    @GetUser() user: { userId: string },
    @Param('id') id: string,
  ) {
    return this.tasksService.deleteTaskForUser(id, user.userId);
  }
}
