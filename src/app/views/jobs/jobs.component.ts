import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { JobsService } from '../../services/jobs.service';

@Component({
  selector: 'app-jobs',
  templateUrl: './jobs.component.html',
  styleUrls: ['./jobs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class JobsComponent implements OnInit {

  constructor(public jobsService: JobsService) { }

  ngOnInit(): void {

  }

}
