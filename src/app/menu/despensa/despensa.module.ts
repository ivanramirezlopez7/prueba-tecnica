import { Module } from '@nestjs/common';
import { DespensaService } from './despensa.service';
import { DespensaController } from './despensa.controller';

@Module({
  controllers: [DespensaController],
  providers: [DespensaService]
})
export class DespensaModule {}
