import { Injectable } from '@angular/core';
import { ActionDefinition } from '../../action-definition';
import { JobCompleteActionParams } from './job-complete-action-params';
import { ActionDefinitionContextMenu } from '../../action-definition-context-menu';
import { Observable } from 'rxjs';
import { JobsService } from '../../../services/jobs.service';
import { JobStatusEnum } from '../../../models/data-layer/job-status.enum';

@Injectable({
  providedIn: 'root',
})
export class JobCompleteAction extends ActionDefinition<JobCompleteActionParams> {
  constructor(private jobsService: JobsService) {
    super();
  }

  invoke(params: JobCompleteActionParams): any | Observable<any> {
    return this.jobsService.setStatus(params.jobId, JobStatusEnum.DONE);
  }

  protected getMenu(): ActionDefinitionContextMenu {
    return {
      name: 'Complete',
      icon: 'done',
    };
  }

}
