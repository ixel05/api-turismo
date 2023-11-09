import { Module } from '@nestjs/common';
import { ValoracionService } from './valoracion.service';
import { ValoracionController } from './valoracion.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Valoracion } from './entities/valoracion.entity';
import { User } from 'src/users/entities/user.entity';
import { Destino } from 'src/destino/entities/destino.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Valoracion, User, Destino])],
  controllers: [ValoracionController],
  providers: [ValoracionService]
})
export class ValoracionModule {}
