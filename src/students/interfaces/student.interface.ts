import { Enrollment } from "src/enrollments/enrollment.entity";

export interface Student {
    id: number;
    name: string;
    email: string;
    courseId: number;
    enrollmentDate: Date;
    subjects: string[];
    enrollments?: Enrollment[];
  }