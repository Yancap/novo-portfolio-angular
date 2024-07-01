import { Component } from '@angular/core';
import { JanelaRedesComponent } from '../../shared/janela-redes/janela-redes.component';
import { JanelaCertificacoesComponent } from '../../shared/janela-certificacoes/janela-certificacoes.component';

@Component({
  selector: 'app-apresentacao',
  standalone: true,
  imports: [JanelaRedesComponent, JanelaCertificacoesComponent],
  templateUrl: './apresentacao.component.html',
  styleUrl: './apresentacao.component.scss'
})
export class ApresentacaoComponent {

}
