import { Injectable, Injector } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { UserDataModel } from '../models/data-layer/user-data.model';
import { JobUserModel } from '../models/presentation-layer/job.model';
import { UserModel } from '../models/presentation-layer/user.model';
import { map } from 'rxjs/operators';

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

  readList$(): Observable<UserModel[]> {
    return this.usersSource$
      .pipe(
        map(users => users.map(user => ({
            id: user.id,
            name: user.name,
            // fixme: count
            assignedJobsCount: 0,
          })),
        ),
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
