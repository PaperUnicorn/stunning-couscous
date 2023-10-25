import { Module } from '@nestjs/common';
import { ProgramService } from './program.service';
import { ProgramController } from './program.controller';
import { ClubModifierController } from './club-modifier/club-modifier.controller';
import { ClubModifierService } from './club-modifier/club-modifier.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClubModifier } from './entities/club-modifier.entity';
import { LoyaltyType } from './entities/loyalty-type.entity';
import { LoyaltyTypeController } from './loyalty-type/loyalty-type.controller';
import { LoyaltyTypeService } from './loyalty-type/loyalty-type.service';
import { ClubController } from './club/club.controller';
import { ClubService } from './club/club.service';
import { Club } from './entities/club.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([ClubModifier, LoyaltyType, Club])
  ],
  controllers: [ProgramController, ClubModifierController, LoyaltyTypeController, ClubController],
  providers: [ProgramService, ClubModifierService, LoyaltyTypeService, ClubService]
})
export class ProgramModule {}
