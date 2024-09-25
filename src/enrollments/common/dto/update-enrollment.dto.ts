class UpdateEnrollmentDTO {
    enrollmentId: any;
    studentId: any;
    courseId: any;
    constructor(enrollmentId, studentId, courseId, enrollmentDate) {
      this.enrollmentId = enrollmentId; // ID of the enrollment to update
      this.studentId = studentId; // Optional: Can be null if not changing
      this.courseId = courseId; // Optional: Can be null if not changing
      this.enrollmentId = enrollmentDate ? new Date(enrollmentDate) : undefined; // Optional: Can be null if not changing
    }
  }