import { Injectable, CanActivate, ExecutionContext, HttpException, HttpStatus } from "@nestjs/common";
import { MerchantService } from "./merchant.service";

@Injectable()
export class MerchantGuard implements CanActivate {
    constructor( private readonly merchantService: MerchantService ){}
    async canActivate(context: ExecutionContext) {
        const request = context.switchToHttp().getRequest();
       
        const merchant = await this.merchantService.findOne(request.params.id)
        if(merchant == null){
            throw new HttpException('no such merchant found', HttpStatus.BAD_REQUEST);
        }
        return true;
    }
}