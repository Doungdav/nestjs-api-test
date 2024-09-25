import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Course } from './course.entity';
import { Repository } from 'typeorm';
import { CreateCourseDto } from './common/create-course.dto';
import { UpdateCourseDto } from './common/update-course.dto';

@Injectable()
export class CoursesService {

    constructor(
        @InjectRepository(Course)
        private coursesRepository: Repository<Course>,
      ) {}
    
      async create(createCourseDto: CreateCourseDto): Promise<Course> {
        const course = this.coursesRepository.create(createCourseDto);
        return this.coursesRepository.save(course);
      }

      async findAll(): Promise<Course[]> {
        return this.coursesRepository.find();
      }

      async findOne(id: number): Promise<Course> {
        const course = await this.coursesRepository.findOneBy({ id });
        if (!course) {
          throw new NotFoundException(`Course with ID ${id} not found`);
        }
        return course;
      }

      async update(id: number, updateCourseDto: UpdateCourseDto): Promise<Course> {
        await this.findOne(id); // Ensure course exists
        await this.coursesRepository.update(id, updateCourseDto);
        return this.findOne(id);
      }

      async remove(id: number): Promise<void> {
        const result = await this.coursesRepository.delete(id);
        if (result.affected === 0) {
          throw new NotFoundException(`Course with ID ${id} not found`);
        }
      }
}
