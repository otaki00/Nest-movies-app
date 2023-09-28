import { Injectable } from '@nestjs/common';
import { CreateMoviesRatesViewDto } from './dto/create-movies_rates_view.dto';
import { UpdateMoviesRatesViewDto } from './dto/update-movies_rates_view.dto';
import { CrudSharedOP } from 'src/shared/crud/crud.shared';
import { MovieRateView } from './entities/movies_rates_view.entity';

@Injectable()
export class MoviesRatesViewsService {
  constructor(
    private crudOp: CrudSharedOP
  ){}

  create(createMoviesRatesViewDto: CreateMoviesRatesViewDto) {
    const mrv = new MovieRateView(createMoviesRatesViewDto)
    return this.crudOp.create(mrv, MovieRateView);
  }

  findAll() {
    return this.crudOp.findAll(MovieRateView);
  }

  findOne(id: number) {
    return this.crudOp.findOne(id, MovieRateView);
  }

  update(id: number, updateMoviesRatesViewDto: UpdateMoviesRatesViewDto) {
    return this.crudOp.update(id, updateMoviesRatesViewDto, MovieRateView);
  }

  remove(id: number) {
    return this.crudOp.remove(id, MovieRateView);
  }
}
