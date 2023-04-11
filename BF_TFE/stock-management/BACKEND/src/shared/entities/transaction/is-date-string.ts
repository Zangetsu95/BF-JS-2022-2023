import {
  registerDecorator,
  ValidationArguments,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';

@ValidatorConstraint({ async: true })
export class IsDateStringConstraint implements ValidatorConstraintInterface {
  validate(value: any, args: ValidationArguments) {
    const date = new Date(value);
    return !isNaN(date.getTime());
  }

  defaultMessage(args: ValidationArguments) {
    return 'La date doit être une chaîne de caractères valide au format JJ/MM/AAAA';
  }
}

export function IsDateString(validationOptions?: ValidationOptions) {
  return function (object: Record<string, any>, propertyName: string) {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [],
      validator: IsDateStringConstraint,
    });
  };
}
