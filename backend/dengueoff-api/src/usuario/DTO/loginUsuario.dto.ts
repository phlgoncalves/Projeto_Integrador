import { IsEmail, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class loginUsuarioDto {
  @IsEmail(undefined, { message: 'email inválido' })
  @ApiProperty({
    example: 'pedro@gmail.com',
    description: 'Esse é para validação de email de Login',
  })
  EMAIL: string;

  @MinLength(6, { message: 'senha deve ter no minimo 6 digitos' })
  @ApiProperty({
    example: 'SenhaForte186',
    description: 'Esse campo é para validação da senha',
  })
  SENHA: string;
}
