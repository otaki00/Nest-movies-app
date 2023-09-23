import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserWatchListsService } from './user-watch-lists.service';
import { CreateUserWatchListDto } from './dto/create-user-watch-list.dto';
import { UpdateUserWatchListDto } from './dto/update-user-watch-list.dto';

@Controller('user-watch-lists')
export class UserWatchListsController {
  constructor(private readonly userWatchListsService: UserWatchListsService) {}

  @Post()
  create(@Body() createUserWatchListDto: CreateUserWatchListDto) {
    return this.userWatchListsService.create(createUserWatchListDto);
  }

  @Get()
  findAll() {
    return this.userWatchListsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userWatchListsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserWatchListDto: UpdateUserWatchListDto) {
    return this.userWatchListsService.update(+id, updateUserWatchListDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userWatchListsService.remove(+id);
  }
}
