import { Body, Controller, Delete, Get, NotFoundException, Param, Post, Put, UseGuards } from '@nestjs/common';
import { Student } from './student.entity';
import { StudentsService } from './students.service';
import { PassportJwtAuthGuard } from 'src/auth/guards/passport-jwt.guard';
import { CreateStudentDto } from './common/dto/create-student.dto';
import { UpdateStudentDto } from './common/dto/update-student.dto';

@Controller('students')
@UseGuards(PassportJwtAuthGuard)
export class StudentsController {
    constructor(private readonly studentsService: StudentsService) {}

@Post()
async create(@Body() createStudentDto: CreateStudentDto) {
    return this.studentsService.create(createStudentDto);
  }

  @Get()
  async findAll() {
    return this.studentsService.findAll();
  }

  @Get(':id')
  async findById(@Param('id') id: number): Promise<Student> {

    const student = await this.studentsService.findById(id);
    if (!student) {
      throw new NotFoundException(`Student with ID ${id} not found`);
    }
    return student;
  }

  @Put(':id')
  async update(@Param('id') id: number, @Body() updateStudentDto: UpdateStudentDto): Promise<Student> {
    const updatedStudent = await this.studentsService.update(id, updateStudentDto);
    if (!updatedStudent) {
      throw new NotFoundException(`Student with ID ${id} not found`);
    }
    return updatedStudent;
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    const result = await this.studentsService.remove(id);
    if (!result) {
      throw new NotFoundException(`Student with ID ${id} not found`);
    }
  }
}
