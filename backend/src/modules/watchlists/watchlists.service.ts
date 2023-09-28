import { Injectable } from '@nestjs/common';
import { CreateWatchlistDto } from './dto/create-watchlist.dto';
import { UpdateWatchlistDto } from './dto/update-watchlist.dto';
import { CrudSharedOP } from 'src/shared/crud/crud.shared';
import { Watchlist } from './entities/watchlist.entity';

@Injectable()
export class WatchlistsService {
  constructor(private crudOp: CrudSharedOP) {}

  create(createWatchlistDto: CreateWatchlistDto) {
    const watchlist = new Watchlist(createWatchlistDto)
    return this.crudOp.create(watchlist, Watchlist);
  }

  findAll() {
    return this.crudOp.findAll(Watchlist);
  }

  findOne(id: number) {
    return this.crudOp.findOne(id, Watchlist);
  }

  update(id: number, updateWatchlistDto: UpdateWatchlistDto) {
    return this.crudOp.update(id, updateWatchlistDto, Watchlist);
  }

  remove(id: number) {
    return this.crudOp.remove(id, Watchlist);
  }
}
