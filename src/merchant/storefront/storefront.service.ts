import { Injectable } from '@nestjs/common';
import { Storefront } from '../entities/storefront.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateStorefrontDto } from '../dto/create-storefront.dto';
import { UpdateStorefrontDto } from '../dto/update-storefront.dto';

@Injectable()
export class StorefrontService {
    constructor(
        @InjectRepository(Storefront)
        private storefrontRepository:Repository<Storefront>,
    ){}

    async createStore(request: CreateStorefrontDto | UpdateStorefrontDto, merchantId: string): Promise<Storefront>{
        const storeProfile = {
            city: request.city,
            state: request.state,
            pincode: request.pincode,
            address: request.address,
            region: request.region,
            manager: request.manager,
        }
        const store: Partial<Storefront> = {
            id: request.Id,
            name: request.name,
            isActive: true,
            merchant: merchantId,
            storeProfile,
        }
        console.log(store)
        return await this.storefrontRepository.save(store);
        
    }

    async findStoreById(id: string): Promise<Storefront>{
        return await this.storefrontRepository.findOne({
            relations:{
                storeProfile: true
            },
            where: {
                id
            }
        })
    }

    async findStoresBy(whereQuery: any): Promise<Storefront[]>{
        return this.storefrontRepository.find({
            relations:{
                storeProfile: true
            },
            where: {
                ...whereQuery
            }
        })
    }
}
