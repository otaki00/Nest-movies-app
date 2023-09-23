import { PartialType } from '@nestjs/mapped-types';
import { CreateUserViewDto } from './create-user_view.dto';

export class UpdateUserViewDto extends PartialType(CreateUserViewDto) {}
