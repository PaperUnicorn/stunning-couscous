import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { ApiTags, ApiSecurity } from '@nestjs/swagger';
import { ApiKeyAuthGuard } from 'src/auth/apikey-auth.guard';
import { CreateClubDto } from '../dto/create-club.dto';
import { UpdateClubDto } from '../dto/update-club.dto';
import { ClubService } from './club.service';

@ApiTags('club')
@ApiSecurity('api-key')
@UseGuards(ApiKeyAuthGuard)
@Controller('program/club')
export class ClubController {

    constructor(private readonly clubService: ClubService) {}

  @Post()
  create(@Body() creatCDto: CreateClubDto) {
    return this.clubService.create(creatCDto);
  }

  @Get()
  findAll() {
    return this.clubService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.clubService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() dto: UpdateClubDto) {
    return this.clubService.update(id, dto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.clubService.remove(id);
  }
}
