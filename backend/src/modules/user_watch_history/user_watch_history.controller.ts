import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserWatchHistoryService } from './user_watch_history.service';
import { CreateUserWatchHistoryDto } from './dto/create-user_watch_history.dto';
import { UpdateUserWatchHistoryDto } from './dto/update-user_watch_history.dto';

@Controller('user-watch-history')
export class UserWatchHistoryController {
  constructor(private readonly userWatchHistoryService: UserWatchHistoryService) {}

  @Post()
  create(@Body() createUserWatchHistoryDto: CreateUserWatchHistoryDto) {
    return this.userWatchHistoryService.create(createUserWatchHistoryDto);
  }

  @Get()
  findAll() {
    return this.userWatchHistoryService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userWatchHistoryService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserWatchHistoryDto: UpdateUserWatchHistoryDto) {
    return this.userWatchHistoryService.update(+id, updateUserWatchHistoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userWatchHistoryService.remove(+id);
  }
}
