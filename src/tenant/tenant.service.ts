import { Injectable } from '@nestjs/common';
import { Tenant } from './entities/tenant.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class TenantService {

  constructor(
    @InjectRepository(Tenant)
    private repository:Repository<Tenant>
  ){}
  async findAll(): Promise<Tenant[]> {
    return await this.repository.find();
  }

  async findOne(id: number): Promise<Tenant> {
    return await this.repository.findOne({
      relations:{
        merchants: true
      },
      where: {
        id
      }
    });
  }

  async findOneByApiKey(apiKey: string): Promise<boolean> {
    const merchant = await this.repository.findOne({
      where: {
        apiKey
      }
    });

    return Object.keys(merchant).length != 0 
  }

}
