import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Preferences{
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    profileUrl: string

    @Column()
    theme: string

}