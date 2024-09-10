import { NestFactory } from '@nestjs/core';
import { AchievementModule } from './achievement.module';

async function bootstrap() {
  const app = await NestFactory.create(AchievementModule);
  await app.listen(3000);
}
bootstrap();
