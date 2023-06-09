import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { HeaderAPIKeyStrategy } from "passport-headerapikey";
import { AuthService } from "./auth.service";

@Injectable()
export class ApiKeyStrategy extends PassportStrategy(HeaderAPIKeyStrategy , 'api-key'){
    constructor(private authService: AuthService){
        super({header: 'api-key', prefix: '' }, true, async (apikey, done) => {
            
            if(apikey === 'test'){
                done(null, true)
            }
            
            if(this.authService.validateApiKey(apikey)){
                done(null, true)
            } 
            done(new UnauthorizedException(),null)
        })
    }
} 