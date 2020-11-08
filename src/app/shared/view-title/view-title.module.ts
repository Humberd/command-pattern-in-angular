import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ViewTitleComponent } from './view-title/view-title.component';


@NgModule({
  declarations: [ViewTitleComponent],
  imports: [
    CommonModule
  ],
  exports: [ViewTitleComponent]
})
export class ViewTitleModule { }
