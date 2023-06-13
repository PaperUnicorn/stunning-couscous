import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, OneToOne, OneToMany, ManyToOne } from 'typeorm';
import { Profile } from './profile.entity';
import { User } from './user.entity';
import { Tenant } from 'src/tenant/entities/tenant.entity';

@Entity()
export class Merchant {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    firstName: string;
  
    @Column()
    lastName: string;
  
    @Column({ default: true })
    isActive: boolean;

    @Column(() => Profile)
    profile: Profile

    @OneToMany(()=> User , (user) => user.merchantId)
    users: User[]

    @ManyToOne(()=> Tenant, (tenant) => tenant.id)
    tenant: string;
}
