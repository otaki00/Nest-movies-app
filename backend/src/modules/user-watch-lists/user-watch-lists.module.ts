import { Module } from '@nestjs/common';
import { UserWatchListsService } from './user-watch-lists.service';
import { UserWatchListsController } from './user-watch-lists.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserWatchlist } from './entities/user-watch-list.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserWatchlist])],
  controllers: [UserWatchListsController],
  providers: [UserWatchListsService],
})
export class UserWatchListsModule {}
