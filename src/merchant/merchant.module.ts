import { Module } from '@nestjs/common';
import { MerchantService } from './merchant.service';
import { MerchantController } from './merchant.controller';
import { Merchant } from './entities/merchant.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Profile } from './entities/profile.entity';
import { Preferences } from './entities/preferences.entity';
import { Summary } from './entities/summary.entity';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { PermissionService } from './permission/permission.service';
import { PermissionController } from './permission/permission.controller';
import { RoleController } from './role/role.controller';
import { RoleService } from './role/role.service';
import { StorefrontController } from './storefront/storefront.controller';
import { StorefrontService } from './storefront/storefront.service';
import { Role } from './entities/role.entity';
import { Storefront } from './entities/storefront.entity';
import { StoreProfile } from './entities/store.profile.entity';
import { Permission } from './entities/permission.entity';
import { User } from './entities/user.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Merchant, Profile, Preferences, Summary, Role, Permission, User, Storefront, StoreProfile]),
  ],
  controllers: [MerchantController, UserController, PermissionController, RoleController, StorefrontController],
  providers: [MerchantService, UserService, PermissionService, RoleService, StorefrontService]
})
export class MerchantModule {}
