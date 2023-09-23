import { Injectable } from '@nestjs/common';
import { CreateMoviesStreamDto } from './dto/create-movies_stream.dto';
import { UpdateMoviesStreamDto } from './dto/update-movies_stream.dto';

@Injectable()
export class MoviesStreamService {
  create(createMoviesStreamDto: CreateMoviesStreamDto) {
    return 'This action adds a new moviesStream';
  }

  findAll() {
    return `This action returns all moviesStream`;
  }

  findOne(id: number) {
    return `This action returns a #${id} moviesStream`;
  }

  update(id: number, updateMoviesStreamDto: UpdateMoviesStreamDto) {
    return `This action updates a #${id} moviesStream`;
  }

  remove(id: number) {
    return `This action removes a #${id} moviesStream`;
  }
}
