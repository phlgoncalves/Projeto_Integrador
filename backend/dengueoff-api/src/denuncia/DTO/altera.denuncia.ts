import { ApiPropertyOptional } from "@nestjs/swagger";
import { IsNotEmpty, IsString, IsBoolean, IsArray, IsOptional } from "class-validator"

export class alteraDenunciaDto {

  @IsString()
  @IsNotEmpty({ message: 'Não pode ser vazio' })
  @IsOptional()
  @ApiPropertyOptional({
    example: 'Terreno abandonado',
    description:
      'Esse campo vai ser utilizado como identificação da descrição: Terreno, casa abandonada, etc. ',
  })
  descricao: string;

  @IsArray()
  @IsNotEmpty()
  @IsOptional()
  @ApiPropertyOptional({
    example: 'Fotos',
    description:
      'Esse campo será responsável pela imagem da denúncia.',
  })
  fotos: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  @ApiPropertyOptional({
    example: '17014310',
    description:
      'Esse campo vai ser utilizado para informar CPF',
  })
  cep: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  @ApiPropertyOptional({
    example: 'A-25',
    description:
      'Complemento do lugar para denúncia',
  })
  complemento: string;

  @IsBoolean()
  @IsOptional()
  @ApiPropertyOptional({
    example: 'True',
    description:
      'Se verdadeiro a denúncia não aparecerá com o nome do denunciador',
  })
  anonimato: boolean;
}
