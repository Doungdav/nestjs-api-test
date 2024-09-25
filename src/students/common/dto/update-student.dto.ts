import { IsDateString, IsEmail, IsInt, IsOptional, IsString } from "class-validator";

export class UpdateStudentDto {
    @IsOptional()
    @IsString()
    name?: string;
  
    @IsOptional()
    @IsEmail()
    email?: string; 

    @IsInt()
    @IsOptional()
    courseId?: number;
  
    @IsOptional()
    @IsDateString()
    enrollmentDate?: string; // Optionally update the enrollment date
    
    @IsOptional()
    @IsString({ each: true })
    subjects?: string[];
  }
  