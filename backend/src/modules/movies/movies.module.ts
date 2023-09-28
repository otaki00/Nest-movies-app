import { Module } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { MoviesController } from './movies.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Movie } from './entities/movie.entity';
import { CrudSharedOP } from 'src/shared/crud/crud.shared';
import { GenresService } from '../genres/genres.service';
import { GenresModule } from '../genres/genres.module';

@Module({
  imports: [TypeOrmModule.forFeature([Movie])],
  controllers: [MoviesController],
  providers: [MoviesService, CrudSharedOP],
})
export class MoviesModule {}
