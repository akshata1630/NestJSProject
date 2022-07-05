import { registerDecorator, ValidationOptions } from "class-validator";


export function IsNotBlank(property?: string, validationOptions?: ValidationOptions) { 
    return (objet: Object, propertyName: string) => { 
        registerDecorator({
            name: 'isNotBlank',
            target: objet.constructor,
            propertyName,
            constraints: [property],
            options: validationOptions,
            validator: {
                validate(value: any) {
                    return typeof value === 'string' && value.trim().length > 0;
                }
            }
        })
    }
}