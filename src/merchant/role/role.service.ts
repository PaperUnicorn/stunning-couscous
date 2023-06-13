import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Role } from '../entities/role.entity';

@Injectable()
export class RoleService {
  constructor(
      @InjectRepository(Role)
      private repository:Repository<Role>
    ){}

  async getAllRoles(): Promise<Role[]> {
    return await this.repository.find();
  }

  async getDefaultRoles(): Promise<Role[]> {
    return await this.repository.find({
      where:{
        createdBy: 'system'
      }
    });
  }

  
}