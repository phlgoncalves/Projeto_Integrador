import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString, IsBoolean, IsArray, IsUUID } from "class-validator";

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

  @IsNotEmpty()
  @ApiProperty({
    example: 'b3d52ae3-2c3e-4db3-8a11-3dbb14a6f8b6',
    description:
      'ID do usuário que está realizando a denúncia.',
  })
  usuarioId: string;


}
