import { Injectable } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { UpdateMovieDto } from './dto/update-movie.dto';
import { CrudSharedOP } from 'src/shared/crud/crud.shared';
import { Movie } from './entities/movie.entity';
import { GenresService } from '../genres/genres.service';
import { Genre } from '../genres/entities/genre.entity';

@Injectable()
export class MoviesService {
  constructor(
    private crudOp: CrudSharedOP,
    ) {}

  async create(createMovieDto: CreateMovieDto) {
    try {
      const { genres } = createMovieDto

      const genresData = await this.crudOp.findSome(Genre, genres, 'type')
      const genresType = genresData.map(genre => {
        return new Genre(genre)
      })

      const movieD = {
        title: createMovieDto.title,
        release_date: createMovieDto.release_date,
        }

      const movie= new Movie(movieD)
      movie.geners = genresType
      
      this.crudOp.create(movie, Movie)

    } catch (error) {
      throw error;
    }
  }

  findAll() {
    return this.crudOp.findAll(Movie);
  }

  findOne(id: number) {
    return this.crudOp.findOne(id, Movie);
  }

  update(id: number, updateMovieDto: UpdateMovieDto) {
    return this.crudOp.update(id, updateMovieDto, Movie);
  }

  remove(id: number) {
    return this.crudOp.remove(id, Movie);
  }
}
