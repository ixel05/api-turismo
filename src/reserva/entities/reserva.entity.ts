import { Destino } from "src/destino/entities/destino.entity";
import { User } from "src/users/entities/user.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Reserva {
    @PrimaryGeneratedColumn({ type: 'int4' })
    id: number;

    @Column({ type: 'varchar', length: 55 })
    fechaReserva: string;

    @Column({ type: 'int4' })
    cantidadPersonas: number;

    @Column({ type: 'int4' })
    cantidadDias: number;

    @Column({ type: 'int4' })
    cantidadHabitaciones: number;

    @ManyToOne(() => User, (user) => user.reservas)
    @JoinColumn({ name: 'user_id' })
    user: User;

    @ManyToOne(() => Destino, (destino) => destino.reservas)
    @JoinColumn({ name: 'destination_id' })
    destino: Destino;
}
