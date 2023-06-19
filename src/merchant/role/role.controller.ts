import { Body, Controller, Post } from '@nestjs/common';
import { CreateRoleDTO } from '../dto/create-role.dto';
import { RoleService } from './role.service';

@Controller('role')
export class RoleController {
    constructor(private readonly service: RoleService){}

    @Post()
    createRole(@Body() role: CreateRoleDTO) {
        return this.service.createRole(role);
    }
}
