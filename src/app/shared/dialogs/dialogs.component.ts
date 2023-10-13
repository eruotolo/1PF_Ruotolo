import {Component} from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {StudentDialogComponent} from "./student-dialog/student-dialog.component";

@Component({
    selector: 'app-dialogs',
    template: `
        <p>
            dialogs works!
        </p>
    `
})
export class DialogsComponent {
    constructor(private dialogService: MatDialog) {}
    abrirStudentDialog():void{
        this.dialogService.open(StudentDialogComponent);
    }
}
