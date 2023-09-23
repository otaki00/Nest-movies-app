import { Module } from '@nestjs/common';
import { UserWatchHistoryService } from './user_watch_history.service';
import { UserWatchHistoryController } from './user_watch_history.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserWatchHistory } from './entities/user_watch_history.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserWatchHistory])],
  controllers: [UserWatchHistoryController],
  providers: [UserWatchHistoryService],
})
export class UserWatchHistoryModule {}
