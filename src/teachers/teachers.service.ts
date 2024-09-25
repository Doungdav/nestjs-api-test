import { Injectable, NotFoundException } from '@nestjs/common';
import { Teacher } from './teacher.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateTeacherDto } from './common/dto/create-teacher.dto';
import { UpdateTeacherDto } from './common/dto/update-teacher.dto';

@Injectable()
export class TeachersService {
    constructor(
        @InjectRepository(Teacher)
        private teachersRepository: Repository<Teacher>,
      ) {}
    async create(createTeacherDto: CreateTeacherDto): Promise<Teacher> {
        const teacher = this.teachersRepository.create(createTeacherDto);
        return this.teachersRepository.save(teacher);
      }

      async findAll(): Promise<Teacher[]> {
        return this.teachersRepository.find();
    }

    async findById(id: number): Promise<Teacher> {
        return this.teachersRepository.findOne({ where: { id } });
    }

    async update(id: number, updateTeacherDto: UpdateTeacherDto): Promise<Teacher> {
        await this.teachersRepository.update(id, updateTeacherDto);
        return this.findById(id);
    }

    async remove(id: number): Promise<boolean> {
        const teacher = await this.findById(id);
        if (!teacher) {
          throw new NotFoundException(`teacher with ID ${id} not found`);
        }
        await this.teachersRepository.remove(teacher);
        return true; // Indicating deletion success
      }
}
