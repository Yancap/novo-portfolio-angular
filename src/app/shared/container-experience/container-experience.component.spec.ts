import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerExperienceComponent } from './container-experience.component';

describe('ContainerExperienceComponent', () => {
  let component: ContainerExperienceComponent;
  let fixture: ComponentFixture<ContainerExperienceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContainerExperienceComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ContainerExperienceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
