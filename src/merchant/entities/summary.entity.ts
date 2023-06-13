import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

export class Summary{

    @Column()
    registeredOn: Date
}