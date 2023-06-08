import { Module } from '@nestjs/common';
import { MerchantService } from './merchant.service';
import { MerchantController } from './merchant.controller';
import { Merchant } from './entities/merchant.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProfileController } from './profile/profile.controller';
import { ProfileService } from './profile/profile.service';
import { RouterModule } from '@nestjs/core';
import { Profile } from './entities/profile.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Merchant, Profile]),
  ],
  controllers: [MerchantController, ProfileController],
  providers: [MerchantService, ProfileService]
})
export class MerchantModule {}
