import { Movie } from 'src/modules/movies/entities/movie.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

@Entity('movies_stream')
export class MovieStream {
  @PrimaryGeneratedColumn()
  stream_id;

  @Column({ type: 'int' })
  movie_id;

  @Column({ type: 'enum', enum: ['on air', 'cnacelled', 'soon', 'aired'] })
  stream_status;

  @Column({ type: 'timestamp' })
  start_time;

  @Column({ type: 'timestamp' })
  end_time;

  @CreateDateColumn({ type: 'timestamp' })
  created_at;

  @UpdateDateColumn({ type: 'timestamp' })
  updated_at;

  @ManyToOne(() => Movie, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'movie_id' })
  movie;
}
