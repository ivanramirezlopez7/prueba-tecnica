import { Injectable } from '@nestjs/common';
import { CreateDespensaDto } from './dto/create-despensa.dto';
import { UpdateDespensaDto } from './dto/update-despensa.dto';

@Injectable()
export class DespensaService {
  create(createDespensaDto: CreateDespensaDto) {
    return 'This action adds a new despensa';
  }

  findAll() {
    return `This action returns all despensa`;
  }

  findOne(id: number) {
    return `This action returns a #${id} despensa`;
  }

  update(id: number, updateDespensaDto: UpdateDespensaDto) {
    return `This action updates a #${id} despensa`;
  }

  remove(id: number) {
    return `This action removes a #${id} despensa`;
  }
}
