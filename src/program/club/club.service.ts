import { HttpException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateClubDto } from '../dto/create-club.dto';
import { UpdateClubModifierDto } from '../dto/update-club-modifier.dto';
import { Club } from '../entities/club.entity';
import { ClubModifier } from '../entities/club-modifier.entity';

@Injectable()
export class ClubService {

    constructor(
        @InjectRepository(Club)
        private readonly clubRepository: Repository<Club>,
        @InjectRepository(ClubModifier)
        private readonly clubModifierRepository: Repository<ClubModifier>
        ){}

    async create(createClubDto: CreateClubDto) {
        const modifiers: ClubModifier [] = [] ;
        for(const id of createClubDto.modifiers){
          await this.clubModifierRepository.findOneBy({id})
          .then((clubM) => {
            if(clubM == null || clubM == undefined){
              throw new HttpException("no club modifier with that id found", 400);
            }
            modifiers.push(clubM);
          })
        }
        console.log(modifiers)
        const club: Partial<Club> = {
          name: createClubDto.name,
          modifiers,
          createdBy: 'user',
          createdOn: new Date()
        }
        console.log(club)
        return this.clubRepository.save(club);
      }
    
      findAll(): Promise<Club[]>{
        return this.clubRepository.find();
      }
    
      async findOne(id: string): Promise<Club> {
        return await this.clubRepository.findOne({
          where:{
            id
          }
        });
      }
    
      async update(id: string, updateCMDto: UpdateClubModifierDto) {
        await this.clubRepository.update(id, updateCMDto)
        return this.findOne(id);
      }
    
      remove(id: string) {
        return this.clubRepository.delete(id).then((data) => {if(data.affected!=0) return "deleted"});
      }
}
