import { PrimaryGeneratedColumn, Column } from "typeorm";

export class LoyaltyType {
    @PrimaryGeneratedColumn()
    id: string;
  
    @Column()
    name: string;
  
    @Column()
    description: string;

    @Column({
        type: "enum",
        enum: ["point", "percentage","visit", "hybrid"],
        default: "visit"
    })
    type: string;
  
    @Column({ default: true })
    isActive: boolean;
}