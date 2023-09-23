import { PartialType } from '@nestjs/mapped-types';
import { CreateUserWatchHistoryDto } from './create-user_watch_history.dto';

export class UpdateUserWatchHistoryDto extends PartialType(CreateUserWatchHistoryDto) {}
