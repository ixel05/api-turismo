import { IsNotEmpty, IsNumber, IsOptional, IsString } from "class-validator";

export class CreateValoracionDto {
    @IsNumber()
    @IsNotEmpty()
    id: number;

    @IsNumber()
    @IsNotEmpty()
    valoracion: number;

    @IsNotEmpty()
    @IsString()
    comentario: string;

    @IsNumber()
    @IsOptional()
    destinoId: number;

    @IsNumber()
    @IsOptional()
    userId: number;
}
