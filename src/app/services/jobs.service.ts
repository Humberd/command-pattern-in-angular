import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { JobDataModel } from '../models/data-layer/job-data.model';
import { JobModel } from '../models/presentation-layer/job.model';
import { JobStatusEnum } from '../models/data-layer/job-status.enum';
import { map } from 'rxjs/operators';
import { UsersService } from './users.service';

@Injectable({
  providedIn: 'root',
})
export class JobsService {
  private readonly jobsSource$ = new BehaviorSubject<JobDataModel[]>([]);

  constructor(private usersService: UsersService) {
    this.jobsSource$.next(
      [
        {
          id: '1',
          name: 'Download a movie file',
          status: JobStatusEnum.DONE,
        },
        {
          id: '2',
          name: 'Validate a video',
          status: JobStatusEnum.IN_PROGRESS,
          assignedUserId: '2',
        },
        {
          id: '3',
          name: 'Apply watermark on a video',
          status: JobStatusEnum.IN_PROGRESS,
          assignedUserId: '1',
        },
        {
          id: '4',
          name: 'Send video to a translator',
          status: JobStatusEnum.NEW,
          assignedUserId: '1',
        },
        {
          id: '5',
          name: 'Correct the translations',
          status: JobStatusEnum.NEW,
        },
        {
          id: '6',
          name: 'Bake translations onto a video',
          status: JobStatusEnum.NEW,
          assignedUserId: '2',
        },
        {
          id: '7',
          name: 'Send a video file to a theater',
          status: JobStatusEnum.NEW,
        },
      ],
    );
  }

  readList$(): Observable<JobModel[]> {
    return this.jobsSource$
      .pipe(
        map(jobs => jobs.map(job => ({
          id: job.id,
          name: job.name,
          status: job.status,
          assignedUser: this.usersService.readForJob(job.assignedUserId),
        }))),
      );
  }

}
