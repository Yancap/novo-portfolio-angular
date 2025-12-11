import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectJobsModalComponent } from './project-jobs-modal.component';

describe('ProjectJobsModalComponent', () => {
  let component: ProjectJobsModalComponent;
  let fixture: ComponentFixture<ProjectJobsModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProjectJobsModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProjectJobsModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
