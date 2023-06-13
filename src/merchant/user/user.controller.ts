import { Body, Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { UserService } from './user.service';
import { CreateUserDto } from '../dto/create-user.dto';

@Controller('user')
@ApiTags('user')
export class UserController {
    constructor(private readonly service: UserService){

    }

    @Post()
    create(@Body() request: CreateUserDto) {
        return this.service.create(request);
    }
}
