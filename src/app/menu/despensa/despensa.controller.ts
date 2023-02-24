import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { DespensaService } from './despensa.service';
import { CreateDespensaDto } from './dto/create-despensa.dto';
import { UpdateDespensaDto } from './dto/update-despensa.dto';

@Controller('menu/despensa')
export class DespensaController {
  constructor(private readonly despensaService: DespensaService) {}

  @Post()
  create(@Body() createDespensaDto: CreateDespensaDto) {
    return this.despensaService.create(createDespensaDto);
  }

  @Get()
  findAll() {
    return this.despensaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.despensaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDespensaDto: UpdateDespensaDto) {
    return this.despensaService.update(+id, updateDespensaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.despensaService.remove(+id);
  }
}
