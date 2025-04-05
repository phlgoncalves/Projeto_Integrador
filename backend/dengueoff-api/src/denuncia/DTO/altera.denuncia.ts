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
  descricao: string;

  @IsArray()
  @IsOptional()
  @ApiPropertyOptional({
    example: '["foto1.jpg", "foto2.jpg"]',
    description:
      'Esse campo é opcional na alteração e será responsável pelas imagens da denúncia.',
  })
  fotos: string;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional({
    example: '17014310',
    description:
      'Esse campo é opcional na alteração e vai ser utilizado para alterar CPF',
  })
  cep: string;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional({
    example: 'próximo à praça',
    description:
      'Campo opcional na alteração do complemento do lugar para denúncia para facilitar a localização',
  })
  complemento: string;

  @IsBoolean()
  @IsOptional()
  @ApiPropertyOptional({
    example: 'True',
    description:
      'Se verdadeira a denúncia não aparecerá com o nome do denunciador',
  })
  anonimato: boolean;
}
