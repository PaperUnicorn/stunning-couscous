
import { Merchant } from "src/merchant/entities/merchant.entity";
import { Profile } from "src/merchant/entities/profile.entity";
import { PrimaryGeneratedColumn, Column, OneToMany, ManyToOne, OneToOne, JoinColumn } from "typeorm";
import { LoyaltyType } from "./loyalty-type.entity";

export class Program {
    @PrimaryGeneratedColumn()
    id: string;
  
    @Column()
    name: string;
  
    @Column()
    startDate: string;

    @Column()
    endDate: string;
  
    @Column({ default: true })
    isActive: boolean;

    @OneToOne(() => Merchant, (merchant) => merchant.id)
    @JoinColumn()
    merchant: string

    @ManyToOne(() => LoyaltyType, (loyaltyType) => loyaltyType.id)
    @JoinColumn()
    loyaltyType: string
}
