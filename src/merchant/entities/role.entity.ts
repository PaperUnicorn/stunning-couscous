import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, OneToOne, ManyToOne } from 'typeorm';
import { Permission } from './permission.entity';

@Entity()
export class Role {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;
  
    @Column()
    priority: number;
  
    permissions: Permission[];
}
