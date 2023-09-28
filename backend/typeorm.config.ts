/* eslint-disable prettier/prettier */
import { ConfigService } from '@nestjs/config';
import { config } from 'dotenv';
import { Bill } from 'src/modules/bills/entities/bill.entity';
import { Director } from 'src/modules/directors/entities/director.entity';
import { Genre } from 'src/modules/genres/entities/genre.entity';
import { Member } from 'src/modules/members/entities/member.entity';
import { Movie } from 'src/modules/movies/entities/movie.entity';
import { MovieRateView } from 'src/modules/movies_rates_views/entities/movies_rates_view.entity';
import { MovieStream } from 'src/modules/movies_stream/entities/movies_stream.entity';
import { PaymentMethod } from 'src/modules/payment_methods/entities/payment_method.entity';
import { Plan } from 'src/modules/plans/entities/plan.entity';
import { Subscription } from 'src/modules/subscriptions/entities/subscription.entity';
import { UserWatchlist } from 'src/modules/user-watch-lists/entities/user-watch-list.entity';
import { UserView } from 'src/modules/user_views/entities/user_view.entity';
import { UserWatchHistory } from 'src/modules/user_watch_history/entities/user_watch_history.entity';
import { User } from 'src/modules/users/entities/user.entity';
import { Watchlist } from 'src/modules/watchlists/entities/watchlist.entity';
import { DataSource } from 'typeorm';

config();

const configService = new ConfigService();

export default new DataSource({
  type: 'postgres',
  host: configService.get('HOST_NAME'),
  port: parseInt(configService.getOrThrow('PORT')),
  database: configService.getOrThrow('DB_NAME'),
  username: configService.getOrThrow('DB_USERNAME'),
  password: configService.getOrThrow('DB_PASSWORD'),
  synchronize: configService.getOrThrow('IS_SYNC'),
  entities: [User, Bill, Director, Genre, Member, Movie, MovieRateView, MovieStream, PaymentMethod, Plan, Subscription, UserView, UserWatchHistory, UserWatchlist, Watchlist],
  migrations: ['./src/database/migrations/**']
});
