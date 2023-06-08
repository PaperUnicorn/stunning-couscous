import {  Controller, Get, Param} from '@nestjs/common';
import { ProfileService } from './profile.service';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('profile')
@Controller(':id/profile')
export class ProfileController {

    constructor(private readonly profileService: ProfileService) {}

  @Get()
  findOne(@Param('id') id: string) {
    return this.profileService.findProfileOfMerchant(+id);
  }

 
}
