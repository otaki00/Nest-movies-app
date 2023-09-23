import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { UserViewsService } from './user_views.service';
import { CreateUserViewDto } from './dto/create-user_view.dto';
import { UpdateUserViewDto } from './dto/update-user_view.dto';

@Controller('user-views')
export class UserViewsController {
  constructor(private readonly userViewsService: UserViewsService) {}

  @Post()
  create(@Body() createUserViewDto: CreateUserViewDto) {
    return this.userViewsService.create(createUserViewDto);
  }

  @Get()
  findAll() {
    return this.userViewsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.userViewsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserViewDto: UpdateUserViewDto) {
    return this.userViewsService.update(+id, updateUserViewDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.userViewsService.remove(+id);
  }
}
