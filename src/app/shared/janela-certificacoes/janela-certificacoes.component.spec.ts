import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JanelaCertificacoesComponent } from './janela-certificacoes.component';

describe('JanelaCertificacoesComponent', () => {
  let component: JanelaCertificacoesComponent;
  let fixture: ComponentFixture<JanelaCertificacoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [JanelaCertificacoesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(JanelaCertificacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
