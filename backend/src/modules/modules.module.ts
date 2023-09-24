import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { PaymentMethodsModule } from './payment_methods/payment_methods.module';
import { MoviesModule } from './movies/movies.module';
import { DirectorsModule } from './directors/directors.module';
import { GenresModule } from './genres/genres.module';
import { PlansModule } from './plans/plans.module';
import { SubscriptionsModule } from './subscriptions/subscriptions.module';
import { MembersModule } from './members/members.module';
import { WatchlistsModule } from './watchlists/watchlists.module';
import { BillsModule } from './bills/bills.module';
import { MoviesStreamModule } from './movies_stream/movies_stream.module';
import { MoviesRatesViewsModule } from './movies_rates_views/movies_rates_views.module';
import { UserViewsModule } from './user_views/user_views.module';
import { UserWatchHistoryModule } from './user_watch_history/user_watch_history.module';
import { UserWatchListsModule } from './user-watch-lists/user-watch-lists.module';

@Module({
  imports: [
    UsersModule,
    PaymentMethodsModule,
    MoviesModule,
    DirectorsModule,
    GenresModule,
    PlansModule,
    SubscriptionsModule,
    MembersModule,
    WatchlistsModule,
    BillsModule,
    MoviesModule,
    MoviesStreamModule,
    MoviesRatesViewsModule,
    UserViewsModule,
    UserWatchHistoryModule,
    UserWatchListsModule,
  ],
})
export class ModulesModule {}
