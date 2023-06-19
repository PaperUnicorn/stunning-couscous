import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';
import { CreateUserDto } from '../dto/create-user.dto';
import { Role } from '../entities/role.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {

    constructor(
        @InjectRepository(User)
        private repository:Repository<User>,
        @InjectRepository(Role)
        private roleRepository:Repository<Role>
      ){}

    async create(request: CreateUserDto, merchantId: string): Promise<User>{
      const role = await this.roleRepository.findOneBy({id: request.role});

      if(role == null){
        throw new HttpException('must have a valid role', HttpStatus.BAD_REQUEST);
      }
      const hashedPassword = await bcrypt.hash(request.password, 1)
      const user: Partial<User> = {
        email: request.email,
        username: request.username,
        password: hashedPassword,
        role,
        merchant: merchantId
      }
      return await this.repository.save(user);
    }

    async getById(id: string) {
      return await this.repository.findOne({
        relations: {
          role: true
        },
        where : {
          id
        }
      }) 
  }
}
