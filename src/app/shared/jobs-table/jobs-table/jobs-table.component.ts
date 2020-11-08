import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { JobModel } from '../../../models/presentation-layer/job.model';

@Component({
  selector: 'app-jobs-table',
  templateUrl: './jobs-table.component.html',
  styleUrls: ['./jobs-table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JobsTableComponent {
  @Input() jobs: JobModel[];

  displayedColumns = ['name', 'status', 'assignedUser'];


}
