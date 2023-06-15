import { Injectable } from '@nestjs/common';
import { CreateMerchantDto } from './dto/create-merchant.dto';
import { UpdateMerchantDto } from './dto/update-merchant.dto';
import { Merchant } from './entities/merchant.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class MerchantService {
  constructor(
    @InjectRepository(Merchant)
    private merchantRepository:Repository<Merchant>
  ){}
  create(createMerchantDto: CreateMerchantDto) {
    return this.merchantRepository.save(createMerchantDto);
  }

  findAll(): Promise<Merchant[]>{
    return this.merchantRepository.find();
  }

  async findOne(id: string): Promise<Merchant> {
    return await this.merchantRepository.findOne({
      relations: {
        users: true,
        stores: true
      },
      where:{
        id
      }
    });
  }

  update(id: number, updateMerchantDto: UpdateMerchantDto) {
    return `This action updates a #${id} merchant`;
  }

  remove(id: number) {
    return `This action removes a #${id} merchant`;
  }
}
