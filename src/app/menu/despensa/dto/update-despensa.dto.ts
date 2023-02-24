import { PartialType } from '@nestjs/swagger';
import { CreateDespensaDto } from './create-despensa.dto';

export class UpdateDespensaDto extends PartialType(CreateDespensaDto) {}
