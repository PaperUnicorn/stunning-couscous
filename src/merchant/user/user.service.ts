import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../entities/user.entity';
import { CreateUserDto } from '../dto/create-user.dto';
import { Role } from '../entities/role.entity';
import * as bcrypt from 'bcrypt';
import { UpdateUserDto } from '../dto/update-user.dto';

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

      const hashedPassword = await bcrypt.hash(request.password, 0)
      const user: Partial<User> = {
        email: request.email,
        username: request.username,
        password: hashedPassword,
        role,
        merchant: merchantId
      }
      return await this.repository.save(user);
    }

    async update(request: UpdateUserDto): Promise<User>{
      const user: Partial<User> = {
        id: request.id,
      }
      if(request.email){
        user.email = request.email;
      }
      if(request.username){
        user.username = request.username
      }
      if(request.role){
        const role = await this.roleRepository.findOneBy({id: request.role});
        if(role == null){
          throw new HttpException('must have a valid role', HttpStatus.BAD_REQUEST);
        }
        user.role = role;
      }
      
      if(request.password){
        const hashedPassword = await bcrypt.hash(request.password, 0)
        user.password = hashedPassword;
      }
      console.log(user)
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

  async findOneByUsername(username: string){
    return await this.findOneBy({
      username
    });
  }
  async findOneByMerchant(user: Partial<User>, merchantId: string): Promise<User> {
    user.merchant = merchantId;
    return await this.findOneBy({
      ...user,
    })
  }

  async findOneBy(user: Partial<User>): Promise<User> {
    console.log(user);
    return await this.repository.findOne({
      relations:{
        role: true,
      },
      where: {
        id: user.id
      }
    })
  }
}
