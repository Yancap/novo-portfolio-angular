import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConhecimentosTecnicosComponent } from './conhecimentos-tecnicos.component';

describe('ConhecimentosTecnicosComponent', () => {
  let component: ConhecimentosTecnicosComponent;
  let fixture: ComponentFixture<ConhecimentosTecnicosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConhecimentosTecnicosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ConhecimentosTecnicosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
