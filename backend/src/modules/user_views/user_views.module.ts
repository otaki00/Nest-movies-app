import { Module } from '@nestjs/common';
import { UserViewsService } from './user_views.service';
import { UserViewsController } from './user_views.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserView } from './entities/user_view.entity';
import { CrudSharedOP } from 'src/shared/crud/crud.shared';

@Module({
  imports: [TypeOrmModule.forFeature([UserView])],
  controllers: [UserViewsController],
  providers: [UserViewsService, CrudSharedOP],
})
export class UserViewsModule {}
