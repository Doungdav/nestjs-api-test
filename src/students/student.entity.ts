import { Enrollment } from "src/enrollments/enrollment.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Student {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  courseId: number;

  @Column()
  enrollmentDate: Date;

  @Column('text', { array: true, default: [] })
  subjects: string[];

  @OneToMany(() => Enrollment, enrollment => enrollment.student)
  enrollments: Enrollment[];
}