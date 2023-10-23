import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsNotEmpty, IsBoolean, IsNumber, Min, Max } from "class-validator";

export class CreateClubModifierDto {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    name: string;

    @ApiProperty()
    @IsNumber()
    @Min(0)
    @Max(100)
    pointBoost: number;
  
    @ApiProperty()
    @IsNumber()
    @Min(0)
    @Max(100)
    pointScale: number;
}
