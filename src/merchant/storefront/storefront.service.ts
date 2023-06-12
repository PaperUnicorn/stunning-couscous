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
        const profile = new StoreProfile()
        profile.city = request.city;

        const store = new Storefront();
        store.name = request.name;
        store.isActive = true;
        store.storeProfile = profile;
        return await this.storefrontRepository.save(store);
        
    }
}
