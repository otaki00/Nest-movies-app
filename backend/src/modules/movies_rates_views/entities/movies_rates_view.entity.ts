import { Movie } from 'src/modules/movies/entities/movie.entity';
import { User } from 'src/modules/users/entities/user.entity';
import {
  Entity,
  PrimaryColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

@Entity('movies_rates_views')
export class MovieRateView {
  @PrimaryColumn({ type: 'int' })
  movie_id;

  @PrimaryColumn({ type: 'int' })
  user_id;

  //   @Column({ type: 'float', check: Check('rate >= 1 AND rate <= 10') })
  //   rate

  @Column({ type: 'float' })
  rate;

  @Column({ type: 'text', default: 'no review from this user', nullable: true })
  review_content;

  @CreateDateColumn({ type: 'timestamp' })
  created_at;

  @UpdateDateColumn({ type: 'timestamp' })
  updated_at;

  @ManyToOne(() => Movie, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'movie_id' })
  movie;

  @ManyToOne(() => User, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'user_id' })
  user;
}
