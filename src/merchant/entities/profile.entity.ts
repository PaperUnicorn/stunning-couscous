import { Entity, PrimaryGeneratedColumn, Column, JoinColumn, OneToOne } from "typeorm";
import { Preferences } from "./preferences.entity";
import { Summary } from "./summary.entity";

@Entity()
export class Profile {
    @PrimaryGeneratedColumn()
    id: number;
      
    @OneToOne(() => Preferences)
    @JoinColumn()
    preferences: Preferences

    @OneToOne(() => Summary)
    @JoinColumn()
    summary: Summary
}