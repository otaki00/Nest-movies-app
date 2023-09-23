// import { User } from './Users.entity';
import { User } from 'src/modules/users/entities/user.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

@Entity('billis')
export class Bill {
  @PrimaryGeneratedColumn()
  bill_id;

  @Column({ type: 'int' })
  user_id;

  @Column({ type: 'double precision' })
  total_amount;

  @Column({ type: 'timestamp' })
  pay_time;

  @Column({ type: 'date' })
  due_date;

  @CreateDateColumn({ type: 'timestamp' })
  created_at;

  @UpdateDateColumn({ type: 'timestamp' })
  updated_at;

  @ManyToOne(() => User, { onDelete: 'CASCADE' })
  @JoinColumn({ name: 'user_id' })
  user;
}
