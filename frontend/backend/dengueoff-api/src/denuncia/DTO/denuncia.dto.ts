import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, IsBoolean, IsArray, ArrayNotEmpty, IsUUID } from "class-validator";

export class CriaDenunciaDto {

    @IsString()
    @IsNotEmpty({ message: 'Não pode ser vazio' })
    @ApiProperty({
        example: 'Terreno abandonado',
        description:
            'Esse campo vai ser utilizado como identificação da descrição: Terreno, casa abandonada, etc. ',
    })
    descricao: string;

    @IsArray()
    @IsNotEmpty()
    @ApiProperty({
        example: 'Fotos',
        description:
            'Esse campo será responsável pela imagem da denúncia.',
    })
    fotos: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        example: '17014310',
        description:
            'Esse campo vai ser utilizado para informar CPF',
    })
    cep: string;

    @IsString()
    @IsNotEmpty()
    @ApiProperty({
        example: 'A-25',
        description:
            'Complemento do lugar para denúncia',
    })
    complemento: string;

    @IsBoolean()
    @ApiProperty({
        example: 'True',
        description:
            'Se verdadeiro a denúncia não aparecerá com o nome do denunciador',
    })
    anonimato: boolean;
}
