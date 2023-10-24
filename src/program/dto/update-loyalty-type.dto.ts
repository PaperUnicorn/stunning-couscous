import { PartialType } from "@nestjs/mapped-types";
import { CreateLoyaltyTypeDto } from "./create-loyalty-type.dto";

export class UpdateLoyaltyTypeDto extends PartialType(CreateLoyaltyTypeDto) {}