import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
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
}
