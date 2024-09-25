import { IsDate, IsDateString, IsEmail, IsInt, IsOptional, IsString, isString } from "class-validator";

export class CreateStudentDto {
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsInt()
  courseId: number;

  @IsDateString()
  enrollmentDate: string;

  @IsOptional()
  @IsString({ each: true })
  subjects?: string[];
}
