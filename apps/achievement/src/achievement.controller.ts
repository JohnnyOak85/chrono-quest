import { Controller, Get } from '@nestjs/common';
import { AchievementService } from './achievement.service';

@Controller()
export class AchievementController {
  constructor(private readonly achievementService: AchievementService) {}

  @Get()
  getHello(): string {
    return this.achievementService.getHello();
  }
}
