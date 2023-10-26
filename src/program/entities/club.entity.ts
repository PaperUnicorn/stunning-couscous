import { PrimaryGeneratedColumn, Column, ManyToMany, JoinColumn, Entity } from "typeorm";
import { ClubModifier } from "./club-modifier.entity";
import { IsDateString } from "class-validator";

@Entity()
export class Club{
    @PrimaryGeneratedColumn()
    id: string;
  
    @Column()
    name: string;
  
    @ManyToMany(() => ClubModifier, (cm) => cm.id)
    @JoinColumn()
    modifiers: ClubModifier[]

    @Column()
    createdBy: string;

    @Column()
    @IsDateString()
    createdOn: Date;
}