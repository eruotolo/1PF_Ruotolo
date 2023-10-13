import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeComponent} from './home.component';
import {StudentModule} from "../student/student.module";



@NgModule({
    declarations: [
        HomeComponent
    ],
    exports: [
        HomeComponent,
    ],
    imports: [
        CommonModule,
        StudentModule
    ]
})
export class HomeModule {
}
