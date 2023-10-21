import { PrimaryGeneratedColumn, Column, ManyToMany, JoinColumn } from "typeorm";
import { ClubModifier } from "./club-modifier.entity";

export class Club{
    @PrimaryGeneratedColumn()
    id: string;
  
    @Column()
    name: string;
  
    @ManyToMany(() => ClubModifier, (cm) => cm.id)
    @JoinColumn()
    modifiers: ClubModifier[]
}