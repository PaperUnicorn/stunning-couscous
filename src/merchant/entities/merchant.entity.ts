import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, OneToOne } from 'typeorm';
import { Profile } from './profile.entity';

@Entity()
export class Merchant {
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column()
    firstName: string;
  
    @Column()
    lastName: string;
  
    @Column({ default: true })
    isActive: boolean;

    @OneToOne(() => Profile)
    @JoinColumn()
    profile: Profile
}
