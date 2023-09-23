import { Test, TestingModule } from '@nestjs/testing';
import { UserWatchListsController } from './user-watch-lists.controller';
import { UserWatchListsService } from './user-watch-lists.service';

describe('UserWatchListsController', () => {
  let controller: UserWatchListsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserWatchListsController],
      providers: [UserWatchListsService],
    }).compile();

    controller = module.get<UserWatchListsController>(UserWatchListsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
