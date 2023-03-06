import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { lastValueFrom, map } from 'rxjs';
import { Model } from 'mongoose';
import { CreateMenuDto } from './dto/create-menu.dto';
import { UpdateMenuDto } from './dto/update-menu.dto';
import { Menu } from './entities/menu.entity';
import { HttpService } from '@nestjs/axios';
import * as cheerio from 'cheerio';

@Injectable()
export class MenuService {
  private data = {};
  private a: string = '';
  constructor(
    @InjectModel(Menu.name) private readonly menuModel: Model<Menu>,
    private http: HttpService,
  ) {}
  async create(createMenuDto: CreateMenuDto) {
    return this.menuModel.create(createMenuDto);
  }

  async findAll() {
    return await this.menuModel.find();
  }

  findOne(id: number) {
    return this.menuModel.find({ id });
  }

  update(id: number, updateMenuDto: UpdateMenuDto) {
    return `This action updates a #${id} menu`;
  }

  remove(id: number) {
    return `This action removes a #${id} menu`;
  }
  async getMenu() {
    try {
      this.data = {};
      this.a = '';
      const URL = 'https://super.walmart.com.mx/all-departments';
      const request = await lastValueFrom(
        this.http.get(URL).pipe(map((res) => res.data)),
      ).catch((e) => {
        console.error(e);
      });
      let $ = cheerio.load(request);
      const contenedor = $('div.w_C9.w_D8.w_DL.w_DR.w_Db.tl.mt4');
      await this.mapearObjeto(contenedor);

      console.log(this.data);
      return this.data;
    } catch (e) {
      console.error(e);
    }
  }

  private async mapearObjeto(objeto) {
    const map = {};
    for (let obj of objeto) {
      if (obj['name'] != 'a') {
        map['e'] = await this.mapearObjeto(obj.children);
      } else {
        const elemento = obj.children[0].data;

        if (obj.parent['name'] == 'li') {
          obj.children.forEach((e) => {
            this.data[this.a]['categories'].push({ name: e.data });
          });
        } else {
          this.data[elemento] = { department: elemento, categories: [] };
          this.a = elemento;
        }
      }
    }
    return map;
  }
}
