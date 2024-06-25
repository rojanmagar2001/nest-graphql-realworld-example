import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {
  INestApplication,
  Logger,
  NestApplicationOptions,
} from '@nestjs/common';
import { AppEnvironment } from './app.environment';
import { NestoLogger } from 'nestolog';

export async function createApp(options?: NestApplicationOptions) {
  const app = await NestFactory.create(AppModule, options);
  await configureaApp(app);
  return app;
}

export async function configureaApp(app: INestApplication) {
  app.enableCors();
}

async function bootstrap() {
  const app = await createApp();
  const appEnvironment = app.get(AppEnvironment);
  await app.listen(appEnvironment.port);

  const logger = app.get(Logger);

  app.useLogger(app.get(NestoLogger));

  logger.log(`GraphQL application is running on: ${await app.getUrl()}`);
}

if (process.env.NODE_ENV !== 'test') {
  bootstrap();
}
