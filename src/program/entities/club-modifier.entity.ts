import { PrimaryGeneratedColumn, Column } from "typeorm";

export class ClubModifier {
    @PrimaryGeneratedColumn()
    id: string;
  
    @Column()
    name: string;
  
    @Column()
    pointBoost: number;

    @Column()
    pointScale: number;
    
}