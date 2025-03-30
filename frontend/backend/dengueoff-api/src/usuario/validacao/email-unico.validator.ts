/* eslint-disable @typescript-eslint/no-unused-vars */
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
  constructor(private classeUsuarioService: UsuarioService) {}

  validate(value: any, validationArguments?: ValidationArguments): boolean {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-argument
    const validarEmail = this.classeUsuarioService.validaEmail(value);
    return !validarEmail;
  }
}

export const EmailUnico = (opcaoValidacao: ValidationOptions) => {
  return (objeto: object, propriedade: string) => {
    registerDecorator({
      target: objeto.constructor,
      propertyName: propriedade,
      options: opcaoValidacao,
      constraints: [],
      validator: EmailUnicoValidator,
    });
  };
};
