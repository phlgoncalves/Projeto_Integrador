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

  async validate(value: any, args: ValidationArguments): Promise<boolean> {
    const objeto = args.object as any;
    const idIgnorar = objeto?.ID;
    return this.classeUsuarioService.validaEmail(value, idIgnorar);
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
