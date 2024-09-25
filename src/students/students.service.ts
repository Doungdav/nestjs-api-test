import { Injectable, NotFoundException } from '@nestjs/common';
import { Student } from './student.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateStudentDto } from './common/dto/create-student.dto';
import { UpdateStudentDto } from './common/dto/update-student.dto';

@Injectable()
export class StudentsService {
    constructor(
        @InjectRepository(Student)
        private studentsRepository: Repository<Student>,
      ) {}
      
      async create(createStudentDto: CreateStudentDto): Promise<Student> {
        const student = this.studentsRepository.create(createStudentDto);
        return this.studentsRepository.save(student);
      }

      async findAll(): Promise<Student[]> {
        return this.studentsRepository.find();
      }

      async findById(id: number): Promise<Student> {
        return this.studentsRepository.findOne({ where: { id } });
      }

      async update(id: number, updateStudentDto: UpdateStudentDto): Promise<Student> {
        const student = await this.findById(id);
        if (!student) {
          throw new NotFoundException(`Student with ID ${id} not found`);
        }
    
        // Update only the fields that are provided
        if (updateStudentDto.name) student.name = updateStudentDto.name;
        if (updateStudentDto.email) student.email = updateStudentDto.email;
        if (updateStudentDto.enrollmentDate) student.enrollmentDate = new Date(updateStudentDto.enrollmentDate);
    
        return this.studentsRepository.save(student);
      }

      async remove(id: number): Promise<boolean> {
        const student = await this.findById(id);
        if (!student) {
          throw new NotFoundException(`Student with ID ${id} not found`);
        }
        await this.studentsRepository.remove(student);
        return true; // Indicating deletion success
      }
    
    
}
