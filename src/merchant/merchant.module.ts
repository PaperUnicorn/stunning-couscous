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

@Module({
  imports: [
    TypeOrmModule.forFeature([Merchant, Profile, Preferences, Summary]),
  ],
  controllers: [MerchantController, ProfileController],
  providers: [MerchantService, ProfileService]
})
export class MerchantModule {}
