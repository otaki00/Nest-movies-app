import { PartialType } from '@nestjs/mapped-types';
import { CreateUserWatchListDto } from './create-user-watch-list.dto';

export class UpdateUserWatchListDto extends PartialType(CreateUserWatchListDto) {}
