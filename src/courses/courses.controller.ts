import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { CoursesService } from './courses.service';
import { CreateCourseDto } from './common/create-course.dto';
import { Course } from './course.entity';
import { UpdateCourseDto } from './common/update-course.dto';

@Controller('courses')
export class CoursesController {
    constructor(private readonly coursesService: CoursesService) {}

  @Post()
  async create(@Body() createCourseDto: CreateCourseDto): Promise<Course> {
    return this.coursesService.create(createCourseDto);
  }

  @Get()
  async findAll(): Promise<Course[]> {
    return this.coursesService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: number): Promise<Course> {
    return this.coursesService.findOne(id);
  }

  @Put(':id')
  async update(
    @Param('id') id: number,
    @Body() updateCourseDto: UpdateCourseDto,
  ): Promise<Course> {
    return this.coursesService.update(id, updateCourseDto);
  }

  @Delete(':id')
  async remove(@Param('id') id: number): Promise<void> {
    return this.coursesService.remove(id);
  }
  
}
