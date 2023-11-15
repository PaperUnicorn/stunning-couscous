import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsNotEmpty, IsBoolean, IsNumber, Min, Max, IsArray } from "class-validator";

export class CreateClubDto {

    id: string;
    
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    name: string;

    @ApiProperty()
    @IsArray()
    modifiers: string[];

}
