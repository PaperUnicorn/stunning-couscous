import { PartialType } from '@nestjs/mapped-types';
import { CreateClubModifierDto } from './create-club-modifier.dto';

export class UpdateClubModifierDto extends PartialType(CreateClubModifierDto) {}
