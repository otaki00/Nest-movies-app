import { Injectable } from '@nestjs/common';
import { CreateMoviesStreamDto } from './dto/create-movies_stream.dto';
import { UpdateMoviesStreamDto } from './dto/update-movies_stream.dto';
import { CrudSharedOP } from 'src/shared/crud/crud.shared';
import { MovieStream } from './entities/movies_stream.entity';

@Injectable()
export class MoviesStreamService {
  constructor(private crudOp: CrudSharedOP){}

  create(createMoviesStreamDto: CreateMoviesStreamDto) {
    const movieStream = new MovieStream(createMoviesStreamDto)
    return this.crudOp.create(movieStream, MovieStream);
  }

  findAll() {
    return this.crudOp.findAll(MovieStream);
  }

  findOne(id: number) {
    return this.crudOp.findOne(id, MovieStream);
  }

  update(id: number, updateMoviesStreamDto: UpdateMoviesStreamDto) {
    return this.crudOp.update(id, updateMoviesStreamDto, MovieStream);
  }

  remove(id: number) {
    return this.crudOp.remove(id, MovieStream);
  }
}
