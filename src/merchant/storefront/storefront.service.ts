import { Injectable } from '@nestjs/common';
import { Storefront } from '../entities/storefront.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateStorefrontDto } from '../dto/create-storefront.dto';
import { StoreProfile } from '../entities/store.profile.entity';

@Injectable()
export class StorefrontService {
    constructor(
        @InjectRepository(Storefront)
        private storefrontRepository:Repository<Storefront>,
        @InjectRepository(StoreProfile)
        private storeProfileRepository:Repository<StoreProfile>
    ){}

    async createStore(request: CreateStorefrontDto): Promise<Storefront>{
        const storeProfile = {
            city: request.city,
            state: request.state,
            pincode: request.pincode,
            address: request.address,
            region: request.region,
            manager: request.manager,
        }
        const store: Partial<Storefront> = {
            name: request.name,
            isActive: true,
            storeProfile,
        }
        return await this.storefrontRepository.save(store);
        
    }

    async findStoreById(id: number): Promise<Storefront>{
        return this.storefrontRepository.findOne({
            relations:{
                storeProfile: true
            },
            where: {
                id
            }
        })
    }
}
