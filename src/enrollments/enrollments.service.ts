import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Enrollment } from './enrollment.entity';
import { Repository } from 'typeorm';
import { CreateEnrollmentDTO } from './common/dto/create-enrollment.dto';

@Injectable()
export class EnrollmentsService {
    constructor(
        @InjectRepository(Enrollment)
        private enrollmentsRepository: Repository<Enrollment>,
      ) {}
    
      async create(createEnrollmentDto: CreateEnrollmentDTO): Promise<Enrollment> {
        const enrollment = this.enrollmentsRepository.create(createEnrollmentDto);
        return this.enrollmentsRepository.save(enrollment);
      }

      async findAll(): Promise<Enrollment[]> {
        return this.enrollmentsRepository.find();
      }

      async findOne(id: number): Promise<Enrollment> {
        const enrollment = await this.enrollmentsRepository.findOneBy({ id });
        if (!enrollment) {
          throw new NotFoundException(`Enrollment with ID ${id} not found`);
        }
        return enrollment;
      }
    
      async update(id: number, updateEnrollmentDto: CreateEnrollmentDTO): Promise<Enrollment> {
        await this.findOne(id); // Ensure enrollment exists
        await this.enrollmentsRepository.update(id, updateEnrollmentDto);
        return this.findOne(id);
      }
    
      async remove(id: number): Promise<void> {
        const result = await this.enrollmentsRepository.delete(id);
        if (result.affected === 0) {
          throw new NotFoundException(`Enrollment with ID ${id} not found`);
        }
      }
    
}
