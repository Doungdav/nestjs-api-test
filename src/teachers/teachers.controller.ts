import { Body, Controller, Delete, Get, NotFoundException, Param, Post, Put } from '@nestjs/common';
import { CreateTeacherDto } from './common/dto/create-teacher.dto';
import { TeachersService } from './teachers.service';
import { Teacher } from './teacher.entity';
import { UpdateTeacherDto } from './common/dto/update-teacher.dto';

@Controller('teachers')
export class TeachersController {
    constructor(private readonly teachersService: TeachersService) {}
@Post()
async create(@Body() CreateTeacherDto: CreateTeacherDto) {
    return this.teachersService.create(CreateTeacherDto);
  }

  @Get()
    async findAll(): Promise<Teacher[]> {
        return this.teachersService.findAll();
    }

    @Get(':id')
    async findById(@Param('id') id: number): Promise<Teacher> {
        const teacher = await this.teachersService.findById(id);
        if (!teacher) {
            throw new NotFoundException(`Teacher with ID ${id} not found`);
        }
        return teacher;
    }

    @Put(':id')
    async update(@Param('id') id: number, @Body() updateTeacherDto: UpdateTeacherDto): Promise<Teacher> {
        const updatedTeacher = await this.teachersService.update(id, updateTeacherDto);
        if (!updatedTeacher) {
            throw new NotFoundException(`Teacher with ID ${id} not found`);
        }
        return updatedTeacher;
    }

    @Delete(':id')
    async remove(@Param('id') id: number): Promise<void> {
      const result = await this.teachersService.remove(id);
      if (!result) {
        throw new NotFoundException(`Student with ID ${id} not found`);
      }
    }
}
