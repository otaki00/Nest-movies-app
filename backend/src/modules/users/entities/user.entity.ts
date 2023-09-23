// import { PaymentMethod } from 'src/payment_methods/entities/payment_method.entity';
import { PaymentMethod } from 'src/modules/payment_methods/entities/payment_method.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn()
  user_id;

  @Column({ type: 'varchar', length: 70 })
  name;

  @Column({ type: 'varchar', length: 40 })
  username;

  @Column({ type: 'varchar', length: 40, unique: true })
  email;

  @Column({ type: 'varchar', length: 200 })
  password;

  @ManyToOne(() => PaymentMethod, { nullable: true, onDelete: 'SET NULL' })
  @JoinColumn({ name: 'payment_method_id' })
  payment_method;

  @CreateDateColumn()
  created_at;

  @UpdateDateColumn()
  updated_at;

  constructor(item: Partial<User>) {
    Object.assign(this, item);
  }
}
