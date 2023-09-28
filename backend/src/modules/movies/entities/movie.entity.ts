import { Genre } from 'src/modules/genres/entities/genre.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  JoinTable,
  ManyToMany,
} from 'typeorm';

@Entity('movies')
export class Movie {
  @PrimaryGeneratedColumn()
  movie_id;

  @Column({ type: 'varchar', length: 150 })
  title;

  @Column({ type: 'date' })
  release_date;

  @CreateDateColumn({ type: 'timestamp' })
  created_at;

  @UpdateDateColumn({ type: 'timestamp' })
  updated_at;

  @ManyToMany(() => Genre, (gener) => gener.genre_id)
  @JoinTable({
    name: 'movies_genre',
  })
  geners?: Genre[];

  constructor(movie: Partial<Movie>) {
    Object.assign(this, movie);
  }
}
