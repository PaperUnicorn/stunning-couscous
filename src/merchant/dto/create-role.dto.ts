import { ApiProperty } from "@nestjs/swagger";
import { IsString, IsNotEmpty, IsBoolean, IsNumber, IsArray } from "class-validator";

export class CreateRoleDTO {
    @ApiProperty()
    @IsString()
    @IsNotEmpty()
    name: string;

    @ApiProperty()
    @IsNumber()
    @IsNotEmpty()
    priority: number;
  
    @ApiProperty()
    @IsArray()  
    permissions: string[]
}
