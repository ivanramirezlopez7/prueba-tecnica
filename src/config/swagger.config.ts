import { DocumentBuilder } from '@nestjs/swagger';
import configuration from './configuration';

const apiVersion = configuration().version;

export const swaggerConfig = (serviceUrl: string, prefix: string) =>
  new DocumentBuilder()
    .setTitle(`APP`)
    .setDescription(`APP`)
    .addServer(`${serviceUrl}${prefix}`)
    .setVersion(apiVersion)
    .build();
