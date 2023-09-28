import { Module } from '@nestjs/common';
import { MoviesStreamService } from './movies_stream.service';
import { MoviesStreamController } from './movies_stream.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MovieStream } from './entities/movies_stream.entity';
import { CrudSharedOP } from 'src/shared/crud/crud.shared';

@Module({
  imports: [TypeOrmModule.forFeature([MovieStream])],
  controllers: [MoviesStreamController],
  providers: [MoviesStreamService, CrudSharedOP],
})
export class MoviesStreamModule {}
