import {
  ValidationArguments,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
  registerDecorator,
} from 'class-validator';
import { Injectable } from '@nestjs/common';
import { UsuarioService } from '../usuario.service';

@Injectable()
@ValidatorConstraint({ async: true })
export class EmailUnicoValidator implements ValidatorConstraintInterface {
  constructor(private classeUsuarioService: UsuarioService) { }

  async validate(value: any, validationArguments?: ValidationArguments): Promise<boolean> {
    const validarEmail = await this.classeUsuarioService.validaEmail(value);
    return validarEmail;
  }
}

export const EmailUnico = (opcoesValidacao: ValidationOptions) => {
  return (objeto: Object, propriedade: string) => {
    registerDecorator({
      target: objeto.constructor,
      propertyName: propriedade,
      options: opcoesValidacao,
      constraints: [],
      validator: EmailUnicoValidator
    })
  }
}
