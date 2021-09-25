import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from './highlight.directive';
import { ForbiddenValuesDirective } from './forbidden-values.directive';



@NgModule({
  declarations: [
    HighlightDirective,
    ForbiddenValuesDirective
  ],
  imports: [
    CommonModule
  ],
  exports: [HighlightDirective, ForbiddenValuesDirective]
})
export class AppSharedModule { }
