import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UserService } from './user.service';
import { CreateUserDto } from '../dto/create-user.dto';

@Controller(':id/user')
@ApiTags('user')
export class UserController {
    constructor(private readonly service: UserService){}

    @Post()
    create(@Param('id') merchantId: string, @Body() request: CreateUserDto) {
        return this.service.create(request, merchantId);
    }


    @Get(':userId')
    getUserById(@Param('userId') userId: string) {
        return this.service.getById(userId);
    }
}
