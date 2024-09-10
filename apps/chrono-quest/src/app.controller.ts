import { Body, Controller, Get, Inject, Post } from '@nestjs/common';
import { ClientGrpc } from '@nestjs/microservices';
import { Observable } from 'rxjs';
import { Task, TaskBody } from '../../task/src/task.repository';
import { TaskService } from '../../task/src/task.service';
import { AppService } from './app.service';

export interface GetAllTasksResponse {
  tasks: Task[];
}

@Controller()
export class AppController {
  private taskService: TaskService;

  constructor(
    private readonly appService: AppService,
    @Inject('TASK_PACKAGE') private client: ClientGrpc,
  ) {}

  onModuleInit() {
    this.taskService = this.client.getService<TaskService>('TaskService');
  }

  @Post('task')
  createTask(@Body() createTaskDto: TaskBody) {
    return this.taskService.createTask(createTaskDto);
  }

  @Get('task')
  getAllTasks(): Observable<GetAllTasksResponse> {
    console.log('===APP CONTROLLER===');
    return this.taskService.getAllTasks();
  }
}
