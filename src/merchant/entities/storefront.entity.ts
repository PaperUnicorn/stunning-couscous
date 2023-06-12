import { Entity, Column, PrimaryGeneratedColumn, OneToOne } from 'typeorm';
import { StoreProfile } from './store.profile.entity';

@Entity()
export class Storefront {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    name: string;
  
    @Column({ default: true })
    isActive: boolean;

    @OneToOne(() => StoreProfile , {cascade:true})
    storeProfile: StoreProfile;
}
