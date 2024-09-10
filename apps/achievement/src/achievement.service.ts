import { Injectable } from '@nestjs/common';

@Injectable()
export class AchievementService {
  getHello(): string {
    return 'Hello World!';
  }
}
