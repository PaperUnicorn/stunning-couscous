import { PrimaryGeneratedColumn, Column, Entity, ManyToOne } from "typeorm";
import { Club } from "./club.entity";

@Entity()
export class ClubModifier {
    @PrimaryGeneratedColumn()
    id: string;
  
    @Column()
    name: string;
  
    @Column()
    pointBoost: number;

    @Column()
    pointScale: number;

    @ManyToOne(()=> Club, (club) => club.modifiers)
    club: string;
    
}