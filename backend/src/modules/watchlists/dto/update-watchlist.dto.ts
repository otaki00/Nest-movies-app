import { PartialType } from '@nestjs/mapped-types';
import { CreateWatchlistDto } from './create-watchlist.dto';

export class UpdateWatchlistDto extends PartialType(CreateWatchlistDto) {

    list_name?: string;
    description?: string;

}
