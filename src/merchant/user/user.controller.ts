import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UserService } from './user.service';
import { CreateUserDto } from '../dto/create-user.dto';
import { MerchantService } from '../merchant.service';
import { MerchantGuard } from '../merchant.guard';

@Controller(':id/user')
@ApiTags('user')
@UseGuards(MerchantGuard)
export class UserController {
    constructor(
        private readonly service: UserService,
        private readonly merchantService: MerchantService
        ){}

    @Post()
    create(@Param('id') merchantId: string, @Body() request: CreateUserDto) {
        return this.service.create(request, merchantId);
    }


    @Get(':userId')
    getUserById(@Param('id') merchantId: string, @Param('userId') userId: string) {

        return this.service.getById(userId);
    }
}
