/* eslint-disable camelcase */
import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
  ManyToOne,
} from 'typeorm';
import Unit from './Unit';

@Entity('users')
class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  username: string;

  @Column()
  password: string;

  @Column()
  admin_id: string;

  @Column()
  unit_id: string;

  @ManyToOne(() => User, user => user.admin)
  @JoinColumn({ name: 'admin_id' })
  admin: User;

  @ManyToOne(() => Unit, unit => unit.user, { eager: true })
  @JoinColumn({ name: 'unit_id' })
  unit: Unit;

  @Column()
  email: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}

export default User;
