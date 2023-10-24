import { Injectable } from '@nestjs/common';
import { LoyaltyType } from '../entities/loyalty-type.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateLoyaltyTypeDto } from '../dto/create-loyalty-type.dto';
import { UpdateLoyaltyTypeDto } from '../dto/update-loyalty-type.dto';

@Injectable()
export class LoyaltyTypeService {

    constructor(
        @InjectRepository(LoyaltyType)
        private repository:Repository<LoyaltyType>
      ){}
      create(createCMDto: CreateLoyaltyTypeDto) {
        return this.repository.save(createCMDto);
      }
    
      findAll(): Promise<LoyaltyType[]>{
        return this.repository.find();
      }
    
      async findOne(id: string): Promise<LoyaltyType> {
        return await this.repository.findOne({
          where:{
            id
          }
        });
      }
    
      async update(id: string, updateLTDto: UpdateLoyaltyTypeDto) {
        await this.repository.update(id, updateLTDto)
        return this.findOne(id);
      }
    
      remove(id: string) {
        return this.repository.delete(id).then((data) => {if(data.affected!=0) return "deleted"});
      }
}
