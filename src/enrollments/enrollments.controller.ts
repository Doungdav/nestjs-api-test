import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { EnrollmentsService } from './enrollments.service';
import { Enrollment } from './enrollment.entity';
import { CreateEnrollmentDTO } from './common/dto/create-enrollment.dto';

@Controller('enrollments')
export class EnrollmentsController {
    constructor(private readonly enrollmentsService: EnrollmentsService) {}

  @Post()
  async create(@Body() createEnrollmentDto: CreateEnrollmentDTO): Promise<Enrollment> {
    return this.enrollmentsService.create(createEnrollmentDto);
  }

  @Get()
  async findAll(): Promise<Enrollment[]> {
    return this.enrollmentsService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Enrollment> {
    return this.enrollmentsService.findOne(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() updateEnrollmentDto: CreateEnrollmentDTO,
  ): Promise<Enrollment> {
    return this.enrollmentsService.update(id, updateEnrollmentDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    return this.enrollmentsService.remove(id);
  }
}