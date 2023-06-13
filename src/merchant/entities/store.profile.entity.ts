import {Column} from 'typeorm';

export class StoreProfile {
  
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
