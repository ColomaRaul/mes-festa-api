import {
  Column,
  CreateDateColumn,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { Characteristic } from '../interfaces';
import { Organization } from '../../organization/entities/organization.entity';

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

  @Column('bool', {
    default: false,
  })
  isAdmin: boolean;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @ManyToOne(
    () => Organization,
    (organization) => organization.userOrganizations,
  )
  organization: Organization;
}
