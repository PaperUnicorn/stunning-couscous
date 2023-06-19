import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity()
export class Permission {

    @PrimaryColumn()
    id: string;
  
    @Column()
    action: string;
  
    @Column()
    domain: string;

    @Column()
    key: string;

}
