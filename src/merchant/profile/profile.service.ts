import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Profile } from '../entities/profile.entity';
import { Merchant } from '../entities/merchant.entity';

@Injectable()
export class ProfileService {
    constructor(
        @InjectRepository(Profile)
        private repository:Repository<Profile>,
        @InjectRepository(Merchant)
        private merchantRepository:Repository<Merchant>,
    ){}

    async findProfileOfMerchant(id: number): Promise<Merchant> {
        return await this.merchantRepository.findOne({
            relations: {
                profile: {
                    preferences:true,
                    summary: true
                },
            },
           where:{
            profile:{
                id
            }
           }
        });
    }
}