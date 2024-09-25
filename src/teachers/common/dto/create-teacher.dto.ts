import { IsArray, IsDate, IsDateString, IsNumber, IsString } from "class-validator";

export class CreateTeacherDto{

    @IsString()
    name: string;

    @IsString()
    email: string;
  
    @IsString()
    subject: string;

    @IsNumber()
    experience: number;
    
    @IsDateString()
    hiredAt: string;

    @IsArray()
    courses: string[];
}