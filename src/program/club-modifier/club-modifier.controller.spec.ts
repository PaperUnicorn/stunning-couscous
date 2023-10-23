import { Test, TestingModule } from '@nestjs/testing';
import { ClubModifierController } from './club-modifier.controller';

describe('ClubModifierController', () => {
  let controller: ClubModifierController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ClubModifierController],
    }).compile();

    controller = module.get<ClubModifierController>(ClubModifierController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
