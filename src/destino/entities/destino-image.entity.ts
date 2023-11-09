import { Destino } from "./destino.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class DestinoImage {
    @PrimaryGeneratedColumn({ type: 'int4' })
    id: number;
    
    @Column({ type: 'varchar', length: 55 })
    url: string;

    @ManyToOne(() => Destino, (destino) => destino.destinoImage)
    destino: Destino;
}