import { Injectable } from "@nestjs/common";
import { TenantService } from "./tenant/tenant.service";

@Injectable()
export class AuthService{
    constructor(
        private readonly tenantService: TenantService
    ){}
    validateApiKey(key: string) {
        return this.tenantService.findOneByApiKey(key);
    }
}