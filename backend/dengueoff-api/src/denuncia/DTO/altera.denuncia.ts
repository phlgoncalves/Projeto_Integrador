import { ApiPropertyOptional } from "@nestjs/swagger";
import { IsString, IsBoolean, IsArray, IsOptional } from "class-validator"

export class AlteraDenunciaDto {

  @IsString()
  @IsOptional()
  @ApiPropertyOptional({
    example: 'Lixo acumulado em terreno baldio',
    description:
      'Esse campo é opcional na alteração e vai ser utilizado para alterar a identificação da descrição: Terreno, casa abandonada, etc. ',
  })
  DESCRICAO: string;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional({
    example: 'foto3.jpg',
    description:
      'Esse campo é opcional na alteração e será responsável pelas imagens da denúncia.',
  })
  FOTOS: string;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional({
    example: '17014310',
    description:
      'Esse campo é opcional na alteração e vai ser utilizado para alterar CPF',
  })
  CEP: string;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional({
    example: 'Rua Sorocabana',
    description:
      'Campo opcional na alteração do complemento do lugar para denúncia para facilitar a localização',
  })
  RUA: string;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional({
    example: '1-26',
    description:
      'Campo opcional na alteração do complemento do lugar para denúncia para facilitar a localização',
  })
  NUMERO: string;


  @IsString()
  @IsOptional()
  @ApiPropertyOptional({
    example: 'próximo à praça',
    description:
      'Campo opcional na alteração do complemento do lugar para denúncia para facilitar a localização',
  })
  COMPLEMENTO: string;

  @IsBoolean()
  @IsOptional()
  @ApiPropertyOptional({
    example: 'True',
    description:
      'Se verdadeira a denúncia não aparecerá com o nome do denunciador',
  })
  ANONIMATO: boolean;
}
