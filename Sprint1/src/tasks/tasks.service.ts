// src/tasks/tasks.service.ts
import { Injectable, NotFoundException, ForbiddenException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Task, TaskStatus } from './entities/task.entity';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class TasksService {
  constructor(
    @InjectRepository(Task)
    private tasksRepo: Repository<Task>,
  ) {}

  async listTasksForUser(userId: string, page = 1, limit = 10) {
    const [data, total] = await this.tasksRepo.findAndCount({
      where: { owner: { id: userId } },
      skip: (page - 1) * limit,
      take: limit,
    });

    return {
      data,
      page,
      limit,
      total,
    };
  }

  async getTaskByIdForUser(taskId: string, userId: string) {
    const task = await this.tasksRepo.findOne({
      where: { id: taskId },
      relations: ['owner'],
    });
    if (!task) throw new NotFoundException('Task not found');
    if (task.owner.id !== userId) throw new ForbiddenException();
    return task;
  }

  async createTaskForUser(userId: string, title: string, description?: string) {
    const task = this.tasksRepo.create({
      title,
      description,
      status: TaskStatus.PENDING,
      owner: { id: userId } as any,
    });
    return this.tasksRepo.save(task);
  }

  async updateTaskForUser(taskId: string, userId: string, changes: Partial<Task>) {
    const task = await this.getTaskByIdForUser(taskId, userId);
    Object.assign(task, changes);
    return this.tasksRepo.save(task);
  }

  async deleteTaskForUser(taskId: string, userId: string) {
    const task = await this.getTaskByIdForUser(taskId, userId);
    await this.tasksRepo.remove(task);
    return { deleted: true };
  }
}
