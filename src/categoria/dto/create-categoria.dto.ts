import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateCategoriaDto {
    @IsNumber()
    @IsNotEmpty()
    id: number;

    @IsNotEmpty()
    @IsString()
    categoria: string;

    @IsNotEmpty()
    @IsString()
    slug: string;
}
