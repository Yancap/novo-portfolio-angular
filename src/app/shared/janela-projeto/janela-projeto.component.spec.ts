import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JanelaProjetoComponent } from './janela-projeto.component';

describe('JanelaProjetoComponent', () => {
  let component: JanelaProjetoComponent;
  let fixture: ComponentFixture<JanelaProjetoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JanelaProjetoComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JanelaProjetoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
