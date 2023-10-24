import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { ApiTags, ApiSecurity } from '@nestjs/swagger';
import { ApiKeyAuthGuard } from 'src/auth/apikey-auth.guard';
import { ClubModifierService } from './club-modifier.service';
import { CreateClubModifierDto } from '../dto/create-club-modifier.dto';
import { UpdateClubModifierDto } from '../dto/update-club-modifier.dto';

@ApiTags('club-modifier')
@ApiSecurity('api-key')
@UseGuards(ApiKeyAuthGuard)
@Controller('program/club/club-modifier')
export class ClubModifierController {
    constructor(private readonly cmService: ClubModifierService) {}

  @Post()
  create(@Body() creatCMDto: CreateClubModifierDto) {
    return this.cmService.create(creatCMDto);
  }

  @Get()
  findAll() {
    return this.cmService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cmService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateClubModifierDto) {
    return this.cmService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cmService.remove(id);
  }
}
