// src/main.ts
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Validaciones globales (HU-7 / AC-3)
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,          // elimina campos no esperados
      forbidNonWhitelisted: true,
      transform: true,
    }),
  );

  // Swagger (HU-7 / AC-5)
  const config = new DocumentBuilder()
    .setTitle('Task Manager API')
    .setDescription('API para gestión de tareas por usuario autenticado')
    .setVersion('1.0.0')
    .addBearerAuth() // para que Swagger sepa del JWT
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document); // /api

  await app.listen(process.env.PORT || 3000);
}
bootstrap();
