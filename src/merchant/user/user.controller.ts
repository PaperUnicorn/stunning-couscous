import { Body, Controller, Get, HttpException, HttpStatus, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UserService } from './user.service';
import { CreateUserDto } from '../dto/create-user.dto';
import { MerchantService } from '../merchant.service';
import { MerchantGuard } from '../merchant.guard';
import { UpdateUserDto } from '../dto/update-user.dto';

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

    @Get('')
    getAllUsers(@Param('id') merchantId: string) {
        return this.service.findAllByMerchant(merchantId);
    }


    @Get(':userId')
    getUserById(@Param('id') merchantId: string, @Param('userId') userId: string) {

        return this.service.getById(userId);
    }

    @Patch(':userId')
    async updateUserById(@Param('id') merchantId: string,@Param('userId') userId: string, @Body() request: UpdateUserDto) {
        request.Id = userId;
        console.log(request)
        const merchant = await this.service.findOneBy({id: userId, merchant: merchantId});
        if(!merchant){
            throw new HttpException('no such user present for this merchant', HttpStatus.NOT_FOUND);
        }
        return this.service.update(request)
    }
}
