import { Entity, Column, PrimaryGeneratedColumn, JoinColumn, OneToOne, OneToMany } from 'typeorm';
import { Profile } from './profile.entity';
import { User } from './user.entity';

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

    @OneToMany(()=> User , (user) => user.merchantId)
    users: User[]
}
