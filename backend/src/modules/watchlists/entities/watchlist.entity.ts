import { User } from 'src/modules/users/entities/user.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
} from 'typeorm';

@Entity('watchlists')
export class Watchlist {
  @PrimaryGeneratedColumn()
  watchlist_id;

  @Column({ type: 'varchar', length: 30 })
  list_name;

  @Column({
    type: 'varchar',
    length: 100,
    default: 'no description',
    nullable: true,
  })
  description;


  @CreateDateColumn({ type: 'timestamp' })
  created_at;

  @UpdateDateColumn({ type: 'timestamp' })
  updated_at;

  @ManyToOne(() => User,  (user)=> user.watchlists)
  user: User

  constructor(object: Partial<Watchlist>) {
    Object.assign(this, object);
  }
}
