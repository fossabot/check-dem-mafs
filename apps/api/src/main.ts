import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import helmet from 'helmet';

import { AppModule } from './app/app.module';
import { ConfigService } from './app/modules/core/services/config.service';

const main = async (): Promise<void> => {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const { port } = configService;

  app.enableCors();
  app.use(helmet());

  app.useGlobalPipes(new ValidationPipe());

  await app.listen(port, () => {
    Logger.log(`Listening on port ${port}`, 'NestApplication');
  });
};

void main();
