import { Module } from '@nestjs/common';
import { ReservaService } from './reserva.service';
import { ReservaController } from './reserva.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Reserva } from './entities/reserva.entity';
import { User } from 'src/users/entities/user.entity';
import { Destino } from 'src/destino/entities/destino.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Reserva, User, Destino])],
  controllers: [ReservaController],
  providers: [ReservaService]
})
export class ReservaModule {}
