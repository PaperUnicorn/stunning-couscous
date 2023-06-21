import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/merchant/user/user.service';

@Injectable()
export class AuthService {
    constructor(
        private userService: UserService,
        private jwtService: JwtService
    ){}

    async signIn(username: string, pass: string): Promise<any> {
        const user = await this.userService.findOneByUsername(username);
        if (user?.password !== pass) {
          throw new UnauthorizedException();
        }
        const { password, ...result } = user;
        
        return this.login(user);
      }

    async login(user: any) {
        const payload = { username: user.username, sub: user.userId };
        return {
            access_token: this.jwtService.sign(payload),
        };
    }

}
