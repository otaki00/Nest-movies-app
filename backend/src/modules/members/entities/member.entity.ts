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
// import { Movie } from './Movies.entity';

@Entity('members')
export class Member {
  @PrimaryGeneratedColumn()
  member_id;

  @Column({ type: 'varchar', length: 40, unique: true })
  name;

  @Column({ type: 'enum', enum: ['actor', 'voice actor'] })
  job;

  @CreateDateColumn({ type: 'timestamp' })
  created_at;

  @UpdateDateColumn({ type: 'timestamp' })
  updated_at;

  @ManyToMany(() => Movie, (movie) => movie.movie_id)
  @JoinTable({
    name: 'cast_member',
  })
  movies?: Movie[];
}
