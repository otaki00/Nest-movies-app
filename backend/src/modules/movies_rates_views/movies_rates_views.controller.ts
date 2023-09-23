import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { MoviesRatesViewsService } from './movies_rates_views.service';
import { CreateMoviesRatesViewDto } from './dto/create-movies_rates_view.dto';
import { UpdateMoviesRatesViewDto } from './dto/update-movies_rates_view.dto';

@Controller('movies-rates-views')
export class MoviesRatesViewsController {
  constructor(private readonly moviesRatesViewsService: MoviesRatesViewsService) {}

  @Post()
  create(@Body() createMoviesRatesViewDto: CreateMoviesRatesViewDto) {
    return this.moviesRatesViewsService.create(createMoviesRatesViewDto);
  }

  @Get()
  findAll() {
    return this.moviesRatesViewsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.moviesRatesViewsService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMoviesRatesViewDto: UpdateMoviesRatesViewDto) {
    return this.moviesRatesViewsService.update(+id, updateMoviesRatesViewDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.moviesRatesViewsService.remove(+id);
  }
}
