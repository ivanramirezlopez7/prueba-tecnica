import { Document } from 'mongoose';
import { Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Producto extends Document {
  url: string;
  name: string;
  price: number;
  deparament:string;
  category:string;
}
export const ProductoSchema = SchemaFactory.createForClass(Producto);

