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

@Module({
  imports: [
    TypeOrmModule.forFeature([ClubModifier, LoyaltyType])
  ],
  controllers: [ProgramController, ClubModifierController, LoyaltyTypeController],
  providers: [ProgramService, ClubModifierService, LoyaltyTypeService]
})
export class ProgramModule {}
