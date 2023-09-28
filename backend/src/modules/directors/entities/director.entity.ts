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

@Entity('directors')
export class Director {
  @PrimaryGeneratedColumn()
  director_id;

  @Column({ type: 'varchar', length: 70, unique: true})
  name;

  @CreateDateColumn({ type: 'timestamp' })
  created_at;

  @UpdateDateColumn({ type: 'timestamp' })
  updated_at;

  @ManyToMany(() => Movie, (movie) => movie.movie_id)
  @JoinTable({
    name: 'movie_directors',
  })
  movies: Movie[];
}
