export class CreateEnrollmentDTO {
    studentId: any;
    courseId: any;
    enrollmentDate: Date;
    constructor(studentId, courseId, enrollmentDate) {
      this.studentId = studentId;
      this.courseId = courseId;
      this.enrollmentDate = new Date(enrollmentDate);
    }
  }
  
  module.exports = CreateEnrollmentDTO;