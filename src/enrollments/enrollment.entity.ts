import { Course } from "src/courses/course.entity";
import { Student } from "src/students/student.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Enrollment {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Student, student => student.enrollments)
  student: Student;

  @ManyToOne(() => Course, course => course.enrollments)
  course: Course;

  @Column({ type: 'date' })
  enrollmentDate: Date;
}