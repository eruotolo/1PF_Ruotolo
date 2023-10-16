import { Component, Inject } from '@angular/core';
import {
    AbstractControl,
    FormBuilder,
    FormControl,
    FormGroup,
    Validators,
} from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Student } from '../../../shared/interfaces/student.student';

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
        Validators.minLength(2),
    ]);
    lastnameControl = new FormControl('', [
        Validators.required,
        Validators.minLength(2),
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
        Validators.minLength(3),
    ]);

    // CONSTRUCTOR
    constructor(
        private formBuilder: FormBuilder,
        private matDialogRef: MatDialogRef<AbmStudentComponent>,
        // RECIBO DATA
        @Inject(MAT_DIALOG_DATA) public student?: Student,
    ) {
        this.studentForm = this.formBuilder.group({
            name: this.nameControl,
            lastname: this.lastnameControl,
            email: this.emailControl,
            age: this.ageControl,
            course: this.courseControl,
        });

        if (this.student) {
            this.studentForm.patchValue(this.student);
        }
    }

    /*onSubmit(): void {
        if (this.studentForm.invalid) {
            alert(
                'El formulario es inválido. Por favor, complete los campos correctamente.',
            );
            this.studentForm.markAllAsTouched();
        } else {
            this.matDialogRef.close(this.studentForm.value);
        }
    }*/
    onSubmit(): void {
        if (this.studentForm.invalid) {
            // Muestra un alert si el formulario es inválido
            alert(
                'El formulario es inválido. Por favor, complete los campos correctamente.',
            );
            this.studentForm.markAllAsTouched();
        } else {
            const formData = this.studentForm.value;
            // Muestra un alert con los datos del formulario en formato JSON
            alert(JSON.stringify(formData, null, 2));
            this.matDialogRef.close(formData);
        }
    }
}
