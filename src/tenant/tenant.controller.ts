import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { TenantService } from './tenant.service';
import { ApiTags } from '@nestjs/swagger';


@ApiTags('tenant')
@Controller('tenant')
export class TenantController {
  constructor(private readonly tenantService: TenantService) {}

  @Get()
  async findAll() {
    return await this.tenantService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string) {
    return await this.tenantService.findOne(+id);
  }

}
