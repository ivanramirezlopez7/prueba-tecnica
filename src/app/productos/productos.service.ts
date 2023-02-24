import { Injectable } from '@nestjs/common';
import { Model } from 'mongoose';
import { CreateProductoDto } from './dto/create-producto.dto';
import { UpdateProductoDto } from './dto/update-producto.dto';
import { Producto } from './entities/producto.entity';
import { InjectModel } from '@nestjs/mongoose';
@Injectable()
export class ProductosService {
  constructor(
    @InjectModel(Producto.name) private readonly productoModel: Model<Producto>,
  ) {}

  async findOne({ dep, cat }) {
    const data = await this.productoModel.find({
      name: {
        deparament: dep,
        category: cat,
      },
    });
    const p = [];
    data.forEach((d) => {
      const name = d['_doc']['name'];
      const price = d['_doc']['price'];
      p.push({ name, price });
    });
    return { url: data[0]['_doc']['url'], products: p };
  }
}
