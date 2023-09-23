import { Movie } from 'src/modules/movies/entities/movie.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';

@Entity('genres')
export class Genre {
  @PrimaryGeneratedColumn()
  genre_id;

  @Column({
    type: 'enum',
    enum: [
      'action',
      'drama',
      'horror',
      'romance',
      'comedy',
      'mystery',
      'fantasy',
      'thriller',
      'sci-fi',
      'crime',
      'adventure',
    ],
  })
  type;

  @CreateDateColumn({ type: 'timestamp' })
  created_at;

  @UpdateDateColumn({ type: 'timestamp' })
  updated_at;

  @ManyToMany(() => Movie, (movie) => movie.movie_id)
  @JoinTable({
    name: 'movies_genre',
  })
  movies?: Movie[];
}
