import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, OneToOne, ManyToOne } from 'typeorm';
import { Profile } from './profile.entity';
import { Role } from './role.entity';

@Entity()
export class Permission {
  
    @Column()
    action: string;
  
    @Column()
    domain: string;
  
    @ManyToOne(()=> Role , (role) => role.permissions)
    roleId: number;
}
