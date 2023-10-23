import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateClubModifierDto } from '../dto/create-club-modifier.dto';
import { UpdateClubModifierDto } from '../dto/update-club-modifier.dto';
import { ClubModifier } from '../entities/club-modifier.entity';

@Injectable()
export class ClubModifierService {

constructor(
    @InjectRepository(ClubModifier)
    private repository:Repository<ClubModifier>
  ){}
  create(createCMDto: CreateClubModifierDto) {
    return this.repository.save(createCMDto);
  }

  findAll(): Promise<ClubModifier[]>{
    return this.repository.find();
  }

  async findOne(id: string): Promise<ClubModifier> {
    return await this.repository.findOne({
      where:{
        id
      }
    });
  }

  async update(id: string, updateCMDto: UpdateClubModifierDto) {
    await this.repository.update(id, updateCMDto)
    return this.findOne(id);
  }

  remove(id: string) {
    return this.repository.delete(id).then((data) => {if(data.affected!=0) return "deleted"});
  }
}
