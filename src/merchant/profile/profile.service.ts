import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Profile } from '../entities/profile.entity';

@Injectable()
export class ProfileService {
    constructor(
        @InjectRepository(Profile)
        private repository:Repository<Profile>
    ){}

    async findProfileOfMerchant(id: number): Promise<Profile> {
        return await this.repository.findOneBy(
            {merchantId: id}
        );
    }
}