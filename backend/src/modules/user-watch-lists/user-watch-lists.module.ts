import { Module } from '@nestjs/common';
import { UserWatchListsService } from './user-watch-lists.service';
import { UserWatchListsController } from './user-watch-lists.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserWatchlist } from './entities/user-watch-list.entity';
import { CrudSharedOP } from 'src/shared/crud/crud.shared';

@Module({
  imports: [TypeOrmModule.forFeature([UserWatchlist])],
  controllers: [UserWatchListsController],
  providers: [UserWatchListsService, CrudSharedOP],
})
export class UserWatchListsModule {}
