import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, IsBoolean, IsArray } from "class-validator";

export class CriaDenunciaDto {

  @IsString()
  @IsNotEmpty({ message: 'Não pode ser vazio' })
  @ApiProperty({
    example: 'Lixo acumulado em terreno baldio',
    description:
      'Esse campo vai ser utilizado como identificação da descrição: Terreno, casa abandonada, etc. ',
  })
  DESCRICAO: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: 'foto1.jpg", "foto2.jpg',
    description:
      'Esse campo será responsável pela imagem da denúncia.',
  })
  FOTOS: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: '17014310',
    description:
      'Esse campo vai ser utilizado para informar CPF',
  })
  CEP: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: 'Rua Sorocabana',
    description:
      'Esse campo vai ser utilizado para informar Rua',
  })
  RUA: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: '1-26',
    description:
      'Esse campo vai ser utilizado para informar numero da quadra',
  })
  NUMERO: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: 'Santa Clara',
    description:
      'Esse campo vai ser utilizado para informar o bairro da denuncia',
  })
  BAIRRO: string;

  @IsString()
  @IsNotEmpty()
  @ApiProperty({
    example: 'próximo à praça',
    description:
      'Esse campo é utilizado para informar o complemento do lugar para denúncia para facilitar a localização',
  })
  COMPLEMENTO: string;

  @IsBoolean()
  @ApiProperty({
    example: 'false',
    description:
      'Se verdadeiro a denúncia não aparecerá com o nome do denunciador',
  })
  ANONIMATO: boolean;

  @IsNotEmpty()
  @ApiProperty({
    example: 'b3d52ae3-2c3e-4db3-8a11-3dbb14a6f8b6',
    description:
      'ID do usuário que está realizando a denúncia.',
  })
  USUARIOID: string;
}
