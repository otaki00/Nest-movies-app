import { PartialType } from '@nestjs/mapped-types';
import { CreateMoviesRatesViewDto } from './create-movies_rates_view.dto';

export class UpdateMoviesRatesViewDto extends PartialType(CreateMoviesRatesViewDto) {}
