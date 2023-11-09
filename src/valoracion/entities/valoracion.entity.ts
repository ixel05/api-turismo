import { Destino } from "src/destino/entities/destino.entity";
import { User } from "src/users/entities/user.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Valoracion {

    @PrimaryGeneratedColumn({ type: 'int4' })
    id: number;

    @Column({ type: 'int4' })
    valoracion: number;
    
    @Column({ type: 'varchar', length: 55 })
    comentario: string;

    @ManyToOne(() => User, user => user.valoracion)
    user: User;   

    @ManyToOne(() => Destino, (destino) => destino.valoracion)
    destino: Destino;
}
