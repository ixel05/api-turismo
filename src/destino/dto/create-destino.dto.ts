import { IsArray, IsNotEmpty, IsNumber, IsObject, IsOptional, IsString } from "class-validator";

export class CreateDestinoDto {
    @IsNumber()
    @IsNotEmpty()
    id: number;

    @IsNotEmpty()
    @IsString()
    nombreDestino: string;

    @IsNotEmpty()
    @IsString()
    ubicacion: string;

    @IsNotEmpty()
    @IsString()
    descripcion: string;

    @IsNotEmpty()
    @IsNumber()
    precio: number;

    @IsOptional()
    @IsNumber()
    categoriaId: number;

    @IsNotEmpty()
    @IsString()
    fechasDisponibles: string;

    @IsNotEmpty()
    @IsString()
    CamposDisponibles: string;

    @IsArray({ each: true })
    @IsString()
    @IsOptional()
    destinoImage?: string[];

}
