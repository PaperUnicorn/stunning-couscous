import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";
export class Preferences{

    @Column()
    profileUrl: string

    @Column()
    theme: string

}