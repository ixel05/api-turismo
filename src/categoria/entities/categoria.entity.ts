import { Destino } from 'src/destino/entities/destino.entity';
import { BeforeInsert, Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Categoria {
  @PrimaryGeneratedColumn({ type: 'int4' })
  id: number;

  @Column({ type: 'varchar', length: 50 })
  categoria: string;

  @Column({ type: 'varchar', length: 55 })
  slug: string;

  @BeforeInsert()
  generateSlug() {
    this.slug = this.categoria.toLowerCase().replace(/\s+/g, '-');
  }

  @OneToMany(()=> Destino, destino => destino.categoria)
  destinos: Destino[];
}
