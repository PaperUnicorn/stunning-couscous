import { Merchant } from "src/merchant/entities/merchant.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Tenant {

    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    name: string;
  
    @Column()
    email: string;

    @Column()
    apiKey: string;
    
    @Column({ default: true })
    isActive: boolean;

    @OneToMany(() => Merchant, (merchant) => merchant.tenant)
    merchants: Merchant[]

}
