import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JanelaRedesComponent } from './janela-redes.component';

describe('JanelaRedesComponent', () => {
  let component: JanelaRedesComponent;
  let fixture: ComponentFixture<JanelaRedesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JanelaRedesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JanelaRedesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
