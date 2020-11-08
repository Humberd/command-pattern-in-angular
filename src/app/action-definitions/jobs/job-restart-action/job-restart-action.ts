import { Injectable } from '@angular/core';
import { ActionDefinition } from '../../action-definition';
import { JobRestartActionParams } from './job-restart-action-params';
import { ActionDefinitionContextMenu } from '../../action-definition-context-menu';
import { Observable } from 'rxjs';
import { JobsService } from '../../../services/jobs.service';
import { JobStatusEnum } from '../../../models/data-layer/job-status.enum';

@Injectable({
  providedIn: 'root',
})
export class JobRestartAction extends ActionDefinition<JobRestartActionParams> {
  constructor(private jobsService: JobsService) {
    super();
  }

  invoke(params: JobRestartActionParams): any | Observable<any> {
    return this.jobsService.setStatus(params.jobId, JobStatusEnum.NEW);
  }

  protected getMenu(): ActionDefinitionContextMenu {
    return {
      name: 'Restart',
      icon: 'repeat',
    };
  }

}
