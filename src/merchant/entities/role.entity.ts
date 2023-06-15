import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, OneToOne, ManyToOne, ManyToMany, JoinTable } from 'typeorm';
import { Permission } from './permission.entity';

@Entity()
export class Role {

    @PrimaryGeneratedColumn()
    id: string;

    @Column()
    name: string;
  
    @Column()
    priority: number;

    @Column()
    createdBy: string;

    @ManyToMany(() => Permission)
    @JoinTable()
    permissions: Permission[];
}
