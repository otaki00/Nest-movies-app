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

@Entity('user_watch_history')
export class UserWatchHistory {
  @PrimaryColumn({ type: 'int' })
  user_id;

  @PrimaryColumn({ type: 'int' })
  movie_id;

  @Column({ type: 'timestamp', default: () => 'CURRENT_TIMESTAMP' })
  watch_at;

  @CreateDateColumn({ type: 'timestamp' })
  created_at;

  @UpdateDateColumn({ type: 'timestamp' })
  updated_at;

  @ManyToOne(() => User, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'user_id' })
  user;

  @ManyToOne(() => Movie, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'movie_id' })
  movie;
}
