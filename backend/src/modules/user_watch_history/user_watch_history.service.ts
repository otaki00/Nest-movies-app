import { Injectable } from '@nestjs/common';
import { CreateUserWatchHistoryDto } from './dto/create-user_watch_history.dto';
import { UpdateUserWatchHistoryDto } from './dto/update-user_watch_history.dto';
import { CrudSharedOP } from 'src/shared/crud/crud.shared';

@Injectable()
export class UserWatchHistoryService {
  constructor(private crudOp: CrudSharedOP) {}

  create(createUserWatchHistoryDto: CreateUserWatchHistoryDto) {
    return 'This action adds a new userWatchHistory';
  }

  findAll() {
    return `This action returns all userWatchHistory`;
  }

  findOne(id: number) {
    return `This action returns a #${id} userWatchHistory`;
  }

  update(id: number, updateUserWatchHistoryDto: UpdateUserWatchHistoryDto) {
    return `This action updates a #${id} userWatchHistory`;
  }

  remove(id: number) {
    return `This action removes a #${id} userWatchHistory`;
  }
}
