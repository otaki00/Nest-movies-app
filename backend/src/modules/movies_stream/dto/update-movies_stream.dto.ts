import { PartialType } from '@nestjs/mapped-types';
import { CreateMoviesStreamDto } from './create-movies_stream.dto';
import { Timestamp } from 'typeorm';

export class UpdateMoviesStreamDto extends PartialType(CreateMoviesStreamDto) {
    movie_id?: number;

    stream_status?: string;

    start_date?: Timestamp;

    end_date?: Timestamp;
}

