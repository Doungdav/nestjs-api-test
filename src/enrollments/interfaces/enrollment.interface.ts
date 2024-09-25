import { Course } from "src/courses/course.entity";
import { Student } from "src/students/student.entity";

export interface Enrollment {
    id: number;
    studentId: number;
    courseId: number;
    enrollmentDate: Date;
    student?: Student; // Optional: relation to student
    course?: Course;   // Optional: relation to course
  }