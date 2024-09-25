import { IsInt, IsString } from "class-validator";

export class CreateCourseDto {
    @IsString()
    title: string;
  
    @IsString()
    description: string;
  
    @IsInt()
    credits: number;
  
    @IsInt()
    teacherId: number; // Reference to the teacher
  }