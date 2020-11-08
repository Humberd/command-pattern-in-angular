import { Injectable } from '@angular/core';
import { ActionDefinition } from '../../action-definition';
import { JobAssignActionParams } from './job-assign-action-params';
import { ActionDefinitionContextMenu } from '../../action-definition-context-menu';
import { Observable } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { JobUserAssignDialogComponent } from '../../../dialogs/job-user-assign-dialog/job-user-assign-dialog.component';
import { JobUserAssignDialogDataModel } from '../../../dialogs/job-user-assign-dialog/models/job-user-assign-dialog-data.model';

@Injectable({
  providedIn: 'root',
})
export class JobAssignAction extends ActionDefinition<JobAssignActionParams> {
  constructor(private dialogService: MatDialog) {
    super();
  }

  invoke(params: JobAssignActionParams): any | Observable<any> {
    const dialogData: JobUserAssignDialogDataModel = {
      jobId: params.jobId,
    };

    return this.dialogService.open(JobUserAssignDialogComponent, {
      data: dialogData,
    })
      .afterClosed();
  }

  protected getMenu(): ActionDefinitionContextMenu {
    return {
      name: 'Assign to User',
      icon: 'how_to_reg',
    };
  }

}
