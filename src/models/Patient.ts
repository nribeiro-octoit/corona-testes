import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  ManyToOne,
  JoinColumn,
} from 'typeorm';
import User from './User';
import Unit from './Unit';

@Entity('patients')
class Patient {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  name: string;

  @Column()
  birthday: Date;

  @Column()
  country: string;

  @Column()
  neighborhood: string;

  @Column()
  address: string;

  @Column()
  contact_number: string;

  @Column()
  is_health_area: boolean;

  @Column()
  is_security_area: boolean;

  @Column()
  date_test: Date;

  @Column()
  symptom_start: Date;

  @Column()
  three_days_without_symptom: boolean;

  @Column()
  isolation_period: string;

  @Column()
  result: boolean;

  @Column()
  test_mark: string;

  @Column()
  is_notificated: boolean;

  @Column()
  user_id: string;

  @Column()
  unit_id: string;

  @ManyToOne(() => User)
  @JoinColumn({ name: 'user_id' })
  user: User;

  @ManyToOne(() => Unit, unit => unit.patient, { eager: true })
  @JoinColumn({ name: 'unit_id' })
  unit: Unit;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default Patient;
