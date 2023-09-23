import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MoviesStreamService } from './movies_stream.service';
import { CreateMoviesStreamDto } from './dto/create-movies_stream.dto';
import { UpdateMoviesStreamDto } from './dto/update-movies_stream.dto';

@Controller('movies-stream')
export class MoviesStreamController {
  constructor(private readonly moviesStreamService: MoviesStreamService) {}

  @Post()
  create(@Body() createMoviesStreamDto: CreateMoviesStreamDto) {
    return this.moviesStreamService.create(createMoviesStreamDto);
  }

  @Get()
  findAll() {
    return this.moviesStreamService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.moviesStreamService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMoviesStreamDto: UpdateMoviesStreamDto) {
    return this.moviesStreamService.update(+id, updateMoviesStreamDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.moviesStreamService.remove(+id);
  }
}
