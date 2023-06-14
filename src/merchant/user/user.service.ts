import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';
import { CreateUserDto } from '../dto/create-user.dto';

@Injectable()
export class UserService {

    constructor(
        @InjectRepository(User)
        private repository:Repository<User>
      ){}

    async create(request: CreateUserDto, merchantId: string): Promise<User>{
      const user: Partial<User> = {
        email: request.email,
        username: request.username,
        password: request.password,
        merchantId: merchantId
      }
      return await this.repository.save(user);
    }
}
