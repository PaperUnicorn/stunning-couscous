import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Role } from '../entities/role.entity';
import { CreateRoleDTO } from '../dto/create-role.dto';
import { Permission } from '../entities/permission.entity';

@Injectable()
export class RoleService {
  constructor(
      @InjectRepository(Role)
      private repository:Repository<Role>,
      @InjectRepository(Permission)
      private permissionRepository:Repository<Permission>
    ){}

  async createRole(roleDTO: CreateRoleDTO): Promise<Role> {
    var selectedPermissions: Permission[] = [];
    for(var permission of roleDTO.permissions){
      const found = await this.permissionRepository.findOneBy({
        id: permission
      });
      
      if(found == null){
        throw new HttpException("no such permission", HttpStatus.BAD_REQUEST)
      }

      selectedPermissions.push(found);
    }

    const role: Partial<Role> = {
      name: roleDTO.name,
      priority: roleDTO.priority,
      permissions: selectedPermissions,
      createdBy: 'user'
    }
    return await this.repository.save(role)
  }

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
