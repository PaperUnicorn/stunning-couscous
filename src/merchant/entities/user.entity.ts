import { Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Merchant } from "./merchant.entity";

@Entity()
export class User{
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    username: string;

    @Column()
    password: string;

    @Column()
    email: string;

    @ManyToOne(() => Merchant ,(merchant) => merchant.users)
    merchantId: number
}