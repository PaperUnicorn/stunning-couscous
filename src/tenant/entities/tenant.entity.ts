import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Tenant {

    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    name: string;
  
    @Column()
    email: string;

    @Column()
    apiKey: string;
    
    @Column({ default: true })
    isActive: boolean;

}
