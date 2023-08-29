import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";
import { Characteristic } from "../interfaces/characteristic.inteface";


@Entity('user')
export class User {

    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('uuid')
    organizationId: string;

    @Column('text', {
        unique: true
    })
    email: string;

    @Column('text', {
        select: false
    })
    password: string;

    @Column('text')
    name: string;

    @Column('text')
    surname: string;

    @Column('bool', {
        default: true
    })
    isActive: boolean;

    @Column('text', {
        array: true,
        default: ['user']
    })
    roles: string[];

    @Column('text', {
        nullable: true
    })
    address: string;

    @Column('timestamp', {
        nullable: true
    })
    birthday: Date;

    @Column('timestamp', {
        nullable: true
    })
    memberSince: Date;

    @Column('text', {
        nullable: true
    })
    phone: string;

    @Column('text', {
        nullable: true
    })
    dni: string;

    @Column('jsonb', {
        nullable: true
    })
    characteristics?: Characteristic[];

    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;
}