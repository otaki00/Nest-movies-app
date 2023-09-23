import { PartialType } from '@nestjs/mapped-types';
import { CreateMoviesStreamDto } from './create-movies_stream.dto';

export class UpdateMoviesStreamDto extends PartialType(CreateMoviesStreamDto) {}
