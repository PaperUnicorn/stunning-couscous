import { Test, TestingModule } from '@nestjs/testing';
import { LoyaltyTypeService } from './loyalty-type.service';

describe('LoyaltyTypeService', () => {
  let service: LoyaltyTypeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LoyaltyTypeService],
    }).compile();

    service = module.get<LoyaltyTypeService>(LoyaltyTypeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
