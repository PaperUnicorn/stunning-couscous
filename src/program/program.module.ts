import { Module } from '@nestjs/common';
import { ProgramService } from './program.service';
import { ProgramController } from './program.controller';
import { ClubModifierController } from './club-modifier/club-modifier.controller';
import { ClubModifierService } from './club-modifier/club-modifier.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ClubModifier } from './entities/club-modifier.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([ClubModifier])
  ],
  controllers: [ProgramController, ClubModifierController],
  providers: [ProgramService, ClubModifierService]
})
export class ProgramModule {}
