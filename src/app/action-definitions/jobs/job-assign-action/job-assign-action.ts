import { Injectable } from '@angular/core';
import { ActionDefinition } from '../../action-definition';
import { JobAssignActionParams } from './job-assign-action-params';
import { ActionDefinitionContextMenu } from '../../action-definition-context-menu';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class JobAssignAction extends ActionDefinition<JobAssignActionParams> {
  invoke(params: JobAssignActionParams): any | Observable<any> {
    console.log('job assign invoke');
  }

  protected getMenu(): ActionDefinitionContextMenu {
    return {
      name: 'Assign to User',
      icon: 'how_to_reg',
    };
  }

}
