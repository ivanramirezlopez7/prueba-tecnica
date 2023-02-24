import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { MenuModule } from './app/menu/despensa/menu.module';
import { ProductosModule } from './app/productos/productos.module';
import configuration from './config/configuration';
@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      isGlobal: true,
      cache: true,
    }),
    MongooseModule.forRoot( process.env.MONGODB ),
    MenuModule,
    ProductosModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
