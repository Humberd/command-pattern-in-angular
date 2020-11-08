import { Injectable, Injector } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UserDataModel } from '../models/data-layer/user-data.model';
import { JobUserModel } from '../models/presentation-layer/job.model';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  private readonly usersSource$ = new BehaviorSubject<UserDataModel[]>([]);
  // private readonly jobsService = this.injector.get(JobsService);

  constructor(private injector: Injector) {
    this.usersSource$.next(
      [
        {
          id: '1',
          name: 'Alice',
        },
        {
          id: '2',
          name: 'Bob',
        },
        {
          id: '4',
          name: 'Chuck',
        },
      ],
    );
  }

  readForJob(userId: string): JobUserModel {
    const foundUser = this.usersSource$.value.find(user => user.id === userId);
    if (!foundUser) {
      throw Error(`invalid user: ${userId}`);
    }

    return {
      id: foundUser.id,
      name: foundUser.name,
    };
  }
}
