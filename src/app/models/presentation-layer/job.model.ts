import { JobStatusEnum } from '../data-layer/job-status.enum';

export interface JobModel {
  id: string;
  name: string;
  status: JobStatusEnum;
  assignedUser?: JobUserModel;
}

export interface JobUserModel {
  id: string;
  name: string;
}
