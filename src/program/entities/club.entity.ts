import { PrimaryGeneratedColumn, Column, ManyToMany, JoinColumn, Entity, OneToMany, ManyToOne } from "typeorm";
import { ClubModifier } from "./club-modifier.entity";
import { IsDateString } from "class-validator";

@Entity()
export class Club{
    @PrimaryGeneratedColumn()
    id: string;
  
    @Column()
    name: string;
  
    @ManyToOne(() => ClubModifier, (cm) => cm.id)
    @JoinColumn()
    modifiers: string[]

    @Column()
    createdBy: string;

    @Column()
    @IsDateString()
    createdOn: Date;
}