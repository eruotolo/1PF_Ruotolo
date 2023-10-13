import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentComponent } from './student.component';
import { AbmStudentComponent } from './abm-student/abm-student.component';

// MODULOS NECESARIOS PARA FORMULARIOS.
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';

// IMPORTAR MATDIALOG MODULE
import { MatDialogModule } from '@angular/material/dialog';

// IMPORTAR TABLA
import { MatTableModule } from '@angular/material/table';
import { StudentTableComponent } from './student-table/student-table.component';
import { PipesModule } from '../../shared/pipes/pipes.module';

@NgModule({
    declarations: [
        StudentComponent,
        AbmStudentComponent,
        StudentTableComponent,
    ],
    exports: [StudentComponent, AbmStudentComponent],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        MatButtonModule,
        MatDialogModule,
        MatTableModule,
        PipesModule,
    ],
})
export class StudentModule {}
