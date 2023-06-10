import { Module } from '@nestjs/common';
import { MerchantService } from './merchant.service';
import { MerchantController } from './merchant.controller';
import { Merchant } from './entities/merchant.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProfileController } from './profile/profile.controller';
import { ProfileService } from './profile/profile.service';
import { Profile } from './entities/profile.entity';
import { Preferences } from './entities/preferences.entity';
import { Summary } from './entities/summary.entity';
import { UserController } from './user/user.controller';
import { UserService } from './user/user.service';
import { PermissionService } from './permission/permission.service';
import { PermissionController } from './permission/permission.controller';
import { RoleController } from './role/role.controller';
import { RoleService } from './role/role.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([Merchant, Profile, Preferences, Summary]),
  ],
  controllers: [MerchantController, ProfileController, UserController, PermissionController, RoleController],
  providers: [MerchantService, ProfileService, UserService, PermissionService, RoleService]
})
export class MerchantModule {}
