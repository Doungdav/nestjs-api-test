import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { AuthService } from './auth/auth.service';
import { AuthController } from './auth/auth.controller';
import { AuthModule } from './auth/auth.module';
import { StudentsService } from './students/students.service';
import { StudentsController } from './students/students.controller';
import { StudentsModule } from './students/students.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Student } from './students/student.entity';
import { User } from './users/user.entity';
import { UsersService } from './users/users.service';
import { UsersController } from './users/users.controller';
import { TeachersModule } from './teachers/teachers.module';
import { TeachersService } from './teachers/teachers.service';
import { TeachersController } from './teachers/teachers.controller';
import { Teacher } from './teachers/teacher.entity';
import { CoursesService } from './courses/courses.service';
import { CoursesController } from './courses/courses.controller';
import { CoursesModule } from './courses/courses.module';
import { EnrollmentsModule } from './enrollments/enrollments.module';
import { Course } from './courses/course.entity';
import { Enrollment } from './enrollments/enrollment.entity';
import { EnrollmentsService } from './enrollments/enrollments.service';
import { EnrollmentsController } from './enrollments/enrollments.controller';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'admin', // replace with your PostgreSQL username
      password: 'admin', // replace with your PostgreSQL password
      database: 'students_db',
      entities: [Student,User,Teacher, Course, Enrollment],
      // entities: [],
      synchronize: true, // Use cautiously in production,
      //logging: true
    }),
    TypeOrmModule.forFeature([Student, User, Teacher, Course, Enrollment]),
    UsersModule, 
    AuthModule, 
    StudentsModule, TeachersModule, CoursesModule, EnrollmentsModule
  ],
  providers: [StudentsService, UsersService, TeachersService, CoursesService, EnrollmentsService],
  controllers: [StudentsController, UsersController, TeachersController, CoursesController, EnrollmentsController],

})
export class AppModule {}
