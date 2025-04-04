import { IsNotEmpty, IsString, IsBoolean, IsArray, ArrayNotEmpty, IsUUID } from "class-validator";

export class CriaDenunciaDto {

@IsNotEmpty()
@IsUUID()
usuarioId: string;

@IsNotEmpty()
@IsString()
descricao: string;

@IsArray()
@IsNotEmpty()
@ArrayNotEmpty()
fotos: string;

@IsString()
@IsNotEmpty()
cep: string;

@IsString()
@IsNotEmpty()
complemento: string;

@IsBoolean()
anonimato: boolean;
    logradouro: any;


}
