import { NestFactory } from '@nestjs/core';
import { SwaggerModule } from '@nestjs/swagger';
import { resolve } from 'path';
import { AppModule } from './app.module';
import configuration from './config/configuration';
import { swaggerConfig } from './config/swagger.config';

async function bootstrap() {
  const envExamplePath = resolve(__dirname, '../.env.example');

  const app = await NestFactory.create(AppModule, {});

  app.enableCors();

  const serviceUrl = configuration().url;
  const basePath = configuration().basePath;
  const port = configuration().port;
  const version = configuration().version;

  const document = SwaggerModule.createDocument(
    app,
    swaggerConfig(serviceUrl, basePath),
  );

  app.setGlobalPrefix(basePath);
  const s_url = `${basePath}/v${version}/swagger`;
  console.log(s_url);
  SwaggerModule.setup(s_url, app, document);

  await app.listen(port);

  console.log(`App listening in port ${port}`);
}
bootstrap();
