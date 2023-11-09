import { Injectable } from '@nestjs/common';
import { CreateReservaDto } from './dto/create-reserva.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Reserva } from './entities/reserva.entity';
import { Repository } from 'typeorm';


@Injectable()
export class ReservaService {
  constructor(
    @InjectRepository(Reserva)
    private reservaRepo: Repository<Reserva>

  ) {}
  async create(createReservaDto: CreateReservaDto) {
    const { userId, destinoId, ...data } = createReservaDto;
    const reserva = await this.reservaRepo.create({
      ...data,
      user: { id: userId },
      destino: { id: destinoId },
    });
    await this.reservaRepo.save(reserva);
    return reserva;
  }

  async findAll() {
    return await this.reservaRepo.find({
      relations: ['user', 'destino'],
    });
  }

  async findOne(id: number) {
    return await this.reservaRepo.findOne({ where: { id }, relations: ['user', 'destino']});
  }

  async update(id: number, updateReservaDto: CreateReservaDto) {
    const reserva = await this.reservaRepo.findOne({ where: { id } });
    await this.reservaRepo.merge(reserva, updateReservaDto);
    return await this.reservaRepo.save(reserva);
  }

  async remove(id: number) {
      const reserva = await this.reservaRepo.findOne({ where: { id } });
      return await this.reservaRepo.remove(reserva);
  }
}
