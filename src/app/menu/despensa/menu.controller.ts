import { Controller, Get} from '@nestjs/common';
import { MenuService } from './menu.service';

@Controller('menu')
export class MenuController {
  constructor(private readonly menuService: MenuService) {}

  @Get('extraccion')
  findAll() {
    return this.menuService.findAll();
  }
}
