import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { DespensaModule } from './app/menu/despensa/despensa.module';
import { ProductosModule } from './app/productos/productos.module';
import configuration from './config/configuration';
@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      isGlobal: true,
      cache: true,
    }),
    DespensaModule,
    ProductosModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
