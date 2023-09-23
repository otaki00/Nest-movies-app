import { Injectable } from '@nestjs/common';
import { CreateUserViewDto } from './dto/create-user_view.dto';
import { UpdateUserViewDto } from './dto/update-user_view.dto';

@Injectable()
export class UserViewsService {
  create(createUserViewDto: CreateUserViewDto) {
    return 'This action adds a new userView';
  }

  findAll() {
    return `This action returns all userViews`;
  }

  findOne(id: number) {
    return `This action returns a #${id} userView`;
  }

  update(id: number, updateUserViewDto: UpdateUserViewDto) {
    return `This action updates a #${id} userView`;
  }

  remove(id: number) {
    return `This action removes a #${id} userView`;
  }
}
