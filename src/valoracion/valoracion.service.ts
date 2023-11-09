import { Injectable } from '@nestjs/common';
import { CreateValoracionDto } from './dto/create-valoracion.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Valoracion } from './entities/valoracion.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ValoracionService {
  constructor(
    @InjectRepository(Valoracion)
    private valoracionRepo: Repository<Valoracion>,
  ) { }

  async create( createValoracionDto: CreateValoracionDto) {
    const { userId, destinoId, ...data } = createValoracionDto;
    const valoracion = await this.valoracionRepo.create({
      ...data,
      user: { id: userId },
      destino: { id: destinoId },
    });
    await this.valoracionRepo.save(valoracion);
    return valoracion;
  }
  
  async findAll() {
    return await this.valoracionRepo.find({
      relations: ['user', 'destino'],
    });
  }

  async findOne(id: number) {
    return await this.valoracionRepo.findOne({ where: { id }, relations: ['user', 'destino']});
  }

  async update(id: number, updateValoracionDto: CreateValoracionDto) {
    const valoracion = await this.valoracionRepo.findOne({ where: { id } });
    if (!valoracion) {
      throw new Error('La valoracion no existe');
    }
    await this.valoracionRepo.merge(valoracion, updateValoracionDto);
    return await this.valoracionRepo.save(valoracion);
  }

  async remove(id: number) {

    const valoracion = await this.valoracionRepo.findOne({ where: { id } });
    if (!valoracion) {
      throw new Error('La valoracion no existe');
    }
    return await this.valoracionRepo.remove(valoracion);
  }
}
