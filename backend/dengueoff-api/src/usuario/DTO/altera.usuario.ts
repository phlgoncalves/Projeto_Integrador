import {
  IsEmail,
  IsInt,
  IsNotEmpty,
  IsOptional,
  IsString,
  MinLength,
} from 'class-validator';
import { EmailUnico } from '../validacao/email-unico.validator';
import { SenhaForte } from '../validacao/senha-forte.validator';
import { ApiPropertyOptional } from '@nestjs/swagger';

export class alteraUsuarioDTO {
  @IsString()
  @IsNotEmpty({ message: 'nome nao pode ser vazio' })
  @IsOptional()
  @ApiPropertyOptional({
    example: 'Pedro Gonçalves',
    description:
      'Esse campo vai ser utilizado como identificação do usuário, deve ser informado um nome completo',
  })
  NOME: string;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional({
    example: '1992-09-22',
    description:
      'Esse campo identifica a idade do usuário, deve ser prenchido com a idade correta',
  })
  DATANASC: string;

  @IsEmail(undefined, { message: 'email é inválido' })
  @EmailUnico({ message: 'Email já cadastrado, tente novamente' })
  @IsOptional()
  @ApiPropertyOptional({
    example: 'pedro@gmail.com',
    description:
      'Esse campo irá ser login do usuário, deve ser um email válido e único',
  })
  EMAIL: string;

  @IsString()
  @MinLength(8, { message: 'CEP deve conter pelo menos 8 digitos' })
  @IsOptional()
  @ApiPropertyOptional({
    example: '17014000',
    description: 'Deve ser enviado um CEP valido'
  })
  CEP: string;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional({
    example: 'Rua Sorocabana',
    description: 'Deve ser enviado uma rua valida'
  })
  RUA: string;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional({
    example: '1-26',
    description: 'Deve ser enviado um número valido'
  })
  NUMERO: string;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional({
    example: 'Apartamento 123',
    description: 'Deve ser informado o complemento do endereço'
  })
  COMPLEMENTO: string;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional({
    example: 'Bauru',
    description: 'Deve ser informado a cidade correta'
  })
  CIDADE: string;

  @IsString()
  @IsOptional()
  @ApiPropertyOptional({
    example: '981872022',
    description: 'Esse campo identifica o telefone do usuário',
  })
  TELEFONE: string;

  @MinLength(6, { message: 'Senha precisa de pelo menos 6 digitos' })
  @SenhaForte({ message: 'Senha muito fraca, tente novamente' })
  @IsOptional()
  @ApiPropertyOptional({
    example: 'SenhaForte186',
    description:
      'A senha deve ter números, letras maiúsculas e caracteres especiais',
  })
  SENHA: string;
}
