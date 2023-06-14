import { Entity, Column, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { StoreProfile } from './store.profile.entity';
import { Merchant } from './merchant.entity';

@Entity()
export class Storefront {
    @PrimaryGeneratedColumn()
    id: string;
  
    @Column()
    name: string;
  
    @Column({ default: true })
    isActive: boolean;

    @Column(() => StoreProfile)
    storeProfile: StoreProfile;

    @ManyToOne(()=> Merchant, (merchant) => merchant.stores)
    merchant: string;
}
