import { Module } from '@nestjs/common';
import { DestinoService } from './destino.service';
import { DestinoController } from './destino.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Destino } from './entities/destino.entity';

import { DestinoImage } from './entities/destino-image.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Destino,DestinoImage ])],
  controllers: [DestinoController],
  providers: [DestinoService]
})
export class DestinoModule {}
