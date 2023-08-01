import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateRoleDTO } from '../dto/create-role.dto';
import { RoleService } from './role.service';
import { ApiTags } from '@nestjs/swagger';

@Controller(':merchantId/role')
@ApiTags("role")
export class RoleController {
    constructor(private readonly service: RoleService){}

    @Post()
    createRole(@Param('merchantId') merchantId: string, @Body() role: CreateRoleDTO) {
        return this.service.createRole(merchantId,role);
    }

    @Get()
    fetchAllRolesOfMerchant(@Param('merchantId') merchantId: string) {
        return this.service.getRolesOfMerchant(merchantId);
    }

    @Get("/:roleId")
    getRoleOfMerchant(@Param('merchantId') merchantId: string, @Param('roleId') roleId: string) {
        return this.service.getRoleOfMerchat(roleId, merchantId);
    }
}
