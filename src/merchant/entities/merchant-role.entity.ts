import { Column, Entity, ManyToOne } from "typeorm";
import { Role } from "./role.entity";
import { Merchant } from "./merchant.entity";

@Entity()
export class MerchantRole extends Role {
    @Column()
    @ManyToOne(() => Merchant, merchant => merchant.id)
    merchant: string;
}