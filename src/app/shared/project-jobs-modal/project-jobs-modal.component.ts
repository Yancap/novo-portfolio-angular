import { Component, OnInit } from '@angular/core';
import { SvgComponent } from '../svg/svg.component';
import { SafeHtmlPipe } from '../../core/pipes/safe-html/safe-html.pipe';

@Component({
  selector: 'app-project-jobs-modal',
  standalone: true,
  imports: [SvgComponent, SafeHtmlPipe],
  templateUrl: './project-jobs-modal.component.html',
  styleUrl: './project-jobs-modal.component.scss',
})
export class ProjectJobsModalComponent implements OnInit {
  onClose!: () => void;
  jobProjects?: JobProjects[] | null;

  ngOnInit(): void {
    console.log(this.jobProjects);
  }
}
