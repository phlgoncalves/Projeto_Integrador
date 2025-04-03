import { IsNotEmpty, IsString, IsBoolean, IsUUID } from 'class-validator';

export class CreateDenunciaDto {
  @IsNotEmpty()
  @IsString()
  descricao: string;

  @IsNotEmpty()
  @IsString()
  fotos: string;

  @IsNotEmpty()
  @IsString()
  endereco: string;

  @IsNotEmpty()
  @IsString()
  cep: string;

  @IsString()
  complemento?: string;

  @IsNotEmpty()
  @IsBoolean()
  anonimato: boolean;

  @IsNotEmpty()
  @IsUUID()
  usuarioId: string;
}
