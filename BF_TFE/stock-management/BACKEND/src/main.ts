import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as cors from 'cors';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(
    new ValidationPipe({
      transform: true, // Convertit les types de données valides
      whitelist: true, // Supprime les propriétés non définies dans le DTO
      forbidNonWhitelisted: true, // Lève une exception pour les propriétés non définies
    }),
  );
  //SWAGGER
  const config = new DocumentBuilder()
    .setTitle('TFE-stock management')
    .setDescription('Mon api de fin de formation')
    .setVersion('1.0')
    .addBearerAuth(
      {
        type: 'http',
        name: 'Bearer',
        bearerFormat: 'Bearer',
        in: 'Header',
        scheme: 'Bearer',
      },
      'access_token',
    )
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('documentation', app, document);

  // app.enableCors();
  app.use(
    cors({
      origin: '*',
      methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
      allowedHeaders: '*',
    }),
  );
  await app.listen(5000);
}
bootstrap();
