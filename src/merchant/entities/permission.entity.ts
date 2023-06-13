import { Entity, Column, ManyToOne, PrimaryColumn } from 'typeorm';
import { Role } from './role.entity';

@Entity()
export class Permission {

    @PrimaryColumn()
    id: string;
  
    @Column()
    action: string;
  
    @Column()
    domain: string;
  
    @ManyToOne(()=> Role , (role) => role.permissions)
    roleId: number;
}
