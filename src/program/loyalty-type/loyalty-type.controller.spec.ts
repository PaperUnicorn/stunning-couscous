import { Test, TestingModule } from '@nestjs/testing';
import { LoyaltyTypeController } from './loyalty-type.controller';

describe('LoyaltyTypeController', () => {
  let controller: LoyaltyTypeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LoyaltyTypeController],
    }).compile();

    controller = module.get<LoyaltyTypeController>(LoyaltyTypeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
