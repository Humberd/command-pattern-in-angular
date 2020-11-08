import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JobsTableComponent } from './jobs-table/jobs-table.component';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { ContextMenuModule } from '../context-menu/context-menu.module';

@NgModule({
  declarations: [JobsTableComponent],
  imports: [
    CommonModule,
    MatTableModule,
    MatButtonModule,
    MatIconModule,
    MatMenuModule,
    ContextMenuModule,
  ],
  exports: [JobsTableComponent]
})
export class JobsTableModule { }
