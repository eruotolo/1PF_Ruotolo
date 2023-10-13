import { Component } from '@angular/core';
import {
    AbstractControl,
    FormBuilder,
    FormControl,
    FormGroup,
    Validators,
} from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

// FUNCIÓN CONTROL DE INGRESO EMAIL
function emailValidator(
    control: AbstractControl,
): { [key: string]: boolean } | null {
    const email = control.value;
    // Expresión regular para validar el formato de correo electrónico
    const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (!emailPattern.test(email)) {
        return { invalidEmail: true };
    }
    return null;
}

@Component({
    selector: 'app-abm-student',
    templateUrl: './abm-student.component.html',
    styleUrls: ['./abm-student.component.scss'],
})
export class AbmStudentComponent {
    // REGISTRO FORMULARIO
    studentForm: FormGroup;

    // CONTROL DE VALIDACIÓN
    nameControl = new FormControl('', [
        Validators.required,
        Validators.minLength(4),
    ]);
    lastnameControl = new FormControl('', [
        Validators.required,
        Validators.minLength(4),
    ]);
    ageControl = new FormControl('', [
        Validators.required,
        Validators.pattern('^[0-9]*$'),
    ]);
    emailControl = new FormControl('', [
        Validators.required,
        Validators.minLength(10),
        emailValidator,
    ]);
    courseControl = new FormControl('', [
        Validators.required,
        Validators.minLength(6),
    ]);

    // CONSTRUCTOR
    constructor(
        private formBuilder: FormBuilder,
        private matDialogRef: MatDialogRef<AbmStudentComponent>,
    ) {
        this.studentForm = this.formBuilder.group({
            name: this.nameControl,
            lastname: this.lastnameControl,
            email: this.emailControl,
            age: this.ageControl,
            course: this.courseControl,
        });
    }

    onSubmit(): void {
        if (this.studentForm.invalid) {
            this.studentForm.markAllAsTouched();
        } else {
            this.matDialogRef.close(this.studentForm.value);
        }
    }
}
