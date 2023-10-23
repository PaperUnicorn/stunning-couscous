import { PrimaryGeneratedColumn, Column, Entity } from "typeorm";

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
    
}