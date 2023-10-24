import { ApiProperty } from "@nestjs/swagger";
import { Transform } from "class-transformer";
import { IsEnum, IsNotEmpty, IsString } from "class-validator";
enum type {
    POINT = "point", PERCENTAGE = "percentage", VISIT = "visit", HYBRID = "hybrid"
}

export class CreateLoyaltyTypeDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    name: string;

    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    description: string;
  

    @ApiProperty()
    @Transform(({ value }) => ("" + value).toLowerCase())
    @IsEnum(type)
    type: string;

}


