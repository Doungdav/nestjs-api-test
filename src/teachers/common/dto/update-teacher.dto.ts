import { IsArray, IsDateString, IsNumber, IsOptional, IsString } from "class-validator";

export class UpdateTeacherDto {
    @IsString()
    @IsOptional()
    name?: string;

    @IsString()
    @IsOptional()
    email?: string;

    @IsString()
    @IsOptional()
    subject?: string;

    @IsNumber()
    @IsOptional()
    experience?: number;

    @IsDateString()
    @IsOptional()
    hiredAt?: string;

    @IsArray()
    @IsOptional()
    courses?: string[];
}
