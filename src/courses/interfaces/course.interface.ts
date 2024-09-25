//import { Enrollment } from "src/enrollments/enrollment.entity";

import { Enrollment } from "src/enrollments/enrollment.entity";

export interface Course {
    courseId: number;
    title: string;
    description: string;
    credits: number;
    teacherId: number;
    enrollments?: Enrollment[];
    
  }