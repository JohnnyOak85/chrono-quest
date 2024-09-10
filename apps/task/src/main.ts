import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { join } from 'path';
import { TaskModule } from './task.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    TaskModule,
    {
      transport: Transport.GRPC,
      options: {
        package: 'task',
        protoPath: join(process.cwd(), 'apps/task/task.proto'),
        url: 'localhost:50051', // This is the port where Task microservice will listen
      },
    },
  );

  await app.listen();
}

bootstrap();
