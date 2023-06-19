import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import { Merchant } from "./merchant.entity";
import { Role } from "./role.entity";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: string

    @Column()
    username: string;

    @Column()
    password: string;

    @Column()
    email: string;

    @ManyToOne(() => Role, (role) => role.id)
    @JoinColumn()
    role: Role

    @ManyToOne(() => Merchant ,(merchant) => merchant.users)
    merchant: string
}