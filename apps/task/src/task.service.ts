import { Injectable } from '@nestjs/common';
import { Task, TaskBody, TaskRepository } from './task.repository';

@Injectable()
export class TaskService {
  constructor(private readonly taskRepository: TaskRepository) {}

  async createTask(data: TaskBody): Promise<Task> {
    return this.taskRepository.createTask({ ...data, completed: false });
  }

  async getAllTasks(): Promise<Task[]> {
    console.log('===TASK SERVICE===');
    return this.taskRepository.getAllTasks();
  }

  async updateTask(id: number, completed: boolean): Promise<Task> {
    return this.taskRepository.updateTask(id, completed);
  }

  async deleteTask(id: number): Promise<Task> {
    return this.taskRepository.deleteTask(id);
  }
}
