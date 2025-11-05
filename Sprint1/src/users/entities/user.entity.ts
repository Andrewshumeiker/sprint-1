// src/users/entities/user.entity.ts
import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Task } from 'src/tasks/entities/task.entity';

@Entity('users')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ unique: true })
  email: string;

  // nunca guardamos password plana
  @Column()
  passwordHash: string;

  @OneToMany(() => Task, (task) => task.owner)
  tasks: Task[];
}
