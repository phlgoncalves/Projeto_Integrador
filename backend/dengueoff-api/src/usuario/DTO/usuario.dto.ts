import { IsEmail, IsInt, IsNotEmpty, IsString, MaxLength, MinLength } from 'class-validator';
import { EmailUnico } from '../validacao/email-unico.validator';
import { SenhaForte } from '../validacao/senha-forte.validator';
import { ApiProperty } from '@nestjs/swagger';

export class criaUsuarioDTO {
  @IsString()
  @IsNotEmpty({ message: 'nome nao pode ser vazio' })
  @ApiProperty({
    example: 'Pedro Gonçalves',
    description:
      'Esse campo vai ser utilizado como identificação do usuário, deve ser informado um nome completo',
  })
  NOME: string;

  @IsString()
  @IsNotEmpty({ message: 'CPF não pode ficar vazio' })
  @MinLength(11, { message: 'Digite apenas os números' })
  @MaxLength(11, { message: 'Digite apenas os números' })
  @ApiProperty({
    example: '60364818883',
    description:
      'Esse campo vai ser utilizado como identificação única do usuário, deve ser informado o CPF',
  })
  CPF: string;

  @IsString()
  @ApiProperty({
    example: '1992-09-22',
    description:
      'Esse campo identifica a idade do usuário, deve ser prenchido com a idade correta',
  })
  DATANASC: string;

  @IsEmail(undefined, { message: 'email é inválido' })
  @EmailUnico({ message: 'Email já cadastrado, tente novamente' })
  @ApiProperty({
    example: 'pedro@gmail.com',
    description:
      'Esse campo irá ser login do usuário, deve ser um email válido e único',
  })
  EMAIL: string;

  @IsString()
  @MinLength(8, { message: 'CEP deve conter pelo menos 8 digitos' })
  @ApiProperty({
    example: '17014000',
    description: 'Deve ser enviado um CEP valido'
  })
  CEP: string;

  @IsString()
  @ApiProperty({
    example: 'Rua Sorocabana',
    description: 'Deve ser enviado uma rua valida'
  })
  RUA: string;

  @IsString()
  @ApiProperty({
    example: '1-26',
    description: 'Deve ser enviado um número valido'
  })
  NUMERO: string;

  @IsString()
  @ApiProperty({
    example: 'Santa Clara',
    description: 'Deve ser enviado um bairro existente'
  })
  BAIRRO: string;

  @IsString()
  @ApiProperty({
    example: 'Apartamento 123',
    description: 'Deve ser informado o complemento do endereço'
  })
  COMPLEMENTO: string;

  @IsString()
  @ApiProperty({
    example: 'Apartamento 123',
    description: 'Deve ser informado o complemento do endereço'
  })
  CIDADE: string;

  @IsString()
  @ApiProperty({
    example: '981872022',
    description: 'Esse campo identifica o telefone do usuário',
  })
  TELEFONE: string;

  @MinLength(6, { message: 'Senha precisa de pelo menos 6 digitos' })
  @SenhaForte({ message: 'Senha muito fraca, tente novamente' })
  @ApiProperty({
    example: 'SenhaForte186',
    description:
      'A senha deve ter números, letras maiúsculas e caracteres especiais',
  })
  SENHA: string;
}
