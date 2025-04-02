import { IsEmail, MinLength } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class LoginUsuarioDto {
  @IsEmail(undefined, { message: 'email inválido' })
  @ApiProperty({
    example: 'peedro@gmail.com',
    description: 'Esse é para validação de email de Login',
  })
  email: string;

  @MinLength(6, { message: 'senha deve ter no minimo 6 digitos' })
  @ApiProperty({
    example: 'senhaForte483',
    description: 'Esse campo é para validação da senha',
  })
  senha: string;
}
