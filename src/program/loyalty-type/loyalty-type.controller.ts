import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { LoyaltyTypeService } from './loyalty-type.service';
import { ApiTags, ApiSecurity } from '@nestjs/swagger';
import { ApiKeyAuthGuard } from 'src/auth/apikey-auth.guard';
import { CreateLoyaltyTypeDto } from '../dto/create-loyalty-type.dto';
import { UpdateLoyaltyTypeDto } from '../dto/update-loyalty-type.dto';

@ApiTags('loyalty-type')
@ApiSecurity('api-key')
@UseGuards(ApiKeyAuthGuard)
@Controller('program/loyalty/loyalty-type')
export class LoyaltyTypeController {

    constructor(private readonly ltService:LoyaltyTypeService) {}

    @Post()
    create(@Body() creatLTDto: CreateLoyaltyTypeDto) {
      return this.ltService.create(creatLTDto);
    }
  
    @Get()
    findAll() {
      return this.ltService.findAll();
    }
  
    @Get(':id')
    findOne(@Param('id') id: string) {
      return this.ltService.findOne(id);
    }
  
    @Patch(':id')
    update(@Param('id') id: string, @Body() dto: UpdateLoyaltyTypeDto) {
      return this.ltService.update(id, dto);
    }
  
    @Delete(':id')
    remove(@Param('id') id: string) {
      return this.ltService.remove(id);
    }
}
