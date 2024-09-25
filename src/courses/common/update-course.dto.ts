import { IsInt, IsOptional, IsString } from "class-validator";

export class UpdateCourseDto {
    @IsString()
    @IsOptional()
    title?: string;
  
    @IsString()
    @IsOptional()
    description?: string;
  
    @IsInt()
    @IsOptional()
    credits?: number;
  
    @IsInt()
    @IsOptional()
    teacherId?: number; // Reference to the teacher
  }