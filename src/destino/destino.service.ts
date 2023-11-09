import { Injectable } from '@nestjs/common';
import { CreateDestinoDto } from './dto/create-destino.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Destino } from './entities/destino.entity';
import { Repository } from 'typeorm';
import { DestinoImage } from './entities/destino-image.entity';

@Injectable()
export class DestinoService {

  constructor(
    @InjectRepository(Destino)
    private destinoRepo: Repository<Destino>,

    @InjectRepository(DestinoImage)
    private destinoImageRepo: Repository<DestinoImage>,
  ) { }

  async create(createDestinoDto: CreateDestinoDto) {
    const {destinoImage=[], categoriaId, ...destonoData} = createDestinoDto;
    const destino = await this.destinoRepo.create({
      ...destonoData,
      categoria : {id: categoriaId},
      destinoImage: destinoImage.map((image) => this.destinoImageRepo.create({ url: image })),
    });
    await this.destinoRepo.save(destino);
    return destino;
  }

  async findAll() {
    return await this.destinoRepo.find({
      relations: ['categoria', 'valoracion', 'reservas'],
    });

  }

  async findOne(id: number) {
    return await this.destinoRepo.findOne({ where: { id }, relations: ['categoria', 'valoracion', 'reservas', ]});
  }

  async update(id: number, updateDestinoDto: CreateDestinoDto) {
    const {destinoImage, ...updateAll}= updateDestinoDto;
    const destino = await this.destinoRepo.preload({
      id: +id,
      ...updateAll,
    });
    if (!destino) {
      throw new Error('El destino no existe');
    }
    if (destinoImage) {
      destino.destinoImage = destinoImage.map((image) => this.destinoImageRepo.create({ url: image }));
    }
    return await this.destinoRepo.save(destino);
  }

  async remove(id: number) {
    const destino = await this.destinoRepo.findOne({ where: { id } });
    if (!destino) {
      throw new Error('El destino no existe');
    }
    return await this.destinoRepo.remove(destino);
  }
}
