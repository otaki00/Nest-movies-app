import { Module } from '@nestjs/common';
import { MoviesRatesViewsService } from './movies_rates_views.service';
import { MoviesRatesViewsController } from './movies_rates_views.controller';
import { MovieRateView } from './entities/movies_rates_view.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CrudSharedOP } from 'src/shared/crud/crud.shared';

@Module({
  imports: [TypeOrmModule.forFeature([MovieRateView])],
  controllers: [MoviesRatesViewsController],
  providers: [MoviesRatesViewsService, CrudSharedOP],
})
export class MoviesRatesViewsModule {}
