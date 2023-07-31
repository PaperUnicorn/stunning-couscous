import { PartialType } from '@nestjs/mapped-types';
import { CreateStorefrontDto } from './create-storefront.dto';

export class UpdateStorefrontDto extends PartialType(CreateStorefrontDto) {}
