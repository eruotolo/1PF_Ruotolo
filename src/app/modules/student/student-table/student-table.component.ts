import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Student } from '../../../shared/interfaces/student.student';

@Component({
    selector: 'app-student-table',
    templateUrl: './student-table.component.html',
})
export class StudentTableComponent {
    @Input()
    dataSource: Student[] = [];

    @Output()
    deleteUser = new EventEmitter<number>();

    @Output()
    editUser = new EventEmitter<Student>();

    displayedColumns: string[] = [
        'id',
        'fullname',
        'age',
        'email',
        'course',
        'regDate',
        'actions',
    ];
}
