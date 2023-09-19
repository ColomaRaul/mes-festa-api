import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Characteristic } from '../interfaces';

@Entity('user-organization')
@Index(['userId', 'organizationId'], { unique: true })
export class UserOrganization {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('uuid')
  userId: string;

  @Column('uuid')
  organizationId: string;

  @Column('timestamp', {
    nullable: true,
  })
  memberSince: Date;

  @Column('bool', {
    default: true,
  })
  isActive: boolean;

  @Column('jsonb', {
    nullable: true,
  })
  characteristics?: Characteristic[];

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
