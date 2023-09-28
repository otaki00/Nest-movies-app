import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('plans')
export class Plan {
  @PrimaryGeneratedColumn()
  plan_id;

  @Column({ type: 'varchar', length: 30 })
  name;

  @Column({ type: 'double precision' })
  amount;

  @Column({ type: 'int' })
  total_months;

  @CreateDateColumn({ type: 'timestamp' })
  created_at;

  @UpdateDateColumn({ type: 'timestamp' })
  updated_at;

  constructor(object: Partial<Plan>) {
    Object.assign(this, object);
  }
}
