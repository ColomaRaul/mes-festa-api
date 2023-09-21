import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Transaction {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column('uuid', {
    nullable: true,
  })
  userId: string;

  @Column('uuid')
  userCreatorId: string;

  @Column('uuid')
  organizationId: string;

  @Column('text')
  typeTransaction: string;

  @Column('text')
  typeFinancial: string;

  @Column('int')
  amount: number;

  @Column('timestamp')
  date: Date;

  @Column('text')
  description: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
