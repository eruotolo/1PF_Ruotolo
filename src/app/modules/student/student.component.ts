import { Component } from '@angular/core';
import { Student } from '../../shared/interfaces/student.student';

import { MatDialog } from '@angular/material/dialog';

import { StudentDialogComponent } from '../../shared/dialogs/student-dialog/student-dialog.component';

@Component({
    selector: 'app-student',
    templateUrl: './student.component.html',
    styleUrls: ['./student.component.scss'],
})
export class StudentComponent {
    students: Student[] = [
        {
            id: 1,
            name: 'John',
            lastname: 'Doe',
            age: 20,
            email: 'example@gmail.com',
            course: 'Math',
            regDate: new Date(),
        },
        {
            id: 2,
            name: 'Jane',
            lastname: 'Smith',
            age: 22,
            email: 'example@gmail.com',
            course: 'English',
            regDate: new Date(),
        },
        {
            id: 3,
            name: 'Michael',
            lastname: 'Johnson',
            age: 19,
            email: 'example@gmail.com',
            course: 'Science',
            regDate: new Date(),
        },
        {
            id: 4,
            name: 'Emily',
            lastname: 'Williams',
            age: 21,
            email: 'example@gmail.com',
            course: 'History',
            regDate: new Date(),
        },
        {
            id: 5,
            name: 'Daniel',
            lastname: 'Brown',
            age: 20,
            email: 'example@gmail.com',
            course: 'Geography',
            regDate: new Date(),
        },
        {
            id: 6,
            name: 'Olivia',
            lastname: 'Jones',
            age: 22,
            email: 'example@gmail.com',
            course: 'Art',
            regDate: new Date(),
        },
        {
            id: 7,
            name: 'Matthew',
            lastname: 'Davis',
            age: 19,
            email: 'example@gmail.com',
            course: 'Music',
            regDate: new Date(),
        },
        {
            id: 8,
            name: 'Sophia',
            lastname: 'Miller',
            age: 21,
            email: 'example@gmail.com',
            course: 'Physics',
            regDate: new Date(),
        },
        {
            id: 9,
            name: 'David',
            lastname: 'Wilson',
            age: 20,
            email: 'example@gmail.com',
            course: 'Chemistry',
            regDate: new Date(),
        },
        {
            id: 10,
            name: 'Emma',
            lastname: 'Taylor',
            age: 22,
            email: 'example@gmail.com',
            course: 'Biology',
            regDate: new Date(),
        },
    ];

    // CONSTRUCTOR DIALOG
    private dataSource: any;

    constructor(private dialogStudent: MatDialog) {}

    // AGREGAR ESTUDIANTE
    abrirPopUpStudent(): void {
        /*this.dialogStudent.open(StudentDialogComponent, {
            width: '820px',
        });*/
        this.dialogStudent
            .open(StudentDialogComponent)
            .afterClosed()
            .subscribe({
                next: (v) => {
                    if (!!v) {
                        this.students = [
                            ...this.students,
                            {
                                ...v,
                                id: this.dataSource.data.length + 1,
                            },
                        ];
                    }
                },
            });
    }

    //EDITAR ESTUDIANTE

    onEditStudent(student: Student): void {
        this.dialogStudent
            .open(StudentDialogComponent, {
                data: student,
            })
            .afterClosed()
            .subscribe({
                next: (v) => {
                    if (!!v) {
                        this.students = this.students.map((s) =>
                            s.id === student.id ? { ...s, ...v } : s,
                        );
                    }
                },
            });
    }

    //ELIMINAR ESTUDIANTE
    onDeleteStudent(studentId: number): void {
        this.students = this.students.filter((s) => s.id !== studentId);
    }
}
