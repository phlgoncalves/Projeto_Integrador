import { Injectable } from '@nestjs/common';
import {
  ValidationArguments,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
  registerDecorator,
} from 'class-validator';
import * as zxcvbn from 'zxcvbn';

@Injectable()
@ValidatorConstraint({ async: true })
export class strongPassValidator implements ValidatorConstraintInterface {
  validate(value: string, validationArguments?: ValidationArguments): boolean {
    var validarSenha = false;
    if (value) {
      const result = zxcvbn(value);
      var validarSenha = result.score <= 2;
    }
    return !validarSenha;
  }
}

export const SenhaForte = (opcaoValidacao: ValidationOptions) => {
  return (objeto: object, propriedade: string) => {
    registerDecorator({
      target: objeto.constructor,
      propertyName: propriedade,
      options: opcaoValidacao,
      constraints: [],
      validator: strongPassValidator,
    });
  };
};
