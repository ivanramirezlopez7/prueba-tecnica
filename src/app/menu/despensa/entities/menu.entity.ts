import { Document } from 'mongoose';
import { Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Menu extends Document {
  department: string;
  url: string;
  categories: Array<Categories>;
}
@Schema()
export class Categories extends Document {
  name: string;
  url: string;
  subCategories: Array<SubCategories>;
}
@Schema()
export class SubCategories extends Document {
  name: string;
  url: string;
}

export const MenuSchema = SchemaFactory.createForClass(Menu);
