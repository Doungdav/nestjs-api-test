
import { Enrollment } from "src/enrollments/enrollment.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Course {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  credits: number;

  @Column()
  teacherId: number; // Reference to the teacher
  
  @OneToMany(() => Enrollment, enrollment => enrollment.course)
  enrollments: Enrollment[];


}