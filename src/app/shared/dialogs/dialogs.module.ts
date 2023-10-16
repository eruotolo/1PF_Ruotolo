import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DialogsComponent } from './dialogs.component';

import { StudentDialogComponent } from './student-dialog/student-dialog.component';
import { StudentModule } from '../../modules/student/student.module';

import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';

@NgModule({
    declarations: [DialogsComponent, StudentDialogComponent],
    exports: [DialogsComponent],
    imports: [CommonModule, MatButtonModule, MatDialogModule, StudentModule],
})
export class DialogsModule {}
