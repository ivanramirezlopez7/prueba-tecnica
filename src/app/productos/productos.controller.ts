import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ProductosService } from './productos.service';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';

@Controller('supermercado')
export class ProductosController {
  constructor(private readonly productosService: ProductosService) {}

  @Get(':deparament/:category')
  findOne(
    @Param('deparament') deparament: string,
    @Param('category') category: string,
  ) {
    return this.productosService.findOne({ dep: deparament, cat: category });
  }
}
