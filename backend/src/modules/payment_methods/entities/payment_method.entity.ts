import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity('payment_methods')
export class PaymentMethod {
  @PrimaryGeneratedColumn()
  payment_method_id;

  @Column({ type: 'enum', enum: ['credit card', 'paypal', 'gift code'] })
  name;

  @Column({ type: 'enum', enum: ['active', 'cancelled', 'inactive'] })
  payment_method_status;

  @CreateDateColumn({ type: 'timestamp' })
  created_at;

  @UpdateDateColumn({ type: 'timestamp' })
  updated_at;

  constructor(object: Partial<PaymentMethod>) {
    Object.assign(this, object);
  }
}
