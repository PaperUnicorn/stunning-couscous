import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, OneToOne, OneToMany, ManyToOne } from 'typeorm';
import { Profile } from './profile.entity';
import { User } from './user.entity';
import { Tenant } from 'src/tenant/entities/tenant.entity';
import { Storefront } from './storefront.entity';

@Entity()
export class Merchant {
    @PrimaryGeneratedColumn()
    id: string;
  
    @Column()
    firstName: string;
  
    @Column()
    lastName: string;
  
    @Column({ default: true })
    isActive: boolean;

    @Column(() => Profile)
    profile: Profile

    @OneToMany(()=> User , (user) => user.merchant)
    users: User[]

    @OneToMany(()=> Storefront , (storefront) => storefront.merchant)
    stores: Storefront[]

    @ManyToOne(()=> Tenant, (tenant) => tenant.id)
    tenant: string;
}
