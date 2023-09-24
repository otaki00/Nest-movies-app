import { Test, TestingModule } from '@nestjs/testing';
import { UserWatchListsService } from './user-watch-lists.service';

describe('UserWatchListsService', () => {
  let service: UserWatchListsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserWatchListsService],
    }).compile();

    service = module.get<UserWatchListsService>(UserWatchListsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
