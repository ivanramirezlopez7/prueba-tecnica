import { Module } from '@nestjs/common';
import { MenuService } from './menu.service';
import { MenuController } from './menu.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Menu, MenuSchema } from './entities/menu.entity';
import { HttpModule } from "@nestjs/axios";

@Module({
  controllers: [MenuController],
  providers: [MenuService],
  imports: [
    MongooseModule.forFeature([
      {
        name: Menu.name,
        schema: MenuSchema,
      },
    ]),
    HttpModule
  ],
})
export class MenuModule {}
