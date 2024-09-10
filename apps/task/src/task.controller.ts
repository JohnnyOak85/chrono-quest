import { Controller } from '@nestjs/common';
import { GrpcMethod } from '@nestjs/microservices';
import { TaskBody } from './task.repository';
import { TaskService } from './task.service';

@Controller()
export class TaskController {
  constructor(private readonly taskService: TaskService) {}

  @GrpcMethod('TaskService', 'CreateTask')
  async createTask(data: TaskBody) {
    return this.taskService.createTask(data);
  }

  @GrpcMethod('TaskService', 'GetAllTasks')
  async getAllTasks() {
    return this.taskService.getAllTasks();
  }
}
