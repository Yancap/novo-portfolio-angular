import { Component } from '@angular/core';
import { SvgComponent } from "../svg/svg.component";

@Component({
  selector: 'app-project-jobs-modal',
  standalone: true,
  imports: [SvgComponent],
  templateUrl: './project-jobs-modal.component.html',
  styleUrl: './project-jobs-modal.component.scss'
})
export class ProjectJobsModalComponent {

  onClose!: () => void;
  jobProjects?: JobProjects[];
}
