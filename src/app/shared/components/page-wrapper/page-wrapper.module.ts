import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PageWrapperComponent} from './page-wrapper.component';
import {MatSidenavModule} from "@angular/material/sidenav";
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {ToolbarModule} from "../../../core/layout/toolbar/toolbar.module";
import {HomeModule} from "../../../modules/home/home.module";
import {DialogsModule} from "../../dialogs/dialogs.module";





@NgModule({
    declarations: [
        PageWrapperComponent
    ],
    exports: [
        PageWrapperComponent
    ],
    imports: [
        CommonModule,
        MatSidenavModule,
        MatButtonModule,
        MatIconModule,
        ToolbarModule,
        HomeModule,
        DialogsModule
    ]
})
export class PageWrapperModule {
}
