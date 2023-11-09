import { Injectable } from '@nestjs/common';
import { CreateCategoriaDto } from './dto/create-categoria.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Categoria } from './entities/categoria.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CategoriaService {
  constructor(
    @InjectRepository(Categoria)
    private categoriaRepo: Repository<Categoria>,
  ) { }

  async create(createCategoriaDto: CreateCategoriaDto) {
    const categoria = await this.categoriaRepo.create(createCategoriaDto);
    await this.categoriaRepo.save(categoria);
    return categoria;
  }

  async findAll() {
    return await this.categoriaRepo.find();
  }

  async findOne(id: number) {
    return await this.categoriaRepo.findOne({where: {id}});
  }

  async update(id: number, updateCategoriaDto: CreateCategoriaDto) {
    const categoria = await this.categoriaRepo.findOne({where: {id}});
    await this.categoriaRepo.merge(categoria, updateCategoriaDto);
    return await this.categoriaRepo.save(categoria);
  }

  async remove(id: number) {
    const categoria = await this.categoriaRepo.findOne({where: {id}});
    return await this.categoriaRepo.remove(categoria);
  }
}
