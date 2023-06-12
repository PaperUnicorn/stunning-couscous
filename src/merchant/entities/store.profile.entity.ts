import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class StoreProfile {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    city: string;

    @Column()
    state: string;

    @Column()
    pincode: string;

    @Column()
    address: string;

    @Column()
    region: string;

    @Column()
    manager: string;


}
