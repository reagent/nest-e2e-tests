import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe, INestApplication } from '@nestjs/common';

export const application = async ():Promise<INestApplication> => {
  let app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe())

  return app
}