import { Categoria } from 'src/categoria/entities/categoria.entity';
import { Reserva } from 'src/reserva/entities/reserva.entity';
import { Valoracion } from 'src/valoracion/entities/valoracion.entity';
import { Column, Entity, ManyToOne, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { DestinoImage } from './destino-image.entity';


@Entity()
export class Destino {
    @PrimaryGeneratedColumn({type: 'int4'})
    id: number;

    @Column()
    nombreDestino: string;

    @Column()
    ubicacion: string;

    @Column()
    descripcion: string;

    @Column()
    precio: number;

    @Column()
    fechasDisponibles: string;

    @Column()   
    CamposDisponibles: string;

    @ManyToOne(()=> Categoria, categoria => categoria.destinos)
    categoria: Categoria;

    @OneToMany(() => Valoracion, (valoracion) => valoracion.destino)
    valoracion: Valoracion[];

    @OneToMany(() => Reserva, (reserva) => reserva.destino)
    reservas: Reserva[];
    
    @OneToMany(() => DestinoImage, (destinoImage) => destinoImage.destino)
    destinoImage: DestinoImage[];
}
