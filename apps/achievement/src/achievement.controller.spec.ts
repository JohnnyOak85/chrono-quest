import { Test, TestingModule } from '@nestjs/testing';
import { AchievementController } from './achievement.controller';
import { AchievementService } from './achievement.service';

describe('AchievementController', () => {
  let achievementController: AchievementController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AchievementController],
      providers: [AchievementService],
    }).compile();

    achievementController = app.get<AchievementController>(AchievementController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(achievementController.getHello()).toBe('Hello World!');
    });
  });
});
