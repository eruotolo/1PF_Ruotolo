import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FullnamePipe } from './fullname.pipe';
import { UppercasePipe } from './uppercase.pipe';

@NgModule({
    declarations: [FullnamePipe, UppercasePipe],
    exports: [FullnamePipe],
    imports: [CommonModule],
})
export class PipesModule {}
