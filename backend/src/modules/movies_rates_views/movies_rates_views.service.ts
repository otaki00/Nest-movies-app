import { Injectable } from '@nestjs/common';
import { CreateMoviesRatesViewDto } from './dto/create-movies_rates_view.dto';
import { UpdateMoviesRatesViewDto } from './dto/update-movies_rates_view.dto';

@Injectable()
export class MoviesRatesViewsService {
  create(createMoviesRatesViewDto: CreateMoviesRatesViewDto) {
    return 'This action adds a new moviesRatesView';
  }

  findAll() {
    return `This action returns all moviesRatesViews`;
  }

  findOne(id: number) {
    return `This action returns a #${id} moviesRatesView`;
  }

  update(id: number, updateMoviesRatesViewDto: UpdateMoviesRatesViewDto) {
    return `This action updates a #${id} moviesRatesView`;
  }

  remove(id: number) {
    return `This action removes a #${id} moviesRatesView`;
  }
}
