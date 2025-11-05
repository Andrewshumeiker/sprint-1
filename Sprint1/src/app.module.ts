// src/app.module.ts
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AuthModule } from 'src/auth/auth.module';
import { TasksModule } from 'src/tasks/task.module';
import { UsersModule } from 'src/users/user.module';
import { User } from 'src/users/entities/user.entity';
import { Task } from 'src/tasks/entities/task.entity';

@Module({
  imports: [
    // lee variables de entorno (.env)
    ConfigModule.forRoot({
      isGlobal: true,
    }),

    // conexión base de datos (PostgreSQL según el sprint)
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      entities: [User, Task],
      synchronize: false, // en prod => false; en dev podríamos true si vamos rápido
    }),

    UsersModule,
    AuthModule,
    TasksModule,
  ],
})
export class AppModule {}
