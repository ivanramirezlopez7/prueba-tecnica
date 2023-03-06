import { Controller, Get } from '@nestjs/common';
import { MenuService } from './menu.service';
import puppeteer from 'puppeteer';

@Controller('menu')
export class MenuController {
  constructor(private readonly menuService: MenuService) {}

  @Get('extraccion')
  async findAll() {
   
    return await this.menuService.getMenu();
  }
}
