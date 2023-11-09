import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateReservaDto {
    @IsNumber()
    @IsNotEmpty()
    id: number;

    @IsString()
    @IsNotEmpty()
    fechaReserva: string;

    @IsNumber()
    @IsNotEmpty()
    cantidadPersonas: number;

    @IsNumber()
    @IsNotEmpty()
    cantidadDias: number;

    @IsNumber()
    @IsNotEmpty()
    cantidadHabitaciones: number;

    @IsNumber()
    @IsOptional()
    userId: number;

    @IsNumber()
    @IsOptional()
    destinoId: number;

}
