import { NestFactory } from '@nestjs/core';
import * as bodyParser from 'body-parser';

import { AppModule } from './app.module';
import { ConfigService } from './config.service';
import { swaggerConfig } from './swagger';

const config = new ConfigService(`.env.${process.env.NODE_ENV}`);

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  swaggerConfig(app);
  app.use(bodyParser.json({limit: '500mb'}));
  app.use(bodyParser.urlencoded({limit: '500mb', extended: true}));
  await app.listen(config.API_PORT);
}
bootstrap();
