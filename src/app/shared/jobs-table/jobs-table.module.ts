import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobsTableComponent } from './jobs-table/jobs-table.component';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [JobsTableComponent],
  imports: [
    CommonModule,
    MatTableModule,
  ],
  exports: [JobsTableComponent]
})
export class JobsTableModule { }
