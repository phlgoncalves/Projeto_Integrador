import { IsNotEmpty, IsString, IsBoolean, IsUUID, IsOptional} from 'class-validator';

export class CreateDenunciaDto {
  @IsNotEmpty()
  @IsString()
  @IsOptional()
  descricao: string;

  @IsNotEmpty()
  @IsString()
  @IsOptional()
  fotos: string;

  @IsNotEmpty()
  @IsString()
  @IsOptional()
  endereco: string;

  @IsNotEmpty()
  @IsString()
  @IsOptional()
  cep: string;

  @IsString()
  @IsOptional()
  complemento?: string;

  @IsNotEmpty()
  @IsBoolean()
  @IsOptional()
  anonimato: boolean;

  @IsNotEmpty()
  @IsUUID()
  @IsOptional()
  usuarioId: string;
}
