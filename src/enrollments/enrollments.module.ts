import { Module } from '@nestjs/common';
import { EnrollmentsService } from './enrollments.service';
import { EnrollmentsController } from './enrollments.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Enrollment } from './enrollment.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Enrollment])],
  providers: [EnrollmentsService],
  controllers: [EnrollmentsController]
})
export class EnrollmentsModule {}
