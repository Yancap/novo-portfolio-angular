import { Component, Input, ViewChild, ViewContainerRef } from '@angular/core';
import { ButtonComponent } from '../button/button.component';
import { SvgComponent } from '../svg/svg.component';
import { SafeHtmlPipe } from '../../core/pipes/safe-html/safe-html.pipe';
import { ReplaySubject } from 'rxjs';
import { ProjectJobsModalComponent } from '../project-jobs-modal/project-jobs-modal.component';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-container-experience',
  standalone: true,
  imports: [ButtonComponent, SvgComponent, SafeHtmlPipe, DatePipe],
  templateUrl: './container-experience.component.html',
  styleUrl: './container-experience.component.scss',
})
export class ContainerExperienceComponent {
  @Input() dataJob: DataJobs = {
    company: '',
    startDate: '',
    endDate: '',
    role: '',
    text: [''],
    technologies: '',
  };

  public projectsSub: ReplaySubject<JobProjects[]> = new ReplaySubject(1);

  @ViewChild('projectJobsModal', { read: ViewContainerRef, static: true })
  projectJobsModalRef!: ViewContainerRef;

  public handleAction() {
    const componentRef = this.projectJobsModalRef.createComponent(
      ProjectJobsModalComponent
    );
    componentRef.instance.onClose = () => componentRef.destroy();
    componentRef.instance.jobProjects = this.dataJob.jobProjects;
    
  }
}
