import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Role } from '../entities/role.entity';
import { CreateRoleDTO } from '../dto/create-role.dto';
import { Permission } from '../entities/permission.entity';
import { MerchantRole } from '../entities/merchant-role.entity';

@Injectable()
export class RoleService {
  constructor(
      @InjectRepository(Role)
      private repository:Repository<Role>,
      @InjectRepository(Permission)
      private permissionRepository:Repository<Permission>,
      @InjectRepository(MerchantRole)
      private merchantRoleRepository:Repository<MerchantRole>
    ){}

  async createRole(merchantId: string, roleDTO: CreateRoleDTO): Promise<Role> {
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

    const role: Partial<MerchantRole> = {
      name: roleDTO.name,
      priority: roleDTO.priority,
      permissions: selectedPermissions,
      merchant: merchantId,
      createdBy: 'user'
    }
    return await this.merchantRoleRepository.save(role)
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

  async getRolesOfMerchant(merchantId: string): Promise<Role[]> {
    return await this.merchantRoleRepository.find({
      relations:{
        permissions: true
      },
      where: {
        merchant: merchantId
      }
    })
  }

  
}
