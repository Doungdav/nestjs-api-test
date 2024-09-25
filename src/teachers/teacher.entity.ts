import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Teacher {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column()
  subject: string;

  @Column()
  experience: number;

  @Column({ default: () => 'CURRENT_TIMESTAMP' })
  hiredAt: Date;

  @Column('text', { array: true, default: [] })
  courses: string[];
}
