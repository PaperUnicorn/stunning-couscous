import { Entity, Column, ManyToOne, PrimaryColumn } from 'typeorm';

@Entity()
export class Permission {

    @PrimaryColumn()
    id: string;
  
    @Column()
    action: string;
  
    @Column()
    domain: string;

}
