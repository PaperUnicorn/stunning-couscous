import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/merchant/user/user.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(
        private userService: UserService,
        private jwtService: JwtService
    ){}

    async signIn(username: string, pass: string): Promise<any> {
        const user = await this.userService.findOneByUsername(username);
        const valid = await bcrypt.compare(user?.password , pass)
        if (!valid) {
          throw new UnauthorizedException();
        }
        const {email, password, role } = user;
        console.log(user);
        return {
            access_token: this.jwtService.sign({
                username,
                email,
                role: role.name
            }),
        };
      }


}
