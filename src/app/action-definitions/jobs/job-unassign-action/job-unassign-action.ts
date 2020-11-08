import { Injectable } from '@angular/core';
import { ActionDefinition } from '../../action-definition';
import { JobUnassignActionParams } from './job-unassign-action-params';
import { ActionDefinitionContextMenu } from '../../action-definition-context-menu';
import { JobsService } from '../../../services/jobs.service';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class JobUnassignAction extends ActionDefinition<JobUnassignActionParams> {
  constructor(private jobsService: JobsService) {
    super();
  }

  invoke(params: JobUnassignActionParams): any | Observable<any> {
    return this.jobsService.setUser(params.jobId, undefined);
  }

  protected getMenu(): ActionDefinitionContextMenu {
    return {
      name: 'Unassign from User',
      icon: 'voice_over_off',
    };
  }

}
