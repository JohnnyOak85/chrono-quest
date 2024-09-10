import { Injectable } from '@nestjs/common';
import { Task } from '@prisma/client';
import { PrismaService } from '../../chrono-quest/src/prisma/prisma.service';

type TaskBody = Pick<Task, 'description' | 'title'>;

@Injectable()
export class TaskRepository {
  constructor(private readonly prisma: PrismaService) {}

  async createTask(data: Omit<Task, 'id'>): Promise<any> {
    return this.prisma.task.create({ data });
  }

  async getAllTasks(): Promise<Task[]> {
    console.log('===TASK REPOSITORY===');
    const tasks = await this.prisma.task.findMany();
    console.log(tasks);
    return this.prisma.task.findMany();
  }

  async updateTask(id: number, completed: boolean): Promise<Task> {
    return this.prisma.task.update({ where: { id }, data: { completed } });
  }

  async deleteTask(id: number): Promise<Task> {
    return this.prisma.task.delete({ where: { id } });
  }
}

export { Task, TaskBody };
