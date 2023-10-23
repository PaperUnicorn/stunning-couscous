import { Test, TestingModule } from '@nestjs/testing';
import { ClubModifierService } from './club-modifier.service';

describe('ClubModifierService', () => {
  let service: ClubModifierService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ClubModifierService],
    }).compile();

    service = module.get<ClubModifierService>(ClubModifierService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
