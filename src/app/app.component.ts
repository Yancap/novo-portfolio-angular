import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ApresentacaoComponent } from './modules/apresentacao/apresentacao.component';
import { ConhecimentosTecnicosComponent } from './modules/conhecimentos-tecnicos/conhecimentos-tecnicos.component';
import { ExperienciasComponent } from './modules/experiencias/experiencias.component';
import { ProjetosComponent } from './modules/projetos/projetos.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    ApresentacaoComponent,
    ConhecimentosTecnicosComponent,
    ExperienciasComponent,
    ProjetosComponent,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'novo-portfolio-angular';
}
