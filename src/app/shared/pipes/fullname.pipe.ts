import { Pipe, PipeTransform } from '@angular/core';
import { Student } from '../interfaces/student.student';

@Pipe({
    name: 'fullname',
})
export class FullnamePipe implements PipeTransform {
    transform(value: Student, ...args: unknown[]): unknown {
        const newValue = `${value.name} ${value.lastname}`;
        switch (args[0]) {
            case 'mayuscula':
                return newValue.toUpperCase();
            case 'minuscula':
                return newValue.toLowerCase();
            default:
                return newValue;
        }
    }
}
